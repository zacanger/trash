// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30639 = arguments.length;
var i__25911__auto___30640 = (0);
while(true){
if((i__25911__auto___30640 < len__25910__auto___30639)){
args__25917__auto__.push((arguments[i__25911__auto___30640]));

var G__30641 = (i__25911__auto___30640 + (1));
i__25911__auto___30640 = G__30641;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq30638){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30638));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30643 = arguments.length;
var i__25911__auto___30644 = (0);
while(true){
if((i__25911__auto___30644 < len__25910__auto___30643)){
args__25917__auto__.push((arguments[i__25911__auto___30644]));

var G__30645 = (i__25911__auto___30644 + (1));
i__25911__auto___30644 = G__30645;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq30642){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30642));
});

var g_QMARK__30646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_30647 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30646){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30646))
,null));
var mkg_30648 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30646,g_30647){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30646,g_30647))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__30646,g_30647,mkg_30648){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30646).call(null,x);
});})(g_QMARK__30646,g_30647,mkg_30648))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__30646,g_30647,mkg_30648){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_30648).call(null,gfn);
});})(g_QMARK__30646,g_30647,mkg_30648))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__30646,g_30647,mkg_30648){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_30647).call(null,generator);
});})(g_QMARK__30646,g_30647,mkg_30648))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27182__auto___30667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27182__auto___30667){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30668 = arguments.length;
var i__25911__auto___30669 = (0);
while(true){
if((i__25911__auto___30669 < len__25910__auto___30668)){
args__25917__auto__.push((arguments[i__25911__auto___30669]));

var G__30670 = (i__25911__auto___30669 + (1));
i__25911__auto___30669 = G__30670;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30667))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30667){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30667),args);
});})(g__27182__auto___30667))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27182__auto___30667){
return (function (seq30649){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30649));
});})(g__27182__auto___30667))
;


var g__27182__auto___30671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27182__auto___30671){
return (function cljs$spec$impl$gen$list(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30672 = arguments.length;
var i__25911__auto___30673 = (0);
while(true){
if((i__25911__auto___30673 < len__25910__auto___30672)){
args__25917__auto__.push((arguments[i__25911__auto___30673]));

var G__30674 = (i__25911__auto___30673 + (1));
i__25911__auto___30673 = G__30674;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30671))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30671),args);
});})(g__27182__auto___30671))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27182__auto___30671){
return (function (seq30650){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30650));
});})(g__27182__auto___30671))
;


var g__27182__auto___30675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27182__auto___30675){
return (function cljs$spec$impl$gen$map(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30676 = arguments.length;
var i__25911__auto___30677 = (0);
while(true){
if((i__25911__auto___30677 < len__25910__auto___30676)){
args__25917__auto__.push((arguments[i__25911__auto___30677]));

var G__30678 = (i__25911__auto___30677 + (1));
i__25911__auto___30677 = G__30678;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30675))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30675),args);
});})(g__27182__auto___30675))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27182__auto___30675){
return (function (seq30651){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30651));
});})(g__27182__auto___30675))
;


var g__27182__auto___30679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27182__auto___30679){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30680 = arguments.length;
var i__25911__auto___30681 = (0);
while(true){
if((i__25911__auto___30681 < len__25910__auto___30680)){
args__25917__auto__.push((arguments[i__25911__auto___30681]));

var G__30682 = (i__25911__auto___30681 + (1));
i__25911__auto___30681 = G__30682;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30679))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30679),args);
});})(g__27182__auto___30679))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27182__auto___30679){
return (function (seq30652){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30652));
});})(g__27182__auto___30679))
;


var g__27182__auto___30683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27182__auto___30683){
return (function cljs$spec$impl$gen$set(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30684 = arguments.length;
var i__25911__auto___30685 = (0);
while(true){
if((i__25911__auto___30685 < len__25910__auto___30684)){
args__25917__auto__.push((arguments[i__25911__auto___30685]));

var G__30686 = (i__25911__auto___30685 + (1));
i__25911__auto___30685 = G__30686;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30683))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30683),args);
});})(g__27182__auto___30683))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27182__auto___30683){
return (function (seq30653){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30653));
});})(g__27182__auto___30683))
;


var g__27182__auto___30687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27182__auto___30687){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30688 = arguments.length;
var i__25911__auto___30689 = (0);
while(true){
if((i__25911__auto___30689 < len__25910__auto___30688)){
args__25917__auto__.push((arguments[i__25911__auto___30689]));

var G__30690 = (i__25911__auto___30689 + (1));
i__25911__auto___30689 = G__30690;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30687))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30687),args);
});})(g__27182__auto___30687))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27182__auto___30687){
return (function (seq30654){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30654));
});})(g__27182__auto___30687))
;


var g__27182__auto___30691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27182__auto___30691){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30692 = arguments.length;
var i__25911__auto___30693 = (0);
while(true){
if((i__25911__auto___30693 < len__25910__auto___30692)){
args__25917__auto__.push((arguments[i__25911__auto___30693]));

var G__30694 = (i__25911__auto___30693 + (1));
i__25911__auto___30693 = G__30694;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30691))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30691),args);
});})(g__27182__auto___30691))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27182__auto___30691){
return (function (seq30655){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30655));
});})(g__27182__auto___30691))
;


var g__27182__auto___30695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27182__auto___30695){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30696 = arguments.length;
var i__25911__auto___30697 = (0);
while(true){
if((i__25911__auto___30697 < len__25910__auto___30696)){
args__25917__auto__.push((arguments[i__25911__auto___30697]));

var G__30698 = (i__25911__auto___30697 + (1));
i__25911__auto___30697 = G__30698;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30695))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30695){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30695),args);
});})(g__27182__auto___30695))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27182__auto___30695){
return (function (seq30656){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30656));
});})(g__27182__auto___30695))
;


var g__27182__auto___30699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27182__auto___30699){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30700 = arguments.length;
var i__25911__auto___30701 = (0);
while(true){
if((i__25911__auto___30701 < len__25910__auto___30700)){
args__25917__auto__.push((arguments[i__25911__auto___30701]));

var G__30702 = (i__25911__auto___30701 + (1));
i__25911__auto___30701 = G__30702;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30699))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30699){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30699),args);
});})(g__27182__auto___30699))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27182__auto___30699){
return (function (seq30657){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30657));
});})(g__27182__auto___30699))
;


var g__27182__auto___30703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27182__auto___30703){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30704 = arguments.length;
var i__25911__auto___30705 = (0);
while(true){
if((i__25911__auto___30705 < len__25910__auto___30704)){
args__25917__auto__.push((arguments[i__25911__auto___30705]));

var G__30706 = (i__25911__auto___30705 + (1));
i__25911__auto___30705 = G__30706;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30703))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30703){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30703),args);
});})(g__27182__auto___30703))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27182__auto___30703){
return (function (seq30658){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30658));
});})(g__27182__auto___30703))
;


var g__27182__auto___30707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27182__auto___30707){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30708 = arguments.length;
var i__25911__auto___30709 = (0);
while(true){
if((i__25911__auto___30709 < len__25910__auto___30708)){
args__25917__auto__.push((arguments[i__25911__auto___30709]));

var G__30710 = (i__25911__auto___30709 + (1));
i__25911__auto___30709 = G__30710;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30707))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30707){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30707),args);
});})(g__27182__auto___30707))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27182__auto___30707){
return (function (seq30659){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30659));
});})(g__27182__auto___30707))
;


var g__27182__auto___30711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27182__auto___30711){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30712 = arguments.length;
var i__25911__auto___30713 = (0);
while(true){
if((i__25911__auto___30713 < len__25910__auto___30712)){
args__25917__auto__.push((arguments[i__25911__auto___30713]));

var G__30714 = (i__25911__auto___30713 + (1));
i__25911__auto___30713 = G__30714;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30711))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30711){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30711),args);
});})(g__27182__auto___30711))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27182__auto___30711){
return (function (seq30660){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30660));
});})(g__27182__auto___30711))
;


var g__27182__auto___30715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27182__auto___30715){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30716 = arguments.length;
var i__25911__auto___30717 = (0);
while(true){
if((i__25911__auto___30717 < len__25910__auto___30716)){
args__25917__auto__.push((arguments[i__25911__auto___30717]));

var G__30718 = (i__25911__auto___30717 + (1));
i__25911__auto___30717 = G__30718;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30715))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30715),args);
});})(g__27182__auto___30715))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27182__auto___30715){
return (function (seq30661){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30661));
});})(g__27182__auto___30715))
;


var g__27182__auto___30719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27182__auto___30719){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30720 = arguments.length;
var i__25911__auto___30721 = (0);
while(true){
if((i__25911__auto___30721 < len__25910__auto___30720)){
args__25917__auto__.push((arguments[i__25911__auto___30721]));

var G__30722 = (i__25911__auto___30721 + (1));
i__25911__auto___30721 = G__30722;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30719))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30719){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30719),args);
});})(g__27182__auto___30719))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27182__auto___30719){
return (function (seq30662){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30662));
});})(g__27182__auto___30719))
;


var g__27182__auto___30723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27182__auto___30723){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30724 = arguments.length;
var i__25911__auto___30725 = (0);
while(true){
if((i__25911__auto___30725 < len__25910__auto___30724)){
args__25917__auto__.push((arguments[i__25911__auto___30725]));

var G__30726 = (i__25911__auto___30725 + (1));
i__25911__auto___30725 = G__30726;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30723))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30723),args);
});})(g__27182__auto___30723))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27182__auto___30723){
return (function (seq30663){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30663));
});})(g__27182__auto___30723))
;


var g__27182__auto___30727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27182__auto___30727){
return (function cljs$spec$impl$gen$return(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30728 = arguments.length;
var i__25911__auto___30729 = (0);
while(true){
if((i__25911__auto___30729 < len__25910__auto___30728)){
args__25917__auto__.push((arguments[i__25911__auto___30729]));

var G__30730 = (i__25911__auto___30729 + (1));
i__25911__auto___30729 = G__30730;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30727))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30727),args);
});})(g__27182__auto___30727))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27182__auto___30727){
return (function (seq30664){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30664));
});})(g__27182__auto___30727))
;


var g__27182__auto___30731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27182__auto___30731){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30732 = arguments.length;
var i__25911__auto___30733 = (0);
while(true){
if((i__25911__auto___30733 < len__25910__auto___30732)){
args__25917__auto__.push((arguments[i__25911__auto___30733]));

var G__30734 = (i__25911__auto___30733 + (1));
i__25911__auto___30733 = G__30734;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30731))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30731){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30731),args);
});})(g__27182__auto___30731))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27182__auto___30731){
return (function (seq30665){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30665));
});})(g__27182__auto___30731))
;


var g__27182__auto___30735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__27182__auto___30735){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30736 = arguments.length;
var i__25911__auto___30737 = (0);
while(true){
if((i__25911__auto___30737 < len__25910__auto___30736)){
args__25917__auto__.push((arguments[i__25911__auto___30737]));

var G__30738 = (i__25911__auto___30737 + (1));
i__25911__auto___30737 = G__30738;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27182__auto___30735))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27182__auto___30735){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27182__auto___30735),args);
});})(g__27182__auto___30735))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__27182__auto___30735){
return (function (seq30666){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30666));
});})(g__27182__auto___30735))
;

var g__27195__auto___30760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27195__auto___30760){
return (function cljs$spec$impl$gen$any(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30761 = arguments.length;
var i__25911__auto___30762 = (0);
while(true){
if((i__25911__auto___30762 < len__25910__auto___30761)){
args__25917__auto__.push((arguments[i__25911__auto___30762]));

var G__30763 = (i__25911__auto___30762 + (1));
i__25911__auto___30762 = G__30763;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30760))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30760){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30760);
});})(g__27195__auto___30760))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27195__auto___30760){
return (function (seq30739){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30739));
});})(g__27195__auto___30760))
;


var g__27195__auto___30764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27195__auto___30764){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30765 = arguments.length;
var i__25911__auto___30766 = (0);
while(true){
if((i__25911__auto___30766 < len__25910__auto___30765)){
args__25917__auto__.push((arguments[i__25911__auto___30766]));

var G__30767 = (i__25911__auto___30766 + (1));
i__25911__auto___30766 = G__30767;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30764))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30764){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30764);
});})(g__27195__auto___30764))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27195__auto___30764){
return (function (seq30740){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30740));
});})(g__27195__auto___30764))
;


var g__27195__auto___30768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27195__auto___30768){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30769 = arguments.length;
var i__25911__auto___30770 = (0);
while(true){
if((i__25911__auto___30770 < len__25910__auto___30769)){
args__25917__auto__.push((arguments[i__25911__auto___30770]));

var G__30771 = (i__25911__auto___30770 + (1));
i__25911__auto___30770 = G__30771;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30768))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30768){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30768);
});})(g__27195__auto___30768))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27195__auto___30768){
return (function (seq30741){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30741));
});})(g__27195__auto___30768))
;


var g__27195__auto___30772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27195__auto___30772){
return (function cljs$spec$impl$gen$char(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30773 = arguments.length;
var i__25911__auto___30774 = (0);
while(true){
if((i__25911__auto___30774 < len__25910__auto___30773)){
args__25917__auto__.push((arguments[i__25911__auto___30774]));

var G__30775 = (i__25911__auto___30774 + (1));
i__25911__auto___30774 = G__30775;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30772))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30772){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30772);
});})(g__27195__auto___30772))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27195__auto___30772){
return (function (seq30742){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30742));
});})(g__27195__auto___30772))
;


var g__27195__auto___30776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27195__auto___30776){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30777 = arguments.length;
var i__25911__auto___30778 = (0);
while(true){
if((i__25911__auto___30778 < len__25910__auto___30777)){
args__25917__auto__.push((arguments[i__25911__auto___30778]));

var G__30779 = (i__25911__auto___30778 + (1));
i__25911__auto___30778 = G__30779;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30776))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30776){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30776);
});})(g__27195__auto___30776))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27195__auto___30776){
return (function (seq30743){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30743));
});})(g__27195__auto___30776))
;


var g__27195__auto___30780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27195__auto___30780){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30781 = arguments.length;
var i__25911__auto___30782 = (0);
while(true){
if((i__25911__auto___30782 < len__25910__auto___30781)){
args__25917__auto__.push((arguments[i__25911__auto___30782]));

var G__30783 = (i__25911__auto___30782 + (1));
i__25911__auto___30782 = G__30783;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30780))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30780){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30780);
});})(g__27195__auto___30780))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27195__auto___30780){
return (function (seq30744){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30744));
});})(g__27195__auto___30780))
;


var g__27195__auto___30784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27195__auto___30784){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30785 = arguments.length;
var i__25911__auto___30786 = (0);
while(true){
if((i__25911__auto___30786 < len__25910__auto___30785)){
args__25917__auto__.push((arguments[i__25911__auto___30786]));

var G__30787 = (i__25911__auto___30786 + (1));
i__25911__auto___30786 = G__30787;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30784))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30784){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30784);
});})(g__27195__auto___30784))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27195__auto___30784){
return (function (seq30745){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30745));
});})(g__27195__auto___30784))
;


var g__27195__auto___30788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27195__auto___30788){
return (function cljs$spec$impl$gen$double(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30789 = arguments.length;
var i__25911__auto___30790 = (0);
while(true){
if((i__25911__auto___30790 < len__25910__auto___30789)){
args__25917__auto__.push((arguments[i__25911__auto___30790]));

var G__30791 = (i__25911__auto___30790 + (1));
i__25911__auto___30790 = G__30791;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30788))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30788){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30788);
});})(g__27195__auto___30788))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27195__auto___30788){
return (function (seq30746){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30746));
});})(g__27195__auto___30788))
;


var g__27195__auto___30792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27195__auto___30792){
return (function cljs$spec$impl$gen$int(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30793 = arguments.length;
var i__25911__auto___30794 = (0);
while(true){
if((i__25911__auto___30794 < len__25910__auto___30793)){
args__25917__auto__.push((arguments[i__25911__auto___30794]));

var G__30795 = (i__25911__auto___30794 + (1));
i__25911__auto___30794 = G__30795;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30792))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30792){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30792);
});})(g__27195__auto___30792))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27195__auto___30792){
return (function (seq30747){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30747));
});})(g__27195__auto___30792))
;


var g__27195__auto___30796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27195__auto___30796){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30797 = arguments.length;
var i__25911__auto___30798 = (0);
while(true){
if((i__25911__auto___30798 < len__25910__auto___30797)){
args__25917__auto__.push((arguments[i__25911__auto___30798]));

var G__30799 = (i__25911__auto___30798 + (1));
i__25911__auto___30798 = G__30799;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30796))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30796){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30796);
});})(g__27195__auto___30796))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27195__auto___30796){
return (function (seq30748){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30748));
});})(g__27195__auto___30796))
;


var g__27195__auto___30800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27195__auto___30800){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30801 = arguments.length;
var i__25911__auto___30802 = (0);
while(true){
if((i__25911__auto___30802 < len__25910__auto___30801)){
args__25917__auto__.push((arguments[i__25911__auto___30802]));

var G__30803 = (i__25911__auto___30802 + (1));
i__25911__auto___30802 = G__30803;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30800))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30800){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30800);
});})(g__27195__auto___30800))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27195__auto___30800){
return (function (seq30749){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30749));
});})(g__27195__auto___30800))
;


var g__27195__auto___30804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27195__auto___30804){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30805 = arguments.length;
var i__25911__auto___30806 = (0);
while(true){
if((i__25911__auto___30806 < len__25910__auto___30805)){
args__25917__auto__.push((arguments[i__25911__auto___30806]));

var G__30807 = (i__25911__auto___30806 + (1));
i__25911__auto___30806 = G__30807;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30804))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30804){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30804);
});})(g__27195__auto___30804))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27195__auto___30804){
return (function (seq30750){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30750));
});})(g__27195__auto___30804))
;


var g__27195__auto___30808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27195__auto___30808){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30809 = arguments.length;
var i__25911__auto___30810 = (0);
while(true){
if((i__25911__auto___30810 < len__25910__auto___30809)){
args__25917__auto__.push((arguments[i__25911__auto___30810]));

var G__30811 = (i__25911__auto___30810 + (1));
i__25911__auto___30810 = G__30811;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30808))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30808){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30808);
});})(g__27195__auto___30808))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27195__auto___30808){
return (function (seq30751){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30751));
});})(g__27195__auto___30808))
;


var g__27195__auto___30812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27195__auto___30812){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30813 = arguments.length;
var i__25911__auto___30814 = (0);
while(true){
if((i__25911__auto___30814 < len__25910__auto___30813)){
args__25917__auto__.push((arguments[i__25911__auto___30814]));

var G__30815 = (i__25911__auto___30814 + (1));
i__25911__auto___30814 = G__30815;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30812))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30812){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30812);
});})(g__27195__auto___30812))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27195__auto___30812){
return (function (seq30752){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30752));
});})(g__27195__auto___30812))
;


var g__27195__auto___30816 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27195__auto___30816){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30817 = arguments.length;
var i__25911__auto___30818 = (0);
while(true){
if((i__25911__auto___30818 < len__25910__auto___30817)){
args__25917__auto__.push((arguments[i__25911__auto___30818]));

var G__30819 = (i__25911__auto___30818 + (1));
i__25911__auto___30818 = G__30819;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30816))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30816){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30816);
});})(g__27195__auto___30816))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27195__auto___30816){
return (function (seq30753){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30753));
});})(g__27195__auto___30816))
;


var g__27195__auto___30820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27195__auto___30820){
return (function cljs$spec$impl$gen$string(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30821 = arguments.length;
var i__25911__auto___30822 = (0);
while(true){
if((i__25911__auto___30822 < len__25910__auto___30821)){
args__25917__auto__.push((arguments[i__25911__auto___30822]));

var G__30823 = (i__25911__auto___30822 + (1));
i__25911__auto___30822 = G__30823;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30820))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30820){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30820);
});})(g__27195__auto___30820))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27195__auto___30820){
return (function (seq30754){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30754));
});})(g__27195__auto___30820))
;


var g__27195__auto___30824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27195__auto___30824){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30825 = arguments.length;
var i__25911__auto___30826 = (0);
while(true){
if((i__25911__auto___30826 < len__25910__auto___30825)){
args__25917__auto__.push((arguments[i__25911__auto___30826]));

var G__30827 = (i__25911__auto___30826 + (1));
i__25911__auto___30826 = G__30827;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30824))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30824){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30824);
});})(g__27195__auto___30824))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27195__auto___30824){
return (function (seq30755){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30755));
});})(g__27195__auto___30824))
;


var g__27195__auto___30828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27195__auto___30828){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30829 = arguments.length;
var i__25911__auto___30830 = (0);
while(true){
if((i__25911__auto___30830 < len__25910__auto___30829)){
args__25917__auto__.push((arguments[i__25911__auto___30830]));

var G__30831 = (i__25911__auto___30830 + (1));
i__25911__auto___30830 = G__30831;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30828))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30828){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30828);
});})(g__27195__auto___30828))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27195__auto___30828){
return (function (seq30756){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30756));
});})(g__27195__auto___30828))
;


var g__27195__auto___30832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27195__auto___30832){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30833 = arguments.length;
var i__25911__auto___30834 = (0);
while(true){
if((i__25911__auto___30834 < len__25910__auto___30833)){
args__25917__auto__.push((arguments[i__25911__auto___30834]));

var G__30835 = (i__25911__auto___30834 + (1));
i__25911__auto___30834 = G__30835;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30832))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30832){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30832);
});})(g__27195__auto___30832))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27195__auto___30832){
return (function (seq30757){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30757));
});})(g__27195__auto___30832))
;


var g__27195__auto___30836 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27195__auto___30836){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30837 = arguments.length;
var i__25911__auto___30838 = (0);
while(true){
if((i__25911__auto___30838 < len__25910__auto___30837)){
args__25917__auto__.push((arguments[i__25911__auto___30838]));

var G__30839 = (i__25911__auto___30838 + (1));
i__25911__auto___30838 = G__30839;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30836))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30836){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30836);
});})(g__27195__auto___30836))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27195__auto___30836){
return (function (seq30758){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30758));
});})(g__27195__auto___30836))
;


var g__27195__auto___30840 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27195__auto___30840){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30841 = arguments.length;
var i__25911__auto___30842 = (0);
while(true){
if((i__25911__auto___30842 < len__25910__auto___30841)){
args__25917__auto__.push((arguments[i__25911__auto___30842]));

var G__30843 = (i__25911__auto___30842 + (1));
i__25911__auto___30842 = G__30843;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});})(g__27195__auto___30840))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27195__auto___30840){
return (function (args){
return cljs.core.deref.call(null,g__27195__auto___30840);
});})(g__27195__auto___30840))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27195__auto___30840){
return (function (seq30759){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30759));
});})(g__27195__auto___30840))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25917__auto__ = [];
var len__25910__auto___30846 = arguments.length;
var i__25911__auto___30847 = (0);
while(true){
if((i__25911__auto___30847 < len__25910__auto___30846)){
args__25917__auto__.push((arguments[i__25911__auto___30847]));

var G__30848 = (i__25911__auto___30847 + (1));
i__25911__auto___30847 = G__30848;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__30844_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30844_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq30845){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30845));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__30849_SHARP_){
return (new Date(p1__30849_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1492365296266