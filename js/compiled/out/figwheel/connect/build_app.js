// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('fractals.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('cljs.user');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__55209__delegate = function (x){
if(cljs.core.truth_(fractals.core.reset)){
return cljs.core.apply.call(null,fractals.core.reset,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'fractals.core/reset' is missing");
}
};
var G__55209 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__55210__i = 0, G__55210__a = new Array(arguments.length -  0);
while (G__55210__i < G__55210__a.length) {G__55210__a[G__55210__i] = arguments[G__55210__i + 0]; ++G__55210__i;}
  x = new cljs.core.IndexedSeq(G__55210__a,0,null);
} 
return G__55209__delegate.call(this,x);};
G__55209.cljs$lang$maxFixedArity = 0;
G__55209.cljs$lang$applyTo = (function (arglist__55211){
var x = cljs.core.seq(arglist__55211);
return G__55209__delegate(x);
});
G__55209.cljs$core$IFn$_invoke$arity$variadic = G__55209__delegate;
return G__55209;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3448/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1505037975792
