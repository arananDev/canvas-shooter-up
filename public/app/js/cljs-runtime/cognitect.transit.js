goog.provide('cognitect.transit');
goog.scope(function(){
  cognitect.transit.goog$module$goog$object = goog.module.get('goog.object');
  cognitect.transit.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
(cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
}));
(cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));
(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return other.cljs$core$IEquiv$_equiv$arity$2(null,this$__$1);
} else {
return this$__$1.equiv(other);
}
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));
(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString());
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
}));
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__13860_14334 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__13861_14335 = null;
var count__13862_14336 = (0);
var i__13863_14337 = (0);
while(true){
if((i__13863_14337 < count__13862_14336)){
var k_14338 = chunk__13861_14335.cljs$core$IIndexed$_nth$arity$2(null,i__13863_14337);
var v_14339 = cognitect.transit.goog$module$goog$object.get(b,k_14338);
cognitect.transit.goog$module$goog$object.set(a,k_14338,v_14339);


var G__14342 = seq__13860_14334;
var G__14343 = chunk__13861_14335;
var G__14344 = count__13862_14336;
var G__14345 = (i__13863_14337 + (1));
seq__13860_14334 = G__14342;
chunk__13861_14335 = G__14343;
count__13862_14336 = G__14344;
i__13863_14337 = G__14345;
continue;
} else {
var temp__5804__auto___14347 = cljs.core.seq(seq__13860_14334);
if(temp__5804__auto___14347){
var seq__13860_14349__$1 = temp__5804__auto___14347;
if(cljs.core.chunked_seq_QMARK_(seq__13860_14349__$1)){
var c__5568__auto___14350 = cljs.core.chunk_first(seq__13860_14349__$1);
var G__14351 = cljs.core.chunk_rest(seq__13860_14349__$1);
var G__14352 = c__5568__auto___14350;
var G__14353 = cljs.core.count(c__5568__auto___14350);
var G__14354 = (0);
seq__13860_14334 = G__14351;
chunk__13861_14335 = G__14352;
count__13862_14336 = G__14353;
i__13863_14337 = G__14354;
continue;
} else {
var k_14355 = cljs.core.first(seq__13860_14349__$1);
var v_14356 = cognitect.transit.goog$module$goog$object.get(b,k_14355);
cognitect.transit.goog$module$goog$object.set(a,k_14355,v_14356);


var G__14358 = cljs.core.next(seq__13860_14349__$1);
var G__14359 = null;
var G__14360 = (0);
var G__14361 = (0);
seq__13860_14334 = G__14358;
chunk__13861_14335 = G__14359;
count__13862_14336 = G__14360;
i__13863_14337 = G__14361;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
});
(cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
}));

(cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}));

(cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
}));

(cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
}));

(cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapBuilder.cljs$lang$type = true);

(cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder");

(cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/MapBuilder");
}));

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
});
(cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
}));

(cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
}));

(cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
}));

(cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
}));

(cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorBuilder.cljs$lang$type = true);

(cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder");

(cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/VectorBuilder");
}));

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from string tag to a decoder function of one
 * argument which returns the in-memory representation of the semantic transit
 * value. If a :default handler is provided, it will be used when no matching
 * read handler can be found.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__13892 = arguments.length;
switch (G__13892) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name(type),cognitect.transit.opts_merge(({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, ["$",(function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}),":",(function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
}),"set",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__14363 = (i + (2));
var G__14364 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__14363;
ret = G__14364;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
}),"with-meta",(function (v){
return cljs.core.with_meta((v[(0)]),(v[(1)]));
})], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328))], 0))), "defaultHandler": new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "preferStrings": false, "preferBuffers": false}),cljs.core.clj__GT_js(clojure.set.rename_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"array-builder","array-builder",1275998041),new cljs.core.Keyword(null,"arrayBuilder","arrayBuilder",1446317421),new cljs.core.Keyword(null,"map-builder","map-builder",-1843343288),new cljs.core.Keyword(null,"mapBuilder","mapBuilder",-278083754),new cljs.core.Keyword(null,"prefer-strings","prefer-strings",1254507185),new cljs.core.Keyword(null,"preferStrings","preferStrings",-1532249482),new cljs.core.Keyword(null,"prefer-buffers","prefer-buffers",377042081),new cljs.core.Keyword(null,"preferBuffers","preferBuffers",1843176451)], null)))));
}));

(cognitect.transit.reader.cljs$lang$maxFixedArity = 2);

/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
});
(cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
}));

(cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.KeywordHandler.cljs$lang$type = true);

(cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler");

(cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/KeywordHandler");
}));

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
});
(cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
}));

(cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SymbolHandler.cljs$lang$type = true);

(cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler");

(cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/SymbolHandler");
}));

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
});
(cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
}));

(cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13922_14368 = cljs.core.seq(v);
var chunk__13923_14369 = null;
var count__13924_14370 = (0);
var i__13925_14371 = (0);
while(true){
if((i__13925_14371 < count__13924_14370)){
var x_14372 = chunk__13923_14369.cljs$core$IIndexed$_nth$arity$2(null,i__13925_14371);
ret.push(x_14372);


var G__14373 = seq__13922_14368;
var G__14374 = chunk__13923_14369;
var G__14375 = count__13924_14370;
var G__14376 = (i__13925_14371 + (1));
seq__13922_14368 = G__14373;
chunk__13923_14369 = G__14374;
count__13924_14370 = G__14375;
i__13925_14371 = G__14376;
continue;
} else {
var temp__5804__auto___14377 = cljs.core.seq(seq__13922_14368);
if(temp__5804__auto___14377){
var seq__13922_14378__$1 = temp__5804__auto___14377;
if(cljs.core.chunked_seq_QMARK_(seq__13922_14378__$1)){
var c__5568__auto___14379 = cljs.core.chunk_first(seq__13922_14378__$1);
var G__14380 = cljs.core.chunk_rest(seq__13922_14378__$1);
var G__14381 = c__5568__auto___14379;
var G__14382 = cljs.core.count(c__5568__auto___14379);
var G__14383 = (0);
seq__13922_14368 = G__14380;
chunk__13923_14369 = G__14381;
count__13924_14370 = G__14382;
i__13925_14371 = G__14383;
continue;
} else {
var x_14385 = cljs.core.first(seq__13922_14378__$1);
ret.push(x_14385);


var G__14386 = cljs.core.next(seq__13922_14378__$1);
var G__14387 = null;
var G__14388 = (0);
var G__14389 = (0);
seq__13922_14368 = G__14386;
chunk__13923_14369 = G__14387;
count__13924_14370 = G__14388;
i__13925_14371 = G__14389;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.ListHandler.cljs$lang$type = true);

(cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler");

(cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/ListHandler");
}));

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
});
(cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
}));

(cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
}));

(cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapHandler.cljs$lang$type = true);

(cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler");

(cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/MapHandler");
}));

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
});
(cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
}));

(cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13948_14393 = cljs.core.seq(v);
var chunk__13950_14394 = null;
var count__13951_14395 = (0);
var i__13952_14396 = (0);
while(true){
if((i__13952_14396 < count__13951_14395)){
var x_14397 = chunk__13950_14394.cljs$core$IIndexed$_nth$arity$2(null,i__13952_14396);
ret.push(x_14397);


var G__14399 = seq__13948_14393;
var G__14400 = chunk__13950_14394;
var G__14401 = count__13951_14395;
var G__14402 = (i__13952_14396 + (1));
seq__13948_14393 = G__14399;
chunk__13950_14394 = G__14400;
count__13951_14395 = G__14401;
i__13952_14396 = G__14402;
continue;
} else {
var temp__5804__auto___14404 = cljs.core.seq(seq__13948_14393);
if(temp__5804__auto___14404){
var seq__13948_14405__$1 = temp__5804__auto___14404;
if(cljs.core.chunked_seq_QMARK_(seq__13948_14405__$1)){
var c__5568__auto___14406 = cljs.core.chunk_first(seq__13948_14405__$1);
var G__14407 = cljs.core.chunk_rest(seq__13948_14405__$1);
var G__14408 = c__5568__auto___14406;
var G__14409 = cljs.core.count(c__5568__auto___14406);
var G__14410 = (0);
seq__13948_14393 = G__14407;
chunk__13950_14394 = G__14408;
count__13951_14395 = G__14409;
i__13952_14396 = G__14410;
continue;
} else {
var x_14411 = cljs.core.first(seq__13948_14405__$1);
ret.push(x_14411);


var G__14412 = cljs.core.next(seq__13948_14405__$1);
var G__14413 = null;
var G__14414 = (0);
var G__14415 = (0);
seq__13948_14393 = G__14412;
chunk__13950_14394 = G__14413;
count__13951_14395 = G__14414;
i__13952_14396 = G__14415;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
}));

(cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SetHandler.cljs$lang$type = true);

(cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler");

(cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/SetHandler");
}));

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
});
(cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
}));

(cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13990_14420 = cljs.core.seq(v);
var chunk__13991_14421 = null;
var count__13992_14422 = (0);
var i__13993_14423 = (0);
while(true){
if((i__13993_14423 < count__13992_14422)){
var x_14425 = chunk__13991_14421.cljs$core$IIndexed$_nth$arity$2(null,i__13993_14423);
ret.push(x_14425);


var G__14427 = seq__13990_14420;
var G__14428 = chunk__13991_14421;
var G__14429 = count__13992_14422;
var G__14430 = (i__13993_14423 + (1));
seq__13990_14420 = G__14427;
chunk__13991_14421 = G__14428;
count__13992_14422 = G__14429;
i__13993_14423 = G__14430;
continue;
} else {
var temp__5804__auto___14431 = cljs.core.seq(seq__13990_14420);
if(temp__5804__auto___14431){
var seq__13990_14432__$1 = temp__5804__auto___14431;
if(cljs.core.chunked_seq_QMARK_(seq__13990_14432__$1)){
var c__5568__auto___14434 = cljs.core.chunk_first(seq__13990_14432__$1);
var G__14435 = cljs.core.chunk_rest(seq__13990_14432__$1);
var G__14436 = c__5568__auto___14434;
var G__14437 = cljs.core.count(c__5568__auto___14434);
var G__14438 = (0);
seq__13990_14420 = G__14435;
chunk__13991_14421 = G__14436;
count__13992_14422 = G__14437;
i__13993_14423 = G__14438;
continue;
} else {
var x_14439 = cljs.core.first(seq__13990_14432__$1);
ret.push(x_14439);


var G__14440 = cljs.core.next(seq__13990_14432__$1);
var G__14441 = null;
var G__14442 = (0);
var G__14443 = (0);
seq__13990_14420 = G__14440;
chunk__13991_14421 = G__14441;
count__13992_14422 = G__14442;
i__13993_14423 = G__14443;
continue;
}
} else {
}
}
break;
}

return ret;
}));

(cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorHandler.cljs$lang$type = true);

(cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler");

(cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/VectorHandler");
}));

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
});
(cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
}));

(cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
}));

(cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
}));

(cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.UUIDHandler.cljs$lang$type = true);

(cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler");

(cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/UUIDHandler");
}));

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});


/**
* @constructor
*/
cognitect.transit.WithMeta = (function (value,meta){
this.value = value;
this.meta = meta;
});

(cognitect.transit.WithMeta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cognitect.transit.WithMeta.cljs$lang$type = true);

(cognitect.transit.WithMeta.cljs$lang$ctorStr = "cognitect.transit/WithMeta");

(cognitect.transit.WithMeta.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/WithMeta");
}));

/**
 * Positional factory function for cognitect.transit/WithMeta.
 */
cognitect.transit.__GT_WithMeta = (function cognitect$transit$__GT_WithMeta(value,meta){
return (new cognitect.transit.WithMeta(value,meta));
});


/**
* @constructor
*/
cognitect.transit.WithMetaHandler = (function (){
});
(cognitect.transit.WithMetaHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "with-meta";
}));

(cognitect.transit.WithMetaHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return com.cognitect.transit.tagged("array",[v.value,v.meta]);
}));

(cognitect.transit.WithMetaHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.WithMetaHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.WithMetaHandler.cljs$lang$type = true);

(cognitect.transit.WithMetaHandler.cljs$lang$ctorStr = "cognitect.transit/WithMetaHandler");

(cognitect.transit.WithMetaHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/WithMetaHandler");
}));

/**
 * Positional factory function for cognitect.transit/WithMetaHandler.
 */
cognitect.transit.__GT_WithMetaHandler = (function cognitect$transit$__GT_WithMetaHandler(){
return (new cognitect.transit.WithMetaHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map with the following optional keys:
 * 
 *  :handlers  - a map of type constructors to handler instances. Can optionally
 *               provide a :default write handler which will be used if no
 *               matching handler can be found.
 *  :transform - a function of one argument returning a transformed value. Will
 *               be invoked on a value before it is written.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__14059 = arguments.length;
switch (G__14059) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var meta_handler = (new cognitect.transit.WithMetaHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.BlackNode,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cognitect.transit.WithMeta,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq,cljs.core.RedNode],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,vector_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,meta_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler,vector_handler]),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Eduction !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Eduction,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Repeat !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Repeat,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.MapEntry !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.MapEntry,vector_handler]):null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));
return com.cognitect.transit.writer(cljs.core.name(type),cognitect.transit.opts_merge(({"objectBuilder": (function (m,kfn,vfn){
return cljs.core.reduce_kv((function (obj,k,v){
var G__14080 = obj;
G__14080.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__14080;
}),["^ "],m);
}), "handlers": (function (){var x14082 = cljs.core.clone(handlers);
(x14082.forEach = (function (f){
var coll = this;
var seq__14088 = cljs.core.seq(coll);
var chunk__14089 = null;
var count__14090 = (0);
var i__14091 = (0);
while(true){
if((i__14091 < count__14090)){
var vec__14110 = chunk__14089.cljs$core$IIndexed$_nth$arity$2(null,i__14091);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14110,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__14454 = seq__14088;
var G__14455 = chunk__14089;
var G__14456 = count__14090;
var G__14457 = (i__14091 + (1));
seq__14088 = G__14454;
chunk__14089 = G__14455;
count__14090 = G__14456;
i__14091 = G__14457;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14088);
if(temp__5804__auto__){
var seq__14088__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14088__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14088__$1);
var G__14459 = cljs.core.chunk_rest(seq__14088__$1);
var G__14460 = c__5568__auto__;
var G__14461 = cljs.core.count(c__5568__auto__);
var G__14462 = (0);
seq__14088 = G__14459;
chunk__14089 = G__14460;
count__14090 = G__14461;
i__14091 = G__14462;
continue;
} else {
var vec__14132 = cljs.core.first(seq__14088__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14132,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__14463 = cljs.core.next(seq__14088__$1);
var G__14464 = null;
var G__14465 = (0);
var G__14466 = (0);
seq__14088 = G__14463;
chunk__14089 = G__14464;
count__14090 = G__14465;
i__14091 = G__14466;
continue;
}
} else {
return null;
}
}
break;
}
}));

return x14082;
})(), "unpack": (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
})}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.writer.cljs$lang$maxFixedArity = 2);

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
cognitect.transit.fn_or_val = (function cognitect$transit$fn_or_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
return cljs.core.constantly(f);
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit14171 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta14172){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta14172 = meta14172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cognitect.transit.t_cognitect$transit14171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14173,meta14172__$1){
var self__ = this;
var _14173__$1 = this;
return (new cognitect.transit.t_cognitect$transit14171(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta14172__$1));
}));

(cognitect.transit.t_cognitect$transit14171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14173){
var self__ = this;
var _14173__$1 = this;
return self__.meta14172;
}));

(cognitect.transit.t_cognitect$transit14171.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit14171.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit14171.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit14171.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit14171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta14172","meta14172",1748428645,null)], null);
}));

(cognitect.transit.t_cognitect$transit14171.cljs$lang$type = true);

(cognitect.transit.t_cognitect$transit14171.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit14171");

(cognitect.transit.t_cognitect$transit14171.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cognitect.transit/t_cognitect$transit14171");
}));

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit14171.
 */
cognitect.transit.__GT_t_cognitect$transit14171 = (function cognitect$transit$__GT_t_cognitect$transit14171(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta14172){
return (new cognitect.transit.t_cognitect$transit14171(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta14172));
});


/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__14150 = arguments.length;
switch (G__14150) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
var tag_fn__$1 = cognitect.transit.fn_or_val(tag_fn);
var rep_fn__$1 = cognitect.transit.fn_or_val(rep_fn);
var str_rep_fn__$1 = cognitect.transit.fn_or_val(str_rep_fn);
var verbose_handler_fn__$1 = cognitect.transit.fn_or_val(verbose_handler_fn);
return (new cognitect.transit.t_cognitect$transit14171(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,cljs.core.PersistentArrayMap.EMPTY));
}));

(cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4);

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__5045__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
/**
 * For :transform. Will write any metadata present on the value.
 */
cognitect.transit.write_meta = (function cognitect$transit$write_meta(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMeta$))))?true:false):false)){
var m = x.cljs$core$IMeta$_meta$arity$1(null);
if((!((m == null)))){
return (new cognitect.transit.WithMeta(x.cljs$core$IWithMeta$_with_meta$arity$2(null,null),m));
} else {
return x;
}
} else {
return x;
}
});

//# sourceMappingURL=cognitect.transit.js.map
