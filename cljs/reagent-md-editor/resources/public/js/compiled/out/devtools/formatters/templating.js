// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x38601_38602 = value;
x38601_38602.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x38606_38607 = value;
x38606_38607.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x38611_38612 = value;
x38611_38612.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24823__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24823__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24823__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25917__auto__ = [];
var len__25910__auto___38620 = arguments.length;
var i__25911__auto___38621 = (0);
while(true){
if((i__25911__auto___38621 < len__25910__auto___38620)){
args__25917__auto__.push((arguments[i__25911__auto___38621]));

var G__38622 = (i__25911__auto___38621 + (1));
i__25911__auto___38621 = G__38622;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((0) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25918__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__38616_38623 = cljs.core.seq.call(null,items);
var chunk__38617_38624 = null;
var count__38618_38625 = (0);
var i__38619_38626 = (0);
while(true){
if((i__38619_38626 < count__38618_38625)){
var item_38627 = cljs.core._nth.call(null,chunk__38617_38624,i__38619_38626);
if(cljs.core.some_QMARK_.call(null,item_38627)){
if(cljs.core.coll_QMARK_.call(null,item_38627)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38627)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38627));
}
} else {
}

var G__38628 = seq__38616_38623;
var G__38629 = chunk__38617_38624;
var G__38630 = count__38618_38625;
var G__38631 = (i__38619_38626 + (1));
seq__38616_38623 = G__38628;
chunk__38617_38624 = G__38629;
count__38618_38625 = G__38630;
i__38619_38626 = G__38631;
continue;
} else {
var temp__4657__auto___38632 = cljs.core.seq.call(null,seq__38616_38623);
if(temp__4657__auto___38632){
var seq__38616_38633__$1 = temp__4657__auto___38632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38616_38633__$1)){
var c__25646__auto___38634 = cljs.core.chunk_first.call(null,seq__38616_38633__$1);
var G__38635 = cljs.core.chunk_rest.call(null,seq__38616_38633__$1);
var G__38636 = c__25646__auto___38634;
var G__38637 = cljs.core.count.call(null,c__25646__auto___38634);
var G__38638 = (0);
seq__38616_38623 = G__38635;
chunk__38617_38624 = G__38636;
count__38618_38625 = G__38637;
i__38619_38626 = G__38638;
continue;
} else {
var item_38639 = cljs.core.first.call(null,seq__38616_38633__$1);
if(cljs.core.some_QMARK_.call(null,item_38639)){
if(cljs.core.coll_QMARK_.call(null,item_38639)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38639)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38639));
}
} else {
}

var G__38640 = cljs.core.next.call(null,seq__38616_38633__$1);
var G__38641 = null;
var G__38642 = (0);
var G__38643 = (0);
seq__38616_38623 = G__38640;
chunk__38617_38624 = G__38641;
count__38618_38625 = G__38642;
i__38619_38626 = G__38643;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38615){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38615));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25917__auto__ = [];
var len__25910__auto___38651 = arguments.length;
var i__25911__auto___38652 = (0);
while(true){
if((i__25911__auto___38652 < len__25910__auto___38651)){
args__25917__auto__.push((arguments[i__25911__auto___38652]));

var G__38653 = (i__25911__auto___38652 + (1));
i__25911__auto___38652 = G__38653;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((2) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25918__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__38647_38654 = cljs.core.seq.call(null,children);
var chunk__38648_38655 = null;
var count__38649_38656 = (0);
var i__38650_38657 = (0);
while(true){
if((i__38650_38657 < count__38649_38656)){
var child_38658 = cljs.core._nth.call(null,chunk__38648_38655,i__38650_38657);
if(cljs.core.some_QMARK_.call(null,child_38658)){
if(cljs.core.coll_QMARK_.call(null,child_38658)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38658))));
} else {
var temp__4655__auto___38659 = devtools.formatters.helpers.pref.call(null,child_38658);
if(cljs.core.truth_(temp__4655__auto___38659)){
var child_value_38660 = temp__4655__auto___38659;
template.push(child_value_38660);
} else {
}
}
} else {
}

var G__38661 = seq__38647_38654;
var G__38662 = chunk__38648_38655;
var G__38663 = count__38649_38656;
var G__38664 = (i__38650_38657 + (1));
seq__38647_38654 = G__38661;
chunk__38648_38655 = G__38662;
count__38649_38656 = G__38663;
i__38650_38657 = G__38664;
continue;
} else {
var temp__4657__auto___38665 = cljs.core.seq.call(null,seq__38647_38654);
if(temp__4657__auto___38665){
var seq__38647_38666__$1 = temp__4657__auto___38665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38647_38666__$1)){
var c__25646__auto___38667 = cljs.core.chunk_first.call(null,seq__38647_38666__$1);
var G__38668 = cljs.core.chunk_rest.call(null,seq__38647_38666__$1);
var G__38669 = c__25646__auto___38667;
var G__38670 = cljs.core.count.call(null,c__25646__auto___38667);
var G__38671 = (0);
seq__38647_38654 = G__38668;
chunk__38648_38655 = G__38669;
count__38649_38656 = G__38670;
i__38650_38657 = G__38671;
continue;
} else {
var child_38672 = cljs.core.first.call(null,seq__38647_38666__$1);
if(cljs.core.some_QMARK_.call(null,child_38672)){
if(cljs.core.coll_QMARK_.call(null,child_38672)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38672))));
} else {
var temp__4655__auto___38673 = devtools.formatters.helpers.pref.call(null,child_38672);
if(cljs.core.truth_(temp__4655__auto___38673)){
var child_value_38674 = temp__4655__auto___38673;
template.push(child_value_38674);
} else {
}
}
} else {
}

var G__38675 = cljs.core.next.call(null,seq__38647_38666__$1);
var G__38676 = null;
var G__38677 = (0);
var G__38678 = (0);
seq__38647_38654 = G__38675;
chunk__38648_38655 = G__38676;
count__38649_38656 = G__38677;
i__38650_38657 = G__38678;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38644){
var G__38645 = cljs.core.first.call(null,seq38644);
var seq38644__$1 = cljs.core.next.call(null,seq38644);
var G__38646 = cljs.core.first.call(null,seq38644__$1);
var seq38644__$2 = cljs.core.next.call(null,seq38644__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38645,G__38646,seq38644__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25917__auto__ = [];
var len__25910__auto___38681 = arguments.length;
var i__25911__auto___38682 = (0);
while(true){
if((i__25911__auto___38682 < len__25910__auto___38681)){
args__25917__auto__.push((arguments[i__25911__auto___38682]));

var G__38683 = (i__25911__auto___38682 + (1));
i__25911__auto___38682 = G__38683;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((1) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25918__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38679){
var G__38680 = cljs.core.first.call(null,seq38679);
var seq38679__$1 = cljs.core.next.call(null,seq38679);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38680,seq38679__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25917__auto__ = [];
var len__25910__auto___38686 = arguments.length;
var i__25911__auto___38687 = (0);
while(true){
if((i__25911__auto___38687 < len__25910__auto___38686)){
args__25917__auto__.push((arguments[i__25911__auto___38687]));

var G__38688 = (i__25911__auto___38687 + (1));
i__25911__auto___38687 = G__38688;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((1) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25918__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38684){
var G__38685 = cljs.core.first.call(null,seq38684);
var seq38684__$1 = cljs.core.next.call(null,seq38684);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38685,seq38684__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args38689 = [];
var len__25910__auto___38694 = arguments.length;
var i__25911__auto___38695 = (0);
while(true){
if((i__25911__auto___38695 < len__25910__auto___38694)){
args38689.push((arguments[i__25911__auto___38695]));

var G__38696 = (i__25911__auto___38695 + (1));
i__25911__auto___38695 = G__38696;
continue;
} else {
}
break;
}

var G__38691 = args38689.length;
switch (G__38691) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38689.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38693 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24835__auto__ = start_index;
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
return (0);
}
})()};
return obj38693;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25917__auto__ = [];
var len__25910__auto___38704 = arguments.length;
var i__25911__auto___38705 = (0);
while(true){
if((i__25911__auto___38705 < len__25910__auto___38704)){
args__25917__auto__.push((arguments[i__25911__auto___38705]));

var G__38706 = (i__25911__auto___38705 + (1));
i__25911__auto___38705 = G__38706;
continue;
} else {
}
break;
}

var argseq__25918__auto__ = ((((1) < args__25917__auto__.length))?(new cljs.core.IndexedSeq(args__25917__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25918__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38700){
var vec__38701 = p__38700;
var state_override_fn = cljs.core.nth.call(null,vec__38701,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38698){
var G__38699 = cljs.core.first.call(null,seq38698);
var seq38698__$1 = cljs.core.next.call(null,seq38698);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38699,seq38698__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25821__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38710_38713 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38711_38714 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38710_38713,_STAR_print_fn_STAR_38711_38714,sb__25821__auto__){
return (function (x__25822__auto__){
return sb__25821__auto__.append(x__25822__auto__);
});})(_STAR_print_newline_STAR_38710_38713,_STAR_print_fn_STAR_38711_38714,sb__25821__auto__))
;

try{var _STAR_print_level_STAR_38712_38715 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38712_38715;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38711_38714;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38710_38713;
}
return [cljs.core.str(sb__25821__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38717 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38717;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__38719 = name;
switch (G__38719) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__38724 = tag;
var html_tag = cljs.core.nth.call(null,vec__38724,(0),null);
var style = cljs.core.nth.call(null,vec__38724,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38728 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38728;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38731 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38732 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38732;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38731;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38733 = initial_value;
var G__38734 = value.call(null);
initial_value = G__38733;
value = G__38734;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38735 = initial_value;
var G__38736 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38735;
value = G__38736;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38737 = initial_value;
var G__38738 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38737;
value = G__38738;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1492365314085