// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29702){
var map__29727 = p__29702;
var map__29727__$1 = ((((!((map__29727 == null)))?((((map__29727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29727):map__29727);
var m = map__29727__$1;
var n = cljs.core.get.call(null,map__29727__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29727__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29729_29751 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29730_29752 = null;
var count__29731_29753 = (0);
var i__29732_29754 = (0);
while(true){
if((i__29732_29754 < count__29731_29753)){
var f_29755 = cljs.core._nth.call(null,chunk__29730_29752,i__29732_29754);
cljs.core.println.call(null,"  ",f_29755);

var G__29756 = seq__29729_29751;
var G__29757 = chunk__29730_29752;
var G__29758 = count__29731_29753;
var G__29759 = (i__29732_29754 + (1));
seq__29729_29751 = G__29756;
chunk__29730_29752 = G__29757;
count__29731_29753 = G__29758;
i__29732_29754 = G__29759;
continue;
} else {
var temp__4657__auto___29760 = cljs.core.seq.call(null,seq__29729_29751);
if(temp__4657__auto___29760){
var seq__29729_29761__$1 = temp__4657__auto___29760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29729_29761__$1)){
var c__25646__auto___29762 = cljs.core.chunk_first.call(null,seq__29729_29761__$1);
var G__29763 = cljs.core.chunk_rest.call(null,seq__29729_29761__$1);
var G__29764 = c__25646__auto___29762;
var G__29765 = cljs.core.count.call(null,c__25646__auto___29762);
var G__29766 = (0);
seq__29729_29751 = G__29763;
chunk__29730_29752 = G__29764;
count__29731_29753 = G__29765;
i__29732_29754 = G__29766;
continue;
} else {
var f_29767 = cljs.core.first.call(null,seq__29729_29761__$1);
cljs.core.println.call(null,"  ",f_29767);

var G__29768 = cljs.core.next.call(null,seq__29729_29761__$1);
var G__29769 = null;
var G__29770 = (0);
var G__29771 = (0);
seq__29729_29751 = G__29768;
chunk__29730_29752 = G__29769;
count__29731_29753 = G__29770;
i__29732_29754 = G__29771;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29772 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24835__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29772);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29772)))?cljs.core.second.call(null,arglists_29772):arglists_29772));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__29733_29773 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29734_29774 = null;
var count__29735_29775 = (0);
var i__29736_29776 = (0);
while(true){
if((i__29736_29776 < count__29735_29775)){
var vec__29737_29777 = cljs.core._nth.call(null,chunk__29734_29774,i__29736_29776);
var name_29778 = cljs.core.nth.call(null,vec__29737_29777,(0),null);
var map__29740_29779 = cljs.core.nth.call(null,vec__29737_29777,(1),null);
var map__29740_29780__$1 = ((((!((map__29740_29779 == null)))?((((map__29740_29779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29740_29779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29740_29779):map__29740_29779);
var doc_29781 = cljs.core.get.call(null,map__29740_29780__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29782 = cljs.core.get.call(null,map__29740_29780__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29778);

cljs.core.println.call(null," ",arglists_29782);

if(cljs.core.truth_(doc_29781)){
cljs.core.println.call(null," ",doc_29781);
} else {
}

var G__29783 = seq__29733_29773;
var G__29784 = chunk__29734_29774;
var G__29785 = count__29735_29775;
var G__29786 = (i__29736_29776 + (1));
seq__29733_29773 = G__29783;
chunk__29734_29774 = G__29784;
count__29735_29775 = G__29785;
i__29736_29776 = G__29786;
continue;
} else {
var temp__4657__auto___29787 = cljs.core.seq.call(null,seq__29733_29773);
if(temp__4657__auto___29787){
var seq__29733_29788__$1 = temp__4657__auto___29787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29733_29788__$1)){
var c__25646__auto___29789 = cljs.core.chunk_first.call(null,seq__29733_29788__$1);
var G__29790 = cljs.core.chunk_rest.call(null,seq__29733_29788__$1);
var G__29791 = c__25646__auto___29789;
var G__29792 = cljs.core.count.call(null,c__25646__auto___29789);
var G__29793 = (0);
seq__29733_29773 = G__29790;
chunk__29734_29774 = G__29791;
count__29735_29775 = G__29792;
i__29736_29776 = G__29793;
continue;
} else {
var vec__29742_29794 = cljs.core.first.call(null,seq__29733_29788__$1);
var name_29795 = cljs.core.nth.call(null,vec__29742_29794,(0),null);
var map__29745_29796 = cljs.core.nth.call(null,vec__29742_29794,(1),null);
var map__29745_29797__$1 = ((((!((map__29745_29796 == null)))?((((map__29745_29796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29745_29796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29745_29796):map__29745_29796);
var doc_29798 = cljs.core.get.call(null,map__29745_29797__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29799 = cljs.core.get.call(null,map__29745_29797__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29795);

cljs.core.println.call(null," ",arglists_29799);

if(cljs.core.truth_(doc_29798)){
cljs.core.println.call(null," ",doc_29798);
} else {
}

var G__29800 = cljs.core.next.call(null,seq__29733_29788__$1);
var G__29801 = null;
var G__29802 = (0);
var G__29803 = (0);
seq__29733_29773 = G__29800;
chunk__29734_29774 = G__29801;
count__29735_29775 = G__29802;
i__29736_29776 = G__29803;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__29747 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29748 = null;
var count__29749 = (0);
var i__29750 = (0);
while(true){
if((i__29750 < count__29749)){
var role = cljs.core._nth.call(null,chunk__29748,i__29750);
var temp__4657__auto___29804__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29804__$1)){
var spec_29805 = temp__4657__auto___29804__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29805));
} else {
}

var G__29806 = seq__29747;
var G__29807 = chunk__29748;
var G__29808 = count__29749;
var G__29809 = (i__29750 + (1));
seq__29747 = G__29806;
chunk__29748 = G__29807;
count__29749 = G__29808;
i__29750 = G__29809;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29747);
if(temp__4657__auto____$1){
var seq__29747__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29747__$1)){
var c__25646__auto__ = cljs.core.chunk_first.call(null,seq__29747__$1);
var G__29810 = cljs.core.chunk_rest.call(null,seq__29747__$1);
var G__29811 = c__25646__auto__;
var G__29812 = cljs.core.count.call(null,c__25646__auto__);
var G__29813 = (0);
seq__29747 = G__29810;
chunk__29748 = G__29811;
count__29749 = G__29812;
i__29750 = G__29813;
continue;
} else {
var role = cljs.core.first.call(null,seq__29747__$1);
var temp__4657__auto___29814__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29814__$2)){
var spec_29815 = temp__4657__auto___29814__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29815));
} else {
}

var G__29816 = cljs.core.next.call(null,seq__29747__$1);
var G__29817 = null;
var G__29818 = (0);
var G__29819 = (0);
seq__29747 = G__29816;
chunk__29748 = G__29817;
count__29749 = G__29818;
i__29750 = G__29819;
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

//# sourceMappingURL=repl.js.map?rel=1492365294275