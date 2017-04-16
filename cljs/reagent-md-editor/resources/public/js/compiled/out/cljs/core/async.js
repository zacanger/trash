// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32442 = [];
var len__25910__auto___32448 = arguments.length;
var i__25911__auto___32449 = (0);
while(true){
if((i__25911__auto___32449 < len__25910__auto___32448)){
args32442.push((arguments[i__25911__auto___32449]));

var G__32450 = (i__25911__auto___32449 + (1));
i__25911__auto___32449 = G__32450;
continue;
} else {
}
break;
}

var G__32444 = args32442.length;
switch (G__32444) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32442.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32445 = (function (f,blockable,meta32446){
this.f = f;
this.blockable = blockable;
this.meta32446 = meta32446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32447,meta32446__$1){
var self__ = this;
var _32447__$1 = this;
return (new cljs.core.async.t_cljs$core$async32445(self__.f,self__.blockable,meta32446__$1));
});

cljs.core.async.t_cljs$core$async32445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32447){
var self__ = this;
var _32447__$1 = this;
return self__.meta32446;
});

cljs.core.async.t_cljs$core$async32445.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32446","meta32446",1820326286,null)], null);
});

cljs.core.async.t_cljs$core$async32445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32445";

cljs.core.async.t_cljs$core$async32445.cljs$lang$ctorPrWriter = (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async32445");
});

cljs.core.async.__GT_t_cljs$core$async32445 = (function cljs$core$async$__GT_t_cljs$core$async32445(f__$1,blockable__$1,meta32446){
return (new cljs.core.async.t_cljs$core$async32445(f__$1,blockable__$1,meta32446));
});

}

return (new cljs.core.async.t_cljs$core$async32445(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args32454 = [];
var len__25910__auto___32457 = arguments.length;
var i__25911__auto___32458 = (0);
while(true){
if((i__25911__auto___32458 < len__25910__auto___32457)){
args32454.push((arguments[i__25911__auto___32458]));

var G__32459 = (i__25911__auto___32458 + (1));
i__25911__auto___32458 = G__32459;
continue;
} else {
}
break;
}

var G__32456 = args32454.length;
switch (G__32456) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32454.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args32461 = [];
var len__25910__auto___32464 = arguments.length;
var i__25911__auto___32465 = (0);
while(true){
if((i__25911__auto___32465 < len__25910__auto___32464)){
args32461.push((arguments[i__25911__auto___32465]));

var G__32466 = (i__25911__auto___32465 + (1));
i__25911__auto___32465 = G__32466;
continue;
} else {
}
break;
}

var G__32463 = args32461.length;
switch (G__32463) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32461.length)].join('')));

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
var args32468 = [];
var len__25910__auto___32471 = arguments.length;
var i__25911__auto___32472 = (0);
while(true){
if((i__25911__auto___32472 < len__25910__auto___32471)){
args32468.push((arguments[i__25911__auto___32472]));

var G__32473 = (i__25911__auto___32472 + (1));
i__25911__auto___32472 = G__32473;
continue;
} else {
}
break;
}

var G__32470 = args32468.length;
switch (G__32470) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32468.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32475 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32475);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32475,ret){
return (function (){
return fn1.call(null,val_32475);
});})(val_32475,ret))
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
var args32476 = [];
var len__25910__auto___32479 = arguments.length;
var i__25911__auto___32480 = (0);
while(true){
if((i__25911__auto___32480 < len__25910__auto___32479)){
args32476.push((arguments[i__25911__auto___32480]));

var G__32481 = (i__25911__auto___32480 + (1));
i__25911__auto___32480 = G__32481;
continue;
} else {
}
break;
}

var G__32478 = args32476.length;
switch (G__32478) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32476.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25750__auto___32483 = n;
var x_32484 = (0);
while(true){
if((x_32484 < n__25750__auto___32483)){
(a[x_32484] = (0));

var G__32485 = (x_32484 + (1));
x_32484 = G__32485;
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

var G__32486 = (i + (1));
i = G__32486;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32490 = (function (alt_flag,flag,meta32491){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32491 = meta32491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32492,meta32491__$1){
var self__ = this;
var _32492__$1 = this;
return (new cljs.core.async.t_cljs$core$async32490(self__.alt_flag,self__.flag,meta32491__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32492){
var self__ = this;
var _32492__$1 = this;
return self__.meta32491;
});})(flag))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32490.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32491","meta32491",725367387,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32490";

cljs.core.async.t_cljs$core$async32490.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async32490");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32490 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32490(alt_flag__$1,flag__$1,meta32491){
return (new cljs.core.async.t_cljs$core$async32490(alt_flag__$1,flag__$1,meta32491));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32490(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32496 = (function (alt_handler,flag,cb,meta32497){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32497 = meta32497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32498,meta32497__$1){
var self__ = this;
var _32498__$1 = this;
return (new cljs.core.async.t_cljs$core$async32496(self__.alt_handler,self__.flag,self__.cb,meta32497__$1));
});

cljs.core.async.t_cljs$core$async32496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32498){
var self__ = this;
var _32498__$1 = this;
return self__.meta32497;
});

cljs.core.async.t_cljs$core$async32496.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32497","meta32497",-769360294,null)], null);
});

cljs.core.async.t_cljs$core$async32496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32496";

cljs.core.async.t_cljs$core$async32496.cljs$lang$ctorPrWriter = (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async32496");
});

cljs.core.async.__GT_t_cljs$core$async32496 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32496(alt_handler__$1,flag__$1,cb__$1,meta32497){
return (new cljs.core.async.t_cljs$core$async32496(alt_handler__$1,flag__$1,cb__$1,meta32497));
});

}

return (new cljs.core.async.t_cljs$core$async32496(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32499_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32499_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32500_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24835__auto__ = wport;
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32501 = (i + (1));
i = G__32501;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24835__auto__ = ret;
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24823__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24823__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24823__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__25917__auto__ = [];
var len__25910__auto___32507 = arguments.length;
var i__25911__auto___32508 = (0);
while(true){
if((i__25911__auto___32508 < len__25910__auto___32507)){
args__25917__auto__.push((arguments[i__25911__auto___32508]));

var G__32509 = (i__25911__auto___32508 + (1));
i__25911__auto___32508 = G__32509;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((1) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25918__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32504){
var map__32505 = p__32504;
var map__32505__$1 = ((((!((map__32505 == null)))?((((map__32505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32505):map__32505);
var opts = map__32505__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32502){
var G__32503 = cljs.core.first.call(null,seq32502);
var seq32502__$1 = cljs.core.next.call(null,seq32502);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32503,seq32502__$1);
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
var args32510 = [];
var len__25910__auto___32560 = arguments.length;
var i__25911__auto___32561 = (0);
while(true){
if((i__25911__auto___32561 < len__25910__auto___32560)){
args32510.push((arguments[i__25911__auto___32561]));

var G__32562 = (i__25911__auto___32561 + (1));
i__25911__auto___32561 = G__32562;
continue;
} else {
}
break;
}

var G__32512 = args32510.length;
switch (G__32512) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32510.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32397__auto___32564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___32564){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___32564){
return (function (state_32536){
var state_val_32537 = (state_32536[(1)]);
if((state_val_32537 === (7))){
var inst_32532 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32538_32565 = state_32536__$1;
(statearr_32538_32565[(2)] = inst_32532);

(statearr_32538_32565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (1))){
var state_32536__$1 = state_32536;
var statearr_32539_32566 = state_32536__$1;
(statearr_32539_32566[(2)] = null);

(statearr_32539_32566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (4))){
var inst_32515 = (state_32536[(7)]);
var inst_32515__$1 = (state_32536[(2)]);
var inst_32516 = (inst_32515__$1 == null);
var state_32536__$1 = (function (){var statearr_32540 = state_32536;
(statearr_32540[(7)] = inst_32515__$1);

return statearr_32540;
})();
if(cljs.core.truth_(inst_32516)){
var statearr_32541_32567 = state_32536__$1;
(statearr_32541_32567[(1)] = (5));

} else {
var statearr_32542_32568 = state_32536__$1;
(statearr_32542_32568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (13))){
var state_32536__$1 = state_32536;
var statearr_32543_32569 = state_32536__$1;
(statearr_32543_32569[(2)] = null);

(statearr_32543_32569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (6))){
var inst_32515 = (state_32536[(7)]);
var state_32536__$1 = state_32536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32536__$1,(11),to,inst_32515);
} else {
if((state_val_32537 === (3))){
var inst_32534 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32536__$1,inst_32534);
} else {
if((state_val_32537 === (12))){
var state_32536__$1 = state_32536;
var statearr_32544_32570 = state_32536__$1;
(statearr_32544_32570[(2)] = null);

(statearr_32544_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (2))){
var state_32536__$1 = state_32536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32536__$1,(4),from);
} else {
if((state_val_32537 === (11))){
var inst_32525 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
if(cljs.core.truth_(inst_32525)){
var statearr_32545_32571 = state_32536__$1;
(statearr_32545_32571[(1)] = (12));

} else {
var statearr_32546_32572 = state_32536__$1;
(statearr_32546_32572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (9))){
var state_32536__$1 = state_32536;
var statearr_32547_32573 = state_32536__$1;
(statearr_32547_32573[(2)] = null);

(statearr_32547_32573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (5))){
var state_32536__$1 = state_32536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32548_32574 = state_32536__$1;
(statearr_32548_32574[(1)] = (8));

} else {
var statearr_32549_32575 = state_32536__$1;
(statearr_32549_32575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (14))){
var inst_32530 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32550_32576 = state_32536__$1;
(statearr_32550_32576[(2)] = inst_32530);

(statearr_32550_32576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (10))){
var inst_32522 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32551_32577 = state_32536__$1;
(statearr_32551_32577[(2)] = inst_32522);

(statearr_32551_32577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (8))){
var inst_32519 = cljs.core.async.close_BANG_.call(null,to);
var state_32536__$1 = state_32536;
var statearr_32552_32578 = state_32536__$1;
(statearr_32552_32578[(2)] = inst_32519);

(statearr_32552_32578[(1)] = (10));


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
});})(c__32397__auto___32564))
;
return ((function (switch__32285__auto__,c__32397__auto___32564){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_32556 = [null,null,null,null,null,null,null,null];
(statearr_32556[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_32556[(1)] = (1));

return statearr_32556;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_32536){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_32536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e32557){if((e32557 instanceof Object)){
var ex__32289__auto__ = e32557;
var statearr_32558_32579 = state_32536;
(statearr_32558_32579[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32580 = state_32536;
state_32536 = G__32580;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_32536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_32536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___32564))
})();
var state__32399__auto__ = (function (){var statearr_32559 = f__32398__auto__.call(null);
(statearr_32559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___32564);

return statearr_32559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___32564))
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
return (function (p__32768){
var vec__32769 = p__32768;
var v = cljs.core.nth.call(null,vec__32769,(0),null);
var p = cljs.core.nth.call(null,vec__32769,(1),null);
var job = vec__32769;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32397__auto___32955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___32955,res,vec__32769,v,p,job,jobs,results){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___32955,res,vec__32769,v,p,job,jobs,results){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(2),res,v);
} else {
if((state_val_32777 === (2))){
var inst_32773 = (state_32776[(2)]);
var inst_32774 = cljs.core.async.close_BANG_.call(null,res);
var state_32776__$1 = (function (){var statearr_32778 = state_32776;
(statearr_32778[(7)] = inst_32773);

return statearr_32778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
return null;
}
}
});})(c__32397__auto___32955,res,vec__32769,v,p,job,jobs,results))
;
return ((function (switch__32285__auto__,c__32397__auto___32955,res,vec__32769,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1 = (function (state_32776){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e32783){if((e32783 instanceof Object)){
var ex__32289__auto__ = e32783;
var statearr_32784_32956 = state_32776;
(statearr_32784_32956[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32957 = state_32776;
state_32776 = G__32957;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___32955,res,vec__32769,v,p,job,jobs,results))
})();
var state__32399__auto__ = (function (){var statearr_32785 = f__32398__auto__.call(null);
(statearr_32785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___32955);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___32955,res,vec__32769,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32786){
var vec__32787 = p__32786;
var v = cljs.core.nth.call(null,vec__32787,(0),null);
var p = cljs.core.nth.call(null,vec__32787,(1),null);
var job = vec__32787;
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
var n__25750__auto___32958 = n;
var __32959 = (0);
while(true){
if((__32959 < n__25750__auto___32958)){
var G__32790_32960 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32790_32960) {
case "compute":
var c__32397__auto___32962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32959,c__32397__auto___32962,G__32790_32960,n__25750__auto___32958,jobs,results,process,async){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (__32959,c__32397__auto___32962,G__32790_32960,n__25750__auto___32958,jobs,results,process,async){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (1))){
var state_32803__$1 = state_32803;
var statearr_32805_32963 = state_32803__$1;
(statearr_32805_32963[(2)] = null);

(statearr_32805_32963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (2))){
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32803__$1,(4),jobs);
} else {
if((state_val_32804 === (3))){
var inst_32801 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32803__$1,inst_32801);
} else {
if((state_val_32804 === (4))){
var inst_32793 = (state_32803[(2)]);
var inst_32794 = process.call(null,inst_32793);
var state_32803__$1 = state_32803;
if(cljs.core.truth_(inst_32794)){
var statearr_32806_32964 = state_32803__$1;
(statearr_32806_32964[(1)] = (5));

} else {
var statearr_32807_32965 = state_32803__$1;
(statearr_32807_32965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (5))){
var state_32803__$1 = state_32803;
var statearr_32808_32966 = state_32803__$1;
(statearr_32808_32966[(2)] = null);

(statearr_32808_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var state_32803__$1 = state_32803;
var statearr_32809_32967 = state_32803__$1;
(statearr_32809_32967[(2)] = null);

(statearr_32809_32967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32810_32968 = state_32803__$1;
(statearr_32810_32968[(2)] = inst_32799);

(statearr_32810_32968[(1)] = (3));


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
});})(__32959,c__32397__auto___32962,G__32790_32960,n__25750__auto___32958,jobs,results,process,async))
;
return ((function (__32959,switch__32285__auto__,c__32397__auto___32962,G__32790_32960,n__25750__auto___32958,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0 = (function (){
var statearr_32814 = [null,null,null,null,null,null,null];
(statearr_32814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__);

(statearr_32814[(1)] = (1));

return statearr_32814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1 = (function (state_32803){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_32803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e32815){if((e32815 instanceof Object)){
var ex__32289__auto__ = e32815;
var statearr_32816_32969 = state_32803;
(statearr_32816_32969[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32970 = state_32803;
state_32803 = G__32970;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__;
})()
;})(__32959,switch__32285__auto__,c__32397__auto___32962,G__32790_32960,n__25750__auto___32958,jobs,results,process,async))
})();
var state__32399__auto__ = (function (){var statearr_32817 = f__32398__auto__.call(null);
(statearr_32817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___32962);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(__32959,c__32397__auto___32962,G__32790_32960,n__25750__auto___32958,jobs,results,process,async))
);


break;
case "async":
var c__32397__auto___32971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32959,c__32397__auto___32971,G__32790_32960,n__25750__auto___32958,jobs,results,process,async){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (__32959,c__32397__auto___32971,G__32790_32960,n__25750__auto___32958,jobs,results,process,async){
return (function (state_32830){
var state_val_32831 = (state_32830[(1)]);
if((state_val_32831 === (1))){
var state_32830__$1 = state_32830;
var statearr_32832_32972 = state_32830__$1;
(statearr_32832_32972[(2)] = null);

(statearr_32832_32972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (2))){
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32830__$1,(4),jobs);
} else {
if((state_val_32831 === (3))){
var inst_32828 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32830__$1,inst_32828);
} else {
if((state_val_32831 === (4))){
var inst_32820 = (state_32830[(2)]);
var inst_32821 = async.call(null,inst_32820);
var state_32830__$1 = state_32830;
if(cljs.core.truth_(inst_32821)){
var statearr_32833_32973 = state_32830__$1;
(statearr_32833_32973[(1)] = (5));

} else {
var statearr_32834_32974 = state_32830__$1;
(statearr_32834_32974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (5))){
var state_32830__$1 = state_32830;
var statearr_32835_32975 = state_32830__$1;
(statearr_32835_32975[(2)] = null);

(statearr_32835_32975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (6))){
var state_32830__$1 = state_32830;
var statearr_32836_32976 = state_32830__$1;
(statearr_32836_32976[(2)] = null);

(statearr_32836_32976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32831 === (7))){
var inst_32826 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
var statearr_32837_32977 = state_32830__$1;
(statearr_32837_32977[(2)] = inst_32826);

(statearr_32837_32977[(1)] = (3));


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
});})(__32959,c__32397__auto___32971,G__32790_32960,n__25750__auto___32958,jobs,results,process,async))
;
return ((function (__32959,switch__32285__auto__,c__32397__auto___32971,G__32790_32960,n__25750__auto___32958,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null];
(statearr_32841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1 = (function (state_32830){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_32830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e32842){if((e32842 instanceof Object)){
var ex__32289__auto__ = e32842;
var statearr_32843_32978 = state_32830;
(statearr_32843_32978[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32979 = state_32830;
state_32830 = G__32979;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = function(state_32830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1.call(this,state_32830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__;
})()
;})(__32959,switch__32285__auto__,c__32397__auto___32971,G__32790_32960,n__25750__auto___32958,jobs,results,process,async))
})();
var state__32399__auto__ = (function (){var statearr_32844 = f__32398__auto__.call(null);
(statearr_32844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___32971);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(__32959,c__32397__auto___32971,G__32790_32960,n__25750__auto___32958,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32980 = (__32959 + (1));
__32959 = G__32980;
continue;
} else {
}
break;
}

var c__32397__auto___32981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___32981,jobs,results,process,async){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___32981,jobs,results,process,async){
return (function (state_32866){
var state_val_32867 = (state_32866[(1)]);
if((state_val_32867 === (1))){
var state_32866__$1 = state_32866;
var statearr_32868_32982 = state_32866__$1;
(statearr_32868_32982[(2)] = null);

(statearr_32868_32982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (2))){
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32866__$1,(4),from);
} else {
if((state_val_32867 === (3))){
var inst_32864 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32866__$1,inst_32864);
} else {
if((state_val_32867 === (4))){
var inst_32847 = (state_32866[(7)]);
var inst_32847__$1 = (state_32866[(2)]);
var inst_32848 = (inst_32847__$1 == null);
var state_32866__$1 = (function (){var statearr_32869 = state_32866;
(statearr_32869[(7)] = inst_32847__$1);

return statearr_32869;
})();
if(cljs.core.truth_(inst_32848)){
var statearr_32870_32983 = state_32866__$1;
(statearr_32870_32983[(1)] = (5));

} else {
var statearr_32871_32984 = state_32866__$1;
(statearr_32871_32984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (5))){
var inst_32850 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32866__$1 = state_32866;
var statearr_32872_32985 = state_32866__$1;
(statearr_32872_32985[(2)] = inst_32850);

(statearr_32872_32985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (6))){
var inst_32852 = (state_32866[(8)]);
var inst_32847 = (state_32866[(7)]);
var inst_32852__$1 = cljs.core.async.chan.call(null,(1));
var inst_32853 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32854 = [inst_32847,inst_32852__$1];
var inst_32855 = (new cljs.core.PersistentVector(null,2,(5),inst_32853,inst_32854,null));
var state_32866__$1 = (function (){var statearr_32873 = state_32866;
(statearr_32873[(8)] = inst_32852__$1);

return statearr_32873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32866__$1,(8),jobs,inst_32855);
} else {
if((state_val_32867 === (7))){
var inst_32862 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
var statearr_32874_32986 = state_32866__$1;
(statearr_32874_32986[(2)] = inst_32862);

(statearr_32874_32986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (8))){
var inst_32852 = (state_32866[(8)]);
var inst_32857 = (state_32866[(2)]);
var state_32866__$1 = (function (){var statearr_32875 = state_32866;
(statearr_32875[(9)] = inst_32857);

return statearr_32875;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32866__$1,(9),results,inst_32852);
} else {
if((state_val_32867 === (9))){
var inst_32859 = (state_32866[(2)]);
var state_32866__$1 = (function (){var statearr_32876 = state_32866;
(statearr_32876[(10)] = inst_32859);

return statearr_32876;
})();
var statearr_32877_32987 = state_32866__$1;
(statearr_32877_32987[(2)] = null);

(statearr_32877_32987[(1)] = (2));


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
});})(c__32397__auto___32981,jobs,results,process,async))
;
return ((function (switch__32285__auto__,c__32397__auto___32981,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0 = (function (){
var statearr_32881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__);

(statearr_32881[(1)] = (1));

return statearr_32881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1 = (function (state_32866){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_32866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e32882){if((e32882 instanceof Object)){
var ex__32289__auto__ = e32882;
var statearr_32883_32988 = state_32866;
(statearr_32883_32988[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32989 = state_32866;
state_32866 = G__32989;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = function(state_32866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1.call(this,state_32866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___32981,jobs,results,process,async))
})();
var state__32399__auto__ = (function (){var statearr_32884 = f__32398__auto__.call(null);
(statearr_32884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___32981);

return statearr_32884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___32981,jobs,results,process,async))
);


var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__,jobs,results,process,async){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__,jobs,results,process,async){
return (function (state_32922){
var state_val_32923 = (state_32922[(1)]);
if((state_val_32923 === (7))){
var inst_32918 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32924_32990 = state_32922__$1;
(statearr_32924_32990[(2)] = inst_32918);

(statearr_32924_32990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (20))){
var state_32922__$1 = state_32922;
var statearr_32925_32991 = state_32922__$1;
(statearr_32925_32991[(2)] = null);

(statearr_32925_32991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (1))){
var state_32922__$1 = state_32922;
var statearr_32926_32992 = state_32922__$1;
(statearr_32926_32992[(2)] = null);

(statearr_32926_32992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (4))){
var inst_32887 = (state_32922[(7)]);
var inst_32887__$1 = (state_32922[(2)]);
var inst_32888 = (inst_32887__$1 == null);
var state_32922__$1 = (function (){var statearr_32927 = state_32922;
(statearr_32927[(7)] = inst_32887__$1);

return statearr_32927;
})();
if(cljs.core.truth_(inst_32888)){
var statearr_32928_32993 = state_32922__$1;
(statearr_32928_32993[(1)] = (5));

} else {
var statearr_32929_32994 = state_32922__$1;
(statearr_32929_32994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (15))){
var inst_32900 = (state_32922[(8)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32922__$1,(18),to,inst_32900);
} else {
if((state_val_32923 === (21))){
var inst_32913 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32930_32995 = state_32922__$1;
(statearr_32930_32995[(2)] = inst_32913);

(statearr_32930_32995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (13))){
var inst_32915 = (state_32922[(2)]);
var state_32922__$1 = (function (){var statearr_32931 = state_32922;
(statearr_32931[(9)] = inst_32915);

return statearr_32931;
})();
var statearr_32932_32996 = state_32922__$1;
(statearr_32932_32996[(2)] = null);

(statearr_32932_32996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (6))){
var inst_32887 = (state_32922[(7)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(11),inst_32887);
} else {
if((state_val_32923 === (17))){
var inst_32908 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
if(cljs.core.truth_(inst_32908)){
var statearr_32933_32997 = state_32922__$1;
(statearr_32933_32997[(1)] = (19));

} else {
var statearr_32934_32998 = state_32922__$1;
(statearr_32934_32998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (3))){
var inst_32920 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32922__$1,inst_32920);
} else {
if((state_val_32923 === (12))){
var inst_32897 = (state_32922[(10)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(14),inst_32897);
} else {
if((state_val_32923 === (2))){
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(4),results);
} else {
if((state_val_32923 === (19))){
var state_32922__$1 = state_32922;
var statearr_32935_32999 = state_32922__$1;
(statearr_32935_32999[(2)] = null);

(statearr_32935_32999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (11))){
var inst_32897 = (state_32922[(2)]);
var state_32922__$1 = (function (){var statearr_32936 = state_32922;
(statearr_32936[(10)] = inst_32897);

return statearr_32936;
})();
var statearr_32937_33000 = state_32922__$1;
(statearr_32937_33000[(2)] = null);

(statearr_32937_33000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (9))){
var state_32922__$1 = state_32922;
var statearr_32938_33001 = state_32922__$1;
(statearr_32938_33001[(2)] = null);

(statearr_32938_33001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (5))){
var state_32922__$1 = state_32922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32939_33002 = state_32922__$1;
(statearr_32939_33002[(1)] = (8));

} else {
var statearr_32940_33003 = state_32922__$1;
(statearr_32940_33003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (14))){
var inst_32902 = (state_32922[(11)]);
var inst_32900 = (state_32922[(8)]);
var inst_32900__$1 = (state_32922[(2)]);
var inst_32901 = (inst_32900__$1 == null);
var inst_32902__$1 = cljs.core.not.call(null,inst_32901);
var state_32922__$1 = (function (){var statearr_32941 = state_32922;
(statearr_32941[(11)] = inst_32902__$1);

(statearr_32941[(8)] = inst_32900__$1);

return statearr_32941;
})();
if(inst_32902__$1){
var statearr_32942_33004 = state_32922__$1;
(statearr_32942_33004[(1)] = (15));

} else {
var statearr_32943_33005 = state_32922__$1;
(statearr_32943_33005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (16))){
var inst_32902 = (state_32922[(11)]);
var state_32922__$1 = state_32922;
var statearr_32944_33006 = state_32922__$1;
(statearr_32944_33006[(2)] = inst_32902);

(statearr_32944_33006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (10))){
var inst_32894 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32945_33007 = state_32922__$1;
(statearr_32945_33007[(2)] = inst_32894);

(statearr_32945_33007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (18))){
var inst_32905 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32946_33008 = state_32922__$1;
(statearr_32946_33008[(2)] = inst_32905);

(statearr_32946_33008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (8))){
var inst_32891 = cljs.core.async.close_BANG_.call(null,to);
var state_32922__$1 = state_32922;
var statearr_32947_33009 = state_32922__$1;
(statearr_32947_33009[(2)] = inst_32891);

(statearr_32947_33009[(1)] = (10));


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
});})(c__32397__auto__,jobs,results,process,async))
;
return ((function (switch__32285__auto__,c__32397__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0 = (function (){
var statearr_32951 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__);

(statearr_32951[(1)] = (1));

return statearr_32951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1 = (function (state_32922){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_32922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e32952){if((e32952 instanceof Object)){
var ex__32289__auto__ = e32952;
var statearr_32953_33010 = state_32922;
(statearr_32953_33010[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33011 = state_32922;
state_32922 = G__33011;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__ = function(state_32922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1.call(this,state_32922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__,jobs,results,process,async))
})();
var state__32399__auto__ = (function (){var statearr_32954 = f__32398__auto__.call(null);
(statearr_32954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_32954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__,jobs,results,process,async))
);

return c__32397__auto__;
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
var args33012 = [];
var len__25910__auto___33015 = arguments.length;
var i__25911__auto___33016 = (0);
while(true){
if((i__25911__auto___33016 < len__25910__auto___33015)){
args33012.push((arguments[i__25911__auto___33016]));

var G__33017 = (i__25911__auto___33016 + (1));
i__25911__auto___33016 = G__33017;
continue;
} else {
}
break;
}

var G__33014 = args33012.length;
switch (G__33014) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33012.length)].join('')));

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
var args33019 = [];
var len__25910__auto___33022 = arguments.length;
var i__25911__auto___33023 = (0);
while(true){
if((i__25911__auto___33023 < len__25910__auto___33022)){
args33019.push((arguments[i__25911__auto___33023]));

var G__33024 = (i__25911__auto___33023 + (1));
i__25911__auto___33023 = G__33024;
continue;
} else {
}
break;
}

var G__33021 = args33019.length;
switch (G__33021) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33019.length)].join('')));

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
var args33026 = [];
var len__25910__auto___33079 = arguments.length;
var i__25911__auto___33080 = (0);
while(true){
if((i__25911__auto___33080 < len__25910__auto___33079)){
args33026.push((arguments[i__25911__auto___33080]));

var G__33081 = (i__25911__auto___33080 + (1));
i__25911__auto___33080 = G__33081;
continue;
} else {
}
break;
}

var G__33028 = args33026.length;
switch (G__33028) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33026.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32397__auto___33083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___33083,tc,fc){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___33083,tc,fc){
return (function (state_33054){
var state_val_33055 = (state_33054[(1)]);
if((state_val_33055 === (7))){
var inst_33050 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33056_33084 = state_33054__$1;
(statearr_33056_33084[(2)] = inst_33050);

(statearr_33056_33084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (1))){
var state_33054__$1 = state_33054;
var statearr_33057_33085 = state_33054__$1;
(statearr_33057_33085[(2)] = null);

(statearr_33057_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (4))){
var inst_33031 = (state_33054[(7)]);
var inst_33031__$1 = (state_33054[(2)]);
var inst_33032 = (inst_33031__$1 == null);
var state_33054__$1 = (function (){var statearr_33058 = state_33054;
(statearr_33058[(7)] = inst_33031__$1);

return statearr_33058;
})();
if(cljs.core.truth_(inst_33032)){
var statearr_33059_33086 = state_33054__$1;
(statearr_33059_33086[(1)] = (5));

} else {
var statearr_33060_33087 = state_33054__$1;
(statearr_33060_33087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (13))){
var state_33054__$1 = state_33054;
var statearr_33061_33088 = state_33054__$1;
(statearr_33061_33088[(2)] = null);

(statearr_33061_33088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (6))){
var inst_33031 = (state_33054[(7)]);
var inst_33037 = p.call(null,inst_33031);
var state_33054__$1 = state_33054;
if(cljs.core.truth_(inst_33037)){
var statearr_33062_33089 = state_33054__$1;
(statearr_33062_33089[(1)] = (9));

} else {
var statearr_33063_33090 = state_33054__$1;
(statearr_33063_33090[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (3))){
var inst_33052 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33054__$1,inst_33052);
} else {
if((state_val_33055 === (12))){
var state_33054__$1 = state_33054;
var statearr_33064_33091 = state_33054__$1;
(statearr_33064_33091[(2)] = null);

(statearr_33064_33091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (2))){
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33054__$1,(4),ch);
} else {
if((state_val_33055 === (11))){
var inst_33031 = (state_33054[(7)]);
var inst_33041 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33054__$1,(8),inst_33041,inst_33031);
} else {
if((state_val_33055 === (9))){
var state_33054__$1 = state_33054;
var statearr_33065_33092 = state_33054__$1;
(statearr_33065_33092[(2)] = tc);

(statearr_33065_33092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (5))){
var inst_33034 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33035 = cljs.core.async.close_BANG_.call(null,fc);
var state_33054__$1 = (function (){var statearr_33066 = state_33054;
(statearr_33066[(8)] = inst_33034);

return statearr_33066;
})();
var statearr_33067_33093 = state_33054__$1;
(statearr_33067_33093[(2)] = inst_33035);

(statearr_33067_33093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (14))){
var inst_33048 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33068_33094 = state_33054__$1;
(statearr_33068_33094[(2)] = inst_33048);

(statearr_33068_33094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (10))){
var state_33054__$1 = state_33054;
var statearr_33069_33095 = state_33054__$1;
(statearr_33069_33095[(2)] = fc);

(statearr_33069_33095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (8))){
var inst_33043 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
if(cljs.core.truth_(inst_33043)){
var statearr_33070_33096 = state_33054__$1;
(statearr_33070_33096[(1)] = (12));

} else {
var statearr_33071_33097 = state_33054__$1;
(statearr_33071_33097[(1)] = (13));

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
});})(c__32397__auto___33083,tc,fc))
;
return ((function (switch__32285__auto__,c__32397__auto___33083,tc,fc){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_33075 = [null,null,null,null,null,null,null,null,null];
(statearr_33075[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_33075[(1)] = (1));

return statearr_33075;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_33054){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_33054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e33076){if((e33076 instanceof Object)){
var ex__32289__auto__ = e33076;
var statearr_33077_33098 = state_33054;
(statearr_33077_33098[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33099 = state_33054;
state_33054 = G__33099;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_33054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_33054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___33083,tc,fc))
})();
var state__32399__auto__ = (function (){var statearr_33078 = f__32398__auto__.call(null);
(statearr_33078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___33083);

return statearr_33078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___33083,tc,fc))
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
var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__){
return (function (state_33163){
var state_val_33164 = (state_33163[(1)]);
if((state_val_33164 === (7))){
var inst_33159 = (state_33163[(2)]);
var state_33163__$1 = state_33163;
var statearr_33165_33186 = state_33163__$1;
(statearr_33165_33186[(2)] = inst_33159);

(statearr_33165_33186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33164 === (1))){
var inst_33143 = init;
var state_33163__$1 = (function (){var statearr_33166 = state_33163;
(statearr_33166[(7)] = inst_33143);

return statearr_33166;
})();
var statearr_33167_33187 = state_33163__$1;
(statearr_33167_33187[(2)] = null);

(statearr_33167_33187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33164 === (4))){
var inst_33146 = (state_33163[(8)]);
var inst_33146__$1 = (state_33163[(2)]);
var inst_33147 = (inst_33146__$1 == null);
var state_33163__$1 = (function (){var statearr_33168 = state_33163;
(statearr_33168[(8)] = inst_33146__$1);

return statearr_33168;
})();
if(cljs.core.truth_(inst_33147)){
var statearr_33169_33188 = state_33163__$1;
(statearr_33169_33188[(1)] = (5));

} else {
var statearr_33170_33189 = state_33163__$1;
(statearr_33170_33189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33164 === (6))){
var inst_33146 = (state_33163[(8)]);
var inst_33150 = (state_33163[(9)]);
var inst_33143 = (state_33163[(7)]);
var inst_33150__$1 = f.call(null,inst_33143,inst_33146);
var inst_33151 = cljs.core.reduced_QMARK_.call(null,inst_33150__$1);
var state_33163__$1 = (function (){var statearr_33171 = state_33163;
(statearr_33171[(9)] = inst_33150__$1);

return statearr_33171;
})();
if(inst_33151){
var statearr_33172_33190 = state_33163__$1;
(statearr_33172_33190[(1)] = (8));

} else {
var statearr_33173_33191 = state_33163__$1;
(statearr_33173_33191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33164 === (3))){
var inst_33161 = (state_33163[(2)]);
var state_33163__$1 = state_33163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33163__$1,inst_33161);
} else {
if((state_val_33164 === (2))){
var state_33163__$1 = state_33163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33163__$1,(4),ch);
} else {
if((state_val_33164 === (9))){
var inst_33150 = (state_33163[(9)]);
var inst_33143 = inst_33150;
var state_33163__$1 = (function (){var statearr_33174 = state_33163;
(statearr_33174[(7)] = inst_33143);

return statearr_33174;
})();
var statearr_33175_33192 = state_33163__$1;
(statearr_33175_33192[(2)] = null);

(statearr_33175_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33164 === (5))){
var inst_33143 = (state_33163[(7)]);
var state_33163__$1 = state_33163;
var statearr_33176_33193 = state_33163__$1;
(statearr_33176_33193[(2)] = inst_33143);

(statearr_33176_33193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33164 === (10))){
var inst_33157 = (state_33163[(2)]);
var state_33163__$1 = state_33163;
var statearr_33177_33194 = state_33163__$1;
(statearr_33177_33194[(2)] = inst_33157);

(statearr_33177_33194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33164 === (8))){
var inst_33150 = (state_33163[(9)]);
var inst_33153 = cljs.core.deref.call(null,inst_33150);
var state_33163__$1 = state_33163;
var statearr_33178_33195 = state_33163__$1;
(statearr_33178_33195[(2)] = inst_33153);

(statearr_33178_33195[(1)] = (10));


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
});})(c__32397__auto__))
;
return ((function (switch__32285__auto__,c__32397__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32286__auto____0 = (function (){
var statearr_33182 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33182[(0)] = cljs$core$async$reduce_$_state_machine__32286__auto__);

(statearr_33182[(1)] = (1));

return statearr_33182;
});
var cljs$core$async$reduce_$_state_machine__32286__auto____1 = (function (state_33163){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_33163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e33183){if((e33183 instanceof Object)){
var ex__32289__auto__ = e33183;
var statearr_33184_33196 = state_33163;
(statearr_33184_33196[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33197 = state_33163;
state_33163 = G__33197;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32286__auto__ = function(state_33163){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32286__auto____1.call(this,state_33163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32286__auto____0;
cljs$core$async$reduce_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32286__auto____1;
return cljs$core$async$reduce_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__))
})();
var state__32399__auto__ = (function (){var statearr_33185 = f__32398__auto__.call(null);
(statearr_33185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_33185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__))
);

return c__32397__auto__;
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
var args33198 = [];
var len__25910__auto___33250 = arguments.length;
var i__25911__auto___33251 = (0);
while(true){
if((i__25911__auto___33251 < len__25910__auto___33250)){
args33198.push((arguments[i__25911__auto___33251]));

var G__33252 = (i__25911__auto___33251 + (1));
i__25911__auto___33251 = G__33252;
continue;
} else {
}
break;
}

var G__33200 = args33198.length;
switch (G__33200) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33198.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__){
return (function (state_33225){
var state_val_33226 = (state_33225[(1)]);
if((state_val_33226 === (7))){
var inst_33207 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
var statearr_33227_33254 = state_33225__$1;
(statearr_33227_33254[(2)] = inst_33207);

(statearr_33227_33254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (1))){
var inst_33201 = cljs.core.seq.call(null,coll);
var inst_33202 = inst_33201;
var state_33225__$1 = (function (){var statearr_33228 = state_33225;
(statearr_33228[(7)] = inst_33202);

return statearr_33228;
})();
var statearr_33229_33255 = state_33225__$1;
(statearr_33229_33255[(2)] = null);

(statearr_33229_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (4))){
var inst_33202 = (state_33225[(7)]);
var inst_33205 = cljs.core.first.call(null,inst_33202);
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33225__$1,(7),ch,inst_33205);
} else {
if((state_val_33226 === (13))){
var inst_33219 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
var statearr_33230_33256 = state_33225__$1;
(statearr_33230_33256[(2)] = inst_33219);

(statearr_33230_33256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (6))){
var inst_33210 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
if(cljs.core.truth_(inst_33210)){
var statearr_33231_33257 = state_33225__$1;
(statearr_33231_33257[(1)] = (8));

} else {
var statearr_33232_33258 = state_33225__$1;
(statearr_33232_33258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (3))){
var inst_33223 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33225__$1,inst_33223);
} else {
if((state_val_33226 === (12))){
var state_33225__$1 = state_33225;
var statearr_33233_33259 = state_33225__$1;
(statearr_33233_33259[(2)] = null);

(statearr_33233_33259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (2))){
var inst_33202 = (state_33225[(7)]);
var state_33225__$1 = state_33225;
if(cljs.core.truth_(inst_33202)){
var statearr_33234_33260 = state_33225__$1;
(statearr_33234_33260[(1)] = (4));

} else {
var statearr_33235_33261 = state_33225__$1;
(statearr_33235_33261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (11))){
var inst_33216 = cljs.core.async.close_BANG_.call(null,ch);
var state_33225__$1 = state_33225;
var statearr_33236_33262 = state_33225__$1;
(statearr_33236_33262[(2)] = inst_33216);

(statearr_33236_33262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (9))){
var state_33225__$1 = state_33225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33237_33263 = state_33225__$1;
(statearr_33237_33263[(1)] = (11));

} else {
var statearr_33238_33264 = state_33225__$1;
(statearr_33238_33264[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (5))){
var inst_33202 = (state_33225[(7)]);
var state_33225__$1 = state_33225;
var statearr_33239_33265 = state_33225__$1;
(statearr_33239_33265[(2)] = inst_33202);

(statearr_33239_33265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (10))){
var inst_33221 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
var statearr_33240_33266 = state_33225__$1;
(statearr_33240_33266[(2)] = inst_33221);

(statearr_33240_33266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (8))){
var inst_33202 = (state_33225[(7)]);
var inst_33212 = cljs.core.next.call(null,inst_33202);
var inst_33202__$1 = inst_33212;
var state_33225__$1 = (function (){var statearr_33241 = state_33225;
(statearr_33241[(7)] = inst_33202__$1);

return statearr_33241;
})();
var statearr_33242_33267 = state_33225__$1;
(statearr_33242_33267[(2)] = null);

(statearr_33242_33267[(1)] = (2));


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
});})(c__32397__auto__))
;
return ((function (switch__32285__auto__,c__32397__auto__){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_33246 = [null,null,null,null,null,null,null,null];
(statearr_33246[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_33246[(1)] = (1));

return statearr_33246;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_33225){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_33225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e33247){if((e33247 instanceof Object)){
var ex__32289__auto__ = e33247;
var statearr_33248_33268 = state_33225;
(statearr_33248_33268[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33269 = state_33225;
state_33225 = G__33269;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_33225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_33225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__))
})();
var state__32399__auto__ = (function (){var statearr_33249 = f__32398__auto__.call(null);
(statearr_33249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_33249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__))
);

return c__32397__auto__;
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
var x__25498__auto__ = (((_ == null))?null:_);
var m__25499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,_);
} else {
var m__25499__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,_);
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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25499__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m,ch);
} else {
var m__25499__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m,ch);
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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m);
} else {
var m__25499__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33495 = (function (mult,ch,cs,meta33496){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33496 = meta33496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33497,meta33496__$1){
var self__ = this;
var _33497__$1 = this;
return (new cljs.core.async.t_cljs$core$async33495(self__.mult,self__.ch,self__.cs,meta33496__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33497){
var self__ = this;
var _33497__$1 = this;
return self__.meta33496;
});})(cs))
;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33495.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33496","meta33496",-1462775882,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33495";

cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async33495");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33495 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33495(mult__$1,ch__$1,cs__$1,meta33496){
return (new cljs.core.async.t_cljs$core$async33495(mult__$1,ch__$1,cs__$1,meta33496));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33495(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32397__auto___33720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___33720,cs,m,dchan,dctr,done){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___33720,cs,m,dchan,dctr,done){
return (function (state_33632){
var state_val_33633 = (state_33632[(1)]);
if((state_val_33633 === (7))){
var inst_33628 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33634_33721 = state_33632__$1;
(statearr_33634_33721[(2)] = inst_33628);

(statearr_33634_33721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (20))){
var inst_33531 = (state_33632[(7)]);
var inst_33543 = cljs.core.first.call(null,inst_33531);
var inst_33544 = cljs.core.nth.call(null,inst_33543,(0),null);
var inst_33545 = cljs.core.nth.call(null,inst_33543,(1),null);
var state_33632__$1 = (function (){var statearr_33635 = state_33632;
(statearr_33635[(8)] = inst_33544);

return statearr_33635;
})();
if(cljs.core.truth_(inst_33545)){
var statearr_33636_33722 = state_33632__$1;
(statearr_33636_33722[(1)] = (22));

} else {
var statearr_33637_33723 = state_33632__$1;
(statearr_33637_33723[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (27))){
var inst_33573 = (state_33632[(9)]);
var inst_33500 = (state_33632[(10)]);
var inst_33575 = (state_33632[(11)]);
var inst_33580 = (state_33632[(12)]);
var inst_33580__$1 = cljs.core._nth.call(null,inst_33573,inst_33575);
var inst_33581 = cljs.core.async.put_BANG_.call(null,inst_33580__$1,inst_33500,done);
var state_33632__$1 = (function (){var statearr_33638 = state_33632;
(statearr_33638[(12)] = inst_33580__$1);

return statearr_33638;
})();
if(cljs.core.truth_(inst_33581)){
var statearr_33639_33724 = state_33632__$1;
(statearr_33639_33724[(1)] = (30));

} else {
var statearr_33640_33725 = state_33632__$1;
(statearr_33640_33725[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (1))){
var state_33632__$1 = state_33632;
var statearr_33641_33726 = state_33632__$1;
(statearr_33641_33726[(2)] = null);

(statearr_33641_33726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (24))){
var inst_33531 = (state_33632[(7)]);
var inst_33550 = (state_33632[(2)]);
var inst_33551 = cljs.core.next.call(null,inst_33531);
var inst_33509 = inst_33551;
var inst_33510 = null;
var inst_33511 = (0);
var inst_33512 = (0);
var state_33632__$1 = (function (){var statearr_33642 = state_33632;
(statearr_33642[(13)] = inst_33512);

(statearr_33642[(14)] = inst_33511);

(statearr_33642[(15)] = inst_33550);

(statearr_33642[(16)] = inst_33510);

(statearr_33642[(17)] = inst_33509);

return statearr_33642;
})();
var statearr_33643_33727 = state_33632__$1;
(statearr_33643_33727[(2)] = null);

(statearr_33643_33727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (39))){
var state_33632__$1 = state_33632;
var statearr_33647_33728 = state_33632__$1;
(statearr_33647_33728[(2)] = null);

(statearr_33647_33728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (4))){
var inst_33500 = (state_33632[(10)]);
var inst_33500__$1 = (state_33632[(2)]);
var inst_33501 = (inst_33500__$1 == null);
var state_33632__$1 = (function (){var statearr_33648 = state_33632;
(statearr_33648[(10)] = inst_33500__$1);

return statearr_33648;
})();
if(cljs.core.truth_(inst_33501)){
var statearr_33649_33729 = state_33632__$1;
(statearr_33649_33729[(1)] = (5));

} else {
var statearr_33650_33730 = state_33632__$1;
(statearr_33650_33730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (15))){
var inst_33512 = (state_33632[(13)]);
var inst_33511 = (state_33632[(14)]);
var inst_33510 = (state_33632[(16)]);
var inst_33509 = (state_33632[(17)]);
var inst_33527 = (state_33632[(2)]);
var inst_33528 = (inst_33512 + (1));
var tmp33644 = inst_33511;
var tmp33645 = inst_33510;
var tmp33646 = inst_33509;
var inst_33509__$1 = tmp33646;
var inst_33510__$1 = tmp33645;
var inst_33511__$1 = tmp33644;
var inst_33512__$1 = inst_33528;
var state_33632__$1 = (function (){var statearr_33651 = state_33632;
(statearr_33651[(13)] = inst_33512__$1);

(statearr_33651[(14)] = inst_33511__$1);

(statearr_33651[(16)] = inst_33510__$1);

(statearr_33651[(18)] = inst_33527);

(statearr_33651[(17)] = inst_33509__$1);

return statearr_33651;
})();
var statearr_33652_33731 = state_33632__$1;
(statearr_33652_33731[(2)] = null);

(statearr_33652_33731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (21))){
var inst_33554 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33656_33732 = state_33632__$1;
(statearr_33656_33732[(2)] = inst_33554);

(statearr_33656_33732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (31))){
var inst_33580 = (state_33632[(12)]);
var inst_33584 = done.call(null,null);
var inst_33585 = cljs.core.async.untap_STAR_.call(null,m,inst_33580);
var state_33632__$1 = (function (){var statearr_33657 = state_33632;
(statearr_33657[(19)] = inst_33584);

return statearr_33657;
})();
var statearr_33658_33733 = state_33632__$1;
(statearr_33658_33733[(2)] = inst_33585);

(statearr_33658_33733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (32))){
var inst_33573 = (state_33632[(9)]);
var inst_33572 = (state_33632[(20)]);
var inst_33574 = (state_33632[(21)]);
var inst_33575 = (state_33632[(11)]);
var inst_33587 = (state_33632[(2)]);
var inst_33588 = (inst_33575 + (1));
var tmp33653 = inst_33573;
var tmp33654 = inst_33572;
var tmp33655 = inst_33574;
var inst_33572__$1 = tmp33654;
var inst_33573__$1 = tmp33653;
var inst_33574__$1 = tmp33655;
var inst_33575__$1 = inst_33588;
var state_33632__$1 = (function (){var statearr_33659 = state_33632;
(statearr_33659[(9)] = inst_33573__$1);

(statearr_33659[(22)] = inst_33587);

(statearr_33659[(20)] = inst_33572__$1);

(statearr_33659[(21)] = inst_33574__$1);

(statearr_33659[(11)] = inst_33575__$1);

return statearr_33659;
})();
var statearr_33660_33734 = state_33632__$1;
(statearr_33660_33734[(2)] = null);

(statearr_33660_33734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (40))){
var inst_33600 = (state_33632[(23)]);
var inst_33604 = done.call(null,null);
var inst_33605 = cljs.core.async.untap_STAR_.call(null,m,inst_33600);
var state_33632__$1 = (function (){var statearr_33661 = state_33632;
(statearr_33661[(24)] = inst_33604);

return statearr_33661;
})();
var statearr_33662_33735 = state_33632__$1;
(statearr_33662_33735[(2)] = inst_33605);

(statearr_33662_33735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (33))){
var inst_33591 = (state_33632[(25)]);
var inst_33593 = cljs.core.chunked_seq_QMARK_.call(null,inst_33591);
var state_33632__$1 = state_33632;
if(inst_33593){
var statearr_33663_33736 = state_33632__$1;
(statearr_33663_33736[(1)] = (36));

} else {
var statearr_33664_33737 = state_33632__$1;
(statearr_33664_33737[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (13))){
var inst_33521 = (state_33632[(26)]);
var inst_33524 = cljs.core.async.close_BANG_.call(null,inst_33521);
var state_33632__$1 = state_33632;
var statearr_33665_33738 = state_33632__$1;
(statearr_33665_33738[(2)] = inst_33524);

(statearr_33665_33738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (22))){
var inst_33544 = (state_33632[(8)]);
var inst_33547 = cljs.core.async.close_BANG_.call(null,inst_33544);
var state_33632__$1 = state_33632;
var statearr_33666_33739 = state_33632__$1;
(statearr_33666_33739[(2)] = inst_33547);

(statearr_33666_33739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (36))){
var inst_33591 = (state_33632[(25)]);
var inst_33595 = cljs.core.chunk_first.call(null,inst_33591);
var inst_33596 = cljs.core.chunk_rest.call(null,inst_33591);
var inst_33597 = cljs.core.count.call(null,inst_33595);
var inst_33572 = inst_33596;
var inst_33573 = inst_33595;
var inst_33574 = inst_33597;
var inst_33575 = (0);
var state_33632__$1 = (function (){var statearr_33667 = state_33632;
(statearr_33667[(9)] = inst_33573);

(statearr_33667[(20)] = inst_33572);

(statearr_33667[(21)] = inst_33574);

(statearr_33667[(11)] = inst_33575);

return statearr_33667;
})();
var statearr_33668_33740 = state_33632__$1;
(statearr_33668_33740[(2)] = null);

(statearr_33668_33740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (41))){
var inst_33591 = (state_33632[(25)]);
var inst_33607 = (state_33632[(2)]);
var inst_33608 = cljs.core.next.call(null,inst_33591);
var inst_33572 = inst_33608;
var inst_33573 = null;
var inst_33574 = (0);
var inst_33575 = (0);
var state_33632__$1 = (function (){var statearr_33669 = state_33632;
(statearr_33669[(9)] = inst_33573);

(statearr_33669[(20)] = inst_33572);

(statearr_33669[(21)] = inst_33574);

(statearr_33669[(11)] = inst_33575);

(statearr_33669[(27)] = inst_33607);

return statearr_33669;
})();
var statearr_33670_33741 = state_33632__$1;
(statearr_33670_33741[(2)] = null);

(statearr_33670_33741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (43))){
var state_33632__$1 = state_33632;
var statearr_33671_33742 = state_33632__$1;
(statearr_33671_33742[(2)] = null);

(statearr_33671_33742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (29))){
var inst_33616 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33672_33743 = state_33632__$1;
(statearr_33672_33743[(2)] = inst_33616);

(statearr_33672_33743[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (44))){
var inst_33625 = (state_33632[(2)]);
var state_33632__$1 = (function (){var statearr_33673 = state_33632;
(statearr_33673[(28)] = inst_33625);

return statearr_33673;
})();
var statearr_33674_33744 = state_33632__$1;
(statearr_33674_33744[(2)] = null);

(statearr_33674_33744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (6))){
var inst_33564 = (state_33632[(29)]);
var inst_33563 = cljs.core.deref.call(null,cs);
var inst_33564__$1 = cljs.core.keys.call(null,inst_33563);
var inst_33565 = cljs.core.count.call(null,inst_33564__$1);
var inst_33566 = cljs.core.reset_BANG_.call(null,dctr,inst_33565);
var inst_33571 = cljs.core.seq.call(null,inst_33564__$1);
var inst_33572 = inst_33571;
var inst_33573 = null;
var inst_33574 = (0);
var inst_33575 = (0);
var state_33632__$1 = (function (){var statearr_33675 = state_33632;
(statearr_33675[(9)] = inst_33573);

(statearr_33675[(20)] = inst_33572);

(statearr_33675[(21)] = inst_33574);

(statearr_33675[(29)] = inst_33564__$1);

(statearr_33675[(11)] = inst_33575);

(statearr_33675[(30)] = inst_33566);

return statearr_33675;
})();
var statearr_33676_33745 = state_33632__$1;
(statearr_33676_33745[(2)] = null);

(statearr_33676_33745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (28))){
var inst_33572 = (state_33632[(20)]);
var inst_33591 = (state_33632[(25)]);
var inst_33591__$1 = cljs.core.seq.call(null,inst_33572);
var state_33632__$1 = (function (){var statearr_33677 = state_33632;
(statearr_33677[(25)] = inst_33591__$1);

return statearr_33677;
})();
if(inst_33591__$1){
var statearr_33678_33746 = state_33632__$1;
(statearr_33678_33746[(1)] = (33));

} else {
var statearr_33679_33747 = state_33632__$1;
(statearr_33679_33747[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (25))){
var inst_33574 = (state_33632[(21)]);
var inst_33575 = (state_33632[(11)]);
var inst_33577 = (inst_33575 < inst_33574);
var inst_33578 = inst_33577;
var state_33632__$1 = state_33632;
if(cljs.core.truth_(inst_33578)){
var statearr_33680_33748 = state_33632__$1;
(statearr_33680_33748[(1)] = (27));

} else {
var statearr_33681_33749 = state_33632__$1;
(statearr_33681_33749[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (34))){
var state_33632__$1 = state_33632;
var statearr_33682_33750 = state_33632__$1;
(statearr_33682_33750[(2)] = null);

(statearr_33682_33750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (17))){
var state_33632__$1 = state_33632;
var statearr_33683_33751 = state_33632__$1;
(statearr_33683_33751[(2)] = null);

(statearr_33683_33751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (3))){
var inst_33630 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33632__$1,inst_33630);
} else {
if((state_val_33633 === (12))){
var inst_33559 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33684_33752 = state_33632__$1;
(statearr_33684_33752[(2)] = inst_33559);

(statearr_33684_33752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (2))){
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33632__$1,(4),ch);
} else {
if((state_val_33633 === (23))){
var state_33632__$1 = state_33632;
var statearr_33685_33753 = state_33632__$1;
(statearr_33685_33753[(2)] = null);

(statearr_33685_33753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (35))){
var inst_33614 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33686_33754 = state_33632__$1;
(statearr_33686_33754[(2)] = inst_33614);

(statearr_33686_33754[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (19))){
var inst_33531 = (state_33632[(7)]);
var inst_33535 = cljs.core.chunk_first.call(null,inst_33531);
var inst_33536 = cljs.core.chunk_rest.call(null,inst_33531);
var inst_33537 = cljs.core.count.call(null,inst_33535);
var inst_33509 = inst_33536;
var inst_33510 = inst_33535;
var inst_33511 = inst_33537;
var inst_33512 = (0);
var state_33632__$1 = (function (){var statearr_33687 = state_33632;
(statearr_33687[(13)] = inst_33512);

(statearr_33687[(14)] = inst_33511);

(statearr_33687[(16)] = inst_33510);

(statearr_33687[(17)] = inst_33509);

return statearr_33687;
})();
var statearr_33688_33755 = state_33632__$1;
(statearr_33688_33755[(2)] = null);

(statearr_33688_33755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (11))){
var inst_33531 = (state_33632[(7)]);
var inst_33509 = (state_33632[(17)]);
var inst_33531__$1 = cljs.core.seq.call(null,inst_33509);
var state_33632__$1 = (function (){var statearr_33689 = state_33632;
(statearr_33689[(7)] = inst_33531__$1);

return statearr_33689;
})();
if(inst_33531__$1){
var statearr_33690_33756 = state_33632__$1;
(statearr_33690_33756[(1)] = (16));

} else {
var statearr_33691_33757 = state_33632__$1;
(statearr_33691_33757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (9))){
var inst_33561 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33692_33758 = state_33632__$1;
(statearr_33692_33758[(2)] = inst_33561);

(statearr_33692_33758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (5))){
var inst_33507 = cljs.core.deref.call(null,cs);
var inst_33508 = cljs.core.seq.call(null,inst_33507);
var inst_33509 = inst_33508;
var inst_33510 = null;
var inst_33511 = (0);
var inst_33512 = (0);
var state_33632__$1 = (function (){var statearr_33693 = state_33632;
(statearr_33693[(13)] = inst_33512);

(statearr_33693[(14)] = inst_33511);

(statearr_33693[(16)] = inst_33510);

(statearr_33693[(17)] = inst_33509);

return statearr_33693;
})();
var statearr_33694_33759 = state_33632__$1;
(statearr_33694_33759[(2)] = null);

(statearr_33694_33759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (14))){
var state_33632__$1 = state_33632;
var statearr_33695_33760 = state_33632__$1;
(statearr_33695_33760[(2)] = null);

(statearr_33695_33760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (45))){
var inst_33622 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33696_33761 = state_33632__$1;
(statearr_33696_33761[(2)] = inst_33622);

(statearr_33696_33761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (26))){
var inst_33564 = (state_33632[(29)]);
var inst_33618 = (state_33632[(2)]);
var inst_33619 = cljs.core.seq.call(null,inst_33564);
var state_33632__$1 = (function (){var statearr_33697 = state_33632;
(statearr_33697[(31)] = inst_33618);

return statearr_33697;
})();
if(inst_33619){
var statearr_33698_33762 = state_33632__$1;
(statearr_33698_33762[(1)] = (42));

} else {
var statearr_33699_33763 = state_33632__$1;
(statearr_33699_33763[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (16))){
var inst_33531 = (state_33632[(7)]);
var inst_33533 = cljs.core.chunked_seq_QMARK_.call(null,inst_33531);
var state_33632__$1 = state_33632;
if(inst_33533){
var statearr_33700_33764 = state_33632__$1;
(statearr_33700_33764[(1)] = (19));

} else {
var statearr_33701_33765 = state_33632__$1;
(statearr_33701_33765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (38))){
var inst_33611 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33702_33766 = state_33632__$1;
(statearr_33702_33766[(2)] = inst_33611);

(statearr_33702_33766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (30))){
var state_33632__$1 = state_33632;
var statearr_33703_33767 = state_33632__$1;
(statearr_33703_33767[(2)] = null);

(statearr_33703_33767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (10))){
var inst_33512 = (state_33632[(13)]);
var inst_33510 = (state_33632[(16)]);
var inst_33520 = cljs.core._nth.call(null,inst_33510,inst_33512);
var inst_33521 = cljs.core.nth.call(null,inst_33520,(0),null);
var inst_33522 = cljs.core.nth.call(null,inst_33520,(1),null);
var state_33632__$1 = (function (){var statearr_33704 = state_33632;
(statearr_33704[(26)] = inst_33521);

return statearr_33704;
})();
if(cljs.core.truth_(inst_33522)){
var statearr_33705_33768 = state_33632__$1;
(statearr_33705_33768[(1)] = (13));

} else {
var statearr_33706_33769 = state_33632__$1;
(statearr_33706_33769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (18))){
var inst_33557 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33707_33770 = state_33632__$1;
(statearr_33707_33770[(2)] = inst_33557);

(statearr_33707_33770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (42))){
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33632__$1,(45),dchan);
} else {
if((state_val_33633 === (37))){
var inst_33500 = (state_33632[(10)]);
var inst_33591 = (state_33632[(25)]);
var inst_33600 = (state_33632[(23)]);
var inst_33600__$1 = cljs.core.first.call(null,inst_33591);
var inst_33601 = cljs.core.async.put_BANG_.call(null,inst_33600__$1,inst_33500,done);
var state_33632__$1 = (function (){var statearr_33708 = state_33632;
(statearr_33708[(23)] = inst_33600__$1);

return statearr_33708;
})();
if(cljs.core.truth_(inst_33601)){
var statearr_33709_33771 = state_33632__$1;
(statearr_33709_33771[(1)] = (39));

} else {
var statearr_33710_33772 = state_33632__$1;
(statearr_33710_33772[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (8))){
var inst_33512 = (state_33632[(13)]);
var inst_33511 = (state_33632[(14)]);
var inst_33514 = (inst_33512 < inst_33511);
var inst_33515 = inst_33514;
var state_33632__$1 = state_33632;
if(cljs.core.truth_(inst_33515)){
var statearr_33711_33773 = state_33632__$1;
(statearr_33711_33773[(1)] = (10));

} else {
var statearr_33712_33774 = state_33632__$1;
(statearr_33712_33774[(1)] = (11));

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
});})(c__32397__auto___33720,cs,m,dchan,dctr,done))
;
return ((function (switch__32285__auto__,c__32397__auto___33720,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32286__auto__ = null;
var cljs$core$async$mult_$_state_machine__32286__auto____0 = (function (){
var statearr_33716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33716[(0)] = cljs$core$async$mult_$_state_machine__32286__auto__);

(statearr_33716[(1)] = (1));

return statearr_33716;
});
var cljs$core$async$mult_$_state_machine__32286__auto____1 = (function (state_33632){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_33632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e33717){if((e33717 instanceof Object)){
var ex__32289__auto__ = e33717;
var statearr_33718_33775 = state_33632;
(statearr_33718_33775[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33776 = state_33632;
state_33632 = G__33776;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32286__auto__ = function(state_33632){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32286__auto____1.call(this,state_33632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32286__auto____0;
cljs$core$async$mult_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32286__auto____1;
return cljs$core$async$mult_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___33720,cs,m,dchan,dctr,done))
})();
var state__32399__auto__ = (function (){var statearr_33719 = f__32398__auto__.call(null);
(statearr_33719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___33720);

return statearr_33719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___33720,cs,m,dchan,dctr,done))
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
var args33777 = [];
var len__25910__auto___33780 = arguments.length;
var i__25911__auto___33781 = (0);
while(true){
if((i__25911__auto___33781 < len__25910__auto___33780)){
args33777.push((arguments[i__25911__auto___33781]));

var G__33782 = (i__25911__auto___33781 + (1));
i__25911__auto___33781 = G__33782;
continue;
} else {
}
break;
}

var G__33779 = args33777.length;
switch (G__33779) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33777.length)].join('')));

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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m,ch);
} else {
var m__25499__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m,ch);
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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m,ch);
} else {
var m__25499__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m,ch);
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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m);
} else {
var m__25499__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m);
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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m,state_map);
} else {
var m__25499__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m,state_map);
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
var x__25498__auto__ = (((m == null))?null:m);
var m__25499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,m,mode);
} else {
var m__25499__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25917__auto__ = [];
var len__25910__auto___33794 = arguments.length;
var i__25911__auto___33795 = (0);
while(true){
if((i__25911__auto___33795 < len__25910__auto___33794)){
args__25917__auto__.push((arguments[i__25911__auto___33795]));

var G__33796 = (i__25911__auto___33795 + (1));
i__25911__auto___33795 = G__33796;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((3) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25918__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33788){
var map__33789 = p__33788;
var map__33789__$1 = ((((!((map__33789 == null)))?((((map__33789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33789):map__33789);
var opts = map__33789__$1;
var statearr_33791_33797 = state;
(statearr_33791_33797[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33789,map__33789__$1,opts){
return (function (val){
var statearr_33792_33798 = state;
(statearr_33792_33798[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33789,map__33789__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33793_33799 = state;
(statearr_33793_33799[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33784){
var G__33785 = cljs.core.first.call(null,seq33784);
var seq33784__$1 = cljs.core.next.call(null,seq33784);
var G__33786 = cljs.core.first.call(null,seq33784__$1);
var seq33784__$2 = cljs.core.next.call(null,seq33784__$1);
var G__33787 = cljs.core.first.call(null,seq33784__$2);
var seq33784__$3 = cljs.core.next.call(null,seq33784__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33785,G__33786,G__33787,seq33784__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33965 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33966){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33966 = meta33966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33967,meta33966__$1){
var self__ = this;
var _33967__$1 = this;
return (new cljs.core.async.t_cljs$core$async33965(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33966__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33967){
var self__ = this;
var _33967__$1 = this;
return self__.meta33966;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33966","meta33966",118310900,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33965";

cljs.core.async.t_cljs$core$async33965.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async33965");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33965 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33966){
return (new cljs.core.async.t_cljs$core$async33965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33966));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33965(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32397__auto___34130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___34130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___34130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34067){
var state_val_34068 = (state_34067[(1)]);
if((state_val_34068 === (7))){
var inst_33983 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34069_34131 = state_34067__$1;
(statearr_34069_34131[(2)] = inst_33983);

(statearr_34069_34131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (20))){
var inst_33995 = (state_34067[(7)]);
var state_34067__$1 = state_34067;
var statearr_34070_34132 = state_34067__$1;
(statearr_34070_34132[(2)] = inst_33995);

(statearr_34070_34132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (27))){
var state_34067__$1 = state_34067;
var statearr_34071_34133 = state_34067__$1;
(statearr_34071_34133[(2)] = null);

(statearr_34071_34133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (1))){
var inst_33971 = (state_34067[(8)]);
var inst_33971__$1 = calc_state.call(null);
var inst_33973 = (inst_33971__$1 == null);
var inst_33974 = cljs.core.not.call(null,inst_33973);
var state_34067__$1 = (function (){var statearr_34072 = state_34067;
(statearr_34072[(8)] = inst_33971__$1);

return statearr_34072;
})();
if(inst_33974){
var statearr_34073_34134 = state_34067__$1;
(statearr_34073_34134[(1)] = (2));

} else {
var statearr_34074_34135 = state_34067__$1;
(statearr_34074_34135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (24))){
var inst_34027 = (state_34067[(9)]);
var inst_34018 = (state_34067[(10)]);
var inst_34041 = (state_34067[(11)]);
var inst_34041__$1 = inst_34018.call(null,inst_34027);
var state_34067__$1 = (function (){var statearr_34075 = state_34067;
(statearr_34075[(11)] = inst_34041__$1);

return statearr_34075;
})();
if(cljs.core.truth_(inst_34041__$1)){
var statearr_34076_34136 = state_34067__$1;
(statearr_34076_34136[(1)] = (29));

} else {
var statearr_34077_34137 = state_34067__$1;
(statearr_34077_34137[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (4))){
var inst_33986 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_33986)){
var statearr_34078_34138 = state_34067__$1;
(statearr_34078_34138[(1)] = (8));

} else {
var statearr_34079_34139 = state_34067__$1;
(statearr_34079_34139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (15))){
var inst_34012 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34012)){
var statearr_34080_34140 = state_34067__$1;
(statearr_34080_34140[(1)] = (19));

} else {
var statearr_34081_34141 = state_34067__$1;
(statearr_34081_34141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (21))){
var inst_34017 = (state_34067[(12)]);
var inst_34017__$1 = (state_34067[(2)]);
var inst_34018 = cljs.core.get.call(null,inst_34017__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34019 = cljs.core.get.call(null,inst_34017__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34020 = cljs.core.get.call(null,inst_34017__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34067__$1 = (function (){var statearr_34082 = state_34067;
(statearr_34082[(12)] = inst_34017__$1);

(statearr_34082[(13)] = inst_34019);

(statearr_34082[(10)] = inst_34018);

return statearr_34082;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34067__$1,(22),inst_34020);
} else {
if((state_val_34068 === (31))){
var inst_34049 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34049)){
var statearr_34083_34142 = state_34067__$1;
(statearr_34083_34142[(1)] = (32));

} else {
var statearr_34084_34143 = state_34067__$1;
(statearr_34084_34143[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (32))){
var inst_34026 = (state_34067[(14)]);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34067__$1,(35),out,inst_34026);
} else {
if((state_val_34068 === (33))){
var inst_34017 = (state_34067[(12)]);
var inst_33995 = inst_34017;
var state_34067__$1 = (function (){var statearr_34085 = state_34067;
(statearr_34085[(7)] = inst_33995);

return statearr_34085;
})();
var statearr_34086_34144 = state_34067__$1;
(statearr_34086_34144[(2)] = null);

(statearr_34086_34144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (13))){
var inst_33995 = (state_34067[(7)]);
var inst_34002 = inst_33995.cljs$lang$protocol_mask$partition0$;
var inst_34003 = (inst_34002 & (64));
var inst_34004 = inst_33995.cljs$core$ISeq$;
var inst_34005 = (inst_34003) || (inst_34004);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34005)){
var statearr_34087_34145 = state_34067__$1;
(statearr_34087_34145[(1)] = (16));

} else {
var statearr_34088_34146 = state_34067__$1;
(statearr_34088_34146[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (22))){
var inst_34027 = (state_34067[(9)]);
var inst_34026 = (state_34067[(14)]);
var inst_34025 = (state_34067[(2)]);
var inst_34026__$1 = cljs.core.nth.call(null,inst_34025,(0),null);
var inst_34027__$1 = cljs.core.nth.call(null,inst_34025,(1),null);
var inst_34028 = (inst_34026__$1 == null);
var inst_34029 = cljs.core._EQ_.call(null,inst_34027__$1,change);
var inst_34030 = (inst_34028) || (inst_34029);
var state_34067__$1 = (function (){var statearr_34089 = state_34067;
(statearr_34089[(9)] = inst_34027__$1);

(statearr_34089[(14)] = inst_34026__$1);

return statearr_34089;
})();
if(cljs.core.truth_(inst_34030)){
var statearr_34090_34147 = state_34067__$1;
(statearr_34090_34147[(1)] = (23));

} else {
var statearr_34091_34148 = state_34067__$1;
(statearr_34091_34148[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (36))){
var inst_34017 = (state_34067[(12)]);
var inst_33995 = inst_34017;
var state_34067__$1 = (function (){var statearr_34092 = state_34067;
(statearr_34092[(7)] = inst_33995);

return statearr_34092;
})();
var statearr_34093_34149 = state_34067__$1;
(statearr_34093_34149[(2)] = null);

(statearr_34093_34149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (29))){
var inst_34041 = (state_34067[(11)]);
var state_34067__$1 = state_34067;
var statearr_34094_34150 = state_34067__$1;
(statearr_34094_34150[(2)] = inst_34041);

(statearr_34094_34150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (6))){
var state_34067__$1 = state_34067;
var statearr_34095_34151 = state_34067__$1;
(statearr_34095_34151[(2)] = false);

(statearr_34095_34151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (28))){
var inst_34037 = (state_34067[(2)]);
var inst_34038 = calc_state.call(null);
var inst_33995 = inst_34038;
var state_34067__$1 = (function (){var statearr_34096 = state_34067;
(statearr_34096[(15)] = inst_34037);

(statearr_34096[(7)] = inst_33995);

return statearr_34096;
})();
var statearr_34097_34152 = state_34067__$1;
(statearr_34097_34152[(2)] = null);

(statearr_34097_34152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (25))){
var inst_34063 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34098_34153 = state_34067__$1;
(statearr_34098_34153[(2)] = inst_34063);

(statearr_34098_34153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (34))){
var inst_34061 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34099_34154 = state_34067__$1;
(statearr_34099_34154[(2)] = inst_34061);

(statearr_34099_34154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (17))){
var state_34067__$1 = state_34067;
var statearr_34100_34155 = state_34067__$1;
(statearr_34100_34155[(2)] = false);

(statearr_34100_34155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (3))){
var state_34067__$1 = state_34067;
var statearr_34101_34156 = state_34067__$1;
(statearr_34101_34156[(2)] = false);

(statearr_34101_34156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (12))){
var inst_34065 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34067__$1,inst_34065);
} else {
if((state_val_34068 === (2))){
var inst_33971 = (state_34067[(8)]);
var inst_33976 = inst_33971.cljs$lang$protocol_mask$partition0$;
var inst_33977 = (inst_33976 & (64));
var inst_33978 = inst_33971.cljs$core$ISeq$;
var inst_33979 = (inst_33977) || (inst_33978);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_33979)){
var statearr_34102_34157 = state_34067__$1;
(statearr_34102_34157[(1)] = (5));

} else {
var statearr_34103_34158 = state_34067__$1;
(statearr_34103_34158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (23))){
var inst_34026 = (state_34067[(14)]);
var inst_34032 = (inst_34026 == null);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34032)){
var statearr_34104_34159 = state_34067__$1;
(statearr_34104_34159[(1)] = (26));

} else {
var statearr_34105_34160 = state_34067__$1;
(statearr_34105_34160[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (35))){
var inst_34052 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34052)){
var statearr_34106_34161 = state_34067__$1;
(statearr_34106_34161[(1)] = (36));

} else {
var statearr_34107_34162 = state_34067__$1;
(statearr_34107_34162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (19))){
var inst_33995 = (state_34067[(7)]);
var inst_34014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33995);
var state_34067__$1 = state_34067;
var statearr_34108_34163 = state_34067__$1;
(statearr_34108_34163[(2)] = inst_34014);

(statearr_34108_34163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (11))){
var inst_33995 = (state_34067[(7)]);
var inst_33999 = (inst_33995 == null);
var inst_34000 = cljs.core.not.call(null,inst_33999);
var state_34067__$1 = state_34067;
if(inst_34000){
var statearr_34109_34164 = state_34067__$1;
(statearr_34109_34164[(1)] = (13));

} else {
var statearr_34110_34165 = state_34067__$1;
(statearr_34110_34165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (9))){
var inst_33971 = (state_34067[(8)]);
var state_34067__$1 = state_34067;
var statearr_34111_34166 = state_34067__$1;
(statearr_34111_34166[(2)] = inst_33971);

(statearr_34111_34166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (5))){
var state_34067__$1 = state_34067;
var statearr_34112_34167 = state_34067__$1;
(statearr_34112_34167[(2)] = true);

(statearr_34112_34167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (14))){
var state_34067__$1 = state_34067;
var statearr_34113_34168 = state_34067__$1;
(statearr_34113_34168[(2)] = false);

(statearr_34113_34168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (26))){
var inst_34027 = (state_34067[(9)]);
var inst_34034 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34027);
var state_34067__$1 = state_34067;
var statearr_34114_34169 = state_34067__$1;
(statearr_34114_34169[(2)] = inst_34034);

(statearr_34114_34169[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (16))){
var state_34067__$1 = state_34067;
var statearr_34115_34170 = state_34067__$1;
(statearr_34115_34170[(2)] = true);

(statearr_34115_34170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (38))){
var inst_34057 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34116_34171 = state_34067__$1;
(statearr_34116_34171[(2)] = inst_34057);

(statearr_34116_34171[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (30))){
var inst_34027 = (state_34067[(9)]);
var inst_34019 = (state_34067[(13)]);
var inst_34018 = (state_34067[(10)]);
var inst_34044 = cljs.core.empty_QMARK_.call(null,inst_34018);
var inst_34045 = inst_34019.call(null,inst_34027);
var inst_34046 = cljs.core.not.call(null,inst_34045);
var inst_34047 = (inst_34044) && (inst_34046);
var state_34067__$1 = state_34067;
var statearr_34117_34172 = state_34067__$1;
(statearr_34117_34172[(2)] = inst_34047);

(statearr_34117_34172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (10))){
var inst_33971 = (state_34067[(8)]);
var inst_33991 = (state_34067[(2)]);
var inst_33992 = cljs.core.get.call(null,inst_33991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33993 = cljs.core.get.call(null,inst_33991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33994 = cljs.core.get.call(null,inst_33991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33995 = inst_33971;
var state_34067__$1 = (function (){var statearr_34118 = state_34067;
(statearr_34118[(16)] = inst_33993);

(statearr_34118[(7)] = inst_33995);

(statearr_34118[(17)] = inst_33994);

(statearr_34118[(18)] = inst_33992);

return statearr_34118;
})();
var statearr_34119_34173 = state_34067__$1;
(statearr_34119_34173[(2)] = null);

(statearr_34119_34173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (18))){
var inst_34009 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34120_34174 = state_34067__$1;
(statearr_34120_34174[(2)] = inst_34009);

(statearr_34120_34174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (37))){
var state_34067__$1 = state_34067;
var statearr_34121_34175 = state_34067__$1;
(statearr_34121_34175[(2)] = null);

(statearr_34121_34175[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (8))){
var inst_33971 = (state_34067[(8)]);
var inst_33988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33971);
var state_34067__$1 = state_34067;
var statearr_34122_34176 = state_34067__$1;
(statearr_34122_34176[(2)] = inst_33988);

(statearr_34122_34176[(1)] = (10));


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
});})(c__32397__auto___34130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32285__auto__,c__32397__auto___34130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32286__auto__ = null;
var cljs$core$async$mix_$_state_machine__32286__auto____0 = (function (){
var statearr_34126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34126[(0)] = cljs$core$async$mix_$_state_machine__32286__auto__);

(statearr_34126[(1)] = (1));

return statearr_34126;
});
var cljs$core$async$mix_$_state_machine__32286__auto____1 = (function (state_34067){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34127){if((e34127 instanceof Object)){
var ex__32289__auto__ = e34127;
var statearr_34128_34177 = state_34067;
(statearr_34128_34177[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34178 = state_34067;
state_34067 = G__34178;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32286__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32286__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32286__auto____0;
cljs$core$async$mix_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32286__auto____1;
return cljs$core$async$mix_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___34130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32399__auto__ = (function (){var statearr_34129 = f__32398__auto__.call(null);
(statearr_34129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___34130);

return statearr_34129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___34130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25498__auto__ = (((p == null))?null:p);
var m__25499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25499__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25498__auto__ = (((p == null))?null:p);
var m__25499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,p,v,ch);
} else {
var m__25499__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34179 = [];
var len__25910__auto___34182 = arguments.length;
var i__25911__auto___34183 = (0);
while(true){
if((i__25911__auto___34183 < len__25910__auto___34182)){
args34179.push((arguments[i__25911__auto___34183]));

var G__34184 = (i__25911__auto___34183 + (1));
i__25911__auto___34183 = G__34184;
continue;
} else {
}
break;
}

var G__34181 = args34179.length;
switch (G__34181) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34179.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25498__auto__ = (((p == null))?null:p);
var m__25499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,p);
} else {
var m__25499__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,p);
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
var x__25498__auto__ = (((p == null))?null:p);
var m__25499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25498__auto__)]);
if(!((m__25499__auto__ == null))){
return m__25499__auto__.call(null,p,v);
} else {
var m__25499__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25499__auto____$1 == null))){
return m__25499__auto____$1.call(null,p,v);
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
var args34187 = [];
var len__25910__auto___34312 = arguments.length;
var i__25911__auto___34313 = (0);
while(true){
if((i__25911__auto___34313 < len__25910__auto___34312)){
args34187.push((arguments[i__25911__auto___34313]));

var G__34314 = (i__25911__auto___34313 + (1));
i__25911__auto___34313 = G__34314;
continue;
} else {
}
break;
}

var G__34189 = args34187.length;
switch (G__34189) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34187.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24835__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24835__auto__,mults){
return (function (p1__34186_SHARP_){
if(cljs.core.truth_(p1__34186_SHARP_.call(null,topic))){
return p1__34186_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34186_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24835__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34190 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34191){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34191 = meta34191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34192,meta34191__$1){
var self__ = this;
var _34192__$1 = this;
return (new cljs.core.async.t_cljs$core$async34190(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34191__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34192){
var self__ = this;
var _34192__$1 = this;
return self__.meta34191;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34191","meta34191",-208283211,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34190";

cljs.core.async.t_cljs$core$async34190.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async34190");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34190 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34191){
return (new cljs.core.async.t_cljs$core$async34190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34191));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34190(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32397__auto___34316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___34316,mults,ensure_mult,p){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___34316,mults,ensure_mult,p){
return (function (state_34264){
var state_val_34265 = (state_34264[(1)]);
if((state_val_34265 === (7))){
var inst_34260 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34266_34317 = state_34264__$1;
(statearr_34266_34317[(2)] = inst_34260);

(statearr_34266_34317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (20))){
var state_34264__$1 = state_34264;
var statearr_34267_34318 = state_34264__$1;
(statearr_34267_34318[(2)] = null);

(statearr_34267_34318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (1))){
var state_34264__$1 = state_34264;
var statearr_34268_34319 = state_34264__$1;
(statearr_34268_34319[(2)] = null);

(statearr_34268_34319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (24))){
var inst_34243 = (state_34264[(7)]);
var inst_34252 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34243);
var state_34264__$1 = state_34264;
var statearr_34269_34320 = state_34264__$1;
(statearr_34269_34320[(2)] = inst_34252);

(statearr_34269_34320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (4))){
var inst_34195 = (state_34264[(8)]);
var inst_34195__$1 = (state_34264[(2)]);
var inst_34196 = (inst_34195__$1 == null);
var state_34264__$1 = (function (){var statearr_34270 = state_34264;
(statearr_34270[(8)] = inst_34195__$1);

return statearr_34270;
})();
if(cljs.core.truth_(inst_34196)){
var statearr_34271_34321 = state_34264__$1;
(statearr_34271_34321[(1)] = (5));

} else {
var statearr_34272_34322 = state_34264__$1;
(statearr_34272_34322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (15))){
var inst_34237 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34273_34323 = state_34264__$1;
(statearr_34273_34323[(2)] = inst_34237);

(statearr_34273_34323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (21))){
var inst_34257 = (state_34264[(2)]);
var state_34264__$1 = (function (){var statearr_34274 = state_34264;
(statearr_34274[(9)] = inst_34257);

return statearr_34274;
})();
var statearr_34275_34324 = state_34264__$1;
(statearr_34275_34324[(2)] = null);

(statearr_34275_34324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (13))){
var inst_34219 = (state_34264[(10)]);
var inst_34221 = cljs.core.chunked_seq_QMARK_.call(null,inst_34219);
var state_34264__$1 = state_34264;
if(inst_34221){
var statearr_34276_34325 = state_34264__$1;
(statearr_34276_34325[(1)] = (16));

} else {
var statearr_34277_34326 = state_34264__$1;
(statearr_34277_34326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (22))){
var inst_34249 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
if(cljs.core.truth_(inst_34249)){
var statearr_34278_34327 = state_34264__$1;
(statearr_34278_34327[(1)] = (23));

} else {
var statearr_34279_34328 = state_34264__$1;
(statearr_34279_34328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (6))){
var inst_34245 = (state_34264[(11)]);
var inst_34195 = (state_34264[(8)]);
var inst_34243 = (state_34264[(7)]);
var inst_34243__$1 = topic_fn.call(null,inst_34195);
var inst_34244 = cljs.core.deref.call(null,mults);
var inst_34245__$1 = cljs.core.get.call(null,inst_34244,inst_34243__$1);
var state_34264__$1 = (function (){var statearr_34280 = state_34264;
(statearr_34280[(11)] = inst_34245__$1);

(statearr_34280[(7)] = inst_34243__$1);

return statearr_34280;
})();
if(cljs.core.truth_(inst_34245__$1)){
var statearr_34281_34329 = state_34264__$1;
(statearr_34281_34329[(1)] = (19));

} else {
var statearr_34282_34330 = state_34264__$1;
(statearr_34282_34330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (25))){
var inst_34254 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34283_34331 = state_34264__$1;
(statearr_34283_34331[(2)] = inst_34254);

(statearr_34283_34331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (17))){
var inst_34219 = (state_34264[(10)]);
var inst_34228 = cljs.core.first.call(null,inst_34219);
var inst_34229 = cljs.core.async.muxch_STAR_.call(null,inst_34228);
var inst_34230 = cljs.core.async.close_BANG_.call(null,inst_34229);
var inst_34231 = cljs.core.next.call(null,inst_34219);
var inst_34205 = inst_34231;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34264__$1 = (function (){var statearr_34284 = state_34264;
(statearr_34284[(12)] = inst_34205);

(statearr_34284[(13)] = inst_34207);

(statearr_34284[(14)] = inst_34230);

(statearr_34284[(15)] = inst_34206);

(statearr_34284[(16)] = inst_34208);

return statearr_34284;
})();
var statearr_34285_34332 = state_34264__$1;
(statearr_34285_34332[(2)] = null);

(statearr_34285_34332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (3))){
var inst_34262 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34264__$1,inst_34262);
} else {
if((state_val_34265 === (12))){
var inst_34239 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34286_34333 = state_34264__$1;
(statearr_34286_34333[(2)] = inst_34239);

(statearr_34286_34333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (2))){
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(4),ch);
} else {
if((state_val_34265 === (23))){
var state_34264__$1 = state_34264;
var statearr_34287_34334 = state_34264__$1;
(statearr_34287_34334[(2)] = null);

(statearr_34287_34334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (19))){
var inst_34245 = (state_34264[(11)]);
var inst_34195 = (state_34264[(8)]);
var inst_34247 = cljs.core.async.muxch_STAR_.call(null,inst_34245);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34264__$1,(22),inst_34247,inst_34195);
} else {
if((state_val_34265 === (11))){
var inst_34205 = (state_34264[(12)]);
var inst_34219 = (state_34264[(10)]);
var inst_34219__$1 = cljs.core.seq.call(null,inst_34205);
var state_34264__$1 = (function (){var statearr_34288 = state_34264;
(statearr_34288[(10)] = inst_34219__$1);

return statearr_34288;
})();
if(inst_34219__$1){
var statearr_34289_34335 = state_34264__$1;
(statearr_34289_34335[(1)] = (13));

} else {
var statearr_34290_34336 = state_34264__$1;
(statearr_34290_34336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (9))){
var inst_34241 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34291_34337 = state_34264__$1;
(statearr_34291_34337[(2)] = inst_34241);

(statearr_34291_34337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (5))){
var inst_34202 = cljs.core.deref.call(null,mults);
var inst_34203 = cljs.core.vals.call(null,inst_34202);
var inst_34204 = cljs.core.seq.call(null,inst_34203);
var inst_34205 = inst_34204;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34264__$1 = (function (){var statearr_34292 = state_34264;
(statearr_34292[(12)] = inst_34205);

(statearr_34292[(13)] = inst_34207);

(statearr_34292[(15)] = inst_34206);

(statearr_34292[(16)] = inst_34208);

return statearr_34292;
})();
var statearr_34293_34338 = state_34264__$1;
(statearr_34293_34338[(2)] = null);

(statearr_34293_34338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (14))){
var state_34264__$1 = state_34264;
var statearr_34297_34339 = state_34264__$1;
(statearr_34297_34339[(2)] = null);

(statearr_34297_34339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (16))){
var inst_34219 = (state_34264[(10)]);
var inst_34223 = cljs.core.chunk_first.call(null,inst_34219);
var inst_34224 = cljs.core.chunk_rest.call(null,inst_34219);
var inst_34225 = cljs.core.count.call(null,inst_34223);
var inst_34205 = inst_34224;
var inst_34206 = inst_34223;
var inst_34207 = inst_34225;
var inst_34208 = (0);
var state_34264__$1 = (function (){var statearr_34298 = state_34264;
(statearr_34298[(12)] = inst_34205);

(statearr_34298[(13)] = inst_34207);

(statearr_34298[(15)] = inst_34206);

(statearr_34298[(16)] = inst_34208);

return statearr_34298;
})();
var statearr_34299_34340 = state_34264__$1;
(statearr_34299_34340[(2)] = null);

(statearr_34299_34340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (10))){
var inst_34205 = (state_34264[(12)]);
var inst_34207 = (state_34264[(13)]);
var inst_34206 = (state_34264[(15)]);
var inst_34208 = (state_34264[(16)]);
var inst_34213 = cljs.core._nth.call(null,inst_34206,inst_34208);
var inst_34214 = cljs.core.async.muxch_STAR_.call(null,inst_34213);
var inst_34215 = cljs.core.async.close_BANG_.call(null,inst_34214);
var inst_34216 = (inst_34208 + (1));
var tmp34294 = inst_34205;
var tmp34295 = inst_34207;
var tmp34296 = inst_34206;
var inst_34205__$1 = tmp34294;
var inst_34206__$1 = tmp34296;
var inst_34207__$1 = tmp34295;
var inst_34208__$1 = inst_34216;
var state_34264__$1 = (function (){var statearr_34300 = state_34264;
(statearr_34300[(12)] = inst_34205__$1);

(statearr_34300[(13)] = inst_34207__$1);

(statearr_34300[(15)] = inst_34206__$1);

(statearr_34300[(16)] = inst_34208__$1);

(statearr_34300[(17)] = inst_34215);

return statearr_34300;
})();
var statearr_34301_34341 = state_34264__$1;
(statearr_34301_34341[(2)] = null);

(statearr_34301_34341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (18))){
var inst_34234 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34302_34342 = state_34264__$1;
(statearr_34302_34342[(2)] = inst_34234);

(statearr_34302_34342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (8))){
var inst_34207 = (state_34264[(13)]);
var inst_34208 = (state_34264[(16)]);
var inst_34210 = (inst_34208 < inst_34207);
var inst_34211 = inst_34210;
var state_34264__$1 = state_34264;
if(cljs.core.truth_(inst_34211)){
var statearr_34303_34343 = state_34264__$1;
(statearr_34303_34343[(1)] = (10));

} else {
var statearr_34304_34344 = state_34264__$1;
(statearr_34304_34344[(1)] = (11));

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
});})(c__32397__auto___34316,mults,ensure_mult,p))
;
return ((function (switch__32285__auto__,c__32397__auto___34316,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_34308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34308[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_34308[(1)] = (1));

return statearr_34308;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_34264){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34309){if((e34309 instanceof Object)){
var ex__32289__auto__ = e34309;
var statearr_34310_34345 = state_34264;
(statearr_34310_34345[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34346 = state_34264;
state_34264 = G__34346;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_34264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_34264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___34316,mults,ensure_mult,p))
})();
var state__32399__auto__ = (function (){var statearr_34311 = f__32398__auto__.call(null);
(statearr_34311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___34316);

return statearr_34311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___34316,mults,ensure_mult,p))
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
var args34347 = [];
var len__25910__auto___34350 = arguments.length;
var i__25911__auto___34351 = (0);
while(true){
if((i__25911__auto___34351 < len__25910__auto___34350)){
args34347.push((arguments[i__25911__auto___34351]));

var G__34352 = (i__25911__auto___34351 + (1));
i__25911__auto___34351 = G__34352;
continue;
} else {
}
break;
}

var G__34349 = args34347.length;
switch (G__34349) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34347.length)].join('')));

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
var args34354 = [];
var len__25910__auto___34357 = arguments.length;
var i__25911__auto___34358 = (0);
while(true){
if((i__25911__auto___34358 < len__25910__auto___34357)){
args34354.push((arguments[i__25911__auto___34358]));

var G__34359 = (i__25911__auto___34358 + (1));
i__25911__auto___34358 = G__34359;
continue;
} else {
}
break;
}

var G__34356 = args34354.length;
switch (G__34356) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34354.length)].join('')));

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
var args34361 = [];
var len__25910__auto___34432 = arguments.length;
var i__25911__auto___34433 = (0);
while(true){
if((i__25911__auto___34433 < len__25910__auto___34432)){
args34361.push((arguments[i__25911__auto___34433]));

var G__34434 = (i__25911__auto___34433 + (1));
i__25911__auto___34433 = G__34434;
continue;
} else {
}
break;
}

var G__34363 = args34361.length;
switch (G__34363) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34361.length)].join('')));

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
var c__32397__auto___34436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___34436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___34436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34402){
var state_val_34403 = (state_34402[(1)]);
if((state_val_34403 === (7))){
var state_34402__$1 = state_34402;
var statearr_34404_34437 = state_34402__$1;
(statearr_34404_34437[(2)] = null);

(statearr_34404_34437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (1))){
var state_34402__$1 = state_34402;
var statearr_34405_34438 = state_34402__$1;
(statearr_34405_34438[(2)] = null);

(statearr_34405_34438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (4))){
var inst_34366 = (state_34402[(7)]);
var inst_34368 = (inst_34366 < cnt);
var state_34402__$1 = state_34402;
if(cljs.core.truth_(inst_34368)){
var statearr_34406_34439 = state_34402__$1;
(statearr_34406_34439[(1)] = (6));

} else {
var statearr_34407_34440 = state_34402__$1;
(statearr_34407_34440[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (15))){
var inst_34398 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
var statearr_34408_34441 = state_34402__$1;
(statearr_34408_34441[(2)] = inst_34398);

(statearr_34408_34441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (13))){
var inst_34391 = cljs.core.async.close_BANG_.call(null,out);
var state_34402__$1 = state_34402;
var statearr_34409_34442 = state_34402__$1;
(statearr_34409_34442[(2)] = inst_34391);

(statearr_34409_34442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (6))){
var state_34402__$1 = state_34402;
var statearr_34410_34443 = state_34402__$1;
(statearr_34410_34443[(2)] = null);

(statearr_34410_34443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (3))){
var inst_34400 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34402__$1,inst_34400);
} else {
if((state_val_34403 === (12))){
var inst_34388 = (state_34402[(8)]);
var inst_34388__$1 = (state_34402[(2)]);
var inst_34389 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34388__$1);
var state_34402__$1 = (function (){var statearr_34411 = state_34402;
(statearr_34411[(8)] = inst_34388__$1);

return statearr_34411;
})();
if(cljs.core.truth_(inst_34389)){
var statearr_34412_34444 = state_34402__$1;
(statearr_34412_34444[(1)] = (13));

} else {
var statearr_34413_34445 = state_34402__$1;
(statearr_34413_34445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (2))){
var inst_34365 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34366 = (0);
var state_34402__$1 = (function (){var statearr_34414 = state_34402;
(statearr_34414[(9)] = inst_34365);

(statearr_34414[(7)] = inst_34366);

return statearr_34414;
})();
var statearr_34415_34446 = state_34402__$1;
(statearr_34415_34446[(2)] = null);

(statearr_34415_34446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (11))){
var inst_34366 = (state_34402[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34402,(10),Object,null,(9));
var inst_34375 = chs__$1.call(null,inst_34366);
var inst_34376 = done.call(null,inst_34366);
var inst_34377 = cljs.core.async.take_BANG_.call(null,inst_34375,inst_34376);
var state_34402__$1 = state_34402;
var statearr_34416_34447 = state_34402__$1;
(statearr_34416_34447[(2)] = inst_34377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (9))){
var inst_34366 = (state_34402[(7)]);
var inst_34379 = (state_34402[(2)]);
var inst_34380 = (inst_34366 + (1));
var inst_34366__$1 = inst_34380;
var state_34402__$1 = (function (){var statearr_34417 = state_34402;
(statearr_34417[(10)] = inst_34379);

(statearr_34417[(7)] = inst_34366__$1);

return statearr_34417;
})();
var statearr_34418_34448 = state_34402__$1;
(statearr_34418_34448[(2)] = null);

(statearr_34418_34448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (5))){
var inst_34386 = (state_34402[(2)]);
var state_34402__$1 = (function (){var statearr_34419 = state_34402;
(statearr_34419[(11)] = inst_34386);

return statearr_34419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34402__$1,(12),dchan);
} else {
if((state_val_34403 === (14))){
var inst_34388 = (state_34402[(8)]);
var inst_34393 = cljs.core.apply.call(null,f,inst_34388);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34402__$1,(16),out,inst_34393);
} else {
if((state_val_34403 === (16))){
var inst_34395 = (state_34402[(2)]);
var state_34402__$1 = (function (){var statearr_34420 = state_34402;
(statearr_34420[(12)] = inst_34395);

return statearr_34420;
})();
var statearr_34421_34449 = state_34402__$1;
(statearr_34421_34449[(2)] = null);

(statearr_34421_34449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (10))){
var inst_34370 = (state_34402[(2)]);
var inst_34371 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34402__$1 = (function (){var statearr_34422 = state_34402;
(statearr_34422[(13)] = inst_34370);

return statearr_34422;
})();
var statearr_34423_34450 = state_34402__$1;
(statearr_34423_34450[(2)] = inst_34371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (8))){
var inst_34384 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
var statearr_34424_34451 = state_34402__$1;
(statearr_34424_34451[(2)] = inst_34384);

(statearr_34424_34451[(1)] = (5));


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
});})(c__32397__auto___34436,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32285__auto__,c__32397__auto___34436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_34428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34428[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_34428[(1)] = (1));

return statearr_34428;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_34402){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34429){if((e34429 instanceof Object)){
var ex__32289__auto__ = e34429;
var statearr_34430_34452 = state_34402;
(statearr_34430_34452[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34453 = state_34402;
state_34402 = G__34453;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_34402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_34402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___34436,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32399__auto__ = (function (){var statearr_34431 = f__32398__auto__.call(null);
(statearr_34431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___34436);

return statearr_34431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___34436,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34455 = [];
var len__25910__auto___34513 = arguments.length;
var i__25911__auto___34514 = (0);
while(true){
if((i__25911__auto___34514 < len__25910__auto___34513)){
args34455.push((arguments[i__25911__auto___34514]));

var G__34515 = (i__25911__auto___34514 + (1));
i__25911__auto___34514 = G__34515;
continue;
} else {
}
break;
}

var G__34457 = args34455.length;
switch (G__34457) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34455.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32397__auto___34517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___34517,out){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___34517,out){
return (function (state_34489){
var state_val_34490 = (state_34489[(1)]);
if((state_val_34490 === (7))){
var inst_34468 = (state_34489[(7)]);
var inst_34469 = (state_34489[(8)]);
var inst_34468__$1 = (state_34489[(2)]);
var inst_34469__$1 = cljs.core.nth.call(null,inst_34468__$1,(0),null);
var inst_34470 = cljs.core.nth.call(null,inst_34468__$1,(1),null);
var inst_34471 = (inst_34469__$1 == null);
var state_34489__$1 = (function (){var statearr_34491 = state_34489;
(statearr_34491[(9)] = inst_34470);

(statearr_34491[(7)] = inst_34468__$1);

(statearr_34491[(8)] = inst_34469__$1);

return statearr_34491;
})();
if(cljs.core.truth_(inst_34471)){
var statearr_34492_34518 = state_34489__$1;
(statearr_34492_34518[(1)] = (8));

} else {
var statearr_34493_34519 = state_34489__$1;
(statearr_34493_34519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (1))){
var inst_34458 = cljs.core.vec.call(null,chs);
var inst_34459 = inst_34458;
var state_34489__$1 = (function (){var statearr_34494 = state_34489;
(statearr_34494[(10)] = inst_34459);

return statearr_34494;
})();
var statearr_34495_34520 = state_34489__$1;
(statearr_34495_34520[(2)] = null);

(statearr_34495_34520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (4))){
var inst_34459 = (state_34489[(10)]);
var state_34489__$1 = state_34489;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34489__$1,(7),inst_34459);
} else {
if((state_val_34490 === (6))){
var inst_34485 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34496_34521 = state_34489__$1;
(statearr_34496_34521[(2)] = inst_34485);

(statearr_34496_34521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (3))){
var inst_34487 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34489__$1,inst_34487);
} else {
if((state_val_34490 === (2))){
var inst_34459 = (state_34489[(10)]);
var inst_34461 = cljs.core.count.call(null,inst_34459);
var inst_34462 = (inst_34461 > (0));
var state_34489__$1 = state_34489;
if(cljs.core.truth_(inst_34462)){
var statearr_34498_34522 = state_34489__$1;
(statearr_34498_34522[(1)] = (4));

} else {
var statearr_34499_34523 = state_34489__$1;
(statearr_34499_34523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (11))){
var inst_34459 = (state_34489[(10)]);
var inst_34478 = (state_34489[(2)]);
var tmp34497 = inst_34459;
var inst_34459__$1 = tmp34497;
var state_34489__$1 = (function (){var statearr_34500 = state_34489;
(statearr_34500[(11)] = inst_34478);

(statearr_34500[(10)] = inst_34459__$1);

return statearr_34500;
})();
var statearr_34501_34524 = state_34489__$1;
(statearr_34501_34524[(2)] = null);

(statearr_34501_34524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (9))){
var inst_34469 = (state_34489[(8)]);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34489__$1,(11),out,inst_34469);
} else {
if((state_val_34490 === (5))){
var inst_34483 = cljs.core.async.close_BANG_.call(null,out);
var state_34489__$1 = state_34489;
var statearr_34502_34525 = state_34489__$1;
(statearr_34502_34525[(2)] = inst_34483);

(statearr_34502_34525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (10))){
var inst_34481 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34503_34526 = state_34489__$1;
(statearr_34503_34526[(2)] = inst_34481);

(statearr_34503_34526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (8))){
var inst_34470 = (state_34489[(9)]);
var inst_34468 = (state_34489[(7)]);
var inst_34459 = (state_34489[(10)]);
var inst_34469 = (state_34489[(8)]);
var inst_34473 = (function (){var cs = inst_34459;
var vec__34464 = inst_34468;
var v = inst_34469;
var c = inst_34470;
return ((function (cs,vec__34464,v,c,inst_34470,inst_34468,inst_34459,inst_34469,state_val_34490,c__32397__auto___34517,out){
return (function (p1__34454_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34454_SHARP_);
});
;})(cs,vec__34464,v,c,inst_34470,inst_34468,inst_34459,inst_34469,state_val_34490,c__32397__auto___34517,out))
})();
var inst_34474 = cljs.core.filterv.call(null,inst_34473,inst_34459);
var inst_34459__$1 = inst_34474;
var state_34489__$1 = (function (){var statearr_34504 = state_34489;
(statearr_34504[(10)] = inst_34459__$1);

return statearr_34504;
})();
var statearr_34505_34527 = state_34489__$1;
(statearr_34505_34527[(2)] = null);

(statearr_34505_34527[(1)] = (2));


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
});})(c__32397__auto___34517,out))
;
return ((function (switch__32285__auto__,c__32397__auto___34517,out){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_34509 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34509[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_34509[(1)] = (1));

return statearr_34509;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_34489){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34510){if((e34510 instanceof Object)){
var ex__32289__auto__ = e34510;
var statearr_34511_34528 = state_34489;
(statearr_34511_34528[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34529 = state_34489;
state_34489 = G__34529;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_34489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_34489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___34517,out))
})();
var state__32399__auto__ = (function (){var statearr_34512 = f__32398__auto__.call(null);
(statearr_34512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___34517);

return statearr_34512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___34517,out))
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
var args34530 = [];
var len__25910__auto___34579 = arguments.length;
var i__25911__auto___34580 = (0);
while(true){
if((i__25911__auto___34580 < len__25910__auto___34579)){
args34530.push((arguments[i__25911__auto___34580]));

var G__34581 = (i__25911__auto___34580 + (1));
i__25911__auto___34580 = G__34581;
continue;
} else {
}
break;
}

var G__34532 = args34530.length;
switch (G__34532) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34530.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32397__auto___34583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___34583,out){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___34583,out){
return (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34538 = (state_34556[(7)]);
var inst_34538__$1 = (state_34556[(2)]);
var inst_34539 = (inst_34538__$1 == null);
var inst_34540 = cljs.core.not.call(null,inst_34539);
var state_34556__$1 = (function (){var statearr_34558 = state_34556;
(statearr_34558[(7)] = inst_34538__$1);

return statearr_34558;
})();
if(inst_34540){
var statearr_34559_34584 = state_34556__$1;
(statearr_34559_34584[(1)] = (8));

} else {
var statearr_34560_34585 = state_34556__$1;
(statearr_34560_34585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var inst_34533 = (0);
var state_34556__$1 = (function (){var statearr_34561 = state_34556;
(statearr_34561[(8)] = inst_34533);

return statearr_34561;
})();
var statearr_34562_34586 = state_34556__$1;
(statearr_34562_34586[(2)] = null);

(statearr_34562_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34556__$1,(7),ch);
} else {
if((state_val_34557 === (6))){
var inst_34551 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34563_34587 = state_34556__$1;
(statearr_34563_34587[(2)] = inst_34551);

(statearr_34563_34587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (3))){
var inst_34553 = (state_34556[(2)]);
var inst_34554 = cljs.core.async.close_BANG_.call(null,out);
var state_34556__$1 = (function (){var statearr_34564 = state_34556;
(statearr_34564[(9)] = inst_34553);

return statearr_34564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (2))){
var inst_34533 = (state_34556[(8)]);
var inst_34535 = (inst_34533 < n);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34535)){
var statearr_34565_34588 = state_34556__$1;
(statearr_34565_34588[(1)] = (4));

} else {
var statearr_34566_34589 = state_34556__$1;
(statearr_34566_34589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (11))){
var inst_34533 = (state_34556[(8)]);
var inst_34543 = (state_34556[(2)]);
var inst_34544 = (inst_34533 + (1));
var inst_34533__$1 = inst_34544;
var state_34556__$1 = (function (){var statearr_34567 = state_34556;
(statearr_34567[(10)] = inst_34543);

(statearr_34567[(8)] = inst_34533__$1);

return statearr_34567;
})();
var statearr_34568_34590 = state_34556__$1;
(statearr_34568_34590[(2)] = null);

(statearr_34568_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (9))){
var state_34556__$1 = state_34556;
var statearr_34569_34591 = state_34556__$1;
(statearr_34569_34591[(2)] = null);

(statearr_34569_34591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var state_34556__$1 = state_34556;
var statearr_34570_34592 = state_34556__$1;
(statearr_34570_34592[(2)] = null);

(statearr_34570_34592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (10))){
var inst_34548 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34571_34593 = state_34556__$1;
(statearr_34571_34593[(2)] = inst_34548);

(statearr_34571_34593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34538 = (state_34556[(7)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34556__$1,(11),out,inst_34538);
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
});})(c__32397__auto___34583,out))
;
return ((function (switch__32285__auto__,c__32397__auto___34583,out){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_34575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34575[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_34575[(1)] = (1));

return statearr_34575;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_34556){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34576){if((e34576 instanceof Object)){
var ex__32289__auto__ = e34576;
var statearr_34577_34594 = state_34556;
(statearr_34577_34594[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34595 = state_34556;
state_34556 = G__34595;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_34556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_34556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___34583,out))
})();
var state__32399__auto__ = (function (){var statearr_34578 = f__32398__auto__.call(null);
(statearr_34578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___34583);

return statearr_34578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___34583,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34603 = (function (map_LT_,f,ch,meta34604){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34604 = meta34604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34605,meta34604__$1){
var self__ = this;
var _34605__$1 = this;
return (new cljs.core.async.t_cljs$core$async34603(self__.map_LT_,self__.f,self__.ch,meta34604__$1));
});

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34605){
var self__ = this;
var _34605__$1 = this;
return self__.meta34604;
});

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34606 = (function (map_LT_,f,ch,meta34604,_,fn1,meta34607){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34604 = meta34604;
this._ = _;
this.fn1 = fn1;
this.meta34607 = meta34607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34608,meta34607__$1){
var self__ = this;
var _34608__$1 = this;
return (new cljs.core.async.t_cljs$core$async34606(self__.map_LT_,self__.f,self__.ch,self__.meta34604,self__._,self__.fn1,meta34607__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34608){
var self__ = this;
var _34608__$1 = this;
return self__.meta34607;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34606.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34596_SHARP_){
return f1.call(null,(((p1__34596_SHARP_ == null))?null:self__.f.call(null,p1__34596_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34606.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34604","meta34604",1392069369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34603","cljs.core.async/t_cljs$core$async34603",-1225542045,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34607","meta34607",-1123121209,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34606";

cljs.core.async.t_cljs$core$async34606.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async34606");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34606 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34606(map_LT___$1,f__$1,ch__$1,meta34604__$1,___$2,fn1__$1,meta34607){
return (new cljs.core.async.t_cljs$core$async34606(map_LT___$1,f__$1,ch__$1,meta34604__$1,___$2,fn1__$1,meta34607));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34606(self__.map_LT_,self__.f,self__.ch,self__.meta34604,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24823__auto__ = ret;
if(cljs.core.truth_(and__24823__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24823__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34604","meta34604",1392069369,null)], null);
});

cljs.core.async.t_cljs$core$async34603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34603";

cljs.core.async.t_cljs$core$async34603.cljs$lang$ctorPrWriter = (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async34603");
});

cljs.core.async.__GT_t_cljs$core$async34603 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34603(map_LT___$1,f__$1,ch__$1,meta34604){
return (new cljs.core.async.t_cljs$core$async34603(map_LT___$1,f__$1,ch__$1,meta34604));
});

}

return (new cljs.core.async.t_cljs$core$async34603(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34612 = (function (map_GT_,f,ch,meta34613){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34613 = meta34613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34614,meta34613__$1){
var self__ = this;
var _34614__$1 = this;
return (new cljs.core.async.t_cljs$core$async34612(self__.map_GT_,self__.f,self__.ch,meta34613__$1));
});

cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34614){
var self__ = this;
var _34614__$1 = this;
return self__.meta34613;
});

cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34613","meta34613",914794131,null)], null);
});

cljs.core.async.t_cljs$core$async34612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34612";

cljs.core.async.t_cljs$core$async34612.cljs$lang$ctorPrWriter = (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async34612");
});

cljs.core.async.__GT_t_cljs$core$async34612 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34612(map_GT___$1,f__$1,ch__$1,meta34613){
return (new cljs.core.async.t_cljs$core$async34612(map_GT___$1,f__$1,ch__$1,meta34613));
});

}

return (new cljs.core.async.t_cljs$core$async34612(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34618 = (function (filter_GT_,p,ch,meta34619){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34619 = meta34619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34620,meta34619__$1){
var self__ = this;
var _34620__$1 = this;
return (new cljs.core.async.t_cljs$core$async34618(self__.filter_GT_,self__.p,self__.ch,meta34619__$1));
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34620){
var self__ = this;
var _34620__$1 = this;
return self__.meta34619;
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34619","meta34619",-1381634563,null)], null);
});

cljs.core.async.t_cljs$core$async34618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34618";

cljs.core.async.t_cljs$core$async34618.cljs$lang$ctorPrWriter = (function (this__25441__auto__,writer__25442__auto__,opt__25443__auto__){
return cljs.core._write.call(null,writer__25442__auto__,"cljs.core.async/t_cljs$core$async34618");
});

cljs.core.async.__GT_t_cljs$core$async34618 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34618(filter_GT___$1,p__$1,ch__$1,meta34619){
return (new cljs.core.async.t_cljs$core$async34618(filter_GT___$1,p__$1,ch__$1,meta34619));
});

}

return (new cljs.core.async.t_cljs$core$async34618(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34621 = [];
var len__25910__auto___34665 = arguments.length;
var i__25911__auto___34666 = (0);
while(true){
if((i__25911__auto___34666 < len__25910__auto___34665)){
args34621.push((arguments[i__25911__auto___34666]));

var G__34667 = (i__25911__auto___34666 + (1));
i__25911__auto___34666 = G__34667;
continue;
} else {
}
break;
}

var G__34623 = args34621.length;
switch (G__34623) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34621.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32397__auto___34669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___34669,out){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___34669,out){
return (function (state_34644){
var state_val_34645 = (state_34644[(1)]);
if((state_val_34645 === (7))){
var inst_34640 = (state_34644[(2)]);
var state_34644__$1 = state_34644;
var statearr_34646_34670 = state_34644__$1;
(statearr_34646_34670[(2)] = inst_34640);

(statearr_34646_34670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (1))){
var state_34644__$1 = state_34644;
var statearr_34647_34671 = state_34644__$1;
(statearr_34647_34671[(2)] = null);

(statearr_34647_34671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (4))){
var inst_34626 = (state_34644[(7)]);
var inst_34626__$1 = (state_34644[(2)]);
var inst_34627 = (inst_34626__$1 == null);
var state_34644__$1 = (function (){var statearr_34648 = state_34644;
(statearr_34648[(7)] = inst_34626__$1);

return statearr_34648;
})();
if(cljs.core.truth_(inst_34627)){
var statearr_34649_34672 = state_34644__$1;
(statearr_34649_34672[(1)] = (5));

} else {
var statearr_34650_34673 = state_34644__$1;
(statearr_34650_34673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (6))){
var inst_34626 = (state_34644[(7)]);
var inst_34631 = p.call(null,inst_34626);
var state_34644__$1 = state_34644;
if(cljs.core.truth_(inst_34631)){
var statearr_34651_34674 = state_34644__$1;
(statearr_34651_34674[(1)] = (8));

} else {
var statearr_34652_34675 = state_34644__$1;
(statearr_34652_34675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (3))){
var inst_34642 = (state_34644[(2)]);
var state_34644__$1 = state_34644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34644__$1,inst_34642);
} else {
if((state_val_34645 === (2))){
var state_34644__$1 = state_34644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34644__$1,(4),ch);
} else {
if((state_val_34645 === (11))){
var inst_34634 = (state_34644[(2)]);
var state_34644__$1 = state_34644;
var statearr_34653_34676 = state_34644__$1;
(statearr_34653_34676[(2)] = inst_34634);

(statearr_34653_34676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (9))){
var state_34644__$1 = state_34644;
var statearr_34654_34677 = state_34644__$1;
(statearr_34654_34677[(2)] = null);

(statearr_34654_34677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (5))){
var inst_34629 = cljs.core.async.close_BANG_.call(null,out);
var state_34644__$1 = state_34644;
var statearr_34655_34678 = state_34644__$1;
(statearr_34655_34678[(2)] = inst_34629);

(statearr_34655_34678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (10))){
var inst_34637 = (state_34644[(2)]);
var state_34644__$1 = (function (){var statearr_34656 = state_34644;
(statearr_34656[(8)] = inst_34637);

return statearr_34656;
})();
var statearr_34657_34679 = state_34644__$1;
(statearr_34657_34679[(2)] = null);

(statearr_34657_34679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34645 === (8))){
var inst_34626 = (state_34644[(7)]);
var state_34644__$1 = state_34644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34644__$1,(11),out,inst_34626);
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
});})(c__32397__auto___34669,out))
;
return ((function (switch__32285__auto__,c__32397__auto___34669,out){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_34661 = [null,null,null,null,null,null,null,null,null];
(statearr_34661[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_34661[(1)] = (1));

return statearr_34661;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_34644){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34662){if((e34662 instanceof Object)){
var ex__32289__auto__ = e34662;
var statearr_34663_34680 = state_34644;
(statearr_34663_34680[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34681 = state_34644;
state_34644 = G__34681;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_34644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_34644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___34669,out))
})();
var state__32399__auto__ = (function (){var statearr_34664 = f__32398__auto__.call(null);
(statearr_34664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___34669);

return statearr_34664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___34669,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34682 = [];
var len__25910__auto___34685 = arguments.length;
var i__25911__auto___34686 = (0);
while(true){
if((i__25911__auto___34686 < len__25910__auto___34685)){
args34682.push((arguments[i__25911__auto___34686]));

var G__34687 = (i__25911__auto___34686 + (1));
i__25911__auto___34686 = G__34687;
continue;
} else {
}
break;
}

var G__34684 = args34682.length;
switch (G__34684) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34682.length)].join('')));

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
var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__){
return (function (state_34854){
var state_val_34855 = (state_34854[(1)]);
if((state_val_34855 === (7))){
var inst_34850 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34856_34897 = state_34854__$1;
(statearr_34856_34897[(2)] = inst_34850);

(statearr_34856_34897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (20))){
var inst_34820 = (state_34854[(7)]);
var inst_34831 = (state_34854[(2)]);
var inst_34832 = cljs.core.next.call(null,inst_34820);
var inst_34806 = inst_34832;
var inst_34807 = null;
var inst_34808 = (0);
var inst_34809 = (0);
var state_34854__$1 = (function (){var statearr_34857 = state_34854;
(statearr_34857[(8)] = inst_34831);

(statearr_34857[(9)] = inst_34808);

(statearr_34857[(10)] = inst_34807);

(statearr_34857[(11)] = inst_34809);

(statearr_34857[(12)] = inst_34806);

return statearr_34857;
})();
var statearr_34858_34898 = state_34854__$1;
(statearr_34858_34898[(2)] = null);

(statearr_34858_34898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (1))){
var state_34854__$1 = state_34854;
var statearr_34859_34899 = state_34854__$1;
(statearr_34859_34899[(2)] = null);

(statearr_34859_34899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (4))){
var inst_34795 = (state_34854[(13)]);
var inst_34795__$1 = (state_34854[(2)]);
var inst_34796 = (inst_34795__$1 == null);
var state_34854__$1 = (function (){var statearr_34860 = state_34854;
(statearr_34860[(13)] = inst_34795__$1);

return statearr_34860;
})();
if(cljs.core.truth_(inst_34796)){
var statearr_34861_34900 = state_34854__$1;
(statearr_34861_34900[(1)] = (5));

} else {
var statearr_34862_34901 = state_34854__$1;
(statearr_34862_34901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (15))){
var state_34854__$1 = state_34854;
var statearr_34866_34902 = state_34854__$1;
(statearr_34866_34902[(2)] = null);

(statearr_34866_34902[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (21))){
var state_34854__$1 = state_34854;
var statearr_34867_34903 = state_34854__$1;
(statearr_34867_34903[(2)] = null);

(statearr_34867_34903[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (13))){
var inst_34808 = (state_34854[(9)]);
var inst_34807 = (state_34854[(10)]);
var inst_34809 = (state_34854[(11)]);
var inst_34806 = (state_34854[(12)]);
var inst_34816 = (state_34854[(2)]);
var inst_34817 = (inst_34809 + (1));
var tmp34863 = inst_34808;
var tmp34864 = inst_34807;
var tmp34865 = inst_34806;
var inst_34806__$1 = tmp34865;
var inst_34807__$1 = tmp34864;
var inst_34808__$1 = tmp34863;
var inst_34809__$1 = inst_34817;
var state_34854__$1 = (function (){var statearr_34868 = state_34854;
(statearr_34868[(9)] = inst_34808__$1);

(statearr_34868[(10)] = inst_34807__$1);

(statearr_34868[(14)] = inst_34816);

(statearr_34868[(11)] = inst_34809__$1);

(statearr_34868[(12)] = inst_34806__$1);

return statearr_34868;
})();
var statearr_34869_34904 = state_34854__$1;
(statearr_34869_34904[(2)] = null);

(statearr_34869_34904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (22))){
var state_34854__$1 = state_34854;
var statearr_34870_34905 = state_34854__$1;
(statearr_34870_34905[(2)] = null);

(statearr_34870_34905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (6))){
var inst_34795 = (state_34854[(13)]);
var inst_34804 = f.call(null,inst_34795);
var inst_34805 = cljs.core.seq.call(null,inst_34804);
var inst_34806 = inst_34805;
var inst_34807 = null;
var inst_34808 = (0);
var inst_34809 = (0);
var state_34854__$1 = (function (){var statearr_34871 = state_34854;
(statearr_34871[(9)] = inst_34808);

(statearr_34871[(10)] = inst_34807);

(statearr_34871[(11)] = inst_34809);

(statearr_34871[(12)] = inst_34806);

return statearr_34871;
})();
var statearr_34872_34906 = state_34854__$1;
(statearr_34872_34906[(2)] = null);

(statearr_34872_34906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (17))){
var inst_34820 = (state_34854[(7)]);
var inst_34824 = cljs.core.chunk_first.call(null,inst_34820);
var inst_34825 = cljs.core.chunk_rest.call(null,inst_34820);
var inst_34826 = cljs.core.count.call(null,inst_34824);
var inst_34806 = inst_34825;
var inst_34807 = inst_34824;
var inst_34808 = inst_34826;
var inst_34809 = (0);
var state_34854__$1 = (function (){var statearr_34873 = state_34854;
(statearr_34873[(9)] = inst_34808);

(statearr_34873[(10)] = inst_34807);

(statearr_34873[(11)] = inst_34809);

(statearr_34873[(12)] = inst_34806);

return statearr_34873;
})();
var statearr_34874_34907 = state_34854__$1;
(statearr_34874_34907[(2)] = null);

(statearr_34874_34907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (3))){
var inst_34852 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34854__$1,inst_34852);
} else {
if((state_val_34855 === (12))){
var inst_34840 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34875_34908 = state_34854__$1;
(statearr_34875_34908[(2)] = inst_34840);

(statearr_34875_34908[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (2))){
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34854__$1,(4),in$);
} else {
if((state_val_34855 === (23))){
var inst_34848 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34876_34909 = state_34854__$1;
(statearr_34876_34909[(2)] = inst_34848);

(statearr_34876_34909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (19))){
var inst_34835 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34877_34910 = state_34854__$1;
(statearr_34877_34910[(2)] = inst_34835);

(statearr_34877_34910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (11))){
var inst_34820 = (state_34854[(7)]);
var inst_34806 = (state_34854[(12)]);
var inst_34820__$1 = cljs.core.seq.call(null,inst_34806);
var state_34854__$1 = (function (){var statearr_34878 = state_34854;
(statearr_34878[(7)] = inst_34820__$1);

return statearr_34878;
})();
if(inst_34820__$1){
var statearr_34879_34911 = state_34854__$1;
(statearr_34879_34911[(1)] = (14));

} else {
var statearr_34880_34912 = state_34854__$1;
(statearr_34880_34912[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (9))){
var inst_34842 = (state_34854[(2)]);
var inst_34843 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34854__$1 = (function (){var statearr_34881 = state_34854;
(statearr_34881[(15)] = inst_34842);

return statearr_34881;
})();
if(cljs.core.truth_(inst_34843)){
var statearr_34882_34913 = state_34854__$1;
(statearr_34882_34913[(1)] = (21));

} else {
var statearr_34883_34914 = state_34854__$1;
(statearr_34883_34914[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (5))){
var inst_34798 = cljs.core.async.close_BANG_.call(null,out);
var state_34854__$1 = state_34854;
var statearr_34884_34915 = state_34854__$1;
(statearr_34884_34915[(2)] = inst_34798);

(statearr_34884_34915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (14))){
var inst_34820 = (state_34854[(7)]);
var inst_34822 = cljs.core.chunked_seq_QMARK_.call(null,inst_34820);
var state_34854__$1 = state_34854;
if(inst_34822){
var statearr_34885_34916 = state_34854__$1;
(statearr_34885_34916[(1)] = (17));

} else {
var statearr_34886_34917 = state_34854__$1;
(statearr_34886_34917[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (16))){
var inst_34838 = (state_34854[(2)]);
var state_34854__$1 = state_34854;
var statearr_34887_34918 = state_34854__$1;
(statearr_34887_34918[(2)] = inst_34838);

(statearr_34887_34918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34855 === (10))){
var inst_34807 = (state_34854[(10)]);
var inst_34809 = (state_34854[(11)]);
var inst_34814 = cljs.core._nth.call(null,inst_34807,inst_34809);
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34854__$1,(13),out,inst_34814);
} else {
if((state_val_34855 === (18))){
var inst_34820 = (state_34854[(7)]);
var inst_34829 = cljs.core.first.call(null,inst_34820);
var state_34854__$1 = state_34854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34854__$1,(20),out,inst_34829);
} else {
if((state_val_34855 === (8))){
var inst_34808 = (state_34854[(9)]);
var inst_34809 = (state_34854[(11)]);
var inst_34811 = (inst_34809 < inst_34808);
var inst_34812 = inst_34811;
var state_34854__$1 = state_34854;
if(cljs.core.truth_(inst_34812)){
var statearr_34888_34919 = state_34854__$1;
(statearr_34888_34919[(1)] = (10));

} else {
var statearr_34889_34920 = state_34854__$1;
(statearr_34889_34920[(1)] = (11));

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
});})(c__32397__auto__))
;
return ((function (switch__32285__auto__,c__32397__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32286__auto____0 = (function (){
var statearr_34893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34893[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32286__auto__);

(statearr_34893[(1)] = (1));

return statearr_34893;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32286__auto____1 = (function (state_34854){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34894){if((e34894 instanceof Object)){
var ex__32289__auto__ = e34894;
var statearr_34895_34921 = state_34854;
(statearr_34895_34921[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34922 = state_34854;
state_34854 = G__34922;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32286__auto__ = function(state_34854){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32286__auto____1.call(this,state_34854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__))
})();
var state__32399__auto__ = (function (){var statearr_34896 = f__32398__auto__.call(null);
(statearr_34896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_34896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__))
);

return c__32397__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34923 = [];
var len__25910__auto___34926 = arguments.length;
var i__25911__auto___34927 = (0);
while(true){
if((i__25911__auto___34927 < len__25910__auto___34926)){
args34923.push((arguments[i__25911__auto___34927]));

var G__34928 = (i__25911__auto___34927 + (1));
i__25911__auto___34927 = G__34928;
continue;
} else {
}
break;
}

var G__34925 = args34923.length;
switch (G__34925) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34923.length)].join('')));

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
var args34930 = [];
var len__25910__auto___34933 = arguments.length;
var i__25911__auto___34934 = (0);
while(true){
if((i__25911__auto___34934 < len__25910__auto___34933)){
args34930.push((arguments[i__25911__auto___34934]));

var G__34935 = (i__25911__auto___34934 + (1));
i__25911__auto___34934 = G__34935;
continue;
} else {
}
break;
}

var G__34932 = args34930.length;
switch (G__34932) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34930.length)].join('')));

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
var args34937 = [];
var len__25910__auto___34988 = arguments.length;
var i__25911__auto___34989 = (0);
while(true){
if((i__25911__auto___34989 < len__25910__auto___34988)){
args34937.push((arguments[i__25911__auto___34989]));

var G__34990 = (i__25911__auto___34989 + (1));
i__25911__auto___34989 = G__34990;
continue;
} else {
}
break;
}

var G__34939 = args34937.length;
switch (G__34939) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34937.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32397__auto___34992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___34992,out){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___34992,out){
return (function (state_34963){
var state_val_34964 = (state_34963[(1)]);
if((state_val_34964 === (7))){
var inst_34958 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
var statearr_34965_34993 = state_34963__$1;
(statearr_34965_34993[(2)] = inst_34958);

(statearr_34965_34993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (1))){
var inst_34940 = null;
var state_34963__$1 = (function (){var statearr_34966 = state_34963;
(statearr_34966[(7)] = inst_34940);

return statearr_34966;
})();
var statearr_34967_34994 = state_34963__$1;
(statearr_34967_34994[(2)] = null);

(statearr_34967_34994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (4))){
var inst_34943 = (state_34963[(8)]);
var inst_34943__$1 = (state_34963[(2)]);
var inst_34944 = (inst_34943__$1 == null);
var inst_34945 = cljs.core.not.call(null,inst_34944);
var state_34963__$1 = (function (){var statearr_34968 = state_34963;
(statearr_34968[(8)] = inst_34943__$1);

return statearr_34968;
})();
if(inst_34945){
var statearr_34969_34995 = state_34963__$1;
(statearr_34969_34995[(1)] = (5));

} else {
var statearr_34970_34996 = state_34963__$1;
(statearr_34970_34996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (6))){
var state_34963__$1 = state_34963;
var statearr_34971_34997 = state_34963__$1;
(statearr_34971_34997[(2)] = null);

(statearr_34971_34997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (3))){
var inst_34960 = (state_34963[(2)]);
var inst_34961 = cljs.core.async.close_BANG_.call(null,out);
var state_34963__$1 = (function (){var statearr_34972 = state_34963;
(statearr_34972[(9)] = inst_34960);

return statearr_34972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34963__$1,inst_34961);
} else {
if((state_val_34964 === (2))){
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34963__$1,(4),ch);
} else {
if((state_val_34964 === (11))){
var inst_34943 = (state_34963[(8)]);
var inst_34952 = (state_34963[(2)]);
var inst_34940 = inst_34943;
var state_34963__$1 = (function (){var statearr_34973 = state_34963;
(statearr_34973[(10)] = inst_34952);

(statearr_34973[(7)] = inst_34940);

return statearr_34973;
})();
var statearr_34974_34998 = state_34963__$1;
(statearr_34974_34998[(2)] = null);

(statearr_34974_34998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (9))){
var inst_34943 = (state_34963[(8)]);
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34963__$1,(11),out,inst_34943);
} else {
if((state_val_34964 === (5))){
var inst_34940 = (state_34963[(7)]);
var inst_34943 = (state_34963[(8)]);
var inst_34947 = cljs.core._EQ_.call(null,inst_34943,inst_34940);
var state_34963__$1 = state_34963;
if(inst_34947){
var statearr_34976_34999 = state_34963__$1;
(statearr_34976_34999[(1)] = (8));

} else {
var statearr_34977_35000 = state_34963__$1;
(statearr_34977_35000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (10))){
var inst_34955 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
var statearr_34978_35001 = state_34963__$1;
(statearr_34978_35001[(2)] = inst_34955);

(statearr_34978_35001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (8))){
var inst_34940 = (state_34963[(7)]);
var tmp34975 = inst_34940;
var inst_34940__$1 = tmp34975;
var state_34963__$1 = (function (){var statearr_34979 = state_34963;
(statearr_34979[(7)] = inst_34940__$1);

return statearr_34979;
})();
var statearr_34980_35002 = state_34963__$1;
(statearr_34980_35002[(2)] = null);

(statearr_34980_35002[(1)] = (2));


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
});})(c__32397__auto___34992,out))
;
return ((function (switch__32285__auto__,c__32397__auto___34992,out){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_34984 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34984[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_34984[(1)] = (1));

return statearr_34984;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_34963){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_34963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e34985){if((e34985 instanceof Object)){
var ex__32289__auto__ = e34985;
var statearr_34986_35003 = state_34963;
(statearr_34986_35003[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_34963;
state_34963 = G__35004;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_34963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_34963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___34992,out))
})();
var state__32399__auto__ = (function (){var statearr_34987 = f__32398__auto__.call(null);
(statearr_34987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___34992);

return statearr_34987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___34992,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35005 = [];
var len__25910__auto___35075 = arguments.length;
var i__25911__auto___35076 = (0);
while(true){
if((i__25911__auto___35076 < len__25910__auto___35075)){
args35005.push((arguments[i__25911__auto___35076]));

var G__35077 = (i__25911__auto___35076 + (1));
i__25911__auto___35076 = G__35077;
continue;
} else {
}
break;
}

var G__35007 = args35005.length;
switch (G__35007) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35005.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32397__auto___35079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___35079,out){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___35079,out){
return (function (state_35045){
var state_val_35046 = (state_35045[(1)]);
if((state_val_35046 === (7))){
var inst_35041 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35047_35080 = state_35045__$1;
(statearr_35047_35080[(2)] = inst_35041);

(statearr_35047_35080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (1))){
var inst_35008 = (new Array(n));
var inst_35009 = inst_35008;
var inst_35010 = (0);
var state_35045__$1 = (function (){var statearr_35048 = state_35045;
(statearr_35048[(7)] = inst_35010);

(statearr_35048[(8)] = inst_35009);

return statearr_35048;
})();
var statearr_35049_35081 = state_35045__$1;
(statearr_35049_35081[(2)] = null);

(statearr_35049_35081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (4))){
var inst_35013 = (state_35045[(9)]);
var inst_35013__$1 = (state_35045[(2)]);
var inst_35014 = (inst_35013__$1 == null);
var inst_35015 = cljs.core.not.call(null,inst_35014);
var state_35045__$1 = (function (){var statearr_35050 = state_35045;
(statearr_35050[(9)] = inst_35013__$1);

return statearr_35050;
})();
if(inst_35015){
var statearr_35051_35082 = state_35045__$1;
(statearr_35051_35082[(1)] = (5));

} else {
var statearr_35052_35083 = state_35045__$1;
(statearr_35052_35083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (15))){
var inst_35035 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35053_35084 = state_35045__$1;
(statearr_35053_35084[(2)] = inst_35035);

(statearr_35053_35084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (13))){
var state_35045__$1 = state_35045;
var statearr_35054_35085 = state_35045__$1;
(statearr_35054_35085[(2)] = null);

(statearr_35054_35085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (6))){
var inst_35010 = (state_35045[(7)]);
var inst_35031 = (inst_35010 > (0));
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_35031)){
var statearr_35055_35086 = state_35045__$1;
(statearr_35055_35086[(1)] = (12));

} else {
var statearr_35056_35087 = state_35045__$1;
(statearr_35056_35087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (3))){
var inst_35043 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35045__$1,inst_35043);
} else {
if((state_val_35046 === (12))){
var inst_35009 = (state_35045[(8)]);
var inst_35033 = cljs.core.vec.call(null,inst_35009);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35045__$1,(15),out,inst_35033);
} else {
if((state_val_35046 === (2))){
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35045__$1,(4),ch);
} else {
if((state_val_35046 === (11))){
var inst_35025 = (state_35045[(2)]);
var inst_35026 = (new Array(n));
var inst_35009 = inst_35026;
var inst_35010 = (0);
var state_35045__$1 = (function (){var statearr_35057 = state_35045;
(statearr_35057[(7)] = inst_35010);

(statearr_35057[(8)] = inst_35009);

(statearr_35057[(10)] = inst_35025);

return statearr_35057;
})();
var statearr_35058_35088 = state_35045__$1;
(statearr_35058_35088[(2)] = null);

(statearr_35058_35088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (9))){
var inst_35009 = (state_35045[(8)]);
var inst_35023 = cljs.core.vec.call(null,inst_35009);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35045__$1,(11),out,inst_35023);
} else {
if((state_val_35046 === (5))){
var inst_35013 = (state_35045[(9)]);
var inst_35018 = (state_35045[(11)]);
var inst_35010 = (state_35045[(7)]);
var inst_35009 = (state_35045[(8)]);
var inst_35017 = (inst_35009[inst_35010] = inst_35013);
var inst_35018__$1 = (inst_35010 + (1));
var inst_35019 = (inst_35018__$1 < n);
var state_35045__$1 = (function (){var statearr_35059 = state_35045;
(statearr_35059[(11)] = inst_35018__$1);

(statearr_35059[(12)] = inst_35017);

return statearr_35059;
})();
if(cljs.core.truth_(inst_35019)){
var statearr_35060_35089 = state_35045__$1;
(statearr_35060_35089[(1)] = (8));

} else {
var statearr_35061_35090 = state_35045__$1;
(statearr_35061_35090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (14))){
var inst_35038 = (state_35045[(2)]);
var inst_35039 = cljs.core.async.close_BANG_.call(null,out);
var state_35045__$1 = (function (){var statearr_35063 = state_35045;
(statearr_35063[(13)] = inst_35038);

return statearr_35063;
})();
var statearr_35064_35091 = state_35045__$1;
(statearr_35064_35091[(2)] = inst_35039);

(statearr_35064_35091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (10))){
var inst_35029 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35065_35092 = state_35045__$1;
(statearr_35065_35092[(2)] = inst_35029);

(statearr_35065_35092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (8))){
var inst_35018 = (state_35045[(11)]);
var inst_35009 = (state_35045[(8)]);
var tmp35062 = inst_35009;
var inst_35009__$1 = tmp35062;
var inst_35010 = inst_35018;
var state_35045__$1 = (function (){var statearr_35066 = state_35045;
(statearr_35066[(7)] = inst_35010);

(statearr_35066[(8)] = inst_35009__$1);

return statearr_35066;
})();
var statearr_35067_35093 = state_35045__$1;
(statearr_35067_35093[(2)] = null);

(statearr_35067_35093[(1)] = (2));


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
});})(c__32397__auto___35079,out))
;
return ((function (switch__32285__auto__,c__32397__auto___35079,out){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_35071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35071[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_35071[(1)] = (1));

return statearr_35071;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_35045){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_35045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e35072){if((e35072 instanceof Object)){
var ex__32289__auto__ = e35072;
var statearr_35073_35094 = state_35045;
(statearr_35073_35094[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35095 = state_35045;
state_35045 = G__35095;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_35045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_35045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___35079,out))
})();
var state__32399__auto__ = (function (){var statearr_35074 = f__32398__auto__.call(null);
(statearr_35074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___35079);

return statearr_35074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___35079,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35096 = [];
var len__25910__auto___35170 = arguments.length;
var i__25911__auto___35171 = (0);
while(true){
if((i__25911__auto___35171 < len__25910__auto___35170)){
args35096.push((arguments[i__25911__auto___35171]));

var G__35172 = (i__25911__auto___35171 + (1));
i__25911__auto___35171 = G__35172;
continue;
} else {
}
break;
}

var G__35098 = args35096.length;
switch (G__35098) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35096.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32397__auto___35174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___35174,out){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___35174,out){
return (function (state_35140){
var state_val_35141 = (state_35140[(1)]);
if((state_val_35141 === (7))){
var inst_35136 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
var statearr_35142_35175 = state_35140__$1;
(statearr_35142_35175[(2)] = inst_35136);

(statearr_35142_35175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (1))){
var inst_35099 = [];
var inst_35100 = inst_35099;
var inst_35101 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35140__$1 = (function (){var statearr_35143 = state_35140;
(statearr_35143[(7)] = inst_35101);

(statearr_35143[(8)] = inst_35100);

return statearr_35143;
})();
var statearr_35144_35176 = state_35140__$1;
(statearr_35144_35176[(2)] = null);

(statearr_35144_35176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (4))){
var inst_35104 = (state_35140[(9)]);
var inst_35104__$1 = (state_35140[(2)]);
var inst_35105 = (inst_35104__$1 == null);
var inst_35106 = cljs.core.not.call(null,inst_35105);
var state_35140__$1 = (function (){var statearr_35145 = state_35140;
(statearr_35145[(9)] = inst_35104__$1);

return statearr_35145;
})();
if(inst_35106){
var statearr_35146_35177 = state_35140__$1;
(statearr_35146_35177[(1)] = (5));

} else {
var statearr_35147_35178 = state_35140__$1;
(statearr_35147_35178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (15))){
var inst_35130 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
var statearr_35148_35179 = state_35140__$1;
(statearr_35148_35179[(2)] = inst_35130);

(statearr_35148_35179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (13))){
var state_35140__$1 = state_35140;
var statearr_35149_35180 = state_35140__$1;
(statearr_35149_35180[(2)] = null);

(statearr_35149_35180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (6))){
var inst_35100 = (state_35140[(8)]);
var inst_35125 = inst_35100.length;
var inst_35126 = (inst_35125 > (0));
var state_35140__$1 = state_35140;
if(cljs.core.truth_(inst_35126)){
var statearr_35150_35181 = state_35140__$1;
(statearr_35150_35181[(1)] = (12));

} else {
var statearr_35151_35182 = state_35140__$1;
(statearr_35151_35182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (3))){
var inst_35138 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35140__$1,inst_35138);
} else {
if((state_val_35141 === (12))){
var inst_35100 = (state_35140[(8)]);
var inst_35128 = cljs.core.vec.call(null,inst_35100);
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35140__$1,(15),out,inst_35128);
} else {
if((state_val_35141 === (2))){
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35140__$1,(4),ch);
} else {
if((state_val_35141 === (11))){
var inst_35108 = (state_35140[(10)]);
var inst_35104 = (state_35140[(9)]);
var inst_35118 = (state_35140[(2)]);
var inst_35119 = [];
var inst_35120 = inst_35119.push(inst_35104);
var inst_35100 = inst_35119;
var inst_35101 = inst_35108;
var state_35140__$1 = (function (){var statearr_35152 = state_35140;
(statearr_35152[(11)] = inst_35120);

(statearr_35152[(12)] = inst_35118);

(statearr_35152[(7)] = inst_35101);

(statearr_35152[(8)] = inst_35100);

return statearr_35152;
})();
var statearr_35153_35183 = state_35140__$1;
(statearr_35153_35183[(2)] = null);

(statearr_35153_35183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (9))){
var inst_35100 = (state_35140[(8)]);
var inst_35116 = cljs.core.vec.call(null,inst_35100);
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35140__$1,(11),out,inst_35116);
} else {
if((state_val_35141 === (5))){
var inst_35108 = (state_35140[(10)]);
var inst_35104 = (state_35140[(9)]);
var inst_35101 = (state_35140[(7)]);
var inst_35108__$1 = f.call(null,inst_35104);
var inst_35109 = cljs.core._EQ_.call(null,inst_35108__$1,inst_35101);
var inst_35110 = cljs.core.keyword_identical_QMARK_.call(null,inst_35101,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35111 = (inst_35109) || (inst_35110);
var state_35140__$1 = (function (){var statearr_35154 = state_35140;
(statearr_35154[(10)] = inst_35108__$1);

return statearr_35154;
})();
if(cljs.core.truth_(inst_35111)){
var statearr_35155_35184 = state_35140__$1;
(statearr_35155_35184[(1)] = (8));

} else {
var statearr_35156_35185 = state_35140__$1;
(statearr_35156_35185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (14))){
var inst_35133 = (state_35140[(2)]);
var inst_35134 = cljs.core.async.close_BANG_.call(null,out);
var state_35140__$1 = (function (){var statearr_35158 = state_35140;
(statearr_35158[(13)] = inst_35133);

return statearr_35158;
})();
var statearr_35159_35186 = state_35140__$1;
(statearr_35159_35186[(2)] = inst_35134);

(statearr_35159_35186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (10))){
var inst_35123 = (state_35140[(2)]);
var state_35140__$1 = state_35140;
var statearr_35160_35187 = state_35140__$1;
(statearr_35160_35187[(2)] = inst_35123);

(statearr_35160_35187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35141 === (8))){
var inst_35108 = (state_35140[(10)]);
var inst_35104 = (state_35140[(9)]);
var inst_35100 = (state_35140[(8)]);
var inst_35113 = inst_35100.push(inst_35104);
var tmp35157 = inst_35100;
var inst_35100__$1 = tmp35157;
var inst_35101 = inst_35108;
var state_35140__$1 = (function (){var statearr_35161 = state_35140;
(statearr_35161[(14)] = inst_35113);

(statearr_35161[(7)] = inst_35101);

(statearr_35161[(8)] = inst_35100__$1);

return statearr_35161;
})();
var statearr_35162_35188 = state_35140__$1;
(statearr_35162_35188[(2)] = null);

(statearr_35162_35188[(1)] = (2));


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
});})(c__32397__auto___35174,out))
;
return ((function (switch__32285__auto__,c__32397__auto___35174,out){
return (function() {
var cljs$core$async$state_machine__32286__auto__ = null;
var cljs$core$async$state_machine__32286__auto____0 = (function (){
var statearr_35166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35166[(0)] = cljs$core$async$state_machine__32286__auto__);

(statearr_35166[(1)] = (1));

return statearr_35166;
});
var cljs$core$async$state_machine__32286__auto____1 = (function (state_35140){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_35140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e35167){if((e35167 instanceof Object)){
var ex__32289__auto__ = e35167;
var statearr_35168_35189 = state_35140;
(statearr_35168_35189[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35190 = state_35140;
state_35140 = G__35190;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
cljs$core$async$state_machine__32286__auto__ = function(state_35140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32286__auto____1.call(this,state_35140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32286__auto____0;
cljs$core$async$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32286__auto____1;
return cljs$core$async$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___35174,out))
})();
var state__32399__auto__ = (function (){var statearr_35169 = f__32398__auto__.call(null);
(statearr_35169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___35174);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___35174,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1492365309315