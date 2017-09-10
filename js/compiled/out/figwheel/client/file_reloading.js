// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__43806__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__43806__auto__){
return or__43806__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__43806__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
var or__43806__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__43806__auto____$1)){
return or__43806__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52699_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52699_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__52700 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52701 = null;
var count__52702 = (0);
var i__52703 = (0);
while(true){
if((i__52703 < count__52702)){
var n = cljs.core._nth.call(null,chunk__52701,i__52703);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52704 = seq__52700;
var G__52705 = chunk__52701;
var G__52706 = count__52702;
var G__52707 = (i__52703 + (1));
seq__52700 = G__52704;
chunk__52701 = G__52705;
count__52702 = G__52706;
i__52703 = G__52707;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__52700);
if(temp__5278__auto__){
var seq__52700__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52700__$1)){
var c__44737__auto__ = cljs.core.chunk_first.call(null,seq__52700__$1);
var G__52708 = cljs.core.chunk_rest.call(null,seq__52700__$1);
var G__52709 = c__44737__auto__;
var G__52710 = cljs.core.count.call(null,c__44737__auto__);
var G__52711 = (0);
seq__52700 = G__52708;
chunk__52701 = G__52709;
count__52702 = G__52710;
i__52703 = G__52711;
continue;
} else {
var n = cljs.core.first.call(null,seq__52700__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52712 = cljs.core.next.call(null,seq__52700__$1);
var G__52713 = null;
var G__52714 = (0);
var G__52715 = (0);
seq__52700 = G__52712;
chunk__52701 = G__52713;
count__52702 = G__52714;
i__52703 = G__52715;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__52725_52733 = cljs.core.seq.call(null,deps);
var chunk__52726_52734 = null;
var count__52727_52735 = (0);
var i__52728_52736 = (0);
while(true){
if((i__52728_52736 < count__52727_52735)){
var dep_52737 = cljs.core._nth.call(null,chunk__52726_52734,i__52728_52736);
topo_sort_helper_STAR_.call(null,dep_52737,(depth + (1)),state);

var G__52738 = seq__52725_52733;
var G__52739 = chunk__52726_52734;
var G__52740 = count__52727_52735;
var G__52741 = (i__52728_52736 + (1));
seq__52725_52733 = G__52738;
chunk__52726_52734 = G__52739;
count__52727_52735 = G__52740;
i__52728_52736 = G__52741;
continue;
} else {
var temp__5278__auto___52742 = cljs.core.seq.call(null,seq__52725_52733);
if(temp__5278__auto___52742){
var seq__52725_52743__$1 = temp__5278__auto___52742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52725_52743__$1)){
var c__44737__auto___52744 = cljs.core.chunk_first.call(null,seq__52725_52743__$1);
var G__52745 = cljs.core.chunk_rest.call(null,seq__52725_52743__$1);
var G__52746 = c__44737__auto___52744;
var G__52747 = cljs.core.count.call(null,c__44737__auto___52744);
var G__52748 = (0);
seq__52725_52733 = G__52745;
chunk__52726_52734 = G__52746;
count__52727_52735 = G__52747;
i__52728_52736 = G__52748;
continue;
} else {
var dep_52749 = cljs.core.first.call(null,seq__52725_52743__$1);
topo_sort_helper_STAR_.call(null,dep_52749,(depth + (1)),state);

var G__52750 = cljs.core.next.call(null,seq__52725_52743__$1);
var G__52751 = null;
var G__52752 = (0);
var G__52753 = (0);
seq__52725_52733 = G__52750;
chunk__52726_52734 = G__52751;
count__52727_52735 = G__52752;
i__52728_52736 = G__52753;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__52729){
var vec__52730 = p__52729;
var seq__52731 = cljs.core.seq.call(null,vec__52730);
var first__52732 = cljs.core.first.call(null,seq__52731);
var seq__52731__$1 = cljs.core.next.call(null,seq__52731);
var x = first__52732;
var xs = seq__52731__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__52730,seq__52731,first__52732,seq__52731__$1,x,xs,get_deps__$1){
return (function (p1__52716_SHARP_){
return clojure.set.difference.call(null,p1__52716_SHARP_,x);
});})(vec__52730,seq__52731,first__52732,seq__52731__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__52754 = cljs.core.seq.call(null,provides);
var chunk__52755 = null;
var count__52756 = (0);
var i__52757 = (0);
while(true){
if((i__52757 < count__52756)){
var prov = cljs.core._nth.call(null,chunk__52755,i__52757);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52758_52766 = cljs.core.seq.call(null,requires);
var chunk__52759_52767 = null;
var count__52760_52768 = (0);
var i__52761_52769 = (0);
while(true){
if((i__52761_52769 < count__52760_52768)){
var req_52770 = cljs.core._nth.call(null,chunk__52759_52767,i__52761_52769);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52770,prov);

var G__52771 = seq__52758_52766;
var G__52772 = chunk__52759_52767;
var G__52773 = count__52760_52768;
var G__52774 = (i__52761_52769 + (1));
seq__52758_52766 = G__52771;
chunk__52759_52767 = G__52772;
count__52760_52768 = G__52773;
i__52761_52769 = G__52774;
continue;
} else {
var temp__5278__auto___52775 = cljs.core.seq.call(null,seq__52758_52766);
if(temp__5278__auto___52775){
var seq__52758_52776__$1 = temp__5278__auto___52775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52758_52776__$1)){
var c__44737__auto___52777 = cljs.core.chunk_first.call(null,seq__52758_52776__$1);
var G__52778 = cljs.core.chunk_rest.call(null,seq__52758_52776__$1);
var G__52779 = c__44737__auto___52777;
var G__52780 = cljs.core.count.call(null,c__44737__auto___52777);
var G__52781 = (0);
seq__52758_52766 = G__52778;
chunk__52759_52767 = G__52779;
count__52760_52768 = G__52780;
i__52761_52769 = G__52781;
continue;
} else {
var req_52782 = cljs.core.first.call(null,seq__52758_52776__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52782,prov);

var G__52783 = cljs.core.next.call(null,seq__52758_52776__$1);
var G__52784 = null;
var G__52785 = (0);
var G__52786 = (0);
seq__52758_52766 = G__52783;
chunk__52759_52767 = G__52784;
count__52760_52768 = G__52785;
i__52761_52769 = G__52786;
continue;
}
} else {
}
}
break;
}

var G__52787 = seq__52754;
var G__52788 = chunk__52755;
var G__52789 = count__52756;
var G__52790 = (i__52757 + (1));
seq__52754 = G__52787;
chunk__52755 = G__52788;
count__52756 = G__52789;
i__52757 = G__52790;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__52754);
if(temp__5278__auto__){
var seq__52754__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52754__$1)){
var c__44737__auto__ = cljs.core.chunk_first.call(null,seq__52754__$1);
var G__52791 = cljs.core.chunk_rest.call(null,seq__52754__$1);
var G__52792 = c__44737__auto__;
var G__52793 = cljs.core.count.call(null,c__44737__auto__);
var G__52794 = (0);
seq__52754 = G__52791;
chunk__52755 = G__52792;
count__52756 = G__52793;
i__52757 = G__52794;
continue;
} else {
var prov = cljs.core.first.call(null,seq__52754__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52762_52795 = cljs.core.seq.call(null,requires);
var chunk__52763_52796 = null;
var count__52764_52797 = (0);
var i__52765_52798 = (0);
while(true){
if((i__52765_52798 < count__52764_52797)){
var req_52799 = cljs.core._nth.call(null,chunk__52763_52796,i__52765_52798);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52799,prov);

var G__52800 = seq__52762_52795;
var G__52801 = chunk__52763_52796;
var G__52802 = count__52764_52797;
var G__52803 = (i__52765_52798 + (1));
seq__52762_52795 = G__52800;
chunk__52763_52796 = G__52801;
count__52764_52797 = G__52802;
i__52765_52798 = G__52803;
continue;
} else {
var temp__5278__auto___52804__$1 = cljs.core.seq.call(null,seq__52762_52795);
if(temp__5278__auto___52804__$1){
var seq__52762_52805__$1 = temp__5278__auto___52804__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52762_52805__$1)){
var c__44737__auto___52806 = cljs.core.chunk_first.call(null,seq__52762_52805__$1);
var G__52807 = cljs.core.chunk_rest.call(null,seq__52762_52805__$1);
var G__52808 = c__44737__auto___52806;
var G__52809 = cljs.core.count.call(null,c__44737__auto___52806);
var G__52810 = (0);
seq__52762_52795 = G__52807;
chunk__52763_52796 = G__52808;
count__52764_52797 = G__52809;
i__52765_52798 = G__52810;
continue;
} else {
var req_52811 = cljs.core.first.call(null,seq__52762_52805__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52811,prov);

var G__52812 = cljs.core.next.call(null,seq__52762_52805__$1);
var G__52813 = null;
var G__52814 = (0);
var G__52815 = (0);
seq__52762_52795 = G__52812;
chunk__52763_52796 = G__52813;
count__52764_52797 = G__52814;
i__52765_52798 = G__52815;
continue;
}
} else {
}
}
break;
}

var G__52816 = cljs.core.next.call(null,seq__52754__$1);
var G__52817 = null;
var G__52818 = (0);
var G__52819 = (0);
seq__52754 = G__52816;
chunk__52755 = G__52817;
count__52756 = G__52818;
i__52757 = G__52819;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__52820_52824 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__52821_52825 = null;
var count__52822_52826 = (0);
var i__52823_52827 = (0);
while(true){
if((i__52823_52827 < count__52822_52826)){
var ns_52828 = cljs.core._nth.call(null,chunk__52821_52825,i__52823_52827);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52828);

var G__52829 = seq__52820_52824;
var G__52830 = chunk__52821_52825;
var G__52831 = count__52822_52826;
var G__52832 = (i__52823_52827 + (1));
seq__52820_52824 = G__52829;
chunk__52821_52825 = G__52830;
count__52822_52826 = G__52831;
i__52823_52827 = G__52832;
continue;
} else {
var temp__5278__auto___52833 = cljs.core.seq.call(null,seq__52820_52824);
if(temp__5278__auto___52833){
var seq__52820_52834__$1 = temp__5278__auto___52833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52820_52834__$1)){
var c__44737__auto___52835 = cljs.core.chunk_first.call(null,seq__52820_52834__$1);
var G__52836 = cljs.core.chunk_rest.call(null,seq__52820_52834__$1);
var G__52837 = c__44737__auto___52835;
var G__52838 = cljs.core.count.call(null,c__44737__auto___52835);
var G__52839 = (0);
seq__52820_52824 = G__52836;
chunk__52821_52825 = G__52837;
count__52822_52826 = G__52838;
i__52823_52827 = G__52839;
continue;
} else {
var ns_52840 = cljs.core.first.call(null,seq__52820_52834__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52840);

var G__52841 = cljs.core.next.call(null,seq__52820_52834__$1);
var G__52842 = null;
var G__52843 = (0);
var G__52844 = (0);
seq__52820_52824 = G__52841;
chunk__52821_52825 = G__52842;
count__52822_52826 = G__52843;
i__52823_52827 = G__52844;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__43806__auto__ = goog.require__;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__52845__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__52845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52846__i = 0, G__52846__a = new Array(arguments.length -  0);
while (G__52846__i < G__52846__a.length) {G__52846__a[G__52846__i] = arguments[G__52846__i + 0]; ++G__52846__i;}
  args = new cljs.core.IndexedSeq(G__52846__a,0,null);
} 
return G__52845__delegate.call(this,args);};
G__52845.cljs$lang$maxFixedArity = 0;
G__52845.cljs$lang$applyTo = (function (arglist__52847){
var args = cljs.core.seq(arglist__52847);
return G__52845__delegate(args);
});
G__52845.cljs$core$IFn$_invoke$arity$variadic = G__52845__delegate;
return G__52845;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__52848_SHARP_,p2__52849_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52848_SHARP_)].join('')),p2__52849_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__52850_SHARP_,p2__52851_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52850_SHARP_)].join(''),p2__52851_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__52852 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__52852.addCallback(((function (G__52852){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__52852))
);

G__52852.addErrback(((function (G__52852){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__52852))
);

return G__52852;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__52853 = cljs.core._EQ_;
var expr__52854 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__52853.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__52854))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__52853,expr__52854){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__52853,expr__52854))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__52853,expr__52854){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e52856){if((e52856 instanceof Error)){
var e = e52856;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52856;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__52853,expr__52854))
} else {
if(cljs.core.truth_(pred__52853.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__52854))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__52853.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__52854))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__52853.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__52854))){
return ((function (pred__52853,expr__52854){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e52857){if((e52857 instanceof Error)){
var e = e52857;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52857;

}
}})());
});
;})(pred__52853,expr__52854))
} else {
return ((function (pred__52853,expr__52854){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__52853,expr__52854))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__52858,callback){
var map__52859 = p__52858;
var map__52859__$1 = ((((!((map__52859 == null)))?((((map__52859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52859):map__52859);
var file_msg = map__52859__$1;
var request_url = cljs.core.get.call(null,map__52859__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__52859,map__52859__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__52859,map__52859__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__){
return (function (state_52883){
var state_val_52884 = (state_52883[(1)]);
if((state_val_52884 === (7))){
var inst_52879 = (state_52883[(2)]);
var state_52883__$1 = state_52883;
var statearr_52885_52902 = state_52883__$1;
(statearr_52885_52902[(2)] = inst_52879);

(statearr_52885_52902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (1))){
var state_52883__$1 = state_52883;
var statearr_52886_52903 = state_52883__$1;
(statearr_52886_52903[(2)] = null);

(statearr_52886_52903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (4))){
var inst_52863 = (state_52883[(7)]);
var inst_52863__$1 = (state_52883[(2)]);
var state_52883__$1 = (function (){var statearr_52887 = state_52883;
(statearr_52887[(7)] = inst_52863__$1);

return statearr_52887;
})();
if(cljs.core.truth_(inst_52863__$1)){
var statearr_52888_52904 = state_52883__$1;
(statearr_52888_52904[(1)] = (5));

} else {
var statearr_52889_52905 = state_52883__$1;
(statearr_52889_52905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (6))){
var state_52883__$1 = state_52883;
var statearr_52890_52906 = state_52883__$1;
(statearr_52890_52906[(2)] = null);

(statearr_52890_52906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (3))){
var inst_52881 = (state_52883[(2)]);
var state_52883__$1 = state_52883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52883__$1,inst_52881);
} else {
if((state_val_52884 === (2))){
var state_52883__$1 = state_52883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52883__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_52884 === (11))){
var inst_52875 = (state_52883[(2)]);
var state_52883__$1 = (function (){var statearr_52891 = state_52883;
(statearr_52891[(8)] = inst_52875);

return statearr_52891;
})();
var statearr_52892_52907 = state_52883__$1;
(statearr_52892_52907[(2)] = null);

(statearr_52892_52907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (9))){
var inst_52867 = (state_52883[(9)]);
var inst_52869 = (state_52883[(10)]);
var inst_52871 = inst_52869.call(null,inst_52867);
var state_52883__$1 = state_52883;
var statearr_52893_52908 = state_52883__$1;
(statearr_52893_52908[(2)] = inst_52871);

(statearr_52893_52908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (5))){
var inst_52863 = (state_52883[(7)]);
var inst_52865 = figwheel.client.file_reloading.blocking_load.call(null,inst_52863);
var state_52883__$1 = state_52883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52883__$1,(8),inst_52865);
} else {
if((state_val_52884 === (10))){
var inst_52867 = (state_52883[(9)]);
var inst_52873 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_52867);
var state_52883__$1 = state_52883;
var statearr_52894_52909 = state_52883__$1;
(statearr_52894_52909[(2)] = inst_52873);

(statearr_52894_52909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52884 === (8))){
var inst_52863 = (state_52883[(7)]);
var inst_52869 = (state_52883[(10)]);
var inst_52867 = (state_52883[(2)]);
var inst_52868 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_52869__$1 = cljs.core.get.call(null,inst_52868,inst_52863);
var state_52883__$1 = (function (){var statearr_52895 = state_52883;
(statearr_52895[(9)] = inst_52867);

(statearr_52895[(10)] = inst_52869__$1);

return statearr_52895;
})();
if(cljs.core.truth_(inst_52869__$1)){
var statearr_52896_52910 = state_52883__$1;
(statearr_52896_52910[(1)] = (9));

} else {
var statearr_52897_52911 = state_52883__$1;
(statearr_52897_52911[(1)] = (10));

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
});})(c__49200__auto__))
;
return ((function (switch__49110__auto__,c__49200__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__49111__auto__ = null;
var figwheel$client$file_reloading$state_machine__49111__auto____0 = (function (){
var statearr_52898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52898[(0)] = figwheel$client$file_reloading$state_machine__49111__auto__);

(statearr_52898[(1)] = (1));

return statearr_52898;
});
var figwheel$client$file_reloading$state_machine__49111__auto____1 = (function (state_52883){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_52883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e52899){if((e52899 instanceof Object)){
var ex__49114__auto__ = e52899;
var statearr_52900_52912 = state_52883;
(statearr_52900_52912[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52913 = state_52883;
state_52883 = G__52913;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__49111__auto__ = function(state_52883){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__49111__auto____1.call(this,state_52883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__49111__auto____0;
figwheel$client$file_reloading$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__49111__auto____1;
return figwheel$client$file_reloading$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__))
})();
var state__49202__auto__ = (function (){var statearr_52901 = f__49201__auto__.call(null);
(statearr_52901[(6)] = c__49200__auto__);

return statearr_52901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__))
);

return c__49200__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52914,callback){
var map__52915 = p__52914;
var map__52915__$1 = ((((!((map__52915 == null)))?((((map__52915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52915):map__52915);
var file_msg = map__52915__$1;
var namespace = cljs.core.get.call(null,map__52915__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52915,map__52915__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52915,map__52915__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__52917){
var map__52918 = p__52917;
var map__52918__$1 = ((((!((map__52918 == null)))?((((map__52918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52918):map__52918);
var file_msg = map__52918__$1;
var namespace = cljs.core.get.call(null,map__52918__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52920){
var map__52921 = p__52920;
var map__52921__$1 = ((((!((map__52921 == null)))?((((map__52921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52921):map__52921);
var file_msg = map__52921__$1;
var namespace = cljs.core.get.call(null,map__52921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__43794__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__43794__auto__){
var or__43806__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
var or__43806__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__43806__auto____$1)){
return or__43806__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__43794__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52923,callback){
var map__52924 = p__52923;
var map__52924__$1 = ((((!((map__52924 == null)))?((((map__52924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52924):map__52924);
var file_msg = map__52924__$1;
var request_url = cljs.core.get.call(null,map__52924__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__49200__auto___52974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___52974,out){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___52974,out){
return (function (state_52959){
var state_val_52960 = (state_52959[(1)]);
if((state_val_52960 === (1))){
var inst_52933 = cljs.core.seq.call(null,files);
var inst_52934 = cljs.core.first.call(null,inst_52933);
var inst_52935 = cljs.core.next.call(null,inst_52933);
var inst_52936 = files;
var state_52959__$1 = (function (){var statearr_52961 = state_52959;
(statearr_52961[(7)] = inst_52935);

(statearr_52961[(8)] = inst_52934);

(statearr_52961[(9)] = inst_52936);

return statearr_52961;
})();
var statearr_52962_52975 = state_52959__$1;
(statearr_52962_52975[(2)] = null);

(statearr_52962_52975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52960 === (2))){
var inst_52942 = (state_52959[(10)]);
var inst_52936 = (state_52959[(9)]);
var inst_52941 = cljs.core.seq.call(null,inst_52936);
var inst_52942__$1 = cljs.core.first.call(null,inst_52941);
var inst_52943 = cljs.core.next.call(null,inst_52941);
var inst_52944 = (inst_52942__$1 == null);
var inst_52945 = cljs.core.not.call(null,inst_52944);
var state_52959__$1 = (function (){var statearr_52963 = state_52959;
(statearr_52963[(10)] = inst_52942__$1);

(statearr_52963[(11)] = inst_52943);

return statearr_52963;
})();
if(inst_52945){
var statearr_52964_52976 = state_52959__$1;
(statearr_52964_52976[(1)] = (4));

} else {
var statearr_52965_52977 = state_52959__$1;
(statearr_52965_52977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52960 === (3))){
var inst_52957 = (state_52959[(2)]);
var state_52959__$1 = state_52959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52959__$1,inst_52957);
} else {
if((state_val_52960 === (4))){
var inst_52942 = (state_52959[(10)]);
var inst_52947 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52942);
var state_52959__$1 = state_52959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52959__$1,(7),inst_52947);
} else {
if((state_val_52960 === (5))){
var inst_52953 = cljs.core.async.close_BANG_.call(null,out);
var state_52959__$1 = state_52959;
var statearr_52966_52978 = state_52959__$1;
(statearr_52966_52978[(2)] = inst_52953);

(statearr_52966_52978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52960 === (6))){
var inst_52955 = (state_52959[(2)]);
var state_52959__$1 = state_52959;
var statearr_52967_52979 = state_52959__$1;
(statearr_52967_52979[(2)] = inst_52955);

(statearr_52967_52979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52960 === (7))){
var inst_52943 = (state_52959[(11)]);
var inst_52949 = (state_52959[(2)]);
var inst_52950 = cljs.core.async.put_BANG_.call(null,out,inst_52949);
var inst_52936 = inst_52943;
var state_52959__$1 = (function (){var statearr_52968 = state_52959;
(statearr_52968[(12)] = inst_52950);

(statearr_52968[(9)] = inst_52936);

return statearr_52968;
})();
var statearr_52969_52980 = state_52959__$1;
(statearr_52969_52980[(2)] = null);

(statearr_52969_52980[(1)] = (2));


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
});})(c__49200__auto___52974,out))
;
return ((function (switch__49110__auto__,c__49200__auto___52974,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto____0 = (function (){
var statearr_52970 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52970[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto__);

(statearr_52970[(1)] = (1));

return statearr_52970;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto____1 = (function (state_52959){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_52959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e52971){if((e52971 instanceof Object)){
var ex__49114__auto__ = e52971;
var statearr_52972_52981 = state_52959;
(statearr_52972_52981[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52982 = state_52959;
state_52959 = G__52982;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto__ = function(state_52959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto____1.call(this,state_52959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___52974,out))
})();
var state__49202__auto__ = (function (){var statearr_52973 = f__49201__auto__.call(null);
(statearr_52973[(6)] = c__49200__auto___52974);

return statearr_52973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___52974,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52983,opts){
var map__52984 = p__52983;
var map__52984__$1 = ((((!((map__52984 == null)))?((((map__52984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52984):map__52984);
var eval_body = cljs.core.get.call(null,map__52984__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52984__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__43794__auto__ = eval_body;
if(cljs.core.truth_(and__43794__auto__)){
return typeof eval_body === 'string';
} else {
return and__43794__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e52986){var e = e52986;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__52987_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52987_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__52988){
var vec__52989 = p__52988;
var k = cljs.core.nth.call(null,vec__52989,(0),null);
var v = cljs.core.nth.call(null,vec__52989,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52992){
var vec__52993 = p__52992;
var k = cljs.core.nth.call(null,vec__52993,(0),null);
var v = cljs.core.nth.call(null,vec__52993,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52999,p__53000){
var map__53001 = p__52999;
var map__53001__$1 = ((((!((map__53001 == null)))?((((map__53001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53001):map__53001);
var opts = map__53001__$1;
var before_jsload = cljs.core.get.call(null,map__53001__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53001__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53001__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53002 = p__53000;
var map__53002__$1 = ((((!((map__53002 == null)))?((((map__53002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53002):map__53002);
var msg = map__53002__$1;
var files = cljs.core.get.call(null,map__53002__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53002__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53002__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53156){
var state_val_53157 = (state_53156[(1)]);
if((state_val_53157 === (7))){
var inst_53019 = (state_53156[(7)]);
var inst_53017 = (state_53156[(8)]);
var inst_53016 = (state_53156[(9)]);
var inst_53018 = (state_53156[(10)]);
var inst_53024 = cljs.core._nth.call(null,inst_53017,inst_53019);
var inst_53025 = figwheel.client.file_reloading.eval_body.call(null,inst_53024,opts);
var inst_53026 = (inst_53019 + (1));
var tmp53158 = inst_53017;
var tmp53159 = inst_53016;
var tmp53160 = inst_53018;
var inst_53016__$1 = tmp53159;
var inst_53017__$1 = tmp53158;
var inst_53018__$1 = tmp53160;
var inst_53019__$1 = inst_53026;
var state_53156__$1 = (function (){var statearr_53161 = state_53156;
(statearr_53161[(7)] = inst_53019__$1);

(statearr_53161[(8)] = inst_53017__$1);

(statearr_53161[(11)] = inst_53025);

(statearr_53161[(9)] = inst_53016__$1);

(statearr_53161[(10)] = inst_53018__$1);

return statearr_53161;
})();
var statearr_53162_53245 = state_53156__$1;
(statearr_53162_53245[(2)] = null);

(statearr_53162_53245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (20))){
var inst_53059 = (state_53156[(12)]);
var inst_53067 = figwheel.client.file_reloading.sort_files.call(null,inst_53059);
var state_53156__$1 = state_53156;
var statearr_53163_53246 = state_53156__$1;
(statearr_53163_53246[(2)] = inst_53067);

(statearr_53163_53246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (27))){
var state_53156__$1 = state_53156;
var statearr_53164_53247 = state_53156__$1;
(statearr_53164_53247[(2)] = null);

(statearr_53164_53247[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (1))){
var inst_53008 = (state_53156[(13)]);
var inst_53005 = before_jsload.call(null,files);
var inst_53006 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53007 = (function (){return ((function (inst_53008,inst_53005,inst_53006,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52996_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52996_SHARP_);
});
;})(inst_53008,inst_53005,inst_53006,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53008__$1 = cljs.core.filter.call(null,inst_53007,files);
var inst_53009 = cljs.core.not_empty.call(null,inst_53008__$1);
var state_53156__$1 = (function (){var statearr_53165 = state_53156;
(statearr_53165[(14)] = inst_53006);

(statearr_53165[(13)] = inst_53008__$1);

(statearr_53165[(15)] = inst_53005);

return statearr_53165;
})();
if(cljs.core.truth_(inst_53009)){
var statearr_53166_53248 = state_53156__$1;
(statearr_53166_53248[(1)] = (2));

} else {
var statearr_53167_53249 = state_53156__$1;
(statearr_53167_53249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (24))){
var state_53156__$1 = state_53156;
var statearr_53168_53250 = state_53156__$1;
(statearr_53168_53250[(2)] = null);

(statearr_53168_53250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (39))){
var inst_53109 = (state_53156[(16)]);
var state_53156__$1 = state_53156;
var statearr_53169_53251 = state_53156__$1;
(statearr_53169_53251[(2)] = inst_53109);

(statearr_53169_53251[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (46))){
var inst_53151 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
var statearr_53170_53252 = state_53156__$1;
(statearr_53170_53252[(2)] = inst_53151);

(statearr_53170_53252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (4))){
var inst_53053 = (state_53156[(2)]);
var inst_53054 = cljs.core.List.EMPTY;
var inst_53055 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53054);
var inst_53056 = (function (){return ((function (inst_53053,inst_53054,inst_53055,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52997_SHARP_){
var and__43794__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52997_SHARP_);
if(cljs.core.truth_(and__43794__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52997_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__52997_SHARP_)));
} else {
return and__43794__auto__;
}
});
;})(inst_53053,inst_53054,inst_53055,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53057 = cljs.core.filter.call(null,inst_53056,files);
var inst_53058 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53059 = cljs.core.concat.call(null,inst_53057,inst_53058);
var state_53156__$1 = (function (){var statearr_53171 = state_53156;
(statearr_53171[(17)] = inst_53055);

(statearr_53171[(18)] = inst_53053);

(statearr_53171[(12)] = inst_53059);

return statearr_53171;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_53172_53253 = state_53156__$1;
(statearr_53172_53253[(1)] = (16));

} else {
var statearr_53173_53254 = state_53156__$1;
(statearr_53173_53254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (15))){
var inst_53043 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
var statearr_53174_53255 = state_53156__$1;
(statearr_53174_53255[(2)] = inst_53043);

(statearr_53174_53255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (21))){
var inst_53069 = (state_53156[(19)]);
var inst_53069__$1 = (state_53156[(2)]);
var inst_53070 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53069__$1);
var state_53156__$1 = (function (){var statearr_53175 = state_53156;
(statearr_53175[(19)] = inst_53069__$1);

return statearr_53175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53156__$1,(22),inst_53070);
} else {
if((state_val_53157 === (31))){
var inst_53154 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53156__$1,inst_53154);
} else {
if((state_val_53157 === (32))){
var inst_53109 = (state_53156[(16)]);
var inst_53114 = inst_53109.cljs$lang$protocol_mask$partition0$;
var inst_53115 = (inst_53114 & (64));
var inst_53116 = inst_53109.cljs$core$ISeq$;
var inst_53117 = (cljs.core.PROTOCOL_SENTINEL === inst_53116);
var inst_53118 = (inst_53115) || (inst_53117);
var state_53156__$1 = state_53156;
if(cljs.core.truth_(inst_53118)){
var statearr_53176_53256 = state_53156__$1;
(statearr_53176_53256[(1)] = (35));

} else {
var statearr_53177_53257 = state_53156__$1;
(statearr_53177_53257[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (40))){
var inst_53131 = (state_53156[(20)]);
var inst_53130 = (state_53156[(2)]);
var inst_53131__$1 = cljs.core.get.call(null,inst_53130,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53132 = cljs.core.get.call(null,inst_53130,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53133 = cljs.core.not_empty.call(null,inst_53131__$1);
var state_53156__$1 = (function (){var statearr_53178 = state_53156;
(statearr_53178[(21)] = inst_53132);

(statearr_53178[(20)] = inst_53131__$1);

return statearr_53178;
})();
if(cljs.core.truth_(inst_53133)){
var statearr_53179_53258 = state_53156__$1;
(statearr_53179_53258[(1)] = (41));

} else {
var statearr_53180_53259 = state_53156__$1;
(statearr_53180_53259[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (33))){
var state_53156__$1 = state_53156;
var statearr_53181_53260 = state_53156__$1;
(statearr_53181_53260[(2)] = false);

(statearr_53181_53260[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (13))){
var inst_53029 = (state_53156[(22)]);
var inst_53033 = cljs.core.chunk_first.call(null,inst_53029);
var inst_53034 = cljs.core.chunk_rest.call(null,inst_53029);
var inst_53035 = cljs.core.count.call(null,inst_53033);
var inst_53016 = inst_53034;
var inst_53017 = inst_53033;
var inst_53018 = inst_53035;
var inst_53019 = (0);
var state_53156__$1 = (function (){var statearr_53182 = state_53156;
(statearr_53182[(7)] = inst_53019);

(statearr_53182[(8)] = inst_53017);

(statearr_53182[(9)] = inst_53016);

(statearr_53182[(10)] = inst_53018);

return statearr_53182;
})();
var statearr_53183_53261 = state_53156__$1;
(statearr_53183_53261[(2)] = null);

(statearr_53183_53261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (22))){
var inst_53073 = (state_53156[(23)]);
var inst_53072 = (state_53156[(24)]);
var inst_53069 = (state_53156[(19)]);
var inst_53077 = (state_53156[(25)]);
var inst_53072__$1 = (state_53156[(2)]);
var inst_53073__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53072__$1);
var inst_53074 = (function (){var all_files = inst_53069;
var res_SINGLEQUOTE_ = inst_53072__$1;
var res = inst_53073__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53073,inst_53072,inst_53069,inst_53077,inst_53072__$1,inst_53073__$1,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52998_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52998_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53073,inst_53072,inst_53069,inst_53077,inst_53072__$1,inst_53073__$1,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53075 = cljs.core.filter.call(null,inst_53074,inst_53072__$1);
var inst_53076 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53077__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53076);
var inst_53078 = cljs.core.not_empty.call(null,inst_53077__$1);
var state_53156__$1 = (function (){var statearr_53184 = state_53156;
(statearr_53184[(26)] = inst_53075);

(statearr_53184[(23)] = inst_53073__$1);

(statearr_53184[(24)] = inst_53072__$1);

(statearr_53184[(25)] = inst_53077__$1);

return statearr_53184;
})();
if(cljs.core.truth_(inst_53078)){
var statearr_53185_53262 = state_53156__$1;
(statearr_53185_53262[(1)] = (23));

} else {
var statearr_53186_53263 = state_53156__$1;
(statearr_53186_53263[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (36))){
var state_53156__$1 = state_53156;
var statearr_53187_53264 = state_53156__$1;
(statearr_53187_53264[(2)] = false);

(statearr_53187_53264[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (41))){
var inst_53131 = (state_53156[(20)]);
var inst_53135 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53136 = cljs.core.map.call(null,inst_53135,inst_53131);
var inst_53137 = cljs.core.pr_str.call(null,inst_53136);
var inst_53138 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53137)].join('');
var inst_53139 = figwheel.client.utils.log.call(null,inst_53138);
var state_53156__$1 = state_53156;
var statearr_53188_53265 = state_53156__$1;
(statearr_53188_53265[(2)] = inst_53139);

(statearr_53188_53265[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (43))){
var inst_53132 = (state_53156[(21)]);
var inst_53142 = (state_53156[(2)]);
var inst_53143 = cljs.core.not_empty.call(null,inst_53132);
var state_53156__$1 = (function (){var statearr_53189 = state_53156;
(statearr_53189[(27)] = inst_53142);

return statearr_53189;
})();
if(cljs.core.truth_(inst_53143)){
var statearr_53190_53266 = state_53156__$1;
(statearr_53190_53266[(1)] = (44));

} else {
var statearr_53191_53267 = state_53156__$1;
(statearr_53191_53267[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (29))){
var inst_53109 = (state_53156[(16)]);
var inst_53075 = (state_53156[(26)]);
var inst_53073 = (state_53156[(23)]);
var inst_53072 = (state_53156[(24)]);
var inst_53069 = (state_53156[(19)]);
var inst_53077 = (state_53156[(25)]);
var inst_53105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53108 = (function (){var all_files = inst_53069;
var res_SINGLEQUOTE_ = inst_53072;
var res = inst_53073;
var files_not_loaded = inst_53075;
var dependencies_that_loaded = inst_53077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53109,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53105,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53107){
var map__53192 = p__53107;
var map__53192__$1 = ((((!((map__53192 == null)))?((((map__53192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53192):map__53192);
var namespace = cljs.core.get.call(null,map__53192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53109,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53105,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53109__$1 = cljs.core.group_by.call(null,inst_53108,inst_53075);
var inst_53111 = (inst_53109__$1 == null);
var inst_53112 = cljs.core.not.call(null,inst_53111);
var state_53156__$1 = (function (){var statearr_53194 = state_53156;
(statearr_53194[(16)] = inst_53109__$1);

(statearr_53194[(28)] = inst_53105);

return statearr_53194;
})();
if(inst_53112){
var statearr_53195_53268 = state_53156__$1;
(statearr_53195_53268[(1)] = (32));

} else {
var statearr_53196_53269 = state_53156__$1;
(statearr_53196_53269[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (44))){
var inst_53132 = (state_53156[(21)]);
var inst_53145 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53132);
var inst_53146 = cljs.core.pr_str.call(null,inst_53145);
var inst_53147 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53146)].join('');
var inst_53148 = figwheel.client.utils.log.call(null,inst_53147);
var state_53156__$1 = state_53156;
var statearr_53197_53270 = state_53156__$1;
(statearr_53197_53270[(2)] = inst_53148);

(statearr_53197_53270[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (6))){
var inst_53050 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
var statearr_53198_53271 = state_53156__$1;
(statearr_53198_53271[(2)] = inst_53050);

(statearr_53198_53271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (28))){
var inst_53075 = (state_53156[(26)]);
var inst_53102 = (state_53156[(2)]);
var inst_53103 = cljs.core.not_empty.call(null,inst_53075);
var state_53156__$1 = (function (){var statearr_53199 = state_53156;
(statearr_53199[(29)] = inst_53102);

return statearr_53199;
})();
if(cljs.core.truth_(inst_53103)){
var statearr_53200_53272 = state_53156__$1;
(statearr_53200_53272[(1)] = (29));

} else {
var statearr_53201_53273 = state_53156__$1;
(statearr_53201_53273[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (25))){
var inst_53073 = (state_53156[(23)]);
var inst_53089 = (state_53156[(2)]);
var inst_53090 = cljs.core.not_empty.call(null,inst_53073);
var state_53156__$1 = (function (){var statearr_53202 = state_53156;
(statearr_53202[(30)] = inst_53089);

return statearr_53202;
})();
if(cljs.core.truth_(inst_53090)){
var statearr_53203_53274 = state_53156__$1;
(statearr_53203_53274[(1)] = (26));

} else {
var statearr_53204_53275 = state_53156__$1;
(statearr_53204_53275[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (34))){
var inst_53125 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
if(cljs.core.truth_(inst_53125)){
var statearr_53205_53276 = state_53156__$1;
(statearr_53205_53276[(1)] = (38));

} else {
var statearr_53206_53277 = state_53156__$1;
(statearr_53206_53277[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (17))){
var state_53156__$1 = state_53156;
var statearr_53207_53278 = state_53156__$1;
(statearr_53207_53278[(2)] = recompile_dependents);

(statearr_53207_53278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (3))){
var state_53156__$1 = state_53156;
var statearr_53208_53279 = state_53156__$1;
(statearr_53208_53279[(2)] = null);

(statearr_53208_53279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (12))){
var inst_53046 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
var statearr_53209_53280 = state_53156__$1;
(statearr_53209_53280[(2)] = inst_53046);

(statearr_53209_53280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (2))){
var inst_53008 = (state_53156[(13)]);
var inst_53015 = cljs.core.seq.call(null,inst_53008);
var inst_53016 = inst_53015;
var inst_53017 = null;
var inst_53018 = (0);
var inst_53019 = (0);
var state_53156__$1 = (function (){var statearr_53210 = state_53156;
(statearr_53210[(7)] = inst_53019);

(statearr_53210[(8)] = inst_53017);

(statearr_53210[(9)] = inst_53016);

(statearr_53210[(10)] = inst_53018);

return statearr_53210;
})();
var statearr_53211_53281 = state_53156__$1;
(statearr_53211_53281[(2)] = null);

(statearr_53211_53281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (23))){
var inst_53075 = (state_53156[(26)]);
var inst_53073 = (state_53156[(23)]);
var inst_53072 = (state_53156[(24)]);
var inst_53069 = (state_53156[(19)]);
var inst_53077 = (state_53156[(25)]);
var inst_53080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53082 = (function (){var all_files = inst_53069;
var res_SINGLEQUOTE_ = inst_53072;
var res = inst_53073;
var files_not_loaded = inst_53075;
var dependencies_that_loaded = inst_53077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53080,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53081){
var map__53212 = p__53081;
var map__53212__$1 = ((((!((map__53212 == null)))?((((map__53212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53212):map__53212);
var request_url = cljs.core.get.call(null,map__53212__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53080,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53083 = cljs.core.reverse.call(null,inst_53077);
var inst_53084 = cljs.core.map.call(null,inst_53082,inst_53083);
var inst_53085 = cljs.core.pr_str.call(null,inst_53084);
var inst_53086 = figwheel.client.utils.log.call(null,inst_53085);
var state_53156__$1 = (function (){var statearr_53214 = state_53156;
(statearr_53214[(31)] = inst_53080);

return statearr_53214;
})();
var statearr_53215_53282 = state_53156__$1;
(statearr_53215_53282[(2)] = inst_53086);

(statearr_53215_53282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (35))){
var state_53156__$1 = state_53156;
var statearr_53216_53283 = state_53156__$1;
(statearr_53216_53283[(2)] = true);

(statearr_53216_53283[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (19))){
var inst_53059 = (state_53156[(12)]);
var inst_53065 = figwheel.client.file_reloading.expand_files.call(null,inst_53059);
var state_53156__$1 = state_53156;
var statearr_53217_53284 = state_53156__$1;
(statearr_53217_53284[(2)] = inst_53065);

(statearr_53217_53284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (11))){
var state_53156__$1 = state_53156;
var statearr_53218_53285 = state_53156__$1;
(statearr_53218_53285[(2)] = null);

(statearr_53218_53285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (9))){
var inst_53048 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
var statearr_53219_53286 = state_53156__$1;
(statearr_53219_53286[(2)] = inst_53048);

(statearr_53219_53286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (5))){
var inst_53019 = (state_53156[(7)]);
var inst_53018 = (state_53156[(10)]);
var inst_53021 = (inst_53019 < inst_53018);
var inst_53022 = inst_53021;
var state_53156__$1 = state_53156;
if(cljs.core.truth_(inst_53022)){
var statearr_53220_53287 = state_53156__$1;
(statearr_53220_53287[(1)] = (7));

} else {
var statearr_53221_53288 = state_53156__$1;
(statearr_53221_53288[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (14))){
var inst_53029 = (state_53156[(22)]);
var inst_53038 = cljs.core.first.call(null,inst_53029);
var inst_53039 = figwheel.client.file_reloading.eval_body.call(null,inst_53038,opts);
var inst_53040 = cljs.core.next.call(null,inst_53029);
var inst_53016 = inst_53040;
var inst_53017 = null;
var inst_53018 = (0);
var inst_53019 = (0);
var state_53156__$1 = (function (){var statearr_53222 = state_53156;
(statearr_53222[(7)] = inst_53019);

(statearr_53222[(8)] = inst_53017);

(statearr_53222[(9)] = inst_53016);

(statearr_53222[(10)] = inst_53018);

(statearr_53222[(32)] = inst_53039);

return statearr_53222;
})();
var statearr_53223_53289 = state_53156__$1;
(statearr_53223_53289[(2)] = null);

(statearr_53223_53289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (45))){
var state_53156__$1 = state_53156;
var statearr_53224_53290 = state_53156__$1;
(statearr_53224_53290[(2)] = null);

(statearr_53224_53290[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (26))){
var inst_53075 = (state_53156[(26)]);
var inst_53073 = (state_53156[(23)]);
var inst_53072 = (state_53156[(24)]);
var inst_53069 = (state_53156[(19)]);
var inst_53077 = (state_53156[(25)]);
var inst_53092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53094 = (function (){var all_files = inst_53069;
var res_SINGLEQUOTE_ = inst_53072;
var res = inst_53073;
var files_not_loaded = inst_53075;
var dependencies_that_loaded = inst_53077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53092,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53093){
var map__53225 = p__53093;
var map__53225__$1 = ((((!((map__53225 == null)))?((((map__53225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53225):map__53225);
var namespace = cljs.core.get.call(null,map__53225__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__53225__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53092,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53095 = cljs.core.map.call(null,inst_53094,inst_53073);
var inst_53096 = cljs.core.pr_str.call(null,inst_53095);
var inst_53097 = figwheel.client.utils.log.call(null,inst_53096);
var inst_53098 = (function (){var all_files = inst_53069;
var res_SINGLEQUOTE_ = inst_53072;
var res = inst_53073;
var files_not_loaded = inst_53075;
var dependencies_that_loaded = inst_53077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53092,inst_53094,inst_53095,inst_53096,inst_53097,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53075,inst_53073,inst_53072,inst_53069,inst_53077,inst_53092,inst_53094,inst_53095,inst_53096,inst_53097,state_val_53157,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53099 = setTimeout(inst_53098,(10));
var state_53156__$1 = (function (){var statearr_53227 = state_53156;
(statearr_53227[(33)] = inst_53092);

(statearr_53227[(34)] = inst_53097);

return statearr_53227;
})();
var statearr_53228_53291 = state_53156__$1;
(statearr_53228_53291[(2)] = inst_53099);

(statearr_53228_53291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (16))){
var state_53156__$1 = state_53156;
var statearr_53229_53292 = state_53156__$1;
(statearr_53229_53292[(2)] = reload_dependents);

(statearr_53229_53292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (38))){
var inst_53109 = (state_53156[(16)]);
var inst_53127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53109);
var state_53156__$1 = state_53156;
var statearr_53230_53293 = state_53156__$1;
(statearr_53230_53293[(2)] = inst_53127);

(statearr_53230_53293[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (30))){
var state_53156__$1 = state_53156;
var statearr_53231_53294 = state_53156__$1;
(statearr_53231_53294[(2)] = null);

(statearr_53231_53294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (10))){
var inst_53029 = (state_53156[(22)]);
var inst_53031 = cljs.core.chunked_seq_QMARK_.call(null,inst_53029);
var state_53156__$1 = state_53156;
if(inst_53031){
var statearr_53232_53295 = state_53156__$1;
(statearr_53232_53295[(1)] = (13));

} else {
var statearr_53233_53296 = state_53156__$1;
(statearr_53233_53296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (18))){
var inst_53063 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
if(cljs.core.truth_(inst_53063)){
var statearr_53234_53297 = state_53156__$1;
(statearr_53234_53297[(1)] = (19));

} else {
var statearr_53235_53298 = state_53156__$1;
(statearr_53235_53298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (42))){
var state_53156__$1 = state_53156;
var statearr_53236_53299 = state_53156__$1;
(statearr_53236_53299[(2)] = null);

(statearr_53236_53299[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (37))){
var inst_53122 = (state_53156[(2)]);
var state_53156__$1 = state_53156;
var statearr_53237_53300 = state_53156__$1;
(statearr_53237_53300[(2)] = inst_53122);

(statearr_53237_53300[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53157 === (8))){
var inst_53029 = (state_53156[(22)]);
var inst_53016 = (state_53156[(9)]);
var inst_53029__$1 = cljs.core.seq.call(null,inst_53016);
var state_53156__$1 = (function (){var statearr_53238 = state_53156;
(statearr_53238[(22)] = inst_53029__$1);

return statearr_53238;
})();
if(inst_53029__$1){
var statearr_53239_53301 = state_53156__$1;
(statearr_53239_53301[(1)] = (10));

} else {
var statearr_53240_53302 = state_53156__$1;
(statearr_53240_53302[(1)] = (11));

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
}
});})(c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__49110__auto__,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto____0 = (function (){
var statearr_53241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53241[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto__);

(statearr_53241[(1)] = (1));

return statearr_53241;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto____1 = (function (state_53156){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_53156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e53242){if((e53242 instanceof Object)){
var ex__49114__auto__ = e53242;
var statearr_53243_53303 = state_53156;
(statearr_53243_53303[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53304 = state_53156;
state_53156 = G__53304;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto__ = function(state_53156){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto____1.call(this,state_53156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__49202__auto__ = (function (){var statearr_53244 = f__49201__auto__.call(null);
(statearr_53244[(6)] = c__49200__auto__);

return statearr_53244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__,map__53001,map__53001__$1,opts,before_jsload,on_jsload,reload_dependents,map__53002,map__53002__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__49200__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53307,link){
var map__53308 = p__53307;
var map__53308__$1 = ((((!((map__53308 == null)))?((((map__53308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53308):map__53308);
var file = cljs.core.get.call(null,map__53308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__53308,map__53308__$1,file){
return (function (p1__53305_SHARP_,p2__53306_SHARP_){
if(cljs.core._EQ_.call(null,p1__53305_SHARP_,p2__53306_SHARP_)){
return p1__53305_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__53308,map__53308__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53311){
var map__53312 = p__53311;
var map__53312__$1 = ((((!((map__53312 == null)))?((((map__53312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53312):map__53312);
var match_length = cljs.core.get.call(null,map__53312__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53312__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53310_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53310_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53314_SHARP_,p2__53315_SHARP_){
return cljs.core.assoc.call(null,p1__53314_SHARP_,cljs.core.get.call(null,p2__53315_SHARP_,key),p2__53315_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_53316 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53316);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53316);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53317,p__53318){
var map__53319 = p__53317;
var map__53319__$1 = ((((!((map__53319 == null)))?((((map__53319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53319):map__53319);
var on_cssload = cljs.core.get.call(null,map__53319__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53320 = p__53318;
var map__53320__$1 = ((((!((map__53320 == null)))?((((map__53320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53320):map__53320);
var files_msg = map__53320__$1;
var files = cljs.core.get.call(null,map__53320__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1505037974197
