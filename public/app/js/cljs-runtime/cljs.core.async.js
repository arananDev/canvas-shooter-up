goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13844 = (function (f,blockable,meta13845){
this.f = f;
this.blockable = blockable;
this.meta13845 = meta13845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13846,meta13845__$1){
var self__ = this;
var _13846__$1 = this;
return (new cljs.core.async.t_cljs$core$async13844(self__.f,self__.blockable,meta13845__$1));
}));

(cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13846){
var self__ = this;
var _13846__$1 = this;
return self__.meta13845;
}));

(cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13845","meta13845",-815187015,null)], null);
}));

(cljs.core.async.t_cljs$core$async13844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13844");

(cljs.core.async.t_cljs$core$async13844.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13844.
 */
cljs.core.async.__GT_t_cljs$core$async13844 = (function cljs$core$async$__GT_t_cljs$core$async13844(f,blockable,meta13845){
return (new cljs.core.async.t_cljs$core$async13844(f,blockable,meta13845));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13841 = arguments.length;
switch (G__13841) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13844(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13859 = arguments.length;
switch (G__13859) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13871 = arguments.length;
switch (G__13871) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13879 = arguments.length;
switch (G__13879) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17059 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17059) : fn1.call(null,val_17059));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17059) : fn1.call(null,val_17059));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13887 = arguments.length;
switch (G__13887) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17064 = n;
var x_17065 = (0);
while(true){
if((x_17065 < n__5636__auto___17064)){
(a[x_17065] = x_17065);

var G__17067 = (x_17065 + (1));
x_17065 = G__17067;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13893 = (function (flag,meta13894){
this.flag = flag;
this.meta13894 = meta13894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13895,meta13894__$1){
var self__ = this;
var _13895__$1 = this;
return (new cljs.core.async.t_cljs$core$async13893(self__.flag,meta13894__$1));
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13895){
var self__ = this;
var _13895__$1 = this;
return self__.meta13894;
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13894","meta13894",-1452766245,null)], null);
}));

(cljs.core.async.t_cljs$core$async13893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13893");

(cljs.core.async.t_cljs$core$async13893.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13893.
 */
cljs.core.async.__GT_t_cljs$core$async13893 = (function cljs$core$async$__GT_t_cljs$core$async13893(flag,meta13894){
return (new cljs.core.async.t_cljs$core$async13893(flag,meta13894));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13893(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13902 = (function (flag,cb,meta13903){
this.flag = flag;
this.cb = cb;
this.meta13903 = meta13903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13904,meta13903__$1){
var self__ = this;
var _13904__$1 = this;
return (new cljs.core.async.t_cljs$core$async13902(self__.flag,self__.cb,meta13903__$1));
}));

(cljs.core.async.t_cljs$core$async13902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13904){
var self__ = this;
var _13904__$1 = this;
return self__.meta13903;
}));

(cljs.core.async.t_cljs$core$async13902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13903","meta13903",-21691177,null)], null);
}));

(cljs.core.async.t_cljs$core$async13902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13902");

(cljs.core.async.t_cljs$core$async13902.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13902.
 */
cljs.core.async.__GT_t_cljs$core$async13902 = (function cljs$core$async$__GT_t_cljs$core$async13902(flag,cb,meta13903){
return (new cljs.core.async.t_cljs$core$async13902(flag,cb,meta13903));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13902(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13915_SHARP_){
var G__13919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13915_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13919) : fret.call(null,G__13919));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13916_SHARP_){
var G__13921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13916_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13921) : fret.call(null,G__13921));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17086 = (i + (1));
i = G__17086;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17087 = arguments.length;
var i__5770__auto___17088 = (0);
while(true){
if((i__5770__auto___17088 < len__5769__auto___17087)){
args__5775__auto__.push((arguments[i__5770__auto___17088]));

var G__17089 = (i__5770__auto___17088 + (1));
i__5770__auto___17088 = G__17089;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13939){
var map__13940 = p__13939;
var map__13940__$1 = cljs.core.__destructure_map(map__13940);
var opts = map__13940__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13930){
var G__13932 = cljs.core.first(seq13930);
var seq13930__$1 = cljs.core.next(seq13930);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13932,seq13930__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13947 = arguments.length;
switch (G__13947) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13762__auto___17091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14011){
var state_val_14012 = (state_14011[(1)]);
if((state_val_14012 === (7))){
var inst_14007 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
var statearr_14013_17092 = state_14011__$1;
(statearr_14013_17092[(2)] = inst_14007);

(statearr_14013_17092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (1))){
var state_14011__$1 = state_14011;
var statearr_14018_17093 = state_14011__$1;
(statearr_14018_17093[(2)] = null);

(statearr_14018_17093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (4))){
var inst_13971 = (state_14011[(7)]);
var inst_13971__$1 = (state_14011[(2)]);
var inst_13973 = (inst_13971__$1 == null);
var state_14011__$1 = (function (){var statearr_14021 = state_14011;
(statearr_14021[(7)] = inst_13971__$1);

return statearr_14021;
})();
if(cljs.core.truth_(inst_13973)){
var statearr_14022_17094 = state_14011__$1;
(statearr_14022_17094[(1)] = (5));

} else {
var statearr_14023_17095 = state_14011__$1;
(statearr_14023_17095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (13))){
var state_14011__$1 = state_14011;
var statearr_14026_17096 = state_14011__$1;
(statearr_14026_17096[(2)] = null);

(statearr_14026_17096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (6))){
var inst_13971 = (state_14011[(7)]);
var state_14011__$1 = state_14011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14011__$1,(11),to,inst_13971);
} else {
if((state_val_14012 === (3))){
var inst_14009 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14011__$1,inst_14009);
} else {
if((state_val_14012 === (12))){
var state_14011__$1 = state_14011;
var statearr_14032_17098 = state_14011__$1;
(statearr_14032_17098[(2)] = null);

(statearr_14032_17098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (2))){
var state_14011__$1 = state_14011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14011__$1,(4),from);
} else {
if((state_val_14012 === (11))){
var inst_14000 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
if(cljs.core.truth_(inst_14000)){
var statearr_14033_17099 = state_14011__$1;
(statearr_14033_17099[(1)] = (12));

} else {
var statearr_14036_17100 = state_14011__$1;
(statearr_14036_17100[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (9))){
var state_14011__$1 = state_14011;
var statearr_14039_17101 = state_14011__$1;
(statearr_14039_17101[(2)] = null);

(statearr_14039_17101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (5))){
var state_14011__$1 = state_14011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14040_17102 = state_14011__$1;
(statearr_14040_17102[(1)] = (8));

} else {
var statearr_14041_17103 = state_14011__$1;
(statearr_14041_17103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (14))){
var inst_14005 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
var statearr_14042_17104 = state_14011__$1;
(statearr_14042_17104[(2)] = inst_14005);

(statearr_14042_17104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (10))){
var inst_13997 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
var statearr_14043_17106 = state_14011__$1;
(statearr_14043_17106[(2)] = inst_13997);

(statearr_14043_17106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (8))){
var inst_13979 = cljs.core.async.close_BANG_(to);
var state_14011__$1 = state_14011;
var statearr_14044_17108 = state_14011__$1;
(statearr_14044_17108[(2)] = inst_13979);

(statearr_14044_17108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_14045 = [null,null,null,null,null,null,null,null];
(statearr_14045[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_14045[(1)] = (1));

return statearr_14045;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_14011){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14011);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14046){var ex__13418__auto__ = e14046;
var statearr_14047_17110 = state_14011;
(statearr_14047_17110[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14011[(4)]))){
var statearr_14048_17111 = state_14011;
(statearr_14048_17111[(1)] = cljs.core.first((state_14011[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17115 = state_14011;
state_14011 = G__17115;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_14011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_14011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14050 = f__13763__auto__();
(statearr_14050[(6)] = c__13762__auto___17091);

return statearr_14050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14067){
var vec__14068 = p__14067;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14068,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14068,(1),null);
var job = vec__14068;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13762__auto___17125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14077){
var state_val_14079 = (state_14077[(1)]);
if((state_val_14079 === (1))){
var state_14077__$1 = state_14077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14077__$1,(2),res,v);
} else {
if((state_val_14079 === (2))){
var inst_14074 = (state_14077[(2)]);
var inst_14075 = cljs.core.async.close_BANG_(res);
var state_14077__$1 = (function (){var statearr_14081 = state_14077;
(statearr_14081[(7)] = inst_14074);

return statearr_14081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14077__$1,inst_14075);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0 = (function (){
var statearr_14087 = [null,null,null,null,null,null,null,null];
(statearr_14087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__);

(statearr_14087[(1)] = (1));

return statearr_14087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1 = (function (state_14077){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14077);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14092){var ex__13418__auto__ = e14092;
var statearr_14096_17127 = state_14077;
(statearr_14096_17127[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14077[(4)]))){
var statearr_14097_17129 = state_14077;
(statearr_14097_17129[(1)] = cljs.core.first((state_14077[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17130 = state_14077;
state_14077 = G__17130;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = function(state_14077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1.call(this,state_14077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14098 = f__13763__auto__();
(statearr_14098[(6)] = c__13762__auto___17125);

return statearr_14098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14103){
var vec__14104 = p__14103;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(1),null);
var job = vec__14104;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17136 = n;
var __17137 = (0);
while(true){
if((__17137 < n__5636__auto___17136)){
var G__14113_17138 = type;
var G__14113_17139__$1 = (((G__14113_17138 instanceof cljs.core.Keyword))?G__14113_17138.fqn:null);
switch (G__14113_17139__$1) {
case "compute":
var c__13762__auto___17141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17137,c__13762__auto___17141,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async){
return (function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = ((function (__17137,c__13762__auto___17141,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async){
return (function (state_14135){
var state_val_14136 = (state_14135[(1)]);
if((state_val_14136 === (1))){
var state_14135__$1 = state_14135;
var statearr_14138_17147 = state_14135__$1;
(statearr_14138_17147[(2)] = null);

(statearr_14138_17147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (2))){
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14135__$1,(4),jobs);
} else {
if((state_val_14136 === (3))){
var inst_14130 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14135__$1,inst_14130);
} else {
if((state_val_14136 === (4))){
var inst_14122 = (state_14135[(2)]);
var inst_14123 = process__$1(inst_14122);
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14123)){
var statearr_14141_17149 = state_14135__$1;
(statearr_14141_17149[(1)] = (5));

} else {
var statearr_14143_17150 = state_14135__$1;
(statearr_14143_17150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (5))){
var state_14135__$1 = state_14135;
var statearr_14144_17151 = state_14135__$1;
(statearr_14144_17151[(2)] = null);

(statearr_14144_17151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (6))){
var state_14135__$1 = state_14135;
var statearr_14145_17152 = state_14135__$1;
(statearr_14145_17152[(2)] = null);

(statearr_14145_17152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (7))){
var inst_14128 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14147_17153 = state_14135__$1;
(statearr_14147_17153[(2)] = inst_14128);

(statearr_14147_17153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17137,c__13762__auto___17141,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async))
;
return ((function (__17137,switch__13414__auto__,c__13762__auto___17141,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0 = (function (){
var statearr_14148 = [null,null,null,null,null,null,null];
(statearr_14148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__);

(statearr_14148[(1)] = (1));

return statearr_14148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1 = (function (state_14135){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14135);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14151){var ex__13418__auto__ = e14151;
var statearr_14152_17154 = state_14135;
(statearr_14152_17154[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14135[(4)]))){
var statearr_14153_17158 = state_14135;
(statearr_14153_17158[(1)] = cljs.core.first((state_14135[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17159 = state_14135;
state_14135 = G__17159;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = function(state_14135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1.call(this,state_14135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__;
})()
;})(__17137,switch__13414__auto__,c__13762__auto___17141,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async))
})();
var state__13764__auto__ = (function (){var statearr_14156 = f__13763__auto__();
(statearr_14156[(6)] = c__13762__auto___17141);

return statearr_14156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
});})(__17137,c__13762__auto___17141,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async))
);


break;
case "async":
var c__13762__auto___17161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17137,c__13762__auto___17161,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async){
return (function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = ((function (__17137,c__13762__auto___17161,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async){
return (function (state_14170){
var state_val_14174 = (state_14170[(1)]);
if((state_val_14174 === (1))){
var state_14170__$1 = state_14170;
var statearr_14176_17163 = state_14170__$1;
(statearr_14176_17163[(2)] = null);

(statearr_14176_17163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14174 === (2))){
var state_14170__$1 = state_14170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14170__$1,(4),jobs);
} else {
if((state_val_14174 === (3))){
var inst_14168 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14170__$1,inst_14168);
} else {
if((state_val_14174 === (4))){
var inst_14160 = (state_14170[(2)]);
var inst_14161 = async(inst_14160);
var state_14170__$1 = state_14170;
if(cljs.core.truth_(inst_14161)){
var statearr_14177_17164 = state_14170__$1;
(statearr_14177_17164[(1)] = (5));

} else {
var statearr_14179_17165 = state_14170__$1;
(statearr_14179_17165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14174 === (5))){
var state_14170__$1 = state_14170;
var statearr_14181_17166 = state_14170__$1;
(statearr_14181_17166[(2)] = null);

(statearr_14181_17166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14174 === (6))){
var state_14170__$1 = state_14170;
var statearr_14185_17167 = state_14170__$1;
(statearr_14185_17167[(2)] = null);

(statearr_14185_17167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14174 === (7))){
var inst_14166 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
var statearr_14186_17168 = state_14170__$1;
(statearr_14186_17168[(2)] = inst_14166);

(statearr_14186_17168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17137,c__13762__auto___17161,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async))
;
return ((function (__17137,switch__13414__auto__,c__13762__auto___17161,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0 = (function (){
var statearr_14191 = [null,null,null,null,null,null,null];
(statearr_14191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__);

(statearr_14191[(1)] = (1));

return statearr_14191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1 = (function (state_14170){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14170);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14200){var ex__13418__auto__ = e14200;
var statearr_14201_17170 = state_14170;
(statearr_14201_17170[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14170[(4)]))){
var statearr_14210_17171 = state_14170;
(statearr_14210_17171[(1)] = cljs.core.first((state_14170[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17172 = state_14170;
state_14170 = G__17172;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = function(state_14170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1.call(this,state_14170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__;
})()
;})(__17137,switch__13414__auto__,c__13762__auto___17161,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async))
})();
var state__13764__auto__ = (function (){var statearr_14211 = f__13763__auto__();
(statearr_14211[(6)] = c__13762__auto___17161);

return statearr_14211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
});})(__17137,c__13762__auto___17161,G__14113_17138,G__14113_17139__$1,n__5636__auto___17136,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14113_17139__$1)].join('')));

}

var G__17173 = (__17137 + (1));
__17137 = G__17173;
continue;
} else {
}
break;
}

var c__13762__auto___17174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14234){
var state_val_14235 = (state_14234[(1)]);
if((state_val_14235 === (7))){
var inst_14229 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14241_17175 = state_14234__$1;
(statearr_14241_17175[(2)] = inst_14229);

(statearr_14241_17175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (1))){
var state_14234__$1 = state_14234;
var statearr_14242_17176 = state_14234__$1;
(statearr_14242_17176[(2)] = null);

(statearr_14242_17176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (4))){
var inst_14214 = (state_14234[(7)]);
var inst_14214__$1 = (state_14234[(2)]);
var inst_14215 = (inst_14214__$1 == null);
var state_14234__$1 = (function (){var statearr_14245 = state_14234;
(statearr_14245[(7)] = inst_14214__$1);

return statearr_14245;
})();
if(cljs.core.truth_(inst_14215)){
var statearr_14247_17178 = state_14234__$1;
(statearr_14247_17178[(1)] = (5));

} else {
var statearr_14248_17179 = state_14234__$1;
(statearr_14248_17179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (6))){
var inst_14219 = (state_14234[(8)]);
var inst_14214 = (state_14234[(7)]);
var inst_14219__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14221 = [inst_14214,inst_14219__$1];
var inst_14222 = (new cljs.core.PersistentVector(null,2,(5),inst_14220,inst_14221,null));
var state_14234__$1 = (function (){var statearr_14249 = state_14234;
(statearr_14249[(8)] = inst_14219__$1);

return statearr_14249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14234__$1,(8),jobs,inst_14222);
} else {
if((state_val_14235 === (3))){
var inst_14231 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14234__$1,inst_14231);
} else {
if((state_val_14235 === (2))){
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14234__$1,(4),from);
} else {
if((state_val_14235 === (9))){
var inst_14226 = (state_14234[(2)]);
var state_14234__$1 = (function (){var statearr_14250 = state_14234;
(statearr_14250[(9)] = inst_14226);

return statearr_14250;
})();
var statearr_14259_17180 = state_14234__$1;
(statearr_14259_17180[(2)] = null);

(statearr_14259_17180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (5))){
var inst_14217 = cljs.core.async.close_BANG_(jobs);
var state_14234__$1 = state_14234;
var statearr_14265_17181 = state_14234__$1;
(statearr_14265_17181[(2)] = inst_14217);

(statearr_14265_17181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (8))){
var inst_14219 = (state_14234[(8)]);
var inst_14224 = (state_14234[(2)]);
var state_14234__$1 = (function (){var statearr_14274 = state_14234;
(statearr_14274[(10)] = inst_14224);

return statearr_14274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14234__$1,(9),results,inst_14219);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0 = (function (){
var statearr_14275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__);

(statearr_14275[(1)] = (1));

return statearr_14275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1 = (function (state_14234){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14234);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14276){var ex__13418__auto__ = e14276;
var statearr_14277_17182 = state_14234;
(statearr_14277_17182[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14234[(4)]))){
var statearr_14278_17183 = state_14234;
(statearr_14278_17183[(1)] = cljs.core.first((state_14234[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17184 = state_14234;
state_14234 = G__17184;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = function(state_14234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1.call(this,state_14234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14279 = f__13763__auto__();
(statearr_14279[(6)] = c__13762__auto___17174);

return statearr_14279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


var c__13762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14318){
var state_val_14319 = (state_14318[(1)]);
if((state_val_14319 === (7))){
var inst_14314 = (state_14318[(2)]);
var state_14318__$1 = state_14318;
var statearr_14322_17185 = state_14318__$1;
(statearr_14322_17185[(2)] = inst_14314);

(statearr_14322_17185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (20))){
var state_14318__$1 = state_14318;
var statearr_14323_17186 = state_14318__$1;
(statearr_14323_17186[(2)] = null);

(statearr_14323_17186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (1))){
var state_14318__$1 = state_14318;
var statearr_14326_17187 = state_14318__$1;
(statearr_14326_17187[(2)] = null);

(statearr_14326_17187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (4))){
var inst_14283 = (state_14318[(7)]);
var inst_14283__$1 = (state_14318[(2)]);
var inst_14284 = (inst_14283__$1 == null);
var state_14318__$1 = (function (){var statearr_14328 = state_14318;
(statearr_14328[(7)] = inst_14283__$1);

return statearr_14328;
})();
if(cljs.core.truth_(inst_14284)){
var statearr_14329_17191 = state_14318__$1;
(statearr_14329_17191[(1)] = (5));

} else {
var statearr_14330_17192 = state_14318__$1;
(statearr_14330_17192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (15))){
var inst_14296 = (state_14318[(8)]);
var state_14318__$1 = state_14318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14318__$1,(18),to,inst_14296);
} else {
if((state_val_14319 === (21))){
var inst_14309 = (state_14318[(2)]);
var state_14318__$1 = state_14318;
var statearr_14333_17194 = state_14318__$1;
(statearr_14333_17194[(2)] = inst_14309);

(statearr_14333_17194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (13))){
var inst_14311 = (state_14318[(2)]);
var state_14318__$1 = (function (){var statearr_14341 = state_14318;
(statearr_14341[(9)] = inst_14311);

return statearr_14341;
})();
var statearr_14346_17195 = state_14318__$1;
(statearr_14346_17195[(2)] = null);

(statearr_14346_17195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (6))){
var inst_14283 = (state_14318[(7)]);
var state_14318__$1 = state_14318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14318__$1,(11),inst_14283);
} else {
if((state_val_14319 === (17))){
var inst_14304 = (state_14318[(2)]);
var state_14318__$1 = state_14318;
if(cljs.core.truth_(inst_14304)){
var statearr_14366_17196 = state_14318__$1;
(statearr_14366_17196[(1)] = (19));

} else {
var statearr_14367_17197 = state_14318__$1;
(statearr_14367_17197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (3))){
var inst_14316 = (state_14318[(2)]);
var state_14318__$1 = state_14318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14318__$1,inst_14316);
} else {
if((state_val_14319 === (12))){
var inst_14293 = (state_14318[(10)]);
var state_14318__$1 = state_14318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14318__$1,(14),inst_14293);
} else {
if((state_val_14319 === (2))){
var state_14318__$1 = state_14318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14318__$1,(4),results);
} else {
if((state_val_14319 === (19))){
var state_14318__$1 = state_14318;
var statearr_14384_17203 = state_14318__$1;
(statearr_14384_17203[(2)] = null);

(statearr_14384_17203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (11))){
var inst_14293 = (state_14318[(2)]);
var state_14318__$1 = (function (){var statearr_14390 = state_14318;
(statearr_14390[(10)] = inst_14293);

return statearr_14390;
})();
var statearr_14391_17204 = state_14318__$1;
(statearr_14391_17204[(2)] = null);

(statearr_14391_17204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (9))){
var state_14318__$1 = state_14318;
var statearr_14392_17205 = state_14318__$1;
(statearr_14392_17205[(2)] = null);

(statearr_14392_17205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (5))){
var state_14318__$1 = state_14318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14398_17206 = state_14318__$1;
(statearr_14398_17206[(1)] = (8));

} else {
var statearr_14403_17207 = state_14318__$1;
(statearr_14403_17207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (14))){
var inst_14298 = (state_14318[(11)]);
var inst_14296 = (state_14318[(8)]);
var inst_14296__$1 = (state_14318[(2)]);
var inst_14297 = (inst_14296__$1 == null);
var inst_14298__$1 = cljs.core.not(inst_14297);
var state_14318__$1 = (function (){var statearr_14416 = state_14318;
(statearr_14416[(11)] = inst_14298__$1);

(statearr_14416[(8)] = inst_14296__$1);

return statearr_14416;
})();
if(inst_14298__$1){
var statearr_14417_17208 = state_14318__$1;
(statearr_14417_17208[(1)] = (15));

} else {
var statearr_14418_17209 = state_14318__$1;
(statearr_14418_17209[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (16))){
var inst_14298 = (state_14318[(11)]);
var state_14318__$1 = state_14318;
var statearr_14424_17210 = state_14318__$1;
(statearr_14424_17210[(2)] = inst_14298);

(statearr_14424_17210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (10))){
var inst_14290 = (state_14318[(2)]);
var state_14318__$1 = state_14318;
var statearr_14433_17214 = state_14318__$1;
(statearr_14433_17214[(2)] = inst_14290);

(statearr_14433_17214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (18))){
var inst_14301 = (state_14318[(2)]);
var state_14318__$1 = state_14318;
var statearr_14444_17219 = state_14318__$1;
(statearr_14444_17219[(2)] = inst_14301);

(statearr_14444_17219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14319 === (8))){
var inst_14287 = cljs.core.async.close_BANG_(to);
var state_14318__$1 = state_14318;
var statearr_14446_17220 = state_14318__$1;
(statearr_14446_17220[(2)] = inst_14287);

(statearr_14446_17220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0 = (function (){
var statearr_14448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__);

(statearr_14448[(1)] = (1));

return statearr_14448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1 = (function (state_14318){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14318);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14449){var ex__13418__auto__ = e14449;
var statearr_14450_17224 = state_14318;
(statearr_14450_17224[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14318[(4)]))){
var statearr_14451_17225 = state_14318;
(statearr_14451_17225[(1)] = cljs.core.first((state_14318[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17226 = state_14318;
state_14318 = G__17226;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__ = function(state_14318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1.call(this,state_14318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14452 = f__13763__auto__();
(statearr_14452[(6)] = c__13762__auto__);

return statearr_14452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));

return c__13762__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14458 = arguments.length;
switch (G__14458) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14483 = arguments.length;
switch (G__14483) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14490 = arguments.length;
switch (G__14490) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13762__auto___17243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14519){
var state_val_14520 = (state_14519[(1)]);
if((state_val_14520 === (7))){
var inst_14515 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14532_17244 = state_14519__$1;
(statearr_14532_17244[(2)] = inst_14515);

(statearr_14532_17244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (1))){
var state_14519__$1 = state_14519;
var statearr_14533_17245 = state_14519__$1;
(statearr_14533_17245[(2)] = null);

(statearr_14533_17245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (4))){
var inst_14495 = (state_14519[(7)]);
var inst_14495__$1 = (state_14519[(2)]);
var inst_14496 = (inst_14495__$1 == null);
var state_14519__$1 = (function (){var statearr_14537 = state_14519;
(statearr_14537[(7)] = inst_14495__$1);

return statearr_14537;
})();
if(cljs.core.truth_(inst_14496)){
var statearr_14540_17249 = state_14519__$1;
(statearr_14540_17249[(1)] = (5));

} else {
var statearr_14541_17250 = state_14519__$1;
(statearr_14541_17250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (13))){
var state_14519__$1 = state_14519;
var statearr_14544_17255 = state_14519__$1;
(statearr_14544_17255[(2)] = null);

(statearr_14544_17255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (6))){
var inst_14495 = (state_14519[(7)]);
var inst_14502 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14495) : p.call(null,inst_14495));
var state_14519__$1 = state_14519;
if(cljs.core.truth_(inst_14502)){
var statearr_14545_17259 = state_14519__$1;
(statearr_14545_17259[(1)] = (9));

} else {
var statearr_14546_17260 = state_14519__$1;
(statearr_14546_17260[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (3))){
var inst_14517 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14519__$1,inst_14517);
} else {
if((state_val_14520 === (12))){
var state_14519__$1 = state_14519;
var statearr_14553_17261 = state_14519__$1;
(statearr_14553_17261[(2)] = null);

(statearr_14553_17261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (2))){
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14519__$1,(4),ch);
} else {
if((state_val_14520 === (11))){
var inst_14495 = (state_14519[(7)]);
var inst_14506 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14519__$1,(8),inst_14506,inst_14495);
} else {
if((state_val_14520 === (9))){
var state_14519__$1 = state_14519;
var statearr_14558_17265 = state_14519__$1;
(statearr_14558_17265[(2)] = tc);

(statearr_14558_17265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (5))){
var inst_14498 = cljs.core.async.close_BANG_(tc);
var inst_14499 = cljs.core.async.close_BANG_(fc);
var state_14519__$1 = (function (){var statearr_14559 = state_14519;
(statearr_14559[(8)] = inst_14498);

return statearr_14559;
})();
var statearr_14560_17266 = state_14519__$1;
(statearr_14560_17266[(2)] = inst_14499);

(statearr_14560_17266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (14))){
var inst_14513 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14563_17271 = state_14519__$1;
(statearr_14563_17271[(2)] = inst_14513);

(statearr_14563_17271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (10))){
var state_14519__$1 = state_14519;
var statearr_14564_17272 = state_14519__$1;
(statearr_14564_17272[(2)] = fc);

(statearr_14564_17272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (8))){
var inst_14508 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
if(cljs.core.truth_(inst_14508)){
var statearr_14570_17273 = state_14519__$1;
(statearr_14570_17273[(1)] = (12));

} else {
var statearr_14572_17274 = state_14519__$1;
(statearr_14572_17274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_14583 = [null,null,null,null,null,null,null,null,null];
(statearr_14583[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_14583[(1)] = (1));

return statearr_14583;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_14519){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14519);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14586){var ex__13418__auto__ = e14586;
var statearr_14587_17275 = state_14519;
(statearr_14587_17275[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14519[(4)]))){
var statearr_14588_17276 = state_14519;
(statearr_14588_17276[(1)] = cljs.core.first((state_14519[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17279 = state_14519;
state_14519 = G__17279;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_14519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_14519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14592 = f__13763__auto__();
(statearr_14592[(6)] = c__13762__auto___17243);

return statearr_14592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14623){
var state_val_14624 = (state_14623[(1)]);
if((state_val_14624 === (7))){
var inst_14619 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14630_17280 = state_14623__$1;
(statearr_14630_17280[(2)] = inst_14619);

(statearr_14630_17280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (1))){
var inst_14598 = init;
var inst_14599 = inst_14598;
var state_14623__$1 = (function (){var statearr_14632 = state_14623;
(statearr_14632[(7)] = inst_14599);

return statearr_14632;
})();
var statearr_14633_17281 = state_14623__$1;
(statearr_14633_17281[(2)] = null);

(statearr_14633_17281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (4))){
var inst_14602 = (state_14623[(8)]);
var inst_14602__$1 = (state_14623[(2)]);
var inst_14605 = (inst_14602__$1 == null);
var state_14623__$1 = (function (){var statearr_14638 = state_14623;
(statearr_14638[(8)] = inst_14602__$1);

return statearr_14638;
})();
if(cljs.core.truth_(inst_14605)){
var statearr_14639_17282 = state_14623__$1;
(statearr_14639_17282[(1)] = (5));

} else {
var statearr_14643_17283 = state_14623__$1;
(statearr_14643_17283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (6))){
var inst_14599 = (state_14623[(7)]);
var inst_14602 = (state_14623[(8)]);
var inst_14608 = (state_14623[(9)]);
var inst_14608__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14599,inst_14602) : f.call(null,inst_14599,inst_14602));
var inst_14611 = cljs.core.reduced_QMARK_(inst_14608__$1);
var state_14623__$1 = (function (){var statearr_14644 = state_14623;
(statearr_14644[(9)] = inst_14608__$1);

return statearr_14644;
})();
if(inst_14611){
var statearr_14647_17284 = state_14623__$1;
(statearr_14647_17284[(1)] = (8));

} else {
var statearr_14648_17285 = state_14623__$1;
(statearr_14648_17285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (3))){
var inst_14621 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14623__$1,inst_14621);
} else {
if((state_val_14624 === (2))){
var state_14623__$1 = state_14623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14623__$1,(4),ch);
} else {
if((state_val_14624 === (9))){
var inst_14608 = (state_14623[(9)]);
var inst_14599 = inst_14608;
var state_14623__$1 = (function (){var statearr_14652 = state_14623;
(statearr_14652[(7)] = inst_14599);

return statearr_14652;
})();
var statearr_14657_17286 = state_14623__$1;
(statearr_14657_17286[(2)] = null);

(statearr_14657_17286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (5))){
var inst_14599 = (state_14623[(7)]);
var state_14623__$1 = state_14623;
var statearr_14660_17287 = state_14623__$1;
(statearr_14660_17287[(2)] = inst_14599);

(statearr_14660_17287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (10))){
var inst_14617 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14661_17288 = state_14623__$1;
(statearr_14661_17288[(2)] = inst_14617);

(statearr_14661_17288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (8))){
var inst_14608 = (state_14623[(9)]);
var inst_14613 = cljs.core.deref(inst_14608);
var state_14623__$1 = state_14623;
var statearr_14665_17289 = state_14623__$1;
(statearr_14665_17289[(2)] = inst_14613);

(statearr_14665_17289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13415__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13415__auto____0 = (function (){
var statearr_14667 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14667[(0)] = cljs$core$async$reduce_$_state_machine__13415__auto__);

(statearr_14667[(1)] = (1));

return statearr_14667;
});
var cljs$core$async$reduce_$_state_machine__13415__auto____1 = (function (state_14623){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14623);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14670){var ex__13418__auto__ = e14670;
var statearr_14671_17290 = state_14623;
(statearr_14671_17290[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14623[(4)]))){
var statearr_14674_17291 = state_14623;
(statearr_14674_17291[(1)] = cljs.core.first((state_14623[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17292 = state_14623;
state_14623 = G__17292;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13415__auto__ = function(state_14623){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13415__auto____1.call(this,state_14623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13415__auto____0;
cljs$core$async$reduce_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13415__auto____1;
return cljs$core$async$reduce_$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14676 = f__13763__auto__();
(statearr_14676[(6)] = c__13762__auto__);

return statearr_14676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));

return c__13762__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14692){
var state_val_14693 = (state_14692[(1)]);
if((state_val_14693 === (1))){
var inst_14687 = cljs.core.async.reduce(f__$1,init,ch);
var state_14692__$1 = state_14692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14692__$1,(2),inst_14687);
} else {
if((state_val_14693 === (2))){
var inst_14689 = (state_14692[(2)]);
var inst_14690 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14689) : f__$1.call(null,inst_14689));
var state_14692__$1 = state_14692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14692__$1,inst_14690);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13415__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13415__auto____0 = (function (){
var statearr_14699 = [null,null,null,null,null,null,null];
(statearr_14699[(0)] = cljs$core$async$transduce_$_state_machine__13415__auto__);

(statearr_14699[(1)] = (1));

return statearr_14699;
});
var cljs$core$async$transduce_$_state_machine__13415__auto____1 = (function (state_14692){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14692);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14704){var ex__13418__auto__ = e14704;
var statearr_14705_17293 = state_14692;
(statearr_14705_17293[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14692[(4)]))){
var statearr_14706_17294 = state_14692;
(statearr_14706_17294[(1)] = cljs.core.first((state_14692[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17295 = state_14692;
state_14692 = G__17295;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13415__auto__ = function(state_14692){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13415__auto____1.call(this,state_14692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13415__auto____0;
cljs$core$async$transduce_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13415__auto____1;
return cljs$core$async$transduce_$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14712 = f__13763__auto__();
(statearr_14712[(6)] = c__13762__auto__);

return statearr_14712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));

return c__13762__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14714 = arguments.length;
switch (G__14714) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_14754){
var state_val_14755 = (state_14754[(1)]);
if((state_val_14755 === (7))){
var inst_14735 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14764_17297 = state_14754__$1;
(statearr_14764_17297[(2)] = inst_14735);

(statearr_14764_17297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (1))){
var inst_14729 = cljs.core.seq(coll);
var inst_14730 = inst_14729;
var state_14754__$1 = (function (){var statearr_14765 = state_14754;
(statearr_14765[(7)] = inst_14730);

return statearr_14765;
})();
var statearr_14766_17298 = state_14754__$1;
(statearr_14766_17298[(2)] = null);

(statearr_14766_17298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (4))){
var inst_14730 = (state_14754[(7)]);
var inst_14733 = cljs.core.first(inst_14730);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14754__$1,(7),ch,inst_14733);
} else {
if((state_val_14755 === (13))){
var inst_14748 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14768_17299 = state_14754__$1;
(statearr_14768_17299[(2)] = inst_14748);

(statearr_14768_17299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (6))){
var inst_14739 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
if(cljs.core.truth_(inst_14739)){
var statearr_14771_17303 = state_14754__$1;
(statearr_14771_17303[(1)] = (8));

} else {
var statearr_14774_17304 = state_14754__$1;
(statearr_14774_17304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (3))){
var inst_14752 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14754__$1,inst_14752);
} else {
if((state_val_14755 === (12))){
var state_14754__$1 = state_14754;
var statearr_14776_17305 = state_14754__$1;
(statearr_14776_17305[(2)] = null);

(statearr_14776_17305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (2))){
var inst_14730 = (state_14754[(7)]);
var state_14754__$1 = state_14754;
if(cljs.core.truth_(inst_14730)){
var statearr_14778_17306 = state_14754__$1;
(statearr_14778_17306[(1)] = (4));

} else {
var statearr_14780_17307 = state_14754__$1;
(statearr_14780_17307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (11))){
var inst_14745 = cljs.core.async.close_BANG_(ch);
var state_14754__$1 = state_14754;
var statearr_14785_17308 = state_14754__$1;
(statearr_14785_17308[(2)] = inst_14745);

(statearr_14785_17308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (9))){
var state_14754__$1 = state_14754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14787_17309 = state_14754__$1;
(statearr_14787_17309[(1)] = (11));

} else {
var statearr_14788_17310 = state_14754__$1;
(statearr_14788_17310[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (5))){
var inst_14730 = (state_14754[(7)]);
var state_14754__$1 = state_14754;
var statearr_14791_17311 = state_14754__$1;
(statearr_14791_17311[(2)] = inst_14730);

(statearr_14791_17311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (10))){
var inst_14750 = (state_14754[(2)]);
var state_14754__$1 = state_14754;
var statearr_14795_17312 = state_14754__$1;
(statearr_14795_17312[(2)] = inst_14750);

(statearr_14795_17312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14755 === (8))){
var inst_14730 = (state_14754[(7)]);
var inst_14741 = cljs.core.next(inst_14730);
var inst_14730__$1 = inst_14741;
var state_14754__$1 = (function (){var statearr_14796 = state_14754;
(statearr_14796[(7)] = inst_14730__$1);

return statearr_14796;
})();
var statearr_14797_17313 = state_14754__$1;
(statearr_14797_17313[(2)] = null);

(statearr_14797_17313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_14801 = [null,null,null,null,null,null,null,null];
(statearr_14801[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_14801[(1)] = (1));

return statearr_14801;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_14754){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_14754);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e14804){var ex__13418__auto__ = e14804;
var statearr_14805_17314 = state_14754;
(statearr_14805_17314[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_14754[(4)]))){
var statearr_14807_17315 = state_14754;
(statearr_14807_17315[(1)] = cljs.core.first((state_14754[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17316 = state_14754;
state_14754 = G__17316;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_14754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_14754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_14811 = f__13763__auto__();
(statearr_14811[(6)] = c__13762__auto__);

return statearr_14811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));

return c__13762__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14818 = arguments.length;
switch (G__14818) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17318 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17318(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17319 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17319(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17322 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17322(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17323 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17323(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14906 = (function (ch,cs,meta14907){
this.ch = ch;
this.cs = cs;
this.meta14907 = meta14907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14908,meta14907__$1){
var self__ = this;
var _14908__$1 = this;
return (new cljs.core.async.t_cljs$core$async14906(self__.ch,self__.cs,meta14907__$1));
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14908){
var self__ = this;
var _14908__$1 = this;
return self__.meta14907;
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14907","meta14907",-435648962,null)], null);
}));

(cljs.core.async.t_cljs$core$async14906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14906");

(cljs.core.async.t_cljs$core$async14906.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14906.
 */
cljs.core.async.__GT_t_cljs$core$async14906 = (function cljs$core$async$__GT_t_cljs$core$async14906(ch,cs,meta14907){
return (new cljs.core.async.t_cljs$core$async14906(ch,cs,meta14907));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14906(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13762__auto___17335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_15081){
var state_val_15082 = (state_15081[(1)]);
if((state_val_15082 === (7))){
var inst_15073 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15083_17336 = state_15081__$1;
(statearr_15083_17336[(2)] = inst_15073);

(statearr_15083_17336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (20))){
var inst_14958 = (state_15081[(7)]);
var inst_14976 = cljs.core.first(inst_14958);
var inst_14977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14976,(0),null);
var inst_14978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14976,(1),null);
var state_15081__$1 = (function (){var statearr_15087 = state_15081;
(statearr_15087[(8)] = inst_14977);

return statearr_15087;
})();
if(cljs.core.truth_(inst_14978)){
var statearr_15089_17341 = state_15081__$1;
(statearr_15089_17341[(1)] = (22));

} else {
var statearr_15093_17342 = state_15081__$1;
(statearr_15093_17342[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (27))){
var inst_15014 = (state_15081[(9)]);
var inst_15009 = (state_15081[(10)]);
var inst_15007 = (state_15081[(11)]);
var inst_14921 = (state_15081[(12)]);
var inst_15014__$1 = cljs.core._nth(inst_15007,inst_15009);
var inst_15015 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15014__$1,inst_14921,done);
var state_15081__$1 = (function (){var statearr_15094 = state_15081;
(statearr_15094[(9)] = inst_15014__$1);

return statearr_15094;
})();
if(cljs.core.truth_(inst_15015)){
var statearr_15096_17343 = state_15081__$1;
(statearr_15096_17343[(1)] = (30));

} else {
var statearr_15098_17344 = state_15081__$1;
(statearr_15098_17344[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (1))){
var state_15081__$1 = state_15081;
var statearr_15101_17346 = state_15081__$1;
(statearr_15101_17346[(2)] = null);

(statearr_15101_17346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (24))){
var inst_14958 = (state_15081[(7)]);
var inst_14983 = (state_15081[(2)]);
var inst_14984 = cljs.core.next(inst_14958);
var inst_14930 = inst_14984;
var inst_14931 = null;
var inst_14932 = (0);
var inst_14933 = (0);
var state_15081__$1 = (function (){var statearr_15102 = state_15081;
(statearr_15102[(13)] = inst_14983);

(statearr_15102[(14)] = inst_14932);

(statearr_15102[(15)] = inst_14931);

(statearr_15102[(16)] = inst_14933);

(statearr_15102[(17)] = inst_14930);

return statearr_15102;
})();
var statearr_15103_17347 = state_15081__$1;
(statearr_15103_17347[(2)] = null);

(statearr_15103_17347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (39))){
var state_15081__$1 = state_15081;
var statearr_15107_17348 = state_15081__$1;
(statearr_15107_17348[(2)] = null);

(statearr_15107_17348[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (4))){
var inst_14921 = (state_15081[(12)]);
var inst_14921__$1 = (state_15081[(2)]);
var inst_14922 = (inst_14921__$1 == null);
var state_15081__$1 = (function (){var statearr_15108 = state_15081;
(statearr_15108[(12)] = inst_14921__$1);

return statearr_15108;
})();
if(cljs.core.truth_(inst_14922)){
var statearr_15109_17349 = state_15081__$1;
(statearr_15109_17349[(1)] = (5));

} else {
var statearr_15110_17350 = state_15081__$1;
(statearr_15110_17350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (15))){
var inst_14932 = (state_15081[(14)]);
var inst_14931 = (state_15081[(15)]);
var inst_14933 = (state_15081[(16)]);
var inst_14930 = (state_15081[(17)]);
var inst_14948 = (state_15081[(2)]);
var inst_14955 = (inst_14933 + (1));
var tmp15104 = inst_14932;
var tmp15105 = inst_14931;
var tmp15106 = inst_14930;
var inst_14930__$1 = tmp15106;
var inst_14931__$1 = tmp15105;
var inst_14932__$1 = tmp15104;
var inst_14933__$1 = inst_14955;
var state_15081__$1 = (function (){var statearr_15112 = state_15081;
(statearr_15112[(14)] = inst_14932__$1);

(statearr_15112[(15)] = inst_14931__$1);

(statearr_15112[(16)] = inst_14933__$1);

(statearr_15112[(17)] = inst_14930__$1);

(statearr_15112[(18)] = inst_14948);

return statearr_15112;
})();
var statearr_15113_17351 = state_15081__$1;
(statearr_15113_17351[(2)] = null);

(statearr_15113_17351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (21))){
var inst_14987 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15117_17352 = state_15081__$1;
(statearr_15117_17352[(2)] = inst_14987);

(statearr_15117_17352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (31))){
var inst_15014 = (state_15081[(9)]);
var inst_15018 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15014);
var state_15081__$1 = state_15081;
var statearr_15119_17353 = state_15081__$1;
(statearr_15119_17353[(2)] = inst_15018);

(statearr_15119_17353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (32))){
var inst_15009 = (state_15081[(10)]);
var inst_15007 = (state_15081[(11)]);
var inst_15006 = (state_15081[(19)]);
var inst_15008 = (state_15081[(20)]);
var inst_15020 = (state_15081[(2)]);
var inst_15021 = (inst_15009 + (1));
var tmp15114 = inst_15007;
var tmp15115 = inst_15006;
var tmp15116 = inst_15008;
var inst_15006__$1 = tmp15115;
var inst_15007__$1 = tmp15114;
var inst_15008__$1 = tmp15116;
var inst_15009__$1 = inst_15021;
var state_15081__$1 = (function (){var statearr_15121 = state_15081;
(statearr_15121[(10)] = inst_15009__$1);

(statearr_15121[(21)] = inst_15020);

(statearr_15121[(11)] = inst_15007__$1);

(statearr_15121[(19)] = inst_15006__$1);

(statearr_15121[(20)] = inst_15008__$1);

return statearr_15121;
})();
var statearr_15122_17354 = state_15081__$1;
(statearr_15122_17354[(2)] = null);

(statearr_15122_17354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (40))){
var inst_15046 = (state_15081[(22)]);
var inst_15050 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15046);
var state_15081__$1 = state_15081;
var statearr_15123_17355 = state_15081__$1;
(statearr_15123_17355[(2)] = inst_15050);

(statearr_15123_17355[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (33))){
var inst_15024 = (state_15081[(23)]);
var inst_15038 = cljs.core.chunked_seq_QMARK_(inst_15024);
var state_15081__$1 = state_15081;
if(inst_15038){
var statearr_15126_17356 = state_15081__$1;
(statearr_15126_17356[(1)] = (36));

} else {
var statearr_15127_17357 = state_15081__$1;
(statearr_15127_17357[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (13))){
var inst_14942 = (state_15081[(24)]);
var inst_14945 = cljs.core.async.close_BANG_(inst_14942);
var state_15081__$1 = state_15081;
var statearr_15128_17358 = state_15081__$1;
(statearr_15128_17358[(2)] = inst_14945);

(statearr_15128_17358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (22))){
var inst_14977 = (state_15081[(8)]);
var inst_14980 = cljs.core.async.close_BANG_(inst_14977);
var state_15081__$1 = state_15081;
var statearr_15129_17359 = state_15081__$1;
(statearr_15129_17359[(2)] = inst_14980);

(statearr_15129_17359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (36))){
var inst_15024 = (state_15081[(23)]);
var inst_15041 = cljs.core.chunk_first(inst_15024);
var inst_15042 = cljs.core.chunk_rest(inst_15024);
var inst_15043 = cljs.core.count(inst_15041);
var inst_15006 = inst_15042;
var inst_15007 = inst_15041;
var inst_15008 = inst_15043;
var inst_15009 = (0);
var state_15081__$1 = (function (){var statearr_15130 = state_15081;
(statearr_15130[(10)] = inst_15009);

(statearr_15130[(11)] = inst_15007);

(statearr_15130[(19)] = inst_15006);

(statearr_15130[(20)] = inst_15008);

return statearr_15130;
})();
var statearr_15131_17363 = state_15081__$1;
(statearr_15131_17363[(2)] = null);

(statearr_15131_17363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (41))){
var inst_15024 = (state_15081[(23)]);
var inst_15052 = (state_15081[(2)]);
var inst_15053 = cljs.core.next(inst_15024);
var inst_15006 = inst_15053;
var inst_15007 = null;
var inst_15008 = (0);
var inst_15009 = (0);
var state_15081__$1 = (function (){var statearr_15141 = state_15081;
(statearr_15141[(10)] = inst_15009);

(statearr_15141[(25)] = inst_15052);

(statearr_15141[(11)] = inst_15007);

(statearr_15141[(19)] = inst_15006);

(statearr_15141[(20)] = inst_15008);

return statearr_15141;
})();
var statearr_15146_17364 = state_15081__$1;
(statearr_15146_17364[(2)] = null);

(statearr_15146_17364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (43))){
var state_15081__$1 = state_15081;
var statearr_15147_17365 = state_15081__$1;
(statearr_15147_17365[(2)] = null);

(statearr_15147_17365[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (29))){
var inst_15061 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15150_17366 = state_15081__$1;
(statearr_15150_17366[(2)] = inst_15061);

(statearr_15150_17366[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (44))){
var inst_15070 = (state_15081[(2)]);
var state_15081__$1 = (function (){var statearr_15151 = state_15081;
(statearr_15151[(26)] = inst_15070);

return statearr_15151;
})();
var statearr_15152_17367 = state_15081__$1;
(statearr_15152_17367[(2)] = null);

(statearr_15152_17367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (6))){
var inst_14998 = (state_15081[(27)]);
var inst_14997 = cljs.core.deref(cs);
var inst_14998__$1 = cljs.core.keys(inst_14997);
var inst_14999 = cljs.core.count(inst_14998__$1);
var inst_15000 = cljs.core.reset_BANG_(dctr,inst_14999);
var inst_15005 = cljs.core.seq(inst_14998__$1);
var inst_15006 = inst_15005;
var inst_15007 = null;
var inst_15008 = (0);
var inst_15009 = (0);
var state_15081__$1 = (function (){var statearr_15153 = state_15081;
(statearr_15153[(10)] = inst_15009);

(statearr_15153[(27)] = inst_14998__$1);

(statearr_15153[(11)] = inst_15007);

(statearr_15153[(28)] = inst_15000);

(statearr_15153[(19)] = inst_15006);

(statearr_15153[(20)] = inst_15008);

return statearr_15153;
})();
var statearr_15155_17368 = state_15081__$1;
(statearr_15155_17368[(2)] = null);

(statearr_15155_17368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (28))){
var inst_15024 = (state_15081[(23)]);
var inst_15006 = (state_15081[(19)]);
var inst_15024__$1 = cljs.core.seq(inst_15006);
var state_15081__$1 = (function (){var statearr_15157 = state_15081;
(statearr_15157[(23)] = inst_15024__$1);

return statearr_15157;
})();
if(inst_15024__$1){
var statearr_15159_17369 = state_15081__$1;
(statearr_15159_17369[(1)] = (33));

} else {
var statearr_15161_17370 = state_15081__$1;
(statearr_15161_17370[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (25))){
var inst_15009 = (state_15081[(10)]);
var inst_15008 = (state_15081[(20)]);
var inst_15011 = (inst_15009 < inst_15008);
var inst_15012 = inst_15011;
var state_15081__$1 = state_15081;
if(cljs.core.truth_(inst_15012)){
var statearr_15162_17371 = state_15081__$1;
(statearr_15162_17371[(1)] = (27));

} else {
var statearr_15163_17372 = state_15081__$1;
(statearr_15163_17372[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (34))){
var state_15081__$1 = state_15081;
var statearr_15166_17373 = state_15081__$1;
(statearr_15166_17373[(2)] = null);

(statearr_15166_17373[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (17))){
var state_15081__$1 = state_15081;
var statearr_15168_17374 = state_15081__$1;
(statearr_15168_17374[(2)] = null);

(statearr_15168_17374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (3))){
var inst_15075 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15081__$1,inst_15075);
} else {
if((state_val_15082 === (12))){
var inst_14992 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15172_17375 = state_15081__$1;
(statearr_15172_17375[(2)] = inst_14992);

(statearr_15172_17375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (2))){
var state_15081__$1 = state_15081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15081__$1,(4),ch);
} else {
if((state_val_15082 === (23))){
var state_15081__$1 = state_15081;
var statearr_15181_17376 = state_15081__$1;
(statearr_15181_17376[(2)] = null);

(statearr_15181_17376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (35))){
var inst_15059 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15182_17377 = state_15081__$1;
(statearr_15182_17377[(2)] = inst_15059);

(statearr_15182_17377[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (19))){
var inst_14958 = (state_15081[(7)]);
var inst_14963 = cljs.core.chunk_first(inst_14958);
var inst_14964 = cljs.core.chunk_rest(inst_14958);
var inst_14965 = cljs.core.count(inst_14963);
var inst_14930 = inst_14964;
var inst_14931 = inst_14963;
var inst_14932 = inst_14965;
var inst_14933 = (0);
var state_15081__$1 = (function (){var statearr_15184 = state_15081;
(statearr_15184[(14)] = inst_14932);

(statearr_15184[(15)] = inst_14931);

(statearr_15184[(16)] = inst_14933);

(statearr_15184[(17)] = inst_14930);

return statearr_15184;
})();
var statearr_15188_17378 = state_15081__$1;
(statearr_15188_17378[(2)] = null);

(statearr_15188_17378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (11))){
var inst_14958 = (state_15081[(7)]);
var inst_14930 = (state_15081[(17)]);
var inst_14958__$1 = cljs.core.seq(inst_14930);
var state_15081__$1 = (function (){var statearr_15189 = state_15081;
(statearr_15189[(7)] = inst_14958__$1);

return statearr_15189;
})();
if(inst_14958__$1){
var statearr_15198_17379 = state_15081__$1;
(statearr_15198_17379[(1)] = (16));

} else {
var statearr_15199_17380 = state_15081__$1;
(statearr_15199_17380[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (9))){
var inst_14994 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15202_17381 = state_15081__$1;
(statearr_15202_17381[(2)] = inst_14994);

(statearr_15202_17381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (5))){
var inst_14928 = cljs.core.deref(cs);
var inst_14929 = cljs.core.seq(inst_14928);
var inst_14930 = inst_14929;
var inst_14931 = null;
var inst_14932 = (0);
var inst_14933 = (0);
var state_15081__$1 = (function (){var statearr_15204 = state_15081;
(statearr_15204[(14)] = inst_14932);

(statearr_15204[(15)] = inst_14931);

(statearr_15204[(16)] = inst_14933);

(statearr_15204[(17)] = inst_14930);

return statearr_15204;
})();
var statearr_15206_17384 = state_15081__$1;
(statearr_15206_17384[(2)] = null);

(statearr_15206_17384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (14))){
var state_15081__$1 = state_15081;
var statearr_15209_17385 = state_15081__$1;
(statearr_15209_17385[(2)] = null);

(statearr_15209_17385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (45))){
var inst_15067 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15216_17386 = state_15081__$1;
(statearr_15216_17386[(2)] = inst_15067);

(statearr_15216_17386[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (26))){
var inst_14998 = (state_15081[(27)]);
var inst_15063 = (state_15081[(2)]);
var inst_15064 = cljs.core.seq(inst_14998);
var state_15081__$1 = (function (){var statearr_15219 = state_15081;
(statearr_15219[(29)] = inst_15063);

return statearr_15219;
})();
if(inst_15064){
var statearr_15222_17390 = state_15081__$1;
(statearr_15222_17390[(1)] = (42));

} else {
var statearr_15224_17391 = state_15081__$1;
(statearr_15224_17391[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (16))){
var inst_14958 = (state_15081[(7)]);
var inst_14960 = cljs.core.chunked_seq_QMARK_(inst_14958);
var state_15081__$1 = state_15081;
if(inst_14960){
var statearr_15227_17392 = state_15081__$1;
(statearr_15227_17392[(1)] = (19));

} else {
var statearr_15228_17393 = state_15081__$1;
(statearr_15228_17393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (38))){
var inst_15056 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15230_17395 = state_15081__$1;
(statearr_15230_17395[(2)] = inst_15056);

(statearr_15230_17395[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (30))){
var state_15081__$1 = state_15081;
var statearr_15231_17396 = state_15081__$1;
(statearr_15231_17396[(2)] = null);

(statearr_15231_17396[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (10))){
var inst_14931 = (state_15081[(15)]);
var inst_14933 = (state_15081[(16)]);
var inst_14941 = cljs.core._nth(inst_14931,inst_14933);
var inst_14942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14941,(0),null);
var inst_14943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14941,(1),null);
var state_15081__$1 = (function (){var statearr_15233 = state_15081;
(statearr_15233[(24)] = inst_14942);

return statearr_15233;
})();
if(cljs.core.truth_(inst_14943)){
var statearr_15234_17397 = state_15081__$1;
(statearr_15234_17397[(1)] = (13));

} else {
var statearr_15235_17398 = state_15081__$1;
(statearr_15235_17398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (18))){
var inst_14990 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15236_17399 = state_15081__$1;
(statearr_15236_17399[(2)] = inst_14990);

(statearr_15236_17399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (42))){
var state_15081__$1 = state_15081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15081__$1,(45),dchan);
} else {
if((state_val_15082 === (37))){
var inst_15046 = (state_15081[(22)]);
var inst_15024 = (state_15081[(23)]);
var inst_14921 = (state_15081[(12)]);
var inst_15046__$1 = cljs.core.first(inst_15024);
var inst_15047 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15046__$1,inst_14921,done);
var state_15081__$1 = (function (){var statearr_15237 = state_15081;
(statearr_15237[(22)] = inst_15046__$1);

return statearr_15237;
})();
if(cljs.core.truth_(inst_15047)){
var statearr_15239_17400 = state_15081__$1;
(statearr_15239_17400[(1)] = (39));

} else {
var statearr_15240_17401 = state_15081__$1;
(statearr_15240_17401[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (8))){
var inst_14932 = (state_15081[(14)]);
var inst_14933 = (state_15081[(16)]);
var inst_14935 = (inst_14933 < inst_14932);
var inst_14936 = inst_14935;
var state_15081__$1 = state_15081;
if(cljs.core.truth_(inst_14936)){
var statearr_15241_17402 = state_15081__$1;
(statearr_15241_17402[(1)] = (10));

} else {
var statearr_15242_17403 = state_15081__$1;
(statearr_15242_17403[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13415__auto__ = null;
var cljs$core$async$mult_$_state_machine__13415__auto____0 = (function (){
var statearr_15244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15244[(0)] = cljs$core$async$mult_$_state_machine__13415__auto__);

(statearr_15244[(1)] = (1));

return statearr_15244;
});
var cljs$core$async$mult_$_state_machine__13415__auto____1 = (function (state_15081){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_15081);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e15245){var ex__13418__auto__ = e15245;
var statearr_15247_17416 = state_15081;
(statearr_15247_17416[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_15081[(4)]))){
var statearr_15249_17417 = state_15081;
(statearr_15249_17417[(1)] = cljs.core.first((state_15081[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17418 = state_15081;
state_15081 = G__17418;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13415__auto__ = function(state_15081){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13415__auto____1.call(this,state_15081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13415__auto____0;
cljs$core$async$mult_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13415__auto____1;
return cljs$core$async$mult_$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_15251 = f__13763__auto__();
(statearr_15251[(6)] = c__13762__auto___17335);

return statearr_15251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15259 = arguments.length;
switch (G__15259) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17428 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17428(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17429 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17429(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17433 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17433(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17434 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17434(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17435 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17435(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17448 = arguments.length;
var i__5770__auto___17449 = (0);
while(true){
if((i__5770__auto___17449 < len__5769__auto___17448)){
args__5775__auto__.push((arguments[i__5770__auto___17449]));

var G__17450 = (i__5770__auto___17449 + (1));
i__5770__auto___17449 = G__17450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15324){
var map__15325 = p__15324;
var map__15325__$1 = cljs.core.__destructure_map(map__15325);
var opts = map__15325__$1;
var statearr_15328_17451 = state;
(statearr_15328_17451[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15330_17452 = state;
(statearr_15330_17452[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15331_17453 = state;
(statearr_15331_17453[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15315){
var G__15316 = cljs.core.first(seq15315);
var seq15315__$1 = cljs.core.next(seq15315);
var G__15317 = cljs.core.first(seq15315__$1);
var seq15315__$2 = cljs.core.next(seq15315__$1);
var G__15318 = cljs.core.first(seq15315__$2);
var seq15315__$3 = cljs.core.next(seq15315__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15316,G__15317,G__15318,seq15315__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15348 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15349){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15349 = meta15349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15350,meta15349__$1){
var self__ = this;
var _15350__$1 = this;
return (new cljs.core.async.t_cljs$core$async15348(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15349__$1));
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15350){
var self__ = this;
var _15350__$1 = this;
return self__.meta15349;
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15349","meta15349",993369561,null)], null);
}));

(cljs.core.async.t_cljs$core$async15348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15348");

(cljs.core.async.t_cljs$core$async15348.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15348.
 */
cljs.core.async.__GT_t_cljs$core$async15348 = (function cljs$core$async$__GT_t_cljs$core$async15348(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15349){
return (new cljs.core.async.t_cljs$core$async15348(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15349));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15348(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13762__auto___17459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_15451){
var state_val_15452 = (state_15451[(1)]);
if((state_val_15452 === (7))){
var inst_15411 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
if(cljs.core.truth_(inst_15411)){
var statearr_15454_17460 = state_15451__$1;
(statearr_15454_17460[(1)] = (8));

} else {
var statearr_15455_17461 = state_15451__$1;
(statearr_15455_17461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (20))){
var inst_15404 = (state_15451[(7)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15451__$1,(23),out,inst_15404);
} else {
if((state_val_15452 === (1))){
var inst_15383 = calc_state();
var inst_15384 = cljs.core.__destructure_map(inst_15383);
var inst_15385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15384,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15384,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15384,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15388 = inst_15383;
var state_15451__$1 = (function (){var statearr_15471 = state_15451;
(statearr_15471[(8)] = inst_15386);

(statearr_15471[(9)] = inst_15388);

(statearr_15471[(10)] = inst_15387);

(statearr_15471[(11)] = inst_15385);

return statearr_15471;
})();
var statearr_15472_17462 = state_15451__$1;
(statearr_15472_17462[(2)] = null);

(statearr_15472_17462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (24))){
var inst_15394 = (state_15451[(12)]);
var inst_15388 = inst_15394;
var state_15451__$1 = (function (){var statearr_15473 = state_15451;
(statearr_15473[(9)] = inst_15388);

return statearr_15473;
})();
var statearr_15474_17463 = state_15451__$1;
(statearr_15474_17463[(2)] = null);

(statearr_15474_17463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (4))){
var inst_15406 = (state_15451[(13)]);
var inst_15404 = (state_15451[(7)]);
var inst_15403 = (state_15451[(2)]);
var inst_15404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15403,(0),null);
var inst_15405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15403,(1),null);
var inst_15406__$1 = (inst_15404__$1 == null);
var state_15451__$1 = (function (){var statearr_15476 = state_15451;
(statearr_15476[(13)] = inst_15406__$1);

(statearr_15476[(7)] = inst_15404__$1);

(statearr_15476[(14)] = inst_15405);

return statearr_15476;
})();
if(cljs.core.truth_(inst_15406__$1)){
var statearr_15477_17475 = state_15451__$1;
(statearr_15477_17475[(1)] = (5));

} else {
var statearr_15478_17476 = state_15451__$1;
(statearr_15478_17476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (15))){
var inst_15395 = (state_15451[(15)]);
var inst_15425 = (state_15451[(16)]);
var inst_15425__$1 = cljs.core.empty_QMARK_(inst_15395);
var state_15451__$1 = (function (){var statearr_15479 = state_15451;
(statearr_15479[(16)] = inst_15425__$1);

return statearr_15479;
})();
if(inst_15425__$1){
var statearr_15480_17477 = state_15451__$1;
(statearr_15480_17477[(1)] = (17));

} else {
var statearr_15481_17487 = state_15451__$1;
(statearr_15481_17487[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (21))){
var inst_15394 = (state_15451[(12)]);
var inst_15388 = inst_15394;
var state_15451__$1 = (function (){var statearr_15482 = state_15451;
(statearr_15482[(9)] = inst_15388);

return statearr_15482;
})();
var statearr_15483_17488 = state_15451__$1;
(statearr_15483_17488[(2)] = null);

(statearr_15483_17488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (13))){
var inst_15418 = (state_15451[(2)]);
var inst_15419 = calc_state();
var inst_15388 = inst_15419;
var state_15451__$1 = (function (){var statearr_15484 = state_15451;
(statearr_15484[(17)] = inst_15418);

(statearr_15484[(9)] = inst_15388);

return statearr_15484;
})();
var statearr_15485_17489 = state_15451__$1;
(statearr_15485_17489[(2)] = null);

(statearr_15485_17489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (22))){
var inst_15445 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15489_17490 = state_15451__$1;
(statearr_15489_17490[(2)] = inst_15445);

(statearr_15489_17490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (6))){
var inst_15405 = (state_15451[(14)]);
var inst_15409 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15405,change);
var state_15451__$1 = state_15451;
var statearr_15490_17491 = state_15451__$1;
(statearr_15490_17491[(2)] = inst_15409);

(statearr_15490_17491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (25))){
var state_15451__$1 = state_15451;
var statearr_15491_17495 = state_15451__$1;
(statearr_15491_17495[(2)] = null);

(statearr_15491_17495[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (17))){
var inst_15396 = (state_15451[(18)]);
var inst_15405 = (state_15451[(14)]);
var inst_15427 = (inst_15396.cljs$core$IFn$_invoke$arity$1 ? inst_15396.cljs$core$IFn$_invoke$arity$1(inst_15405) : inst_15396.call(null,inst_15405));
var inst_15428 = cljs.core.not(inst_15427);
var state_15451__$1 = state_15451;
var statearr_15492_17497 = state_15451__$1;
(statearr_15492_17497[(2)] = inst_15428);

(statearr_15492_17497[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (3))){
var inst_15449 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15451__$1,inst_15449);
} else {
if((state_val_15452 === (12))){
var state_15451__$1 = state_15451;
var statearr_15493_17498 = state_15451__$1;
(statearr_15493_17498[(2)] = null);

(statearr_15493_17498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (2))){
var inst_15394 = (state_15451[(12)]);
var inst_15388 = (state_15451[(9)]);
var inst_15394__$1 = cljs.core.__destructure_map(inst_15388);
var inst_15395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15394__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15394__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15394__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15451__$1 = (function (){var statearr_15497 = state_15451;
(statearr_15497[(12)] = inst_15394__$1);

(statearr_15497[(18)] = inst_15396);

(statearr_15497[(15)] = inst_15395);

return statearr_15497;
})();
return cljs.core.async.ioc_alts_BANG_(state_15451__$1,(4),inst_15397);
} else {
if((state_val_15452 === (23))){
var inst_15436 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
if(cljs.core.truth_(inst_15436)){
var statearr_15498_17506 = state_15451__$1;
(statearr_15498_17506[(1)] = (24));

} else {
var statearr_15501_17507 = state_15451__$1;
(statearr_15501_17507[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (19))){
var inst_15431 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15503_17508 = state_15451__$1;
(statearr_15503_17508[(2)] = inst_15431);

(statearr_15503_17508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (11))){
var inst_15405 = (state_15451[(14)]);
var inst_15415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15405);
var state_15451__$1 = state_15451;
var statearr_15504_17509 = state_15451__$1;
(statearr_15504_17509[(2)] = inst_15415);

(statearr_15504_17509[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (9))){
var inst_15422 = (state_15451[(19)]);
var inst_15395 = (state_15451[(15)]);
var inst_15405 = (state_15451[(14)]);
var inst_15422__$1 = (inst_15395.cljs$core$IFn$_invoke$arity$1 ? inst_15395.cljs$core$IFn$_invoke$arity$1(inst_15405) : inst_15395.call(null,inst_15405));
var state_15451__$1 = (function (){var statearr_15508 = state_15451;
(statearr_15508[(19)] = inst_15422__$1);

return statearr_15508;
})();
if(cljs.core.truth_(inst_15422__$1)){
var statearr_15509_17511 = state_15451__$1;
(statearr_15509_17511[(1)] = (14));

} else {
var statearr_15510_17512 = state_15451__$1;
(statearr_15510_17512[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (5))){
var inst_15406 = (state_15451[(13)]);
var state_15451__$1 = state_15451;
var statearr_15514_17514 = state_15451__$1;
(statearr_15514_17514[(2)] = inst_15406);

(statearr_15514_17514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (14))){
var inst_15422 = (state_15451[(19)]);
var state_15451__$1 = state_15451;
var statearr_15515_17515 = state_15451__$1;
(statearr_15515_17515[(2)] = inst_15422);

(statearr_15515_17515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (26))){
var inst_15441 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15516_17516 = state_15451__$1;
(statearr_15516_17516[(2)] = inst_15441);

(statearr_15516_17516[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (16))){
var inst_15433 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
if(cljs.core.truth_(inst_15433)){
var statearr_15517_17518 = state_15451__$1;
(statearr_15517_17518[(1)] = (20));

} else {
var statearr_15518_17519 = state_15451__$1;
(statearr_15518_17519[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (10))){
var inst_15447 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15520_17520 = state_15451__$1;
(statearr_15520_17520[(2)] = inst_15447);

(statearr_15520_17520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (18))){
var inst_15425 = (state_15451[(16)]);
var state_15451__$1 = state_15451;
var statearr_15521_17523 = state_15451__$1;
(statearr_15521_17523[(2)] = inst_15425);

(statearr_15521_17523[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (8))){
var inst_15404 = (state_15451[(7)]);
var inst_15413 = (inst_15404 == null);
var state_15451__$1 = state_15451;
if(cljs.core.truth_(inst_15413)){
var statearr_15523_17524 = state_15451__$1;
(statearr_15523_17524[(1)] = (11));

} else {
var statearr_15524_17525 = state_15451__$1;
(statearr_15524_17525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13415__auto__ = null;
var cljs$core$async$mix_$_state_machine__13415__auto____0 = (function (){
var statearr_15528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15528[(0)] = cljs$core$async$mix_$_state_machine__13415__auto__);

(statearr_15528[(1)] = (1));

return statearr_15528;
});
var cljs$core$async$mix_$_state_machine__13415__auto____1 = (function (state_15451){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_15451);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e15529){var ex__13418__auto__ = e15529;
var statearr_15530_17529 = state_15451;
(statearr_15530_17529[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_15451[(4)]))){
var statearr_15531_17532 = state_15451;
(statearr_15531_17532[(1)] = cljs.core.first((state_15451[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17533 = state_15451;
state_15451 = G__17533;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13415__auto__ = function(state_15451){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13415__auto____1.call(this,state_15451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13415__auto____0;
cljs$core$async$mix_$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13415__auto____1;
return cljs$core$async$mix_$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_15534 = f__13763__auto__();
(statearr_15534[(6)] = c__13762__auto___17459);

return statearr_15534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17535 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17535(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17538 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17538(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17543 = (function() {
var G__17544 = null;
var G__17544__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17544__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17544 = function(p,v){
switch(arguments.length){
case 1:
return G__17544__1.call(this,p);
case 2:
return G__17544__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17544.cljs$core$IFn$_invoke$arity$1 = G__17544__1;
G__17544.cljs$core$IFn$_invoke$arity$2 = G__17544__2;
return G__17544;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15580 = arguments.length;
switch (G__15580) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17543(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17543(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15618 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15619){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15619 = meta15619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15620,meta15619__$1){
var self__ = this;
var _15620__$1 = this;
return (new cljs.core.async.t_cljs$core$async15618(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15619__$1));
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15620){
var self__ = this;
var _15620__$1 = this;
return self__.meta15619;
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15619","meta15619",185375677,null)], null);
}));

(cljs.core.async.t_cljs$core$async15618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15618");

(cljs.core.async.t_cljs$core$async15618.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15618.
 */
cljs.core.async.__GT_t_cljs$core$async15618 = (function cljs$core$async$__GT_t_cljs$core$async15618(ch,topic_fn,buf_fn,mults,ensure_mult,meta15619){
return (new cljs.core.async.t_cljs$core$async15618(ch,topic_fn,buf_fn,mults,ensure_mult,meta15619));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15605 = arguments.length;
switch (G__15605) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15590_SHARP_){
if(cljs.core.truth_((p1__15590_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15590_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15590_SHARP_.call(null,topic)))){
return p1__15590_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15590_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15618(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13762__auto___17561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15716_17562 = state_15714__$1;
(statearr_15716_17562[(2)] = inst_15710);

(statearr_15716_17562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (20))){
var state_15714__$1 = state_15714;
var statearr_15717_17563 = state_15714__$1;
(statearr_15717_17563[(2)] = null);

(statearr_15717_17563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (1))){
var state_15714__$1 = state_15714;
var statearr_15726_17564 = state_15714__$1;
(statearr_15726_17564[(2)] = null);

(statearr_15726_17564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (24))){
var inst_15688 = (state_15714[(7)]);
var inst_15702 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15688);
var state_15714__$1 = state_15714;
var statearr_15727_17566 = state_15714__$1;
(statearr_15727_17566[(2)] = inst_15702);

(statearr_15727_17566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (4))){
var inst_15636 = (state_15714[(8)]);
var inst_15636__$1 = (state_15714[(2)]);
var inst_15637 = (inst_15636__$1 == null);
var state_15714__$1 = (function (){var statearr_15729 = state_15714;
(statearr_15729[(8)] = inst_15636__$1);

return statearr_15729;
})();
if(cljs.core.truth_(inst_15637)){
var statearr_15731_17567 = state_15714__$1;
(statearr_15731_17567[(1)] = (5));

} else {
var statearr_15732_17568 = state_15714__$1;
(statearr_15732_17568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (15))){
var inst_15682 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15733_17569 = state_15714__$1;
(statearr_15733_17569[(2)] = inst_15682);

(statearr_15733_17569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (21))){
var inst_15707 = (state_15714[(2)]);
var state_15714__$1 = (function (){var statearr_15734 = state_15714;
(statearr_15734[(9)] = inst_15707);

return statearr_15734;
})();
var statearr_15735_17598 = state_15714__$1;
(statearr_15735_17598[(2)] = null);

(statearr_15735_17598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (13))){
var inst_15664 = (state_15714[(10)]);
var inst_15666 = cljs.core.chunked_seq_QMARK_(inst_15664);
var state_15714__$1 = state_15714;
if(inst_15666){
var statearr_15736_17599 = state_15714__$1;
(statearr_15736_17599[(1)] = (16));

} else {
var statearr_15738_17600 = state_15714__$1;
(statearr_15738_17600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (22))){
var inst_15699 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15699)){
var statearr_15740_17601 = state_15714__$1;
(statearr_15740_17601[(1)] = (23));

} else {
var statearr_15741_17602 = state_15714__$1;
(statearr_15741_17602[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (6))){
var inst_15688 = (state_15714[(7)]);
var inst_15690 = (state_15714[(11)]);
var inst_15636 = (state_15714[(8)]);
var inst_15688__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15636) : topic_fn.call(null,inst_15636));
var inst_15689 = cljs.core.deref(mults);
var inst_15690__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15689,inst_15688__$1);
var state_15714__$1 = (function (){var statearr_15746 = state_15714;
(statearr_15746[(7)] = inst_15688__$1);

(statearr_15746[(11)] = inst_15690__$1);

return statearr_15746;
})();
if(cljs.core.truth_(inst_15690__$1)){
var statearr_15747_17603 = state_15714__$1;
(statearr_15747_17603[(1)] = (19));

} else {
var statearr_15748_17604 = state_15714__$1;
(statearr_15748_17604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (25))){
var inst_15704 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15752_17605 = state_15714__$1;
(statearr_15752_17605[(2)] = inst_15704);

(statearr_15752_17605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (17))){
var inst_15664 = (state_15714[(10)]);
var inst_15673 = cljs.core.first(inst_15664);
var inst_15674 = cljs.core.async.muxch_STAR_(inst_15673);
var inst_15675 = cljs.core.async.close_BANG_(inst_15674);
var inst_15676 = cljs.core.next(inst_15664);
var inst_15646 = inst_15676;
var inst_15647 = null;
var inst_15648 = (0);
var inst_15649 = (0);
var state_15714__$1 = (function (){var statearr_15756 = state_15714;
(statearr_15756[(12)] = inst_15646);

(statearr_15756[(13)] = inst_15675);

(statearr_15756[(14)] = inst_15647);

(statearr_15756[(15)] = inst_15649);

(statearr_15756[(16)] = inst_15648);

return statearr_15756;
})();
var statearr_15760_17606 = state_15714__$1;
(statearr_15760_17606[(2)] = null);

(statearr_15760_17606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (3))){
var inst_15712 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15714__$1,inst_15712);
} else {
if((state_val_15715 === (12))){
var inst_15684 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15761_17607 = state_15714__$1;
(statearr_15761_17607[(2)] = inst_15684);

(statearr_15761_17607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(4),ch);
} else {
if((state_val_15715 === (23))){
var state_15714__$1 = state_15714;
var statearr_15769_17608 = state_15714__$1;
(statearr_15769_17608[(2)] = null);

(statearr_15769_17608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (19))){
var inst_15690 = (state_15714[(11)]);
var inst_15636 = (state_15714[(8)]);
var inst_15696 = cljs.core.async.muxch_STAR_(inst_15690);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15714__$1,(22),inst_15696,inst_15636);
} else {
if((state_val_15715 === (11))){
var inst_15646 = (state_15714[(12)]);
var inst_15664 = (state_15714[(10)]);
var inst_15664__$1 = cljs.core.seq(inst_15646);
var state_15714__$1 = (function (){var statearr_15772 = state_15714;
(statearr_15772[(10)] = inst_15664__$1);

return statearr_15772;
})();
if(inst_15664__$1){
var statearr_15774_17609 = state_15714__$1;
(statearr_15774_17609[(1)] = (13));

} else {
var statearr_15775_17610 = state_15714__$1;
(statearr_15775_17610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (9))){
var inst_15686 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15776_17611 = state_15714__$1;
(statearr_15776_17611[(2)] = inst_15686);

(statearr_15776_17611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (5))){
var inst_15643 = cljs.core.deref(mults);
var inst_15644 = cljs.core.vals(inst_15643);
var inst_15645 = cljs.core.seq(inst_15644);
var inst_15646 = inst_15645;
var inst_15647 = null;
var inst_15648 = (0);
var inst_15649 = (0);
var state_15714__$1 = (function (){var statearr_15780 = state_15714;
(statearr_15780[(12)] = inst_15646);

(statearr_15780[(14)] = inst_15647);

(statearr_15780[(15)] = inst_15649);

(statearr_15780[(16)] = inst_15648);

return statearr_15780;
})();
var statearr_15782_17612 = state_15714__$1;
(statearr_15782_17612[(2)] = null);

(statearr_15782_17612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (14))){
var state_15714__$1 = state_15714;
var statearr_15789_17614 = state_15714__$1;
(statearr_15789_17614[(2)] = null);

(statearr_15789_17614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (16))){
var inst_15664 = (state_15714[(10)]);
var inst_15668 = cljs.core.chunk_first(inst_15664);
var inst_15669 = cljs.core.chunk_rest(inst_15664);
var inst_15670 = cljs.core.count(inst_15668);
var inst_15646 = inst_15669;
var inst_15647 = inst_15668;
var inst_15648 = inst_15670;
var inst_15649 = (0);
var state_15714__$1 = (function (){var statearr_15790 = state_15714;
(statearr_15790[(12)] = inst_15646);

(statearr_15790[(14)] = inst_15647);

(statearr_15790[(15)] = inst_15649);

(statearr_15790[(16)] = inst_15648);

return statearr_15790;
})();
var statearr_15791_17616 = state_15714__$1;
(statearr_15791_17616[(2)] = null);

(statearr_15791_17616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (10))){
var inst_15646 = (state_15714[(12)]);
var inst_15647 = (state_15714[(14)]);
var inst_15649 = (state_15714[(15)]);
var inst_15648 = (state_15714[(16)]);
var inst_15654 = cljs.core._nth(inst_15647,inst_15649);
var inst_15655 = cljs.core.async.muxch_STAR_(inst_15654);
var inst_15657 = cljs.core.async.close_BANG_(inst_15655);
var inst_15658 = (inst_15649 + (1));
var tmp15786 = inst_15646;
var tmp15787 = inst_15647;
var tmp15788 = inst_15648;
var inst_15646__$1 = tmp15786;
var inst_15647__$1 = tmp15787;
var inst_15648__$1 = tmp15788;
var inst_15649__$1 = inst_15658;
var state_15714__$1 = (function (){var statearr_15794 = state_15714;
(statearr_15794[(12)] = inst_15646__$1);

(statearr_15794[(14)] = inst_15647__$1);

(statearr_15794[(15)] = inst_15649__$1);

(statearr_15794[(16)] = inst_15648__$1);

(statearr_15794[(17)] = inst_15657);

return statearr_15794;
})();
var statearr_15799_17617 = state_15714__$1;
(statearr_15799_17617[(2)] = null);

(statearr_15799_17617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (18))){
var inst_15679 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15800_17618 = state_15714__$1;
(statearr_15800_17618[(2)] = inst_15679);

(statearr_15800_17618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (8))){
var inst_15649 = (state_15714[(15)]);
var inst_15648 = (state_15714[(16)]);
var inst_15651 = (inst_15649 < inst_15648);
var inst_15652 = inst_15651;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15652)){
var statearr_15802_17619 = state_15714__$1;
(statearr_15802_17619[(1)] = (10));

} else {
var statearr_15803_17620 = state_15714__$1;
(statearr_15803_17620[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_15804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15804[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_15804[(1)] = (1));

return statearr_15804;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_15714){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_15714);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e15805){var ex__13418__auto__ = e15805;
var statearr_15809_17621 = state_15714;
(statearr_15809_17621[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_15714[(4)]))){
var statearr_15814_17622 = state_15714;
(statearr_15814_17622[(1)] = cljs.core.first((state_15714[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17623 = state_15714;
state_15714 = G__17623;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_15818 = f__13763__auto__();
(statearr_15818[(6)] = c__13762__auto___17561);

return statearr_15818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15827 = arguments.length;
switch (G__15827) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15840 = arguments.length;
switch (G__15840) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15853 = arguments.length;
switch (G__15853) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13762__auto___17634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_15920){
var state_val_15921 = (state_15920[(1)]);
if((state_val_15921 === (7))){
var state_15920__$1 = state_15920;
var statearr_15926_17635 = state_15920__$1;
(statearr_15926_17635[(2)] = null);

(statearr_15926_17635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (1))){
var state_15920__$1 = state_15920;
var statearr_15928_17636 = state_15920__$1;
(statearr_15928_17636[(2)] = null);

(statearr_15928_17636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (4))){
var inst_15869 = (state_15920[(7)]);
var inst_15870 = (state_15920[(8)]);
var inst_15872 = (inst_15870 < inst_15869);
var state_15920__$1 = state_15920;
if(cljs.core.truth_(inst_15872)){
var statearr_15929_17637 = state_15920__$1;
(statearr_15929_17637[(1)] = (6));

} else {
var statearr_15930_17638 = state_15920__$1;
(statearr_15930_17638[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (15))){
var inst_15903 = (state_15920[(9)]);
var inst_15908 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15903);
var state_15920__$1 = state_15920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15920__$1,(17),out,inst_15908);
} else {
if((state_val_15921 === (13))){
var inst_15903 = (state_15920[(9)]);
var inst_15903__$1 = (state_15920[(2)]);
var inst_15904 = cljs.core.some(cljs.core.nil_QMARK_,inst_15903__$1);
var state_15920__$1 = (function (){var statearr_15935 = state_15920;
(statearr_15935[(9)] = inst_15903__$1);

return statearr_15935;
})();
if(cljs.core.truth_(inst_15904)){
var statearr_15936_17643 = state_15920__$1;
(statearr_15936_17643[(1)] = (14));

} else {
var statearr_15939_17644 = state_15920__$1;
(statearr_15939_17644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (6))){
var state_15920__$1 = state_15920;
var statearr_15942_17645 = state_15920__$1;
(statearr_15942_17645[(2)] = null);

(statearr_15942_17645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (17))){
var inst_15910 = (state_15920[(2)]);
var state_15920__$1 = (function (){var statearr_15956 = state_15920;
(statearr_15956[(10)] = inst_15910);

return statearr_15956;
})();
var statearr_15957_17646 = state_15920__$1;
(statearr_15957_17646[(2)] = null);

(statearr_15957_17646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (3))){
var inst_15915 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15920__$1,inst_15915);
} else {
if((state_val_15921 === (12))){
var _ = (function (){var statearr_15961 = state_15920;
(statearr_15961[(4)] = cljs.core.rest((state_15920[(4)])));

return statearr_15961;
})();
var state_15920__$1 = state_15920;
var ex15955 = (state_15920__$1[(2)]);
var statearr_15963_17647 = state_15920__$1;
(statearr_15963_17647[(5)] = ex15955);


if((ex15955 instanceof Object)){
var statearr_15967_17648 = state_15920__$1;
(statearr_15967_17648[(1)] = (11));

(statearr_15967_17648[(5)] = null);

} else {
throw ex15955;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (2))){
var inst_15868 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15869 = cnt;
var inst_15870 = (0);
var state_15920__$1 = (function (){var statearr_15972 = state_15920;
(statearr_15972[(7)] = inst_15869);

(statearr_15972[(8)] = inst_15870);

(statearr_15972[(11)] = inst_15868);

return statearr_15972;
})();
var statearr_15974_17649 = state_15920__$1;
(statearr_15974_17649[(2)] = null);

(statearr_15974_17649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (11))){
var inst_15878 = (state_15920[(2)]);
var inst_15881 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15920__$1 = (function (){var statearr_15979 = state_15920;
(statearr_15979[(12)] = inst_15878);

return statearr_15979;
})();
var statearr_15980_17650 = state_15920__$1;
(statearr_15980_17650[(2)] = inst_15881);

(statearr_15980_17650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (9))){
var inst_15870 = (state_15920[(8)]);
var _ = (function (){var statearr_15982 = state_15920;
(statearr_15982[(4)] = cljs.core.cons((12),(state_15920[(4)])));

return statearr_15982;
})();
var inst_15888 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15870) : chs__$1.call(null,inst_15870));
var inst_15889 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15870) : done.call(null,inst_15870));
var inst_15890 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15888,inst_15889);
var ___$1 = (function (){var statearr_15983 = state_15920;
(statearr_15983[(4)] = cljs.core.rest((state_15920[(4)])));

return statearr_15983;
})();
var state_15920__$1 = state_15920;
var statearr_15987_17660 = state_15920__$1;
(statearr_15987_17660[(2)] = inst_15890);

(statearr_15987_17660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (5))){
var inst_15900 = (state_15920[(2)]);
var state_15920__$1 = (function (){var statearr_15988 = state_15920;
(statearr_15988[(13)] = inst_15900);

return statearr_15988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15920__$1,(13),dchan);
} else {
if((state_val_15921 === (14))){
var inst_15906 = cljs.core.async.close_BANG_(out);
var state_15920__$1 = state_15920;
var statearr_15990_17661 = state_15920__$1;
(statearr_15990_17661[(2)] = inst_15906);

(statearr_15990_17661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (16))){
var inst_15913 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_15994_17662 = state_15920__$1;
(statearr_15994_17662[(2)] = inst_15913);

(statearr_15994_17662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (10))){
var inst_15870 = (state_15920[(8)]);
var inst_15893 = (state_15920[(2)]);
var inst_15894 = (inst_15870 + (1));
var inst_15870__$1 = inst_15894;
var state_15920__$1 = (function (){var statearr_15995 = state_15920;
(statearr_15995[(14)] = inst_15893);

(statearr_15995[(8)] = inst_15870__$1);

return statearr_15995;
})();
var statearr_15997_17663 = state_15920__$1;
(statearr_15997_17663[(2)] = null);

(statearr_15997_17663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15921 === (8))){
var inst_15898 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_15998_17664 = state_15920__$1;
(statearr_15998_17664[(2)] = inst_15898);

(statearr_15998_17664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_16003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16003[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_16003[(1)] = (1));

return statearr_16003;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_15920){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_15920);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e16004){var ex__13418__auto__ = e16004;
var statearr_16005_17665 = state_15920;
(statearr_16005_17665[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_15920[(4)]))){
var statearr_16009_17666 = state_15920;
(statearr_16009_17666[(1)] = cljs.core.first((state_15920[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17667 = state_15920;
state_15920 = G__17667;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_15920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_15920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_16012 = f__13763__auto__();
(statearr_16012[(6)] = c__13762__auto___17634);

return statearr_16012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16018 = arguments.length;
switch (G__16018) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13762__auto___17669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_16064){
var state_val_16065 = (state_16064[(1)]);
if((state_val_16065 === (7))){
var inst_16039 = (state_16064[(7)]);
var inst_16038 = (state_16064[(8)]);
var inst_16038__$1 = (state_16064[(2)]);
var inst_16039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16038__$1,(0),null);
var inst_16040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16038__$1,(1),null);
var inst_16041 = (inst_16039__$1 == null);
var state_16064__$1 = (function (){var statearr_16073 = state_16064;
(statearr_16073[(7)] = inst_16039__$1);

(statearr_16073[(8)] = inst_16038__$1);

(statearr_16073[(9)] = inst_16040);

return statearr_16073;
})();
if(cljs.core.truth_(inst_16041)){
var statearr_16075_17670 = state_16064__$1;
(statearr_16075_17670[(1)] = (8));

} else {
var statearr_16076_17671 = state_16064__$1;
(statearr_16076_17671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (1))){
var inst_16025 = cljs.core.vec(chs);
var inst_16026 = inst_16025;
var state_16064__$1 = (function (){var statearr_16081 = state_16064;
(statearr_16081[(10)] = inst_16026);

return statearr_16081;
})();
var statearr_16082_17673 = state_16064__$1;
(statearr_16082_17673[(2)] = null);

(statearr_16082_17673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (4))){
var inst_16026 = (state_16064[(10)]);
var state_16064__$1 = state_16064;
return cljs.core.async.ioc_alts_BANG_(state_16064__$1,(7),inst_16026);
} else {
if((state_val_16065 === (6))){
var inst_16059 = (state_16064[(2)]);
var state_16064__$1 = state_16064;
var statearr_16087_17674 = state_16064__$1;
(statearr_16087_17674[(2)] = inst_16059);

(statearr_16087_17674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (3))){
var inst_16061 = (state_16064[(2)]);
var state_16064__$1 = state_16064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16064__$1,inst_16061);
} else {
if((state_val_16065 === (2))){
var inst_16026 = (state_16064[(10)]);
var inst_16028 = cljs.core.count(inst_16026);
var inst_16029 = (inst_16028 > (0));
var state_16064__$1 = state_16064;
if(cljs.core.truth_(inst_16029)){
var statearr_16090_17679 = state_16064__$1;
(statearr_16090_17679[(1)] = (4));

} else {
var statearr_16091_17680 = state_16064__$1;
(statearr_16091_17680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (11))){
var inst_16026 = (state_16064[(10)]);
var inst_16050 = (state_16064[(2)]);
var tmp16088 = inst_16026;
var inst_16026__$1 = tmp16088;
var state_16064__$1 = (function (){var statearr_16092 = state_16064;
(statearr_16092[(11)] = inst_16050);

(statearr_16092[(10)] = inst_16026__$1);

return statearr_16092;
})();
var statearr_16093_17681 = state_16064__$1;
(statearr_16093_17681[(2)] = null);

(statearr_16093_17681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (9))){
var inst_16039 = (state_16064[(7)]);
var state_16064__$1 = state_16064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16064__$1,(11),out,inst_16039);
} else {
if((state_val_16065 === (5))){
var inst_16057 = cljs.core.async.close_BANG_(out);
var state_16064__$1 = state_16064;
var statearr_16103_17682 = state_16064__$1;
(statearr_16103_17682[(2)] = inst_16057);

(statearr_16103_17682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (10))){
var inst_16054 = (state_16064[(2)]);
var state_16064__$1 = state_16064;
var statearr_16104_17683 = state_16064__$1;
(statearr_16104_17683[(2)] = inst_16054);

(statearr_16104_17683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (8))){
var inst_16039 = (state_16064[(7)]);
var inst_16038 = (state_16064[(8)]);
var inst_16026 = (state_16064[(10)]);
var inst_16040 = (state_16064[(9)]);
var inst_16044 = (function (){var cs = inst_16026;
var vec__16033 = inst_16038;
var v = inst_16039;
var c = inst_16040;
return (function (p1__16013_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16013_SHARP_);
});
})();
var inst_16046 = cljs.core.filterv(inst_16044,inst_16026);
var inst_16026__$1 = inst_16046;
var state_16064__$1 = (function (){var statearr_16110 = state_16064;
(statearr_16110[(10)] = inst_16026__$1);

return statearr_16110;
})();
var statearr_16112_17684 = state_16064__$1;
(statearr_16112_17684[(2)] = null);

(statearr_16112_17684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_16115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16115[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_16115[(1)] = (1));

return statearr_16115;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_16064){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_16064);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e16120){var ex__13418__auto__ = e16120;
var statearr_16121_17688 = state_16064;
(statearr_16121_17688[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_16064[(4)]))){
var statearr_16122_17689 = state_16064;
(statearr_16122_17689[(1)] = cljs.core.first((state_16064[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17690 = state_16064;
state_16064 = G__17690;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_16064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_16064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_16127 = f__13763__auto__();
(statearr_16127[(6)] = c__13762__auto___17669);

return statearr_16127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16140 = arguments.length;
switch (G__16140) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13762__auto___17695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_16172){
var state_val_16173 = (state_16172[(1)]);
if((state_val_16173 === (7))){
var inst_16151 = (state_16172[(7)]);
var inst_16151__$1 = (state_16172[(2)]);
var inst_16154 = (inst_16151__$1 == null);
var inst_16155 = cljs.core.not(inst_16154);
var state_16172__$1 = (function (){var statearr_16182 = state_16172;
(statearr_16182[(7)] = inst_16151__$1);

return statearr_16182;
})();
if(inst_16155){
var statearr_16183_17703 = state_16172__$1;
(statearr_16183_17703[(1)] = (8));

} else {
var statearr_16186_17704 = state_16172__$1;
(statearr_16186_17704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (1))){
var inst_16146 = (0);
var state_16172__$1 = (function (){var statearr_16188 = state_16172;
(statearr_16188[(8)] = inst_16146);

return statearr_16188;
})();
var statearr_16190_17705 = state_16172__$1;
(statearr_16190_17705[(2)] = null);

(statearr_16190_17705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (4))){
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16172__$1,(7),ch);
} else {
if((state_val_16173 === (6))){
var inst_16167 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16194_17706 = state_16172__$1;
(statearr_16194_17706[(2)] = inst_16167);

(statearr_16194_17706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (3))){
var inst_16169 = (state_16172[(2)]);
var inst_16170 = cljs.core.async.close_BANG_(out);
var state_16172__$1 = (function (){var statearr_16196 = state_16172;
(statearr_16196[(9)] = inst_16169);

return statearr_16196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16172__$1,inst_16170);
} else {
if((state_val_16173 === (2))){
var inst_16146 = (state_16172[(8)]);
var inst_16148 = (inst_16146 < n);
var state_16172__$1 = state_16172;
if(cljs.core.truth_(inst_16148)){
var statearr_16204_17707 = state_16172__$1;
(statearr_16204_17707[(1)] = (4));

} else {
var statearr_16205_17708 = state_16172__$1;
(statearr_16205_17708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (11))){
var inst_16146 = (state_16172[(8)]);
var inst_16159 = (state_16172[(2)]);
var inst_16160 = (inst_16146 + (1));
var inst_16146__$1 = inst_16160;
var state_16172__$1 = (function (){var statearr_16212 = state_16172;
(statearr_16212[(8)] = inst_16146__$1);

(statearr_16212[(10)] = inst_16159);

return statearr_16212;
})();
var statearr_16213_17709 = state_16172__$1;
(statearr_16213_17709[(2)] = null);

(statearr_16213_17709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (9))){
var state_16172__$1 = state_16172;
var statearr_16214_17710 = state_16172__$1;
(statearr_16214_17710[(2)] = null);

(statearr_16214_17710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (5))){
var state_16172__$1 = state_16172;
var statearr_16216_17714 = state_16172__$1;
(statearr_16216_17714[(2)] = null);

(statearr_16216_17714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (10))){
var inst_16164 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16217_17715 = state_16172__$1;
(statearr_16217_17715[(2)] = inst_16164);

(statearr_16217_17715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (8))){
var inst_16151 = (state_16172[(7)]);
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16172__$1,(11),out,inst_16151);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_16218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16218[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_16218[(1)] = (1));

return statearr_16218;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_16172){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_16172);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e16219){var ex__13418__auto__ = e16219;
var statearr_16220_17725 = state_16172;
(statearr_16220_17725[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_16172[(4)]))){
var statearr_16222_17726 = state_16172;
(statearr_16222_17726[(1)] = cljs.core.first((state_16172[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17727 = state_16172;
state_16172 = G__17727;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_16172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_16172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_16224 = f__13763__auto__();
(statearr_16224[(6)] = c__13762__auto___17695);

return statearr_16224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16269 = (function (f,ch,meta16233,_,fn1,meta16270){
this.f = f;
this.ch = ch;
this.meta16233 = meta16233;
this._ = _;
this.fn1 = fn1;
this.meta16270 = meta16270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16271,meta16270__$1){
var self__ = this;
var _16271__$1 = this;
return (new cljs.core.async.t_cljs$core$async16269(self__.f,self__.ch,self__.meta16233,self__._,self__.fn1,meta16270__$1));
}));

(cljs.core.async.t_cljs$core$async16269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16271){
var self__ = this;
var _16271__$1 = this;
return self__.meta16270;
}));

(cljs.core.async.t_cljs$core$async16269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16228_SHARP_){
var G__16292 = (((p1__16228_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16228_SHARP_) : self__.f.call(null,p1__16228_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16292) : f1.call(null,G__16292));
});
}));

(cljs.core.async.t_cljs$core$async16269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16233","meta16233",-854287320,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16232","cljs.core.async/t_cljs$core$async16232",-1460228160,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16270","meta16270",798233331,null)], null);
}));

(cljs.core.async.t_cljs$core$async16269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16269");

(cljs.core.async.t_cljs$core$async16269.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16269.
 */
cljs.core.async.__GT_t_cljs$core$async16269 = (function cljs$core$async$__GT_t_cljs$core$async16269(f,ch,meta16233,_,fn1,meta16270){
return (new cljs.core.async.t_cljs$core$async16269(f,ch,meta16233,_,fn1,meta16270));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16232 = (function (f,ch,meta16233){
this.f = f;
this.ch = ch;
this.meta16233 = meta16233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16234,meta16233__$1){
var self__ = this;
var _16234__$1 = this;
return (new cljs.core.async.t_cljs$core$async16232(self__.f,self__.ch,meta16233__$1));
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16234){
var self__ = this;
var _16234__$1 = this;
return self__.meta16233;
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16269(self__.f,self__.ch,self__.meta16233,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16294 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16294) : self__.f.call(null,G__16294));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16233","meta16233",-854287320,null)], null);
}));

(cljs.core.async.t_cljs$core$async16232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16232");

(cljs.core.async.t_cljs$core$async16232.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16232.
 */
cljs.core.async.__GT_t_cljs$core$async16232 = (function cljs$core$async$__GT_t_cljs$core$async16232(f,ch,meta16233){
return (new cljs.core.async.t_cljs$core$async16232(f,ch,meta16233));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16232(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16304 = (function (f,ch,meta16305){
this.f = f;
this.ch = ch;
this.meta16305 = meta16305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16306,meta16305__$1){
var self__ = this;
var _16306__$1 = this;
return (new cljs.core.async.t_cljs$core$async16304(self__.f,self__.ch,meta16305__$1));
}));

(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16306){
var self__ = this;
var _16306__$1 = this;
return self__.meta16305;
}));

(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16305","meta16305",-1569569372,null)], null);
}));

(cljs.core.async.t_cljs$core$async16304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16304");

(cljs.core.async.t_cljs$core$async16304.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16304.
 */
cljs.core.async.__GT_t_cljs$core$async16304 = (function cljs$core$async$__GT_t_cljs$core$async16304(f,ch,meta16305){
return (new cljs.core.async.t_cljs$core$async16304(f,ch,meta16305));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16304(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16331 = (function (p,ch,meta16332){
this.p = p;
this.ch = ch;
this.meta16332 = meta16332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16333,meta16332__$1){
var self__ = this;
var _16333__$1 = this;
return (new cljs.core.async.t_cljs$core$async16331(self__.p,self__.ch,meta16332__$1));
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16333){
var self__ = this;
var _16333__$1 = this;
return self__.meta16332;
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16332","meta16332",-967611297,null)], null);
}));

(cljs.core.async.t_cljs$core$async16331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16331");

(cljs.core.async.t_cljs$core$async16331.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16331.
 */
cljs.core.async.__GT_t_cljs$core$async16331 = (function cljs$core$async$__GT_t_cljs$core$async16331(p,ch,meta16332){
return (new cljs.core.async.t_cljs$core$async16331(p,ch,meta16332));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16331(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16361 = arguments.length;
switch (G__16361) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13762__auto___17751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_16395){
var state_val_16396 = (state_16395[(1)]);
if((state_val_16396 === (7))){
var inst_16391 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16401_17755 = state_16395__$1;
(statearr_16401_17755[(2)] = inst_16391);

(statearr_16401_17755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (1))){
var state_16395__$1 = state_16395;
var statearr_16403_17756 = state_16395__$1;
(statearr_16403_17756[(2)] = null);

(statearr_16403_17756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (4))){
var inst_16374 = (state_16395[(7)]);
var inst_16374__$1 = (state_16395[(2)]);
var inst_16375 = (inst_16374__$1 == null);
var state_16395__$1 = (function (){var statearr_16404 = state_16395;
(statearr_16404[(7)] = inst_16374__$1);

return statearr_16404;
})();
if(cljs.core.truth_(inst_16375)){
var statearr_16405_17757 = state_16395__$1;
(statearr_16405_17757[(1)] = (5));

} else {
var statearr_16406_17758 = state_16395__$1;
(statearr_16406_17758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (6))){
var inst_16374 = (state_16395[(7)]);
var inst_16379 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16374) : p.call(null,inst_16374));
var state_16395__$1 = state_16395;
if(cljs.core.truth_(inst_16379)){
var statearr_16408_17759 = state_16395__$1;
(statearr_16408_17759[(1)] = (8));

} else {
var statearr_16409_17760 = state_16395__$1;
(statearr_16409_17760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (3))){
var inst_16393 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16395__$1,inst_16393);
} else {
if((state_val_16396 === (2))){
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16395__$1,(4),ch);
} else {
if((state_val_16396 === (11))){
var inst_16382 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16411_17761 = state_16395__$1;
(statearr_16411_17761[(2)] = inst_16382);

(statearr_16411_17761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (9))){
var state_16395__$1 = state_16395;
var statearr_16415_17762 = state_16395__$1;
(statearr_16415_17762[(2)] = null);

(statearr_16415_17762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (5))){
var inst_16377 = cljs.core.async.close_BANG_(out);
var state_16395__$1 = state_16395;
var statearr_16419_17764 = state_16395__$1;
(statearr_16419_17764[(2)] = inst_16377);

(statearr_16419_17764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (10))){
var inst_16388 = (state_16395[(2)]);
var state_16395__$1 = (function (){var statearr_16428 = state_16395;
(statearr_16428[(8)] = inst_16388);

return statearr_16428;
})();
var statearr_16429_17765 = state_16395__$1;
(statearr_16429_17765[(2)] = null);

(statearr_16429_17765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (8))){
var inst_16374 = (state_16395[(7)]);
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16395__$1,(11),out,inst_16374);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_16435 = [null,null,null,null,null,null,null,null,null];
(statearr_16435[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_16435[(1)] = (1));

return statearr_16435;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_16395){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_16395);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e16437){var ex__13418__auto__ = e16437;
var statearr_16438_17766 = state_16395;
(statearr_16438_17766[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_16395[(4)]))){
var statearr_16442_17767 = state_16395;
(statearr_16442_17767[(1)] = cljs.core.first((state_16395[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17768 = state_16395;
state_16395 = G__17768;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_16395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_16395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_16445 = f__13763__auto__();
(statearr_16445[(6)] = c__13762__auto___17751);

return statearr_16445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16453 = arguments.length;
switch (G__16453) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_16529){
var state_val_16530 = (state_16529[(1)]);
if((state_val_16530 === (7))){
var inst_16525 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16535_17770 = state_16529__$1;
(statearr_16535_17770[(2)] = inst_16525);

(statearr_16535_17770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (20))){
var inst_16491 = (state_16529[(7)]);
var inst_16506 = (state_16529[(2)]);
var inst_16507 = cljs.core.next(inst_16491);
var inst_16473 = inst_16507;
var inst_16474 = null;
var inst_16475 = (0);
var inst_16476 = (0);
var state_16529__$1 = (function (){var statearr_16536 = state_16529;
(statearr_16536[(8)] = inst_16476);

(statearr_16536[(9)] = inst_16475);

(statearr_16536[(10)] = inst_16474);

(statearr_16536[(11)] = inst_16473);

(statearr_16536[(12)] = inst_16506);

return statearr_16536;
})();
var statearr_16540_17775 = state_16529__$1;
(statearr_16540_17775[(2)] = null);

(statearr_16540_17775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (1))){
var state_16529__$1 = state_16529;
var statearr_16546_17776 = state_16529__$1;
(statearr_16546_17776[(2)] = null);

(statearr_16546_17776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (4))){
var inst_16462 = (state_16529[(13)]);
var inst_16462__$1 = (state_16529[(2)]);
var inst_16463 = (inst_16462__$1 == null);
var state_16529__$1 = (function (){var statearr_16547 = state_16529;
(statearr_16547[(13)] = inst_16462__$1);

return statearr_16547;
})();
if(cljs.core.truth_(inst_16463)){
var statearr_16548_17777 = state_16529__$1;
(statearr_16548_17777[(1)] = (5));

} else {
var statearr_16549_17778 = state_16529__$1;
(statearr_16549_17778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (15))){
var state_16529__$1 = state_16529;
var statearr_16556_17779 = state_16529__$1;
(statearr_16556_17779[(2)] = null);

(statearr_16556_17779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (21))){
var state_16529__$1 = state_16529;
var statearr_16558_17780 = state_16529__$1;
(statearr_16558_17780[(2)] = null);

(statearr_16558_17780[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (13))){
var inst_16476 = (state_16529[(8)]);
var inst_16475 = (state_16529[(9)]);
var inst_16474 = (state_16529[(10)]);
var inst_16473 = (state_16529[(11)]);
var inst_16487 = (state_16529[(2)]);
var inst_16488 = (inst_16476 + (1));
var tmp16553 = inst_16475;
var tmp16554 = inst_16474;
var tmp16555 = inst_16473;
var inst_16473__$1 = tmp16555;
var inst_16474__$1 = tmp16554;
var inst_16475__$1 = tmp16553;
var inst_16476__$1 = inst_16488;
var state_16529__$1 = (function (){var statearr_16559 = state_16529;
(statearr_16559[(8)] = inst_16476__$1);

(statearr_16559[(9)] = inst_16475__$1);

(statearr_16559[(10)] = inst_16474__$1);

(statearr_16559[(11)] = inst_16473__$1);

(statearr_16559[(14)] = inst_16487);

return statearr_16559;
})();
var statearr_16560_17791 = state_16529__$1;
(statearr_16560_17791[(2)] = null);

(statearr_16560_17791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (22))){
var state_16529__$1 = state_16529;
var statearr_16646_17793 = state_16529__$1;
(statearr_16646_17793[(2)] = null);

(statearr_16646_17793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (6))){
var inst_16462 = (state_16529[(13)]);
var inst_16471 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16462) : f.call(null,inst_16462));
var inst_16472 = cljs.core.seq(inst_16471);
var inst_16473 = inst_16472;
var inst_16474 = null;
var inst_16475 = (0);
var inst_16476 = (0);
var state_16529__$1 = (function (){var statearr_16647 = state_16529;
(statearr_16647[(8)] = inst_16476);

(statearr_16647[(9)] = inst_16475);

(statearr_16647[(10)] = inst_16474);

(statearr_16647[(11)] = inst_16473);

return statearr_16647;
})();
var statearr_16648_17797 = state_16529__$1;
(statearr_16648_17797[(2)] = null);

(statearr_16648_17797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (17))){
var inst_16491 = (state_16529[(7)]);
var inst_16499 = cljs.core.chunk_first(inst_16491);
var inst_16500 = cljs.core.chunk_rest(inst_16491);
var inst_16501 = cljs.core.count(inst_16499);
var inst_16473 = inst_16500;
var inst_16474 = inst_16499;
var inst_16475 = inst_16501;
var inst_16476 = (0);
var state_16529__$1 = (function (){var statearr_16649 = state_16529;
(statearr_16649[(8)] = inst_16476);

(statearr_16649[(9)] = inst_16475);

(statearr_16649[(10)] = inst_16474);

(statearr_16649[(11)] = inst_16473);

return statearr_16649;
})();
var statearr_16650_17804 = state_16529__$1;
(statearr_16650_17804[(2)] = null);

(statearr_16650_17804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (3))){
var inst_16527 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16529__$1,inst_16527);
} else {
if((state_val_16530 === (12))){
var inst_16515 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16651_17805 = state_16529__$1;
(statearr_16651_17805[(2)] = inst_16515);

(statearr_16651_17805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (2))){
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16529__$1,(4),in$);
} else {
if((state_val_16530 === (23))){
var inst_16523 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16652_17806 = state_16529__$1;
(statearr_16652_17806[(2)] = inst_16523);

(statearr_16652_17806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (19))){
var inst_16510 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16653_17807 = state_16529__$1;
(statearr_16653_17807[(2)] = inst_16510);

(statearr_16653_17807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (11))){
var inst_16491 = (state_16529[(7)]);
var inst_16473 = (state_16529[(11)]);
var inst_16491__$1 = cljs.core.seq(inst_16473);
var state_16529__$1 = (function (){var statearr_16654 = state_16529;
(statearr_16654[(7)] = inst_16491__$1);

return statearr_16654;
})();
if(inst_16491__$1){
var statearr_16655_17814 = state_16529__$1;
(statearr_16655_17814[(1)] = (14));

} else {
var statearr_16656_17815 = state_16529__$1;
(statearr_16656_17815[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (9))){
var inst_16517 = (state_16529[(2)]);
var inst_16518 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16529__$1 = (function (){var statearr_16660 = state_16529;
(statearr_16660[(15)] = inst_16517);

return statearr_16660;
})();
if(cljs.core.truth_(inst_16518)){
var statearr_16661_17816 = state_16529__$1;
(statearr_16661_17816[(1)] = (21));

} else {
var statearr_16662_17817 = state_16529__$1;
(statearr_16662_17817[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (5))){
var inst_16465 = cljs.core.async.close_BANG_(out);
var state_16529__$1 = state_16529;
var statearr_16663_17818 = state_16529__$1;
(statearr_16663_17818[(2)] = inst_16465);

(statearr_16663_17818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (14))){
var inst_16491 = (state_16529[(7)]);
var inst_16496 = cljs.core.chunked_seq_QMARK_(inst_16491);
var state_16529__$1 = state_16529;
if(inst_16496){
var statearr_16664_17819 = state_16529__$1;
(statearr_16664_17819[(1)] = (17));

} else {
var statearr_16665_17820 = state_16529__$1;
(statearr_16665_17820[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (16))){
var inst_16513 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16666_17821 = state_16529__$1;
(statearr_16666_17821[(2)] = inst_16513);

(statearr_16666_17821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (10))){
var inst_16476 = (state_16529[(8)]);
var inst_16474 = (state_16529[(10)]);
var inst_16481 = cljs.core._nth(inst_16474,inst_16476);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16529__$1,(13),out,inst_16481);
} else {
if((state_val_16530 === (18))){
var inst_16491 = (state_16529[(7)]);
var inst_16504 = cljs.core.first(inst_16491);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16529__$1,(20),out,inst_16504);
} else {
if((state_val_16530 === (8))){
var inst_16476 = (state_16529[(8)]);
var inst_16475 = (state_16529[(9)]);
var inst_16478 = (inst_16476 < inst_16475);
var inst_16479 = inst_16478;
var state_16529__$1 = state_16529;
if(cljs.core.truth_(inst_16479)){
var statearr_16672_17828 = state_16529__$1;
(statearr_16672_17828[(1)] = (10));

} else {
var statearr_16673_17829 = state_16529__$1;
(statearr_16673_17829[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13415__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13415__auto____0 = (function (){
var statearr_16675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16675[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13415__auto__);

(statearr_16675[(1)] = (1));

return statearr_16675;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13415__auto____1 = (function (state_16529){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_16529);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e16677){var ex__13418__auto__ = e16677;
var statearr_16678_17830 = state_16529;
(statearr_16678_17830[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_16529[(4)]))){
var statearr_16679_17831 = state_16529;
(statearr_16679_17831[(1)] = cljs.core.first((state_16529[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17832 = state_16529;
state_16529 = G__17832;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13415__auto__ = function(state_16529){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13415__auto____1.call(this,state_16529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13415__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13415__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_16681 = f__13763__auto__();
(statearr_16681[(6)] = c__13762__auto__);

return statearr_16681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));

return c__13762__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16684 = arguments.length;
switch (G__16684) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16691 = arguments.length;
switch (G__16691) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16693 = arguments.length;
switch (G__16693) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13762__auto___17846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_16719){
var state_val_16720 = (state_16719[(1)]);
if((state_val_16720 === (7))){
var inst_16714 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
var statearr_16749_17848 = state_16719__$1;
(statearr_16749_17848[(2)] = inst_16714);

(statearr_16749_17848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (1))){
var inst_16696 = null;
var state_16719__$1 = (function (){var statearr_16750 = state_16719;
(statearr_16750[(7)] = inst_16696);

return statearr_16750;
})();
var statearr_16751_17849 = state_16719__$1;
(statearr_16751_17849[(2)] = null);

(statearr_16751_17849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (4))){
var inst_16699 = (state_16719[(8)]);
var inst_16699__$1 = (state_16719[(2)]);
var inst_16700 = (inst_16699__$1 == null);
var inst_16701 = cljs.core.not(inst_16700);
var state_16719__$1 = (function (){var statearr_16760 = state_16719;
(statearr_16760[(8)] = inst_16699__$1);

return statearr_16760;
})();
if(inst_16701){
var statearr_16761_17850 = state_16719__$1;
(statearr_16761_17850[(1)] = (5));

} else {
var statearr_16762_17851 = state_16719__$1;
(statearr_16762_17851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (6))){
var state_16719__$1 = state_16719;
var statearr_16763_17853 = state_16719__$1;
(statearr_16763_17853[(2)] = null);

(statearr_16763_17853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (3))){
var inst_16716 = (state_16719[(2)]);
var inst_16717 = cljs.core.async.close_BANG_(out);
var state_16719__$1 = (function (){var statearr_16765 = state_16719;
(statearr_16765[(9)] = inst_16716);

return statearr_16765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16719__$1,inst_16717);
} else {
if((state_val_16720 === (2))){
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16719__$1,(4),ch);
} else {
if((state_val_16720 === (11))){
var inst_16699 = (state_16719[(8)]);
var inst_16708 = (state_16719[(2)]);
var inst_16696 = inst_16699;
var state_16719__$1 = (function (){var statearr_16768 = state_16719;
(statearr_16768[(7)] = inst_16696);

(statearr_16768[(10)] = inst_16708);

return statearr_16768;
})();
var statearr_16769_17860 = state_16719__$1;
(statearr_16769_17860[(2)] = null);

(statearr_16769_17860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (9))){
var inst_16699 = (state_16719[(8)]);
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16719__$1,(11),out,inst_16699);
} else {
if((state_val_16720 === (5))){
var inst_16696 = (state_16719[(7)]);
var inst_16699 = (state_16719[(8)]);
var inst_16703 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16699,inst_16696);
var state_16719__$1 = state_16719;
if(inst_16703){
var statearr_16774_17866 = state_16719__$1;
(statearr_16774_17866[(1)] = (8));

} else {
var statearr_16776_17867 = state_16719__$1;
(statearr_16776_17867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (10))){
var inst_16711 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
var statearr_16777_17868 = state_16719__$1;
(statearr_16777_17868[(2)] = inst_16711);

(statearr_16777_17868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (8))){
var inst_16696 = (state_16719[(7)]);
var tmp16771 = inst_16696;
var inst_16696__$1 = tmp16771;
var state_16719__$1 = (function (){var statearr_16781 = state_16719;
(statearr_16781[(7)] = inst_16696__$1);

return statearr_16781;
})();
var statearr_16782_17869 = state_16719__$1;
(statearr_16782_17869[(2)] = null);

(statearr_16782_17869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_16788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16788[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_16788[(1)] = (1));

return statearr_16788;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_16719){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_16719);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e16789){var ex__13418__auto__ = e16789;
var statearr_16790_17870 = state_16719;
(statearr_16790_17870[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_16719[(4)]))){
var statearr_16793_17871 = state_16719;
(statearr_16793_17871[(1)] = cljs.core.first((state_16719[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17872 = state_16719;
state_16719 = G__17872;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_16719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_16719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_16798 = f__13763__auto__();
(statearr_16798[(6)] = c__13762__auto___17846);

return statearr_16798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16802 = arguments.length;
switch (G__16802) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13762__auto___17882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_16854){
var state_val_16855 = (state_16854[(1)]);
if((state_val_16855 === (7))){
var inst_16850 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16859_17883 = state_16854__$1;
(statearr_16859_17883[(2)] = inst_16850);

(statearr_16859_17883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (1))){
var inst_16817 = (new Array(n));
var inst_16818 = inst_16817;
var inst_16819 = (0);
var state_16854__$1 = (function (){var statearr_16860 = state_16854;
(statearr_16860[(7)] = inst_16818);

(statearr_16860[(8)] = inst_16819);

return statearr_16860;
})();
var statearr_16861_17887 = state_16854__$1;
(statearr_16861_17887[(2)] = null);

(statearr_16861_17887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (4))){
var inst_16822 = (state_16854[(9)]);
var inst_16822__$1 = (state_16854[(2)]);
var inst_16823 = (inst_16822__$1 == null);
var inst_16824 = cljs.core.not(inst_16823);
var state_16854__$1 = (function (){var statearr_16865 = state_16854;
(statearr_16865[(9)] = inst_16822__$1);

return statearr_16865;
})();
if(inst_16824){
var statearr_16866_17890 = state_16854__$1;
(statearr_16866_17890[(1)] = (5));

} else {
var statearr_16867_17891 = state_16854__$1;
(statearr_16867_17891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (15))){
var inst_16844 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16868_17895 = state_16854__$1;
(statearr_16868_17895[(2)] = inst_16844);

(statearr_16868_17895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (13))){
var state_16854__$1 = state_16854;
var statearr_16869_17896 = state_16854__$1;
(statearr_16869_17896[(2)] = null);

(statearr_16869_17896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (6))){
var inst_16819 = (state_16854[(8)]);
var inst_16840 = (inst_16819 > (0));
var state_16854__$1 = state_16854;
if(cljs.core.truth_(inst_16840)){
var statearr_16871_17902 = state_16854__$1;
(statearr_16871_17902[(1)] = (12));

} else {
var statearr_16872_17903 = state_16854__$1;
(statearr_16872_17903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (3))){
var inst_16852 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16854__$1,inst_16852);
} else {
if((state_val_16855 === (12))){
var inst_16818 = (state_16854[(7)]);
var inst_16842 = cljs.core.vec(inst_16818);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16854__$1,(15),out,inst_16842);
} else {
if((state_val_16855 === (2))){
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16854__$1,(4),ch);
} else {
if((state_val_16855 === (11))){
var inst_16834 = (state_16854[(2)]);
var inst_16835 = (new Array(n));
var inst_16818 = inst_16835;
var inst_16819 = (0);
var state_16854__$1 = (function (){var statearr_16874 = state_16854;
(statearr_16874[(7)] = inst_16818);

(statearr_16874[(8)] = inst_16819);

(statearr_16874[(10)] = inst_16834);

return statearr_16874;
})();
var statearr_16875_17911 = state_16854__$1;
(statearr_16875_17911[(2)] = null);

(statearr_16875_17911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (9))){
var inst_16818 = (state_16854[(7)]);
var inst_16832 = cljs.core.vec(inst_16818);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16854__$1,(11),out,inst_16832);
} else {
if((state_val_16855 === (5))){
var inst_16818 = (state_16854[(7)]);
var inst_16819 = (state_16854[(8)]);
var inst_16827 = (state_16854[(11)]);
var inst_16822 = (state_16854[(9)]);
var inst_16826 = (inst_16818[inst_16819] = inst_16822);
var inst_16827__$1 = (inst_16819 + (1));
var inst_16828 = (inst_16827__$1 < n);
var state_16854__$1 = (function (){var statearr_16881 = state_16854;
(statearr_16881[(12)] = inst_16826);

(statearr_16881[(11)] = inst_16827__$1);

return statearr_16881;
})();
if(cljs.core.truth_(inst_16828)){
var statearr_16883_17921 = state_16854__$1;
(statearr_16883_17921[(1)] = (8));

} else {
var statearr_16884_17922 = state_16854__$1;
(statearr_16884_17922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (14))){
var inst_16847 = (state_16854[(2)]);
var inst_16848 = cljs.core.async.close_BANG_(out);
var state_16854__$1 = (function (){var statearr_16886 = state_16854;
(statearr_16886[(13)] = inst_16847);

return statearr_16886;
})();
var statearr_16887_17923 = state_16854__$1;
(statearr_16887_17923[(2)] = inst_16848);

(statearr_16887_17923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (10))){
var inst_16838 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
var statearr_16888_17924 = state_16854__$1;
(statearr_16888_17924[(2)] = inst_16838);

(statearr_16888_17924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16855 === (8))){
var inst_16818 = (state_16854[(7)]);
var inst_16827 = (state_16854[(11)]);
var tmp16885 = inst_16818;
var inst_16818__$1 = tmp16885;
var inst_16819 = inst_16827;
var state_16854__$1 = (function (){var statearr_16889 = state_16854;
(statearr_16889[(7)] = inst_16818__$1);

(statearr_16889[(8)] = inst_16819);

return statearr_16889;
})();
var statearr_16890_17925 = state_16854__$1;
(statearr_16890_17925[(2)] = null);

(statearr_16890_17925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_16891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16891[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_16891[(1)] = (1));

return statearr_16891;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_16854){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_16854);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e16893){var ex__13418__auto__ = e16893;
var statearr_16894_17926 = state_16854;
(statearr_16894_17926[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_16854[(4)]))){
var statearr_16895_17927 = state_16854;
(statearr_16895_17927[(1)] = cljs.core.first((state_16854[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17928 = state_16854;
state_16854 = G__17928;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_16854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_16854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_16899 = f__13763__auto__();
(statearr_16899[(6)] = c__13762__auto___17882);

return statearr_16899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16905 = arguments.length;
switch (G__16905) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13762__auto___17934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13763__auto__ = (function (){var switch__13414__auto__ = (function (state_16954){
var state_val_16955 = (state_16954[(1)]);
if((state_val_16955 === (7))){
var inst_16950 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16956_17935 = state_16954__$1;
(statearr_16956_17935[(2)] = inst_16950);

(statearr_16956_17935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (1))){
var inst_16910 = [];
var inst_16911 = inst_16910;
var inst_16912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16954__$1 = (function (){var statearr_16957 = state_16954;
(statearr_16957[(7)] = inst_16912);

(statearr_16957[(8)] = inst_16911);

return statearr_16957;
})();
var statearr_16958_17939 = state_16954__$1;
(statearr_16958_17939[(2)] = null);

(statearr_16958_17939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (4))){
var inst_16915 = (state_16954[(9)]);
var inst_16915__$1 = (state_16954[(2)]);
var inst_16916 = (inst_16915__$1 == null);
var inst_16917 = cljs.core.not(inst_16916);
var state_16954__$1 = (function (){var statearr_16959 = state_16954;
(statearr_16959[(9)] = inst_16915__$1);

return statearr_16959;
})();
if(inst_16917){
var statearr_16960_17942 = state_16954__$1;
(statearr_16960_17942[(1)] = (5));

} else {
var statearr_16961_17943 = state_16954__$1;
(statearr_16961_17943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (15))){
var inst_16911 = (state_16954[(8)]);
var inst_16942 = cljs.core.vec(inst_16911);
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16954__$1,(18),out,inst_16942);
} else {
if((state_val_16955 === (13))){
var inst_16937 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16963_17944 = state_16954__$1;
(statearr_16963_17944[(2)] = inst_16937);

(statearr_16963_17944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (6))){
var inst_16911 = (state_16954[(8)]);
var inst_16939 = inst_16911.length;
var inst_16940 = (inst_16939 > (0));
var state_16954__$1 = state_16954;
if(cljs.core.truth_(inst_16940)){
var statearr_16964_17945 = state_16954__$1;
(statearr_16964_17945[(1)] = (15));

} else {
var statearr_16968_17946 = state_16954__$1;
(statearr_16968_17946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (17))){
var inst_16947 = (state_16954[(2)]);
var inst_16948 = cljs.core.async.close_BANG_(out);
var state_16954__$1 = (function (){var statearr_16977 = state_16954;
(statearr_16977[(10)] = inst_16947);

return statearr_16977;
})();
var statearr_16978_17953 = state_16954__$1;
(statearr_16978_17953[(2)] = inst_16948);

(statearr_16978_17953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (3))){
var inst_16952 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16954__$1,inst_16952);
} else {
if((state_val_16955 === (12))){
var inst_16911 = (state_16954[(8)]);
var inst_16930 = cljs.core.vec(inst_16911);
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16954__$1,(14),out,inst_16930);
} else {
if((state_val_16955 === (2))){
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16954__$1,(4),ch);
} else {
if((state_val_16955 === (11))){
var inst_16911 = (state_16954[(8)]);
var inst_16919 = (state_16954[(11)]);
var inst_16915 = (state_16954[(9)]);
var inst_16927 = inst_16911.push(inst_16915);
var tmp16985 = inst_16911;
var inst_16911__$1 = tmp16985;
var inst_16912 = inst_16919;
var state_16954__$1 = (function (){var statearr_16992 = state_16954;
(statearr_16992[(12)] = inst_16927);

(statearr_16992[(7)] = inst_16912);

(statearr_16992[(8)] = inst_16911__$1);

return statearr_16992;
})();
var statearr_16993_17959 = state_16954__$1;
(statearr_16993_17959[(2)] = null);

(statearr_16993_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (9))){
var inst_16912 = (state_16954[(7)]);
var inst_16923 = cljs.core.keyword_identical_QMARK_(inst_16912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16954__$1 = state_16954;
var statearr_16994_17960 = state_16954__$1;
(statearr_16994_17960[(2)] = inst_16923);

(statearr_16994_17960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (5))){
var inst_16912 = (state_16954[(7)]);
var inst_16919 = (state_16954[(11)]);
var inst_16915 = (state_16954[(9)]);
var inst_16920 = (state_16954[(13)]);
var inst_16919__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16915) : f.call(null,inst_16915));
var inst_16920__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16919__$1,inst_16912);
var state_16954__$1 = (function (){var statearr_17009 = state_16954;
(statearr_17009[(11)] = inst_16919__$1);

(statearr_17009[(13)] = inst_16920__$1);

return statearr_17009;
})();
if(inst_16920__$1){
var statearr_17010_17961 = state_16954__$1;
(statearr_17010_17961[(1)] = (8));

} else {
var statearr_17011_17962 = state_16954__$1;
(statearr_17011_17962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (14))){
var inst_16919 = (state_16954[(11)]);
var inst_16915 = (state_16954[(9)]);
var inst_16932 = (state_16954[(2)]);
var inst_16933 = [];
var inst_16934 = inst_16933.push(inst_16915);
var inst_16911 = inst_16933;
var inst_16912 = inst_16919;
var state_16954__$1 = (function (){var statearr_17019 = state_16954;
(statearr_17019[(14)] = inst_16932);

(statearr_17019[(7)] = inst_16912);

(statearr_17019[(8)] = inst_16911);

(statearr_17019[(15)] = inst_16934);

return statearr_17019;
})();
var statearr_17020_17970 = state_16954__$1;
(statearr_17020_17970[(2)] = null);

(statearr_17020_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (16))){
var state_16954__$1 = state_16954;
var statearr_17021_17971 = state_16954__$1;
(statearr_17021_17971[(2)] = null);

(statearr_17021_17971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (10))){
var inst_16925 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
if(cljs.core.truth_(inst_16925)){
var statearr_17024_17972 = state_16954__$1;
(statearr_17024_17972[(1)] = (11));

} else {
var statearr_17025_17973 = state_16954__$1;
(statearr_17025_17973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (18))){
var inst_16944 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_17026_17977 = state_16954__$1;
(statearr_17026_17977[(2)] = inst_16944);

(statearr_17026_17977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (8))){
var inst_16920 = (state_16954[(13)]);
var state_16954__$1 = state_16954;
var statearr_17027_17978 = state_16954__$1;
(statearr_17027_17978[(2)] = inst_16920);

(statearr_17027_17978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13415__auto__ = null;
var cljs$core$async$state_machine__13415__auto____0 = (function (){
var statearr_17029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17029[(0)] = cljs$core$async$state_machine__13415__auto__);

(statearr_17029[(1)] = (1));

return statearr_17029;
});
var cljs$core$async$state_machine__13415__auto____1 = (function (state_16954){
while(true){
var ret_value__13416__auto__ = (function (){try{while(true){
var result__13417__auto__ = switch__13414__auto__(state_16954);
if(cljs.core.keyword_identical_QMARK_(result__13417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13417__auto__;
}
break;
}
}catch (e17030){var ex__13418__auto__ = e17030;
var statearr_17031_17979 = state_16954;
(statearr_17031_17979[(2)] = ex__13418__auto__);


if(cljs.core.seq((state_16954[(4)]))){
var statearr_17032_17980 = state_16954;
(statearr_17032_17980[(1)] = cljs.core.first((state_16954[(4)])));

} else {
throw ex__13418__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17981 = state_16954;
state_16954 = G__17981;
continue;
} else {
return ret_value__13416__auto__;
}
break;
}
});
cljs$core$async$state_machine__13415__auto__ = function(state_16954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13415__auto____1.call(this,state_16954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13415__auto____0;
cljs$core$async$state_machine__13415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13415__auto____1;
return cljs$core$async$state_machine__13415__auto__;
})()
})();
var state__13764__auto__ = (function (){var statearr_17033 = f__13763__auto__();
(statearr_17033[(6)] = c__13762__auto___17934);

return statearr_17033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13764__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
