// Compiled by ClojureScript 1.9.908 {}
goog.provide('fractals.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('rum.core');
goog.require('fractals.svg');
goog.require('fractals.about');
goog.require('fractals.board');
goog.require('secretary.core');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.EventType');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof fractals.core.app_state !== 'undefined'){
} else {
fractals.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Chestnut!",new cljs.core.Keyword(null,"zero-col","zero-col",1187553452),"#4E9A5D",new cljs.core.Keyword(null,"one-col","one-col",-79595445),"#88F9D4",new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"cols","cols",-1914801295),(4),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false,false], null)], null)], null));
}
fractals.core.hook_browser_navigation_BANG_ = (function fractals$core$hook_browser_navigation_BANG_(){
var G__47765 = (new goog.History());
goog.events.listen(G__47765,goog.history.EventType.NAVIGATE,((function (G__47765){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__47765))
);

G__47765.setEnabled(true);

return G__47765;
});
fractals.core.greeting = rum.core.build_defc.call(null,(function (state){
return sablono.interpreter.interpret.call(null,fractals.board.layout.call(null,state));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"greeting");
fractals.core.current_page = rum.core.build_defc.call(null,(function (state){
return sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state)),new cljs.core.Keyword(null,"home","home",-74557309)))?fractals.core.greeting.call(null,state):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state)),new cljs.core.Keyword(null,"svg","svg",856789142)))?fractals.svg.svg_test.call(null,state):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state)),new cljs.core.Keyword(null,"about","about",1423892543)))?fractals.about.about.call(null,state):null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"current-page");
fractals.core.dev_setup = (function fractals$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
fractals.core.app_routes = (function fractals$core$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__47548__auto___47781 = (function (params__47549__auto__){
if(cljs.core.map_QMARK_.call(null,params__47549__auto__)){
var map__47766 = params__47549__auto__;
var map__47766__$1 = ((((!((map__47766 == null)))?((((map__47766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47766):map__47766);
return cljs.core.swap_BANG_.call(null,fractals.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47549__auto__)){
var vec__47768 = params__47549__auto__;
return cljs.core.swap_BANG_.call(null,fractals.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__47548__auto___47781);


var action__47548__auto___47782 = (function (params__47549__auto__){
if(cljs.core.map_QMARK_.call(null,params__47549__auto__)){
var map__47771 = params__47549__auto__;
var map__47771__$1 = ((((!((map__47771 == null)))?((((map__47771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47771):map__47771);
return cljs.core.swap_BANG_.call(null,fractals.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47549__auto__)){
var vec__47773 = params__47549__auto__;
return cljs.core.swap_BANG_.call(null,fractals.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__47548__auto___47782);


var action__47548__auto___47783 = (function (params__47549__auto__){
if(cljs.core.map_QMARK_.call(null,params__47549__auto__)){
var map__47776 = params__47549__auto__;
var map__47776__$1 = ((((!((map__47776 == null)))?((((map__47776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47776):map__47776);
return cljs.core.swap_BANG_.call(null,fractals.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"svg","svg",856789142));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47549__auto__)){
var vec__47778 = params__47549__auto__;
return cljs.core.swap_BANG_.call(null,fractals.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"svg","svg",856789142));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/svg",action__47548__auto___47783);


return fractals.core.hook_browser_navigation_BANG_.call(null);
});
fractals.core.reset = (function fractals$core$reset(){
return rum.core.mount.call(null,fractals.core.current_page.call(null,fractals.core.app_state),document.getElementById("app"));
});
fractals.core.main = (function fractals$core$main(){
fractals.core.dev_setup.call(null);

fractals.core.app_routes.call(null);

return fractals.core.reset.call(null);
});
goog.exportSymbol('fractals.core.main', fractals.core.main);

//# sourceMappingURL=core.js.map?rel=1505037970501
