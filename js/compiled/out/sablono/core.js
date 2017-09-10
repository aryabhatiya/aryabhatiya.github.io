// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__46797__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__46794 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__46795 = cljs.core.seq.call(null,vec__46794);
var first__46796 = cljs.core.first.call(null,seq__46795);
var seq__46795__$1 = cljs.core.next.call(null,seq__46795);
var tag = first__46796;
var body = seq__46795__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__46797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46798__i = 0, G__46798__a = new Array(arguments.length -  0);
while (G__46798__i < G__46798__a.length) {G__46798__a[G__46798__i] = arguments[G__46798__i + 0]; ++G__46798__i;}
  args = new cljs.core.IndexedSeq(G__46798__a,0,null);
} 
return G__46797__delegate.call(this,args);};
G__46797.cljs$lang$maxFixedArity = 0;
G__46797.cljs$lang$applyTo = (function (arglist__46799){
var args = cljs.core.seq(arglist__46799);
return G__46797__delegate(args);
});
G__46797.cljs$core$IFn$_invoke$arity$variadic = G__46797__delegate;
return G__46797;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__44688__auto__ = (function sablono$core$update_arglists_$_iter__46800(s__46801){
return (new cljs.core.LazySeq(null,(function (){
var s__46801__$1 = s__46801;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__46801__$1);
if(temp__5278__auto__){
var s__46801__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46801__$2)){
var c__44686__auto__ = cljs.core.chunk_first.call(null,s__46801__$2);
var size__44687__auto__ = cljs.core.count.call(null,c__44686__auto__);
var b__46803 = cljs.core.chunk_buffer.call(null,size__44687__auto__);
if((function (){var i__46802 = (0);
while(true){
if((i__46802 < size__44687__auto__)){
var args = cljs.core._nth.call(null,c__44686__auto__,i__46802);
cljs.core.chunk_append.call(null,b__46803,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__46804 = (i__46802 + (1));
i__46802 = G__46804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46803),sablono$core$update_arglists_$_iter__46800.call(null,cljs.core.chunk_rest.call(null,s__46801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46803),null);
}
} else {
var args = cljs.core.first.call(null,s__46801__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__46800.call(null,cljs.core.rest.call(null,s__46801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44688__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__45090__auto__ = [];
var len__45083__auto___46810 = arguments.length;
var i__45084__auto___46811 = (0);
while(true){
if((i__45084__auto___46811 < len__45083__auto___46810)){
args__45090__auto__.push((arguments[i__45084__auto___46811]));

var G__46812 = (i__45084__auto___46811 + (1));
i__45084__auto___46811 = G__46812;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__44688__auto__ = (function sablono$core$iter__46806(s__46807){
return (new cljs.core.LazySeq(null,(function (){
var s__46807__$1 = s__46807;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__46807__$1);
if(temp__5278__auto__){
var s__46807__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46807__$2)){
var c__44686__auto__ = cljs.core.chunk_first.call(null,s__46807__$2);
var size__44687__auto__ = cljs.core.count.call(null,c__44686__auto__);
var b__46809 = cljs.core.chunk_buffer.call(null,size__44687__auto__);
if((function (){var i__46808 = (0);
while(true){
if((i__46808 < size__44687__auto__)){
var style = cljs.core._nth.call(null,c__44686__auto__,i__46808);
cljs.core.chunk_append.call(null,b__46809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__46813 = (i__46808 + (1));
i__46808 = G__46813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46809),sablono$core$iter__46806.call(null,cljs.core.chunk_rest.call(null,s__46807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46809),null);
}
} else {
var style = cljs.core.first.call(null,s__46807__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__46806.call(null,cljs.core.rest.call(null,s__46807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44688__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq46805){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46805));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to46814 = (function sablono$core$link_to46814(var_args){
var args__45090__auto__ = [];
var len__45083__auto___46817 = arguments.length;
var i__45084__auto___46818 = (0);
while(true){
if((i__45084__auto___46818 < len__45083__auto___46817)){
args__45090__auto__.push((arguments[i__45084__auto___46818]));

var G__46819 = (i__45084__auto___46818 + (1));
i__45084__auto___46818 = G__46819;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((1) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to46814.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45091__auto__);
});

sablono.core.link_to46814.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to46814.cljs$lang$maxFixedArity = (1);

sablono.core.link_to46814.cljs$lang$applyTo = (function (seq46815){
var G__46816 = cljs.core.first.call(null,seq46815);
var seq46815__$1 = cljs.core.next.call(null,seq46815);
return sablono.core.link_to46814.cljs$core$IFn$_invoke$arity$variadic(G__46816,seq46815__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to46814);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to46820 = (function sablono$core$mail_to46820(var_args){
var args__45090__auto__ = [];
var len__45083__auto___46827 = arguments.length;
var i__45084__auto___46828 = (0);
while(true){
if((i__45084__auto___46828 < len__45083__auto___46827)){
args__45090__auto__.push((arguments[i__45084__auto___46828]));

var G__46829 = (i__45084__auto___46828 + (1));
i__45084__auto___46828 = G__46829;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((1) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to46820.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45091__auto__);
});

sablono.core.mail_to46820.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__46823){
var vec__46824 = p__46823;
var content = cljs.core.nth.call(null,vec__46824,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__43806__auto__ = content;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to46820.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to46820.cljs$lang$applyTo = (function (seq46821){
var G__46822 = cljs.core.first.call(null,seq46821);
var seq46821__$1 = cljs.core.next.call(null,seq46821);
return sablono.core.mail_to46820.cljs$core$IFn$_invoke$arity$variadic(G__46822,seq46821__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to46820);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list46830 = (function sablono$core$unordered_list46830(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__44688__auto__ = (function sablono$core$unordered_list46830_$_iter__46831(s__46832){
return (new cljs.core.LazySeq(null,(function (){
var s__46832__$1 = s__46832;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__46832__$1);
if(temp__5278__auto__){
var s__46832__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46832__$2)){
var c__44686__auto__ = cljs.core.chunk_first.call(null,s__46832__$2);
var size__44687__auto__ = cljs.core.count.call(null,c__44686__auto__);
var b__46834 = cljs.core.chunk_buffer.call(null,size__44687__auto__);
if((function (){var i__46833 = (0);
while(true){
if((i__46833 < size__44687__auto__)){
var x = cljs.core._nth.call(null,c__44686__auto__,i__46833);
cljs.core.chunk_append.call(null,b__46834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46835 = (i__46833 + (1));
i__46833 = G__46835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46834),sablono$core$unordered_list46830_$_iter__46831.call(null,cljs.core.chunk_rest.call(null,s__46832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46834),null);
}
} else {
var x = cljs.core.first.call(null,s__46832__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list46830_$_iter__46831.call(null,cljs.core.rest.call(null,s__46832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44688__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list46830);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list46836 = (function sablono$core$ordered_list46836(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__44688__auto__ = (function sablono$core$ordered_list46836_$_iter__46837(s__46838){
return (new cljs.core.LazySeq(null,(function (){
var s__46838__$1 = s__46838;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__46838__$1);
if(temp__5278__auto__){
var s__46838__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46838__$2)){
var c__44686__auto__ = cljs.core.chunk_first.call(null,s__46838__$2);
var size__44687__auto__ = cljs.core.count.call(null,c__44686__auto__);
var b__46840 = cljs.core.chunk_buffer.call(null,size__44687__auto__);
if((function (){var i__46839 = (0);
while(true){
if((i__46839 < size__44687__auto__)){
var x = cljs.core._nth.call(null,c__44686__auto__,i__46839);
cljs.core.chunk_append.call(null,b__46840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46841 = (i__46839 + (1));
i__46839 = G__46841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46840),sablono$core$ordered_list46836_$_iter__46837.call(null,cljs.core.chunk_rest.call(null,s__46838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46840),null);
}
} else {
var x = cljs.core.first.call(null,s__46838__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list46836_$_iter__46837.call(null,cljs.core.rest.call(null,s__46838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44688__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list46836);
/**
 * Create an image element.
 */
sablono.core.image46842 = (function sablono$core$image46842(var_args){
var G__46844 = arguments.length;
switch (G__46844) {
case 1:
return sablono.core.image46842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image46842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image46842.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image46842.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image46842.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image46842);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__46846_SHARP_,p2__46847_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46846_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46847_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__46848_SHARP_,p2__46849_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46848_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46849_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43806__auto__ = value;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field46850 = (function sablono$core$color_field46850(var_args){
var G__46852 = arguments.length;
switch (G__46852) {
case 1:
return sablono.core.color_field46850.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field46850.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field46850.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.color_field46850.call(null,name__46784__auto__,null);
});

sablono.core.color_field46850.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.color_field46850.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field46850);

/**
 * Creates a date input field.
 */
sablono.core.date_field46853 = (function sablono$core$date_field46853(var_args){
var G__46855 = arguments.length;
switch (G__46855) {
case 1:
return sablono.core.date_field46853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field46853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field46853.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.date_field46853.call(null,name__46784__auto__,null);
});

sablono.core.date_field46853.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.date_field46853.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field46853);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field46856 = (function sablono$core$datetime_field46856(var_args){
var G__46858 = arguments.length;
switch (G__46858) {
case 1:
return sablono.core.datetime_field46856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field46856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field46856.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.datetime_field46856.call(null,name__46784__auto__,null);
});

sablono.core.datetime_field46856.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.datetime_field46856.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field46856);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field46859 = (function sablono$core$datetime_local_field46859(var_args){
var G__46861 = arguments.length;
switch (G__46861) {
case 1:
return sablono.core.datetime_local_field46859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field46859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field46859.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.datetime_local_field46859.call(null,name__46784__auto__,null);
});

sablono.core.datetime_local_field46859.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.datetime_local_field46859.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field46859);

/**
 * Creates a email input field.
 */
sablono.core.email_field46862 = (function sablono$core$email_field46862(var_args){
var G__46864 = arguments.length;
switch (G__46864) {
case 1:
return sablono.core.email_field46862.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field46862.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field46862.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.email_field46862.call(null,name__46784__auto__,null);
});

sablono.core.email_field46862.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.email_field46862.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field46862);

/**
 * Creates a file input field.
 */
sablono.core.file_field46865 = (function sablono$core$file_field46865(var_args){
var G__46867 = arguments.length;
switch (G__46867) {
case 1:
return sablono.core.file_field46865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field46865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field46865.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.file_field46865.call(null,name__46784__auto__,null);
});

sablono.core.file_field46865.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.file_field46865.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field46865);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field46868 = (function sablono$core$hidden_field46868(var_args){
var G__46870 = arguments.length;
switch (G__46870) {
case 1:
return sablono.core.hidden_field46868.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field46868.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field46868.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.hidden_field46868.call(null,name__46784__auto__,null);
});

sablono.core.hidden_field46868.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.hidden_field46868.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field46868);

/**
 * Creates a month input field.
 */
sablono.core.month_field46871 = (function sablono$core$month_field46871(var_args){
var G__46873 = arguments.length;
switch (G__46873) {
case 1:
return sablono.core.month_field46871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field46871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field46871.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.month_field46871.call(null,name__46784__auto__,null);
});

sablono.core.month_field46871.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.month_field46871.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field46871);

/**
 * Creates a number input field.
 */
sablono.core.number_field46874 = (function sablono$core$number_field46874(var_args){
var G__46876 = arguments.length;
switch (G__46876) {
case 1:
return sablono.core.number_field46874.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field46874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field46874.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.number_field46874.call(null,name__46784__auto__,null);
});

sablono.core.number_field46874.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.number_field46874.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field46874);

/**
 * Creates a password input field.
 */
sablono.core.password_field46877 = (function sablono$core$password_field46877(var_args){
var G__46879 = arguments.length;
switch (G__46879) {
case 1:
return sablono.core.password_field46877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field46877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field46877.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.password_field46877.call(null,name__46784__auto__,null);
});

sablono.core.password_field46877.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.password_field46877.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field46877);

/**
 * Creates a range input field.
 */
sablono.core.range_field46880 = (function sablono$core$range_field46880(var_args){
var G__46882 = arguments.length;
switch (G__46882) {
case 1:
return sablono.core.range_field46880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field46880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field46880.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.range_field46880.call(null,name__46784__auto__,null);
});

sablono.core.range_field46880.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.range_field46880.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field46880);

/**
 * Creates a search input field.
 */
sablono.core.search_field46883 = (function sablono$core$search_field46883(var_args){
var G__46885 = arguments.length;
switch (G__46885) {
case 1:
return sablono.core.search_field46883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field46883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field46883.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.search_field46883.call(null,name__46784__auto__,null);
});

sablono.core.search_field46883.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.search_field46883.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field46883);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field46886 = (function sablono$core$tel_field46886(var_args){
var G__46888 = arguments.length;
switch (G__46888) {
case 1:
return sablono.core.tel_field46886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field46886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field46886.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.tel_field46886.call(null,name__46784__auto__,null);
});

sablono.core.tel_field46886.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.tel_field46886.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field46886);

/**
 * Creates a text input field.
 */
sablono.core.text_field46889 = (function sablono$core$text_field46889(var_args){
var G__46891 = arguments.length;
switch (G__46891) {
case 1:
return sablono.core.text_field46889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field46889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field46889.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.text_field46889.call(null,name__46784__auto__,null);
});

sablono.core.text_field46889.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.text_field46889.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field46889);

/**
 * Creates a time input field.
 */
sablono.core.time_field46892 = (function sablono$core$time_field46892(var_args){
var G__46894 = arguments.length;
switch (G__46894) {
case 1:
return sablono.core.time_field46892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field46892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field46892.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.time_field46892.call(null,name__46784__auto__,null);
});

sablono.core.time_field46892.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.time_field46892.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field46892);

/**
 * Creates a url input field.
 */
sablono.core.url_field46895 = (function sablono$core$url_field46895(var_args){
var G__46897 = arguments.length;
switch (G__46897) {
case 1:
return sablono.core.url_field46895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field46895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field46895.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.url_field46895.call(null,name__46784__auto__,null);
});

sablono.core.url_field46895.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.url_field46895.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field46895);

/**
 * Creates a week input field.
 */
sablono.core.week_field46898 = (function sablono$core$week_field46898(var_args){
var G__46900 = arguments.length;
switch (G__46900) {
case 1:
return sablono.core.week_field46898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field46898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field46898.cljs$core$IFn$_invoke$arity$1 = (function (name__46784__auto__){
return sablono.core.week_field46898.call(null,name__46784__auto__,null);
});

sablono.core.week_field46898.cljs$core$IFn$_invoke$arity$2 = (function (name__46784__auto__,value__46785__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__46784__auto__,value__46785__auto__);
});

sablono.core.week_field46898.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field46898);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box46918 = (function sablono$core$check_box46918(var_args){
var G__46920 = arguments.length;
switch (G__46920) {
case 1:
return sablono.core.check_box46918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box46918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box46918.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box46918.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box46918.call(null,name,null);
});

sablono.core.check_box46918.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box46918.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box46918.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43806__auto__ = value;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box46918.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box46918);
/**
 * Creates a radio button.
 */
sablono.core.radio_button46922 = (function sablono$core$radio_button46922(var_args){
var G__46924 = arguments.length;
switch (G__46924) {
case 1:
return sablono.core.radio_button46922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button46922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button46922.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button46922.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button46922.call(null,group,null);
});

sablono.core.radio_button46922.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button46922.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button46922.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43806__auto__ = value;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button46922.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button46922);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options46926 = (function sablono$core$select_options46926(coll){
var iter__44688__auto__ = (function sablono$core$select_options46926_$_iter__46927(s__46928){
return (new cljs.core.LazySeq(null,(function (){
var s__46928__$1 = s__46928;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__46928__$1);
if(temp__5278__auto__){
var s__46928__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46928__$2)){
var c__44686__auto__ = cljs.core.chunk_first.call(null,s__46928__$2);
var size__44687__auto__ = cljs.core.count.call(null,c__44686__auto__);
var b__46930 = cljs.core.chunk_buffer.call(null,size__44687__auto__);
if((function (){var i__46929 = (0);
while(true){
if((i__46929 < size__44687__auto__)){
var x = cljs.core._nth.call(null,c__44686__auto__,i__46929);
cljs.core.chunk_append.call(null,b__46930,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__46931 = x;
var text = cljs.core.nth.call(null,vec__46931,(0),null);
var val = cljs.core.nth.call(null,vec__46931,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__46931,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options46926.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__46937 = (i__46929 + (1));
i__46929 = G__46937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46930),sablono$core$select_options46926_$_iter__46927.call(null,cljs.core.chunk_rest.call(null,s__46928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46930),null);
}
} else {
var x = cljs.core.first.call(null,s__46928__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__46934 = x;
var text = cljs.core.nth.call(null,vec__46934,(0),null);
var val = cljs.core.nth.call(null,vec__46934,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__46934,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options46926.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options46926_$_iter__46927.call(null,cljs.core.rest.call(null,s__46928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44688__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options46926);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down46938 = (function sablono$core$drop_down46938(var_args){
var G__46940 = arguments.length;
switch (G__46940) {
case 2:
return sablono.core.drop_down46938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down46938.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down46938.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down46938.call(null,name,options,null);
});

sablono.core.drop_down46938.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down46938.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down46938);
/**
 * Creates a text area element.
 */
sablono.core.text_area46942 = (function sablono$core$text_area46942(var_args){
var G__46944 = arguments.length;
switch (G__46944) {
case 1:
return sablono.core.text_area46942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area46942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area46942.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area46942.call(null,name,null);
});

sablono.core.text_area46942.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43806__auto__ = value;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area46942.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area46942);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label46946 = (function sablono$core$label46946(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label46946);
/**
 * Creates a submit button.
 */
sablono.core.submit_button46947 = (function sablono$core$submit_button46947(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button46947);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button46948 = (function sablono$core$reset_button46948(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button46948);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to46949 = (function sablono$core$form_to46949(var_args){
var args__45090__auto__ = [];
var len__45083__auto___46956 = arguments.length;
var i__45084__auto___46957 = (0);
while(true){
if((i__45084__auto___46957 < len__45083__auto___46956)){
args__45090__auto__.push((arguments[i__45084__auto___46957]));

var G__46958 = (i__45084__auto___46957 + (1));
i__45084__auto___46957 = G__46958;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((1) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to46949.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45091__auto__);
});

sablono.core.form_to46949.cljs$core$IFn$_invoke$arity$variadic = (function (p__46952,body){
var vec__46953 = p__46952;
var method = cljs.core.nth.call(null,vec__46953,(0),null);
var action = cljs.core.nth.call(null,vec__46953,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to46949.cljs$lang$maxFixedArity = (1);

sablono.core.form_to46949.cljs$lang$applyTo = (function (seq46950){
var G__46951 = cljs.core.first.call(null,seq46950);
var seq46950__$1 = cljs.core.next.call(null,seq46950);
return sablono.core.form_to46949.cljs$core$IFn$_invoke$arity$variadic(G__46951,seq46950__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to46949);

//# sourceMappingURL=core.js.map?rel=1505037969869
