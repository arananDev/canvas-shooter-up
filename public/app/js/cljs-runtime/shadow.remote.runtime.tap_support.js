goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19496,p__19497){
var map__19498 = p__19496;
var map__19498__$1 = cljs.core.__destructure_map(map__19498);
var svc = map__19498__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19498__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19498__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19498__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19499 = p__19497;
var map__19499__$1 = cljs.core.__destructure_map(map__19499);
var msg = map__19499__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19499__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19500,p__19501){
var map__19504 = p__19500;
var map__19504__$1 = cljs.core.__destructure_map(map__19504);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19504__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19505 = p__19501;
var map__19505__$1 = cljs.core.__destructure_map(map__19505);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19505__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19512,p__19513){
var map__19515 = p__19512;
var map__19515__$1 = cljs.core.__destructure_map(map__19515);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19515__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19515__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19516 = p__19513;
var map__19516__$1 = cljs.core.__destructure_map(map__19516);
var msg = map__19516__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19516__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19525,tid){
var map__19526 = p__19525;
var map__19526__$1 = cljs.core.__destructure_map(map__19526);
var svc = map__19526__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19526__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19540 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19541 = null;
var count__19542 = (0);
var i__19543 = (0);
while(true){
if((i__19543 < count__19542)){
var vec__19551 = chunk__19541.cljs$core$IIndexed$_nth$arity$2(null,i__19543);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19583 = seq__19540;
var G__19584 = chunk__19541;
var G__19585 = count__19542;
var G__19586 = (i__19543 + (1));
seq__19540 = G__19583;
chunk__19541 = G__19584;
count__19542 = G__19585;
i__19543 = G__19586;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19540);
if(temp__5804__auto__){
var seq__19540__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19540__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19540__$1);
var G__19587 = cljs.core.chunk_rest(seq__19540__$1);
var G__19588 = c__5568__auto__;
var G__19589 = cljs.core.count(c__5568__auto__);
var G__19590 = (0);
seq__19540 = G__19587;
chunk__19541 = G__19588;
count__19542 = G__19589;
i__19543 = G__19590;
continue;
} else {
var vec__19554 = cljs.core.first(seq__19540__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19591 = cljs.core.next(seq__19540__$1);
var G__19592 = null;
var G__19593 = (0);
var G__19594 = (0);
seq__19540 = G__19591;
chunk__19541 = G__19592;
count__19542 = G__19593;
i__19543 = G__19594;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19527_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19527_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19528_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19528_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19529_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19529_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19530_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19530_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__19562){
var map__19563 = p__19562;
var map__19563__$1 = cljs.core.__destructure_map(map__19563);
var svc = map__19563__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19563__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
