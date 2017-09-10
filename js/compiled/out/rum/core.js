// Compiled by ClojureScript 1.9.908 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__47373_SHARP_,p2__47372_SHARP_){
return p2__47372_SHARP_.call(null,p1__47373_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__47375_SHARP_,p2__47374_SHARP_){
return p2__47374_SHARP_.call(null,old_state,p1__47375_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__43806__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__47376_SHARP_){
return p1__47376_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__47378 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__47378,(0),null);
var next_state = cljs.core.nth.call(null,vec__47378,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__47377_SHARP_){
return p1__47377_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__47381__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__47381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47382__i = 0, G__47382__a = new Array(arguments.length -  0);
while (G__47382__i < G__47382__a.length) {G__47382__a[G__47382__i] = arguments[G__47382__i + 0]; ++G__47382__i;}
  args = new cljs.core.IndexedSeq(G__47382__a,0,null);
} 
return G__47381__delegate.call(this,args);};
G__47381.cljs$lang$maxFixedArity = 0;
G__47381.cljs$lang$applyTo = (function (arglist__47383){
var args = cljs.core.seq(arglist__47383);
return G__47381__delegate(args);
});
G__47381.cljs$core$IFn$_invoke$arity$variadic = G__47381__delegate;
return G__47381;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__47384__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__47384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47385__i = 0, G__47385__a = new Array(arguments.length -  0);
while (G__47385__i < G__47385__a.length) {G__47385__a[G__47385__i] = arguments[G__47385__i + 0]; ++G__47385__i;}
  args = new cljs.core.IndexedSeq(G__47385__a,0,null);
} 
return G__47384__delegate.call(this,args);};
G__47384.cljs$lang$maxFixedArity = 0;
G__47384.cljs$lang$applyTo = (function (arglist__47386){
var args = cljs.core.seq(arglist__47386);
return G__47384__delegate(args);
});
G__47384.cljs$core$IFn$_invoke$arity$variadic = G__47384__delegate;
return G__47384;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__47387__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__47387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47388__i = 0, G__47388__a = new Array(arguments.length -  0);
while (G__47388__i < G__47388__a.length) {G__47388__a[G__47388__i] = arguments[G__47388__i + 0]; ++G__47388__i;}
  args = new cljs.core.IndexedSeq(G__47388__a,0,null);
} 
return G__47387__delegate.call(this,args);};
G__47387.cljs$lang$maxFixedArity = 0;
G__47387.cljs$lang$applyTo = (function (arglist__47389){
var args = cljs.core.seq(arglist__47389);
return G__47387__delegate(args);
});
G__47387.cljs$core$IFn$_invoke$arity$variadic = G__47387__delegate;
return G__47387;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__43806__auto__ = (function (){var and__43794__auto__ = typeof window !== 'undefined';
if(and__43794__auto__){
var or__43806__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
var or__43806__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__43806__auto____$1)){
return or__43806__auto____$1;
} else {
var or__43806__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__43806__auto____$2)){
return or__43806__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__43794__auto__;
}
})();
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return ((function (or__43806__auto__){
return (function (p1__47390_SHARP_){
return setTimeout(p1__47390_SHARP_,(16));
});
;})(or__43806__auto__))
}
})();
rum.core.batch = (function (){var or__43806__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
var or__43806__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__43806__auto____$1)){
return or__43806__auto____$1;
} else {
return ((function (or__43806__auto____$1,or__43806__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__43806__auto____$1,or__43806__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__47391 = cljs.core.seq.call(null,queue);
var chunk__47393 = null;
var count__47394 = (0);
var i__47395 = (0);
while(true){
if((i__47395 < count__47394)){
var comp = cljs.core._nth.call(null,chunk__47393,i__47395);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__47397 = seq__47391;
var G__47398 = chunk__47393;
var G__47399 = count__47394;
var G__47400 = (i__47395 + (1));
seq__47391 = G__47397;
chunk__47393 = G__47398;
count__47394 = G__47399;
i__47395 = G__47400;
continue;
} else {
var G__47401 = seq__47391;
var G__47402 = chunk__47393;
var G__47403 = count__47394;
var G__47404 = (i__47395 + (1));
seq__47391 = G__47401;
chunk__47393 = G__47402;
count__47394 = G__47403;
i__47395 = G__47404;
continue;
}
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__47391);
if(temp__5278__auto__){
var seq__47391__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47391__$1)){
var c__44737__auto__ = cljs.core.chunk_first.call(null,seq__47391__$1);
var G__47405 = cljs.core.chunk_rest.call(null,seq__47391__$1);
var G__47406 = c__44737__auto__;
var G__47407 = cljs.core.count.call(null,c__44737__auto__);
var G__47408 = (0);
seq__47391 = G__47405;
chunk__47393 = G__47406;
count__47394 = G__47407;
i__47395 = G__47408;
continue;
} else {
var comp = cljs.core.first.call(null,seq__47391__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__47409 = cljs.core.next.call(null,seq__47391__$1);
var G__47410 = null;
var G__47411 = (0);
var G__47412 = (0);
seq__47391 = G__47409;
chunk__47393 = G__47410;
count__47394 = G__47411;
i__47395 = G__47412;
continue;
} else {
var G__47413 = cljs.core.next.call(null,seq__47391__$1);
var G__47414 = null;
var G__47415 = (0);
var G__47416 = (0);
seq__47391 = G__47413;
chunk__47393 = G__47414;
count__47394 = G__47415;
i__47395 = G__47416;
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
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__47418 = arguments.length;
switch (G__47418) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_47420 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__47421 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__47421,(0),null);
var next_state = cljs.core.nth.call(null,vec__47421,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__47424_47436 = cljs.core.seq.call(null,old_reactions);
var chunk__47425_47437 = null;
var count__47426_47438 = (0);
var i__47427_47439 = (0);
while(true){
if((i__47427_47439 < count__47426_47438)){
var ref_47440 = cljs.core._nth.call(null,chunk__47425_47437,i__47427_47439);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_47440)){
} else {
cljs.core.remove_watch.call(null,ref_47440,key);
}

var G__47441 = seq__47424_47436;
var G__47442 = chunk__47425_47437;
var G__47443 = count__47426_47438;
var G__47444 = (i__47427_47439 + (1));
seq__47424_47436 = G__47441;
chunk__47425_47437 = G__47442;
count__47426_47438 = G__47443;
i__47427_47439 = G__47444;
continue;
} else {
var temp__5278__auto___47445 = cljs.core.seq.call(null,seq__47424_47436);
if(temp__5278__auto___47445){
var seq__47424_47446__$1 = temp__5278__auto___47445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47424_47446__$1)){
var c__44737__auto___47447 = cljs.core.chunk_first.call(null,seq__47424_47446__$1);
var G__47448 = cljs.core.chunk_rest.call(null,seq__47424_47446__$1);
var G__47449 = c__44737__auto___47447;
var G__47450 = cljs.core.count.call(null,c__44737__auto___47447);
var G__47451 = (0);
seq__47424_47436 = G__47448;
chunk__47425_47437 = G__47449;
count__47426_47438 = G__47450;
i__47427_47439 = G__47451;
continue;
} else {
var ref_47452 = cljs.core.first.call(null,seq__47424_47446__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_47452)){
} else {
cljs.core.remove_watch.call(null,ref_47452,key);
}

var G__47453 = cljs.core.next.call(null,seq__47424_47446__$1);
var G__47454 = null;
var G__47455 = (0);
var G__47456 = (0);
seq__47424_47436 = G__47453;
chunk__47425_47437 = G__47454;
count__47426_47438 = G__47455;
i__47427_47439 = G__47456;
continue;
}
} else {
}
}
break;
}

var seq__47428_47457 = cljs.core.seq.call(null,new_reactions);
var chunk__47429_47458 = null;
var count__47430_47459 = (0);
var i__47431_47460 = (0);
while(true){
if((i__47431_47460 < count__47430_47459)){
var ref_47461 = cljs.core._nth.call(null,chunk__47429_47458,i__47431_47460);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_47461)){
} else {
cljs.core.add_watch.call(null,ref_47461,key,((function (seq__47428_47457,chunk__47429_47458,count__47430_47459,i__47431_47460,ref_47461,comp,old_reactions,vec__47421,dom,next_state,new_reactions,key,_STAR_reactions_STAR_47420){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__47428_47457,chunk__47429_47458,count__47430_47459,i__47431_47460,ref_47461,comp,old_reactions,vec__47421,dom,next_state,new_reactions,key,_STAR_reactions_STAR_47420))
);
}

var G__47462 = seq__47428_47457;
var G__47463 = chunk__47429_47458;
var G__47464 = count__47430_47459;
var G__47465 = (i__47431_47460 + (1));
seq__47428_47457 = G__47462;
chunk__47429_47458 = G__47463;
count__47430_47459 = G__47464;
i__47431_47460 = G__47465;
continue;
} else {
var temp__5278__auto___47466 = cljs.core.seq.call(null,seq__47428_47457);
if(temp__5278__auto___47466){
var seq__47428_47467__$1 = temp__5278__auto___47466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47428_47467__$1)){
var c__44737__auto___47468 = cljs.core.chunk_first.call(null,seq__47428_47467__$1);
var G__47469 = cljs.core.chunk_rest.call(null,seq__47428_47467__$1);
var G__47470 = c__44737__auto___47468;
var G__47471 = cljs.core.count.call(null,c__44737__auto___47468);
var G__47472 = (0);
seq__47428_47457 = G__47469;
chunk__47429_47458 = G__47470;
count__47430_47459 = G__47471;
i__47431_47460 = G__47472;
continue;
} else {
var ref_47473 = cljs.core.first.call(null,seq__47428_47467__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_47473)){
} else {
cljs.core.add_watch.call(null,ref_47473,key,((function (seq__47428_47457,chunk__47429_47458,count__47430_47459,i__47431_47460,ref_47473,seq__47428_47467__$1,temp__5278__auto___47466,comp,old_reactions,vec__47421,dom,next_state,new_reactions,key,_STAR_reactions_STAR_47420){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__47428_47457,chunk__47429_47458,count__47430_47459,i__47431_47460,ref_47473,seq__47428_47467__$1,temp__5278__auto___47466,comp,old_reactions,vec__47421,dom,next_state,new_reactions,key,_STAR_reactions_STAR_47420))
);
}

var G__47474 = cljs.core.next.call(null,seq__47428_47467__$1);
var G__47475 = null;
var G__47476 = (0);
var G__47477 = (0);
seq__47428_47457 = G__47474;
chunk__47429_47458 = G__47475;
count__47430_47459 = G__47476;
i__47431_47460 = G__47477;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_47420;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_47478 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__47432_47479 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__47433_47480 = null;
var count__47434_47481 = (0);
var i__47435_47482 = (0);
while(true){
if((i__47435_47482 < count__47434_47481)){
var ref_47483 = cljs.core._nth.call(null,chunk__47433_47480,i__47435_47482);
cljs.core.remove_watch.call(null,ref_47483,key_47478);

var G__47484 = seq__47432_47479;
var G__47485 = chunk__47433_47480;
var G__47486 = count__47434_47481;
var G__47487 = (i__47435_47482 + (1));
seq__47432_47479 = G__47484;
chunk__47433_47480 = G__47485;
count__47434_47481 = G__47486;
i__47435_47482 = G__47487;
continue;
} else {
var temp__5278__auto___47488 = cljs.core.seq.call(null,seq__47432_47479);
if(temp__5278__auto___47488){
var seq__47432_47489__$1 = temp__5278__auto___47488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47432_47489__$1)){
var c__44737__auto___47490 = cljs.core.chunk_first.call(null,seq__47432_47489__$1);
var G__47491 = cljs.core.chunk_rest.call(null,seq__47432_47489__$1);
var G__47492 = c__44737__auto___47490;
var G__47493 = cljs.core.count.call(null,c__44737__auto___47490);
var G__47494 = (0);
seq__47432_47479 = G__47491;
chunk__47433_47480 = G__47492;
count__47434_47481 = G__47493;
i__47435_47482 = G__47494;
continue;
} else {
var ref_47495 = cljs.core.first.call(null,seq__47432_47489__$1);
cljs.core.remove_watch.call(null,ref_47495,key_47478);

var G__47496 = cljs.core.next.call(null,seq__47432_47489__$1);
var G__47497 = null;
var G__47498 = (0);
var G__47499 = (0);
seq__47432_47479 = G__47496;
chunk__47433_47480 = G__47497;
count__47434_47481 = G__47498;
i__47435_47482 = G__47499;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__45090__auto__ = [];
var len__45083__auto___47506 = arguments.length;
var i__45084__auto___47507 = (0);
while(true){
if((i__45084__auto___47507 < len__45083__auto___47506)){
args__45090__auto__.push((arguments[i__45084__auto___47507]));

var G__47508 = (i__45084__auto___47507 + (1));
i__45084__auto___47507 = G__47508;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((2) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45091__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__47503){
var map__47504 = p__47503;
var map__47504__$1 = ((((!((map__47504 == null)))?((((map__47504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47504):map__47504);
var options = map__47504__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq47500){
var G__47501 = cljs.core.first.call(null,seq47500);
var seq47500__$1 = cljs.core.next.call(null,seq47500);
var G__47502 = cljs.core.first.call(null,seq47500__$1);
var seq47500__$2 = cljs.core.next.call(null,seq47500__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__47501,G__47502,seq47500__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__45090__auto__ = [];
var len__45083__auto___47512 = arguments.length;
var i__45084__auto___47513 = (0);
while(true){
if((i__45084__auto___47513 < len__45083__auto___47512)){
args__45090__auto__.push((arguments[i__45084__auto___47513]));

var G__47514 = (i__45084__auto___47513 + (1));
i__45084__auto___47513 = G__47514;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((2) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45091__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq47509){
var G__47510 = cljs.core.first.call(null,seq47509);
var seq47509__$1 = cljs.core.next.call(null,seq47509);
var G__47511 = cljs.core.first.call(null,seq47509__$1);
var seq47509__$2 = cljs.core.next.call(null,seq47509__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__47510,G__47511,seq47509__$2);
});


//# sourceMappingURL=core.js.map?rel=1505037970120
