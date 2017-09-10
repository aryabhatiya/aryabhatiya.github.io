// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
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

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53378 = arguments.length;
var i__45084__auto___53379 = (0);
while(true){
if((i__45084__auto___53379 < len__45083__auto___53378)){
args__45090__auto__.push((arguments[i__45084__auto___53379]));

var G__53380 = (i__45084__auto___53379 + (1));
i__45084__auto___53379 = G__53380;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq53377){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53377));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53382 = arguments.length;
var i__45084__auto___53383 = (0);
while(true){
if((i__45084__auto___53383 < len__45083__auto___53382)){
args__45090__auto__.push((arguments[i__45084__auto___53383]));

var G__53384 = (i__45084__auto___53383 + (1));
i__45084__auto___53383 = G__53384;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq53381){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53381));
});

var g_QMARK__53385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_53386 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__53385){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__53385))
,null));
var mkg_53387 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__53385,g_53386){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__53385,g_53386))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__53385,g_53386,mkg_53387){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__53385).call(null,x);
});})(g_QMARK__53385,g_53386,mkg_53387))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__53385,g_53386,mkg_53387){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_53387).call(null,gfn);
});})(g_QMARK__53385,g_53386,mkg_53387))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__53385,g_53386,mkg_53387){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_53386).call(null,generator);
});})(g_QMARK__53385,g_53386,mkg_53387))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__53349__auto___53407 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__53349__auto___53407){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53408 = arguments.length;
var i__45084__auto___53409 = (0);
while(true){
if((i__45084__auto___53409 < len__45083__auto___53408)){
args__45090__auto__.push((arguments[i__45084__auto___53409]));

var G__53410 = (i__45084__auto___53409 + (1));
i__45084__auto___53409 = G__53410;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53407))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53407){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53407),args);
});})(g__53349__auto___53407))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__53349__auto___53407){
return (function (seq53388){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53388));
});})(g__53349__auto___53407))
;


var g__53349__auto___53411 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__53349__auto___53411){
return (function cljs$spec$gen$alpha$list(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53412 = arguments.length;
var i__45084__auto___53413 = (0);
while(true){
if((i__45084__auto___53413 < len__45083__auto___53412)){
args__45090__auto__.push((arguments[i__45084__auto___53413]));

var G__53414 = (i__45084__auto___53413 + (1));
i__45084__auto___53413 = G__53414;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53411))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53411){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53411),args);
});})(g__53349__auto___53411))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__53349__auto___53411){
return (function (seq53389){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53389));
});})(g__53349__auto___53411))
;


var g__53349__auto___53415 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__53349__auto___53415){
return (function cljs$spec$gen$alpha$map(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53416 = arguments.length;
var i__45084__auto___53417 = (0);
while(true){
if((i__45084__auto___53417 < len__45083__auto___53416)){
args__45090__auto__.push((arguments[i__45084__auto___53417]));

var G__53418 = (i__45084__auto___53417 + (1));
i__45084__auto___53417 = G__53418;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53415))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53415){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53415),args);
});})(g__53349__auto___53415))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__53349__auto___53415){
return (function (seq53390){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53390));
});})(g__53349__auto___53415))
;


var g__53349__auto___53419 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__53349__auto___53419){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53420 = arguments.length;
var i__45084__auto___53421 = (0);
while(true){
if((i__45084__auto___53421 < len__45083__auto___53420)){
args__45090__auto__.push((arguments[i__45084__auto___53421]));

var G__53422 = (i__45084__auto___53421 + (1));
i__45084__auto___53421 = G__53422;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53419))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53419){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53419),args);
});})(g__53349__auto___53419))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__53349__auto___53419){
return (function (seq53391){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53391));
});})(g__53349__auto___53419))
;


var g__53349__auto___53423 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__53349__auto___53423){
return (function cljs$spec$gen$alpha$set(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53424 = arguments.length;
var i__45084__auto___53425 = (0);
while(true){
if((i__45084__auto___53425 < len__45083__auto___53424)){
args__45090__auto__.push((arguments[i__45084__auto___53425]));

var G__53426 = (i__45084__auto___53425 + (1));
i__45084__auto___53425 = G__53426;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53423))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53423){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53423),args);
});})(g__53349__auto___53423))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__53349__auto___53423){
return (function (seq53392){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53392));
});})(g__53349__auto___53423))
;


var g__53349__auto___53427 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__53349__auto___53427){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53428 = arguments.length;
var i__45084__auto___53429 = (0);
while(true){
if((i__45084__auto___53429 < len__45083__auto___53428)){
args__45090__auto__.push((arguments[i__45084__auto___53429]));

var G__53430 = (i__45084__auto___53429 + (1));
i__45084__auto___53429 = G__53430;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53427))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53427){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53427),args);
});})(g__53349__auto___53427))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__53349__auto___53427){
return (function (seq53393){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53393));
});})(g__53349__auto___53427))
;


var g__53349__auto___53431 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__53349__auto___53431){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53432 = arguments.length;
var i__45084__auto___53433 = (0);
while(true){
if((i__45084__auto___53433 < len__45083__auto___53432)){
args__45090__auto__.push((arguments[i__45084__auto___53433]));

var G__53434 = (i__45084__auto___53433 + (1));
i__45084__auto___53433 = G__53434;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53431))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53431){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53431),args);
});})(g__53349__auto___53431))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__53349__auto___53431){
return (function (seq53394){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53394));
});})(g__53349__auto___53431))
;


var g__53349__auto___53435 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__53349__auto___53435){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53436 = arguments.length;
var i__45084__auto___53437 = (0);
while(true){
if((i__45084__auto___53437 < len__45083__auto___53436)){
args__45090__auto__.push((arguments[i__45084__auto___53437]));

var G__53438 = (i__45084__auto___53437 + (1));
i__45084__auto___53437 = G__53438;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53435))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53435){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53435),args);
});})(g__53349__auto___53435))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__53349__auto___53435){
return (function (seq53395){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53395));
});})(g__53349__auto___53435))
;


var g__53349__auto___53439 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__53349__auto___53439){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53440 = arguments.length;
var i__45084__auto___53441 = (0);
while(true){
if((i__45084__auto___53441 < len__45083__auto___53440)){
args__45090__auto__.push((arguments[i__45084__auto___53441]));

var G__53442 = (i__45084__auto___53441 + (1));
i__45084__auto___53441 = G__53442;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53439))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53439){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53439),args);
});})(g__53349__auto___53439))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__53349__auto___53439){
return (function (seq53396){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53396));
});})(g__53349__auto___53439))
;


var g__53349__auto___53443 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__53349__auto___53443){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53444 = arguments.length;
var i__45084__auto___53445 = (0);
while(true){
if((i__45084__auto___53445 < len__45083__auto___53444)){
args__45090__auto__.push((arguments[i__45084__auto___53445]));

var G__53446 = (i__45084__auto___53445 + (1));
i__45084__auto___53445 = G__53446;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53443))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53443){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53443),args);
});})(g__53349__auto___53443))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__53349__auto___53443){
return (function (seq53397){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53397));
});})(g__53349__auto___53443))
;


var g__53349__auto___53447 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__53349__auto___53447){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53448 = arguments.length;
var i__45084__auto___53449 = (0);
while(true){
if((i__45084__auto___53449 < len__45083__auto___53448)){
args__45090__auto__.push((arguments[i__45084__auto___53449]));

var G__53450 = (i__45084__auto___53449 + (1));
i__45084__auto___53449 = G__53450;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53447))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53447){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53447),args);
});})(g__53349__auto___53447))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__53349__auto___53447){
return (function (seq53398){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53398));
});})(g__53349__auto___53447))
;


var g__53349__auto___53451 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__53349__auto___53451){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53452 = arguments.length;
var i__45084__auto___53453 = (0);
while(true){
if((i__45084__auto___53453 < len__45083__auto___53452)){
args__45090__auto__.push((arguments[i__45084__auto___53453]));

var G__53454 = (i__45084__auto___53453 + (1));
i__45084__auto___53453 = G__53454;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53451))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53451){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53451),args);
});})(g__53349__auto___53451))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__53349__auto___53451){
return (function (seq53399){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53399));
});})(g__53349__auto___53451))
;


var g__53349__auto___53455 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__53349__auto___53455){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53456 = arguments.length;
var i__45084__auto___53457 = (0);
while(true){
if((i__45084__auto___53457 < len__45083__auto___53456)){
args__45090__auto__.push((arguments[i__45084__auto___53457]));

var G__53458 = (i__45084__auto___53457 + (1));
i__45084__auto___53457 = G__53458;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53455))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53455){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53455),args);
});})(g__53349__auto___53455))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__53349__auto___53455){
return (function (seq53400){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53400));
});})(g__53349__auto___53455))
;


var g__53349__auto___53459 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__53349__auto___53459){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53460 = arguments.length;
var i__45084__auto___53461 = (0);
while(true){
if((i__45084__auto___53461 < len__45083__auto___53460)){
args__45090__auto__.push((arguments[i__45084__auto___53461]));

var G__53462 = (i__45084__auto___53461 + (1));
i__45084__auto___53461 = G__53462;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53459))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53459){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53459),args);
});})(g__53349__auto___53459))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__53349__auto___53459){
return (function (seq53401){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53401));
});})(g__53349__auto___53459))
;


var g__53349__auto___53463 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__53349__auto___53463){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53464 = arguments.length;
var i__45084__auto___53465 = (0);
while(true){
if((i__45084__auto___53465 < len__45083__auto___53464)){
args__45090__auto__.push((arguments[i__45084__auto___53465]));

var G__53466 = (i__45084__auto___53465 + (1));
i__45084__auto___53465 = G__53466;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53463))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53463),args);
});})(g__53349__auto___53463))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__53349__auto___53463){
return (function (seq53402){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53402));
});})(g__53349__auto___53463))
;


var g__53349__auto___53467 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__53349__auto___53467){
return (function cljs$spec$gen$alpha$return(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53468 = arguments.length;
var i__45084__auto___53469 = (0);
while(true){
if((i__45084__auto___53469 < len__45083__auto___53468)){
args__45090__auto__.push((arguments[i__45084__auto___53469]));

var G__53470 = (i__45084__auto___53469 + (1));
i__45084__auto___53469 = G__53470;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53467))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53467),args);
});})(g__53349__auto___53467))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__53349__auto___53467){
return (function (seq53403){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53403));
});})(g__53349__auto___53467))
;


var g__53349__auto___53471 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__53349__auto___53471){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53472 = arguments.length;
var i__45084__auto___53473 = (0);
while(true){
if((i__45084__auto___53473 < len__45083__auto___53472)){
args__45090__auto__.push((arguments[i__45084__auto___53473]));

var G__53474 = (i__45084__auto___53473 + (1));
i__45084__auto___53473 = G__53474;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53471))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53471),args);
});})(g__53349__auto___53471))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__53349__auto___53471){
return (function (seq53404){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53404));
});})(g__53349__auto___53471))
;


var g__53349__auto___53475 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__53349__auto___53475){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53476 = arguments.length;
var i__45084__auto___53477 = (0);
while(true){
if((i__45084__auto___53477 < len__45083__auto___53476)){
args__45090__auto__.push((arguments[i__45084__auto___53477]));

var G__53478 = (i__45084__auto___53477 + (1));
i__45084__auto___53477 = G__53478;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53475))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53475),args);
});})(g__53349__auto___53475))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__53349__auto___53475){
return (function (seq53405){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53405));
});})(g__53349__auto___53475))
;


var g__53349__auto___53479 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__53349__auto___53479){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53480 = arguments.length;
var i__45084__auto___53481 = (0);
while(true){
if((i__45084__auto___53481 < len__45083__auto___53480)){
args__45090__auto__.push((arguments[i__45084__auto___53481]));

var G__53482 = (i__45084__auto___53481 + (1));
i__45084__auto___53481 = G__53482;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53349__auto___53479))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53349__auto___53479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53349__auto___53479),args);
});})(g__53349__auto___53479))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__53349__auto___53479){
return (function (seq53406){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53406));
});})(g__53349__auto___53479))
;

var g__53362__auto___53504 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__53362__auto___53504){
return (function cljs$spec$gen$alpha$any(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53505 = arguments.length;
var i__45084__auto___53506 = (0);
while(true){
if((i__45084__auto___53506 < len__45083__auto___53505)){
args__45090__auto__.push((arguments[i__45084__auto___53506]));

var G__53507 = (i__45084__auto___53506 + (1));
i__45084__auto___53506 = G__53507;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53504))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53504){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53504);
});})(g__53362__auto___53504))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__53362__auto___53504){
return (function (seq53483){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53483));
});})(g__53362__auto___53504))
;


var g__53362__auto___53508 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__53362__auto___53508){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53509 = arguments.length;
var i__45084__auto___53510 = (0);
while(true){
if((i__45084__auto___53510 < len__45083__auto___53509)){
args__45090__auto__.push((arguments[i__45084__auto___53510]));

var G__53511 = (i__45084__auto___53510 + (1));
i__45084__auto___53510 = G__53511;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53508))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53508){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53508);
});})(g__53362__auto___53508))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__53362__auto___53508){
return (function (seq53484){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53484));
});})(g__53362__auto___53508))
;


var g__53362__auto___53512 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__53362__auto___53512){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53513 = arguments.length;
var i__45084__auto___53514 = (0);
while(true){
if((i__45084__auto___53514 < len__45083__auto___53513)){
args__45090__auto__.push((arguments[i__45084__auto___53514]));

var G__53515 = (i__45084__auto___53514 + (1));
i__45084__auto___53514 = G__53515;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53512))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53512){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53512);
});})(g__53362__auto___53512))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__53362__auto___53512){
return (function (seq53485){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53485));
});})(g__53362__auto___53512))
;


var g__53362__auto___53516 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__53362__auto___53516){
return (function cljs$spec$gen$alpha$char(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53517 = arguments.length;
var i__45084__auto___53518 = (0);
while(true){
if((i__45084__auto___53518 < len__45083__auto___53517)){
args__45090__auto__.push((arguments[i__45084__auto___53518]));

var G__53519 = (i__45084__auto___53518 + (1));
i__45084__auto___53518 = G__53519;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53516))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53516){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53516);
});})(g__53362__auto___53516))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__53362__auto___53516){
return (function (seq53486){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53486));
});})(g__53362__auto___53516))
;


var g__53362__auto___53520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__53362__auto___53520){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53521 = arguments.length;
var i__45084__auto___53522 = (0);
while(true){
if((i__45084__auto___53522 < len__45083__auto___53521)){
args__45090__auto__.push((arguments[i__45084__auto___53522]));

var G__53523 = (i__45084__auto___53522 + (1));
i__45084__auto___53522 = G__53523;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53520))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53520){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53520);
});})(g__53362__auto___53520))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__53362__auto___53520){
return (function (seq53487){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53487));
});})(g__53362__auto___53520))
;


var g__53362__auto___53524 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__53362__auto___53524){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53525 = arguments.length;
var i__45084__auto___53526 = (0);
while(true){
if((i__45084__auto___53526 < len__45083__auto___53525)){
args__45090__auto__.push((arguments[i__45084__auto___53526]));

var G__53527 = (i__45084__auto___53526 + (1));
i__45084__auto___53526 = G__53527;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53524))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53524){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53524);
});})(g__53362__auto___53524))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__53362__auto___53524){
return (function (seq53488){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53488));
});})(g__53362__auto___53524))
;


var g__53362__auto___53528 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__53362__auto___53528){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53529 = arguments.length;
var i__45084__auto___53530 = (0);
while(true){
if((i__45084__auto___53530 < len__45083__auto___53529)){
args__45090__auto__.push((arguments[i__45084__auto___53530]));

var G__53531 = (i__45084__auto___53530 + (1));
i__45084__auto___53530 = G__53531;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53528))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53528){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53528);
});})(g__53362__auto___53528))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__53362__auto___53528){
return (function (seq53489){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53489));
});})(g__53362__auto___53528))
;


var g__53362__auto___53532 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__53362__auto___53532){
return (function cljs$spec$gen$alpha$double(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53533 = arguments.length;
var i__45084__auto___53534 = (0);
while(true){
if((i__45084__auto___53534 < len__45083__auto___53533)){
args__45090__auto__.push((arguments[i__45084__auto___53534]));

var G__53535 = (i__45084__auto___53534 + (1));
i__45084__auto___53534 = G__53535;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53532))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53532){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53532);
});})(g__53362__auto___53532))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__53362__auto___53532){
return (function (seq53490){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53490));
});})(g__53362__auto___53532))
;


var g__53362__auto___53536 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__53362__auto___53536){
return (function cljs$spec$gen$alpha$int(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53537 = arguments.length;
var i__45084__auto___53538 = (0);
while(true){
if((i__45084__auto___53538 < len__45083__auto___53537)){
args__45090__auto__.push((arguments[i__45084__auto___53538]));

var G__53539 = (i__45084__auto___53538 + (1));
i__45084__auto___53538 = G__53539;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53536))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53536){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53536);
});})(g__53362__auto___53536))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__53362__auto___53536){
return (function (seq53491){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53491));
});})(g__53362__auto___53536))
;


var g__53362__auto___53540 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__53362__auto___53540){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53541 = arguments.length;
var i__45084__auto___53542 = (0);
while(true){
if((i__45084__auto___53542 < len__45083__auto___53541)){
args__45090__auto__.push((arguments[i__45084__auto___53542]));

var G__53543 = (i__45084__auto___53542 + (1));
i__45084__auto___53542 = G__53543;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53540))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53540){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53540);
});})(g__53362__auto___53540))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__53362__auto___53540){
return (function (seq53492){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53492));
});})(g__53362__auto___53540))
;


var g__53362__auto___53544 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__53362__auto___53544){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53545 = arguments.length;
var i__45084__auto___53546 = (0);
while(true){
if((i__45084__auto___53546 < len__45083__auto___53545)){
args__45090__auto__.push((arguments[i__45084__auto___53546]));

var G__53547 = (i__45084__auto___53546 + (1));
i__45084__auto___53546 = G__53547;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53544))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53544){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53544);
});})(g__53362__auto___53544))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__53362__auto___53544){
return (function (seq53493){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53493));
});})(g__53362__auto___53544))
;


var g__53362__auto___53548 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__53362__auto___53548){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53549 = arguments.length;
var i__45084__auto___53550 = (0);
while(true){
if((i__45084__auto___53550 < len__45083__auto___53549)){
args__45090__auto__.push((arguments[i__45084__auto___53550]));

var G__53551 = (i__45084__auto___53550 + (1));
i__45084__auto___53550 = G__53551;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53548))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53548){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53548);
});})(g__53362__auto___53548))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__53362__auto___53548){
return (function (seq53494){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53494));
});})(g__53362__auto___53548))
;


var g__53362__auto___53552 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__53362__auto___53552){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53553 = arguments.length;
var i__45084__auto___53554 = (0);
while(true){
if((i__45084__auto___53554 < len__45083__auto___53553)){
args__45090__auto__.push((arguments[i__45084__auto___53554]));

var G__53555 = (i__45084__auto___53554 + (1));
i__45084__auto___53554 = G__53555;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53552))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53552){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53552);
});})(g__53362__auto___53552))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__53362__auto___53552){
return (function (seq53495){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53495));
});})(g__53362__auto___53552))
;


var g__53362__auto___53556 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__53362__auto___53556){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53557 = arguments.length;
var i__45084__auto___53558 = (0);
while(true){
if((i__45084__auto___53558 < len__45083__auto___53557)){
args__45090__auto__.push((arguments[i__45084__auto___53558]));

var G__53559 = (i__45084__auto___53558 + (1));
i__45084__auto___53558 = G__53559;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53556))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53556){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53556);
});})(g__53362__auto___53556))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__53362__auto___53556){
return (function (seq53496){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53496));
});})(g__53362__auto___53556))
;


var g__53362__auto___53560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__53362__auto___53560){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53561 = arguments.length;
var i__45084__auto___53562 = (0);
while(true){
if((i__45084__auto___53562 < len__45083__auto___53561)){
args__45090__auto__.push((arguments[i__45084__auto___53562]));

var G__53563 = (i__45084__auto___53562 + (1));
i__45084__auto___53562 = G__53563;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53560))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53560){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53560);
});})(g__53362__auto___53560))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__53362__auto___53560){
return (function (seq53497){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53497));
});})(g__53362__auto___53560))
;


var g__53362__auto___53564 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__53362__auto___53564){
return (function cljs$spec$gen$alpha$string(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53565 = arguments.length;
var i__45084__auto___53566 = (0);
while(true){
if((i__45084__auto___53566 < len__45083__auto___53565)){
args__45090__auto__.push((arguments[i__45084__auto___53566]));

var G__53567 = (i__45084__auto___53566 + (1));
i__45084__auto___53566 = G__53567;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53564))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53564){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53564);
});})(g__53362__auto___53564))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__53362__auto___53564){
return (function (seq53498){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53498));
});})(g__53362__auto___53564))
;


var g__53362__auto___53568 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__53362__auto___53568){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53569 = arguments.length;
var i__45084__auto___53570 = (0);
while(true){
if((i__45084__auto___53570 < len__45083__auto___53569)){
args__45090__auto__.push((arguments[i__45084__auto___53570]));

var G__53571 = (i__45084__auto___53570 + (1));
i__45084__auto___53570 = G__53571;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53568))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53568){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53568);
});})(g__53362__auto___53568))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__53362__auto___53568){
return (function (seq53499){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53499));
});})(g__53362__auto___53568))
;


var g__53362__auto___53572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__53362__auto___53572){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53573 = arguments.length;
var i__45084__auto___53574 = (0);
while(true){
if((i__45084__auto___53574 < len__45083__auto___53573)){
args__45090__auto__.push((arguments[i__45084__auto___53574]));

var G__53575 = (i__45084__auto___53574 + (1));
i__45084__auto___53574 = G__53575;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53572))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53572){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53572);
});})(g__53362__auto___53572))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__53362__auto___53572){
return (function (seq53500){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53500));
});})(g__53362__auto___53572))
;


var g__53362__auto___53576 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__53362__auto___53576){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53577 = arguments.length;
var i__45084__auto___53578 = (0);
while(true){
if((i__45084__auto___53578 < len__45083__auto___53577)){
args__45090__auto__.push((arguments[i__45084__auto___53578]));

var G__53579 = (i__45084__auto___53578 + (1));
i__45084__auto___53578 = G__53579;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53576))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53576){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53576);
});})(g__53362__auto___53576))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__53362__auto___53576){
return (function (seq53501){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53501));
});})(g__53362__auto___53576))
;


var g__53362__auto___53580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__53362__auto___53580){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53581 = arguments.length;
var i__45084__auto___53582 = (0);
while(true){
if((i__45084__auto___53582 < len__45083__auto___53581)){
args__45090__auto__.push((arguments[i__45084__auto___53582]));

var G__53583 = (i__45084__auto___53582 + (1));
i__45084__auto___53582 = G__53583;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53580))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53580){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53580);
});})(g__53362__auto___53580))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__53362__auto___53580){
return (function (seq53502){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53502));
});})(g__53362__auto___53580))
;


var g__53362__auto___53584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__53362__auto___53584){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53585 = arguments.length;
var i__45084__auto___53586 = (0);
while(true){
if((i__45084__auto___53586 < len__45083__auto___53585)){
args__45090__auto__.push((arguments[i__45084__auto___53586]));

var G__53587 = (i__45084__auto___53586 + (1));
i__45084__auto___53586 = G__53587;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});})(g__53362__auto___53584))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53362__auto___53584){
return (function (args){
return cljs.core.deref.call(null,g__53362__auto___53584);
});})(g__53362__auto___53584))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__53362__auto___53584){
return (function (seq53503){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53503));
});})(g__53362__auto___53584))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__45090__auto__ = [];
var len__45083__auto___53590 = arguments.length;
var i__45084__auto___53591 = (0);
while(true){
if((i__45084__auto___53591 < len__45083__auto___53590)){
args__45090__auto__.push((arguments[i__45084__auto___53591]));

var G__53592 = (i__45084__auto___53591 + (1));
i__45084__auto___53591 = G__53592;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__53588_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__53588_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq53589){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53589));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__53593_SHARP_){
return (new Date(p1__53593_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1505037974463
