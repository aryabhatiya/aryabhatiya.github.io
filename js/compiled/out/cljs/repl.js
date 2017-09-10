// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54435){
var map__54436 = p__54435;
var map__54436__$1 = ((((!((map__54436 == null)))?((((map__54436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54436):map__54436);
var m = map__54436__$1;
var n = cljs.core.get.call(null,map__54436__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__54436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54438_54460 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54439_54461 = null;
var count__54440_54462 = (0);
var i__54441_54463 = (0);
while(true){
if((i__54441_54463 < count__54440_54462)){
var f_54464 = cljs.core._nth.call(null,chunk__54439_54461,i__54441_54463);
cljs.core.println.call(null,"  ",f_54464);

var G__54465 = seq__54438_54460;
var G__54466 = chunk__54439_54461;
var G__54467 = count__54440_54462;
var G__54468 = (i__54441_54463 + (1));
seq__54438_54460 = G__54465;
chunk__54439_54461 = G__54466;
count__54440_54462 = G__54467;
i__54441_54463 = G__54468;
continue;
} else {
var temp__5278__auto___54469 = cljs.core.seq.call(null,seq__54438_54460);
if(temp__5278__auto___54469){
var seq__54438_54470__$1 = temp__5278__auto___54469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54438_54470__$1)){
var c__44737__auto___54471 = cljs.core.chunk_first.call(null,seq__54438_54470__$1);
var G__54472 = cljs.core.chunk_rest.call(null,seq__54438_54470__$1);
var G__54473 = c__44737__auto___54471;
var G__54474 = cljs.core.count.call(null,c__44737__auto___54471);
var G__54475 = (0);
seq__54438_54460 = G__54472;
chunk__54439_54461 = G__54473;
count__54440_54462 = G__54474;
i__54441_54463 = G__54475;
continue;
} else {
var f_54476 = cljs.core.first.call(null,seq__54438_54470__$1);
cljs.core.println.call(null,"  ",f_54476);

var G__54477 = cljs.core.next.call(null,seq__54438_54470__$1);
var G__54478 = null;
var G__54479 = (0);
var G__54480 = (0);
seq__54438_54460 = G__54477;
chunk__54439_54461 = G__54478;
count__54440_54462 = G__54479;
i__54441_54463 = G__54480;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54481 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__43806__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_54481);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_54481)))?cljs.core.second.call(null,arglists_54481):arglists_54481));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54442_54482 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54443_54483 = null;
var count__54444_54484 = (0);
var i__54445_54485 = (0);
while(true){
if((i__54445_54485 < count__54444_54484)){
var vec__54446_54486 = cljs.core._nth.call(null,chunk__54443_54483,i__54445_54485);
var name_54487 = cljs.core.nth.call(null,vec__54446_54486,(0),null);
var map__54449_54488 = cljs.core.nth.call(null,vec__54446_54486,(1),null);
var map__54449_54489__$1 = ((((!((map__54449_54488 == null)))?((((map__54449_54488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54449_54488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54449_54488):map__54449_54488);
var doc_54490 = cljs.core.get.call(null,map__54449_54489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54491 = cljs.core.get.call(null,map__54449_54489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54487);

cljs.core.println.call(null," ",arglists_54491);

if(cljs.core.truth_(doc_54490)){
cljs.core.println.call(null," ",doc_54490);
} else {
}

var G__54492 = seq__54442_54482;
var G__54493 = chunk__54443_54483;
var G__54494 = count__54444_54484;
var G__54495 = (i__54445_54485 + (1));
seq__54442_54482 = G__54492;
chunk__54443_54483 = G__54493;
count__54444_54484 = G__54494;
i__54445_54485 = G__54495;
continue;
} else {
var temp__5278__auto___54496 = cljs.core.seq.call(null,seq__54442_54482);
if(temp__5278__auto___54496){
var seq__54442_54497__$1 = temp__5278__auto___54496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54442_54497__$1)){
var c__44737__auto___54498 = cljs.core.chunk_first.call(null,seq__54442_54497__$1);
var G__54499 = cljs.core.chunk_rest.call(null,seq__54442_54497__$1);
var G__54500 = c__44737__auto___54498;
var G__54501 = cljs.core.count.call(null,c__44737__auto___54498);
var G__54502 = (0);
seq__54442_54482 = G__54499;
chunk__54443_54483 = G__54500;
count__54444_54484 = G__54501;
i__54445_54485 = G__54502;
continue;
} else {
var vec__54451_54503 = cljs.core.first.call(null,seq__54442_54497__$1);
var name_54504 = cljs.core.nth.call(null,vec__54451_54503,(0),null);
var map__54454_54505 = cljs.core.nth.call(null,vec__54451_54503,(1),null);
var map__54454_54506__$1 = ((((!((map__54454_54505 == null)))?((((map__54454_54505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54454_54505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54454_54505):map__54454_54505);
var doc_54507 = cljs.core.get.call(null,map__54454_54506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54508 = cljs.core.get.call(null,map__54454_54506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54504);

cljs.core.println.call(null," ",arglists_54508);

if(cljs.core.truth_(doc_54507)){
cljs.core.println.call(null," ",doc_54507);
} else {
}

var G__54509 = cljs.core.next.call(null,seq__54442_54497__$1);
var G__54510 = null;
var G__54511 = (0);
var G__54512 = (0);
seq__54442_54482 = G__54509;
chunk__54443_54483 = G__54510;
count__54444_54484 = G__54511;
i__54445_54485 = G__54512;
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
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__54456 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54457 = null;
var count__54458 = (0);
var i__54459 = (0);
while(true){
if((i__54459 < count__54458)){
var role = cljs.core._nth.call(null,chunk__54457,i__54459);
var temp__5278__auto___54513__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___54513__$1)){
var spec_54514 = temp__5278__auto___54513__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_54514));
} else {
}

var G__54515 = seq__54456;
var G__54516 = chunk__54457;
var G__54517 = count__54458;
var G__54518 = (i__54459 + (1));
seq__54456 = G__54515;
chunk__54457 = G__54516;
count__54458 = G__54517;
i__54459 = G__54518;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__54456);
if(temp__5278__auto____$1){
var seq__54456__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54456__$1)){
var c__44737__auto__ = cljs.core.chunk_first.call(null,seq__54456__$1);
var G__54519 = cljs.core.chunk_rest.call(null,seq__54456__$1);
var G__54520 = c__44737__auto__;
var G__54521 = cljs.core.count.call(null,c__44737__auto__);
var G__54522 = (0);
seq__54456 = G__54519;
chunk__54457 = G__54520;
count__54458 = G__54521;
i__54459 = G__54522;
continue;
} else {
var role = cljs.core.first.call(null,seq__54456__$1);
var temp__5278__auto___54523__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___54523__$2)){
var spec_54524 = temp__5278__auto___54523__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_54524));
} else {
}

var G__54525 = cljs.core.next.call(null,seq__54456__$1);
var G__54526 = null;
var G__54527 = (0);
var G__54528 = (0);
seq__54456 = G__54525;
chunk__54457 = G__54526;
count__54458 = G__54527;
i__54459 = G__54528;
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

//# sourceMappingURL=repl.js.map?rel=1505037975361
