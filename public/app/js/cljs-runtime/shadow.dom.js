goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18648 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18648(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18649 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18649(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17201 = coll;
var G__17202 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17201,G__17202) : shadow.dom.lazy_native_coll_seq.call(null,G__17201,G__17202));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17517 = arguments.length;
switch (G__17517) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17536 = arguments.length;
switch (G__17536) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17559 = arguments.length;
switch (G__17559) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17578 = arguments.length;
switch (G__17578) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17597 = arguments.length;
switch (G__17597) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17615 = arguments.length;
switch (G__17615) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17624){if((e17624 instanceof Object)){
var e = e17624;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17624;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17639 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17640 = null;
var count__17641 = (0);
var i__17642 = (0);
while(true){
if((i__17642 < count__17641)){
var el = chunk__17640.cljs$core$IIndexed$_nth$arity$2(null,i__17642);
var handler_18666__$1 = ((function (seq__17639,chunk__17640,count__17641,i__17642,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17639,chunk__17640,count__17641,i__17642,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18666__$1);


var G__18667 = seq__17639;
var G__18668 = chunk__17640;
var G__18669 = count__17641;
var G__18670 = (i__17642 + (1));
seq__17639 = G__18667;
chunk__17640 = G__18668;
count__17641 = G__18669;
i__17642 = G__18670;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17639);
if(temp__5804__auto__){
var seq__17639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17639__$1);
var G__18671 = cljs.core.chunk_rest(seq__17639__$1);
var G__18672 = c__5568__auto__;
var G__18673 = cljs.core.count(c__5568__auto__);
var G__18674 = (0);
seq__17639 = G__18671;
chunk__17640 = G__18672;
count__17641 = G__18673;
i__17642 = G__18674;
continue;
} else {
var el = cljs.core.first(seq__17639__$1);
var handler_18675__$1 = ((function (seq__17639,chunk__17640,count__17641,i__17642,el,seq__17639__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17639,chunk__17640,count__17641,i__17642,el,seq__17639__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18675__$1);


var G__18676 = cljs.core.next(seq__17639__$1);
var G__18677 = null;
var G__18678 = (0);
var G__18679 = (0);
seq__17639 = G__18676;
chunk__17640 = G__18677;
count__17641 = G__18678;
i__17642 = G__18679;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17675 = arguments.length;
switch (G__17675) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17696 = cljs.core.seq(events);
var chunk__17697 = null;
var count__17698 = (0);
var i__17699 = (0);
while(true){
if((i__17699 < count__17698)){
var vec__17722 = chunk__17697.cljs$core$IIndexed$_nth$arity$2(null,i__17699);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17722,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18682 = seq__17696;
var G__18683 = chunk__17697;
var G__18684 = count__17698;
var G__18685 = (i__17699 + (1));
seq__17696 = G__18682;
chunk__17697 = G__18683;
count__17698 = G__18684;
i__17699 = G__18685;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17696);
if(temp__5804__auto__){
var seq__17696__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17696__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17696__$1);
var G__18686 = cljs.core.chunk_rest(seq__17696__$1);
var G__18687 = c__5568__auto__;
var G__18688 = cljs.core.count(c__5568__auto__);
var G__18689 = (0);
seq__17696 = G__18686;
chunk__17697 = G__18687;
count__17698 = G__18688;
i__17699 = G__18689;
continue;
} else {
var vec__17728 = cljs.core.first(seq__17696__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18690 = cljs.core.next(seq__17696__$1);
var G__18691 = null;
var G__18692 = (0);
var G__18693 = (0);
seq__17696 = G__18690;
chunk__17697 = G__18691;
count__17698 = G__18692;
i__17699 = G__18693;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17731 = cljs.core.seq(styles);
var chunk__17732 = null;
var count__17733 = (0);
var i__17734 = (0);
while(true){
if((i__17734 < count__17733)){
var vec__17745 = chunk__17732.cljs$core$IIndexed$_nth$arity$2(null,i__17734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17745,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18695 = seq__17731;
var G__18696 = chunk__17732;
var G__18697 = count__17733;
var G__18698 = (i__17734 + (1));
seq__17731 = G__18695;
chunk__17732 = G__18696;
count__17733 = G__18697;
i__17734 = G__18698;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17731);
if(temp__5804__auto__){
var seq__17731__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17731__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17731__$1);
var G__18699 = cljs.core.chunk_rest(seq__17731__$1);
var G__18700 = c__5568__auto__;
var G__18701 = cljs.core.count(c__5568__auto__);
var G__18702 = (0);
seq__17731 = G__18699;
chunk__17732 = G__18700;
count__17733 = G__18701;
i__17734 = G__18702;
continue;
} else {
var vec__17752 = cljs.core.first(seq__17731__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18703 = cljs.core.next(seq__17731__$1);
var G__18704 = null;
var G__18705 = (0);
var G__18706 = (0);
seq__17731 = G__18703;
chunk__17732 = G__18704;
count__17733 = G__18705;
i__17734 = G__18706;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17763_18707 = key;
var G__17763_18708__$1 = (((G__17763_18707 instanceof cljs.core.Keyword))?G__17763_18707.fqn:null);
switch (G__17763_18708__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18713 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18713,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18713,"aria-");
}
})())){
el.setAttribute(ks_18713,value);
} else {
(el[ks_18713] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17840){
var map__17841 = p__17840;
var map__17841__$1 = cljs.core.__destructure_map(map__17841);
var props = map__17841__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17841__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17843 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17847 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17847,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17847;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17854 = arguments.length;
switch (G__17854) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17874){
var vec__17879 = p__17874;
var seq__17880 = cljs.core.seq(vec__17879);
var first__17881 = cljs.core.first(seq__17880);
var seq__17880__$1 = cljs.core.next(seq__17880);
var nn = first__17881;
var first__17881__$1 = cljs.core.first(seq__17880__$1);
var seq__17880__$2 = cljs.core.next(seq__17880__$1);
var np = first__17881__$1;
var nc = seq__17880__$2;
var node = vec__17879;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17885 = nn;
var G__17886 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17885,G__17886) : create_fn.call(null,G__17885,G__17886));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17888 = nn;
var G__17889 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17888,G__17889) : create_fn.call(null,G__17888,G__17889));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17904 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(1),null);
var seq__17907_18721 = cljs.core.seq(node_children);
var chunk__17908_18722 = null;
var count__17909_18723 = (0);
var i__17910_18724 = (0);
while(true){
if((i__17910_18724 < count__17909_18723)){
var child_struct_18725 = chunk__17908_18722.cljs$core$IIndexed$_nth$arity$2(null,i__17910_18724);
var children_18726 = shadow.dom.dom_node(child_struct_18725);
if(cljs.core.seq_QMARK_(children_18726)){
var seq__17982_18727 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18726));
var chunk__17984_18728 = null;
var count__17985_18729 = (0);
var i__17986_18730 = (0);
while(true){
if((i__17986_18730 < count__17985_18729)){
var child_18731 = chunk__17984_18728.cljs$core$IIndexed$_nth$arity$2(null,i__17986_18730);
if(cljs.core.truth_(child_18731)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18731);


var G__18732 = seq__17982_18727;
var G__18733 = chunk__17984_18728;
var G__18734 = count__17985_18729;
var G__18735 = (i__17986_18730 + (1));
seq__17982_18727 = G__18732;
chunk__17984_18728 = G__18733;
count__17985_18729 = G__18734;
i__17986_18730 = G__18735;
continue;
} else {
var G__18736 = seq__17982_18727;
var G__18737 = chunk__17984_18728;
var G__18738 = count__17985_18729;
var G__18739 = (i__17986_18730 + (1));
seq__17982_18727 = G__18736;
chunk__17984_18728 = G__18737;
count__17985_18729 = G__18738;
i__17986_18730 = G__18739;
continue;
}
} else {
var temp__5804__auto___18740 = cljs.core.seq(seq__17982_18727);
if(temp__5804__auto___18740){
var seq__17982_18741__$1 = temp__5804__auto___18740;
if(cljs.core.chunked_seq_QMARK_(seq__17982_18741__$1)){
var c__5568__auto___18742 = cljs.core.chunk_first(seq__17982_18741__$1);
var G__18743 = cljs.core.chunk_rest(seq__17982_18741__$1);
var G__18744 = c__5568__auto___18742;
var G__18745 = cljs.core.count(c__5568__auto___18742);
var G__18746 = (0);
seq__17982_18727 = G__18743;
chunk__17984_18728 = G__18744;
count__17985_18729 = G__18745;
i__17986_18730 = G__18746;
continue;
} else {
var child_18747 = cljs.core.first(seq__17982_18741__$1);
if(cljs.core.truth_(child_18747)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18747);


var G__18748 = cljs.core.next(seq__17982_18741__$1);
var G__18749 = null;
var G__18750 = (0);
var G__18751 = (0);
seq__17982_18727 = G__18748;
chunk__17984_18728 = G__18749;
count__17985_18729 = G__18750;
i__17986_18730 = G__18751;
continue;
} else {
var G__18752 = cljs.core.next(seq__17982_18741__$1);
var G__18753 = null;
var G__18754 = (0);
var G__18755 = (0);
seq__17982_18727 = G__18752;
chunk__17984_18728 = G__18753;
count__17985_18729 = G__18754;
i__17986_18730 = G__18755;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18726);
}


var G__18756 = seq__17907_18721;
var G__18757 = chunk__17908_18722;
var G__18758 = count__17909_18723;
var G__18759 = (i__17910_18724 + (1));
seq__17907_18721 = G__18756;
chunk__17908_18722 = G__18757;
count__17909_18723 = G__18758;
i__17910_18724 = G__18759;
continue;
} else {
var temp__5804__auto___18760 = cljs.core.seq(seq__17907_18721);
if(temp__5804__auto___18760){
var seq__17907_18761__$1 = temp__5804__auto___18760;
if(cljs.core.chunked_seq_QMARK_(seq__17907_18761__$1)){
var c__5568__auto___18762 = cljs.core.chunk_first(seq__17907_18761__$1);
var G__18763 = cljs.core.chunk_rest(seq__17907_18761__$1);
var G__18764 = c__5568__auto___18762;
var G__18765 = cljs.core.count(c__5568__auto___18762);
var G__18766 = (0);
seq__17907_18721 = G__18763;
chunk__17908_18722 = G__18764;
count__17909_18723 = G__18765;
i__17910_18724 = G__18766;
continue;
} else {
var child_struct_18767 = cljs.core.first(seq__17907_18761__$1);
var children_18768 = shadow.dom.dom_node(child_struct_18767);
if(cljs.core.seq_QMARK_(children_18768)){
var seq__18003_18769 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18768));
var chunk__18005_18770 = null;
var count__18006_18771 = (0);
var i__18007_18772 = (0);
while(true){
if((i__18007_18772 < count__18006_18771)){
var child_18773 = chunk__18005_18770.cljs$core$IIndexed$_nth$arity$2(null,i__18007_18772);
if(cljs.core.truth_(child_18773)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18773);


var G__18774 = seq__18003_18769;
var G__18775 = chunk__18005_18770;
var G__18776 = count__18006_18771;
var G__18777 = (i__18007_18772 + (1));
seq__18003_18769 = G__18774;
chunk__18005_18770 = G__18775;
count__18006_18771 = G__18776;
i__18007_18772 = G__18777;
continue;
} else {
var G__18778 = seq__18003_18769;
var G__18779 = chunk__18005_18770;
var G__18780 = count__18006_18771;
var G__18781 = (i__18007_18772 + (1));
seq__18003_18769 = G__18778;
chunk__18005_18770 = G__18779;
count__18006_18771 = G__18780;
i__18007_18772 = G__18781;
continue;
}
} else {
var temp__5804__auto___18782__$1 = cljs.core.seq(seq__18003_18769);
if(temp__5804__auto___18782__$1){
var seq__18003_18783__$1 = temp__5804__auto___18782__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18003_18783__$1)){
var c__5568__auto___18784 = cljs.core.chunk_first(seq__18003_18783__$1);
var G__18785 = cljs.core.chunk_rest(seq__18003_18783__$1);
var G__18786 = c__5568__auto___18784;
var G__18787 = cljs.core.count(c__5568__auto___18784);
var G__18788 = (0);
seq__18003_18769 = G__18785;
chunk__18005_18770 = G__18786;
count__18006_18771 = G__18787;
i__18007_18772 = G__18788;
continue;
} else {
var child_18789 = cljs.core.first(seq__18003_18783__$1);
if(cljs.core.truth_(child_18789)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18789);


var G__18790 = cljs.core.next(seq__18003_18783__$1);
var G__18791 = null;
var G__18792 = (0);
var G__18793 = (0);
seq__18003_18769 = G__18790;
chunk__18005_18770 = G__18791;
count__18006_18771 = G__18792;
i__18007_18772 = G__18793;
continue;
} else {
var G__18794 = cljs.core.next(seq__18003_18783__$1);
var G__18795 = null;
var G__18796 = (0);
var G__18797 = (0);
seq__18003_18769 = G__18794;
chunk__18005_18770 = G__18795;
count__18006_18771 = G__18796;
i__18007_18772 = G__18797;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18768);
}


var G__18798 = cljs.core.next(seq__17907_18761__$1);
var G__18799 = null;
var G__18800 = (0);
var G__18801 = (0);
seq__17907_18721 = G__18798;
chunk__17908_18722 = G__18799;
count__17909_18723 = G__18800;
i__17910_18724 = G__18801;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18017 = cljs.core.seq(node);
var chunk__18018 = null;
var count__18019 = (0);
var i__18020 = (0);
while(true){
if((i__18020 < count__18019)){
var n = chunk__18018.cljs$core$IIndexed$_nth$arity$2(null,i__18020);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18820 = seq__18017;
var G__18821 = chunk__18018;
var G__18822 = count__18019;
var G__18823 = (i__18020 + (1));
seq__18017 = G__18820;
chunk__18018 = G__18821;
count__18019 = G__18822;
i__18020 = G__18823;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18017);
if(temp__5804__auto__){
var seq__18017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18017__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18017__$1);
var G__18824 = cljs.core.chunk_rest(seq__18017__$1);
var G__18825 = c__5568__auto__;
var G__18826 = cljs.core.count(c__5568__auto__);
var G__18827 = (0);
seq__18017 = G__18824;
chunk__18018 = G__18825;
count__18019 = G__18826;
i__18020 = G__18827;
continue;
} else {
var n = cljs.core.first(seq__18017__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18828 = cljs.core.next(seq__18017__$1);
var G__18829 = null;
var G__18830 = (0);
var G__18831 = (0);
seq__18017 = G__18828;
chunk__18018 = G__18829;
count__18019 = G__18830;
i__18020 = G__18831;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18034 = arguments.length;
switch (G__18034) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18036 = arguments.length;
switch (G__18036) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18042 = arguments.length;
switch (G__18042) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18845 = arguments.length;
var i__5770__auto___18846 = (0);
while(true){
if((i__5770__auto___18846 < len__5769__auto___18845)){
args__5775__auto__.push((arguments[i__5770__auto___18846]));

var G__18847 = (i__5770__auto___18846 + (1));
i__5770__auto___18846 = G__18847;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18050_18848 = cljs.core.seq(nodes);
var chunk__18051_18849 = null;
var count__18052_18850 = (0);
var i__18053_18851 = (0);
while(true){
if((i__18053_18851 < count__18052_18850)){
var node_18852 = chunk__18051_18849.cljs$core$IIndexed$_nth$arity$2(null,i__18053_18851);
fragment.appendChild(shadow.dom._to_dom(node_18852));


var G__18853 = seq__18050_18848;
var G__18854 = chunk__18051_18849;
var G__18855 = count__18052_18850;
var G__18856 = (i__18053_18851 + (1));
seq__18050_18848 = G__18853;
chunk__18051_18849 = G__18854;
count__18052_18850 = G__18855;
i__18053_18851 = G__18856;
continue;
} else {
var temp__5804__auto___18857 = cljs.core.seq(seq__18050_18848);
if(temp__5804__auto___18857){
var seq__18050_18858__$1 = temp__5804__auto___18857;
if(cljs.core.chunked_seq_QMARK_(seq__18050_18858__$1)){
var c__5568__auto___18859 = cljs.core.chunk_first(seq__18050_18858__$1);
var G__18860 = cljs.core.chunk_rest(seq__18050_18858__$1);
var G__18861 = c__5568__auto___18859;
var G__18862 = cljs.core.count(c__5568__auto___18859);
var G__18863 = (0);
seq__18050_18848 = G__18860;
chunk__18051_18849 = G__18861;
count__18052_18850 = G__18862;
i__18053_18851 = G__18863;
continue;
} else {
var node_18864 = cljs.core.first(seq__18050_18858__$1);
fragment.appendChild(shadow.dom._to_dom(node_18864));


var G__18865 = cljs.core.next(seq__18050_18858__$1);
var G__18866 = null;
var G__18867 = (0);
var G__18868 = (0);
seq__18050_18848 = G__18865;
chunk__18051_18849 = G__18866;
count__18052_18850 = G__18867;
i__18053_18851 = G__18868;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18046){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18046));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18065_18880 = cljs.core.seq(scripts);
var chunk__18066_18881 = null;
var count__18067_18882 = (0);
var i__18068_18883 = (0);
while(true){
if((i__18068_18883 < count__18067_18882)){
var vec__18077_18884 = chunk__18066_18881.cljs$core$IIndexed$_nth$arity$2(null,i__18068_18883);
var script_tag_18885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18077_18884,(0),null);
var script_body_18886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18077_18884,(1),null);
eval(script_body_18886);


var G__18887 = seq__18065_18880;
var G__18888 = chunk__18066_18881;
var G__18889 = count__18067_18882;
var G__18890 = (i__18068_18883 + (1));
seq__18065_18880 = G__18887;
chunk__18066_18881 = G__18888;
count__18067_18882 = G__18889;
i__18068_18883 = G__18890;
continue;
} else {
var temp__5804__auto___18891 = cljs.core.seq(seq__18065_18880);
if(temp__5804__auto___18891){
var seq__18065_18892__$1 = temp__5804__auto___18891;
if(cljs.core.chunked_seq_QMARK_(seq__18065_18892__$1)){
var c__5568__auto___18893 = cljs.core.chunk_first(seq__18065_18892__$1);
var G__18894 = cljs.core.chunk_rest(seq__18065_18892__$1);
var G__18895 = c__5568__auto___18893;
var G__18896 = cljs.core.count(c__5568__auto___18893);
var G__18897 = (0);
seq__18065_18880 = G__18894;
chunk__18066_18881 = G__18895;
count__18067_18882 = G__18896;
i__18068_18883 = G__18897;
continue;
} else {
var vec__18080_18898 = cljs.core.first(seq__18065_18892__$1);
var script_tag_18899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18080_18898,(0),null);
var script_body_18900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18080_18898,(1),null);
eval(script_body_18900);


var G__18901 = cljs.core.next(seq__18065_18892__$1);
var G__18902 = null;
var G__18903 = (0);
var G__18904 = (0);
seq__18065_18880 = G__18901;
chunk__18066_18881 = G__18902;
count__18067_18882 = G__18903;
i__18068_18883 = G__18904;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18083){
var vec__18084 = p__18083;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18084,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18084,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18091 = arguments.length;
switch (G__18091) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18099 = cljs.core.seq(style_keys);
var chunk__18100 = null;
var count__18101 = (0);
var i__18102 = (0);
while(true){
if((i__18102 < count__18101)){
var it = chunk__18100.cljs$core$IIndexed$_nth$arity$2(null,i__18102);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18911 = seq__18099;
var G__18912 = chunk__18100;
var G__18913 = count__18101;
var G__18914 = (i__18102 + (1));
seq__18099 = G__18911;
chunk__18100 = G__18912;
count__18101 = G__18913;
i__18102 = G__18914;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18099);
if(temp__5804__auto__){
var seq__18099__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18099__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18099__$1);
var G__18915 = cljs.core.chunk_rest(seq__18099__$1);
var G__18916 = c__5568__auto__;
var G__18917 = cljs.core.count(c__5568__auto__);
var G__18918 = (0);
seq__18099 = G__18915;
chunk__18100 = G__18916;
count__18101 = G__18917;
i__18102 = G__18918;
continue;
} else {
var it = cljs.core.first(seq__18099__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18919 = cljs.core.next(seq__18099__$1);
var G__18920 = null;
var G__18921 = (0);
var G__18922 = (0);
seq__18099 = G__18919;
chunk__18100 = G__18920;
count__18101 = G__18921;
i__18102 = G__18922;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18111,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18149 = k18111;
var G__18149__$1 = (((G__18149 instanceof cljs.core.Keyword))?G__18149.fqn:null);
switch (G__18149__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18111,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18153){
var vec__18157 = p__18153;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18157,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18157,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18110){
var self__ = this;
var G__18110__$1 = this;
return (new cljs.core.RecordIter((0),G__18110__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18112,other18113){
var self__ = this;
var this18112__$1 = this;
return (((!((other18113 == null)))) && ((((this18112__$1.constructor === other18113.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.x,other18113.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.y,other18113.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.__extmap,other18113.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18111){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18166 = k18111;
var G__18166__$1 = (((G__18166 instanceof cljs.core.Keyword))?G__18166.fqn:null);
switch (G__18166__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18111);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18110){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18167 = cljs.core.keyword_identical_QMARK_;
var expr__18168 = k__5352__auto__;
if(cljs.core.truth_((pred__18167.cljs$core$IFn$_invoke$arity$2 ? pred__18167.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18168) : pred__18167.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18168)))){
return (new shadow.dom.Coordinate(G__18110,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18167.cljs$core$IFn$_invoke$arity$2 ? pred__18167.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18168) : pred__18167.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18168)))){
return (new shadow.dom.Coordinate(self__.x,G__18110,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18110),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18110){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18110,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18114){
var extmap__5385__auto__ = (function (){var G__18173 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18114,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18114)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18173);
} else {
return G__18173;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18114),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18114),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18175,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18179 = k18175;
var G__18179__$1 = (((G__18179 instanceof cljs.core.Keyword))?G__18179.fqn:null);
switch (G__18179__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18175,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18180){
var vec__18181 = p__18180;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18181,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18181,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18174){
var self__ = this;
var G__18174__$1 = this;
return (new cljs.core.RecordIter((0),G__18174__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18176,other18177){
var self__ = this;
var this18176__$1 = this;
return (((!((other18177 == null)))) && ((((this18176__$1.constructor === other18177.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18176__$1.w,other18177.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18176__$1.h,other18177.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18176__$1.__extmap,other18177.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18175){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18195 = k18175;
var G__18195__$1 = (((G__18195 instanceof cljs.core.Keyword))?G__18195.fqn:null);
switch (G__18195__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18175);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18174){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18196 = cljs.core.keyword_identical_QMARK_;
var expr__18197 = k__5352__auto__;
if(cljs.core.truth_((pred__18196.cljs$core$IFn$_invoke$arity$2 ? pred__18196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18197) : pred__18196.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18197)))){
return (new shadow.dom.Size(G__18174,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18196.cljs$core$IFn$_invoke$arity$2 ? pred__18196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18197) : pred__18196.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18197)))){
return (new shadow.dom.Size(self__.w,G__18174,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18174),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18174){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18174,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18178){
var extmap__5385__auto__ = (function (){var G__18201 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18178,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18178)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18201);
} else {
return G__18201;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18178),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18178),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18944 = (i + (1));
var G__18945 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18944;
ret = G__18945;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18223){
var vec__18224 = p__18223;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18224,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18228 = arguments.length;
switch (G__18228) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18953 = ps;
var G__18954 = (i + (1));
el__$1 = G__18953;
i = G__18954;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18294 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18294,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18294,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18294,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18298_18959 = cljs.core.seq(props);
var chunk__18299_18960 = null;
var count__18300_18961 = (0);
var i__18301_18962 = (0);
while(true){
if((i__18301_18962 < count__18300_18961)){
var vec__18309_18963 = chunk__18299_18960.cljs$core$IIndexed$_nth$arity$2(null,i__18301_18962);
var k_18964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18309_18963,(0),null);
var v_18965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18309_18963,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18964);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18964),v_18965);


var G__18966 = seq__18298_18959;
var G__18967 = chunk__18299_18960;
var G__18968 = count__18300_18961;
var G__18969 = (i__18301_18962 + (1));
seq__18298_18959 = G__18966;
chunk__18299_18960 = G__18967;
count__18300_18961 = G__18968;
i__18301_18962 = G__18969;
continue;
} else {
var temp__5804__auto___18970 = cljs.core.seq(seq__18298_18959);
if(temp__5804__auto___18970){
var seq__18298_18971__$1 = temp__5804__auto___18970;
if(cljs.core.chunked_seq_QMARK_(seq__18298_18971__$1)){
var c__5568__auto___18972 = cljs.core.chunk_first(seq__18298_18971__$1);
var G__18973 = cljs.core.chunk_rest(seq__18298_18971__$1);
var G__18974 = c__5568__auto___18972;
var G__18975 = cljs.core.count(c__5568__auto___18972);
var G__18976 = (0);
seq__18298_18959 = G__18973;
chunk__18299_18960 = G__18974;
count__18300_18961 = G__18975;
i__18301_18962 = G__18976;
continue;
} else {
var vec__18312_18977 = cljs.core.first(seq__18298_18971__$1);
var k_18978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312_18977,(0),null);
var v_18979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312_18977,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18978);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18978),v_18979);


var G__18980 = cljs.core.next(seq__18298_18971__$1);
var G__18981 = null;
var G__18982 = (0);
var G__18983 = (0);
seq__18298_18959 = G__18980;
chunk__18299_18960 = G__18981;
count__18300_18961 = G__18982;
i__18301_18962 = G__18983;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18363 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18363,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18363,(1),null);
var seq__18381_18984 = cljs.core.seq(node_children);
var chunk__18383_18985 = null;
var count__18384_18986 = (0);
var i__18385_18987 = (0);
while(true){
if((i__18385_18987 < count__18384_18986)){
var child_struct_18988 = chunk__18383_18985.cljs$core$IIndexed$_nth$arity$2(null,i__18385_18987);
if((!((child_struct_18988 == null)))){
if(typeof child_struct_18988 === 'string'){
var text_18989 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18989),child_struct_18988].join(''));
} else {
var children_18990 = shadow.dom.svg_node(child_struct_18988);
if(cljs.core.seq_QMARK_(children_18990)){
var seq__18436_18991 = cljs.core.seq(children_18990);
var chunk__18438_18992 = null;
var count__18439_18993 = (0);
var i__18440_18994 = (0);
while(true){
if((i__18440_18994 < count__18439_18993)){
var child_18995 = chunk__18438_18992.cljs$core$IIndexed$_nth$arity$2(null,i__18440_18994);
if(cljs.core.truth_(child_18995)){
node.appendChild(child_18995);


var G__18996 = seq__18436_18991;
var G__18997 = chunk__18438_18992;
var G__18998 = count__18439_18993;
var G__18999 = (i__18440_18994 + (1));
seq__18436_18991 = G__18996;
chunk__18438_18992 = G__18997;
count__18439_18993 = G__18998;
i__18440_18994 = G__18999;
continue;
} else {
var G__19000 = seq__18436_18991;
var G__19001 = chunk__18438_18992;
var G__19002 = count__18439_18993;
var G__19003 = (i__18440_18994 + (1));
seq__18436_18991 = G__19000;
chunk__18438_18992 = G__19001;
count__18439_18993 = G__19002;
i__18440_18994 = G__19003;
continue;
}
} else {
var temp__5804__auto___19004 = cljs.core.seq(seq__18436_18991);
if(temp__5804__auto___19004){
var seq__18436_19005__$1 = temp__5804__auto___19004;
if(cljs.core.chunked_seq_QMARK_(seq__18436_19005__$1)){
var c__5568__auto___19006 = cljs.core.chunk_first(seq__18436_19005__$1);
var G__19007 = cljs.core.chunk_rest(seq__18436_19005__$1);
var G__19008 = c__5568__auto___19006;
var G__19009 = cljs.core.count(c__5568__auto___19006);
var G__19010 = (0);
seq__18436_18991 = G__19007;
chunk__18438_18992 = G__19008;
count__18439_18993 = G__19009;
i__18440_18994 = G__19010;
continue;
} else {
var child_19011 = cljs.core.first(seq__18436_19005__$1);
if(cljs.core.truth_(child_19011)){
node.appendChild(child_19011);


var G__19012 = cljs.core.next(seq__18436_19005__$1);
var G__19013 = null;
var G__19014 = (0);
var G__19015 = (0);
seq__18436_18991 = G__19012;
chunk__18438_18992 = G__19013;
count__18439_18993 = G__19014;
i__18440_18994 = G__19015;
continue;
} else {
var G__19016 = cljs.core.next(seq__18436_19005__$1);
var G__19017 = null;
var G__19018 = (0);
var G__19019 = (0);
seq__18436_18991 = G__19016;
chunk__18438_18992 = G__19017;
count__18439_18993 = G__19018;
i__18440_18994 = G__19019;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18990);
}
}


var G__19020 = seq__18381_18984;
var G__19021 = chunk__18383_18985;
var G__19022 = count__18384_18986;
var G__19023 = (i__18385_18987 + (1));
seq__18381_18984 = G__19020;
chunk__18383_18985 = G__19021;
count__18384_18986 = G__19022;
i__18385_18987 = G__19023;
continue;
} else {
var G__19024 = seq__18381_18984;
var G__19025 = chunk__18383_18985;
var G__19026 = count__18384_18986;
var G__19027 = (i__18385_18987 + (1));
seq__18381_18984 = G__19024;
chunk__18383_18985 = G__19025;
count__18384_18986 = G__19026;
i__18385_18987 = G__19027;
continue;
}
} else {
var temp__5804__auto___19028 = cljs.core.seq(seq__18381_18984);
if(temp__5804__auto___19028){
var seq__18381_19029__$1 = temp__5804__auto___19028;
if(cljs.core.chunked_seq_QMARK_(seq__18381_19029__$1)){
var c__5568__auto___19030 = cljs.core.chunk_first(seq__18381_19029__$1);
var G__19031 = cljs.core.chunk_rest(seq__18381_19029__$1);
var G__19032 = c__5568__auto___19030;
var G__19033 = cljs.core.count(c__5568__auto___19030);
var G__19034 = (0);
seq__18381_18984 = G__19031;
chunk__18383_18985 = G__19032;
count__18384_18986 = G__19033;
i__18385_18987 = G__19034;
continue;
} else {
var child_struct_19035 = cljs.core.first(seq__18381_19029__$1);
if((!((child_struct_19035 == null)))){
if(typeof child_struct_19035 === 'string'){
var text_19036 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19036),child_struct_19035].join(''));
} else {
var children_19037 = shadow.dom.svg_node(child_struct_19035);
if(cljs.core.seq_QMARK_(children_19037)){
var seq__18497_19038 = cljs.core.seq(children_19037);
var chunk__18499_19039 = null;
var count__18500_19040 = (0);
var i__18501_19041 = (0);
while(true){
if((i__18501_19041 < count__18500_19040)){
var child_19042 = chunk__18499_19039.cljs$core$IIndexed$_nth$arity$2(null,i__18501_19041);
if(cljs.core.truth_(child_19042)){
node.appendChild(child_19042);


var G__19043 = seq__18497_19038;
var G__19044 = chunk__18499_19039;
var G__19045 = count__18500_19040;
var G__19046 = (i__18501_19041 + (1));
seq__18497_19038 = G__19043;
chunk__18499_19039 = G__19044;
count__18500_19040 = G__19045;
i__18501_19041 = G__19046;
continue;
} else {
var G__19047 = seq__18497_19038;
var G__19048 = chunk__18499_19039;
var G__19049 = count__18500_19040;
var G__19050 = (i__18501_19041 + (1));
seq__18497_19038 = G__19047;
chunk__18499_19039 = G__19048;
count__18500_19040 = G__19049;
i__18501_19041 = G__19050;
continue;
}
} else {
var temp__5804__auto___19051__$1 = cljs.core.seq(seq__18497_19038);
if(temp__5804__auto___19051__$1){
var seq__18497_19052__$1 = temp__5804__auto___19051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18497_19052__$1)){
var c__5568__auto___19053 = cljs.core.chunk_first(seq__18497_19052__$1);
var G__19054 = cljs.core.chunk_rest(seq__18497_19052__$1);
var G__19055 = c__5568__auto___19053;
var G__19056 = cljs.core.count(c__5568__auto___19053);
var G__19057 = (0);
seq__18497_19038 = G__19054;
chunk__18499_19039 = G__19055;
count__18500_19040 = G__19056;
i__18501_19041 = G__19057;
continue;
} else {
var child_19058 = cljs.core.first(seq__18497_19052__$1);
if(cljs.core.truth_(child_19058)){
node.appendChild(child_19058);


var G__19059 = cljs.core.next(seq__18497_19052__$1);
var G__19060 = null;
var G__19061 = (0);
var G__19062 = (0);
seq__18497_19038 = G__19059;
chunk__18499_19039 = G__19060;
count__18500_19040 = G__19061;
i__18501_19041 = G__19062;
continue;
} else {
var G__19063 = cljs.core.next(seq__18497_19052__$1);
var G__19064 = null;
var G__19065 = (0);
var G__19066 = (0);
seq__18497_19038 = G__19063;
chunk__18499_19039 = G__19064;
count__18500_19040 = G__19065;
i__18501_19041 = G__19066;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19037);
}
}


var G__19071 = cljs.core.next(seq__18381_19029__$1);
var G__19072 = null;
var G__19073 = (0);
var G__19074 = (0);
seq__18381_18984 = G__19071;
chunk__18383_18985 = G__19072;
count__18384_18986 = G__19073;
i__18385_18987 = G__19074;
continue;
} else {
var G__19075 = cljs.core.next(seq__18381_19029__$1);
var G__19076 = null;
var G__19077 = (0);
var G__19078 = (0);
seq__18381_18984 = G__19075;
chunk__18383_18985 = G__19076;
count__18384_18986 = G__19077;
i__18385_18987 = G__19078;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19080 = arguments.length;
var i__5770__auto___19081 = (0);
while(true){
if((i__5770__auto___19081 < len__5769__auto___19080)){
args__5775__auto__.push((arguments[i__5770__auto___19081]));

var G__19082 = (i__5770__auto___19081 + (1));
i__5770__auto___19081 = G__19082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18516){
var G__18517 = cljs.core.first(seq18516);
var seq18516__$1 = cljs.core.next(seq18516);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18517,seq18516__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18522 = arguments.length;
switch (G__18522) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13762__auto___19084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_18531){
var state_val_18532 = (state_18531[(1)]);
if((state_val_18532 === (1))){
var state_18531__$1 = state_18531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18531__$1,(2),once_or_cleanup);
} else {
if((state_val_18532 === (2))){
var inst_18528 = (state_18531[(2)]);
var inst_18529 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18531__$1 = (function (){var statearr_18537 = state_18531;
(statearr_18537[(7)] = inst_18528);

return statearr_18537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18531__$1,inst_18529);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13415__auto__ = null;
var shadow$dom$state_machine__13415__auto____0 = (function (){
var statearr_18538 = [null,null,null,null,null,null,null,null];
(statearr_18538[(0)] = shadow$dom$state_machine__13415__auto__);

(statearr_18538[(1)] = (1));

return statearr_18538;
});
var shadow$dom$state_machine__13415__auto____1 = (function (state_18531){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_18531);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e18539){var ex__13418__auto__ = e18539;
var statearr_18540_19086 = state_18531;
(statearr_18540_19086[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_18531[(4)]))){
var statearr_18541_19087 = state_18531;
(statearr_18541_19087[(1)] = cljs.core.first((state_18531[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19088 = state_18531;
state_18531 = G__19088;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
shadow$dom$state_machine__13415__auto__ = function(state_18531){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13415__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13415__auto____1.call(this,state_18531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13415__auto____0;
shadow$dom$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13415__auto____1;
return shadow$dom$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_18542 = f__13763__auto__();
(statearr_18542[(6)] = c__13762__auto___19084);

return statearr_18542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
