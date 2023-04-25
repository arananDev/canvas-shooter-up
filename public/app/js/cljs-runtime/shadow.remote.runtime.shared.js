goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13933){
var map__13934 = p__13933;
var map__13934__$1 = cljs.core.__destructure_map(map__13934);
var runtime = map__13934__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13934__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14157 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14157)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13941 = runtime;
var G__13942 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14157);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13941,G__13942) : shadow.remote.runtime.shared.process.call(null,G__13941,G__13942));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13943,res){
var map__13944 = p__13943;
var map__13944__$1 = cljs.core.__destructure_map(map__13944);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13944__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13944__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13945 = res;
var G__13945__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13945,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13945);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13945__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13945__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13953 = arguments.length;
switch (G__13953) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13958,msg,handlers,timeout_after_ms){
var map__13959 = p__13958;
var map__13959__$1 = cljs.core.__destructure_map(map__13959);
var runtime = map__13959__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14182 = arguments.length;
var i__5770__auto___14183 = (0);
while(true){
if((i__5770__auto___14183 < len__5769__auto___14182)){
args__5775__auto__.push((arguments[i__5770__auto___14183]));

var G__14184 = (i__5770__auto___14183 + (1));
i__5770__auto___14183 = G__14184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13972,ev,args){
var map__13975 = p__13972;
var map__13975__$1 = cljs.core.__destructure_map(map__13975);
var runtime = map__13975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13981 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13984 = null;
var count__13985 = (0);
var i__13986 = (0);
while(true){
if((i__13986 < count__13985)){
var ext = chunk__13984.cljs$core$IIndexed$_nth$arity$2(null,i__13986);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14187 = seq__13981;
var G__14188 = chunk__13984;
var G__14189 = count__13985;
var G__14190 = (i__13986 + (1));
seq__13981 = G__14187;
chunk__13984 = G__14188;
count__13985 = G__14189;
i__13986 = G__14190;
continue;
} else {
var G__14192 = seq__13981;
var G__14193 = chunk__13984;
var G__14194 = count__13985;
var G__14195 = (i__13986 + (1));
seq__13981 = G__14192;
chunk__13984 = G__14193;
count__13985 = G__14194;
i__13986 = G__14195;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13981);
if(temp__5804__auto__){
var seq__13981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13981__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13981__$1);
var G__14196 = cljs.core.chunk_rest(seq__13981__$1);
var G__14197 = c__5568__auto__;
var G__14198 = cljs.core.count(c__5568__auto__);
var G__14199 = (0);
seq__13981 = G__14196;
chunk__13984 = G__14197;
count__13985 = G__14198;
i__13986 = G__14199;
continue;
} else {
var ext = cljs.core.first(seq__13981__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14202 = cljs.core.next(seq__13981__$1);
var G__14203 = null;
var G__14204 = (0);
var G__14205 = (0);
seq__13981 = G__14202;
chunk__13984 = G__14203;
count__13985 = G__14204;
i__13986 = G__14205;
continue;
} else {
var G__14206 = cljs.core.next(seq__13981__$1);
var G__14207 = null;
var G__14208 = (0);
var G__14209 = (0);
seq__13981 = G__14206;
chunk__13984 = G__14207;
count__13985 = G__14208;
i__13986 = G__14209;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13965){
var G__13966 = cljs.core.first(seq13965);
var seq13965__$1 = cljs.core.next(seq13965);
var G__13967 = cljs.core.first(seq13965__$1);
var seq13965__$2 = cljs.core.next(seq13965__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13966,G__13967,seq13965__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14014,p__14015){
var map__14016 = p__14014;
var map__14016__$1 = cljs.core.__destructure_map(map__14016);
var runtime = map__14016__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14016__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14017 = p__14015;
var map__14017__$1 = cljs.core.__destructure_map(map__14017);
var msg = map__14017__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__14020 = cljs.core.deref(state_ref);
var map__14020__$1 = cljs.core.__destructure_map(map__14020);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14020__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14020__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14025,msg){
var map__14027 = p__14025;
var map__14027__$1 = cljs.core.__destructure_map(map__14027);
var runtime = map__14027__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14027__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14034,key,p__14035){
var map__14037 = p__14034;
var map__14037__$1 = cljs.core.__destructure_map(map__14037);
var state = map__14037__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14038 = p__14035;
var map__14038__$1 = cljs.core.__destructure_map(map__14038);
var spec = map__14038__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14038__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14049,key,spec){
var map__14052 = p__14049;
var map__14052__$1 = cljs.core.__destructure_map(map__14052);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14053_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14053_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14054_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14054_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14055_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14055_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14056_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14056_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14057_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14057_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14071,key){
var map__14072 = p__14071;
var map__14072__$1 = cljs.core.__destructure_map(map__14072);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14072__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14083,msg){
var map__14086 = p__14083;
var map__14086__$1 = cljs.core.__destructure_map(map__14086);
var runtime = map__14086__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14099,p__14100){
var map__14101 = p__14099;
var map__14101__$1 = cljs.core.__destructure_map(map__14101);
var runtime = map__14101__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14101__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14102 = p__14100;
var map__14102__$1 = cljs.core.__destructure_map(map__14102);
var msg = map__14102__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14115 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14117 = null;
var count__14118 = (0);
var i__14119 = (0);
while(true){
if((i__14119 < count__14118)){
var map__14142 = chunk__14117.cljs$core$IIndexed$_nth$arity$2(null,i__14119);
var map__14142__$1 = cljs.core.__destructure_map(map__14142);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14142__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14251 = seq__14115;
var G__14252 = chunk__14117;
var G__14253 = count__14118;
var G__14254 = (i__14119 + (1));
seq__14115 = G__14251;
chunk__14117 = G__14252;
count__14118 = G__14253;
i__14119 = G__14254;
continue;
} else {
var G__14255 = seq__14115;
var G__14256 = chunk__14117;
var G__14257 = count__14118;
var G__14258 = (i__14119 + (1));
seq__14115 = G__14255;
chunk__14117 = G__14256;
count__14118 = G__14257;
i__14119 = G__14258;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14115);
if(temp__5804__auto__){
var seq__14115__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14115__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14115__$1);
var G__14261 = cljs.core.chunk_rest(seq__14115__$1);
var G__14262 = c__5568__auto__;
var G__14263 = cljs.core.count(c__5568__auto__);
var G__14264 = (0);
seq__14115 = G__14261;
chunk__14117 = G__14262;
count__14118 = G__14263;
i__14119 = G__14264;
continue;
} else {
var map__14146 = cljs.core.first(seq__14115__$1);
var map__14146__$1 = cljs.core.__destructure_map(map__14146);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14146__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14266 = cljs.core.next(seq__14115__$1);
var G__14267 = null;
var G__14268 = (0);
var G__14269 = (0);
seq__14115 = G__14266;
chunk__14117 = G__14267;
count__14118 = G__14268;
i__14119 = G__14269;
continue;
} else {
var G__14270 = cljs.core.next(seq__14115__$1);
var G__14271 = null;
var G__14272 = (0);
var G__14273 = (0);
seq__14115 = G__14270;
chunk__14117 = G__14271;
count__14118 = G__14272;
i__14119 = G__14273;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
