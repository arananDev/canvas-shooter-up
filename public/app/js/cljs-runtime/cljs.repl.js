goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18204){
var map__18205 = p__18204;
var map__18205__$1 = cljs.core.__destructure_map(map__18205);
var m = map__18205__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18205__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18205__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18215_18556 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18216_18557 = null;
var count__18217_18558 = (0);
var i__18218_18559 = (0);
while(true){
if((i__18218_18559 < count__18217_18558)){
var f_18560 = chunk__18216_18557.cljs$core$IIndexed$_nth$arity$2(null,i__18218_18559);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18560], 0));


var G__18561 = seq__18215_18556;
var G__18562 = chunk__18216_18557;
var G__18563 = count__18217_18558;
var G__18564 = (i__18218_18559 + (1));
seq__18215_18556 = G__18561;
chunk__18216_18557 = G__18562;
count__18217_18558 = G__18563;
i__18218_18559 = G__18564;
continue;
} else {
var temp__5804__auto___18565 = cljs.core.seq(seq__18215_18556);
if(temp__5804__auto___18565){
var seq__18215_18566__$1 = temp__5804__auto___18565;
if(cljs.core.chunked_seq_QMARK_(seq__18215_18566__$1)){
var c__5568__auto___18567 = cljs.core.chunk_first(seq__18215_18566__$1);
var G__18568 = cljs.core.chunk_rest(seq__18215_18566__$1);
var G__18569 = c__5568__auto___18567;
var G__18570 = cljs.core.count(c__5568__auto___18567);
var G__18571 = (0);
seq__18215_18556 = G__18568;
chunk__18216_18557 = G__18569;
count__18217_18558 = G__18570;
i__18218_18559 = G__18571;
continue;
} else {
var f_18572 = cljs.core.first(seq__18215_18566__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18572], 0));


var G__18574 = cljs.core.next(seq__18215_18566__$1);
var G__18575 = null;
var G__18576 = (0);
var G__18577 = (0);
seq__18215_18556 = G__18574;
chunk__18216_18557 = G__18575;
count__18217_18558 = G__18576;
i__18218_18559 = G__18577;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18578 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18578], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18578)))?cljs.core.second(arglists_18578):arglists_18578)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18229_18579 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18230_18580 = null;
var count__18231_18581 = (0);
var i__18232_18582 = (0);
while(true){
if((i__18232_18582 < count__18231_18581)){
var vec__18241_18583 = chunk__18230_18580.cljs$core$IIndexed$_nth$arity$2(null,i__18232_18582);
var name_18584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18241_18583,(0),null);
var map__18244_18585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18241_18583,(1),null);
var map__18244_18586__$1 = cljs.core.__destructure_map(map__18244_18585);
var doc_18587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18244_18586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18244_18586__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18584], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18588], 0));

if(cljs.core.truth_(doc_18587)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18587], 0));
} else {
}


var G__18589 = seq__18229_18579;
var G__18590 = chunk__18230_18580;
var G__18591 = count__18231_18581;
var G__18592 = (i__18232_18582 + (1));
seq__18229_18579 = G__18589;
chunk__18230_18580 = G__18590;
count__18231_18581 = G__18591;
i__18232_18582 = G__18592;
continue;
} else {
var temp__5804__auto___18593 = cljs.core.seq(seq__18229_18579);
if(temp__5804__auto___18593){
var seq__18229_18594__$1 = temp__5804__auto___18593;
if(cljs.core.chunked_seq_QMARK_(seq__18229_18594__$1)){
var c__5568__auto___18595 = cljs.core.chunk_first(seq__18229_18594__$1);
var G__18596 = cljs.core.chunk_rest(seq__18229_18594__$1);
var G__18597 = c__5568__auto___18595;
var G__18598 = cljs.core.count(c__5568__auto___18595);
var G__18599 = (0);
seq__18229_18579 = G__18596;
chunk__18230_18580 = G__18597;
count__18231_18581 = G__18598;
i__18232_18582 = G__18599;
continue;
} else {
var vec__18251_18600 = cljs.core.first(seq__18229_18594__$1);
var name_18601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18251_18600,(0),null);
var map__18254_18602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18251_18600,(1),null);
var map__18254_18603__$1 = cljs.core.__destructure_map(map__18254_18602);
var doc_18604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18254_18603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18254_18603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18601], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18605], 0));

if(cljs.core.truth_(doc_18604)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18604], 0));
} else {
}


var G__18606 = cljs.core.next(seq__18229_18594__$1);
var G__18607 = null;
var G__18608 = (0);
var G__18609 = (0);
seq__18229_18579 = G__18606;
chunk__18230_18580 = G__18607;
count__18231_18581 = G__18608;
i__18232_18582 = G__18609;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18255 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18256 = null;
var count__18257 = (0);
var i__18258 = (0);
while(true){
if((i__18258 < count__18257)){
var role = chunk__18256.cljs$core$IIndexed$_nth$arity$2(null,i__18258);
var temp__5804__auto___18610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18610__$1)){
var spec_18611 = temp__5804__auto___18610__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18611)], 0));
} else {
}


var G__18612 = seq__18255;
var G__18613 = chunk__18256;
var G__18614 = count__18257;
var G__18615 = (i__18258 + (1));
seq__18255 = G__18612;
chunk__18256 = G__18613;
count__18257 = G__18614;
i__18258 = G__18615;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18255);
if(temp__5804__auto____$1){
var seq__18255__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18255__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18255__$1);
var G__18616 = cljs.core.chunk_rest(seq__18255__$1);
var G__18617 = c__5568__auto__;
var G__18618 = cljs.core.count(c__5568__auto__);
var G__18619 = (0);
seq__18255 = G__18616;
chunk__18256 = G__18617;
count__18257 = G__18618;
i__18258 = G__18619;
continue;
} else {
var role = cljs.core.first(seq__18255__$1);
var temp__5804__auto___18620__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18620__$2)){
var spec_18621 = temp__5804__auto___18620__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18621)], 0));
} else {
}


var G__18622 = cljs.core.next(seq__18255__$1);
var G__18623 = null;
var G__18624 = (0);
var G__18625 = (0);
seq__18255 = G__18622;
chunk__18256 = G__18623;
count__18257 = G__18624;
i__18258 = G__18625;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18802 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18803 = cljs.core.ex_cause(t);
via = G__18802;
t = G__18803;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18273 = datafied_throwable;
var map__18273__$1 = cljs.core.__destructure_map(map__18273);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18273__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18273__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18273__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18274 = cljs.core.last(via);
var map__18274__$1 = cljs.core.__destructure_map(map__18274);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18274__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18274__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18274__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18275 = data;
var map__18275__$1 = cljs.core.__destructure_map(map__18275);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18275__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18275__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18275__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18276 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18276__$1 = cljs.core.__destructure_map(map__18276);
var top_data = map__18276__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18277 = phase;
var G__18277__$1 = (((G__18277 instanceof cljs.core.Keyword))?G__18277.fqn:null);
switch (G__18277__$1) {
case "read-source":
var map__18278 = data;
var map__18278__$1 = cljs.core.__destructure_map(map__18278);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18278__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18278__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18279 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18279__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18279,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18279);
var G__18279__$2 = (cljs.core.truth_((function (){var fexpr__18280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18280.cljs$core$IFn$_invoke$arity$1 ? fexpr__18280.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18280.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18279__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18279__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18279__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18285 = top_data;
var G__18285__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18285,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18285);
var G__18285__$2 = (cljs.core.truth_((function (){var fexpr__18286 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18286.cljs$core$IFn$_invoke$arity$1 ? fexpr__18286.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18286.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18285__$1);
var G__18285__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18285__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18285__$2);
var G__18285__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18285__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18285__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18285__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18285__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18287 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18287,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18287,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18287,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18287,(3),null);
var G__18290 = top_data;
var G__18290__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18290,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18290);
var G__18290__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18290__$1);
var G__18290__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18290__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18290__$2);
var G__18290__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18290__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18290__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18290__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18290__$4;
}

break;
case "execution":
var vec__18291 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18268_SHARP_){
var or__5045__auto__ = (p1__18268_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18297.cljs$core$IFn$_invoke$arity$1 ? fexpr__18297.cljs$core$IFn$_invoke$arity$1(p1__18268_SHARP_) : fexpr__18297.call(null,p1__18268_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18302 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18302__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18302,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18302);
var G__18302__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18302__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18302__$1);
var G__18302__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18302__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18302__$2);
var G__18302__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18302__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18302__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18302__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18302__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18277__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18446){
var map__18448 = p__18446;
var map__18448__$1 = cljs.core.__destructure_map(map__18448);
var triage_data = map__18448__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18448__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18452 = phase;
var G__18452__$1 = (((G__18452 instanceof cljs.core.Keyword))?G__18452.fqn:null);
switch (G__18452__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18453 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18454 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18455 = loc;
var G__18456 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18457_18834 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18458_18835 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18459_18836 = true;
var _STAR_print_fn_STAR__temp_val__18460_18837 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18459_18836);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18460_18837);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18444_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18444_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18458_18835);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18457_18834);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18453,G__18454,G__18455,G__18456) : format.call(null,G__18453,G__18454,G__18455,G__18456));

break;
case "macroexpansion":
var G__18461 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18462 = cause_type;
var G__18463 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18464 = loc;
var G__18465 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18461,G__18462,G__18463,G__18464,G__18465) : format.call(null,G__18461,G__18462,G__18463,G__18464,G__18465));

break;
case "compile-syntax-check":
var G__18466 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18467 = cause_type;
var G__18468 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18469 = loc;
var G__18470 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18466,G__18467,G__18468,G__18469,G__18470) : format.call(null,G__18466,G__18467,G__18468,G__18469,G__18470));

break;
case "compilation":
var G__18471 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18472 = cause_type;
var G__18473 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18474 = loc;
var G__18475 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18471,G__18472,G__18473,G__18474,G__18475) : format.call(null,G__18471,G__18472,G__18473,G__18474,G__18475));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18543 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18544 = symbol;
var G__18545 = loc;
var G__18546 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18547_18841 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18548_18842 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18549_18843 = true;
var _STAR_print_fn_STAR__temp_val__18550_18844 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18549_18843);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18550_18844);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18445_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18445_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18548_18842);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18547_18841);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18543,G__18544,G__18545,G__18546) : format.call(null,G__18543,G__18544,G__18545,G__18546));
} else {
var G__18551 = "Execution error%s at %s(%s).\n%s\n";
var G__18552 = cause_type;
var G__18553 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18554 = loc;
var G__18555 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18551,G__18552,G__18553,G__18554,G__18555) : format.call(null,G__18551,G__18552,G__18553,G__18554,G__18555));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18452__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
