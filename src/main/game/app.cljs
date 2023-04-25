(ns game.app)

;; Iniitalize canvas
(def canvas (.querySelector js/document "canvas"))
(def scoreEl (.querySelector js/document "#scoreEl"))
(def startGameButton (.querySelector js/document "#startGameButton"))
(def modalEl (.querySelector js/document "#modalEl"))
(def bigScoreEl (.querySelector js/document "#bigScoreEl"))
(def c (.getContext canvas "2d"))
(set! (.-width canvas) (.-innerWidth js/window))
(set! (.-height canvas) (.-innerHeight js/window))
(set! *warn-on-infer* false)



; javascript constructors

(defn build-player [x y radius color]
  {:x x
   :y y
   :radius radius
   :color color
   :draw (fn []
           (.beginPath c)
           (.arc c x y radius 0 (* 2 (.-PI js/Math)))
           (set! (.-fillStyle c) color)
           (.fill c))})

(defn build-enemy [x y radius color velocity]
  {:x x
   :y y
   :radius radius
   :color color
   :velocity velocity
   :update (fn []
             (.. c beginPath)
             (.. c  (arc x y radius 0 (* 2 (.-PI js/Math))))
             (set! (.. c -fillStyle) color)
             (.fill c)
             (build-enemy (+ (velocity :x) x) (+ (velocity :y) y) radius color velocity))})

(defn build-projectile [x y radius color velocity]
  {:x x
   :y y
   :radius radius
   :color color
   :velocity velocity
   :update (fn []
             (.. c beginPath)
             (.. c  (arc x y radius 0 (* 2 (.-PI js/Math))))
             (set! (.. c -fillStyle) color)
             (.fill c)
             (build-projectile (+ (velocity :x) x) (+ (velocity :y) y) radius color velocity))})

(defn build-particle [& {:keys [x y radius color velocity alpha]}]
  {:attributes {:x x
                :y y
                :radius radius
                :color color
                :velocity velocity
                :alpha alpha}
   :update (fn [& {:keys [x y radius color velocity alpha]}]
             (.. c save)
             (set! (.. c -globalAlpha ) alpha)
             (.. c beginPath)
             (.. c  (arc x y radius 0 (* 2 (.-PI js/Math))))
             (set! (.. c -fillStyle) color)
             (.fill c)
             (.. c restore)
             (build-particle {:x (+ (* 0.8 (velocity :x)) x)
                              :y (+ (* 0.8 (velocity :y)) y)
                              :radius radius
                              :color color
                              :velocity velocity
                              :alpha (- alpha 0.01)}))})
; initialise states 

(def x (/ (.-width canvas) 2))
(def y (/ (.-height canvas) 2))
(def player (build-player x y 10 "white"))
(def projectiles (atom []))
(def enemies (atom []))
(def particles (atom []))
(def score (atom 0))




;helper functions

(defn randomise-locations [radius]
  (rand-nth [[(rand-nth [(- 0 radius) (+ radius (.. canvas -width))]) (* (rand) (.. canvas -height))]
             [(* (rand) (.. canvas -width)) (rand-nth [(- 0 radius) (+ radius (.. canvas -height))])]]))



(defn generate-random-enemy []
  (let [radius (+ 7 (rand-int 26))
        [x y] (randomise-locations radius)
        color (str "hsl( " (* (rand) 360) ", 50%, 50%)")
        angle (.atan2 js/Math
                      (- (/ (.. canvas -height) 2) y)
                      (- (/ (.. canvas -width) 2) x))
        velocity {:x (.cos js/Math angle) :y (.sin js/Math angle)}]
    (build-enemy x y radius color velocity)))




(defn spawn-enemies []
  (let [enemy-fn (fn [] (reset! enemies (conj @enemies (generate-random-enemy))))]
    (js/setInterval enemy-fn 2000)))


(defn contact? [a b]
  (let [dist (.hypot js/Math (- (a :x) (b :x))
                     (- (a :y) (b :y)))]
    (if (< (- dist (b :radius) (a :radius)) 1)
      true
      false)))

(defn mapisize-vector [vect]
  (let [nums (range (count vect))]
    (zipmap nums vect)))

(defn vectorize-map [mapping]
  (into [] (map #(second %) mapping)))

(defn game-over? [player enemies]
  (let [collisions (map #(contact? player %) @enemies)]
    (if (some true? collisions)
      true
      nil)))

(defn concatv [list1 list2]
  (into [] (concat list1 list2)))

(defn off-screen? [object]
  (if (or (< (+ (object :x) (object :radius)) 0)
          (> (- (object :x) (object :radius)) (.. canvas -width))
          (< (+ (object :y) (object :radius)) 0)
          (> (- (object :y) (object :radius)) (.. canvas -height)))
    true
    nil))

(defn projection-handler [proj-index enem-index projectiles enemies]
  (let [enemy (get-in enemies [enem-index])
        projectile (get-in projectiles [proj-index])]
    (if
     (or (contact? projectile enemy)
         (off-screen? projectile))
     proj-index
     nil)))

(defn enemy-handler [proj-index enem-index projectiles enemies]
  (let [enemy (get-in enemies [enem-index])
        projectile (get-in projectiles [proj-index])
        current-particles (atom [])]
    (if (contact? projectile enemy)
      (let [new-radius (- (enemy :radius) 10)
            new-enemy (build-enemy (enemy :x)
                                   (enemy :y)
                                   new-radius
                                   (enemy :color)
                                   (enemy :velocity))]
        (swap! score #(+ 100 %)) 
        (set! (.. scoreEl -innerHTML) @score)
        (set! (.. bigScoreEl -innerHTML) @score)
        (reset! current-particles (into []
                                        (repeatedly (* 1.5 (enemy :radius))
                                                    #(build-particle {:x (new-enemy :x)
                                                                      :y (new-enemy :y)
                                                                      :alpha 1
                                                                      :radius (* 2 (rand))
                                                                      :color (new-enemy :color)
                                                                      :velocity {:x (* (* (rand) 5) (- (rand) 0.5))
                                                                                 :y (* (* (rand) 5) (- (rand) 0.5))}}))))
        (if (< new-radius 10)
          [enem-index @current-particles]
          [enem-index new-enemy @current-particles]))
      nil)))


(defn handle-enemies
  [projectiles enemies]
  (let [new-projectiles (mapv #((% :update)) @projectiles)
        new-enemies (mapv #((% :update)) @enemies) 
        res-particles (atom (mapv #((% :update) (% :attributes)) @particles))
        proj-map (atom (mapisize-vector new-projectiles))
        enem-map (atom (mapisize-vector new-enemies))]
    (doseq [enem-index (range (count new-enemies))]
      (doseq [proj-index (range (count new-projectiles))]
        (let [delete-proj (projection-handler
                           proj-index
                           enem-index
                           new-projectiles
                           new-enemies)
              delete-enem (enemy-handler
                           proj-index
                           enem-index
                           new-projectiles
                           new-enemies)]
          (swap! proj-map dissoc delete-proj)
          (if (> ( count delete-enem) 2)
            (let [[index entry new-particles] delete-enem] 
              (swap! enem-map assoc index entry)
              (swap! res-particles concatv new-particles))
            (let [[index new-particles] delete-enem]
              (swap! enem-map dissoc index)
              (swap! res-particles concatv new-particles))))))
    [(vectorize-map @proj-map) (vectorize-map @enem-map) @res-particles]))


; animations

(defn animate []
  (let [animation-frame (.. js/window (requestAnimationFrame animate))]
    (set! (.. c -fillStyle) "rgba(0 , 0, 0, 0.1)")
    (.. c (fillRect 0 0 (.. canvas -width) (.. canvas -height)))
    
    ((player :draw))
    (let [[new-projectiles new-enemies pre-particles]
          (handle-enemies projectiles enemies)]
      (reset! enemies new-enemies)
      (reset! projectiles new-projectiles) 
      (let [new-particles (mapv #((% :update) (% :attributes)) pre-particles)] 
         
        (reset! particles (filter #(>= ((% :attributes) :alpha) 0.01) new-particles))))
        
    (if (game-over? player enemies)
      (do 
        (.. js/window (cancelAnimationFrame animation-frame)) 
        (set! (.. modalEl -style -display) "flex"))

      nil)))
    
    
    


; event listeners 


(.addEventListener js/window
                   "click"
                   (fn [event]
                     (let [angle (.atan2 js/Math (- (.. event -clientY) (/ (.. canvas -height) 2)) (- (.. event -clientX) (/ (.. canvas -width) 2)))
                           velocity {:x (* 5 (.cos js/Math angle))
                                     :y (* 5 (.sin js/Math angle))}]
                       (reset! projectiles (conj @projectiles (build-projectile
                                                               (/ (.-width canvas) 2)
                                                               (/ (.-height canvas) 2)
                                                               5
                                                               "white"
                                                               velocity))))))

(defn init [] 
  (reset! projectiles [])
  (reset! enemies [])
  (reset! particles [])
  (reset! score 0))

(.addEventListener startGameButton
                    "click"
                    (fn []
                      (init)
                      (animate)
                      (spawn-enemies)
                      (set! (.. modalEl -style -display) "none")
                      (set! (.. scoreEl -innerHTML) 0)
                      (set! (.. bigScoreEl -innerHTML) 0)))
                      




; Ongoing functions


