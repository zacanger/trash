// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('md_editor.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27646__delegate = function (x){
if(cljs.core.truth_(md_editor.core.mount_root)){
return cljs.core.apply.call(null,md_editor.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'md-editor.core/mount-root' is missing");
}
};
var G__27646 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27647__i = 0, G__27647__a = new Array(arguments.length -  0);
while (G__27647__i < G__27647__a.length) {G__27647__a[G__27647__i] = arguments[G__27647__i + 0]; ++G__27647__i;}
  x = new cljs.core.IndexedSeq(G__27647__a,0);
} 
return G__27646__delegate.call(this,x);};
G__27646.cljs$lang$maxFixedArity = 0;
G__27646.cljs$lang$applyTo = (function (arglist__27648){
var x = cljs.core.seq(arglist__27648);
return G__27646__delegate(x);
});
G__27646.cljs$core$IFn$_invoke$arity$variadic = G__27646__delegate;
return G__27646;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1492365983625