goog.provide('game.app');
game.app.canvas = document.querySelector("canvas");
game.app.scoreEl = document.querySelector("#scoreEl");
game.app.startGameButton = document.querySelector("#startGameButton");
game.app.modalEl = document.querySelector("#modalEl");
game.app.bigScoreEl = document.querySelector("#bigScoreEl");
game.app.c = game.app.canvas.getContext("2d");
(game.app.canvas.width = window.innerWidth);
(game.app.canvas.height = window.innerHeight);
game.app.build_player = (function game$app$build_player(x,y,radius,color){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (){
game.app.c.beginPath();

game.app.c.arc(x,y,radius,(0),((2) * Math.PI));

(game.app.c.fillStyle = color);

return game.app.c.fill();
})], null);
});
game.app.build_enemy = (function game$app$build_enemy(x,y,radius,color,velocity){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity,new cljs.core.Keyword(null,"update","update",1045576396),(function (){
game.app.c.beginPath();

game.app.c.arc(x,y,radius,(0),((2) * Math.PI));

(game.app.c.fillStyle = color);

game.app.c.fill();

var G__34077 = ((velocity.cljs$core$IFn$_invoke$arity$1 ? velocity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : velocity.call(null,new cljs.core.Keyword(null,"x","x",2099068185))) + x);
var G__34078 = ((velocity.cljs$core$IFn$_invoke$arity$1 ? velocity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : velocity.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))) + y);
var G__34079 = radius;
var G__34080 = color;
var G__34081 = velocity;
return (game.app.build_enemy.cljs$core$IFn$_invoke$arity$5 ? game.app.build_enemy.cljs$core$IFn$_invoke$arity$5(G__34077,G__34078,G__34079,G__34080,G__34081) : game.app.build_enemy.call(null,G__34077,G__34078,G__34079,G__34080,G__34081));
})], null);
});
game.app.build_projectile = (function game$app$build_projectile(x,y,radius,color,velocity){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity,new cljs.core.Keyword(null,"update","update",1045576396),(function (){
game.app.c.beginPath();

game.app.c.arc(x,y,radius,(0),((2) * Math.PI));

(game.app.c.fillStyle = color);

game.app.c.fill();

var G__34082 = ((velocity.cljs$core$IFn$_invoke$arity$1 ? velocity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : velocity.call(null,new cljs.core.Keyword(null,"x","x",2099068185))) + x);
var G__34083 = ((velocity.cljs$core$IFn$_invoke$arity$1 ? velocity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : velocity.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))) + y);
var G__34084 = radius;
var G__34085 = color;
var G__34086 = velocity;
return (game.app.build_projectile.cljs$core$IFn$_invoke$arity$5 ? game.app.build_projectile.cljs$core$IFn$_invoke$arity$5(G__34082,G__34083,G__34084,G__34085,G__34086) : game.app.build_projectile.call(null,G__34082,G__34083,G__34084,G__34085,G__34086));
})], null);
});
game.app.build_particle = (function game$app$build_particle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34230 = arguments.length;
var i__5770__auto___34231 = (0);
while(true){
if((i__5770__auto___34231 < len__5769__auto___34230)){
args__5775__auto__.push((arguments[i__5770__auto___34231]));

var G__34232 = (i__5770__auto___34231 + (1));
i__5770__auto___34231 = G__34232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return game.app.build_particle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(game.app.build_particle.cljs$core$IFn$_invoke$arity$variadic = (function (p__34088){
var map__34089 = p__34088;
var map__34089__$1 = cljs.core.__destructure_map(map__34089);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34089__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34089__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34089__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34089__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34089__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34089__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),alpha], null),new cljs.core.Keyword(null,"update","update",1045576396),(function() { 
var G__34233__delegate = function (p__34090){
var map__34091 = p__34090;
var map__34091__$1 = cljs.core.__destructure_map(map__34091);
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34091__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34091__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34091__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34091__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var velocity__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34091__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var alpha__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34091__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
game.app.c.save();

(game.app.c.globalAlpha = alpha__$1);

game.app.c.beginPath();

game.app.c.arc(x__$1,y__$1,radius__$1,(0),((2) * Math.PI));

(game.app.c.fillStyle = color__$1);

game.app.c.fill();

game.app.c.restore();

return game.app.build_particle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),((0.8 * (velocity__$1.cljs$core$IFn$_invoke$arity$1 ? velocity__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : velocity__$1.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))) + x__$1),new cljs.core.Keyword(null,"y","y",-1757859776),((0.8 * (velocity__$1.cljs$core$IFn$_invoke$arity$1 ? velocity__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : velocity__$1.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))) + y__$1),new cljs.core.Keyword(null,"radius","radius",-2073122258),radius__$1,new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(alpha__$1 - 0.01)], null)], 0));
};
var G__34233 = function (var_args){
var p__34090 = null;
if (arguments.length > 0) {
var G__34234__i = 0, G__34234__a = new Array(arguments.length -  0);
while (G__34234__i < G__34234__a.length) {G__34234__a[G__34234__i] = arguments[G__34234__i + 0]; ++G__34234__i;}
  p__34090 = new cljs.core.IndexedSeq(G__34234__a,0,null);
} 
return G__34233__delegate.call(this,p__34090);};
G__34233.cljs$lang$maxFixedArity = 0;
G__34233.cljs$lang$applyTo = (function (arglist__34235){
var p__34090 = cljs.core.seq(arglist__34235);
return G__34233__delegate(p__34090);
});
G__34233.cljs$core$IFn$_invoke$arity$variadic = G__34233__delegate;
return G__34233;
})()
], null);
}));

(game.app.build_particle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(game.app.build_particle.cljs$lang$applyTo = (function (seq34087){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34087));
}));

game.app.x = (game.app.canvas.width / (2));
game.app.y = (game.app.canvas.height / (2));
game.app.player = game.app.build_player(game.app.x,game.app.y,(10),"white");
game.app.projectiles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
game.app.enemies = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
game.app.particles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
game.app.score = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
game.app.randomise_locations = (function game$app$randomise_locations(radius){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) - radius),(radius + game.app.canvas.width)], null)),(cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * game.app.canvas.height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * game.app.canvas.width),cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) - radius),(radius + game.app.canvas.height)], null))], null)], null));
});
game.app.generate_random_enemy = (function game$app$generate_random_enemy(){
var radius = ((7) + cljs.core.rand_int((26)));
var vec__34092 = game.app.randomise_locations(radius);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34092,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34092,(1),null);
var color = ["hsl( ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (360))),", 50%, 50%)"].join('');
var angle = Math.atan2(((game.app.canvas.height / (2)) - y),((game.app.canvas.width / (2)) - x));
var velocity = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),Math.cos(angle),new cljs.core.Keyword(null,"y","y",-1757859776),Math.sin(angle)], null);
return game.app.build_enemy(x,y,radius,color,velocity);
});
game.app.spawn_enemies = (function game$app$spawn_enemies(){
var enemy_fn = (function (){
return cljs.core.reset_BANG_(game.app.enemies,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(game.app.enemies),game.app.generate_random_enemy()));
});
return setInterval(enemy_fn,(2000));
});
game.app.contact_QMARK_ = (function game$app$contact_QMARK_(a,b){
var dist = Math.hypot(((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : a.call(null,new cljs.core.Keyword(null,"x","x",2099068185))) - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : b.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))),((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : a.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))) - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : b.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))));
if((((dist - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : b.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)))) - (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : a.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)))) < (1))){
return true;
} else {
return false;
}
});
game.app.mapisize_vector = (function game$app$mapisize_vector(vect){
var nums = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vect));
return cljs.core.zipmap(nums,vect);
});
game.app.vectorize_map = (function game$app$vectorize_map(mapping){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34095_SHARP_){
return cljs.core.second(p1__34095_SHARP_);
}),mapping));
});
game.app.game_over_QMARK_ = (function game$app$game_over_QMARK_(player,enemies){
var collisions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34096_SHARP_){
return game.app.contact_QMARK_(player,p1__34096_SHARP_);
}),cljs.core.deref(enemies));
if(cljs.core.truth_(cljs.core.some(cljs.core.true_QMARK_,collisions))){
return true;
} else {
return null;
}
});
game.app.concatv = (function game$app$concatv(list1,list2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(list1,list2));
});
game.app.off_screen_QMARK_ = (function game$app$off_screen_QMARK_(object){
if((((((object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : object.call(null,new cljs.core.Keyword(null,"x","x",2099068185))) + (object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : object.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)))) < (0))) || ((((((object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : object.call(null,new cljs.core.Keyword(null,"x","x",2099068185))) - (object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : object.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)))) > game.app.canvas.width)) || ((((((object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : object.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))) + (object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : object.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)))) < (0))) || ((((object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : object.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))) - (object.cljs$core$IFn$_invoke$arity$1 ? object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : object.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)))) > game.app.canvas.height)))))))){
return true;
} else {
return null;
}
});
game.app.projection_handler = (function game$app$projection_handler(proj_index,enem_index,projectiles,enemies){
var enemy = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(enemies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enem_index], null));
var projectile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(projectiles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proj_index], null));
if(cljs.core.truth_((function (){var or__5045__auto__ = game.app.contact_QMARK_(projectile,enemy);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return game.app.off_screen_QMARK_(projectile);
}
})())){
return proj_index;
} else {
return null;
}
});
game.app.enemy_handler = (function game$app$enemy_handler(proj_index,enem_index,projectiles,enemies){
var enemy = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(enemies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enem_index], null));
var projectile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(projectiles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proj_index], null));
var current_particles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if(game.app.contact_QMARK_(projectile,enemy)){
var new_radius = ((enemy.cljs$core$IFn$_invoke$arity$1 ? enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : enemy.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258))) - (10));
var new_enemy = game.app.build_enemy((enemy.cljs$core$IFn$_invoke$arity$1 ? enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : enemy.call(null,new cljs.core.Keyword(null,"x","x",2099068185))),(enemy.cljs$core$IFn$_invoke$arity$1 ? enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : enemy.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))),new_radius,(enemy.cljs$core$IFn$_invoke$arity$1 ? enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : enemy.call(null,new cljs.core.Keyword(null,"color","color",1011675173))),(enemy.cljs$core$IFn$_invoke$arity$1 ? enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",-581524355)) : enemy.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(game.app.score,(function (p1__34097_SHARP_){
return ((100) + p1__34097_SHARP_);
}));

(game.app.scoreEl.innerHTML = cljs.core.deref(game.app.score));

(game.app.bigScoreEl.innerHTML = cljs.core.deref(game.app.score));

cljs.core.reset_BANG_(current_particles,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((1.5 * (enemy.cljs$core$IFn$_invoke$arity$1 ? enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : enemy.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)))),(function (){
return game.app.build_particle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(new_enemy.cljs$core$IFn$_invoke$arity$1 ? new_enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : new_enemy.call(null,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),(new_enemy.cljs$core$IFn$_invoke$arity$1 ? new_enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : new_enemy.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(1),new cljs.core.Keyword(null,"radius","radius",-2073122258),((2) * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"color","color",1011675173),(new_enemy.cljs$core$IFn$_invoke$arity$1 ? new_enemy.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)) : new_enemy.call(null,new cljs.core.Keyword(null,"color","color",1011675173))),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (5)) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (5)) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5))], null)], null)], 0));
}))));

if((new_radius < (10))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enem_index,cljs.core.deref(current_particles)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enem_index,new_enemy,cljs.core.deref(current_particles)], null);
}
} else {
return null;
}
});
game.app.handle_enemies = (function game$app$handle_enemies(projectiles,enemies){
var new_projectiles = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34098_SHARP_){
var fexpr__34101 = (p1__34098_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34098_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update","update",1045576396)) : p1__34098_SHARP_.call(null,new cljs.core.Keyword(null,"update","update",1045576396)));
return (fexpr__34101.cljs$core$IFn$_invoke$arity$0 ? fexpr__34101.cljs$core$IFn$_invoke$arity$0() : fexpr__34101.call(null));
}),cljs.core.deref(projectiles));
var new_enemies = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34099_SHARP_){
var fexpr__34102 = (p1__34099_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34099_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update","update",1045576396)) : p1__34099_SHARP_.call(null,new cljs.core.Keyword(null,"update","update",1045576396)));
return (fexpr__34102.cljs$core$IFn$_invoke$arity$0 ? fexpr__34102.cljs$core$IFn$_invoke$arity$0() : fexpr__34102.call(null));
}),cljs.core.deref(enemies));
var res_particles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34100_SHARP_){
var G__34104 = (p1__34100_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34100_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604)) : p1__34100_SHARP_.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)));
var fexpr__34103 = (p1__34100_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34100_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update","update",1045576396)) : p1__34100_SHARP_.call(null,new cljs.core.Keyword(null,"update","update",1045576396)));
return (fexpr__34103.cljs$core$IFn$_invoke$arity$1 ? fexpr__34103.cljs$core$IFn$_invoke$arity$1(G__34104) : fexpr__34103.call(null,G__34104));
}),cljs.core.deref(game.app.particles)));
var proj_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(game.app.mapisize_vector(new_projectiles));
var enem_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(game.app.mapisize_vector(new_enemies));
var seq__34105_34236 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new_enemies)));
var chunk__34106_34237 = null;
var count__34107_34238 = (0);
var i__34108_34239 = (0);
while(true){
if((i__34108_34239 < count__34107_34238)){
var enem_index_34240 = chunk__34106_34237.cljs$core$IIndexed$_nth$arity$2(null,i__34108_34239);
var seq__34165_34241 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new_projectiles)));
var chunk__34166_34242 = null;
var count__34167_34243 = (0);
var i__34168_34244 = (0);
while(true){
if((i__34168_34244 < count__34167_34243)){
var proj_index_34245 = chunk__34166_34242.cljs$core$IIndexed$_nth$arity$2(null,i__34168_34244);
var delete_proj_34246 = game.app.projection_handler(proj_index_34245,enem_index_34240,new_projectiles,new_enemies);
var delete_enem_34247 = game.app.enemy_handler(proj_index_34245,enem_index_34240,new_projectiles,new_enemies);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(proj_map,cljs.core.dissoc,delete_proj_34246);

if((cljs.core.count(delete_enem_34247) > (2))){
var vec__34181_34248 = delete_enem_34247;
var index_34249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34248,(0),null);
var entry_34250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34248,(1),null);
var new_particles_34251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34248,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enem_map,cljs.core.assoc,index_34249,entry_34250);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34251);
} else {
var vec__34184_34252 = delete_enem_34247;
var index_34253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34184_34252,(0),null);
var new_particles_34254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34184_34252,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(enem_map,cljs.core.dissoc,index_34253);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34254);
}


var G__34255 = seq__34165_34241;
var G__34256 = chunk__34166_34242;
var G__34257 = count__34167_34243;
var G__34258 = (i__34168_34244 + (1));
seq__34165_34241 = G__34255;
chunk__34166_34242 = G__34256;
count__34167_34243 = G__34257;
i__34168_34244 = G__34258;
continue;
} else {
var temp__5804__auto___34259 = cljs.core.seq(seq__34165_34241);
if(temp__5804__auto___34259){
var seq__34165_34260__$1 = temp__5804__auto___34259;
if(cljs.core.chunked_seq_QMARK_(seq__34165_34260__$1)){
var c__5568__auto___34261 = cljs.core.chunk_first(seq__34165_34260__$1);
var G__34262 = cljs.core.chunk_rest(seq__34165_34260__$1);
var G__34263 = c__5568__auto___34261;
var G__34264 = cljs.core.count(c__5568__auto___34261);
var G__34265 = (0);
seq__34165_34241 = G__34262;
chunk__34166_34242 = G__34263;
count__34167_34243 = G__34264;
i__34168_34244 = G__34265;
continue;
} else {
var proj_index_34266 = cljs.core.first(seq__34165_34260__$1);
var delete_proj_34267 = game.app.projection_handler(proj_index_34266,enem_index_34240,new_projectiles,new_enemies);
var delete_enem_34268 = game.app.enemy_handler(proj_index_34266,enem_index_34240,new_projectiles,new_enemies);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(proj_map,cljs.core.dissoc,delete_proj_34267);

if((cljs.core.count(delete_enem_34268) > (2))){
var vec__34187_34269 = delete_enem_34268;
var index_34270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34187_34269,(0),null);
var entry_34271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34187_34269,(1),null);
var new_particles_34272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34187_34269,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enem_map,cljs.core.assoc,index_34270,entry_34271);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34272);
} else {
var vec__34190_34273 = delete_enem_34268;
var index_34274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34190_34273,(0),null);
var new_particles_34275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34190_34273,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(enem_map,cljs.core.dissoc,index_34274);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34275);
}


var G__34276 = cljs.core.next(seq__34165_34260__$1);
var G__34277 = null;
var G__34278 = (0);
var G__34279 = (0);
seq__34165_34241 = G__34276;
chunk__34166_34242 = G__34277;
count__34167_34243 = G__34278;
i__34168_34244 = G__34279;
continue;
}
} else {
}
}
break;
}


var G__34280 = seq__34105_34236;
var G__34281 = chunk__34106_34237;
var G__34282 = count__34107_34238;
var G__34283 = (i__34108_34239 + (1));
seq__34105_34236 = G__34280;
chunk__34106_34237 = G__34281;
count__34107_34238 = G__34282;
i__34108_34239 = G__34283;
continue;
} else {
var temp__5804__auto___34284 = cljs.core.seq(seq__34105_34236);
if(temp__5804__auto___34284){
var seq__34105_34285__$1 = temp__5804__auto___34284;
if(cljs.core.chunked_seq_QMARK_(seq__34105_34285__$1)){
var c__5568__auto___34286 = cljs.core.chunk_first(seq__34105_34285__$1);
var G__34287 = cljs.core.chunk_rest(seq__34105_34285__$1);
var G__34288 = c__5568__auto___34286;
var G__34289 = cljs.core.count(c__5568__auto___34286);
var G__34290 = (0);
seq__34105_34236 = G__34287;
chunk__34106_34237 = G__34288;
count__34107_34238 = G__34289;
i__34108_34239 = G__34290;
continue;
} else {
var enem_index_34291 = cljs.core.first(seq__34105_34285__$1);
var seq__34193_34292 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new_projectiles)));
var chunk__34194_34293 = null;
var count__34195_34294 = (0);
var i__34196_34295 = (0);
while(true){
if((i__34196_34295 < count__34195_34294)){
var proj_index_34296 = chunk__34194_34293.cljs$core$IIndexed$_nth$arity$2(null,i__34196_34295);
var delete_proj_34297 = game.app.projection_handler(proj_index_34296,enem_index_34291,new_projectiles,new_enemies);
var delete_enem_34298 = game.app.enemy_handler(proj_index_34296,enem_index_34291,new_projectiles,new_enemies);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(proj_map,cljs.core.dissoc,delete_proj_34297);

if((cljs.core.count(delete_enem_34298) > (2))){
var vec__34209_34299 = delete_enem_34298;
var index_34300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34209_34299,(0),null);
var entry_34301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34209_34299,(1),null);
var new_particles_34302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34209_34299,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enem_map,cljs.core.assoc,index_34300,entry_34301);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34302);
} else {
var vec__34212_34303 = delete_enem_34298;
var index_34304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34212_34303,(0),null);
var new_particles_34305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34212_34303,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(enem_map,cljs.core.dissoc,index_34304);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34305);
}


var G__34306 = seq__34193_34292;
var G__34307 = chunk__34194_34293;
var G__34308 = count__34195_34294;
var G__34309 = (i__34196_34295 + (1));
seq__34193_34292 = G__34306;
chunk__34194_34293 = G__34307;
count__34195_34294 = G__34308;
i__34196_34295 = G__34309;
continue;
} else {
var temp__5804__auto___34310__$1 = cljs.core.seq(seq__34193_34292);
if(temp__5804__auto___34310__$1){
var seq__34193_34311__$1 = temp__5804__auto___34310__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34193_34311__$1)){
var c__5568__auto___34312 = cljs.core.chunk_first(seq__34193_34311__$1);
var G__34313 = cljs.core.chunk_rest(seq__34193_34311__$1);
var G__34314 = c__5568__auto___34312;
var G__34315 = cljs.core.count(c__5568__auto___34312);
var G__34316 = (0);
seq__34193_34292 = G__34313;
chunk__34194_34293 = G__34314;
count__34195_34294 = G__34315;
i__34196_34295 = G__34316;
continue;
} else {
var proj_index_34317 = cljs.core.first(seq__34193_34311__$1);
var delete_proj_34318 = game.app.projection_handler(proj_index_34317,enem_index_34291,new_projectiles,new_enemies);
var delete_enem_34319 = game.app.enemy_handler(proj_index_34317,enem_index_34291,new_projectiles,new_enemies);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(proj_map,cljs.core.dissoc,delete_proj_34318);

if((cljs.core.count(delete_enem_34319) > (2))){
var vec__34215_34320 = delete_enem_34319;
var index_34321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34215_34320,(0),null);
var entry_34322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34215_34320,(1),null);
var new_particles_34323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34215_34320,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(enem_map,cljs.core.assoc,index_34321,entry_34322);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34323);
} else {
var vec__34218_34324 = delete_enem_34319;
var index_34325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34218_34324,(0),null);
var new_particles_34326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34218_34324,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(enem_map,cljs.core.dissoc,index_34325);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res_particles,game.app.concatv,new_particles_34326);
}


var G__34327 = cljs.core.next(seq__34193_34311__$1);
var G__34328 = null;
var G__34329 = (0);
var G__34330 = (0);
seq__34193_34292 = G__34327;
chunk__34194_34293 = G__34328;
count__34195_34294 = G__34329;
i__34196_34295 = G__34330;
continue;
}
} else {
}
}
break;
}


var G__34331 = cljs.core.next(seq__34105_34285__$1);
var G__34332 = null;
var G__34333 = (0);
var G__34334 = (0);
seq__34105_34236 = G__34331;
chunk__34106_34237 = G__34332;
count__34107_34238 = G__34333;
i__34108_34239 = G__34334;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.app.vectorize_map(cljs.core.deref(proj_map)),game.app.vectorize_map(cljs.core.deref(enem_map)),cljs.core.deref(res_particles)], null);
});
game.app.animate = (function game$app$animate(){
var animation_frame = window.requestAnimationFrame(game.app.animate);
(game.app.c.fillStyle = "rgba(0 , 0, 0, 0.1)");

game.app.c.fillRect((0),(0),game.app.canvas.width,game.app.canvas.height);

var fexpr__34223_34335 = (game.app.player.cljs$core$IFn$_invoke$arity$1 ? game.app.player.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"draw","draw",1358331674)) : game.app.player.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674)));
(fexpr__34223_34335.cljs$core$IFn$_invoke$arity$0 ? fexpr__34223_34335.cljs$core$IFn$_invoke$arity$0() : fexpr__34223_34335.call(null));

var vec__34224_34336 = game.app.handle_enemies(game.app.projectiles,game.app.enemies);
var new_projectiles_34337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34224_34336,(0),null);
var new_enemies_34338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34224_34336,(1),null);
var pre_particles_34339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34224_34336,(2),null);
cljs.core.reset_BANG_(game.app.enemies,new_enemies_34338);

cljs.core.reset_BANG_(game.app.projectiles,new_projectiles_34337);

var new_particles_34340 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34221_SHARP_){
var G__34228 = (p1__34221_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34221_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604)) : p1__34221_SHARP_.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)));
var fexpr__34227 = (p1__34221_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34221_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"update","update",1045576396)) : p1__34221_SHARP_.call(null,new cljs.core.Keyword(null,"update","update",1045576396)));
return (fexpr__34227.cljs$core$IFn$_invoke$arity$1 ? fexpr__34227.cljs$core$IFn$_invoke$arity$1(G__34228) : fexpr__34227.call(null,G__34228));
}),pre_particles_34339);
cljs.core.reset_BANG_(game.app.particles,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34222_SHARP_){
return ((function (){var fexpr__34229 = (p1__34222_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34222_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604)) : p1__34222_SHARP_.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604)));
return (fexpr__34229.cljs$core$IFn$_invoke$arity$1 ? fexpr__34229.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"alpha","alpha",-1574982441)) : fexpr__34229.call(null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441)));
})() >= 0.01);
}),new_particles_34340));

if(cljs.core.truth_(game.app.game_over_QMARK_(game.app.player,game.app.enemies))){
window.cancelAnimationFrame(animation_frame);

return (game.app.modalEl.style.display = "flex");
} else {
return null;
}
});
window.addEventListener("click",(function (event){
var angle = Math.atan2((event.clientY - (game.app.canvas.height / (2))),(event.clientX - (game.app.canvas.width / (2))));
var velocity = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((5) * Math.cos(angle)),new cljs.core.Keyword(null,"y","y",-1757859776),((5) * Math.sin(angle))], null);
return cljs.core.reset_BANG_(game.app.projectiles,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(game.app.projectiles),game.app.build_projectile((game.app.canvas.width / (2)),(game.app.canvas.height / (2)),(5),"white",velocity)));
}));
game.app.init = (function game$app$init(){
cljs.core.reset_BANG_(game.app.projectiles,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(game.app.enemies,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(game.app.particles,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(game.app.score,(0));
});
game.app.startGameButton.addEventListener("click",(function (){
game.app.init();

game.app.animate();

game.app.spawn_enemies();

(game.app.modalEl.style.display = "none");

(game.app.scoreEl.innerHTML = (0));

return (game.app.bigScoreEl.innerHTML = (0));
}));

//# sourceMappingURL=game.app.js.map
