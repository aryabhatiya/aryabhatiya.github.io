// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e54723){if((e54723 instanceof Error)){
var e = e54723;
return "Error: Unable to stringify";
} else {
throw e54723;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__54726 = arguments.length;
switch (G__54726) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__54724_SHARP_){
if(typeof p1__54724_SHARP_ === 'string'){
return p1__54724_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__54724_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45090__auto__ = [];
var len__45083__auto___54729 = arguments.length;
var i__45084__auto___54730 = (0);
while(true){
if((i__45084__auto___54730 < len__45083__auto___54729)){
args__45090__auto__.push((arguments[i__45084__auto___54730]));

var G__54731 = (i__45084__auto___54730 + (1));
i__45084__auto___54730 = G__54731;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54728){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54728));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45090__auto__ = [];
var len__45083__auto___54733 = arguments.length;
var i__45084__auto___54734 = (0);
while(true){
if((i__45084__auto___54734 < len__45083__auto___54733)){
args__45090__auto__.push((arguments[i__45084__auto___54734]));

var G__54735 = (i__45084__auto___54734 + (1));
i__45084__auto___54734 = G__54735;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54732){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54732));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54736){
var map__54737 = p__54736;
var map__54737__$1 = ((((!((map__54737 == null)))?((((map__54737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54737):map__54737);
var message = cljs.core.get.call(null,map__54737__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54737__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__43806__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__43794__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__43794__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__43794__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__49200__auto___54816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___54816,ch){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___54816,ch){
return (function (state_54788){
var state_val_54789 = (state_54788[(1)]);
if((state_val_54789 === (7))){
var inst_54784 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54790_54817 = state_54788__$1;
(statearr_54790_54817[(2)] = inst_54784);

(statearr_54790_54817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (1))){
var state_54788__$1 = state_54788;
var statearr_54791_54818 = state_54788__$1;
(statearr_54791_54818[(2)] = null);

(statearr_54791_54818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (4))){
var inst_54741 = (state_54788[(7)]);
var inst_54741__$1 = (state_54788[(2)]);
var state_54788__$1 = (function (){var statearr_54792 = state_54788;
(statearr_54792[(7)] = inst_54741__$1);

return statearr_54792;
})();
if(cljs.core.truth_(inst_54741__$1)){
var statearr_54793_54819 = state_54788__$1;
(statearr_54793_54819[(1)] = (5));

} else {
var statearr_54794_54820 = state_54788__$1;
(statearr_54794_54820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (15))){
var inst_54748 = (state_54788[(8)]);
var inst_54763 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54748);
var inst_54764 = cljs.core.first.call(null,inst_54763);
var inst_54765 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54764);
var inst_54766 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54765)].join('');
var inst_54767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54766);
var state_54788__$1 = state_54788;
var statearr_54795_54821 = state_54788__$1;
(statearr_54795_54821[(2)] = inst_54767);

(statearr_54795_54821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (13))){
var inst_54772 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54796_54822 = state_54788__$1;
(statearr_54796_54822[(2)] = inst_54772);

(statearr_54796_54822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (6))){
var state_54788__$1 = state_54788;
var statearr_54797_54823 = state_54788__$1;
(statearr_54797_54823[(2)] = null);

(statearr_54797_54823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (17))){
var inst_54770 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54798_54824 = state_54788__$1;
(statearr_54798_54824[(2)] = inst_54770);

(statearr_54798_54824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (3))){
var inst_54786 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54788__$1,inst_54786);
} else {
if((state_val_54789 === (12))){
var inst_54747 = (state_54788[(9)]);
var inst_54761 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54747,opts);
var state_54788__$1 = state_54788;
if(cljs.core.truth_(inst_54761)){
var statearr_54799_54825 = state_54788__$1;
(statearr_54799_54825[(1)] = (15));

} else {
var statearr_54800_54826 = state_54788__$1;
(statearr_54800_54826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (2))){
var state_54788__$1 = state_54788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54788__$1,(4),ch);
} else {
if((state_val_54789 === (11))){
var inst_54748 = (state_54788[(8)]);
var inst_54753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54754 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54748);
var inst_54755 = cljs.core.async.timeout.call(null,(1000));
var inst_54756 = [inst_54754,inst_54755];
var inst_54757 = (new cljs.core.PersistentVector(null,2,(5),inst_54753,inst_54756,null));
var state_54788__$1 = state_54788;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54788__$1,(14),inst_54757);
} else {
if((state_val_54789 === (9))){
var inst_54748 = (state_54788[(8)]);
var inst_54774 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54775 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54748);
var inst_54776 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54775);
var inst_54777 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54776)].join('');
var inst_54778 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54777);
var state_54788__$1 = (function (){var statearr_54801 = state_54788;
(statearr_54801[(10)] = inst_54774);

return statearr_54801;
})();
var statearr_54802_54827 = state_54788__$1;
(statearr_54802_54827[(2)] = inst_54778);

(statearr_54802_54827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (5))){
var inst_54741 = (state_54788[(7)]);
var inst_54743 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54744 = (new cljs.core.PersistentArrayMap(null,2,inst_54743,null));
var inst_54745 = (new cljs.core.PersistentHashSet(null,inst_54744,null));
var inst_54746 = figwheel.client.focus_msgs.call(null,inst_54745,inst_54741);
var inst_54747 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54746);
var inst_54748 = cljs.core.first.call(null,inst_54746);
var inst_54749 = figwheel.client.autoload_QMARK_.call(null);
var state_54788__$1 = (function (){var statearr_54803 = state_54788;
(statearr_54803[(8)] = inst_54748);

(statearr_54803[(9)] = inst_54747);

return statearr_54803;
})();
if(cljs.core.truth_(inst_54749)){
var statearr_54804_54828 = state_54788__$1;
(statearr_54804_54828[(1)] = (8));

} else {
var statearr_54805_54829 = state_54788__$1;
(statearr_54805_54829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (14))){
var inst_54759 = (state_54788[(2)]);
var state_54788__$1 = state_54788;
var statearr_54806_54830 = state_54788__$1;
(statearr_54806_54830[(2)] = inst_54759);

(statearr_54806_54830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (16))){
var state_54788__$1 = state_54788;
var statearr_54807_54831 = state_54788__$1;
(statearr_54807_54831[(2)] = null);

(statearr_54807_54831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (10))){
var inst_54780 = (state_54788[(2)]);
var state_54788__$1 = (function (){var statearr_54808 = state_54788;
(statearr_54808[(11)] = inst_54780);

return statearr_54808;
})();
var statearr_54809_54832 = state_54788__$1;
(statearr_54809_54832[(2)] = null);

(statearr_54809_54832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54789 === (8))){
var inst_54747 = (state_54788[(9)]);
var inst_54751 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54747,opts);
var state_54788__$1 = state_54788;
if(cljs.core.truth_(inst_54751)){
var statearr_54810_54833 = state_54788__$1;
(statearr_54810_54833[(1)] = (11));

} else {
var statearr_54811_54834 = state_54788__$1;
(statearr_54811_54834[(1)] = (12));

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
});})(c__49200__auto___54816,ch))
;
return ((function (switch__49110__auto__,c__49200__auto___54816,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__49111__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__49111__auto____0 = (function (){
var statearr_54812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54812[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__49111__auto__);

(statearr_54812[(1)] = (1));

return statearr_54812;
});
var figwheel$client$file_reloader_plugin_$_state_machine__49111__auto____1 = (function (state_54788){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_54788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e54813){if((e54813 instanceof Object)){
var ex__49114__auto__ = e54813;
var statearr_54814_54835 = state_54788;
(statearr_54814_54835[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54836 = state_54788;
state_54788 = G__54836;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__49111__auto__ = function(state_54788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__49111__auto____1.call(this,state_54788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__49111__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__49111__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___54816,ch))
})();
var state__49202__auto__ = (function (){var statearr_54815 = f__49201__auto__.call(null);
(statearr_54815[(6)] = c__49200__auto___54816);

return statearr_54815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___54816,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54837_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54837_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54839 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54839){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54838){if((e54838 instanceof Error)){
var e = e54838;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54839], null));
} else {
var e = e54838;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54839))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54840){
var map__54841 = p__54840;
var map__54841__$1 = ((((!((map__54841 == null)))?((((map__54841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54841):map__54841);
var opts = map__54841__$1;
var build_id = cljs.core.get.call(null,map__54841__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54841,map__54841__$1,opts,build_id){
return (function (p__54843){
var vec__54844 = p__54843;
var seq__54845 = cljs.core.seq.call(null,vec__54844);
var first__54846 = cljs.core.first.call(null,seq__54845);
var seq__54845__$1 = cljs.core.next.call(null,seq__54845);
var map__54847 = first__54846;
var map__54847__$1 = ((((!((map__54847 == null)))?((((map__54847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54847):map__54847);
var msg = map__54847__$1;
var msg_name = cljs.core.get.call(null,map__54847__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54845__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54844,seq__54845,first__54846,seq__54845__$1,map__54847,map__54847__$1,msg,msg_name,_,map__54841,map__54841__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54844,seq__54845,first__54846,seq__54845__$1,map__54847,map__54847__$1,msg,msg_name,_,map__54841,map__54841__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54841,map__54841__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54849){
var vec__54850 = p__54849;
var seq__54851 = cljs.core.seq.call(null,vec__54850);
var first__54852 = cljs.core.first.call(null,seq__54851);
var seq__54851__$1 = cljs.core.next.call(null,seq__54851);
var map__54853 = first__54852;
var map__54853__$1 = ((((!((map__54853 == null)))?((((map__54853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54853):map__54853);
var msg = map__54853__$1;
var msg_name = cljs.core.get.call(null,map__54853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54851__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54855){
var map__54856 = p__54855;
var map__54856__$1 = ((((!((map__54856 == null)))?((((map__54856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54856):map__54856);
var on_compile_warning = cljs.core.get.call(null,map__54856__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54856__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54856,map__54856__$1,on_compile_warning,on_compile_fail){
return (function (p__54858){
var vec__54859 = p__54858;
var seq__54860 = cljs.core.seq.call(null,vec__54859);
var first__54861 = cljs.core.first.call(null,seq__54860);
var seq__54860__$1 = cljs.core.next.call(null,seq__54860);
var map__54862 = first__54861;
var map__54862__$1 = ((((!((map__54862 == null)))?((((map__54862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54862):map__54862);
var msg = map__54862__$1;
var msg_name = cljs.core.get.call(null,map__54862__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54860__$1;
var pred__54864 = cljs.core._EQ_;
var expr__54865 = msg_name;
if(cljs.core.truth_(pred__54864.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54865))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54864.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54865))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54856,map__54856__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__,msg_hist,msg_names,msg){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__,msg_hist,msg_names,msg){
return (function (state_54954){
var state_val_54955 = (state_54954[(1)]);
if((state_val_54955 === (7))){
var inst_54874 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54874)){
var statearr_54956_55003 = state_54954__$1;
(statearr_54956_55003[(1)] = (8));

} else {
var statearr_54957_55004 = state_54954__$1;
(statearr_54957_55004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (20))){
var inst_54948 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54958_55005 = state_54954__$1;
(statearr_54958_55005[(2)] = inst_54948);

(statearr_54958_55005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (27))){
var inst_54944 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54959_55006 = state_54954__$1;
(statearr_54959_55006[(2)] = inst_54944);

(statearr_54959_55006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (1))){
var inst_54867 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54867)){
var statearr_54960_55007 = state_54954__$1;
(statearr_54960_55007[(1)] = (2));

} else {
var statearr_54961_55008 = state_54954__$1;
(statearr_54961_55008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (24))){
var inst_54946 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54962_55009 = state_54954__$1;
(statearr_54962_55009[(2)] = inst_54946);

(statearr_54962_55009[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (4))){
var inst_54952 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54954__$1,inst_54952);
} else {
if((state_val_54955 === (15))){
var inst_54950 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54963_55010 = state_54954__$1;
(statearr_54963_55010[(2)] = inst_54950);

(statearr_54963_55010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (21))){
var inst_54903 = (state_54954[(2)]);
var inst_54904 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54905 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54904);
var state_54954__$1 = (function (){var statearr_54964 = state_54954;
(statearr_54964[(7)] = inst_54903);

return statearr_54964;
})();
var statearr_54965_55011 = state_54954__$1;
(statearr_54965_55011[(2)] = inst_54905);

(statearr_54965_55011[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (31))){
var inst_54933 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54933)){
var statearr_54966_55012 = state_54954__$1;
(statearr_54966_55012[(1)] = (34));

} else {
var statearr_54967_55013 = state_54954__$1;
(statearr_54967_55013[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (32))){
var inst_54942 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54968_55014 = state_54954__$1;
(statearr_54968_55014[(2)] = inst_54942);

(statearr_54968_55014[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (33))){
var inst_54929 = (state_54954[(2)]);
var inst_54930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54931 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54930);
var state_54954__$1 = (function (){var statearr_54969 = state_54954;
(statearr_54969[(8)] = inst_54929);

return statearr_54969;
})();
var statearr_54970_55015 = state_54954__$1;
(statearr_54970_55015[(2)] = inst_54931);

(statearr_54970_55015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (13))){
var inst_54888 = figwheel.client.heads_up.clear.call(null);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(16),inst_54888);
} else {
if((state_val_54955 === (22))){
var inst_54909 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54910 = figwheel.client.heads_up.append_warning_message.call(null,inst_54909);
var state_54954__$1 = state_54954;
var statearr_54971_55016 = state_54954__$1;
(statearr_54971_55016[(2)] = inst_54910);

(statearr_54971_55016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (36))){
var inst_54940 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54972_55017 = state_54954__$1;
(statearr_54972_55017[(2)] = inst_54940);

(statearr_54972_55017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (29))){
var inst_54920 = (state_54954[(2)]);
var inst_54921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54922 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54921);
var state_54954__$1 = (function (){var statearr_54973 = state_54954;
(statearr_54973[(9)] = inst_54920);

return statearr_54973;
})();
var statearr_54974_55018 = state_54954__$1;
(statearr_54974_55018[(2)] = inst_54922);

(statearr_54974_55018[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (6))){
var inst_54869 = (state_54954[(10)]);
var state_54954__$1 = state_54954;
var statearr_54975_55019 = state_54954__$1;
(statearr_54975_55019[(2)] = inst_54869);

(statearr_54975_55019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (28))){
var inst_54916 = (state_54954[(2)]);
var inst_54917 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54918 = figwheel.client.heads_up.display_warning.call(null,inst_54917);
var state_54954__$1 = (function (){var statearr_54976 = state_54954;
(statearr_54976[(11)] = inst_54916);

return statearr_54976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(29),inst_54918);
} else {
if((state_val_54955 === (25))){
var inst_54914 = figwheel.client.heads_up.clear.call(null);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(28),inst_54914);
} else {
if((state_val_54955 === (34))){
var inst_54935 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(37),inst_54935);
} else {
if((state_val_54955 === (17))){
var inst_54894 = (state_54954[(2)]);
var inst_54895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54896 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54895);
var state_54954__$1 = (function (){var statearr_54977 = state_54954;
(statearr_54977[(12)] = inst_54894);

return statearr_54977;
})();
var statearr_54978_55020 = state_54954__$1;
(statearr_54978_55020[(2)] = inst_54896);

(statearr_54978_55020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (3))){
var inst_54886 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54886)){
var statearr_54979_55021 = state_54954__$1;
(statearr_54979_55021[(1)] = (13));

} else {
var statearr_54980_55022 = state_54954__$1;
(statearr_54980_55022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (12))){
var inst_54882 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54981_55023 = state_54954__$1;
(statearr_54981_55023[(2)] = inst_54882);

(statearr_54981_55023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (2))){
var inst_54869 = (state_54954[(10)]);
var inst_54869__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54954__$1 = (function (){var statearr_54982 = state_54954;
(statearr_54982[(10)] = inst_54869__$1);

return statearr_54982;
})();
if(cljs.core.truth_(inst_54869__$1)){
var statearr_54983_55024 = state_54954__$1;
(statearr_54983_55024[(1)] = (5));

} else {
var statearr_54984_55025 = state_54954__$1;
(statearr_54984_55025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (23))){
var inst_54912 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54912)){
var statearr_54985_55026 = state_54954__$1;
(statearr_54985_55026[(1)] = (25));

} else {
var statearr_54986_55027 = state_54954__$1;
(statearr_54986_55027[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (35))){
var state_54954__$1 = state_54954;
var statearr_54987_55028 = state_54954__$1;
(statearr_54987_55028[(2)] = null);

(statearr_54987_55028[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (19))){
var inst_54907 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54907)){
var statearr_54988_55029 = state_54954__$1;
(statearr_54988_55029[(1)] = (22));

} else {
var statearr_54989_55030 = state_54954__$1;
(statearr_54989_55030[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (11))){
var inst_54878 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54990_55031 = state_54954__$1;
(statearr_54990_55031[(2)] = inst_54878);

(statearr_54990_55031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (9))){
var inst_54880 = figwheel.client.heads_up.clear.call(null);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(12),inst_54880);
} else {
if((state_val_54955 === (5))){
var inst_54871 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54954__$1 = state_54954;
var statearr_54991_55032 = state_54954__$1;
(statearr_54991_55032[(2)] = inst_54871);

(statearr_54991_55032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (14))){
var inst_54898 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54898)){
var statearr_54992_55033 = state_54954__$1;
(statearr_54992_55033[(1)] = (18));

} else {
var statearr_54993_55034 = state_54954__$1;
(statearr_54993_55034[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (26))){
var inst_54924 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54954__$1 = state_54954;
if(cljs.core.truth_(inst_54924)){
var statearr_54994_55035 = state_54954__$1;
(statearr_54994_55035[(1)] = (30));

} else {
var statearr_54995_55036 = state_54954__$1;
(statearr_54995_55036[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (16))){
var inst_54890 = (state_54954[(2)]);
var inst_54891 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54892 = figwheel.client.heads_up.display_exception.call(null,inst_54891);
var state_54954__$1 = (function (){var statearr_54996 = state_54954;
(statearr_54996[(13)] = inst_54890);

return statearr_54996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(17),inst_54892);
} else {
if((state_val_54955 === (30))){
var inst_54926 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54927 = figwheel.client.heads_up.display_warning.call(null,inst_54926);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(33),inst_54927);
} else {
if((state_val_54955 === (10))){
var inst_54884 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54997_55037 = state_54954__$1;
(statearr_54997_55037[(2)] = inst_54884);

(statearr_54997_55037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (18))){
var inst_54900 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54901 = figwheel.client.heads_up.display_exception.call(null,inst_54900);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(21),inst_54901);
} else {
if((state_val_54955 === (37))){
var inst_54937 = (state_54954[(2)]);
var state_54954__$1 = state_54954;
var statearr_54998_55038 = state_54954__$1;
(statearr_54998_55038[(2)] = inst_54937);

(statearr_54998_55038[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54955 === (8))){
var inst_54876 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54954__$1 = state_54954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54954__$1,(11),inst_54876);
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
});})(c__49200__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__49110__auto__,c__49200__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto____0 = (function (){
var statearr_54999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54999[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto__);

(statearr_54999[(1)] = (1));

return statearr_54999;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto____1 = (function (state_54954){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_54954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e55000){if((e55000 instanceof Object)){
var ex__49114__auto__ = e55000;
var statearr_55001_55039 = state_54954;
(statearr_55001_55039[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55040 = state_54954;
state_54954 = G__55040;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto__ = function(state_54954){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto____1.call(this,state_54954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__,msg_hist,msg_names,msg))
})();
var state__49202__auto__ = (function (){var statearr_55002 = f__49201__auto__.call(null);
(statearr_55002[(6)] = c__49200__auto__);

return statearr_55002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__,msg_hist,msg_names,msg))
);

return c__49200__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__49200__auto___55069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___55069,ch){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___55069,ch){
return (function (state_55055){
var state_val_55056 = (state_55055[(1)]);
if((state_val_55056 === (1))){
var state_55055__$1 = state_55055;
var statearr_55057_55070 = state_55055__$1;
(statearr_55057_55070[(2)] = null);

(statearr_55057_55070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (2))){
var state_55055__$1 = state_55055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55055__$1,(4),ch);
} else {
if((state_val_55056 === (3))){
var inst_55053 = (state_55055[(2)]);
var state_55055__$1 = state_55055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55055__$1,inst_55053);
} else {
if((state_val_55056 === (4))){
var inst_55043 = (state_55055[(7)]);
var inst_55043__$1 = (state_55055[(2)]);
var state_55055__$1 = (function (){var statearr_55058 = state_55055;
(statearr_55058[(7)] = inst_55043__$1);

return statearr_55058;
})();
if(cljs.core.truth_(inst_55043__$1)){
var statearr_55059_55071 = state_55055__$1;
(statearr_55059_55071[(1)] = (5));

} else {
var statearr_55060_55072 = state_55055__$1;
(statearr_55060_55072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (5))){
var inst_55043 = (state_55055[(7)]);
var inst_55045 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_55043);
var state_55055__$1 = state_55055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55055__$1,(8),inst_55045);
} else {
if((state_val_55056 === (6))){
var state_55055__$1 = state_55055;
var statearr_55061_55073 = state_55055__$1;
(statearr_55061_55073[(2)] = null);

(statearr_55061_55073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (7))){
var inst_55051 = (state_55055[(2)]);
var state_55055__$1 = state_55055;
var statearr_55062_55074 = state_55055__$1;
(statearr_55062_55074[(2)] = inst_55051);

(statearr_55062_55074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55056 === (8))){
var inst_55047 = (state_55055[(2)]);
var state_55055__$1 = (function (){var statearr_55063 = state_55055;
(statearr_55063[(8)] = inst_55047);

return statearr_55063;
})();
var statearr_55064_55075 = state_55055__$1;
(statearr_55064_55075[(2)] = null);

(statearr_55064_55075[(1)] = (2));


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
});})(c__49200__auto___55069,ch))
;
return ((function (switch__49110__auto__,c__49200__auto___55069,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__49111__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__49111__auto____0 = (function (){
var statearr_55065 = [null,null,null,null,null,null,null,null,null];
(statearr_55065[(0)] = figwheel$client$heads_up_plugin_$_state_machine__49111__auto__);

(statearr_55065[(1)] = (1));

return statearr_55065;
});
var figwheel$client$heads_up_plugin_$_state_machine__49111__auto____1 = (function (state_55055){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_55055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e55066){if((e55066 instanceof Object)){
var ex__49114__auto__ = e55066;
var statearr_55067_55076 = state_55055;
(statearr_55067_55076[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55077 = state_55055;
state_55055 = G__55077;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__49111__auto__ = function(state_55055){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__49111__auto____1.call(this,state_55055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__49111__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__49111__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___55069,ch))
})();
var state__49202__auto__ = (function (){var statearr_55068 = f__49201__auto__.call(null);
(statearr_55068[(6)] = c__49200__auto___55069);

return statearr_55068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___55069,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__){
return (function (state_55083){
var state_val_55084 = (state_55083[(1)]);
if((state_val_55084 === (1))){
var inst_55078 = cljs.core.async.timeout.call(null,(3000));
var state_55083__$1 = state_55083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55083__$1,(2),inst_55078);
} else {
if((state_val_55084 === (2))){
var inst_55080 = (state_55083[(2)]);
var inst_55081 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55083__$1 = (function (){var statearr_55085 = state_55083;
(statearr_55085[(7)] = inst_55080);

return statearr_55085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55083__$1,inst_55081);
} else {
return null;
}
}
});})(c__49200__auto__))
;
return ((function (switch__49110__auto__,c__49200__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__49111__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__49111__auto____0 = (function (){
var statearr_55086 = [null,null,null,null,null,null,null,null];
(statearr_55086[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__49111__auto__);

(statearr_55086[(1)] = (1));

return statearr_55086;
});
var figwheel$client$enforce_project_plugin_$_state_machine__49111__auto____1 = (function (state_55083){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_55083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e55087){if((e55087 instanceof Object)){
var ex__49114__auto__ = e55087;
var statearr_55088_55090 = state_55083;
(statearr_55088_55090[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55091 = state_55083;
state_55083 = G__55091;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__49111__auto__ = function(state_55083){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__49111__auto____1.call(this,state_55083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__49111__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__49111__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__))
})();
var state__49202__auto__ = (function (){var statearr_55089 = f__49201__auto__.call(null);
(statearr_55089[(6)] = c__49200__auto__);

return statearr_55089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__))
);

return c__49200__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__,figwheel_version,temp__5278__auto__){
return (function (state_55098){
var state_val_55099 = (state_55098[(1)]);
if((state_val_55099 === (1))){
var inst_55092 = cljs.core.async.timeout.call(null,(2000));
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(2),inst_55092);
} else {
if((state_val_55099 === (2))){
var inst_55094 = (state_55098[(2)]);
var inst_55095 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_55096 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55095);
var state_55098__$1 = (function (){var statearr_55100 = state_55098;
(statearr_55100[(7)] = inst_55094);

return statearr_55100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55098__$1,inst_55096);
} else {
return null;
}
}
});})(c__49200__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__49110__auto__,c__49200__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto____0 = (function (){
var statearr_55101 = [null,null,null,null,null,null,null,null];
(statearr_55101[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto__);

(statearr_55101[(1)] = (1));

return statearr_55101;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto____1 = (function (state_55098){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_55098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e55102){if((e55102 instanceof Object)){
var ex__49114__auto__ = e55102;
var statearr_55103_55105 = state_55098;
(statearr_55103_55105[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55106 = state_55098;
state_55098 = G__55106;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto__ = function(state_55098){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto____1.call(this,state_55098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__,figwheel_version,temp__5278__auto__))
})();
var state__49202__auto__ = (function (){var statearr_55104 = f__49201__auto__.call(null);
(statearr_55104[(6)] = c__49200__auto__);

return statearr_55104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__,figwheel_version,temp__5278__auto__))
);

return c__49200__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55107){
var map__55108 = p__55107;
var map__55108__$1 = ((((!((map__55108 == null)))?((((map__55108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55108):map__55108);
var file = cljs.core.get.call(null,map__55108__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55108__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55108__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55110 = "";
var G__55110__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55110),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__55110);
var G__55110__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55110__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__55110__$1);
if(cljs.core.truth_((function (){var and__43794__auto__ = line;
if(cljs.core.truth_(and__43794__auto__)){
return column;
} else {
return and__43794__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55110__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__55110__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55111){
var map__55112 = p__55111;
var map__55112__$1 = ((((!((map__55112 == null)))?((((map__55112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55112):map__55112);
var ed = map__55112__$1;
var formatted_exception = cljs.core.get.call(null,map__55112__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55112__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55112__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55114_55118 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55115_55119 = null;
var count__55116_55120 = (0);
var i__55117_55121 = (0);
while(true){
if((i__55117_55121 < count__55116_55120)){
var msg_55122 = cljs.core._nth.call(null,chunk__55115_55119,i__55117_55121);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55122);

var G__55123 = seq__55114_55118;
var G__55124 = chunk__55115_55119;
var G__55125 = count__55116_55120;
var G__55126 = (i__55117_55121 + (1));
seq__55114_55118 = G__55123;
chunk__55115_55119 = G__55124;
count__55116_55120 = G__55125;
i__55117_55121 = G__55126;
continue;
} else {
var temp__5278__auto___55127 = cljs.core.seq.call(null,seq__55114_55118);
if(temp__5278__auto___55127){
var seq__55114_55128__$1 = temp__5278__auto___55127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55114_55128__$1)){
var c__44737__auto___55129 = cljs.core.chunk_first.call(null,seq__55114_55128__$1);
var G__55130 = cljs.core.chunk_rest.call(null,seq__55114_55128__$1);
var G__55131 = c__44737__auto___55129;
var G__55132 = cljs.core.count.call(null,c__44737__auto___55129);
var G__55133 = (0);
seq__55114_55118 = G__55130;
chunk__55115_55119 = G__55131;
count__55116_55120 = G__55132;
i__55117_55121 = G__55133;
continue;
} else {
var msg_55134 = cljs.core.first.call(null,seq__55114_55128__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55134);

var G__55135 = cljs.core.next.call(null,seq__55114_55128__$1);
var G__55136 = null;
var G__55137 = (0);
var G__55138 = (0);
seq__55114_55118 = G__55135;
chunk__55115_55119 = G__55136;
count__55116_55120 = G__55137;
i__55117_55121 = G__55138;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55139){
var map__55140 = p__55139;
var map__55140__$1 = ((((!((map__55140 == null)))?((((map__55140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55140):map__55140);
var w = map__55140__$1;
var message = cljs.core.get.call(null,map__55140__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__43794__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__43794__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__43794__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__55142 = cljs.core.seq.call(null,plugins);
var chunk__55143 = null;
var count__55144 = (0);
var i__55145 = (0);
while(true){
if((i__55145 < count__55144)){
var vec__55146 = cljs.core._nth.call(null,chunk__55143,i__55145);
var k = cljs.core.nth.call(null,vec__55146,(0),null);
var plugin = cljs.core.nth.call(null,vec__55146,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55152 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55142,chunk__55143,count__55144,i__55145,pl_55152,vec__55146,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55152.call(null,msg_hist);
});})(seq__55142,chunk__55143,count__55144,i__55145,pl_55152,vec__55146,k,plugin))
);
} else {
}

var G__55153 = seq__55142;
var G__55154 = chunk__55143;
var G__55155 = count__55144;
var G__55156 = (i__55145 + (1));
seq__55142 = G__55153;
chunk__55143 = G__55154;
count__55144 = G__55155;
i__55145 = G__55156;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__55142);
if(temp__5278__auto__){
var seq__55142__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55142__$1)){
var c__44737__auto__ = cljs.core.chunk_first.call(null,seq__55142__$1);
var G__55157 = cljs.core.chunk_rest.call(null,seq__55142__$1);
var G__55158 = c__44737__auto__;
var G__55159 = cljs.core.count.call(null,c__44737__auto__);
var G__55160 = (0);
seq__55142 = G__55157;
chunk__55143 = G__55158;
count__55144 = G__55159;
i__55145 = G__55160;
continue;
} else {
var vec__55149 = cljs.core.first.call(null,seq__55142__$1);
var k = cljs.core.nth.call(null,vec__55149,(0),null);
var plugin = cljs.core.nth.call(null,vec__55149,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55161 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55142,chunk__55143,count__55144,i__55145,pl_55161,vec__55149,k,plugin,seq__55142__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55161.call(null,msg_hist);
});})(seq__55142,chunk__55143,count__55144,i__55145,pl_55161,vec__55149,k,plugin,seq__55142__$1,temp__5278__auto__))
);
} else {
}

var G__55162 = cljs.core.next.call(null,seq__55142__$1);
var G__55163 = null;
var G__55164 = (0);
var G__55165 = (0);
seq__55142 = G__55162;
chunk__55143 = G__55163;
count__55144 = G__55164;
i__55145 = G__55165;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__55167 = arguments.length;
switch (G__55167) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55168_55173 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55169_55174 = null;
var count__55170_55175 = (0);
var i__55171_55176 = (0);
while(true){
if((i__55171_55176 < count__55170_55175)){
var msg_55177 = cljs.core._nth.call(null,chunk__55169_55174,i__55171_55176);
figwheel.client.socket.handle_incoming_message.call(null,msg_55177);

var G__55178 = seq__55168_55173;
var G__55179 = chunk__55169_55174;
var G__55180 = count__55170_55175;
var G__55181 = (i__55171_55176 + (1));
seq__55168_55173 = G__55178;
chunk__55169_55174 = G__55179;
count__55170_55175 = G__55180;
i__55171_55176 = G__55181;
continue;
} else {
var temp__5278__auto___55182 = cljs.core.seq.call(null,seq__55168_55173);
if(temp__5278__auto___55182){
var seq__55168_55183__$1 = temp__5278__auto___55182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55168_55183__$1)){
var c__44737__auto___55184 = cljs.core.chunk_first.call(null,seq__55168_55183__$1);
var G__55185 = cljs.core.chunk_rest.call(null,seq__55168_55183__$1);
var G__55186 = c__44737__auto___55184;
var G__55187 = cljs.core.count.call(null,c__44737__auto___55184);
var G__55188 = (0);
seq__55168_55173 = G__55185;
chunk__55169_55174 = G__55186;
count__55170_55175 = G__55187;
i__55171_55176 = G__55188;
continue;
} else {
var msg_55189 = cljs.core.first.call(null,seq__55168_55183__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55189);

var G__55190 = cljs.core.next.call(null,seq__55168_55183__$1);
var G__55191 = null;
var G__55192 = (0);
var G__55193 = (0);
seq__55168_55173 = G__55190;
chunk__55169_55174 = G__55191;
count__55170_55175 = G__55192;
i__55171_55176 = G__55193;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45090__auto__ = [];
var len__45083__auto___55198 = arguments.length;
var i__45084__auto___55199 = (0);
while(true){
if((i__45084__auto___55199 < len__45083__auto___55198)){
args__45090__auto__.push((arguments[i__45084__auto___55199]));

var G__55200 = (i__45084__auto___55199 + (1));
i__45084__auto___55199 = G__55200;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((0) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45091__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55195){
var map__55196 = p__55195;
var map__55196__$1 = ((((!((map__55196 == null)))?((((map__55196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55196):map__55196);
var opts = map__55196__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55194){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55194));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55201){if((e55201 instanceof Error)){
var e = e55201;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55201;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55202){
var map__55203 = p__55202;
var map__55203__$1 = ((((!((map__55203 == null)))?((((map__55203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55203):map__55203);
var msg_name = cljs.core.get.call(null,map__55203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505037975753
