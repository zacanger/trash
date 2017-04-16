// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36737 = [];
var len__25910__auto___36740 = arguments.length;
var i__25911__auto___36741 = (0);
while(true){
if((i__25911__auto___36741 < len__25910__auto___36740)){
args36737.push((arguments[i__25911__auto___36741]));

var G__36742 = (i__25911__auto___36741 + (1));
i__25911__auto___36741 = G__36742;
continue;
} else {
}
break;
}

var G__36739 = args36737.length;
switch (G__36739) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36737.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

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
var args__25917__auto__ = [];
var len__25910__auto___36745 = arguments.length;
var i__25911__auto___36746 = (0);
while(true){
if((i__25911__auto___36746 < len__25910__auto___36745)){
args__25917__auto__.push((arguments[i__25911__auto___36746]));

var G__36747 = (i__25911__auto___36746 + (1));
i__25911__auto___36746 = G__36747;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36744){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36744));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25917__auto__ = [];
var len__25910__auto___36749 = arguments.length;
var i__25911__auto___36750 = (0);
while(true){
if((i__25911__auto___36750 < len__25910__auto___36749)){
args__25917__auto__.push((arguments[i__25911__auto___36750]));

var G__36751 = (i__25911__auto___36750 + (1));
i__25911__auto___36750 = G__36751;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36748){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36748));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36752){
var map__36755 = p__36752;
var map__36755__$1 = ((((!((map__36755 == null)))?((((map__36755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36755):map__36755);
var message = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24835__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24823__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24823__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24823__auto__;
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
var c__32397__auto___36917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___36917,ch){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___36917,ch){
return (function (state_36886){
var state_val_36887 = (state_36886[(1)]);
if((state_val_36887 === (7))){
var inst_36882 = (state_36886[(2)]);
var state_36886__$1 = state_36886;
var statearr_36888_36918 = state_36886__$1;
(statearr_36888_36918[(2)] = inst_36882);

(statearr_36888_36918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (1))){
var state_36886__$1 = state_36886;
var statearr_36889_36919 = state_36886__$1;
(statearr_36889_36919[(2)] = null);

(statearr_36889_36919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (4))){
var inst_36839 = (state_36886[(7)]);
var inst_36839__$1 = (state_36886[(2)]);
var state_36886__$1 = (function (){var statearr_36890 = state_36886;
(statearr_36890[(7)] = inst_36839__$1);

return statearr_36890;
})();
if(cljs.core.truth_(inst_36839__$1)){
var statearr_36891_36920 = state_36886__$1;
(statearr_36891_36920[(1)] = (5));

} else {
var statearr_36892_36921 = state_36886__$1;
(statearr_36892_36921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (15))){
var inst_36846 = (state_36886[(8)]);
var inst_36861 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36846);
var inst_36862 = cljs.core.first.call(null,inst_36861);
var inst_36863 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36862);
var inst_36864 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36863)].join('');
var inst_36865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36864);
var state_36886__$1 = state_36886;
var statearr_36893_36922 = state_36886__$1;
(statearr_36893_36922[(2)] = inst_36865);

(statearr_36893_36922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (13))){
var inst_36870 = (state_36886[(2)]);
var state_36886__$1 = state_36886;
var statearr_36894_36923 = state_36886__$1;
(statearr_36894_36923[(2)] = inst_36870);

(statearr_36894_36923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (6))){
var state_36886__$1 = state_36886;
var statearr_36895_36924 = state_36886__$1;
(statearr_36895_36924[(2)] = null);

(statearr_36895_36924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (17))){
var inst_36868 = (state_36886[(2)]);
var state_36886__$1 = state_36886;
var statearr_36896_36925 = state_36886__$1;
(statearr_36896_36925[(2)] = inst_36868);

(statearr_36896_36925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (3))){
var inst_36884 = (state_36886[(2)]);
var state_36886__$1 = state_36886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36886__$1,inst_36884);
} else {
if((state_val_36887 === (12))){
var inst_36845 = (state_36886[(9)]);
var inst_36859 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36845,opts);
var state_36886__$1 = state_36886;
if(cljs.core.truth_(inst_36859)){
var statearr_36897_36926 = state_36886__$1;
(statearr_36897_36926[(1)] = (15));

} else {
var statearr_36898_36927 = state_36886__$1;
(statearr_36898_36927[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (2))){
var state_36886__$1 = state_36886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36886__$1,(4),ch);
} else {
if((state_val_36887 === (11))){
var inst_36846 = (state_36886[(8)]);
var inst_36851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36852 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36846);
var inst_36853 = cljs.core.async.timeout.call(null,(1000));
var inst_36854 = [inst_36852,inst_36853];
var inst_36855 = (new cljs.core.PersistentVector(null,2,(5),inst_36851,inst_36854,null));
var state_36886__$1 = state_36886;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36886__$1,(14),inst_36855);
} else {
if((state_val_36887 === (9))){
var inst_36846 = (state_36886[(8)]);
var inst_36872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36873 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36846);
var inst_36874 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36873);
var inst_36875 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36874)].join('');
var inst_36876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36875);
var state_36886__$1 = (function (){var statearr_36899 = state_36886;
(statearr_36899[(10)] = inst_36872);

return statearr_36899;
})();
var statearr_36900_36928 = state_36886__$1;
(statearr_36900_36928[(2)] = inst_36876);

(statearr_36900_36928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (5))){
var inst_36839 = (state_36886[(7)]);
var inst_36841 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36842 = (new cljs.core.PersistentArrayMap(null,2,inst_36841,null));
var inst_36843 = (new cljs.core.PersistentHashSet(null,inst_36842,null));
var inst_36844 = figwheel.client.focus_msgs.call(null,inst_36843,inst_36839);
var inst_36845 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36844);
var inst_36846 = cljs.core.first.call(null,inst_36844);
var inst_36847 = figwheel.client.autoload_QMARK_.call(null);
var state_36886__$1 = (function (){var statearr_36901 = state_36886;
(statearr_36901[(9)] = inst_36845);

(statearr_36901[(8)] = inst_36846);

return statearr_36901;
})();
if(cljs.core.truth_(inst_36847)){
var statearr_36902_36929 = state_36886__$1;
(statearr_36902_36929[(1)] = (8));

} else {
var statearr_36903_36930 = state_36886__$1;
(statearr_36903_36930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (14))){
var inst_36857 = (state_36886[(2)]);
var state_36886__$1 = state_36886;
var statearr_36904_36931 = state_36886__$1;
(statearr_36904_36931[(2)] = inst_36857);

(statearr_36904_36931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (16))){
var state_36886__$1 = state_36886;
var statearr_36905_36932 = state_36886__$1;
(statearr_36905_36932[(2)] = null);

(statearr_36905_36932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (10))){
var inst_36878 = (state_36886[(2)]);
var state_36886__$1 = (function (){var statearr_36906 = state_36886;
(statearr_36906[(11)] = inst_36878);

return statearr_36906;
})();
var statearr_36907_36933 = state_36886__$1;
(statearr_36907_36933[(2)] = null);

(statearr_36907_36933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (8))){
var inst_36845 = (state_36886[(9)]);
var inst_36849 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36845,opts);
var state_36886__$1 = state_36886;
if(cljs.core.truth_(inst_36849)){
var statearr_36908_36934 = state_36886__$1;
(statearr_36908_36934[(1)] = (11));

} else {
var statearr_36909_36935 = state_36886__$1;
(statearr_36909_36935[(1)] = (12));

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
});})(c__32397__auto___36917,ch))
;
return ((function (switch__32285__auto__,c__32397__auto___36917,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32286__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32286__auto____0 = (function (){
var statearr_36913 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36913[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32286__auto__);

(statearr_36913[(1)] = (1));

return statearr_36913;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32286__auto____1 = (function (state_36886){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_36886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e36914){if((e36914 instanceof Object)){
var ex__32289__auto__ = e36914;
var statearr_36915_36936 = state_36886;
(statearr_36915_36936[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36937 = state_36886;
state_36886 = G__36937;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32286__auto__ = function(state_36886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32286__auto____1.call(this,state_36886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32286__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32286__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___36917,ch))
})();
var state__32399__auto__ = (function (){var statearr_36916 = f__32398__auto__.call(null);
(statearr_36916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___36917);

return statearr_36916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___36917,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36938_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36938_SHARP_));
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
var base_path_36941 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36941){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36940){if((e36940 instanceof Error)){
var e = e36940;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36941], null));
} else {
var e = e36940;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36941))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36942){
var map__36951 = p__36942;
var map__36951__$1 = ((((!((map__36951 == null)))?((((map__36951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36951):map__36951);
var opts = map__36951__$1;
var build_id = cljs.core.get.call(null,map__36951__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36951,map__36951__$1,opts,build_id){
return (function (p__36953){
var vec__36954 = p__36953;
var seq__36955 = cljs.core.seq.call(null,vec__36954);
var first__36956 = cljs.core.first.call(null,seq__36955);
var seq__36955__$1 = cljs.core.next.call(null,seq__36955);
var map__36957 = first__36956;
var map__36957__$1 = ((((!((map__36957 == null)))?((((map__36957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36957):map__36957);
var msg = map__36957__$1;
var msg_name = cljs.core.get.call(null,map__36957__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36955__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36954,seq__36955,first__36956,seq__36955__$1,map__36957,map__36957__$1,msg,msg_name,_,map__36951,map__36951__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36954,seq__36955,first__36956,seq__36955__$1,map__36957,map__36957__$1,msg,msg_name,_,map__36951,map__36951__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36951,map__36951__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36965){
var vec__36966 = p__36965;
var seq__36967 = cljs.core.seq.call(null,vec__36966);
var first__36968 = cljs.core.first.call(null,seq__36967);
var seq__36967__$1 = cljs.core.next.call(null,seq__36967);
var map__36969 = first__36968;
var map__36969__$1 = ((((!((map__36969 == null)))?((((map__36969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36969):map__36969);
var msg = map__36969__$1;
var msg_name = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36967__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36971){
var map__36983 = p__36971;
var map__36983__$1 = ((((!((map__36983 == null)))?((((map__36983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36983):map__36983);
var on_compile_warning = cljs.core.get.call(null,map__36983__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36983__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36983,map__36983__$1,on_compile_warning,on_compile_fail){
return (function (p__36985){
var vec__36986 = p__36985;
var seq__36987 = cljs.core.seq.call(null,vec__36986);
var first__36988 = cljs.core.first.call(null,seq__36987);
var seq__36987__$1 = cljs.core.next.call(null,seq__36987);
var map__36989 = first__36988;
var map__36989__$1 = ((((!((map__36989 == null)))?((((map__36989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36989):map__36989);
var msg = map__36989__$1;
var msg_name = cljs.core.get.call(null,map__36989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36987__$1;
var pred__36991 = cljs.core._EQ_;
var expr__36992 = msg_name;
if(cljs.core.truth_(pred__36991.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36992))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36991.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36992))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36983,map__36983__$1,on_compile_warning,on_compile_fail))
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
var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__,msg_hist,msg_names,msg){
return (function (state_37220){
var state_val_37221 = (state_37220[(1)]);
if((state_val_37221 === (7))){
var inst_37140 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37140)){
var statearr_37222_37272 = state_37220__$1;
(statearr_37222_37272[(1)] = (8));

} else {
var statearr_37223_37273 = state_37220__$1;
(statearr_37223_37273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (20))){
var inst_37214 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37224_37274 = state_37220__$1;
(statearr_37224_37274[(2)] = inst_37214);

(statearr_37224_37274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (27))){
var inst_37210 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37225_37275 = state_37220__$1;
(statearr_37225_37275[(2)] = inst_37210);

(statearr_37225_37275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (1))){
var inst_37133 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37133)){
var statearr_37226_37276 = state_37220__$1;
(statearr_37226_37276[(1)] = (2));

} else {
var statearr_37227_37277 = state_37220__$1;
(statearr_37227_37277[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (24))){
var inst_37212 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37228_37278 = state_37220__$1;
(statearr_37228_37278[(2)] = inst_37212);

(statearr_37228_37278[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (4))){
var inst_37218 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37220__$1,inst_37218);
} else {
if((state_val_37221 === (15))){
var inst_37216 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37229_37279 = state_37220__$1;
(statearr_37229_37279[(2)] = inst_37216);

(statearr_37229_37279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (21))){
var inst_37169 = (state_37220[(2)]);
var inst_37170 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37171 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37170);
var state_37220__$1 = (function (){var statearr_37230 = state_37220;
(statearr_37230[(7)] = inst_37169);

return statearr_37230;
})();
var statearr_37231_37280 = state_37220__$1;
(statearr_37231_37280[(2)] = inst_37171);

(statearr_37231_37280[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (31))){
var inst_37199 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37199)){
var statearr_37232_37281 = state_37220__$1;
(statearr_37232_37281[(1)] = (34));

} else {
var statearr_37233_37282 = state_37220__$1;
(statearr_37233_37282[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (32))){
var inst_37208 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37234_37283 = state_37220__$1;
(statearr_37234_37283[(2)] = inst_37208);

(statearr_37234_37283[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (33))){
var inst_37195 = (state_37220[(2)]);
var inst_37196 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37197 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37196);
var state_37220__$1 = (function (){var statearr_37235 = state_37220;
(statearr_37235[(8)] = inst_37195);

return statearr_37235;
})();
var statearr_37236_37284 = state_37220__$1;
(statearr_37236_37284[(2)] = inst_37197);

(statearr_37236_37284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (13))){
var inst_37154 = figwheel.client.heads_up.clear.call(null);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(16),inst_37154);
} else {
if((state_val_37221 === (22))){
var inst_37175 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37176 = figwheel.client.heads_up.append_warning_message.call(null,inst_37175);
var state_37220__$1 = state_37220;
var statearr_37237_37285 = state_37220__$1;
(statearr_37237_37285[(2)] = inst_37176);

(statearr_37237_37285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (36))){
var inst_37206 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37238_37286 = state_37220__$1;
(statearr_37238_37286[(2)] = inst_37206);

(statearr_37238_37286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (29))){
var inst_37186 = (state_37220[(2)]);
var inst_37187 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37188 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37187);
var state_37220__$1 = (function (){var statearr_37239 = state_37220;
(statearr_37239[(9)] = inst_37186);

return statearr_37239;
})();
var statearr_37240_37287 = state_37220__$1;
(statearr_37240_37287[(2)] = inst_37188);

(statearr_37240_37287[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (6))){
var inst_37135 = (state_37220[(10)]);
var state_37220__$1 = state_37220;
var statearr_37241_37288 = state_37220__$1;
(statearr_37241_37288[(2)] = inst_37135);

(statearr_37241_37288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (28))){
var inst_37182 = (state_37220[(2)]);
var inst_37183 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37184 = figwheel.client.heads_up.display_warning.call(null,inst_37183);
var state_37220__$1 = (function (){var statearr_37242 = state_37220;
(statearr_37242[(11)] = inst_37182);

return statearr_37242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(29),inst_37184);
} else {
if((state_val_37221 === (25))){
var inst_37180 = figwheel.client.heads_up.clear.call(null);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(28),inst_37180);
} else {
if((state_val_37221 === (34))){
var inst_37201 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(37),inst_37201);
} else {
if((state_val_37221 === (17))){
var inst_37160 = (state_37220[(2)]);
var inst_37161 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37162 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37161);
var state_37220__$1 = (function (){var statearr_37243 = state_37220;
(statearr_37243[(12)] = inst_37160);

return statearr_37243;
})();
var statearr_37244_37289 = state_37220__$1;
(statearr_37244_37289[(2)] = inst_37162);

(statearr_37244_37289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (3))){
var inst_37152 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37152)){
var statearr_37245_37290 = state_37220__$1;
(statearr_37245_37290[(1)] = (13));

} else {
var statearr_37246_37291 = state_37220__$1;
(statearr_37246_37291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (12))){
var inst_37148 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37247_37292 = state_37220__$1;
(statearr_37247_37292[(2)] = inst_37148);

(statearr_37247_37292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (2))){
var inst_37135 = (state_37220[(10)]);
var inst_37135__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37220__$1 = (function (){var statearr_37248 = state_37220;
(statearr_37248[(10)] = inst_37135__$1);

return statearr_37248;
})();
if(cljs.core.truth_(inst_37135__$1)){
var statearr_37249_37293 = state_37220__$1;
(statearr_37249_37293[(1)] = (5));

} else {
var statearr_37250_37294 = state_37220__$1;
(statearr_37250_37294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (23))){
var inst_37178 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37178)){
var statearr_37251_37295 = state_37220__$1;
(statearr_37251_37295[(1)] = (25));

} else {
var statearr_37252_37296 = state_37220__$1;
(statearr_37252_37296[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (35))){
var state_37220__$1 = state_37220;
var statearr_37253_37297 = state_37220__$1;
(statearr_37253_37297[(2)] = null);

(statearr_37253_37297[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (19))){
var inst_37173 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37173)){
var statearr_37254_37298 = state_37220__$1;
(statearr_37254_37298[(1)] = (22));

} else {
var statearr_37255_37299 = state_37220__$1;
(statearr_37255_37299[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (11))){
var inst_37144 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37256_37300 = state_37220__$1;
(statearr_37256_37300[(2)] = inst_37144);

(statearr_37256_37300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (9))){
var inst_37146 = figwheel.client.heads_up.clear.call(null);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(12),inst_37146);
} else {
if((state_val_37221 === (5))){
var inst_37137 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37220__$1 = state_37220;
var statearr_37257_37301 = state_37220__$1;
(statearr_37257_37301[(2)] = inst_37137);

(statearr_37257_37301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (14))){
var inst_37164 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37164)){
var statearr_37258_37302 = state_37220__$1;
(statearr_37258_37302[(1)] = (18));

} else {
var statearr_37259_37303 = state_37220__$1;
(statearr_37259_37303[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (26))){
var inst_37190 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37190)){
var statearr_37260_37304 = state_37220__$1;
(statearr_37260_37304[(1)] = (30));

} else {
var statearr_37261_37305 = state_37220__$1;
(statearr_37261_37305[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (16))){
var inst_37156 = (state_37220[(2)]);
var inst_37157 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37158 = figwheel.client.heads_up.display_exception.call(null,inst_37157);
var state_37220__$1 = (function (){var statearr_37262 = state_37220;
(statearr_37262[(13)] = inst_37156);

return statearr_37262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(17),inst_37158);
} else {
if((state_val_37221 === (30))){
var inst_37192 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37193 = figwheel.client.heads_up.display_warning.call(null,inst_37192);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(33),inst_37193);
} else {
if((state_val_37221 === (10))){
var inst_37150 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37263_37306 = state_37220__$1;
(statearr_37263_37306[(2)] = inst_37150);

(statearr_37263_37306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (18))){
var inst_37166 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37167 = figwheel.client.heads_up.display_exception.call(null,inst_37166);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(21),inst_37167);
} else {
if((state_val_37221 === (37))){
var inst_37203 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37264_37307 = state_37220__$1;
(statearr_37264_37307[(2)] = inst_37203);

(statearr_37264_37307[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (8))){
var inst_37142 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(11),inst_37142);
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
});})(c__32397__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32285__auto__,c__32397__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto____0 = (function (){
var statearr_37268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37268[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto__);

(statearr_37268[(1)] = (1));

return statearr_37268;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto____1 = (function (state_37220){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_37220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e37269){if((e37269 instanceof Object)){
var ex__32289__auto__ = e37269;
var statearr_37270_37308 = state_37220;
(statearr_37270_37308[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37309 = state_37220;
state_37220 = G__37309;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto__ = function(state_37220){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto____1.call(this,state_37220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__,msg_hist,msg_names,msg))
})();
var state__32399__auto__ = (function (){var statearr_37271 = f__32398__auto__.call(null);
(statearr_37271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_37271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__,msg_hist,msg_names,msg))
);

return c__32397__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32397__auto___37372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___37372,ch){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___37372,ch){
return (function (state_37355){
var state_val_37356 = (state_37355[(1)]);
if((state_val_37356 === (1))){
var state_37355__$1 = state_37355;
var statearr_37357_37373 = state_37355__$1;
(statearr_37357_37373[(2)] = null);

(statearr_37357_37373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (2))){
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37355__$1,(4),ch);
} else {
if((state_val_37356 === (3))){
var inst_37353 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37355__$1,inst_37353);
} else {
if((state_val_37356 === (4))){
var inst_37343 = (state_37355[(7)]);
var inst_37343__$1 = (state_37355[(2)]);
var state_37355__$1 = (function (){var statearr_37358 = state_37355;
(statearr_37358[(7)] = inst_37343__$1);

return statearr_37358;
})();
if(cljs.core.truth_(inst_37343__$1)){
var statearr_37359_37374 = state_37355__$1;
(statearr_37359_37374[(1)] = (5));

} else {
var statearr_37360_37375 = state_37355__$1;
(statearr_37360_37375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (5))){
var inst_37343 = (state_37355[(7)]);
var inst_37345 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37343);
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37355__$1,(8),inst_37345);
} else {
if((state_val_37356 === (6))){
var state_37355__$1 = state_37355;
var statearr_37361_37376 = state_37355__$1;
(statearr_37361_37376[(2)] = null);

(statearr_37361_37376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (7))){
var inst_37351 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
var statearr_37362_37377 = state_37355__$1;
(statearr_37362_37377[(2)] = inst_37351);

(statearr_37362_37377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (8))){
var inst_37347 = (state_37355[(2)]);
var state_37355__$1 = (function (){var statearr_37363 = state_37355;
(statearr_37363[(8)] = inst_37347);

return statearr_37363;
})();
var statearr_37364_37378 = state_37355__$1;
(statearr_37364_37378[(2)] = null);

(statearr_37364_37378[(1)] = (2));


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
});})(c__32397__auto___37372,ch))
;
return ((function (switch__32285__auto__,c__32397__auto___37372,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32286__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32286__auto____0 = (function (){
var statearr_37368 = [null,null,null,null,null,null,null,null,null];
(statearr_37368[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32286__auto__);

(statearr_37368[(1)] = (1));

return statearr_37368;
});
var figwheel$client$heads_up_plugin_$_state_machine__32286__auto____1 = (function (state_37355){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_37355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e37369){if((e37369 instanceof Object)){
var ex__32289__auto__ = e37369;
var statearr_37370_37379 = state_37355;
(statearr_37370_37379[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37380 = state_37355;
state_37355 = G__37380;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32286__auto__ = function(state_37355){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32286__auto____1.call(this,state_37355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32286__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32286__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___37372,ch))
})();
var state__32399__auto__ = (function (){var statearr_37371 = f__32398__auto__.call(null);
(statearr_37371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___37372);

return statearr_37371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___37372,ch))
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
var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__){
return (function (state_37401){
var state_val_37402 = (state_37401[(1)]);
if((state_val_37402 === (1))){
var inst_37396 = cljs.core.async.timeout.call(null,(3000));
var state_37401__$1 = state_37401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37401__$1,(2),inst_37396);
} else {
if((state_val_37402 === (2))){
var inst_37398 = (state_37401[(2)]);
var inst_37399 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37401__$1 = (function (){var statearr_37403 = state_37401;
(statearr_37403[(7)] = inst_37398);

return statearr_37403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37401__$1,inst_37399);
} else {
return null;
}
}
});})(c__32397__auto__))
;
return ((function (switch__32285__auto__,c__32397__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32286__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32286__auto____0 = (function (){
var statearr_37407 = [null,null,null,null,null,null,null,null];
(statearr_37407[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32286__auto__);

(statearr_37407[(1)] = (1));

return statearr_37407;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32286__auto____1 = (function (state_37401){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_37401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e37408){if((e37408 instanceof Object)){
var ex__32289__auto__ = e37408;
var statearr_37409_37411 = state_37401;
(statearr_37409_37411[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37412 = state_37401;
state_37401 = G__37412;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32286__auto__ = function(state_37401){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32286__auto____1.call(this,state_37401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32286__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32286__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__))
})();
var state__32399__auto__ = (function (){var statearr_37410 = f__32398__auto__.call(null);
(statearr_37410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_37410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__))
);

return c__32397__auto__;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37435){
var state_val_37436 = (state_37435[(1)]);
if((state_val_37436 === (1))){
var inst_37429 = cljs.core.async.timeout.call(null,(2000));
var state_37435__$1 = state_37435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37435__$1,(2),inst_37429);
} else {
if((state_val_37436 === (2))){
var inst_37431 = (state_37435[(2)]);
var inst_37432 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37433 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37432);
var state_37435__$1 = (function (){var statearr_37437 = state_37435;
(statearr_37437[(7)] = inst_37431);

return statearr_37437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37435__$1,inst_37433);
} else {
return null;
}
}
});})(c__32397__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32285__auto__,c__32397__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto____0 = (function (){
var statearr_37441 = [null,null,null,null,null,null,null,null];
(statearr_37441[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto__);

(statearr_37441[(1)] = (1));

return statearr_37441;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto____1 = (function (state_37435){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_37435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e37442){if((e37442 instanceof Object)){
var ex__32289__auto__ = e37442;
var statearr_37443_37445 = state_37435;
(statearr_37443_37445[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37446 = state_37435;
state_37435 = G__37446;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto__ = function(state_37435){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto____1.call(this,state_37435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32399__auto__ = (function (){var statearr_37444 = f__32398__auto__.call(null);
(statearr_37444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_37444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__,figwheel_version,temp__4657__auto__))
);

return c__32397__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37447){
var map__37451 = p__37447;
var map__37451__$1 = ((((!((map__37451 == null)))?((((map__37451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37451):map__37451);
var file = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37453 = "";
var G__37453__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37453),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37453);
var G__37453__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37453__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37453__$1);
if(cljs.core.truth_((function (){var and__24823__auto__ = line;
if(cljs.core.truth_(and__24823__auto__)){
return column;
} else {
return and__24823__auto__;
}
})())){
return [cljs.core.str(G__37453__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37453__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37454){
var map__37461 = p__37454;
var map__37461__$1 = ((((!((map__37461 == null)))?((((map__37461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37461):map__37461);
var ed = map__37461__$1;
var formatted_exception = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37463_37467 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37464_37468 = null;
var count__37465_37469 = (0);
var i__37466_37470 = (0);
while(true){
if((i__37466_37470 < count__37465_37469)){
var msg_37471 = cljs.core._nth.call(null,chunk__37464_37468,i__37466_37470);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37471);

var G__37472 = seq__37463_37467;
var G__37473 = chunk__37464_37468;
var G__37474 = count__37465_37469;
var G__37475 = (i__37466_37470 + (1));
seq__37463_37467 = G__37472;
chunk__37464_37468 = G__37473;
count__37465_37469 = G__37474;
i__37466_37470 = G__37475;
continue;
} else {
var temp__4657__auto___37476 = cljs.core.seq.call(null,seq__37463_37467);
if(temp__4657__auto___37476){
var seq__37463_37477__$1 = temp__4657__auto___37476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37463_37477__$1)){
var c__25646__auto___37478 = cljs.core.chunk_first.call(null,seq__37463_37477__$1);
var G__37479 = cljs.core.chunk_rest.call(null,seq__37463_37477__$1);
var G__37480 = c__25646__auto___37478;
var G__37481 = cljs.core.count.call(null,c__25646__auto___37478);
var G__37482 = (0);
seq__37463_37467 = G__37479;
chunk__37464_37468 = G__37480;
count__37465_37469 = G__37481;
i__37466_37470 = G__37482;
continue;
} else {
var msg_37483 = cljs.core.first.call(null,seq__37463_37477__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37483);

var G__37484 = cljs.core.next.call(null,seq__37463_37477__$1);
var G__37485 = null;
var G__37486 = (0);
var G__37487 = (0);
seq__37463_37467 = G__37484;
chunk__37464_37468 = G__37485;
count__37465_37469 = G__37486;
i__37466_37470 = G__37487;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37488){
var map__37491 = p__37488;
var map__37491__$1 = ((((!((map__37491 == null)))?((((map__37491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37491):map__37491);
var w = map__37491__$1;
var message = cljs.core.get.call(null,map__37491__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__24823__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24823__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24823__auto__;
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
var seq__37503 = cljs.core.seq.call(null,plugins);
var chunk__37504 = null;
var count__37505 = (0);
var i__37506 = (0);
while(true){
if((i__37506 < count__37505)){
var vec__37507 = cljs.core._nth.call(null,chunk__37504,i__37506);
var k = cljs.core.nth.call(null,vec__37507,(0),null);
var plugin = cljs.core.nth.call(null,vec__37507,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37513 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37503,chunk__37504,count__37505,i__37506,pl_37513,vec__37507,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37513.call(null,msg_hist);
});})(seq__37503,chunk__37504,count__37505,i__37506,pl_37513,vec__37507,k,plugin))
);
} else {
}

var G__37514 = seq__37503;
var G__37515 = chunk__37504;
var G__37516 = count__37505;
var G__37517 = (i__37506 + (1));
seq__37503 = G__37514;
chunk__37504 = G__37515;
count__37505 = G__37516;
i__37506 = G__37517;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37503);
if(temp__4657__auto__){
var seq__37503__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37503__$1)){
var c__25646__auto__ = cljs.core.chunk_first.call(null,seq__37503__$1);
var G__37518 = cljs.core.chunk_rest.call(null,seq__37503__$1);
var G__37519 = c__25646__auto__;
var G__37520 = cljs.core.count.call(null,c__25646__auto__);
var G__37521 = (0);
seq__37503 = G__37518;
chunk__37504 = G__37519;
count__37505 = G__37520;
i__37506 = G__37521;
continue;
} else {
var vec__37510 = cljs.core.first.call(null,seq__37503__$1);
var k = cljs.core.nth.call(null,vec__37510,(0),null);
var plugin = cljs.core.nth.call(null,vec__37510,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37522 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37503,chunk__37504,count__37505,i__37506,pl_37522,vec__37510,k,plugin,seq__37503__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37522.call(null,msg_hist);
});})(seq__37503,chunk__37504,count__37505,i__37506,pl_37522,vec__37510,k,plugin,seq__37503__$1,temp__4657__auto__))
);
} else {
}

var G__37523 = cljs.core.next.call(null,seq__37503__$1);
var G__37524 = null;
var G__37525 = (0);
var G__37526 = (0);
seq__37503 = G__37523;
chunk__37504 = G__37524;
count__37505 = G__37525;
i__37506 = G__37526;
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
var args37527 = [];
var len__25910__auto___37534 = arguments.length;
var i__25911__auto___37535 = (0);
while(true){
if((i__25911__auto___37535 < len__25910__auto___37534)){
args37527.push((arguments[i__25911__auto___37535]));

var G__37536 = (i__25911__auto___37535 + (1));
i__25911__auto___37535 = G__37536;
continue;
} else {
}
break;
}

var G__37529 = args37527.length;
switch (G__37529) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37527.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37530_37538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37531_37539 = null;
var count__37532_37540 = (0);
var i__37533_37541 = (0);
while(true){
if((i__37533_37541 < count__37532_37540)){
var msg_37542 = cljs.core._nth.call(null,chunk__37531_37539,i__37533_37541);
figwheel.client.socket.handle_incoming_message.call(null,msg_37542);

var G__37543 = seq__37530_37538;
var G__37544 = chunk__37531_37539;
var G__37545 = count__37532_37540;
var G__37546 = (i__37533_37541 + (1));
seq__37530_37538 = G__37543;
chunk__37531_37539 = G__37544;
count__37532_37540 = G__37545;
i__37533_37541 = G__37546;
continue;
} else {
var temp__4657__auto___37547 = cljs.core.seq.call(null,seq__37530_37538);
if(temp__4657__auto___37547){
var seq__37530_37548__$1 = temp__4657__auto___37547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37530_37548__$1)){
var c__25646__auto___37549 = cljs.core.chunk_first.call(null,seq__37530_37548__$1);
var G__37550 = cljs.core.chunk_rest.call(null,seq__37530_37548__$1);
var G__37551 = c__25646__auto___37549;
var G__37552 = cljs.core.count.call(null,c__25646__auto___37549);
var G__37553 = (0);
seq__37530_37538 = G__37550;
chunk__37531_37539 = G__37551;
count__37532_37540 = G__37552;
i__37533_37541 = G__37553;
continue;
} else {
var msg_37554 = cljs.core.first.call(null,seq__37530_37548__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37554);

var G__37555 = cljs.core.next.call(null,seq__37530_37548__$1);
var G__37556 = null;
var G__37557 = (0);
var G__37558 = (0);
seq__37530_37538 = G__37555;
chunk__37531_37539 = G__37556;
count__37532_37540 = G__37557;
i__37533_37541 = G__37558;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25917__auto__ = [];
var len__25910__auto___37563 = arguments.length;
var i__25911__auto___37564 = (0);
while(true){
if((i__25911__auto___37564 < len__25910__auto___37563)){
args__25917__auto__.push((arguments[i__25911__auto___37564]));

var G__37565 = (i__25911__auto___37564 + (1));
i__25911__auto___37564 = G__37565;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37560){
var map__37561 = p__37560;
var map__37561__$1 = ((((!((map__37561 == null)))?((((map__37561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37561):map__37561);
var opts = map__37561__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37559){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37559));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37567){if((e37567 instanceof Error)){
var e = e37567;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37567;

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
return (function (p__37571){
var map__37572 = p__37571;
var map__37572__$1 = ((((!((map__37572 == null)))?((((map__37572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37572):map__37572);
var msg_name = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1492365311929