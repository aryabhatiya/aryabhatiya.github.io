// Compiled by ClojureScript 1.9.908 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__46068 = arguments.length;
switch (G__46068) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__46069 = opts;
var map__46069__$1 = ((((!((map__46069 == null)))?((((map__46069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46069):map__46069);
var ref = cljs.core.get.call(null,map__46069__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__46069__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__46071 = cljs.core.count.call(null,refs);
switch (G__46071) {
case (1):
var vec__46072 = refs;
var a = cljs.core.nth.call(null,vec__46072,(0),null);
return ((function (vec__46072,a,G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__46072,a,G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__46075 = refs;
var a = cljs.core.nth.call(null,vec__46075,(0),null);
var b = cljs.core.nth.call(null,vec__46075,(1),null);
return ((function (vec__46075,a,b,G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__46075,a,b,G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__46078 = refs;
var a = cljs.core.nth.call(null,vec__46078,(0),null);
var b = cljs.core.nth.call(null,vec__46078,(1),null);
var c = cljs.core.nth.call(null,vec__46078,(2),null);
return ((function (vec__46078,a,b,c,G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__46078,a,b,c,G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__46071,map__46069,map__46069__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__46081 = ref;
cljs.core.reset_BANG_.call(null,G__46081,recalc.call(null));

return G__46081;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__46069,map__46069__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__46069,map__46069__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__46069,map__46069__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__46069,map__46069__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__46082_46088 = cljs.core.seq.call(null,refs);
var chunk__46083_46089 = null;
var count__46084_46090 = (0);
var i__46085_46091 = (0);
while(true){
if((i__46085_46091 < count__46084_46090)){
var ref_46092__$1 = cljs.core._nth.call(null,chunk__46083_46089,i__46085_46091);
cljs.core.add_watch.call(null,ref_46092__$1,key,watch);

var G__46093 = seq__46082_46088;
var G__46094 = chunk__46083_46089;
var G__46095 = count__46084_46090;
var G__46096 = (i__46085_46091 + (1));
seq__46082_46088 = G__46093;
chunk__46083_46089 = G__46094;
count__46084_46090 = G__46095;
i__46085_46091 = G__46096;
continue;
} else {
var temp__5278__auto___46097 = cljs.core.seq.call(null,seq__46082_46088);
if(temp__5278__auto___46097){
var seq__46082_46098__$1 = temp__5278__auto___46097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46082_46098__$1)){
var c__44737__auto___46099 = cljs.core.chunk_first.call(null,seq__46082_46098__$1);
var G__46100 = cljs.core.chunk_rest.call(null,seq__46082_46098__$1);
var G__46101 = c__44737__auto___46099;
var G__46102 = cljs.core.count.call(null,c__44737__auto___46099);
var G__46103 = (0);
seq__46082_46088 = G__46100;
chunk__46083_46089 = G__46101;
count__46084_46090 = G__46102;
i__46085_46091 = G__46103;
continue;
} else {
var ref_46104__$1 = cljs.core.first.call(null,seq__46082_46098__$1);
cljs.core.add_watch.call(null,ref_46104__$1,key,watch);

var G__46105 = cljs.core.next.call(null,seq__46082_46098__$1);
var G__46106 = null;
var G__46107 = (0);
var G__46108 = (0);
seq__46082_46088 = G__46105;
chunk__46083_46089 = G__46106;
count__46084_46090 = G__46107;
i__46085_46091 = G__46108;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1505037969363
