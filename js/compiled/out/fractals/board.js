// Compiled by ClojureScript 1.9.908 {}
goog.provide('fractals.board');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('clojure.string');
goog.require('fractals.svg');
fractals.board.siblings = (function fractals$board$siblings(state,p__47699){
var vec__47700 = p__47699;
var x = cljs.core.nth.call(null,vec__47700,(0),null);
var y = cljs.core.nth.call(null,vec__47700,(1),null);
var dx = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1),(1)], null);
var dy = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(0),(0)], null);
var dxy = cljs.core.mapv.call(null,((function (dx,dy,vec__47700,x,y){
return (function (x1,y1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + x1),(y + y1)], null);
});})(dx,dy,vec__47700,x,y))
,dx,dy);
var valid_dxy = cljs.core.filterv.call(null,((function (dx,dy,dxy,vec__47700,x,y){
return (function (p__47703){
var vec__47704 = p__47703;
var x2 = cljs.core.nth.call(null,vec__47704,(0),null);
var y2 = cljs.core.nth.call(null,vec__47704,(1),null);
return ((x2 >= (0))) && ((y2 >= (0))) && ((x2 < new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(state))) && ((y2 < new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(state)));
});})(dx,dy,dxy,vec__47700,x,y))
,dxy);
return cljs.core.filterv.call(null,((function (dx,dy,dxy,valid_dxy,vec__47700,x,y){
return (function (p__47707){
var vec__47708 = p__47707;
var x3 = cljs.core.nth.call(null,vec__47708,(0),null);
var y3 = cljs.core.nth.call(null,vec__47708,(1),null);
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),x3,y3], null));
});})(dx,dy,dxy,valid_dxy,vec__47700,x,y))
,valid_dxy);
});
fractals.board.init_field = (function fractals$board$init_field(state){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var cols = new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var xy = (function (){var iter__44688__auto__ = ((function (rows,cols,board){
return (function fractals$board$init_field_$_iter__47711(s__47712){
return (new cljs.core.LazySeq(null,((function (rows,cols,board){
return (function (){
var s__47712__$1 = s__47712;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__47712__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var x = cljs.core.first.call(null,xs__5831__auto__);
var iterys__44684__auto__ = ((function (s__47712__$1,x,xs__5831__auto__,temp__5278__auto__,rows,cols,board){
return (function fractals$board$init_field_$_iter__47711_$_iter__47713(s__47714){
return (new cljs.core.LazySeq(null,((function (s__47712__$1,x,xs__5831__auto__,temp__5278__auto__,rows,cols,board){
return (function (){
var s__47714__$1 = s__47714;
while(true){
var temp__5278__auto____$1 = cljs.core.seq.call(null,s__47714__$1);
if(temp__5278__auto____$1){
var s__47714__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47714__$2)){
var c__44686__auto__ = cljs.core.chunk_first.call(null,s__47714__$2);
var size__44687__auto__ = cljs.core.count.call(null,c__44686__auto__);
var b__47716 = cljs.core.chunk_buffer.call(null,size__44687__auto__);
if((function (){var i__47715 = (0);
while(true){
if((i__47715 < size__44687__auto__)){
var y = cljs.core._nth.call(null,c__44686__auto__,i__47715);
cljs.core.chunk_append.call(null,b__47716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__47733 = (i__47715 + (1));
i__47715 = G__47733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47716),fractals$board$init_field_$_iter__47711_$_iter__47713.call(null,cljs.core.chunk_rest.call(null,s__47714__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47716),null);
}
} else {
var y = cljs.core.first.call(null,s__47714__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),fractals$board$init_field_$_iter__47711_$_iter__47713.call(null,cljs.core.rest.call(null,s__47714__$2)));
}
} else {
return null;
}
break;
}
});})(s__47712__$1,x,xs__5831__auto__,temp__5278__auto__,rows,cols,board))
,null,null));
});})(s__47712__$1,x,xs__5831__auto__,temp__5278__auto__,rows,cols,board))
;
var fs__44685__auto__ = cljs.core.seq.call(null,iterys__44684__auto__.call(null,cljs.core.range.call(null,(0),cols)));
if(fs__44685__auto__){
return cljs.core.concat.call(null,fs__44685__auto__,fractals$board$init_field_$_iter__47711.call(null,cljs.core.rest.call(null,s__47712__$1)));
} else {
var G__47734 = cljs.core.rest.call(null,s__47712__$1);
s__47712__$1 = G__47734;
continue;
}
} else {
return null;
}
break;
}
});})(rows,cols,board))
,null,null));
});})(rows,cols,board))
;
return iter__44688__auto__.call(null,cljs.core.range.call(null,(0),rows));
})();
var max2 = cljs.core.range.call(null,(0),(rows * cols));
var max_field = cljs.core.reduce.call(null,((function (rows,cols,board,xy,max2){
return (function (r,p__47717){
var vec__47718 = p__47717;
var x = cljs.core.nth.call(null,vec__47718,(0),null);
var y = cljs.core.nth.call(null,vec__47718,(1),null);
var v = cljs.core.nth.call(null,vec__47718,(2),null);
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v);
});})(rows,cols,board,xy,max2))
,board,cljs.core.map.call(null,((function (rows,cols,board,xy,max2){
return (function (p__47721,m){
var vec__47722 = p__47721;
var x = cljs.core.nth.call(null,vec__47722,(0),null);
var y = cljs.core.nth.call(null,vec__47722,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,m], null);
});})(rows,cols,board,xy,max2))
,xy,max2));
return cljs.core.reduce.call(null,((function (rows,cols,board,xy,max2,max_field){
return (function (r,p__47725){
var vec__47726 = p__47725;
var x = cljs.core.nth.call(null,vec__47726,(0),null);
var y = cljs.core.nth.call(null,vec__47726,(1),null);
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),x,y], null)))?cljs.core.reduce.call(null,((function (vec__47726,x,y,rows,cols,board,xy,max2,max_field){
return (function (min1,p__47729){
var vec__47730 = p__47729;
var sx1 = cljs.core.nth.call(null,vec__47730,(0),null);
var sy1 = cljs.core.nth.call(null,vec__47730,(1),null);
if((cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx1,sy1], null)) < min1)){
return cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx1,sy1], null));
} else {
return min1;
}
});})(vec__47726,x,y,rows,cols,board,xy,max2,max_field))
,cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),fractals.board.siblings.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))):(-1)));
});})(rows,cols,board,xy,max2,max_field))
,max_field,xy);
});
fractals.board.init_board = (function fractals$board$init_board(state){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var cols = new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return cljs.core.vec.call(null,cljs.core.take.call(null,rows,cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,cols,cljs.core.repeat.call(null,false))))));
});
fractals.board.element = rum.core.build_defc.call(null,(function (state,i,area,bcolor,color){
return React.createElement("div",({"key": ["lyout",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''), "style": ({"gridArea": area, "backgroundColor": bcolor, "color": color, "fontSize": "2rem", "display": "flex", "alignItems": "center", "justifyContent": "center"})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));
}),null,"element");
fractals.board.control = rum.core.build_defc.call(null,(function (state,i,area,bcolor,color){
return React.createElement("div",({"key": ["lyout",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''), "style": ({"gridArea": area, "backgroundColor": bcolor, "color": color, "fontSize": "26px", "display": "flex", "alignItems": "center", "flexDirection": "column", "justifyContent": "center"})}),React.createElement("div",({"style": ({"display": "flex"})}),React.createElement("div",({"style": ({"backgroundColor": "#D9C9BA"}), "onClick": (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null),cljs.core.dec);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),fractals.board.init_board.call(null,state));
})}),sablono.interpreter.interpret.call(null,fractals.svg.logo_lt.call(null))),sablono.interpreter.create_element.call(null,"input",({"type": "text", "style": ({"width": "80px", "height": "40px", "textAlign": "center", "fontSize": "2rem"}), "value": new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state))})),React.createElement("div",({"style": ({"backgroundColor": "#D9C9BA"}), "onClick": (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null),cljs.core.inc);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),fractals.board.init_board.call(null,state));
})}),sablono.interpreter.interpret.call(null,fractals.svg.logo_gt.call(null)))),React.createElement("div",({"style": ({"display": "flex"})}),React.createElement("div",({"style": ({"backgroundColor": "#D9C9BA"}), "onClick": (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cols","cols",-1914801295)], null),cljs.core.dec);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),fractals.board.init_board.call(null,state));
})}),sablono.interpreter.interpret.call(null,fractals.svg.logo_lt.call(null))),sablono.interpreter.create_element.call(null,"input",({"type": "text", "style": ({"width": "80px", "height": "40px", "textAlign": "center", "fontSize": "2rem"}), "value": new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state))})),React.createElement("div",({"style": ({"backgroundColor": "#D9C9BA"}), "onClick": (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cols","cols",-1914801295)], null),cljs.core.inc);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),fractals.board.init_board.call(null,state));
})}),sablono.interpreter.interpret.call(null,fractals.svg.logo_gt.call(null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"control");
fractals.board.board = rum.core.build_defc.call(null,(function (state,i,area,bcolor,color){
return React.createElement("div",({"key": ["lyout",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''), "style": ({"gridArea": area, "backgroundColor": bcolor, "color": color, "display": "grid", "gridTemplateColumns": clojure.string.join.call(null," ",cljs.core.repeat.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state)),"1fr")), "gridGap": "4px"})}),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,(function (p__47735){
var vec__47736 = p__47735;
var e = cljs.core.nth.call(null,vec__47736,(0),null);
var area__$1 = cljs.core.nth.call(null,vec__47736,(1),null);
var cell = cljs.core.get_in.call(null,rum.core.react.call(null,state),e);
var col = (cljs.core.truth_(cell)?new cljs.core.Keyword(null,"zero-col","zero-col",1187553452).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state)):new cljs.core.Keyword(null,"one-col","one-col",-79595445).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["board-",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell,col,vec__47736,e,area__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,e,cljs.core.not.call(null,cell));
});})(cell,col,vec__47736,e,area__$1))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),clojure.string.join.call(null," / ",area__$1),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),col,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null);
}),(function (){var iter__44688__auto__ = (function fractals$board$iter__47739(s__47740){
return (new cljs.core.LazySeq(null,(function (){
var s__47740__$1 = s__47740;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__47740__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var x = cljs.core.first.call(null,xs__5831__auto__);
var iterys__44684__auto__ = ((function (s__47740__$1,x,xs__5831__auto__,temp__5278__auto__){
return (function fractals$board$iter__47739_$_iter__47741(s__47742){
return (new cljs.core.LazySeq(null,((function (s__47740__$1,x,xs__5831__auto__,temp__5278__auto__){
return (function (){
var s__47742__$1 = s__47742;
while(true){
var temp__5278__auto____$1 = cljs.core.seq.call(null,s__47742__$1);
if(temp__5278__auto____$1){
var s__47742__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47742__$2)){
var c__44686__auto__ = cljs.core.chunk_first.call(null,s__47742__$2);
var size__44687__auto__ = cljs.core.count.call(null,c__44686__auto__);
var b__47744 = cljs.core.chunk_buffer.call(null,size__44687__auto__);
if((function (){var i__47743 = (0);
while(true){
if((i__47743 < size__44687__auto__)){
var y = cljs.core._nth.call(null,c__44686__auto__,i__47743);
cljs.core.chunk_append.call(null,b__47744,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),x,y], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1)),(x + (2)),(y + (2))], null)], null));

var G__47745 = (i__47743 + (1));
i__47743 = G__47745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47744),fractals$board$iter__47739_$_iter__47741.call(null,cljs.core.chunk_rest.call(null,s__47742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47744),null);
}
} else {
var y = cljs.core.first.call(null,s__47742__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),x,y], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1)),(x + (2)),(y + (2))], null)], null),fractals$board$iter__47739_$_iter__47741.call(null,cljs.core.rest.call(null,s__47742__$2)));
}
} else {
return null;
}
break;
}
});})(s__47740__$1,x,xs__5831__auto__,temp__5278__auto__))
,null,null));
});})(s__47740__$1,x,xs__5831__auto__,temp__5278__auto__))
;
var fs__44685__auto__ = cljs.core.seq.call(null,iterys__44684__auto__.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state)))));
if(fs__44685__auto__){
return cljs.core.concat.call(null,fs__44685__auto__,fractals$board$iter__47739.call(null,cljs.core.rest.call(null,s__47740__$1)));
} else {
var G__47746 = cljs.core.rest.call(null,s__47740__$1);
s__47740__$1 = G__47746;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44688__auto__.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state))));
})())));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"board");
fractals.board.r_link = rum.core.build_defcs.call(null,(function (state,link,name){
var local_backgroud = new cljs.core.Keyword("fractals.board","bg","fractals.board/bg",1853746565).cljs$core$IFn$_invoke$arity$1(state);
var local_color = new cljs.core.Keyword("fractals.board","cl","fractals.board/cl",-1109949117).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("a",({"onMouseEnter": ((function (local_backgroud,local_color){
return (function (){
cljs.core.reset_BANG_.call(null,local_color,"#333333");

return cljs.core.reset_BANG_.call(null,local_backgroud,"#F1F3F5");
});})(local_backgroud,local_color))
, "onMouseLeave": ((function (local_backgroud,local_color){
return (function (){
cljs.core.reset_BANG_.call(null,local_color,"#F1F3F5");

return cljs.core.reset_BANG_.call(null,local_backgroud,"#333333");
});})(local_backgroud,local_color))
, "style": ({"display": "flex", "color": cljs.core.deref.call(null,local_color), "justifyContent": "center", "alignItems": "center", "textDecoration": "none", "fontSize": "1.4rem", "backgroundColor": cljs.core.deref.call(null,local_backgroud)}), "href": link}),sablono.interpreter.interpret.call(null,name));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,"#333333",new cljs.core.Keyword("fractals.board","bg","fractals.board/bg",1853746565)),rum.core.local.call(null,"#F1F3F5",new cljs.core.Keyword("fractals.board","cl","fractals.board/cl",-1109949117))], null),"r-link");
fractals.board.element_link = rum.core.build_defc.call(null,(function (state,i,area,bcolor,color){
return React.createElement("div",({"key": ["lyout",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''), "style": ({"gridArea": area, "backgroundColor": bcolor, "color": color, "fontSize": "1.2rem", "display": "grid", "gridGap": "2px"})}),sablono.interpreter.interpret.call(null,fractals.board.r_link.call(null,"#/about","R\u00E9sum\u00E9")),sablono.interpreter.interpret.call(null,fractals.board.r_link.call(null,"#/svg","Login")));
}),null,"element-link");
fractals.board.rgba = (function fractals$board$rgba(p1__47747_SHARP_,p2__47748_SHARP_,p3__47749_SHARP_,p4__47750_SHARP_){
return ["rgba","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47747_SHARP_)].join('')),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47748_SHARP_)].join('')),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__47749_SHARP_)].join('')),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p4__47750_SHARP_)].join('')),")"].join('');
});
fractals.board.rgb = (function fractals$board$rgb(p1__47751_SHARP_,p2__47752_SHARP_,p3__47753_SHARP_){
return ["rgb","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47751_SHARP_)].join('')),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47752_SHARP_)].join('')),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__47753_SHARP_)].join('')),")"].join('');
});
fractals.board.color = (function() {
var fractals$board$color = null;
var fractals$board$color__1 = (function (c){
if((c instanceof cljs.core.Keyword)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,c))].join('');
} else {
return null;
}
});
var fractals$board$color__3 = (function (r,g,b){
return fractals.board.rgb.call(null,r,g,b);
});
var fractals$board$color__4 = (function (r,g,b,a){
return fractals.board.rgba.call(null,r,g,b,a);
});
fractals$board$color = function(r,g,b,a){
switch(arguments.length){
case 1:
return fractals$board$color__1.call(this,r);
case 3:
return fractals$board$color__3.call(this,r,g,b);
case 4:
return fractals$board$color__4.call(this,r,g,b,a);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fractals$board$color.cljs$core$IFn$_invoke$arity$1 = fractals$board$color__1;
fractals$board$color.cljs$core$IFn$_invoke$arity$3 = fractals$board$color__3;
fractals$board$color.cljs$core$IFn$_invoke$arity$4 = fractals$board$color__4;
return fractals$board$color;
})()
;
fractals.board.font = (function fractals$board$font(var_args){
var args__45090__auto__ = [];
var len__45083__auto___47756 = arguments.length;
var i__45084__auto___47757 = (0);
while(true){
if((i__45084__auto___47757 < len__45083__auto___47756)){
args__45090__auto__.push((arguments[i__45084__auto___47757]));

var G__47758 = (i__45084__auto___47757 + (1));
i__45084__auto___47757 = G__47758;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((1) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((1)),(0),null)):null);
return fractals.board.font.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45091__auto__);
});

fractals.board.font.cljs$core$IFn$_invoke$arity$variadic = (function (size,fonts){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",fonts))].join('');
});

fractals.board.font.cljs$lang$maxFixedArity = (1);

fractals.board.font.cljs$lang$applyTo = (function (seq47754){
var G__47755 = cljs.core.first.call(null,seq47754);
var seq47754__$1 = cljs.core.next.call(null,seq47754);
return fractals.board.font.cljs$core$IFn$_invoke$arity$variadic(G__47755,seq47754__$1);
});

fractals.board.layout = rum.core.build_defc.call(null,(function (state){
var colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#105B63","#FFD34E","#DB9E36","#BD4932","#FF6138","#FFFF9D","#BEEB9F","#79BD8F","#00A388","#105B63"], null);
var font_colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#7F7F7F","#404040","#333333","#BEA797","#D9C9BA","#F1F3F5","#4B4D5A","#686872","#BFBFBF","#333333"], null);
return React.createElement("div",({"style": ({"display": "grid", "backgroundColor": "#FFFAD5", "gridTemplateColumns": clojure.string.join.call(null," ",cljs.core.repeat.call(null,(8),"1fr")), "gridTemplateRows": clojure.string.join.call(null," ",cljs.core.repeat.call(null,(5),"19.8vh")), "font": fractals.board.font.call(null,"1em/1.4","Roboto","Helvetica Neue","Helvetica","Arial","sans-serif"), "gridGap": ".2vh"})}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (colors,font_colors){
return (function (i,p__47759){
var vec__47760 = p__47759;
var bcolor = cljs.core.nth.call(null,vec__47760,(0),null);
var color = cljs.core.nth.call(null,vec__47760,(1),null);
var area = cljs.core.nth.call(null,vec__47760,(2),null);
var component = cljs.core.nth.call(null,vec__47760,(3),null);
return rum.core.with_key.call(null,component.call(null,state,i,area,bcolor,color),["compoent-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
});})(colors,font_colors))
,cljs.core.take.call(null,(5),cljs.core.map.call(null,((function (colors,font_colors){
return (function (u1,v1,size,w,h,call_back){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,clojure.string.join.call(null," / ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((h - size) + (1)),((w - size) + (1)),(h + (1)),(w + (1))], null)),call_back], null);
});})(colors,font_colors))
,cljs.core.cycle.call(null,colors),cljs.core.cycle.call(null,font_colors),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3),(2),(1),(1)], null)),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(3),(2),(3),(3)], null)),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5),(2),(1),(0)], null)),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [fractals.board.board,fractals.board.control,fractals.board.element,fractals.board.element_link,fractals.board.element], null)))))));
}),null,"layout");

//# sourceMappingURL=board.js.map?rel=1505037970469
