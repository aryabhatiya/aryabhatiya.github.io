// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49260 = arguments.length;
switch (G__49260) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async49261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49261 = (function (f,blockable,meta49262){
this.f = f;
this.blockable = blockable;
this.meta49262 = meta49262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49263,meta49262__$1){
var self__ = this;
var _49263__$1 = this;
return (new cljs.core.async.t_cljs$core$async49261(self__.f,self__.blockable,meta49262__$1));
});

cljs.core.async.t_cljs$core$async49261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49263){
var self__ = this;
var _49263__$1 = this;
return self__.meta49262;
});

cljs.core.async.t_cljs$core$async49261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async49261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49262","meta49262",-1579746573,null)], null);
});

cljs.core.async.t_cljs$core$async49261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49261";

cljs.core.async.t_cljs$core$async49261.cljs$lang$ctorPrWriter = (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async49261");
});

cljs.core.async.__GT_t_cljs$core$async49261 = (function cljs$core$async$__GT_t_cljs$core$async49261(f__$1,blockable__$1,meta49262){
return (new cljs.core.async.t_cljs$core$async49261(f__$1,blockable__$1,meta49262));
});

}

return (new cljs.core.async.t_cljs$core$async49261(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__49267 = arguments.length;
switch (G__49267) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__49270 = arguments.length;
switch (G__49270) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__49273 = arguments.length;
switch (G__49273) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_49275 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_49275);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_49275,ret){
return (function (){
return fn1.call(null,val_49275);
});})(val_49275,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__49277 = arguments.length;
switch (G__49277) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__44849__auto___49279 = n;
var x_49280 = (0);
while(true){
if((x_49280 < n__44849__auto___49279)){
(a[x_49280] = (0));

var G__49281 = (x_49280 + (1));
x_49280 = G__49281;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__49282 = (i + (1));
i = G__49282;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async49283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49283 = (function (flag,meta49284){
this.flag = flag;
this.meta49284 = meta49284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49285,meta49284__$1){
var self__ = this;
var _49285__$1 = this;
return (new cljs.core.async.t_cljs$core$async49283(self__.flag,meta49284__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async49283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49285){
var self__ = this;
var _49285__$1 = this;
return self__.meta49284;
});})(flag))
;

cljs.core.async.t_cljs$core$async49283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async49283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49283.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49284","meta49284",1483172040,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async49283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49283";

cljs.core.async.t_cljs$core$async49283.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async49283");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async49283 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49283(flag__$1,meta49284){
return (new cljs.core.async.t_cljs$core$async49283(flag__$1,meta49284));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async49283(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async49286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49286 = (function (flag,cb,meta49287){
this.flag = flag;
this.cb = cb;
this.meta49287 = meta49287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49288,meta49287__$1){
var self__ = this;
var _49288__$1 = this;
return (new cljs.core.async.t_cljs$core$async49286(self__.flag,self__.cb,meta49287__$1));
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49288){
var self__ = this;
var _49288__$1 = this;
return self__.meta49287;
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async49286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49287","meta49287",1947244089,null)], null);
});

cljs.core.async.t_cljs$core$async49286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49286";

cljs.core.async.t_cljs$core$async49286.cljs$lang$ctorPrWriter = (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async49286");
});

cljs.core.async.__GT_t_cljs$core$async49286 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49286(flag__$1,cb__$1,meta49287){
return (new cljs.core.async.t_cljs$core$async49286(flag__$1,cb__$1,meta49287));
});

}

return (new cljs.core.async.t_cljs$core$async49286(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49289_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49289_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49290_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__43806__auto__ = wport;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49291 = (i + (1));
i = G__49291;
continue;
}
} else {
return null;
}
break;
}
})();
var or__43806__auto__ = ret;
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__43794__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__43794__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__43794__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45090__auto__ = [];
var len__45083__auto___49297 = arguments.length;
var i__45084__auto___49298 = (0);
while(true){
if((i__45084__auto___49298 < len__45083__auto___49297)){
args__45090__auto__.push((arguments[i__45084__auto___49298]));

var G__49299 = (i__45084__auto___49298 + (1));
i__45084__auto___49298 = G__49299;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((1) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45091__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49294){
var map__49295 = p__49294;
var map__49295__$1 = ((((!((map__49295 == null)))?((((map__49295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49295):map__49295);
var opts = map__49295__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49292){
var G__49293 = cljs.core.first.call(null,seq49292);
var seq49292__$1 = cljs.core.next.call(null,seq49292);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49293,seq49292__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__49301 = arguments.length;
switch (G__49301) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49200__auto___49347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___49347){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___49347){
return (function (state_49325){
var state_val_49326 = (state_49325[(1)]);
if((state_val_49326 === (7))){
var inst_49321 = (state_49325[(2)]);
var state_49325__$1 = state_49325;
var statearr_49327_49348 = state_49325__$1;
(statearr_49327_49348[(2)] = inst_49321);

(statearr_49327_49348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (1))){
var state_49325__$1 = state_49325;
var statearr_49328_49349 = state_49325__$1;
(statearr_49328_49349[(2)] = null);

(statearr_49328_49349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (4))){
var inst_49304 = (state_49325[(7)]);
var inst_49304__$1 = (state_49325[(2)]);
var inst_49305 = (inst_49304__$1 == null);
var state_49325__$1 = (function (){var statearr_49329 = state_49325;
(statearr_49329[(7)] = inst_49304__$1);

return statearr_49329;
})();
if(cljs.core.truth_(inst_49305)){
var statearr_49330_49350 = state_49325__$1;
(statearr_49330_49350[(1)] = (5));

} else {
var statearr_49331_49351 = state_49325__$1;
(statearr_49331_49351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (13))){
var state_49325__$1 = state_49325;
var statearr_49332_49352 = state_49325__$1;
(statearr_49332_49352[(2)] = null);

(statearr_49332_49352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (6))){
var inst_49304 = (state_49325[(7)]);
var state_49325__$1 = state_49325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49325__$1,(11),to,inst_49304);
} else {
if((state_val_49326 === (3))){
var inst_49323 = (state_49325[(2)]);
var state_49325__$1 = state_49325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49325__$1,inst_49323);
} else {
if((state_val_49326 === (12))){
var state_49325__$1 = state_49325;
var statearr_49333_49353 = state_49325__$1;
(statearr_49333_49353[(2)] = null);

(statearr_49333_49353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (2))){
var state_49325__$1 = state_49325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49325__$1,(4),from);
} else {
if((state_val_49326 === (11))){
var inst_49314 = (state_49325[(2)]);
var state_49325__$1 = state_49325;
if(cljs.core.truth_(inst_49314)){
var statearr_49334_49354 = state_49325__$1;
(statearr_49334_49354[(1)] = (12));

} else {
var statearr_49335_49355 = state_49325__$1;
(statearr_49335_49355[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (9))){
var state_49325__$1 = state_49325;
var statearr_49336_49356 = state_49325__$1;
(statearr_49336_49356[(2)] = null);

(statearr_49336_49356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (5))){
var state_49325__$1 = state_49325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49337_49357 = state_49325__$1;
(statearr_49337_49357[(1)] = (8));

} else {
var statearr_49338_49358 = state_49325__$1;
(statearr_49338_49358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (14))){
var inst_49319 = (state_49325[(2)]);
var state_49325__$1 = state_49325;
var statearr_49339_49359 = state_49325__$1;
(statearr_49339_49359[(2)] = inst_49319);

(statearr_49339_49359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (10))){
var inst_49311 = (state_49325[(2)]);
var state_49325__$1 = state_49325;
var statearr_49340_49360 = state_49325__$1;
(statearr_49340_49360[(2)] = inst_49311);

(statearr_49340_49360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49326 === (8))){
var inst_49308 = cljs.core.async.close_BANG_.call(null,to);
var state_49325__$1 = state_49325;
var statearr_49341_49361 = state_49325__$1;
(statearr_49341_49361[(2)] = inst_49308);

(statearr_49341_49361[(1)] = (10));


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
});})(c__49200__auto___49347))
;
return ((function (switch__49110__auto__,c__49200__auto___49347){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_49342 = [null,null,null,null,null,null,null,null];
(statearr_49342[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_49342[(1)] = (1));

return statearr_49342;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_49325){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49343){if((e49343 instanceof Object)){
var ex__49114__auto__ = e49343;
var statearr_49344_49362 = state_49325;
(statearr_49344_49362[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49363 = state_49325;
state_49325 = G__49363;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_49325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_49325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___49347))
})();
var state__49202__auto__ = (function (){var statearr_49345 = f__49201__auto__.call(null);
(statearr_49345[(6)] = c__49200__auto___49347);

return statearr_49345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___49347))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__49364){
var vec__49365 = p__49364;
var v = cljs.core.nth.call(null,vec__49365,(0),null);
var p = cljs.core.nth.call(null,vec__49365,(1),null);
var job = vec__49365;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__49200__auto___49536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___49536,res,vec__49365,v,p,job,jobs,results){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___49536,res,vec__49365,v,p,job,jobs,results){
return (function (state_49372){
var state_val_49373 = (state_49372[(1)]);
if((state_val_49373 === (1))){
var state_49372__$1 = state_49372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49372__$1,(2),res,v);
} else {
if((state_val_49373 === (2))){
var inst_49369 = (state_49372[(2)]);
var inst_49370 = cljs.core.async.close_BANG_.call(null,res);
var state_49372__$1 = (function (){var statearr_49374 = state_49372;
(statearr_49374[(7)] = inst_49369);

return statearr_49374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49372__$1,inst_49370);
} else {
return null;
}
}
});})(c__49200__auto___49536,res,vec__49365,v,p,job,jobs,results))
;
return ((function (switch__49110__auto__,c__49200__auto___49536,res,vec__49365,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0 = (function (){
var statearr_49375 = [null,null,null,null,null,null,null,null];
(statearr_49375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__);

(statearr_49375[(1)] = (1));

return statearr_49375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1 = (function (state_49372){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49376){if((e49376 instanceof Object)){
var ex__49114__auto__ = e49376;
var statearr_49377_49537 = state_49372;
(statearr_49377_49537[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49538 = state_49372;
state_49372 = G__49538;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = function(state_49372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1.call(this,state_49372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___49536,res,vec__49365,v,p,job,jobs,results))
})();
var state__49202__auto__ = (function (){var statearr_49378 = f__49201__auto__.call(null);
(statearr_49378[(6)] = c__49200__auto___49536);

return statearr_49378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___49536,res,vec__49365,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__49379){
var vec__49380 = p__49379;
var v = cljs.core.nth.call(null,vec__49380,(0),null);
var p = cljs.core.nth.call(null,vec__49380,(1),null);
var job = vec__49380;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__44849__auto___49539 = n;
var __49540 = (0);
while(true){
if((__49540 < n__44849__auto___49539)){
var G__49383_49541 = type;
var G__49383_49542__$1 = (((G__49383_49541 instanceof cljs.core.Keyword))?G__49383_49541.fqn:null);
switch (G__49383_49542__$1) {
case "compute":
var c__49200__auto___49544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49540,c__49200__auto___49544,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (__49540,c__49200__auto___49544,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async){
return (function (state_49396){
var state_val_49397 = (state_49396[(1)]);
if((state_val_49397 === (1))){
var state_49396__$1 = state_49396;
var statearr_49398_49545 = state_49396__$1;
(statearr_49398_49545[(2)] = null);

(statearr_49398_49545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49397 === (2))){
var state_49396__$1 = state_49396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49396__$1,(4),jobs);
} else {
if((state_val_49397 === (3))){
var inst_49394 = (state_49396[(2)]);
var state_49396__$1 = state_49396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49396__$1,inst_49394);
} else {
if((state_val_49397 === (4))){
var inst_49386 = (state_49396[(2)]);
var inst_49387 = process.call(null,inst_49386);
var state_49396__$1 = state_49396;
if(cljs.core.truth_(inst_49387)){
var statearr_49399_49546 = state_49396__$1;
(statearr_49399_49546[(1)] = (5));

} else {
var statearr_49400_49547 = state_49396__$1;
(statearr_49400_49547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49397 === (5))){
var state_49396__$1 = state_49396;
var statearr_49401_49548 = state_49396__$1;
(statearr_49401_49548[(2)] = null);

(statearr_49401_49548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49397 === (6))){
var state_49396__$1 = state_49396;
var statearr_49402_49549 = state_49396__$1;
(statearr_49402_49549[(2)] = null);

(statearr_49402_49549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49397 === (7))){
var inst_49392 = (state_49396[(2)]);
var state_49396__$1 = state_49396;
var statearr_49403_49550 = state_49396__$1;
(statearr_49403_49550[(2)] = inst_49392);

(statearr_49403_49550[(1)] = (3));


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
});})(__49540,c__49200__auto___49544,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async))
;
return ((function (__49540,switch__49110__auto__,c__49200__auto___49544,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0 = (function (){
var statearr_49404 = [null,null,null,null,null,null,null];
(statearr_49404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__);

(statearr_49404[(1)] = (1));

return statearr_49404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1 = (function (state_49396){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49405){if((e49405 instanceof Object)){
var ex__49114__auto__ = e49405;
var statearr_49406_49551 = state_49396;
(statearr_49406_49551[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49552 = state_49396;
state_49396 = G__49552;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = function(state_49396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1.call(this,state_49396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__;
})()
;})(__49540,switch__49110__auto__,c__49200__auto___49544,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async))
})();
var state__49202__auto__ = (function (){var statearr_49407 = f__49201__auto__.call(null);
(statearr_49407[(6)] = c__49200__auto___49544);

return statearr_49407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(__49540,c__49200__auto___49544,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async))
);


break;
case "async":
var c__49200__auto___49553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49540,c__49200__auto___49553,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (__49540,c__49200__auto___49553,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async){
return (function (state_49420){
var state_val_49421 = (state_49420[(1)]);
if((state_val_49421 === (1))){
var state_49420__$1 = state_49420;
var statearr_49422_49554 = state_49420__$1;
(statearr_49422_49554[(2)] = null);

(statearr_49422_49554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (2))){
var state_49420__$1 = state_49420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49420__$1,(4),jobs);
} else {
if((state_val_49421 === (3))){
var inst_49418 = (state_49420[(2)]);
var state_49420__$1 = state_49420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49420__$1,inst_49418);
} else {
if((state_val_49421 === (4))){
var inst_49410 = (state_49420[(2)]);
var inst_49411 = async.call(null,inst_49410);
var state_49420__$1 = state_49420;
if(cljs.core.truth_(inst_49411)){
var statearr_49423_49555 = state_49420__$1;
(statearr_49423_49555[(1)] = (5));

} else {
var statearr_49424_49556 = state_49420__$1;
(statearr_49424_49556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (5))){
var state_49420__$1 = state_49420;
var statearr_49425_49557 = state_49420__$1;
(statearr_49425_49557[(2)] = null);

(statearr_49425_49557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (6))){
var state_49420__$1 = state_49420;
var statearr_49426_49558 = state_49420__$1;
(statearr_49426_49558[(2)] = null);

(statearr_49426_49558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (7))){
var inst_49416 = (state_49420[(2)]);
var state_49420__$1 = state_49420;
var statearr_49427_49559 = state_49420__$1;
(statearr_49427_49559[(2)] = inst_49416);

(statearr_49427_49559[(1)] = (3));


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
});})(__49540,c__49200__auto___49553,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async))
;
return ((function (__49540,switch__49110__auto__,c__49200__auto___49553,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0 = (function (){
var statearr_49428 = [null,null,null,null,null,null,null];
(statearr_49428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__);

(statearr_49428[(1)] = (1));

return statearr_49428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1 = (function (state_49420){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49429){if((e49429 instanceof Object)){
var ex__49114__auto__ = e49429;
var statearr_49430_49560 = state_49420;
(statearr_49430_49560[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49561 = state_49420;
state_49420 = G__49561;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = function(state_49420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1.call(this,state_49420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__;
})()
;})(__49540,switch__49110__auto__,c__49200__auto___49553,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async))
})();
var state__49202__auto__ = (function (){var statearr_49431 = f__49201__auto__.call(null);
(statearr_49431[(6)] = c__49200__auto___49553);

return statearr_49431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(__49540,c__49200__auto___49553,G__49383_49541,G__49383_49542__$1,n__44849__auto___49539,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49383_49542__$1)].join('')));

}

var G__49562 = (__49540 + (1));
__49540 = G__49562;
continue;
} else {
}
break;
}

var c__49200__auto___49563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___49563,jobs,results,process,async){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___49563,jobs,results,process,async){
return (function (state_49453){
var state_val_49454 = (state_49453[(1)]);
if((state_val_49454 === (1))){
var state_49453__$1 = state_49453;
var statearr_49455_49564 = state_49453__$1;
(statearr_49455_49564[(2)] = null);

(statearr_49455_49564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49454 === (2))){
var state_49453__$1 = state_49453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49453__$1,(4),from);
} else {
if((state_val_49454 === (3))){
var inst_49451 = (state_49453[(2)]);
var state_49453__$1 = state_49453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49453__$1,inst_49451);
} else {
if((state_val_49454 === (4))){
var inst_49434 = (state_49453[(7)]);
var inst_49434__$1 = (state_49453[(2)]);
var inst_49435 = (inst_49434__$1 == null);
var state_49453__$1 = (function (){var statearr_49456 = state_49453;
(statearr_49456[(7)] = inst_49434__$1);

return statearr_49456;
})();
if(cljs.core.truth_(inst_49435)){
var statearr_49457_49565 = state_49453__$1;
(statearr_49457_49565[(1)] = (5));

} else {
var statearr_49458_49566 = state_49453__$1;
(statearr_49458_49566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49454 === (5))){
var inst_49437 = cljs.core.async.close_BANG_.call(null,jobs);
var state_49453__$1 = state_49453;
var statearr_49459_49567 = state_49453__$1;
(statearr_49459_49567[(2)] = inst_49437);

(statearr_49459_49567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49454 === (6))){
var inst_49434 = (state_49453[(7)]);
var inst_49439 = (state_49453[(8)]);
var inst_49439__$1 = cljs.core.async.chan.call(null,(1));
var inst_49440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49441 = [inst_49434,inst_49439__$1];
var inst_49442 = (new cljs.core.PersistentVector(null,2,(5),inst_49440,inst_49441,null));
var state_49453__$1 = (function (){var statearr_49460 = state_49453;
(statearr_49460[(8)] = inst_49439__$1);

return statearr_49460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49453__$1,(8),jobs,inst_49442);
} else {
if((state_val_49454 === (7))){
var inst_49449 = (state_49453[(2)]);
var state_49453__$1 = state_49453;
var statearr_49461_49568 = state_49453__$1;
(statearr_49461_49568[(2)] = inst_49449);

(statearr_49461_49568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49454 === (8))){
var inst_49439 = (state_49453[(8)]);
var inst_49444 = (state_49453[(2)]);
var state_49453__$1 = (function (){var statearr_49462 = state_49453;
(statearr_49462[(9)] = inst_49444);

return statearr_49462;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49453__$1,(9),results,inst_49439);
} else {
if((state_val_49454 === (9))){
var inst_49446 = (state_49453[(2)]);
var state_49453__$1 = (function (){var statearr_49463 = state_49453;
(statearr_49463[(10)] = inst_49446);

return statearr_49463;
})();
var statearr_49464_49569 = state_49453__$1;
(statearr_49464_49569[(2)] = null);

(statearr_49464_49569[(1)] = (2));


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
});})(c__49200__auto___49563,jobs,results,process,async))
;
return ((function (switch__49110__auto__,c__49200__auto___49563,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0 = (function (){
var statearr_49465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__);

(statearr_49465[(1)] = (1));

return statearr_49465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1 = (function (state_49453){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49466){if((e49466 instanceof Object)){
var ex__49114__auto__ = e49466;
var statearr_49467_49570 = state_49453;
(statearr_49467_49570[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49571 = state_49453;
state_49453 = G__49571;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = function(state_49453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1.call(this,state_49453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___49563,jobs,results,process,async))
})();
var state__49202__auto__ = (function (){var statearr_49468 = f__49201__auto__.call(null);
(statearr_49468[(6)] = c__49200__auto___49563);

return statearr_49468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___49563,jobs,results,process,async))
);


var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__,jobs,results,process,async){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__,jobs,results,process,async){
return (function (state_49506){
var state_val_49507 = (state_49506[(1)]);
if((state_val_49507 === (7))){
var inst_49502 = (state_49506[(2)]);
var state_49506__$1 = state_49506;
var statearr_49508_49572 = state_49506__$1;
(statearr_49508_49572[(2)] = inst_49502);

(statearr_49508_49572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (20))){
var state_49506__$1 = state_49506;
var statearr_49509_49573 = state_49506__$1;
(statearr_49509_49573[(2)] = null);

(statearr_49509_49573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (1))){
var state_49506__$1 = state_49506;
var statearr_49510_49574 = state_49506__$1;
(statearr_49510_49574[(2)] = null);

(statearr_49510_49574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (4))){
var inst_49471 = (state_49506[(7)]);
var inst_49471__$1 = (state_49506[(2)]);
var inst_49472 = (inst_49471__$1 == null);
var state_49506__$1 = (function (){var statearr_49511 = state_49506;
(statearr_49511[(7)] = inst_49471__$1);

return statearr_49511;
})();
if(cljs.core.truth_(inst_49472)){
var statearr_49512_49575 = state_49506__$1;
(statearr_49512_49575[(1)] = (5));

} else {
var statearr_49513_49576 = state_49506__$1;
(statearr_49513_49576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (15))){
var inst_49484 = (state_49506[(8)]);
var state_49506__$1 = state_49506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49506__$1,(18),to,inst_49484);
} else {
if((state_val_49507 === (21))){
var inst_49497 = (state_49506[(2)]);
var state_49506__$1 = state_49506;
var statearr_49514_49577 = state_49506__$1;
(statearr_49514_49577[(2)] = inst_49497);

(statearr_49514_49577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (13))){
var inst_49499 = (state_49506[(2)]);
var state_49506__$1 = (function (){var statearr_49515 = state_49506;
(statearr_49515[(9)] = inst_49499);

return statearr_49515;
})();
var statearr_49516_49578 = state_49506__$1;
(statearr_49516_49578[(2)] = null);

(statearr_49516_49578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (6))){
var inst_49471 = (state_49506[(7)]);
var state_49506__$1 = state_49506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49506__$1,(11),inst_49471);
} else {
if((state_val_49507 === (17))){
var inst_49492 = (state_49506[(2)]);
var state_49506__$1 = state_49506;
if(cljs.core.truth_(inst_49492)){
var statearr_49517_49579 = state_49506__$1;
(statearr_49517_49579[(1)] = (19));

} else {
var statearr_49518_49580 = state_49506__$1;
(statearr_49518_49580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (3))){
var inst_49504 = (state_49506[(2)]);
var state_49506__$1 = state_49506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49506__$1,inst_49504);
} else {
if((state_val_49507 === (12))){
var inst_49481 = (state_49506[(10)]);
var state_49506__$1 = state_49506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49506__$1,(14),inst_49481);
} else {
if((state_val_49507 === (2))){
var state_49506__$1 = state_49506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49506__$1,(4),results);
} else {
if((state_val_49507 === (19))){
var state_49506__$1 = state_49506;
var statearr_49519_49581 = state_49506__$1;
(statearr_49519_49581[(2)] = null);

(statearr_49519_49581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (11))){
var inst_49481 = (state_49506[(2)]);
var state_49506__$1 = (function (){var statearr_49520 = state_49506;
(statearr_49520[(10)] = inst_49481);

return statearr_49520;
})();
var statearr_49521_49582 = state_49506__$1;
(statearr_49521_49582[(2)] = null);

(statearr_49521_49582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (9))){
var state_49506__$1 = state_49506;
var statearr_49522_49583 = state_49506__$1;
(statearr_49522_49583[(2)] = null);

(statearr_49522_49583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (5))){
var state_49506__$1 = state_49506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49523_49584 = state_49506__$1;
(statearr_49523_49584[(1)] = (8));

} else {
var statearr_49524_49585 = state_49506__$1;
(statearr_49524_49585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (14))){
var inst_49486 = (state_49506[(11)]);
var inst_49484 = (state_49506[(8)]);
var inst_49484__$1 = (state_49506[(2)]);
var inst_49485 = (inst_49484__$1 == null);
var inst_49486__$1 = cljs.core.not.call(null,inst_49485);
var state_49506__$1 = (function (){var statearr_49525 = state_49506;
(statearr_49525[(11)] = inst_49486__$1);

(statearr_49525[(8)] = inst_49484__$1);

return statearr_49525;
})();
if(inst_49486__$1){
var statearr_49526_49586 = state_49506__$1;
(statearr_49526_49586[(1)] = (15));

} else {
var statearr_49527_49587 = state_49506__$1;
(statearr_49527_49587[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (16))){
var inst_49486 = (state_49506[(11)]);
var state_49506__$1 = state_49506;
var statearr_49528_49588 = state_49506__$1;
(statearr_49528_49588[(2)] = inst_49486);

(statearr_49528_49588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (10))){
var inst_49478 = (state_49506[(2)]);
var state_49506__$1 = state_49506;
var statearr_49529_49589 = state_49506__$1;
(statearr_49529_49589[(2)] = inst_49478);

(statearr_49529_49589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (18))){
var inst_49489 = (state_49506[(2)]);
var state_49506__$1 = state_49506;
var statearr_49530_49590 = state_49506__$1;
(statearr_49530_49590[(2)] = inst_49489);

(statearr_49530_49590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49507 === (8))){
var inst_49475 = cljs.core.async.close_BANG_.call(null,to);
var state_49506__$1 = state_49506;
var statearr_49531_49591 = state_49506__$1;
(statearr_49531_49591[(2)] = inst_49475);

(statearr_49531_49591[(1)] = (10));


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
});})(c__49200__auto__,jobs,results,process,async))
;
return ((function (switch__49110__auto__,c__49200__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0 = (function (){
var statearr_49532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__);

(statearr_49532[(1)] = (1));

return statearr_49532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1 = (function (state_49506){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49533){if((e49533 instanceof Object)){
var ex__49114__auto__ = e49533;
var statearr_49534_49592 = state_49506;
(statearr_49534_49592[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49593 = state_49506;
state_49506 = G__49593;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__ = function(state_49506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1.call(this,state_49506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49111__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__,jobs,results,process,async))
})();
var state__49202__auto__ = (function (){var statearr_49535 = f__49201__auto__.call(null);
(statearr_49535[(6)] = c__49200__auto__);

return statearr_49535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__,jobs,results,process,async))
);

return c__49200__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__49595 = arguments.length;
switch (G__49595) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__49598 = arguments.length;
switch (G__49598) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__49601 = arguments.length;
switch (G__49601) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__49200__auto___49650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___49650,tc,fc){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___49650,tc,fc){
return (function (state_49627){
var state_val_49628 = (state_49627[(1)]);
if((state_val_49628 === (7))){
var inst_49623 = (state_49627[(2)]);
var state_49627__$1 = state_49627;
var statearr_49629_49651 = state_49627__$1;
(statearr_49629_49651[(2)] = inst_49623);

(statearr_49629_49651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (1))){
var state_49627__$1 = state_49627;
var statearr_49630_49652 = state_49627__$1;
(statearr_49630_49652[(2)] = null);

(statearr_49630_49652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (4))){
var inst_49604 = (state_49627[(7)]);
var inst_49604__$1 = (state_49627[(2)]);
var inst_49605 = (inst_49604__$1 == null);
var state_49627__$1 = (function (){var statearr_49631 = state_49627;
(statearr_49631[(7)] = inst_49604__$1);

return statearr_49631;
})();
if(cljs.core.truth_(inst_49605)){
var statearr_49632_49653 = state_49627__$1;
(statearr_49632_49653[(1)] = (5));

} else {
var statearr_49633_49654 = state_49627__$1;
(statearr_49633_49654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (13))){
var state_49627__$1 = state_49627;
var statearr_49634_49655 = state_49627__$1;
(statearr_49634_49655[(2)] = null);

(statearr_49634_49655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (6))){
var inst_49604 = (state_49627[(7)]);
var inst_49610 = p.call(null,inst_49604);
var state_49627__$1 = state_49627;
if(cljs.core.truth_(inst_49610)){
var statearr_49635_49656 = state_49627__$1;
(statearr_49635_49656[(1)] = (9));

} else {
var statearr_49636_49657 = state_49627__$1;
(statearr_49636_49657[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (3))){
var inst_49625 = (state_49627[(2)]);
var state_49627__$1 = state_49627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49627__$1,inst_49625);
} else {
if((state_val_49628 === (12))){
var state_49627__$1 = state_49627;
var statearr_49637_49658 = state_49627__$1;
(statearr_49637_49658[(2)] = null);

(statearr_49637_49658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (2))){
var state_49627__$1 = state_49627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49627__$1,(4),ch);
} else {
if((state_val_49628 === (11))){
var inst_49604 = (state_49627[(7)]);
var inst_49614 = (state_49627[(2)]);
var state_49627__$1 = state_49627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49627__$1,(8),inst_49614,inst_49604);
} else {
if((state_val_49628 === (9))){
var state_49627__$1 = state_49627;
var statearr_49638_49659 = state_49627__$1;
(statearr_49638_49659[(2)] = tc);

(statearr_49638_49659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (5))){
var inst_49607 = cljs.core.async.close_BANG_.call(null,tc);
var inst_49608 = cljs.core.async.close_BANG_.call(null,fc);
var state_49627__$1 = (function (){var statearr_49639 = state_49627;
(statearr_49639[(8)] = inst_49607);

return statearr_49639;
})();
var statearr_49640_49660 = state_49627__$1;
(statearr_49640_49660[(2)] = inst_49608);

(statearr_49640_49660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (14))){
var inst_49621 = (state_49627[(2)]);
var state_49627__$1 = state_49627;
var statearr_49641_49661 = state_49627__$1;
(statearr_49641_49661[(2)] = inst_49621);

(statearr_49641_49661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (10))){
var state_49627__$1 = state_49627;
var statearr_49642_49662 = state_49627__$1;
(statearr_49642_49662[(2)] = fc);

(statearr_49642_49662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49628 === (8))){
var inst_49616 = (state_49627[(2)]);
var state_49627__$1 = state_49627;
if(cljs.core.truth_(inst_49616)){
var statearr_49643_49663 = state_49627__$1;
(statearr_49643_49663[(1)] = (12));

} else {
var statearr_49644_49664 = state_49627__$1;
(statearr_49644_49664[(1)] = (13));

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
});})(c__49200__auto___49650,tc,fc))
;
return ((function (switch__49110__auto__,c__49200__auto___49650,tc,fc){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_49645 = [null,null,null,null,null,null,null,null,null];
(statearr_49645[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_49645[(1)] = (1));

return statearr_49645;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_49627){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49646){if((e49646 instanceof Object)){
var ex__49114__auto__ = e49646;
var statearr_49647_49665 = state_49627;
(statearr_49647_49665[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49666 = state_49627;
state_49627 = G__49666;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_49627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_49627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___49650,tc,fc))
})();
var state__49202__auto__ = (function (){var statearr_49648 = f__49201__auto__.call(null);
(statearr_49648[(6)] = c__49200__auto___49650);

return statearr_49648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___49650,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__){
return (function (state_49687){
var state_val_49688 = (state_49687[(1)]);
if((state_val_49688 === (7))){
var inst_49683 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49689_49707 = state_49687__$1;
(statearr_49689_49707[(2)] = inst_49683);

(statearr_49689_49707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (1))){
var inst_49667 = init;
var state_49687__$1 = (function (){var statearr_49690 = state_49687;
(statearr_49690[(7)] = inst_49667);

return statearr_49690;
})();
var statearr_49691_49708 = state_49687__$1;
(statearr_49691_49708[(2)] = null);

(statearr_49691_49708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (4))){
var inst_49670 = (state_49687[(8)]);
var inst_49670__$1 = (state_49687[(2)]);
var inst_49671 = (inst_49670__$1 == null);
var state_49687__$1 = (function (){var statearr_49692 = state_49687;
(statearr_49692[(8)] = inst_49670__$1);

return statearr_49692;
})();
if(cljs.core.truth_(inst_49671)){
var statearr_49693_49709 = state_49687__$1;
(statearr_49693_49709[(1)] = (5));

} else {
var statearr_49694_49710 = state_49687__$1;
(statearr_49694_49710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (6))){
var inst_49667 = (state_49687[(7)]);
var inst_49670 = (state_49687[(8)]);
var inst_49674 = (state_49687[(9)]);
var inst_49674__$1 = f.call(null,inst_49667,inst_49670);
var inst_49675 = cljs.core.reduced_QMARK_.call(null,inst_49674__$1);
var state_49687__$1 = (function (){var statearr_49695 = state_49687;
(statearr_49695[(9)] = inst_49674__$1);

return statearr_49695;
})();
if(inst_49675){
var statearr_49696_49711 = state_49687__$1;
(statearr_49696_49711[(1)] = (8));

} else {
var statearr_49697_49712 = state_49687__$1;
(statearr_49697_49712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (3))){
var inst_49685 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49687__$1,inst_49685);
} else {
if((state_val_49688 === (2))){
var state_49687__$1 = state_49687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49687__$1,(4),ch);
} else {
if((state_val_49688 === (9))){
var inst_49674 = (state_49687[(9)]);
var inst_49667 = inst_49674;
var state_49687__$1 = (function (){var statearr_49698 = state_49687;
(statearr_49698[(7)] = inst_49667);

return statearr_49698;
})();
var statearr_49699_49713 = state_49687__$1;
(statearr_49699_49713[(2)] = null);

(statearr_49699_49713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (5))){
var inst_49667 = (state_49687[(7)]);
var state_49687__$1 = state_49687;
var statearr_49700_49714 = state_49687__$1;
(statearr_49700_49714[(2)] = inst_49667);

(statearr_49700_49714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (10))){
var inst_49681 = (state_49687[(2)]);
var state_49687__$1 = state_49687;
var statearr_49701_49715 = state_49687__$1;
(statearr_49701_49715[(2)] = inst_49681);

(statearr_49701_49715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49688 === (8))){
var inst_49674 = (state_49687[(9)]);
var inst_49677 = cljs.core.deref.call(null,inst_49674);
var state_49687__$1 = state_49687;
var statearr_49702_49716 = state_49687__$1;
(statearr_49702_49716[(2)] = inst_49677);

(statearr_49702_49716[(1)] = (10));


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
});})(c__49200__auto__))
;
return ((function (switch__49110__auto__,c__49200__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__49111__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49111__auto____0 = (function (){
var statearr_49703 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49703[(0)] = cljs$core$async$reduce_$_state_machine__49111__auto__);

(statearr_49703[(1)] = (1));

return statearr_49703;
});
var cljs$core$async$reduce_$_state_machine__49111__auto____1 = (function (state_49687){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49704){if((e49704 instanceof Object)){
var ex__49114__auto__ = e49704;
var statearr_49705_49717 = state_49687;
(statearr_49705_49717[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49718 = state_49687;
state_49687 = G__49718;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49111__auto__ = function(state_49687){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49111__auto____1.call(this,state_49687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49111__auto____0;
cljs$core$async$reduce_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49111__auto____1;
return cljs$core$async$reduce_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__))
})();
var state__49202__auto__ = (function (){var statearr_49706 = f__49201__auto__.call(null);
(statearr_49706[(6)] = c__49200__auto__);

return statearr_49706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__))
);

return c__49200__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__,f__$1){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__,f__$1){
return (function (state_49724){
var state_val_49725 = (state_49724[(1)]);
if((state_val_49725 === (1))){
var inst_49719 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_49724__$1 = state_49724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49724__$1,(2),inst_49719);
} else {
if((state_val_49725 === (2))){
var inst_49721 = (state_49724[(2)]);
var inst_49722 = f__$1.call(null,inst_49721);
var state_49724__$1 = state_49724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49724__$1,inst_49722);
} else {
return null;
}
}
});})(c__49200__auto__,f__$1))
;
return ((function (switch__49110__auto__,c__49200__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__49111__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49111__auto____0 = (function (){
var statearr_49726 = [null,null,null,null,null,null,null];
(statearr_49726[(0)] = cljs$core$async$transduce_$_state_machine__49111__auto__);

(statearr_49726[(1)] = (1));

return statearr_49726;
});
var cljs$core$async$transduce_$_state_machine__49111__auto____1 = (function (state_49724){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49727){if((e49727 instanceof Object)){
var ex__49114__auto__ = e49727;
var statearr_49728_49730 = state_49724;
(statearr_49728_49730[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49731 = state_49724;
state_49724 = G__49731;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49111__auto__ = function(state_49724){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49111__auto____1.call(this,state_49724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49111__auto____0;
cljs$core$async$transduce_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49111__auto____1;
return cljs$core$async$transduce_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__,f__$1))
})();
var state__49202__auto__ = (function (){var statearr_49729 = f__49201__auto__.call(null);
(statearr_49729[(6)] = c__49200__auto__);

return statearr_49729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__,f__$1))
);

return c__49200__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49733 = arguments.length;
switch (G__49733) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__){
return (function (state_49758){
var state_val_49759 = (state_49758[(1)]);
if((state_val_49759 === (7))){
var inst_49740 = (state_49758[(2)]);
var state_49758__$1 = state_49758;
var statearr_49760_49781 = state_49758__$1;
(statearr_49760_49781[(2)] = inst_49740);

(statearr_49760_49781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (1))){
var inst_49734 = cljs.core.seq.call(null,coll);
var inst_49735 = inst_49734;
var state_49758__$1 = (function (){var statearr_49761 = state_49758;
(statearr_49761[(7)] = inst_49735);

return statearr_49761;
})();
var statearr_49762_49782 = state_49758__$1;
(statearr_49762_49782[(2)] = null);

(statearr_49762_49782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (4))){
var inst_49735 = (state_49758[(7)]);
var inst_49738 = cljs.core.first.call(null,inst_49735);
var state_49758__$1 = state_49758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49758__$1,(7),ch,inst_49738);
} else {
if((state_val_49759 === (13))){
var inst_49752 = (state_49758[(2)]);
var state_49758__$1 = state_49758;
var statearr_49763_49783 = state_49758__$1;
(statearr_49763_49783[(2)] = inst_49752);

(statearr_49763_49783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (6))){
var inst_49743 = (state_49758[(2)]);
var state_49758__$1 = state_49758;
if(cljs.core.truth_(inst_49743)){
var statearr_49764_49784 = state_49758__$1;
(statearr_49764_49784[(1)] = (8));

} else {
var statearr_49765_49785 = state_49758__$1;
(statearr_49765_49785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (3))){
var inst_49756 = (state_49758[(2)]);
var state_49758__$1 = state_49758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49758__$1,inst_49756);
} else {
if((state_val_49759 === (12))){
var state_49758__$1 = state_49758;
var statearr_49766_49786 = state_49758__$1;
(statearr_49766_49786[(2)] = null);

(statearr_49766_49786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (2))){
var inst_49735 = (state_49758[(7)]);
var state_49758__$1 = state_49758;
if(cljs.core.truth_(inst_49735)){
var statearr_49767_49787 = state_49758__$1;
(statearr_49767_49787[(1)] = (4));

} else {
var statearr_49768_49788 = state_49758__$1;
(statearr_49768_49788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (11))){
var inst_49749 = cljs.core.async.close_BANG_.call(null,ch);
var state_49758__$1 = state_49758;
var statearr_49769_49789 = state_49758__$1;
(statearr_49769_49789[(2)] = inst_49749);

(statearr_49769_49789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (9))){
var state_49758__$1 = state_49758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49770_49790 = state_49758__$1;
(statearr_49770_49790[(1)] = (11));

} else {
var statearr_49771_49791 = state_49758__$1;
(statearr_49771_49791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (5))){
var inst_49735 = (state_49758[(7)]);
var state_49758__$1 = state_49758;
var statearr_49772_49792 = state_49758__$1;
(statearr_49772_49792[(2)] = inst_49735);

(statearr_49772_49792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (10))){
var inst_49754 = (state_49758[(2)]);
var state_49758__$1 = state_49758;
var statearr_49773_49793 = state_49758__$1;
(statearr_49773_49793[(2)] = inst_49754);

(statearr_49773_49793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49759 === (8))){
var inst_49735 = (state_49758[(7)]);
var inst_49745 = cljs.core.next.call(null,inst_49735);
var inst_49735__$1 = inst_49745;
var state_49758__$1 = (function (){var statearr_49774 = state_49758;
(statearr_49774[(7)] = inst_49735__$1);

return statearr_49774;
})();
var statearr_49775_49794 = state_49758__$1;
(statearr_49775_49794[(2)] = null);

(statearr_49775_49794[(1)] = (2));


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
});})(c__49200__auto__))
;
return ((function (switch__49110__auto__,c__49200__auto__){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_49776 = [null,null,null,null,null,null,null,null];
(statearr_49776[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_49776[(1)] = (1));

return statearr_49776;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_49758){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e49777){if((e49777 instanceof Object)){
var ex__49114__auto__ = e49777;
var statearr_49778_49795 = state_49758;
(statearr_49778_49795[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49796 = state_49758;
state_49758 = G__49796;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_49758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_49758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__))
})();
var state__49202__auto__ = (function (){var statearr_49779 = f__49201__auto__.call(null);
(statearr_49779[(6)] = c__49200__auto__);

return statearr_49779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__))
);

return c__49200__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44539__auto__ = (((_ == null))?null:_);
var m__44540__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,_);
} else {
var m__44540__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44540__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m,ch);
} else {
var m__44540__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m);
} else {
var m__44540__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49797 = (function (ch,cs,meta49798){
this.ch = ch;
this.cs = cs;
this.meta49798 = meta49798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49799,meta49798__$1){
var self__ = this;
var _49799__$1 = this;
return (new cljs.core.async.t_cljs$core$async49797(self__.ch,self__.cs,meta49798__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49799){
var self__ = this;
var _49799__$1 = this;
return self__.meta49798;
});})(cs))
;

cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49797.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49798","meta49798",-46481845,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49797";

cljs.core.async.t_cljs$core$async49797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async49797");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async49797 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49797(ch__$1,cs__$1,meta49798){
return (new cljs.core.async.t_cljs$core$async49797(ch__$1,cs__$1,meta49798));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49797(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__49200__auto___50019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50019,cs,m,dchan,dctr,done){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50019,cs,m,dchan,dctr,done){
return (function (state_49934){
var state_val_49935 = (state_49934[(1)]);
if((state_val_49935 === (7))){
var inst_49930 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49936_50020 = state_49934__$1;
(statearr_49936_50020[(2)] = inst_49930);

(statearr_49936_50020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (20))){
var inst_49833 = (state_49934[(7)]);
var inst_49845 = cljs.core.first.call(null,inst_49833);
var inst_49846 = cljs.core.nth.call(null,inst_49845,(0),null);
var inst_49847 = cljs.core.nth.call(null,inst_49845,(1),null);
var state_49934__$1 = (function (){var statearr_49937 = state_49934;
(statearr_49937[(8)] = inst_49846);

return statearr_49937;
})();
if(cljs.core.truth_(inst_49847)){
var statearr_49938_50021 = state_49934__$1;
(statearr_49938_50021[(1)] = (22));

} else {
var statearr_49939_50022 = state_49934__$1;
(statearr_49939_50022[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (27))){
var inst_49875 = (state_49934[(9)]);
var inst_49877 = (state_49934[(10)]);
var inst_49882 = (state_49934[(11)]);
var inst_49802 = (state_49934[(12)]);
var inst_49882__$1 = cljs.core._nth.call(null,inst_49875,inst_49877);
var inst_49883 = cljs.core.async.put_BANG_.call(null,inst_49882__$1,inst_49802,done);
var state_49934__$1 = (function (){var statearr_49940 = state_49934;
(statearr_49940[(11)] = inst_49882__$1);

return statearr_49940;
})();
if(cljs.core.truth_(inst_49883)){
var statearr_49941_50023 = state_49934__$1;
(statearr_49941_50023[(1)] = (30));

} else {
var statearr_49942_50024 = state_49934__$1;
(statearr_49942_50024[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (1))){
var state_49934__$1 = state_49934;
var statearr_49943_50025 = state_49934__$1;
(statearr_49943_50025[(2)] = null);

(statearr_49943_50025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (24))){
var inst_49833 = (state_49934[(7)]);
var inst_49852 = (state_49934[(2)]);
var inst_49853 = cljs.core.next.call(null,inst_49833);
var inst_49811 = inst_49853;
var inst_49812 = null;
var inst_49813 = (0);
var inst_49814 = (0);
var state_49934__$1 = (function (){var statearr_49944 = state_49934;
(statearr_49944[(13)] = inst_49814);

(statearr_49944[(14)] = inst_49812);

(statearr_49944[(15)] = inst_49813);

(statearr_49944[(16)] = inst_49852);

(statearr_49944[(17)] = inst_49811);

return statearr_49944;
})();
var statearr_49945_50026 = state_49934__$1;
(statearr_49945_50026[(2)] = null);

(statearr_49945_50026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (39))){
var state_49934__$1 = state_49934;
var statearr_49949_50027 = state_49934__$1;
(statearr_49949_50027[(2)] = null);

(statearr_49949_50027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (4))){
var inst_49802 = (state_49934[(12)]);
var inst_49802__$1 = (state_49934[(2)]);
var inst_49803 = (inst_49802__$1 == null);
var state_49934__$1 = (function (){var statearr_49950 = state_49934;
(statearr_49950[(12)] = inst_49802__$1);

return statearr_49950;
})();
if(cljs.core.truth_(inst_49803)){
var statearr_49951_50028 = state_49934__$1;
(statearr_49951_50028[(1)] = (5));

} else {
var statearr_49952_50029 = state_49934__$1;
(statearr_49952_50029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (15))){
var inst_49814 = (state_49934[(13)]);
var inst_49812 = (state_49934[(14)]);
var inst_49813 = (state_49934[(15)]);
var inst_49811 = (state_49934[(17)]);
var inst_49829 = (state_49934[(2)]);
var inst_49830 = (inst_49814 + (1));
var tmp49946 = inst_49812;
var tmp49947 = inst_49813;
var tmp49948 = inst_49811;
var inst_49811__$1 = tmp49948;
var inst_49812__$1 = tmp49946;
var inst_49813__$1 = tmp49947;
var inst_49814__$1 = inst_49830;
var state_49934__$1 = (function (){var statearr_49953 = state_49934;
(statearr_49953[(13)] = inst_49814__$1);

(statearr_49953[(14)] = inst_49812__$1);

(statearr_49953[(15)] = inst_49813__$1);

(statearr_49953[(18)] = inst_49829);

(statearr_49953[(17)] = inst_49811__$1);

return statearr_49953;
})();
var statearr_49954_50030 = state_49934__$1;
(statearr_49954_50030[(2)] = null);

(statearr_49954_50030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (21))){
var inst_49856 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49958_50031 = state_49934__$1;
(statearr_49958_50031[(2)] = inst_49856);

(statearr_49958_50031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (31))){
var inst_49882 = (state_49934[(11)]);
var inst_49886 = done.call(null,null);
var inst_49887 = cljs.core.async.untap_STAR_.call(null,m,inst_49882);
var state_49934__$1 = (function (){var statearr_49959 = state_49934;
(statearr_49959[(19)] = inst_49886);

return statearr_49959;
})();
var statearr_49960_50032 = state_49934__$1;
(statearr_49960_50032[(2)] = inst_49887);

(statearr_49960_50032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (32))){
var inst_49875 = (state_49934[(9)]);
var inst_49877 = (state_49934[(10)]);
var inst_49874 = (state_49934[(20)]);
var inst_49876 = (state_49934[(21)]);
var inst_49889 = (state_49934[(2)]);
var inst_49890 = (inst_49877 + (1));
var tmp49955 = inst_49875;
var tmp49956 = inst_49874;
var tmp49957 = inst_49876;
var inst_49874__$1 = tmp49956;
var inst_49875__$1 = tmp49955;
var inst_49876__$1 = tmp49957;
var inst_49877__$1 = inst_49890;
var state_49934__$1 = (function (){var statearr_49961 = state_49934;
(statearr_49961[(9)] = inst_49875__$1);

(statearr_49961[(10)] = inst_49877__$1);

(statearr_49961[(20)] = inst_49874__$1);

(statearr_49961[(21)] = inst_49876__$1);

(statearr_49961[(22)] = inst_49889);

return statearr_49961;
})();
var statearr_49962_50033 = state_49934__$1;
(statearr_49962_50033[(2)] = null);

(statearr_49962_50033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (40))){
var inst_49902 = (state_49934[(23)]);
var inst_49906 = done.call(null,null);
var inst_49907 = cljs.core.async.untap_STAR_.call(null,m,inst_49902);
var state_49934__$1 = (function (){var statearr_49963 = state_49934;
(statearr_49963[(24)] = inst_49906);

return statearr_49963;
})();
var statearr_49964_50034 = state_49934__$1;
(statearr_49964_50034[(2)] = inst_49907);

(statearr_49964_50034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (33))){
var inst_49893 = (state_49934[(25)]);
var inst_49895 = cljs.core.chunked_seq_QMARK_.call(null,inst_49893);
var state_49934__$1 = state_49934;
if(inst_49895){
var statearr_49965_50035 = state_49934__$1;
(statearr_49965_50035[(1)] = (36));

} else {
var statearr_49966_50036 = state_49934__$1;
(statearr_49966_50036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (13))){
var inst_49823 = (state_49934[(26)]);
var inst_49826 = cljs.core.async.close_BANG_.call(null,inst_49823);
var state_49934__$1 = state_49934;
var statearr_49967_50037 = state_49934__$1;
(statearr_49967_50037[(2)] = inst_49826);

(statearr_49967_50037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (22))){
var inst_49846 = (state_49934[(8)]);
var inst_49849 = cljs.core.async.close_BANG_.call(null,inst_49846);
var state_49934__$1 = state_49934;
var statearr_49968_50038 = state_49934__$1;
(statearr_49968_50038[(2)] = inst_49849);

(statearr_49968_50038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (36))){
var inst_49893 = (state_49934[(25)]);
var inst_49897 = cljs.core.chunk_first.call(null,inst_49893);
var inst_49898 = cljs.core.chunk_rest.call(null,inst_49893);
var inst_49899 = cljs.core.count.call(null,inst_49897);
var inst_49874 = inst_49898;
var inst_49875 = inst_49897;
var inst_49876 = inst_49899;
var inst_49877 = (0);
var state_49934__$1 = (function (){var statearr_49969 = state_49934;
(statearr_49969[(9)] = inst_49875);

(statearr_49969[(10)] = inst_49877);

(statearr_49969[(20)] = inst_49874);

(statearr_49969[(21)] = inst_49876);

return statearr_49969;
})();
var statearr_49970_50039 = state_49934__$1;
(statearr_49970_50039[(2)] = null);

(statearr_49970_50039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (41))){
var inst_49893 = (state_49934[(25)]);
var inst_49909 = (state_49934[(2)]);
var inst_49910 = cljs.core.next.call(null,inst_49893);
var inst_49874 = inst_49910;
var inst_49875 = null;
var inst_49876 = (0);
var inst_49877 = (0);
var state_49934__$1 = (function (){var statearr_49971 = state_49934;
(statearr_49971[(9)] = inst_49875);

(statearr_49971[(10)] = inst_49877);

(statearr_49971[(20)] = inst_49874);

(statearr_49971[(21)] = inst_49876);

(statearr_49971[(27)] = inst_49909);

return statearr_49971;
})();
var statearr_49972_50040 = state_49934__$1;
(statearr_49972_50040[(2)] = null);

(statearr_49972_50040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (43))){
var state_49934__$1 = state_49934;
var statearr_49973_50041 = state_49934__$1;
(statearr_49973_50041[(2)] = null);

(statearr_49973_50041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (29))){
var inst_49918 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49974_50042 = state_49934__$1;
(statearr_49974_50042[(2)] = inst_49918);

(statearr_49974_50042[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (44))){
var inst_49927 = (state_49934[(2)]);
var state_49934__$1 = (function (){var statearr_49975 = state_49934;
(statearr_49975[(28)] = inst_49927);

return statearr_49975;
})();
var statearr_49976_50043 = state_49934__$1;
(statearr_49976_50043[(2)] = null);

(statearr_49976_50043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (6))){
var inst_49866 = (state_49934[(29)]);
var inst_49865 = cljs.core.deref.call(null,cs);
var inst_49866__$1 = cljs.core.keys.call(null,inst_49865);
var inst_49867 = cljs.core.count.call(null,inst_49866__$1);
var inst_49868 = cljs.core.reset_BANG_.call(null,dctr,inst_49867);
var inst_49873 = cljs.core.seq.call(null,inst_49866__$1);
var inst_49874 = inst_49873;
var inst_49875 = null;
var inst_49876 = (0);
var inst_49877 = (0);
var state_49934__$1 = (function (){var statearr_49977 = state_49934;
(statearr_49977[(9)] = inst_49875);

(statearr_49977[(29)] = inst_49866__$1);

(statearr_49977[(10)] = inst_49877);

(statearr_49977[(20)] = inst_49874);

(statearr_49977[(30)] = inst_49868);

(statearr_49977[(21)] = inst_49876);

return statearr_49977;
})();
var statearr_49978_50044 = state_49934__$1;
(statearr_49978_50044[(2)] = null);

(statearr_49978_50044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (28))){
var inst_49893 = (state_49934[(25)]);
var inst_49874 = (state_49934[(20)]);
var inst_49893__$1 = cljs.core.seq.call(null,inst_49874);
var state_49934__$1 = (function (){var statearr_49979 = state_49934;
(statearr_49979[(25)] = inst_49893__$1);

return statearr_49979;
})();
if(inst_49893__$1){
var statearr_49980_50045 = state_49934__$1;
(statearr_49980_50045[(1)] = (33));

} else {
var statearr_49981_50046 = state_49934__$1;
(statearr_49981_50046[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (25))){
var inst_49877 = (state_49934[(10)]);
var inst_49876 = (state_49934[(21)]);
var inst_49879 = (inst_49877 < inst_49876);
var inst_49880 = inst_49879;
var state_49934__$1 = state_49934;
if(cljs.core.truth_(inst_49880)){
var statearr_49982_50047 = state_49934__$1;
(statearr_49982_50047[(1)] = (27));

} else {
var statearr_49983_50048 = state_49934__$1;
(statearr_49983_50048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (34))){
var state_49934__$1 = state_49934;
var statearr_49984_50049 = state_49934__$1;
(statearr_49984_50049[(2)] = null);

(statearr_49984_50049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (17))){
var state_49934__$1 = state_49934;
var statearr_49985_50050 = state_49934__$1;
(statearr_49985_50050[(2)] = null);

(statearr_49985_50050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (3))){
var inst_49932 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49934__$1,inst_49932);
} else {
if((state_val_49935 === (12))){
var inst_49861 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49986_50051 = state_49934__$1;
(statearr_49986_50051[(2)] = inst_49861);

(statearr_49986_50051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (2))){
var state_49934__$1 = state_49934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49934__$1,(4),ch);
} else {
if((state_val_49935 === (23))){
var state_49934__$1 = state_49934;
var statearr_49987_50052 = state_49934__$1;
(statearr_49987_50052[(2)] = null);

(statearr_49987_50052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (35))){
var inst_49916 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49988_50053 = state_49934__$1;
(statearr_49988_50053[(2)] = inst_49916);

(statearr_49988_50053[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (19))){
var inst_49833 = (state_49934[(7)]);
var inst_49837 = cljs.core.chunk_first.call(null,inst_49833);
var inst_49838 = cljs.core.chunk_rest.call(null,inst_49833);
var inst_49839 = cljs.core.count.call(null,inst_49837);
var inst_49811 = inst_49838;
var inst_49812 = inst_49837;
var inst_49813 = inst_49839;
var inst_49814 = (0);
var state_49934__$1 = (function (){var statearr_49989 = state_49934;
(statearr_49989[(13)] = inst_49814);

(statearr_49989[(14)] = inst_49812);

(statearr_49989[(15)] = inst_49813);

(statearr_49989[(17)] = inst_49811);

return statearr_49989;
})();
var statearr_49990_50054 = state_49934__$1;
(statearr_49990_50054[(2)] = null);

(statearr_49990_50054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (11))){
var inst_49833 = (state_49934[(7)]);
var inst_49811 = (state_49934[(17)]);
var inst_49833__$1 = cljs.core.seq.call(null,inst_49811);
var state_49934__$1 = (function (){var statearr_49991 = state_49934;
(statearr_49991[(7)] = inst_49833__$1);

return statearr_49991;
})();
if(inst_49833__$1){
var statearr_49992_50055 = state_49934__$1;
(statearr_49992_50055[(1)] = (16));

} else {
var statearr_49993_50056 = state_49934__$1;
(statearr_49993_50056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (9))){
var inst_49863 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49994_50057 = state_49934__$1;
(statearr_49994_50057[(2)] = inst_49863);

(statearr_49994_50057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (5))){
var inst_49809 = cljs.core.deref.call(null,cs);
var inst_49810 = cljs.core.seq.call(null,inst_49809);
var inst_49811 = inst_49810;
var inst_49812 = null;
var inst_49813 = (0);
var inst_49814 = (0);
var state_49934__$1 = (function (){var statearr_49995 = state_49934;
(statearr_49995[(13)] = inst_49814);

(statearr_49995[(14)] = inst_49812);

(statearr_49995[(15)] = inst_49813);

(statearr_49995[(17)] = inst_49811);

return statearr_49995;
})();
var statearr_49996_50058 = state_49934__$1;
(statearr_49996_50058[(2)] = null);

(statearr_49996_50058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (14))){
var state_49934__$1 = state_49934;
var statearr_49997_50059 = state_49934__$1;
(statearr_49997_50059[(2)] = null);

(statearr_49997_50059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (45))){
var inst_49924 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49998_50060 = state_49934__$1;
(statearr_49998_50060[(2)] = inst_49924);

(statearr_49998_50060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (26))){
var inst_49866 = (state_49934[(29)]);
var inst_49920 = (state_49934[(2)]);
var inst_49921 = cljs.core.seq.call(null,inst_49866);
var state_49934__$1 = (function (){var statearr_49999 = state_49934;
(statearr_49999[(31)] = inst_49920);

return statearr_49999;
})();
if(inst_49921){
var statearr_50000_50061 = state_49934__$1;
(statearr_50000_50061[(1)] = (42));

} else {
var statearr_50001_50062 = state_49934__$1;
(statearr_50001_50062[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (16))){
var inst_49833 = (state_49934[(7)]);
var inst_49835 = cljs.core.chunked_seq_QMARK_.call(null,inst_49833);
var state_49934__$1 = state_49934;
if(inst_49835){
var statearr_50002_50063 = state_49934__$1;
(statearr_50002_50063[(1)] = (19));

} else {
var statearr_50003_50064 = state_49934__$1;
(statearr_50003_50064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (38))){
var inst_49913 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_50004_50065 = state_49934__$1;
(statearr_50004_50065[(2)] = inst_49913);

(statearr_50004_50065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (30))){
var state_49934__$1 = state_49934;
var statearr_50005_50066 = state_49934__$1;
(statearr_50005_50066[(2)] = null);

(statearr_50005_50066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (10))){
var inst_49814 = (state_49934[(13)]);
var inst_49812 = (state_49934[(14)]);
var inst_49822 = cljs.core._nth.call(null,inst_49812,inst_49814);
var inst_49823 = cljs.core.nth.call(null,inst_49822,(0),null);
var inst_49824 = cljs.core.nth.call(null,inst_49822,(1),null);
var state_49934__$1 = (function (){var statearr_50006 = state_49934;
(statearr_50006[(26)] = inst_49823);

return statearr_50006;
})();
if(cljs.core.truth_(inst_49824)){
var statearr_50007_50067 = state_49934__$1;
(statearr_50007_50067[(1)] = (13));

} else {
var statearr_50008_50068 = state_49934__$1;
(statearr_50008_50068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (18))){
var inst_49859 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_50009_50069 = state_49934__$1;
(statearr_50009_50069[(2)] = inst_49859);

(statearr_50009_50069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (42))){
var state_49934__$1 = state_49934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49934__$1,(45),dchan);
} else {
if((state_val_49935 === (37))){
var inst_49893 = (state_49934[(25)]);
var inst_49902 = (state_49934[(23)]);
var inst_49802 = (state_49934[(12)]);
var inst_49902__$1 = cljs.core.first.call(null,inst_49893);
var inst_49903 = cljs.core.async.put_BANG_.call(null,inst_49902__$1,inst_49802,done);
var state_49934__$1 = (function (){var statearr_50010 = state_49934;
(statearr_50010[(23)] = inst_49902__$1);

return statearr_50010;
})();
if(cljs.core.truth_(inst_49903)){
var statearr_50011_50070 = state_49934__$1;
(statearr_50011_50070[(1)] = (39));

} else {
var statearr_50012_50071 = state_49934__$1;
(statearr_50012_50071[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (8))){
var inst_49814 = (state_49934[(13)]);
var inst_49813 = (state_49934[(15)]);
var inst_49816 = (inst_49814 < inst_49813);
var inst_49817 = inst_49816;
var state_49934__$1 = state_49934;
if(cljs.core.truth_(inst_49817)){
var statearr_50013_50072 = state_49934__$1;
(statearr_50013_50072[(1)] = (10));

} else {
var statearr_50014_50073 = state_49934__$1;
(statearr_50014_50073[(1)] = (11));

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
});})(c__49200__auto___50019,cs,m,dchan,dctr,done))
;
return ((function (switch__49110__auto__,c__49200__auto___50019,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__49111__auto__ = null;
var cljs$core$async$mult_$_state_machine__49111__auto____0 = (function (){
var statearr_50015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50015[(0)] = cljs$core$async$mult_$_state_machine__49111__auto__);

(statearr_50015[(1)] = (1));

return statearr_50015;
});
var cljs$core$async$mult_$_state_machine__49111__auto____1 = (function (state_49934){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_49934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50016){if((e50016 instanceof Object)){
var ex__49114__auto__ = e50016;
var statearr_50017_50074 = state_49934;
(statearr_50017_50074[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50075 = state_49934;
state_49934 = G__50075;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49111__auto__ = function(state_49934){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49111__auto____1.call(this,state_49934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49111__auto____0;
cljs$core$async$mult_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49111__auto____1;
return cljs$core$async$mult_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50019,cs,m,dchan,dctr,done))
})();
var state__49202__auto__ = (function (){var statearr_50018 = f__49201__auto__.call(null);
(statearr_50018[(6)] = c__49200__auto___50019);

return statearr_50018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50019,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50077 = arguments.length;
switch (G__50077) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m,ch);
} else {
var m__44540__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m,ch);
} else {
var m__44540__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m);
} else {
var m__44540__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m,state_map);
} else {
var m__44540__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44539__auto__ = (((m == null))?null:m);
var m__44540__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,m,mode);
} else {
var m__44540__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45090__auto__ = [];
var len__45083__auto___50089 = arguments.length;
var i__45084__auto___50090 = (0);
while(true){
if((i__45084__auto___50090 < len__45083__auto___50089)){
args__45090__auto__.push((arguments[i__45084__auto___50090]));

var G__50091 = (i__45084__auto___50090 + (1));
i__45084__auto___50090 = G__50091;
continue;
} else {
}
break;
}

var argseq__45091__auto__ = ((((3) < args__45090__auto__.length))?(new cljs.core.IndexedSeq(args__45090__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45091__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50083){
var map__50084 = p__50083;
var map__50084__$1 = ((((!((map__50084 == null)))?((((map__50084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50084):map__50084);
var opts = map__50084__$1;
var statearr_50086_50092 = state;
(statearr_50086_50092[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__50084,map__50084__$1,opts){
return (function (val){
var statearr_50087_50093 = state;
(statearr_50087_50093[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__50084,map__50084__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_50088_50094 = state;
(statearr_50088_50094[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50079){
var G__50080 = cljs.core.first.call(null,seq50079);
var seq50079__$1 = cljs.core.next.call(null,seq50079);
var G__50081 = cljs.core.first.call(null,seq50079__$1);
var seq50079__$2 = cljs.core.next.call(null,seq50079__$1);
var G__50082 = cljs.core.first.call(null,seq50079__$2);
var seq50079__$3 = cljs.core.next.call(null,seq50079__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50080,G__50081,G__50082,seq50079__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async50095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50095 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta50096){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta50096 = meta50096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50097,meta50096__$1){
var self__ = this;
var _50097__$1 = this;
return (new cljs.core.async.t_cljs$core$async50095(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta50096__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50097){
var self__ = this;
var _50097__$1 = this;
return self__.meta50096;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta50096","meta50096",1096279083,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50095";

cljs.core.async.t_cljs$core$async50095.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async50095");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async50095 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async50095(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta50096){
return (new cljs.core.async.t_cljs$core$async50095(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta50096));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async50095(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49200__auto___50259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50199){
var state_val_50200 = (state_50199[(1)]);
if((state_val_50200 === (7))){
var inst_50114 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50201_50260 = state_50199__$1;
(statearr_50201_50260[(2)] = inst_50114);

(statearr_50201_50260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (20))){
var inst_50126 = (state_50199[(7)]);
var state_50199__$1 = state_50199;
var statearr_50202_50261 = state_50199__$1;
(statearr_50202_50261[(2)] = inst_50126);

(statearr_50202_50261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (27))){
var state_50199__$1 = state_50199;
var statearr_50203_50262 = state_50199__$1;
(statearr_50203_50262[(2)] = null);

(statearr_50203_50262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (1))){
var inst_50101 = (state_50199[(8)]);
var inst_50101__$1 = calc_state.call(null);
var inst_50103 = (inst_50101__$1 == null);
var inst_50104 = cljs.core.not.call(null,inst_50103);
var state_50199__$1 = (function (){var statearr_50204 = state_50199;
(statearr_50204[(8)] = inst_50101__$1);

return statearr_50204;
})();
if(inst_50104){
var statearr_50205_50263 = state_50199__$1;
(statearr_50205_50263[(1)] = (2));

} else {
var statearr_50206_50264 = state_50199__$1;
(statearr_50206_50264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (24))){
var inst_50173 = (state_50199[(9)]);
var inst_50159 = (state_50199[(10)]);
var inst_50150 = (state_50199[(11)]);
var inst_50173__$1 = inst_50150.call(null,inst_50159);
var state_50199__$1 = (function (){var statearr_50207 = state_50199;
(statearr_50207[(9)] = inst_50173__$1);

return statearr_50207;
})();
if(cljs.core.truth_(inst_50173__$1)){
var statearr_50208_50265 = state_50199__$1;
(statearr_50208_50265[(1)] = (29));

} else {
var statearr_50209_50266 = state_50199__$1;
(statearr_50209_50266[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (4))){
var inst_50117 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50117)){
var statearr_50210_50267 = state_50199__$1;
(statearr_50210_50267[(1)] = (8));

} else {
var statearr_50211_50268 = state_50199__$1;
(statearr_50211_50268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (15))){
var inst_50144 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50144)){
var statearr_50212_50269 = state_50199__$1;
(statearr_50212_50269[(1)] = (19));

} else {
var statearr_50213_50270 = state_50199__$1;
(statearr_50213_50270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (21))){
var inst_50149 = (state_50199[(12)]);
var inst_50149__$1 = (state_50199[(2)]);
var inst_50150 = cljs.core.get.call(null,inst_50149__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50151 = cljs.core.get.call(null,inst_50149__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50152 = cljs.core.get.call(null,inst_50149__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50199__$1 = (function (){var statearr_50214 = state_50199;
(statearr_50214[(13)] = inst_50151);

(statearr_50214[(11)] = inst_50150);

(statearr_50214[(12)] = inst_50149__$1);

return statearr_50214;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_50199__$1,(22),inst_50152);
} else {
if((state_val_50200 === (31))){
var inst_50181 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50181)){
var statearr_50215_50271 = state_50199__$1;
(statearr_50215_50271[(1)] = (32));

} else {
var statearr_50216_50272 = state_50199__$1;
(statearr_50216_50272[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (32))){
var inst_50158 = (state_50199[(14)]);
var state_50199__$1 = state_50199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50199__$1,(35),out,inst_50158);
} else {
if((state_val_50200 === (33))){
var inst_50149 = (state_50199[(12)]);
var inst_50126 = inst_50149;
var state_50199__$1 = (function (){var statearr_50217 = state_50199;
(statearr_50217[(7)] = inst_50126);

return statearr_50217;
})();
var statearr_50218_50273 = state_50199__$1;
(statearr_50218_50273[(2)] = null);

(statearr_50218_50273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (13))){
var inst_50126 = (state_50199[(7)]);
var inst_50133 = inst_50126.cljs$lang$protocol_mask$partition0$;
var inst_50134 = (inst_50133 & (64));
var inst_50135 = inst_50126.cljs$core$ISeq$;
var inst_50136 = (cljs.core.PROTOCOL_SENTINEL === inst_50135);
var inst_50137 = (inst_50134) || (inst_50136);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50137)){
var statearr_50219_50274 = state_50199__$1;
(statearr_50219_50274[(1)] = (16));

} else {
var statearr_50220_50275 = state_50199__$1;
(statearr_50220_50275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (22))){
var inst_50159 = (state_50199[(10)]);
var inst_50158 = (state_50199[(14)]);
var inst_50157 = (state_50199[(2)]);
var inst_50158__$1 = cljs.core.nth.call(null,inst_50157,(0),null);
var inst_50159__$1 = cljs.core.nth.call(null,inst_50157,(1),null);
var inst_50160 = (inst_50158__$1 == null);
var inst_50161 = cljs.core._EQ_.call(null,inst_50159__$1,change);
var inst_50162 = (inst_50160) || (inst_50161);
var state_50199__$1 = (function (){var statearr_50221 = state_50199;
(statearr_50221[(10)] = inst_50159__$1);

(statearr_50221[(14)] = inst_50158__$1);

return statearr_50221;
})();
if(cljs.core.truth_(inst_50162)){
var statearr_50222_50276 = state_50199__$1;
(statearr_50222_50276[(1)] = (23));

} else {
var statearr_50223_50277 = state_50199__$1;
(statearr_50223_50277[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (36))){
var inst_50149 = (state_50199[(12)]);
var inst_50126 = inst_50149;
var state_50199__$1 = (function (){var statearr_50224 = state_50199;
(statearr_50224[(7)] = inst_50126);

return statearr_50224;
})();
var statearr_50225_50278 = state_50199__$1;
(statearr_50225_50278[(2)] = null);

(statearr_50225_50278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (29))){
var inst_50173 = (state_50199[(9)]);
var state_50199__$1 = state_50199;
var statearr_50226_50279 = state_50199__$1;
(statearr_50226_50279[(2)] = inst_50173);

(statearr_50226_50279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (6))){
var state_50199__$1 = state_50199;
var statearr_50227_50280 = state_50199__$1;
(statearr_50227_50280[(2)] = false);

(statearr_50227_50280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (28))){
var inst_50169 = (state_50199[(2)]);
var inst_50170 = calc_state.call(null);
var inst_50126 = inst_50170;
var state_50199__$1 = (function (){var statearr_50228 = state_50199;
(statearr_50228[(7)] = inst_50126);

(statearr_50228[(15)] = inst_50169);

return statearr_50228;
})();
var statearr_50229_50281 = state_50199__$1;
(statearr_50229_50281[(2)] = null);

(statearr_50229_50281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (25))){
var inst_50195 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50230_50282 = state_50199__$1;
(statearr_50230_50282[(2)] = inst_50195);

(statearr_50230_50282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (34))){
var inst_50193 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50231_50283 = state_50199__$1;
(statearr_50231_50283[(2)] = inst_50193);

(statearr_50231_50283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (17))){
var state_50199__$1 = state_50199;
var statearr_50232_50284 = state_50199__$1;
(statearr_50232_50284[(2)] = false);

(statearr_50232_50284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (3))){
var state_50199__$1 = state_50199;
var statearr_50233_50285 = state_50199__$1;
(statearr_50233_50285[(2)] = false);

(statearr_50233_50285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (12))){
var inst_50197 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50199__$1,inst_50197);
} else {
if((state_val_50200 === (2))){
var inst_50101 = (state_50199[(8)]);
var inst_50106 = inst_50101.cljs$lang$protocol_mask$partition0$;
var inst_50107 = (inst_50106 & (64));
var inst_50108 = inst_50101.cljs$core$ISeq$;
var inst_50109 = (cljs.core.PROTOCOL_SENTINEL === inst_50108);
var inst_50110 = (inst_50107) || (inst_50109);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50110)){
var statearr_50234_50286 = state_50199__$1;
(statearr_50234_50286[(1)] = (5));

} else {
var statearr_50235_50287 = state_50199__$1;
(statearr_50235_50287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (23))){
var inst_50158 = (state_50199[(14)]);
var inst_50164 = (inst_50158 == null);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50164)){
var statearr_50236_50288 = state_50199__$1;
(statearr_50236_50288[(1)] = (26));

} else {
var statearr_50237_50289 = state_50199__$1;
(statearr_50237_50289[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (35))){
var inst_50184 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50184)){
var statearr_50238_50290 = state_50199__$1;
(statearr_50238_50290[(1)] = (36));

} else {
var statearr_50239_50291 = state_50199__$1;
(statearr_50239_50291[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (19))){
var inst_50126 = (state_50199[(7)]);
var inst_50146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50126);
var state_50199__$1 = state_50199;
var statearr_50240_50292 = state_50199__$1;
(statearr_50240_50292[(2)] = inst_50146);

(statearr_50240_50292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (11))){
var inst_50126 = (state_50199[(7)]);
var inst_50130 = (inst_50126 == null);
var inst_50131 = cljs.core.not.call(null,inst_50130);
var state_50199__$1 = state_50199;
if(inst_50131){
var statearr_50241_50293 = state_50199__$1;
(statearr_50241_50293[(1)] = (13));

} else {
var statearr_50242_50294 = state_50199__$1;
(statearr_50242_50294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (9))){
var inst_50101 = (state_50199[(8)]);
var state_50199__$1 = state_50199;
var statearr_50243_50295 = state_50199__$1;
(statearr_50243_50295[(2)] = inst_50101);

(statearr_50243_50295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (5))){
var state_50199__$1 = state_50199;
var statearr_50244_50296 = state_50199__$1;
(statearr_50244_50296[(2)] = true);

(statearr_50244_50296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (14))){
var state_50199__$1 = state_50199;
var statearr_50245_50297 = state_50199__$1;
(statearr_50245_50297[(2)] = false);

(statearr_50245_50297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (26))){
var inst_50159 = (state_50199[(10)]);
var inst_50166 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_50159);
var state_50199__$1 = state_50199;
var statearr_50246_50298 = state_50199__$1;
(statearr_50246_50298[(2)] = inst_50166);

(statearr_50246_50298[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (16))){
var state_50199__$1 = state_50199;
var statearr_50247_50299 = state_50199__$1;
(statearr_50247_50299[(2)] = true);

(statearr_50247_50299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (38))){
var inst_50189 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50248_50300 = state_50199__$1;
(statearr_50248_50300[(2)] = inst_50189);

(statearr_50248_50300[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (30))){
var inst_50159 = (state_50199[(10)]);
var inst_50151 = (state_50199[(13)]);
var inst_50150 = (state_50199[(11)]);
var inst_50176 = cljs.core.empty_QMARK_.call(null,inst_50150);
var inst_50177 = inst_50151.call(null,inst_50159);
var inst_50178 = cljs.core.not.call(null,inst_50177);
var inst_50179 = (inst_50176) && (inst_50178);
var state_50199__$1 = state_50199;
var statearr_50249_50301 = state_50199__$1;
(statearr_50249_50301[(2)] = inst_50179);

(statearr_50249_50301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (10))){
var inst_50101 = (state_50199[(8)]);
var inst_50122 = (state_50199[(2)]);
var inst_50123 = cljs.core.get.call(null,inst_50122,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50124 = cljs.core.get.call(null,inst_50122,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50125 = cljs.core.get.call(null,inst_50122,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50126 = inst_50101;
var state_50199__$1 = (function (){var statearr_50250 = state_50199;
(statearr_50250[(16)] = inst_50125);

(statearr_50250[(7)] = inst_50126);

(statearr_50250[(17)] = inst_50123);

(statearr_50250[(18)] = inst_50124);

return statearr_50250;
})();
var statearr_50251_50302 = state_50199__$1;
(statearr_50251_50302[(2)] = null);

(statearr_50251_50302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (18))){
var inst_50141 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50252_50303 = state_50199__$1;
(statearr_50252_50303[(2)] = inst_50141);

(statearr_50252_50303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (37))){
var state_50199__$1 = state_50199;
var statearr_50253_50304 = state_50199__$1;
(statearr_50253_50304[(2)] = null);

(statearr_50253_50304[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (8))){
var inst_50101 = (state_50199[(8)]);
var inst_50119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50101);
var state_50199__$1 = state_50199;
var statearr_50254_50305 = state_50199__$1;
(statearr_50254_50305[(2)] = inst_50119);

(statearr_50254_50305[(1)] = (10));


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
});})(c__49200__auto___50259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__49110__auto__,c__49200__auto___50259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__49111__auto__ = null;
var cljs$core$async$mix_$_state_machine__49111__auto____0 = (function (){
var statearr_50255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50255[(0)] = cljs$core$async$mix_$_state_machine__49111__auto__);

(statearr_50255[(1)] = (1));

return statearr_50255;
});
var cljs$core$async$mix_$_state_machine__49111__auto____1 = (function (state_50199){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50256){if((e50256 instanceof Object)){
var ex__49114__auto__ = e50256;
var statearr_50257_50306 = state_50199;
(statearr_50257_50306[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50307 = state_50199;
state_50199 = G__50307;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49111__auto__ = function(state_50199){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49111__auto____1.call(this,state_50199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49111__auto____0;
cljs$core$async$mix_$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49111__auto____1;
return cljs$core$async$mix_$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__49202__auto__ = (function (){var statearr_50258 = f__49201__auto__.call(null);
(statearr_50258[(6)] = c__49200__auto___50259);

return statearr_50258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44539__auto__ = (((p == null))?null:p);
var m__44540__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44540__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44539__auto__ = (((p == null))?null:p);
var m__44540__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,p,v,ch);
} else {
var m__44540__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50309 = arguments.length;
switch (G__50309) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44539__auto__ = (((p == null))?null:p);
var m__44540__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,p);
} else {
var m__44540__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44539__auto__ = (((p == null))?null:p);
var m__44540__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44539__auto__)]);
if(!((m__44540__auto__ == null))){
return m__44540__auto__.call(null,p,v);
} else {
var m__44540__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44540__auto____$1 == null))){
return m__44540__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__50313 = arguments.length;
switch (G__50313) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__43806__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__43806__auto__)){
return or__43806__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__43806__auto__,mults){
return (function (p1__50311_SHARP_){
if(cljs.core.truth_(p1__50311_SHARP_.call(null,topic))){
return p1__50311_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__50311_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__43806__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async50314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50314 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50315){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50315 = meta50315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50316,meta50315__$1){
var self__ = this;
var _50316__$1 = this;
return (new cljs.core.async.t_cljs$core$async50314(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50315__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50316){
var self__ = this;
var _50316__$1 = this;
return self__.meta50315;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50315","meta50315",1633469499,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50314";

cljs.core.async.t_cljs$core$async50314.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async50314");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async50314 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50315){
return (new cljs.core.async.t_cljs$core$async50314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50315));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50314(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49200__auto___50434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50434,mults,ensure_mult,p){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50434,mults,ensure_mult,p){
return (function (state_50388){
var state_val_50389 = (state_50388[(1)]);
if((state_val_50389 === (7))){
var inst_50384 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
var statearr_50390_50435 = state_50388__$1;
(statearr_50390_50435[(2)] = inst_50384);

(statearr_50390_50435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (20))){
var state_50388__$1 = state_50388;
var statearr_50391_50436 = state_50388__$1;
(statearr_50391_50436[(2)] = null);

(statearr_50391_50436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (1))){
var state_50388__$1 = state_50388;
var statearr_50392_50437 = state_50388__$1;
(statearr_50392_50437[(2)] = null);

(statearr_50392_50437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (24))){
var inst_50367 = (state_50388[(7)]);
var inst_50376 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50367);
var state_50388__$1 = state_50388;
var statearr_50393_50438 = state_50388__$1;
(statearr_50393_50438[(2)] = inst_50376);

(statearr_50393_50438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (4))){
var inst_50319 = (state_50388[(8)]);
var inst_50319__$1 = (state_50388[(2)]);
var inst_50320 = (inst_50319__$1 == null);
var state_50388__$1 = (function (){var statearr_50394 = state_50388;
(statearr_50394[(8)] = inst_50319__$1);

return statearr_50394;
})();
if(cljs.core.truth_(inst_50320)){
var statearr_50395_50439 = state_50388__$1;
(statearr_50395_50439[(1)] = (5));

} else {
var statearr_50396_50440 = state_50388__$1;
(statearr_50396_50440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (15))){
var inst_50361 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
var statearr_50397_50441 = state_50388__$1;
(statearr_50397_50441[(2)] = inst_50361);

(statearr_50397_50441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (21))){
var inst_50381 = (state_50388[(2)]);
var state_50388__$1 = (function (){var statearr_50398 = state_50388;
(statearr_50398[(9)] = inst_50381);

return statearr_50398;
})();
var statearr_50399_50442 = state_50388__$1;
(statearr_50399_50442[(2)] = null);

(statearr_50399_50442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (13))){
var inst_50343 = (state_50388[(10)]);
var inst_50345 = cljs.core.chunked_seq_QMARK_.call(null,inst_50343);
var state_50388__$1 = state_50388;
if(inst_50345){
var statearr_50400_50443 = state_50388__$1;
(statearr_50400_50443[(1)] = (16));

} else {
var statearr_50401_50444 = state_50388__$1;
(statearr_50401_50444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (22))){
var inst_50373 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
if(cljs.core.truth_(inst_50373)){
var statearr_50402_50445 = state_50388__$1;
(statearr_50402_50445[(1)] = (23));

} else {
var statearr_50403_50446 = state_50388__$1;
(statearr_50403_50446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (6))){
var inst_50319 = (state_50388[(8)]);
var inst_50367 = (state_50388[(7)]);
var inst_50369 = (state_50388[(11)]);
var inst_50367__$1 = topic_fn.call(null,inst_50319);
var inst_50368 = cljs.core.deref.call(null,mults);
var inst_50369__$1 = cljs.core.get.call(null,inst_50368,inst_50367__$1);
var state_50388__$1 = (function (){var statearr_50404 = state_50388;
(statearr_50404[(7)] = inst_50367__$1);

(statearr_50404[(11)] = inst_50369__$1);

return statearr_50404;
})();
if(cljs.core.truth_(inst_50369__$1)){
var statearr_50405_50447 = state_50388__$1;
(statearr_50405_50447[(1)] = (19));

} else {
var statearr_50406_50448 = state_50388__$1;
(statearr_50406_50448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (25))){
var inst_50378 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
var statearr_50407_50449 = state_50388__$1;
(statearr_50407_50449[(2)] = inst_50378);

(statearr_50407_50449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (17))){
var inst_50343 = (state_50388[(10)]);
var inst_50352 = cljs.core.first.call(null,inst_50343);
var inst_50353 = cljs.core.async.muxch_STAR_.call(null,inst_50352);
var inst_50354 = cljs.core.async.close_BANG_.call(null,inst_50353);
var inst_50355 = cljs.core.next.call(null,inst_50343);
var inst_50329 = inst_50355;
var inst_50330 = null;
var inst_50331 = (0);
var inst_50332 = (0);
var state_50388__$1 = (function (){var statearr_50408 = state_50388;
(statearr_50408[(12)] = inst_50331);

(statearr_50408[(13)] = inst_50329);

(statearr_50408[(14)] = inst_50354);

(statearr_50408[(15)] = inst_50330);

(statearr_50408[(16)] = inst_50332);

return statearr_50408;
})();
var statearr_50409_50450 = state_50388__$1;
(statearr_50409_50450[(2)] = null);

(statearr_50409_50450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (3))){
var inst_50386 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50388__$1,inst_50386);
} else {
if((state_val_50389 === (12))){
var inst_50363 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
var statearr_50410_50451 = state_50388__$1;
(statearr_50410_50451[(2)] = inst_50363);

(statearr_50410_50451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (2))){
var state_50388__$1 = state_50388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50388__$1,(4),ch);
} else {
if((state_val_50389 === (23))){
var state_50388__$1 = state_50388;
var statearr_50411_50452 = state_50388__$1;
(statearr_50411_50452[(2)] = null);

(statearr_50411_50452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (19))){
var inst_50319 = (state_50388[(8)]);
var inst_50369 = (state_50388[(11)]);
var inst_50371 = cljs.core.async.muxch_STAR_.call(null,inst_50369);
var state_50388__$1 = state_50388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50388__$1,(22),inst_50371,inst_50319);
} else {
if((state_val_50389 === (11))){
var inst_50343 = (state_50388[(10)]);
var inst_50329 = (state_50388[(13)]);
var inst_50343__$1 = cljs.core.seq.call(null,inst_50329);
var state_50388__$1 = (function (){var statearr_50412 = state_50388;
(statearr_50412[(10)] = inst_50343__$1);

return statearr_50412;
})();
if(inst_50343__$1){
var statearr_50413_50453 = state_50388__$1;
(statearr_50413_50453[(1)] = (13));

} else {
var statearr_50414_50454 = state_50388__$1;
(statearr_50414_50454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (9))){
var inst_50365 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
var statearr_50415_50455 = state_50388__$1;
(statearr_50415_50455[(2)] = inst_50365);

(statearr_50415_50455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (5))){
var inst_50326 = cljs.core.deref.call(null,mults);
var inst_50327 = cljs.core.vals.call(null,inst_50326);
var inst_50328 = cljs.core.seq.call(null,inst_50327);
var inst_50329 = inst_50328;
var inst_50330 = null;
var inst_50331 = (0);
var inst_50332 = (0);
var state_50388__$1 = (function (){var statearr_50416 = state_50388;
(statearr_50416[(12)] = inst_50331);

(statearr_50416[(13)] = inst_50329);

(statearr_50416[(15)] = inst_50330);

(statearr_50416[(16)] = inst_50332);

return statearr_50416;
})();
var statearr_50417_50456 = state_50388__$1;
(statearr_50417_50456[(2)] = null);

(statearr_50417_50456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (14))){
var state_50388__$1 = state_50388;
var statearr_50421_50457 = state_50388__$1;
(statearr_50421_50457[(2)] = null);

(statearr_50421_50457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (16))){
var inst_50343 = (state_50388[(10)]);
var inst_50347 = cljs.core.chunk_first.call(null,inst_50343);
var inst_50348 = cljs.core.chunk_rest.call(null,inst_50343);
var inst_50349 = cljs.core.count.call(null,inst_50347);
var inst_50329 = inst_50348;
var inst_50330 = inst_50347;
var inst_50331 = inst_50349;
var inst_50332 = (0);
var state_50388__$1 = (function (){var statearr_50422 = state_50388;
(statearr_50422[(12)] = inst_50331);

(statearr_50422[(13)] = inst_50329);

(statearr_50422[(15)] = inst_50330);

(statearr_50422[(16)] = inst_50332);

return statearr_50422;
})();
var statearr_50423_50458 = state_50388__$1;
(statearr_50423_50458[(2)] = null);

(statearr_50423_50458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (10))){
var inst_50331 = (state_50388[(12)]);
var inst_50329 = (state_50388[(13)]);
var inst_50330 = (state_50388[(15)]);
var inst_50332 = (state_50388[(16)]);
var inst_50337 = cljs.core._nth.call(null,inst_50330,inst_50332);
var inst_50338 = cljs.core.async.muxch_STAR_.call(null,inst_50337);
var inst_50339 = cljs.core.async.close_BANG_.call(null,inst_50338);
var inst_50340 = (inst_50332 + (1));
var tmp50418 = inst_50331;
var tmp50419 = inst_50329;
var tmp50420 = inst_50330;
var inst_50329__$1 = tmp50419;
var inst_50330__$1 = tmp50420;
var inst_50331__$1 = tmp50418;
var inst_50332__$1 = inst_50340;
var state_50388__$1 = (function (){var statearr_50424 = state_50388;
(statearr_50424[(17)] = inst_50339);

(statearr_50424[(12)] = inst_50331__$1);

(statearr_50424[(13)] = inst_50329__$1);

(statearr_50424[(15)] = inst_50330__$1);

(statearr_50424[(16)] = inst_50332__$1);

return statearr_50424;
})();
var statearr_50425_50459 = state_50388__$1;
(statearr_50425_50459[(2)] = null);

(statearr_50425_50459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (18))){
var inst_50358 = (state_50388[(2)]);
var state_50388__$1 = state_50388;
var statearr_50426_50460 = state_50388__$1;
(statearr_50426_50460[(2)] = inst_50358);

(statearr_50426_50460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50389 === (8))){
var inst_50331 = (state_50388[(12)]);
var inst_50332 = (state_50388[(16)]);
var inst_50334 = (inst_50332 < inst_50331);
var inst_50335 = inst_50334;
var state_50388__$1 = state_50388;
if(cljs.core.truth_(inst_50335)){
var statearr_50427_50461 = state_50388__$1;
(statearr_50427_50461[(1)] = (10));

} else {
var statearr_50428_50462 = state_50388__$1;
(statearr_50428_50462[(1)] = (11));

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
});})(c__49200__auto___50434,mults,ensure_mult,p))
;
return ((function (switch__49110__auto__,c__49200__auto___50434,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_50429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50429[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_50429[(1)] = (1));

return statearr_50429;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_50388){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50430){if((e50430 instanceof Object)){
var ex__49114__auto__ = e50430;
var statearr_50431_50463 = state_50388;
(statearr_50431_50463[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50464 = state_50388;
state_50388 = G__50464;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_50388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_50388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50434,mults,ensure_mult,p))
})();
var state__49202__auto__ = (function (){var statearr_50432 = f__49201__auto__.call(null);
(statearr_50432[(6)] = c__49200__auto___50434);

return statearr_50432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50434,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__50466 = arguments.length;
switch (G__50466) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__50469 = arguments.length;
switch (G__50469) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__50472 = arguments.length;
switch (G__50472) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__49200__auto___50539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50511){
var state_val_50512 = (state_50511[(1)]);
if((state_val_50512 === (7))){
var state_50511__$1 = state_50511;
var statearr_50513_50540 = state_50511__$1;
(statearr_50513_50540[(2)] = null);

(statearr_50513_50540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (1))){
var state_50511__$1 = state_50511;
var statearr_50514_50541 = state_50511__$1;
(statearr_50514_50541[(2)] = null);

(statearr_50514_50541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (4))){
var inst_50475 = (state_50511[(7)]);
var inst_50477 = (inst_50475 < cnt);
var state_50511__$1 = state_50511;
if(cljs.core.truth_(inst_50477)){
var statearr_50515_50542 = state_50511__$1;
(statearr_50515_50542[(1)] = (6));

} else {
var statearr_50516_50543 = state_50511__$1;
(statearr_50516_50543[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (15))){
var inst_50507 = (state_50511[(2)]);
var state_50511__$1 = state_50511;
var statearr_50517_50544 = state_50511__$1;
(statearr_50517_50544[(2)] = inst_50507);

(statearr_50517_50544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (13))){
var inst_50500 = cljs.core.async.close_BANG_.call(null,out);
var state_50511__$1 = state_50511;
var statearr_50518_50545 = state_50511__$1;
(statearr_50518_50545[(2)] = inst_50500);

(statearr_50518_50545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (6))){
var state_50511__$1 = state_50511;
var statearr_50519_50546 = state_50511__$1;
(statearr_50519_50546[(2)] = null);

(statearr_50519_50546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (3))){
var inst_50509 = (state_50511[(2)]);
var state_50511__$1 = state_50511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50511__$1,inst_50509);
} else {
if((state_val_50512 === (12))){
var inst_50497 = (state_50511[(8)]);
var inst_50497__$1 = (state_50511[(2)]);
var inst_50498 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50497__$1);
var state_50511__$1 = (function (){var statearr_50520 = state_50511;
(statearr_50520[(8)] = inst_50497__$1);

return statearr_50520;
})();
if(cljs.core.truth_(inst_50498)){
var statearr_50521_50547 = state_50511__$1;
(statearr_50521_50547[(1)] = (13));

} else {
var statearr_50522_50548 = state_50511__$1;
(statearr_50522_50548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (2))){
var inst_50474 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50475 = (0);
var state_50511__$1 = (function (){var statearr_50523 = state_50511;
(statearr_50523[(7)] = inst_50475);

(statearr_50523[(9)] = inst_50474);

return statearr_50523;
})();
var statearr_50524_50549 = state_50511__$1;
(statearr_50524_50549[(2)] = null);

(statearr_50524_50549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (11))){
var inst_50475 = (state_50511[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50511,(10),Object,null,(9));
var inst_50484 = chs__$1.call(null,inst_50475);
var inst_50485 = done.call(null,inst_50475);
var inst_50486 = cljs.core.async.take_BANG_.call(null,inst_50484,inst_50485);
var state_50511__$1 = state_50511;
var statearr_50525_50550 = state_50511__$1;
(statearr_50525_50550[(2)] = inst_50486);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (9))){
var inst_50475 = (state_50511[(7)]);
var inst_50488 = (state_50511[(2)]);
var inst_50489 = (inst_50475 + (1));
var inst_50475__$1 = inst_50489;
var state_50511__$1 = (function (){var statearr_50526 = state_50511;
(statearr_50526[(7)] = inst_50475__$1);

(statearr_50526[(10)] = inst_50488);

return statearr_50526;
})();
var statearr_50527_50551 = state_50511__$1;
(statearr_50527_50551[(2)] = null);

(statearr_50527_50551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (5))){
var inst_50495 = (state_50511[(2)]);
var state_50511__$1 = (function (){var statearr_50528 = state_50511;
(statearr_50528[(11)] = inst_50495);

return statearr_50528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50511__$1,(12),dchan);
} else {
if((state_val_50512 === (14))){
var inst_50497 = (state_50511[(8)]);
var inst_50502 = cljs.core.apply.call(null,f,inst_50497);
var state_50511__$1 = state_50511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50511__$1,(16),out,inst_50502);
} else {
if((state_val_50512 === (16))){
var inst_50504 = (state_50511[(2)]);
var state_50511__$1 = (function (){var statearr_50529 = state_50511;
(statearr_50529[(12)] = inst_50504);

return statearr_50529;
})();
var statearr_50530_50552 = state_50511__$1;
(statearr_50530_50552[(2)] = null);

(statearr_50530_50552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (10))){
var inst_50479 = (state_50511[(2)]);
var inst_50480 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50511__$1 = (function (){var statearr_50531 = state_50511;
(statearr_50531[(13)] = inst_50479);

return statearr_50531;
})();
var statearr_50532_50553 = state_50511__$1;
(statearr_50532_50553[(2)] = inst_50480);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50512 === (8))){
var inst_50493 = (state_50511[(2)]);
var state_50511__$1 = state_50511;
var statearr_50533_50554 = state_50511__$1;
(statearr_50533_50554[(2)] = inst_50493);

(statearr_50533_50554[(1)] = (5));


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
});})(c__49200__auto___50539,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__49110__auto__,c__49200__auto___50539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_50534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50534[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_50534[(1)] = (1));

return statearr_50534;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_50511){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50535){if((e50535 instanceof Object)){
var ex__49114__auto__ = e50535;
var statearr_50536_50555 = state_50511;
(statearr_50536_50555[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50556 = state_50511;
state_50511 = G__50556;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_50511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_50511);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50539,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__49202__auto__ = (function (){var statearr_50537 = f__49201__auto__.call(null);
(statearr_50537[(6)] = c__49200__auto___50539);

return statearr_50537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50539,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__50559 = arguments.length;
switch (G__50559) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49200__auto___50613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50613,out){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50613,out){
return (function (state_50591){
var state_val_50592 = (state_50591[(1)]);
if((state_val_50592 === (7))){
var inst_50571 = (state_50591[(7)]);
var inst_50570 = (state_50591[(8)]);
var inst_50570__$1 = (state_50591[(2)]);
var inst_50571__$1 = cljs.core.nth.call(null,inst_50570__$1,(0),null);
var inst_50572 = cljs.core.nth.call(null,inst_50570__$1,(1),null);
var inst_50573 = (inst_50571__$1 == null);
var state_50591__$1 = (function (){var statearr_50593 = state_50591;
(statearr_50593[(7)] = inst_50571__$1);

(statearr_50593[(9)] = inst_50572);

(statearr_50593[(8)] = inst_50570__$1);

return statearr_50593;
})();
if(cljs.core.truth_(inst_50573)){
var statearr_50594_50614 = state_50591__$1;
(statearr_50594_50614[(1)] = (8));

} else {
var statearr_50595_50615 = state_50591__$1;
(statearr_50595_50615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (1))){
var inst_50560 = cljs.core.vec.call(null,chs);
var inst_50561 = inst_50560;
var state_50591__$1 = (function (){var statearr_50596 = state_50591;
(statearr_50596[(10)] = inst_50561);

return statearr_50596;
})();
var statearr_50597_50616 = state_50591__$1;
(statearr_50597_50616[(2)] = null);

(statearr_50597_50616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (4))){
var inst_50561 = (state_50591[(10)]);
var state_50591__$1 = state_50591;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50591__$1,(7),inst_50561);
} else {
if((state_val_50592 === (6))){
var inst_50587 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
var statearr_50598_50617 = state_50591__$1;
(statearr_50598_50617[(2)] = inst_50587);

(statearr_50598_50617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (3))){
var inst_50589 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50591__$1,inst_50589);
} else {
if((state_val_50592 === (2))){
var inst_50561 = (state_50591[(10)]);
var inst_50563 = cljs.core.count.call(null,inst_50561);
var inst_50564 = (inst_50563 > (0));
var state_50591__$1 = state_50591;
if(cljs.core.truth_(inst_50564)){
var statearr_50600_50618 = state_50591__$1;
(statearr_50600_50618[(1)] = (4));

} else {
var statearr_50601_50619 = state_50591__$1;
(statearr_50601_50619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (11))){
var inst_50561 = (state_50591[(10)]);
var inst_50580 = (state_50591[(2)]);
var tmp50599 = inst_50561;
var inst_50561__$1 = tmp50599;
var state_50591__$1 = (function (){var statearr_50602 = state_50591;
(statearr_50602[(10)] = inst_50561__$1);

(statearr_50602[(11)] = inst_50580);

return statearr_50602;
})();
var statearr_50603_50620 = state_50591__$1;
(statearr_50603_50620[(2)] = null);

(statearr_50603_50620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (9))){
var inst_50571 = (state_50591[(7)]);
var state_50591__$1 = state_50591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50591__$1,(11),out,inst_50571);
} else {
if((state_val_50592 === (5))){
var inst_50585 = cljs.core.async.close_BANG_.call(null,out);
var state_50591__$1 = state_50591;
var statearr_50604_50621 = state_50591__$1;
(statearr_50604_50621[(2)] = inst_50585);

(statearr_50604_50621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (10))){
var inst_50583 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
var statearr_50605_50622 = state_50591__$1;
(statearr_50605_50622[(2)] = inst_50583);

(statearr_50605_50622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (8))){
var inst_50571 = (state_50591[(7)]);
var inst_50561 = (state_50591[(10)]);
var inst_50572 = (state_50591[(9)]);
var inst_50570 = (state_50591[(8)]);
var inst_50575 = (function (){var cs = inst_50561;
var vec__50566 = inst_50570;
var v = inst_50571;
var c = inst_50572;
return ((function (cs,vec__50566,v,c,inst_50571,inst_50561,inst_50572,inst_50570,state_val_50592,c__49200__auto___50613,out){
return (function (p1__50557_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50557_SHARP_);
});
;})(cs,vec__50566,v,c,inst_50571,inst_50561,inst_50572,inst_50570,state_val_50592,c__49200__auto___50613,out))
})();
var inst_50576 = cljs.core.filterv.call(null,inst_50575,inst_50561);
var inst_50561__$1 = inst_50576;
var state_50591__$1 = (function (){var statearr_50606 = state_50591;
(statearr_50606[(10)] = inst_50561__$1);

return statearr_50606;
})();
var statearr_50607_50623 = state_50591__$1;
(statearr_50607_50623[(2)] = null);

(statearr_50607_50623[(1)] = (2));


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
});})(c__49200__auto___50613,out))
;
return ((function (switch__49110__auto__,c__49200__auto___50613,out){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_50608 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50608[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_50608[(1)] = (1));

return statearr_50608;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_50591){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50609){if((e50609 instanceof Object)){
var ex__49114__auto__ = e50609;
var statearr_50610_50624 = state_50591;
(statearr_50610_50624[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50625 = state_50591;
state_50591 = G__50625;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_50591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_50591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50613,out))
})();
var state__49202__auto__ = (function (){var statearr_50611 = f__49201__auto__.call(null);
(statearr_50611[(6)] = c__49200__auto___50613);

return statearr_50611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50613,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__50627 = arguments.length;
switch (G__50627) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49200__auto___50672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50672,out){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50672,out){
return (function (state_50651){
var state_val_50652 = (state_50651[(1)]);
if((state_val_50652 === (7))){
var inst_50633 = (state_50651[(7)]);
var inst_50633__$1 = (state_50651[(2)]);
var inst_50634 = (inst_50633__$1 == null);
var inst_50635 = cljs.core.not.call(null,inst_50634);
var state_50651__$1 = (function (){var statearr_50653 = state_50651;
(statearr_50653[(7)] = inst_50633__$1);

return statearr_50653;
})();
if(inst_50635){
var statearr_50654_50673 = state_50651__$1;
(statearr_50654_50673[(1)] = (8));

} else {
var statearr_50655_50674 = state_50651__$1;
(statearr_50655_50674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (1))){
var inst_50628 = (0);
var state_50651__$1 = (function (){var statearr_50656 = state_50651;
(statearr_50656[(8)] = inst_50628);

return statearr_50656;
})();
var statearr_50657_50675 = state_50651__$1;
(statearr_50657_50675[(2)] = null);

(statearr_50657_50675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (4))){
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(7),ch);
} else {
if((state_val_50652 === (6))){
var inst_50646 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50658_50676 = state_50651__$1;
(statearr_50658_50676[(2)] = inst_50646);

(statearr_50658_50676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (3))){
var inst_50648 = (state_50651[(2)]);
var inst_50649 = cljs.core.async.close_BANG_.call(null,out);
var state_50651__$1 = (function (){var statearr_50659 = state_50651;
(statearr_50659[(9)] = inst_50648);

return statearr_50659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50651__$1,inst_50649);
} else {
if((state_val_50652 === (2))){
var inst_50628 = (state_50651[(8)]);
var inst_50630 = (inst_50628 < n);
var state_50651__$1 = state_50651;
if(cljs.core.truth_(inst_50630)){
var statearr_50660_50677 = state_50651__$1;
(statearr_50660_50677[(1)] = (4));

} else {
var statearr_50661_50678 = state_50651__$1;
(statearr_50661_50678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (11))){
var inst_50628 = (state_50651[(8)]);
var inst_50638 = (state_50651[(2)]);
var inst_50639 = (inst_50628 + (1));
var inst_50628__$1 = inst_50639;
var state_50651__$1 = (function (){var statearr_50662 = state_50651;
(statearr_50662[(8)] = inst_50628__$1);

(statearr_50662[(10)] = inst_50638);

return statearr_50662;
})();
var statearr_50663_50679 = state_50651__$1;
(statearr_50663_50679[(2)] = null);

(statearr_50663_50679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (9))){
var state_50651__$1 = state_50651;
var statearr_50664_50680 = state_50651__$1;
(statearr_50664_50680[(2)] = null);

(statearr_50664_50680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (5))){
var state_50651__$1 = state_50651;
var statearr_50665_50681 = state_50651__$1;
(statearr_50665_50681[(2)] = null);

(statearr_50665_50681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (10))){
var inst_50643 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50666_50682 = state_50651__$1;
(statearr_50666_50682[(2)] = inst_50643);

(statearr_50666_50682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50652 === (8))){
var inst_50633 = (state_50651[(7)]);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50651__$1,(11),out,inst_50633);
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
});})(c__49200__auto___50672,out))
;
return ((function (switch__49110__auto__,c__49200__auto___50672,out){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_50667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50667[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_50667[(1)] = (1));

return statearr_50667;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_50651){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50668){if((e50668 instanceof Object)){
var ex__49114__auto__ = e50668;
var statearr_50669_50683 = state_50651;
(statearr_50669_50683[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50684 = state_50651;
state_50651 = G__50684;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_50651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_50651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50672,out))
})();
var state__49202__auto__ = (function (){var statearr_50670 = f__49201__auto__.call(null);
(statearr_50670[(6)] = c__49200__auto___50672);

return statearr_50670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50672,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50686 = (function (f,ch,meta50687){
this.f = f;
this.ch = ch;
this.meta50687 = meta50687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50688,meta50687__$1){
var self__ = this;
var _50688__$1 = this;
return (new cljs.core.async.t_cljs$core$async50686(self__.f,self__.ch,meta50687__$1));
});

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50688){
var self__ = this;
var _50688__$1 = this;
return self__.meta50687;
});

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async50689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50689 = (function (f,ch,meta50687,_,fn1,meta50690){
this.f = f;
this.ch = ch;
this.meta50687 = meta50687;
this._ = _;
this.fn1 = fn1;
this.meta50690 = meta50690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50691,meta50690__$1){
var self__ = this;
var _50691__$1 = this;
return (new cljs.core.async.t_cljs$core$async50689(self__.f,self__.ch,self__.meta50687,self__._,self__.fn1,meta50690__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async50689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50691){
var self__ = this;
var _50691__$1 = this;
return self__.meta50690;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50685_SHARP_){
return f1.call(null,(((p1__50685_SHARP_ == null))?null:self__.f.call(null,p1__50685_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50689.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50687","meta50687",657810371,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50686","cljs.core.async/t_cljs$core$async50686",-875456005,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50690","meta50690",257765544,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50689";

cljs.core.async.t_cljs$core$async50689.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async50689");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async50689 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50689(f__$1,ch__$1,meta50687__$1,___$2,fn1__$1,meta50690){
return (new cljs.core.async.t_cljs$core$async50689(f__$1,ch__$1,meta50687__$1,___$2,fn1__$1,meta50690));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50689(self__.f,self__.ch,self__.meta50687,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__43794__auto__ = ret;
if(cljs.core.truth_(and__43794__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__43794__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50687","meta50687",657810371,null)], null);
});

cljs.core.async.t_cljs$core$async50686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50686";

cljs.core.async.t_cljs$core$async50686.cljs$lang$ctorPrWriter = (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async50686");
});

cljs.core.async.__GT_t_cljs$core$async50686 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50686(f__$1,ch__$1,meta50687){
return (new cljs.core.async.t_cljs$core$async50686(f__$1,ch__$1,meta50687));
});

}

return (new cljs.core.async.t_cljs$core$async50686(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50692 = (function (f,ch,meta50693){
this.f = f;
this.ch = ch;
this.meta50693 = meta50693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50694,meta50693__$1){
var self__ = this;
var _50694__$1 = this;
return (new cljs.core.async.t_cljs$core$async50692(self__.f,self__.ch,meta50693__$1));
});

cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50694){
var self__ = this;
var _50694__$1 = this;
return self__.meta50693;
});

cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async50692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50693","meta50693",-247511590,null)], null);
});

cljs.core.async.t_cljs$core$async50692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50692";

cljs.core.async.t_cljs$core$async50692.cljs$lang$ctorPrWriter = (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async50692");
});

cljs.core.async.__GT_t_cljs$core$async50692 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50692(f__$1,ch__$1,meta50693){
return (new cljs.core.async.t_cljs$core$async50692(f__$1,ch__$1,meta50693));
});

}

return (new cljs.core.async.t_cljs$core$async50692(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async50695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50695 = (function (p,ch,meta50696){
this.p = p;
this.ch = ch;
this.meta50696 = meta50696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50697,meta50696__$1){
var self__ = this;
var _50697__$1 = this;
return (new cljs.core.async.t_cljs$core$async50695(self__.p,self__.ch,meta50696__$1));
});

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50697){
var self__ = this;
var _50697__$1 = this;
return self__.meta50696;
});

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50696","meta50696",1819169836,null)], null);
});

cljs.core.async.t_cljs$core$async50695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50695";

cljs.core.async.t_cljs$core$async50695.cljs$lang$ctorPrWriter = (function (this__44477__auto__,writer__44478__auto__,opt__44479__auto__){
return cljs.core._write.call(null,writer__44478__auto__,"cljs.core.async/t_cljs$core$async50695");
});

cljs.core.async.__GT_t_cljs$core$async50695 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50695(p__$1,ch__$1,meta50696){
return (new cljs.core.async.t_cljs$core$async50695(p__$1,ch__$1,meta50696));
});

}

return (new cljs.core.async.t_cljs$core$async50695(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__50699 = arguments.length;
switch (G__50699) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49200__auto___50739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50739,out){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50739,out){
return (function (state_50720){
var state_val_50721 = (state_50720[(1)]);
if((state_val_50721 === (7))){
var inst_50716 = (state_50720[(2)]);
var state_50720__$1 = state_50720;
var statearr_50722_50740 = state_50720__$1;
(statearr_50722_50740[(2)] = inst_50716);

(statearr_50722_50740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (1))){
var state_50720__$1 = state_50720;
var statearr_50723_50741 = state_50720__$1;
(statearr_50723_50741[(2)] = null);

(statearr_50723_50741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (4))){
var inst_50702 = (state_50720[(7)]);
var inst_50702__$1 = (state_50720[(2)]);
var inst_50703 = (inst_50702__$1 == null);
var state_50720__$1 = (function (){var statearr_50724 = state_50720;
(statearr_50724[(7)] = inst_50702__$1);

return statearr_50724;
})();
if(cljs.core.truth_(inst_50703)){
var statearr_50725_50742 = state_50720__$1;
(statearr_50725_50742[(1)] = (5));

} else {
var statearr_50726_50743 = state_50720__$1;
(statearr_50726_50743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (6))){
var inst_50702 = (state_50720[(7)]);
var inst_50707 = p.call(null,inst_50702);
var state_50720__$1 = state_50720;
if(cljs.core.truth_(inst_50707)){
var statearr_50727_50744 = state_50720__$1;
(statearr_50727_50744[(1)] = (8));

} else {
var statearr_50728_50745 = state_50720__$1;
(statearr_50728_50745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (3))){
var inst_50718 = (state_50720[(2)]);
var state_50720__$1 = state_50720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50720__$1,inst_50718);
} else {
if((state_val_50721 === (2))){
var state_50720__$1 = state_50720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50720__$1,(4),ch);
} else {
if((state_val_50721 === (11))){
var inst_50710 = (state_50720[(2)]);
var state_50720__$1 = state_50720;
var statearr_50729_50746 = state_50720__$1;
(statearr_50729_50746[(2)] = inst_50710);

(statearr_50729_50746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (9))){
var state_50720__$1 = state_50720;
var statearr_50730_50747 = state_50720__$1;
(statearr_50730_50747[(2)] = null);

(statearr_50730_50747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (5))){
var inst_50705 = cljs.core.async.close_BANG_.call(null,out);
var state_50720__$1 = state_50720;
var statearr_50731_50748 = state_50720__$1;
(statearr_50731_50748[(2)] = inst_50705);

(statearr_50731_50748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (10))){
var inst_50713 = (state_50720[(2)]);
var state_50720__$1 = (function (){var statearr_50732 = state_50720;
(statearr_50732[(8)] = inst_50713);

return statearr_50732;
})();
var statearr_50733_50749 = state_50720__$1;
(statearr_50733_50749[(2)] = null);

(statearr_50733_50749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50721 === (8))){
var inst_50702 = (state_50720[(7)]);
var state_50720__$1 = state_50720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50720__$1,(11),out,inst_50702);
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
});})(c__49200__auto___50739,out))
;
return ((function (switch__49110__auto__,c__49200__auto___50739,out){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_50734 = [null,null,null,null,null,null,null,null,null];
(statearr_50734[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_50734[(1)] = (1));

return statearr_50734;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_50720){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50735){if((e50735 instanceof Object)){
var ex__49114__auto__ = e50735;
var statearr_50736_50750 = state_50720;
(statearr_50736_50750[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50751 = state_50720;
state_50720 = G__50751;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_50720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_50720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50739,out))
})();
var state__49202__auto__ = (function (){var statearr_50737 = f__49201__auto__.call(null);
(statearr_50737[(6)] = c__49200__auto___50739);

return statearr_50737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50739,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50753 = arguments.length;
switch (G__50753) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto__){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto__){
return (function (state_50816){
var state_val_50817 = (state_50816[(1)]);
if((state_val_50817 === (7))){
var inst_50812 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
var statearr_50818_50856 = state_50816__$1;
(statearr_50818_50856[(2)] = inst_50812);

(statearr_50818_50856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (20))){
var inst_50782 = (state_50816[(7)]);
var inst_50793 = (state_50816[(2)]);
var inst_50794 = cljs.core.next.call(null,inst_50782);
var inst_50768 = inst_50794;
var inst_50769 = null;
var inst_50770 = (0);
var inst_50771 = (0);
var state_50816__$1 = (function (){var statearr_50819 = state_50816;
(statearr_50819[(8)] = inst_50769);

(statearr_50819[(9)] = inst_50770);

(statearr_50819[(10)] = inst_50793);

(statearr_50819[(11)] = inst_50771);

(statearr_50819[(12)] = inst_50768);

return statearr_50819;
})();
var statearr_50820_50857 = state_50816__$1;
(statearr_50820_50857[(2)] = null);

(statearr_50820_50857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (1))){
var state_50816__$1 = state_50816;
var statearr_50821_50858 = state_50816__$1;
(statearr_50821_50858[(2)] = null);

(statearr_50821_50858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (4))){
var inst_50757 = (state_50816[(13)]);
var inst_50757__$1 = (state_50816[(2)]);
var inst_50758 = (inst_50757__$1 == null);
var state_50816__$1 = (function (){var statearr_50822 = state_50816;
(statearr_50822[(13)] = inst_50757__$1);

return statearr_50822;
})();
if(cljs.core.truth_(inst_50758)){
var statearr_50823_50859 = state_50816__$1;
(statearr_50823_50859[(1)] = (5));

} else {
var statearr_50824_50860 = state_50816__$1;
(statearr_50824_50860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (15))){
var state_50816__$1 = state_50816;
var statearr_50828_50861 = state_50816__$1;
(statearr_50828_50861[(2)] = null);

(statearr_50828_50861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (21))){
var state_50816__$1 = state_50816;
var statearr_50829_50862 = state_50816__$1;
(statearr_50829_50862[(2)] = null);

(statearr_50829_50862[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (13))){
var inst_50769 = (state_50816[(8)]);
var inst_50770 = (state_50816[(9)]);
var inst_50771 = (state_50816[(11)]);
var inst_50768 = (state_50816[(12)]);
var inst_50778 = (state_50816[(2)]);
var inst_50779 = (inst_50771 + (1));
var tmp50825 = inst_50769;
var tmp50826 = inst_50770;
var tmp50827 = inst_50768;
var inst_50768__$1 = tmp50827;
var inst_50769__$1 = tmp50825;
var inst_50770__$1 = tmp50826;
var inst_50771__$1 = inst_50779;
var state_50816__$1 = (function (){var statearr_50830 = state_50816;
(statearr_50830[(8)] = inst_50769__$1);

(statearr_50830[(14)] = inst_50778);

(statearr_50830[(9)] = inst_50770__$1);

(statearr_50830[(11)] = inst_50771__$1);

(statearr_50830[(12)] = inst_50768__$1);

return statearr_50830;
})();
var statearr_50831_50863 = state_50816__$1;
(statearr_50831_50863[(2)] = null);

(statearr_50831_50863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (22))){
var state_50816__$1 = state_50816;
var statearr_50832_50864 = state_50816__$1;
(statearr_50832_50864[(2)] = null);

(statearr_50832_50864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (6))){
var inst_50757 = (state_50816[(13)]);
var inst_50766 = f.call(null,inst_50757);
var inst_50767 = cljs.core.seq.call(null,inst_50766);
var inst_50768 = inst_50767;
var inst_50769 = null;
var inst_50770 = (0);
var inst_50771 = (0);
var state_50816__$1 = (function (){var statearr_50833 = state_50816;
(statearr_50833[(8)] = inst_50769);

(statearr_50833[(9)] = inst_50770);

(statearr_50833[(11)] = inst_50771);

(statearr_50833[(12)] = inst_50768);

return statearr_50833;
})();
var statearr_50834_50865 = state_50816__$1;
(statearr_50834_50865[(2)] = null);

(statearr_50834_50865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (17))){
var inst_50782 = (state_50816[(7)]);
var inst_50786 = cljs.core.chunk_first.call(null,inst_50782);
var inst_50787 = cljs.core.chunk_rest.call(null,inst_50782);
var inst_50788 = cljs.core.count.call(null,inst_50786);
var inst_50768 = inst_50787;
var inst_50769 = inst_50786;
var inst_50770 = inst_50788;
var inst_50771 = (0);
var state_50816__$1 = (function (){var statearr_50835 = state_50816;
(statearr_50835[(8)] = inst_50769);

(statearr_50835[(9)] = inst_50770);

(statearr_50835[(11)] = inst_50771);

(statearr_50835[(12)] = inst_50768);

return statearr_50835;
})();
var statearr_50836_50866 = state_50816__$1;
(statearr_50836_50866[(2)] = null);

(statearr_50836_50866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (3))){
var inst_50814 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50816__$1,inst_50814);
} else {
if((state_val_50817 === (12))){
var inst_50802 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
var statearr_50837_50867 = state_50816__$1;
(statearr_50837_50867[(2)] = inst_50802);

(statearr_50837_50867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (2))){
var state_50816__$1 = state_50816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50816__$1,(4),in$);
} else {
if((state_val_50817 === (23))){
var inst_50810 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
var statearr_50838_50868 = state_50816__$1;
(statearr_50838_50868[(2)] = inst_50810);

(statearr_50838_50868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (19))){
var inst_50797 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
var statearr_50839_50869 = state_50816__$1;
(statearr_50839_50869[(2)] = inst_50797);

(statearr_50839_50869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (11))){
var inst_50782 = (state_50816[(7)]);
var inst_50768 = (state_50816[(12)]);
var inst_50782__$1 = cljs.core.seq.call(null,inst_50768);
var state_50816__$1 = (function (){var statearr_50840 = state_50816;
(statearr_50840[(7)] = inst_50782__$1);

return statearr_50840;
})();
if(inst_50782__$1){
var statearr_50841_50870 = state_50816__$1;
(statearr_50841_50870[(1)] = (14));

} else {
var statearr_50842_50871 = state_50816__$1;
(statearr_50842_50871[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (9))){
var inst_50804 = (state_50816[(2)]);
var inst_50805 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50816__$1 = (function (){var statearr_50843 = state_50816;
(statearr_50843[(15)] = inst_50804);

return statearr_50843;
})();
if(cljs.core.truth_(inst_50805)){
var statearr_50844_50872 = state_50816__$1;
(statearr_50844_50872[(1)] = (21));

} else {
var statearr_50845_50873 = state_50816__$1;
(statearr_50845_50873[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (5))){
var inst_50760 = cljs.core.async.close_BANG_.call(null,out);
var state_50816__$1 = state_50816;
var statearr_50846_50874 = state_50816__$1;
(statearr_50846_50874[(2)] = inst_50760);

(statearr_50846_50874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (14))){
var inst_50782 = (state_50816[(7)]);
var inst_50784 = cljs.core.chunked_seq_QMARK_.call(null,inst_50782);
var state_50816__$1 = state_50816;
if(inst_50784){
var statearr_50847_50875 = state_50816__$1;
(statearr_50847_50875[(1)] = (17));

} else {
var statearr_50848_50876 = state_50816__$1;
(statearr_50848_50876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (16))){
var inst_50800 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
var statearr_50849_50877 = state_50816__$1;
(statearr_50849_50877[(2)] = inst_50800);

(statearr_50849_50877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (10))){
var inst_50769 = (state_50816[(8)]);
var inst_50771 = (state_50816[(11)]);
var inst_50776 = cljs.core._nth.call(null,inst_50769,inst_50771);
var state_50816__$1 = state_50816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50816__$1,(13),out,inst_50776);
} else {
if((state_val_50817 === (18))){
var inst_50782 = (state_50816[(7)]);
var inst_50791 = cljs.core.first.call(null,inst_50782);
var state_50816__$1 = state_50816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50816__$1,(20),out,inst_50791);
} else {
if((state_val_50817 === (8))){
var inst_50770 = (state_50816[(9)]);
var inst_50771 = (state_50816[(11)]);
var inst_50773 = (inst_50771 < inst_50770);
var inst_50774 = inst_50773;
var state_50816__$1 = state_50816;
if(cljs.core.truth_(inst_50774)){
var statearr_50850_50878 = state_50816__$1;
(statearr_50850_50878[(1)] = (10));

} else {
var statearr_50851_50879 = state_50816__$1;
(statearr_50851_50879[(1)] = (11));

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
});})(c__49200__auto__))
;
return ((function (switch__49110__auto__,c__49200__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49111__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49111__auto____0 = (function (){
var statearr_50852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50852[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49111__auto__);

(statearr_50852[(1)] = (1));

return statearr_50852;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49111__auto____1 = (function (state_50816){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50853){if((e50853 instanceof Object)){
var ex__49114__auto__ = e50853;
var statearr_50854_50880 = state_50816;
(statearr_50854_50880[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50881 = state_50816;
state_50816 = G__50881;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49111__auto__ = function(state_50816){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49111__auto____1.call(this,state_50816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49111__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49111__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto__))
})();
var state__49202__auto__ = (function (){var statearr_50855 = f__49201__auto__.call(null);
(statearr_50855[(6)] = c__49200__auto__);

return statearr_50855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto__))
);

return c__49200__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50883 = arguments.length;
switch (G__50883) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50886 = arguments.length;
switch (G__50886) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50889 = arguments.length;
switch (G__50889) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49200__auto___50936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___50936,out){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___50936,out){
return (function (state_50913){
var state_val_50914 = (state_50913[(1)]);
if((state_val_50914 === (7))){
var inst_50908 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50915_50937 = state_50913__$1;
(statearr_50915_50937[(2)] = inst_50908);

(statearr_50915_50937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (1))){
var inst_50890 = null;
var state_50913__$1 = (function (){var statearr_50916 = state_50913;
(statearr_50916[(7)] = inst_50890);

return statearr_50916;
})();
var statearr_50917_50938 = state_50913__$1;
(statearr_50917_50938[(2)] = null);

(statearr_50917_50938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (4))){
var inst_50893 = (state_50913[(8)]);
var inst_50893__$1 = (state_50913[(2)]);
var inst_50894 = (inst_50893__$1 == null);
var inst_50895 = cljs.core.not.call(null,inst_50894);
var state_50913__$1 = (function (){var statearr_50918 = state_50913;
(statearr_50918[(8)] = inst_50893__$1);

return statearr_50918;
})();
if(inst_50895){
var statearr_50919_50939 = state_50913__$1;
(statearr_50919_50939[(1)] = (5));

} else {
var statearr_50920_50940 = state_50913__$1;
(statearr_50920_50940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (6))){
var state_50913__$1 = state_50913;
var statearr_50921_50941 = state_50913__$1;
(statearr_50921_50941[(2)] = null);

(statearr_50921_50941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (3))){
var inst_50910 = (state_50913[(2)]);
var inst_50911 = cljs.core.async.close_BANG_.call(null,out);
var state_50913__$1 = (function (){var statearr_50922 = state_50913;
(statearr_50922[(9)] = inst_50910);

return statearr_50922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50913__$1,inst_50911);
} else {
if((state_val_50914 === (2))){
var state_50913__$1 = state_50913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50913__$1,(4),ch);
} else {
if((state_val_50914 === (11))){
var inst_50893 = (state_50913[(8)]);
var inst_50902 = (state_50913[(2)]);
var inst_50890 = inst_50893;
var state_50913__$1 = (function (){var statearr_50923 = state_50913;
(statearr_50923[(10)] = inst_50902);

(statearr_50923[(7)] = inst_50890);

return statearr_50923;
})();
var statearr_50924_50942 = state_50913__$1;
(statearr_50924_50942[(2)] = null);

(statearr_50924_50942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (9))){
var inst_50893 = (state_50913[(8)]);
var state_50913__$1 = state_50913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50913__$1,(11),out,inst_50893);
} else {
if((state_val_50914 === (5))){
var inst_50890 = (state_50913[(7)]);
var inst_50893 = (state_50913[(8)]);
var inst_50897 = cljs.core._EQ_.call(null,inst_50893,inst_50890);
var state_50913__$1 = state_50913;
if(inst_50897){
var statearr_50926_50943 = state_50913__$1;
(statearr_50926_50943[(1)] = (8));

} else {
var statearr_50927_50944 = state_50913__$1;
(statearr_50927_50944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (10))){
var inst_50905 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50928_50945 = state_50913__$1;
(statearr_50928_50945[(2)] = inst_50905);

(statearr_50928_50945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (8))){
var inst_50890 = (state_50913[(7)]);
var tmp50925 = inst_50890;
var inst_50890__$1 = tmp50925;
var state_50913__$1 = (function (){var statearr_50929 = state_50913;
(statearr_50929[(7)] = inst_50890__$1);

return statearr_50929;
})();
var statearr_50930_50946 = state_50913__$1;
(statearr_50930_50946[(2)] = null);

(statearr_50930_50946[(1)] = (2));


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
});})(c__49200__auto___50936,out))
;
return ((function (switch__49110__auto__,c__49200__auto___50936,out){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_50931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50931[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_50931[(1)] = (1));

return statearr_50931;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_50913){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e50932){if((e50932 instanceof Object)){
var ex__49114__auto__ = e50932;
var statearr_50933_50947 = state_50913;
(statearr_50933_50947[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50948 = state_50913;
state_50913 = G__50948;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_50913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_50913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___50936,out))
})();
var state__49202__auto__ = (function (){var statearr_50934 = f__49201__auto__.call(null);
(statearr_50934[(6)] = c__49200__auto___50936);

return statearr_50934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___50936,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50950 = arguments.length;
switch (G__50950) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49200__auto___51016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___51016,out){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___51016,out){
return (function (state_50988){
var state_val_50989 = (state_50988[(1)]);
if((state_val_50989 === (7))){
var inst_50984 = (state_50988[(2)]);
var state_50988__$1 = state_50988;
var statearr_50990_51017 = state_50988__$1;
(statearr_50990_51017[(2)] = inst_50984);

(statearr_50990_51017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (1))){
var inst_50951 = (new Array(n));
var inst_50952 = inst_50951;
var inst_50953 = (0);
var state_50988__$1 = (function (){var statearr_50991 = state_50988;
(statearr_50991[(7)] = inst_50953);

(statearr_50991[(8)] = inst_50952);

return statearr_50991;
})();
var statearr_50992_51018 = state_50988__$1;
(statearr_50992_51018[(2)] = null);

(statearr_50992_51018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (4))){
var inst_50956 = (state_50988[(9)]);
var inst_50956__$1 = (state_50988[(2)]);
var inst_50957 = (inst_50956__$1 == null);
var inst_50958 = cljs.core.not.call(null,inst_50957);
var state_50988__$1 = (function (){var statearr_50993 = state_50988;
(statearr_50993[(9)] = inst_50956__$1);

return statearr_50993;
})();
if(inst_50958){
var statearr_50994_51019 = state_50988__$1;
(statearr_50994_51019[(1)] = (5));

} else {
var statearr_50995_51020 = state_50988__$1;
(statearr_50995_51020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (15))){
var inst_50978 = (state_50988[(2)]);
var state_50988__$1 = state_50988;
var statearr_50996_51021 = state_50988__$1;
(statearr_50996_51021[(2)] = inst_50978);

(statearr_50996_51021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (13))){
var state_50988__$1 = state_50988;
var statearr_50997_51022 = state_50988__$1;
(statearr_50997_51022[(2)] = null);

(statearr_50997_51022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (6))){
var inst_50953 = (state_50988[(7)]);
var inst_50974 = (inst_50953 > (0));
var state_50988__$1 = state_50988;
if(cljs.core.truth_(inst_50974)){
var statearr_50998_51023 = state_50988__$1;
(statearr_50998_51023[(1)] = (12));

} else {
var statearr_50999_51024 = state_50988__$1;
(statearr_50999_51024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (3))){
var inst_50986 = (state_50988[(2)]);
var state_50988__$1 = state_50988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50988__$1,inst_50986);
} else {
if((state_val_50989 === (12))){
var inst_50952 = (state_50988[(8)]);
var inst_50976 = cljs.core.vec.call(null,inst_50952);
var state_50988__$1 = state_50988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50988__$1,(15),out,inst_50976);
} else {
if((state_val_50989 === (2))){
var state_50988__$1 = state_50988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50988__$1,(4),ch);
} else {
if((state_val_50989 === (11))){
var inst_50968 = (state_50988[(2)]);
var inst_50969 = (new Array(n));
var inst_50952 = inst_50969;
var inst_50953 = (0);
var state_50988__$1 = (function (){var statearr_51000 = state_50988;
(statearr_51000[(10)] = inst_50968);

(statearr_51000[(7)] = inst_50953);

(statearr_51000[(8)] = inst_50952);

return statearr_51000;
})();
var statearr_51001_51025 = state_50988__$1;
(statearr_51001_51025[(2)] = null);

(statearr_51001_51025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (9))){
var inst_50952 = (state_50988[(8)]);
var inst_50966 = cljs.core.vec.call(null,inst_50952);
var state_50988__$1 = state_50988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50988__$1,(11),out,inst_50966);
} else {
if((state_val_50989 === (5))){
var inst_50961 = (state_50988[(11)]);
var inst_50953 = (state_50988[(7)]);
var inst_50956 = (state_50988[(9)]);
var inst_50952 = (state_50988[(8)]);
var inst_50960 = (inst_50952[inst_50953] = inst_50956);
var inst_50961__$1 = (inst_50953 + (1));
var inst_50962 = (inst_50961__$1 < n);
var state_50988__$1 = (function (){var statearr_51002 = state_50988;
(statearr_51002[(11)] = inst_50961__$1);

(statearr_51002[(12)] = inst_50960);

return statearr_51002;
})();
if(cljs.core.truth_(inst_50962)){
var statearr_51003_51026 = state_50988__$1;
(statearr_51003_51026[(1)] = (8));

} else {
var statearr_51004_51027 = state_50988__$1;
(statearr_51004_51027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (14))){
var inst_50981 = (state_50988[(2)]);
var inst_50982 = cljs.core.async.close_BANG_.call(null,out);
var state_50988__$1 = (function (){var statearr_51006 = state_50988;
(statearr_51006[(13)] = inst_50981);

return statearr_51006;
})();
var statearr_51007_51028 = state_50988__$1;
(statearr_51007_51028[(2)] = inst_50982);

(statearr_51007_51028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (10))){
var inst_50972 = (state_50988[(2)]);
var state_50988__$1 = state_50988;
var statearr_51008_51029 = state_50988__$1;
(statearr_51008_51029[(2)] = inst_50972);

(statearr_51008_51029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50989 === (8))){
var inst_50961 = (state_50988[(11)]);
var inst_50952 = (state_50988[(8)]);
var tmp51005 = inst_50952;
var inst_50952__$1 = tmp51005;
var inst_50953 = inst_50961;
var state_50988__$1 = (function (){var statearr_51009 = state_50988;
(statearr_51009[(7)] = inst_50953);

(statearr_51009[(8)] = inst_50952__$1);

return statearr_51009;
})();
var statearr_51010_51030 = state_50988__$1;
(statearr_51010_51030[(2)] = null);

(statearr_51010_51030[(1)] = (2));


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
});})(c__49200__auto___51016,out))
;
return ((function (switch__49110__auto__,c__49200__auto___51016,out){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_51011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51011[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_51011[(1)] = (1));

return statearr_51011;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_50988){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_50988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e51012){if((e51012 instanceof Object)){
var ex__49114__auto__ = e51012;
var statearr_51013_51031 = state_50988;
(statearr_51013_51031[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51032 = state_50988;
state_50988 = G__51032;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_50988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_50988);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___51016,out))
})();
var state__49202__auto__ = (function (){var statearr_51014 = f__49201__auto__.call(null);
(statearr_51014[(6)] = c__49200__auto___51016);

return statearr_51014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___51016,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51034 = arguments.length;
switch (G__51034) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49200__auto___51104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49200__auto___51104,out){
return (function (){
var f__49201__auto__ = (function (){var switch__49110__auto__ = ((function (c__49200__auto___51104,out){
return (function (state_51076){
var state_val_51077 = (state_51076[(1)]);
if((state_val_51077 === (7))){
var inst_51072 = (state_51076[(2)]);
var state_51076__$1 = state_51076;
var statearr_51078_51105 = state_51076__$1;
(statearr_51078_51105[(2)] = inst_51072);

(statearr_51078_51105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (1))){
var inst_51035 = [];
var inst_51036 = inst_51035;
var inst_51037 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51076__$1 = (function (){var statearr_51079 = state_51076;
(statearr_51079[(7)] = inst_51037);

(statearr_51079[(8)] = inst_51036);

return statearr_51079;
})();
var statearr_51080_51106 = state_51076__$1;
(statearr_51080_51106[(2)] = null);

(statearr_51080_51106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (4))){
var inst_51040 = (state_51076[(9)]);
var inst_51040__$1 = (state_51076[(2)]);
var inst_51041 = (inst_51040__$1 == null);
var inst_51042 = cljs.core.not.call(null,inst_51041);
var state_51076__$1 = (function (){var statearr_51081 = state_51076;
(statearr_51081[(9)] = inst_51040__$1);

return statearr_51081;
})();
if(inst_51042){
var statearr_51082_51107 = state_51076__$1;
(statearr_51082_51107[(1)] = (5));

} else {
var statearr_51083_51108 = state_51076__$1;
(statearr_51083_51108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (15))){
var inst_51066 = (state_51076[(2)]);
var state_51076__$1 = state_51076;
var statearr_51084_51109 = state_51076__$1;
(statearr_51084_51109[(2)] = inst_51066);

(statearr_51084_51109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (13))){
var state_51076__$1 = state_51076;
var statearr_51085_51110 = state_51076__$1;
(statearr_51085_51110[(2)] = null);

(statearr_51085_51110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (6))){
var inst_51036 = (state_51076[(8)]);
var inst_51061 = inst_51036.length;
var inst_51062 = (inst_51061 > (0));
var state_51076__$1 = state_51076;
if(cljs.core.truth_(inst_51062)){
var statearr_51086_51111 = state_51076__$1;
(statearr_51086_51111[(1)] = (12));

} else {
var statearr_51087_51112 = state_51076__$1;
(statearr_51087_51112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (3))){
var inst_51074 = (state_51076[(2)]);
var state_51076__$1 = state_51076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51076__$1,inst_51074);
} else {
if((state_val_51077 === (12))){
var inst_51036 = (state_51076[(8)]);
var inst_51064 = cljs.core.vec.call(null,inst_51036);
var state_51076__$1 = state_51076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51076__$1,(15),out,inst_51064);
} else {
if((state_val_51077 === (2))){
var state_51076__$1 = state_51076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51076__$1,(4),ch);
} else {
if((state_val_51077 === (11))){
var inst_51040 = (state_51076[(9)]);
var inst_51044 = (state_51076[(10)]);
var inst_51054 = (state_51076[(2)]);
var inst_51055 = [];
var inst_51056 = inst_51055.push(inst_51040);
var inst_51036 = inst_51055;
var inst_51037 = inst_51044;
var state_51076__$1 = (function (){var statearr_51088 = state_51076;
(statearr_51088[(11)] = inst_51054);

(statearr_51088[(7)] = inst_51037);

(statearr_51088[(12)] = inst_51056);

(statearr_51088[(8)] = inst_51036);

return statearr_51088;
})();
var statearr_51089_51113 = state_51076__$1;
(statearr_51089_51113[(2)] = null);

(statearr_51089_51113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (9))){
var inst_51036 = (state_51076[(8)]);
var inst_51052 = cljs.core.vec.call(null,inst_51036);
var state_51076__$1 = state_51076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51076__$1,(11),out,inst_51052);
} else {
if((state_val_51077 === (5))){
var inst_51040 = (state_51076[(9)]);
var inst_51037 = (state_51076[(7)]);
var inst_51044 = (state_51076[(10)]);
var inst_51044__$1 = f.call(null,inst_51040);
var inst_51045 = cljs.core._EQ_.call(null,inst_51044__$1,inst_51037);
var inst_51046 = cljs.core.keyword_identical_QMARK_.call(null,inst_51037,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51047 = (inst_51045) || (inst_51046);
var state_51076__$1 = (function (){var statearr_51090 = state_51076;
(statearr_51090[(10)] = inst_51044__$1);

return statearr_51090;
})();
if(cljs.core.truth_(inst_51047)){
var statearr_51091_51114 = state_51076__$1;
(statearr_51091_51114[(1)] = (8));

} else {
var statearr_51092_51115 = state_51076__$1;
(statearr_51092_51115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (14))){
var inst_51069 = (state_51076[(2)]);
var inst_51070 = cljs.core.async.close_BANG_.call(null,out);
var state_51076__$1 = (function (){var statearr_51094 = state_51076;
(statearr_51094[(13)] = inst_51069);

return statearr_51094;
})();
var statearr_51095_51116 = state_51076__$1;
(statearr_51095_51116[(2)] = inst_51070);

(statearr_51095_51116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (10))){
var inst_51059 = (state_51076[(2)]);
var state_51076__$1 = state_51076;
var statearr_51096_51117 = state_51076__$1;
(statearr_51096_51117[(2)] = inst_51059);

(statearr_51096_51117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51077 === (8))){
var inst_51040 = (state_51076[(9)]);
var inst_51044 = (state_51076[(10)]);
var inst_51036 = (state_51076[(8)]);
var inst_51049 = inst_51036.push(inst_51040);
var tmp51093 = inst_51036;
var inst_51036__$1 = tmp51093;
var inst_51037 = inst_51044;
var state_51076__$1 = (function (){var statearr_51097 = state_51076;
(statearr_51097[(7)] = inst_51037);

(statearr_51097[(14)] = inst_51049);

(statearr_51097[(8)] = inst_51036__$1);

return statearr_51097;
})();
var statearr_51098_51118 = state_51076__$1;
(statearr_51098_51118[(2)] = null);

(statearr_51098_51118[(1)] = (2));


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
});})(c__49200__auto___51104,out))
;
return ((function (switch__49110__auto__,c__49200__auto___51104,out){
return (function() {
var cljs$core$async$state_machine__49111__auto__ = null;
var cljs$core$async$state_machine__49111__auto____0 = (function (){
var statearr_51099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51099[(0)] = cljs$core$async$state_machine__49111__auto__);

(statearr_51099[(1)] = (1));

return statearr_51099;
});
var cljs$core$async$state_machine__49111__auto____1 = (function (state_51076){
while(true){
var ret_value__49112__auto__ = (function (){try{while(true){
var result__49113__auto__ = switch__49110__auto__.call(null,state_51076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49113__auto__;
}
break;
}
}catch (e51100){if((e51100 instanceof Object)){
var ex__49114__auto__ = e51100;
var statearr_51101_51119 = state_51076;
(statearr_51101_51119[(5)] = ex__49114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51120 = state_51076;
state_51076 = G__51120;
continue;
} else {
return ret_value__49112__auto__;
}
break;
}
});
cljs$core$async$state_machine__49111__auto__ = function(state_51076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49111__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49111__auto____1.call(this,state_51076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49111__auto____0;
cljs$core$async$state_machine__49111__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49111__auto____1;
return cljs$core$async$state_machine__49111__auto__;
})()
;})(switch__49110__auto__,c__49200__auto___51104,out))
})();
var state__49202__auto__ = (function (){var statearr_51102 = f__49201__auto__.call(null);
(statearr_51102[(6)] = c__49200__auto___51104);

return statearr_51102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49202__auto__);
});})(c__49200__auto___51104,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1505037971813
