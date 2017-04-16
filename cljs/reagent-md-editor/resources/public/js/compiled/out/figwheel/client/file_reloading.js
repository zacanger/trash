// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24835__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24835__auto__){
return or__24835__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24835__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35398_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35398_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35403 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35404 = null;
var count__35405 = (0);
var i__35406 = (0);
while(true){
if((i__35406 < count__35405)){
var n = cljs.core._nth.call(null,chunk__35404,i__35406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35407 = seq__35403;
var G__35408 = chunk__35404;
var G__35409 = count__35405;
var G__35410 = (i__35406 + (1));
seq__35403 = G__35407;
chunk__35404 = G__35408;
count__35405 = G__35409;
i__35406 = G__35410;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35403);
if(temp__4657__auto__){
var seq__35403__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35403__$1)){
var c__25646__auto__ = cljs.core.chunk_first.call(null,seq__35403__$1);
var G__35411 = cljs.core.chunk_rest.call(null,seq__35403__$1);
var G__35412 = c__25646__auto__;
var G__35413 = cljs.core.count.call(null,c__25646__auto__);
var G__35414 = (0);
seq__35403 = G__35411;
chunk__35404 = G__35412;
count__35405 = G__35413;
i__35406 = G__35414;
continue;
} else {
var n = cljs.core.first.call(null,seq__35403__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35415 = cljs.core.next.call(null,seq__35403__$1);
var G__35416 = null;
var G__35417 = (0);
var G__35418 = (0);
seq__35403 = G__35415;
chunk__35404 = G__35416;
count__35405 = G__35417;
i__35406 = G__35418;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35469_35480 = cljs.core.seq.call(null,deps);
var chunk__35470_35481 = null;
var count__35471_35482 = (0);
var i__35472_35483 = (0);
while(true){
if((i__35472_35483 < count__35471_35482)){
var dep_35484 = cljs.core._nth.call(null,chunk__35470_35481,i__35472_35483);
topo_sort_helper_STAR_.call(null,dep_35484,(depth + (1)),state);

var G__35485 = seq__35469_35480;
var G__35486 = chunk__35470_35481;
var G__35487 = count__35471_35482;
var G__35488 = (i__35472_35483 + (1));
seq__35469_35480 = G__35485;
chunk__35470_35481 = G__35486;
count__35471_35482 = G__35487;
i__35472_35483 = G__35488;
continue;
} else {
var temp__4657__auto___35489 = cljs.core.seq.call(null,seq__35469_35480);
if(temp__4657__auto___35489){
var seq__35469_35490__$1 = temp__4657__auto___35489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35469_35490__$1)){
var c__25646__auto___35491 = cljs.core.chunk_first.call(null,seq__35469_35490__$1);
var G__35492 = cljs.core.chunk_rest.call(null,seq__35469_35490__$1);
var G__35493 = c__25646__auto___35491;
var G__35494 = cljs.core.count.call(null,c__25646__auto___35491);
var G__35495 = (0);
seq__35469_35480 = G__35492;
chunk__35470_35481 = G__35493;
count__35471_35482 = G__35494;
i__35472_35483 = G__35495;
continue;
} else {
var dep_35496 = cljs.core.first.call(null,seq__35469_35490__$1);
topo_sort_helper_STAR_.call(null,dep_35496,(depth + (1)),state);

var G__35497 = cljs.core.next.call(null,seq__35469_35490__$1);
var G__35498 = null;
var G__35499 = (0);
var G__35500 = (0);
seq__35469_35480 = G__35497;
chunk__35470_35481 = G__35498;
count__35471_35482 = G__35499;
i__35472_35483 = G__35500;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35473){
var vec__35477 = p__35473;
var seq__35478 = cljs.core.seq.call(null,vec__35477);
var first__35479 = cljs.core.first.call(null,seq__35478);
var seq__35478__$1 = cljs.core.next.call(null,seq__35478);
var x = first__35479;
var xs = seq__35478__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35477,seq__35478,first__35479,seq__35478__$1,x,xs,get_deps__$1){
return (function (p1__35419_SHARP_){
return clojure.set.difference.call(null,p1__35419_SHARP_,x);
});})(vec__35477,seq__35478,first__35479,seq__35478__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35513 = cljs.core.seq.call(null,provides);
var chunk__35514 = null;
var count__35515 = (0);
var i__35516 = (0);
while(true){
if((i__35516 < count__35515)){
var prov = cljs.core._nth.call(null,chunk__35514,i__35516);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35517_35525 = cljs.core.seq.call(null,requires);
var chunk__35518_35526 = null;
var count__35519_35527 = (0);
var i__35520_35528 = (0);
while(true){
if((i__35520_35528 < count__35519_35527)){
var req_35529 = cljs.core._nth.call(null,chunk__35518_35526,i__35520_35528);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35529,prov);

var G__35530 = seq__35517_35525;
var G__35531 = chunk__35518_35526;
var G__35532 = count__35519_35527;
var G__35533 = (i__35520_35528 + (1));
seq__35517_35525 = G__35530;
chunk__35518_35526 = G__35531;
count__35519_35527 = G__35532;
i__35520_35528 = G__35533;
continue;
} else {
var temp__4657__auto___35534 = cljs.core.seq.call(null,seq__35517_35525);
if(temp__4657__auto___35534){
var seq__35517_35535__$1 = temp__4657__auto___35534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35517_35535__$1)){
var c__25646__auto___35536 = cljs.core.chunk_first.call(null,seq__35517_35535__$1);
var G__35537 = cljs.core.chunk_rest.call(null,seq__35517_35535__$1);
var G__35538 = c__25646__auto___35536;
var G__35539 = cljs.core.count.call(null,c__25646__auto___35536);
var G__35540 = (0);
seq__35517_35525 = G__35537;
chunk__35518_35526 = G__35538;
count__35519_35527 = G__35539;
i__35520_35528 = G__35540;
continue;
} else {
var req_35541 = cljs.core.first.call(null,seq__35517_35535__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35541,prov);

var G__35542 = cljs.core.next.call(null,seq__35517_35535__$1);
var G__35543 = null;
var G__35544 = (0);
var G__35545 = (0);
seq__35517_35525 = G__35542;
chunk__35518_35526 = G__35543;
count__35519_35527 = G__35544;
i__35520_35528 = G__35545;
continue;
}
} else {
}
}
break;
}

var G__35546 = seq__35513;
var G__35547 = chunk__35514;
var G__35548 = count__35515;
var G__35549 = (i__35516 + (1));
seq__35513 = G__35546;
chunk__35514 = G__35547;
count__35515 = G__35548;
i__35516 = G__35549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35513);
if(temp__4657__auto__){
var seq__35513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35513__$1)){
var c__25646__auto__ = cljs.core.chunk_first.call(null,seq__35513__$1);
var G__35550 = cljs.core.chunk_rest.call(null,seq__35513__$1);
var G__35551 = c__25646__auto__;
var G__35552 = cljs.core.count.call(null,c__25646__auto__);
var G__35553 = (0);
seq__35513 = G__35550;
chunk__35514 = G__35551;
count__35515 = G__35552;
i__35516 = G__35553;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35513__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35521_35554 = cljs.core.seq.call(null,requires);
var chunk__35522_35555 = null;
var count__35523_35556 = (0);
var i__35524_35557 = (0);
while(true){
if((i__35524_35557 < count__35523_35556)){
var req_35558 = cljs.core._nth.call(null,chunk__35522_35555,i__35524_35557);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35558,prov);

var G__35559 = seq__35521_35554;
var G__35560 = chunk__35522_35555;
var G__35561 = count__35523_35556;
var G__35562 = (i__35524_35557 + (1));
seq__35521_35554 = G__35559;
chunk__35522_35555 = G__35560;
count__35523_35556 = G__35561;
i__35524_35557 = G__35562;
continue;
} else {
var temp__4657__auto___35563__$1 = cljs.core.seq.call(null,seq__35521_35554);
if(temp__4657__auto___35563__$1){
var seq__35521_35564__$1 = temp__4657__auto___35563__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35521_35564__$1)){
var c__25646__auto___35565 = cljs.core.chunk_first.call(null,seq__35521_35564__$1);
var G__35566 = cljs.core.chunk_rest.call(null,seq__35521_35564__$1);
var G__35567 = c__25646__auto___35565;
var G__35568 = cljs.core.count.call(null,c__25646__auto___35565);
var G__35569 = (0);
seq__35521_35554 = G__35566;
chunk__35522_35555 = G__35567;
count__35523_35556 = G__35568;
i__35524_35557 = G__35569;
continue;
} else {
var req_35570 = cljs.core.first.call(null,seq__35521_35564__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35570,prov);

var G__35571 = cljs.core.next.call(null,seq__35521_35564__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__35521_35554 = G__35571;
chunk__35522_35555 = G__35572;
count__35523_35556 = G__35573;
i__35524_35557 = G__35574;
continue;
}
} else {
}
}
break;
}

var G__35575 = cljs.core.next.call(null,seq__35513__$1);
var G__35576 = null;
var G__35577 = (0);
var G__35578 = (0);
seq__35513 = G__35575;
chunk__35514 = G__35576;
count__35515 = G__35577;
i__35516 = G__35578;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35583_35587 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35584_35588 = null;
var count__35585_35589 = (0);
var i__35586_35590 = (0);
while(true){
if((i__35586_35590 < count__35585_35589)){
var ns_35591 = cljs.core._nth.call(null,chunk__35584_35588,i__35586_35590);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35591);

var G__35592 = seq__35583_35587;
var G__35593 = chunk__35584_35588;
var G__35594 = count__35585_35589;
var G__35595 = (i__35586_35590 + (1));
seq__35583_35587 = G__35592;
chunk__35584_35588 = G__35593;
count__35585_35589 = G__35594;
i__35586_35590 = G__35595;
continue;
} else {
var temp__4657__auto___35596 = cljs.core.seq.call(null,seq__35583_35587);
if(temp__4657__auto___35596){
var seq__35583_35597__$1 = temp__4657__auto___35596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35583_35597__$1)){
var c__25646__auto___35598 = cljs.core.chunk_first.call(null,seq__35583_35597__$1);
var G__35599 = cljs.core.chunk_rest.call(null,seq__35583_35597__$1);
var G__35600 = c__25646__auto___35598;
var G__35601 = cljs.core.count.call(null,c__25646__auto___35598);
var G__35602 = (0);
seq__35583_35587 = G__35599;
chunk__35584_35588 = G__35600;
count__35585_35589 = G__35601;
i__35586_35590 = G__35602;
continue;
} else {
var ns_35603 = cljs.core.first.call(null,seq__35583_35597__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35603);

var G__35604 = cljs.core.next.call(null,seq__35583_35597__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__35583_35587 = G__35604;
chunk__35584_35588 = G__35605;
count__35585_35589 = G__35606;
i__35586_35590 = G__35607;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24835__auto__ = goog.require__;
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35608__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35609__i = 0, G__35609__a = new Array(arguments.length -  0);
while (G__35609__i < G__35609__a.length) {G__35609__a[G__35609__i] = arguments[G__35609__i + 0]; ++G__35609__i;}
  args = new cljs.core.IndexedSeq(G__35609__a,0);
} 
return G__35608__delegate.call(this,args);};
G__35608.cljs$lang$maxFixedArity = 0;
G__35608.cljs$lang$applyTo = (function (arglist__35610){
var args = cljs.core.seq(arglist__35610);
return G__35608__delegate(args);
});
G__35608.cljs$core$IFn$_invoke$arity$variadic = G__35608__delegate;
return G__35608;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35611 = cljs.core._EQ_;
var expr__35612 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35611.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35612))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35611,expr__35612){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35611,expr__35612))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35611,expr__35612){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35614){if((e35614 instanceof Error)){
var e = e35614;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35614;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35611,expr__35612))
} else {
if(cljs.core.truth_(pred__35611.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35612))){
return ((function (pred__35611,expr__35612){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35611,expr__35612){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35611,expr__35612))
);

return deferred.addErrback(((function (deferred,pred__35611,expr__35612){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35611,expr__35612))
);
});
;})(pred__35611,expr__35612))
} else {
if(cljs.core.truth_(pred__35611.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35612))){
return ((function (pred__35611,expr__35612){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35615){if((e35615 instanceof Error)){
var e = e35615;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35615;

}
}})());
});
;})(pred__35611,expr__35612))
} else {
return ((function (pred__35611,expr__35612){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35611,expr__35612))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35616,callback){
var map__35619 = p__35616;
var map__35619__$1 = ((((!((map__35619 == null)))?((((map__35619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35619):map__35619);
var file_msg = map__35619__$1;
var request_url = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35619,map__35619__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35619,map__35619__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__){
return (function (state_35643){
var state_val_35644 = (state_35643[(1)]);
if((state_val_35644 === (7))){
var inst_35639 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35645_35665 = state_35643__$1;
(statearr_35645_35665[(2)] = inst_35639);

(statearr_35645_35665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (1))){
var state_35643__$1 = state_35643;
var statearr_35646_35666 = state_35643__$1;
(statearr_35646_35666[(2)] = null);

(statearr_35646_35666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (4))){
var inst_35623 = (state_35643[(7)]);
var inst_35623__$1 = (state_35643[(2)]);
var state_35643__$1 = (function (){var statearr_35647 = state_35643;
(statearr_35647[(7)] = inst_35623__$1);

return statearr_35647;
})();
if(cljs.core.truth_(inst_35623__$1)){
var statearr_35648_35667 = state_35643__$1;
(statearr_35648_35667[(1)] = (5));

} else {
var statearr_35649_35668 = state_35643__$1;
(statearr_35649_35668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (6))){
var state_35643__$1 = state_35643;
var statearr_35650_35669 = state_35643__$1;
(statearr_35650_35669[(2)] = null);

(statearr_35650_35669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (3))){
var inst_35641 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35643__$1,inst_35641);
} else {
if((state_val_35644 === (2))){
var state_35643__$1 = state_35643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35643__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35644 === (11))){
var inst_35635 = (state_35643[(2)]);
var state_35643__$1 = (function (){var statearr_35651 = state_35643;
(statearr_35651[(8)] = inst_35635);

return statearr_35651;
})();
var statearr_35652_35670 = state_35643__$1;
(statearr_35652_35670[(2)] = null);

(statearr_35652_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (9))){
var inst_35629 = (state_35643[(9)]);
var inst_35627 = (state_35643[(10)]);
var inst_35631 = inst_35629.call(null,inst_35627);
var state_35643__$1 = state_35643;
var statearr_35653_35671 = state_35643__$1;
(statearr_35653_35671[(2)] = inst_35631);

(statearr_35653_35671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (5))){
var inst_35623 = (state_35643[(7)]);
var inst_35625 = figwheel.client.file_reloading.blocking_load.call(null,inst_35623);
var state_35643__$1 = state_35643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35643__$1,(8),inst_35625);
} else {
if((state_val_35644 === (10))){
var inst_35627 = (state_35643[(10)]);
var inst_35633 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35627);
var state_35643__$1 = state_35643;
var statearr_35654_35672 = state_35643__$1;
(statearr_35654_35672[(2)] = inst_35633);

(statearr_35654_35672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (8))){
var inst_35629 = (state_35643[(9)]);
var inst_35623 = (state_35643[(7)]);
var inst_35627 = (state_35643[(2)]);
var inst_35628 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35629__$1 = cljs.core.get.call(null,inst_35628,inst_35623);
var state_35643__$1 = (function (){var statearr_35655 = state_35643;
(statearr_35655[(9)] = inst_35629__$1);

(statearr_35655[(10)] = inst_35627);

return statearr_35655;
})();
if(cljs.core.truth_(inst_35629__$1)){
var statearr_35656_35673 = state_35643__$1;
(statearr_35656_35673[(1)] = (9));

} else {
var statearr_35657_35674 = state_35643__$1;
(statearr_35657_35674[(1)] = (10));

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
});})(c__32397__auto__))
;
return ((function (switch__32285__auto__,c__32397__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32286__auto__ = null;
var figwheel$client$file_reloading$state_machine__32286__auto____0 = (function (){
var statearr_35661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35661[(0)] = figwheel$client$file_reloading$state_machine__32286__auto__);

(statearr_35661[(1)] = (1));

return statearr_35661;
});
var figwheel$client$file_reloading$state_machine__32286__auto____1 = (function (state_35643){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_35643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e35662){if((e35662 instanceof Object)){
var ex__32289__auto__ = e35662;
var statearr_35663_35675 = state_35643;
(statearr_35663_35675[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35676 = state_35643;
state_35643 = G__35676;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32286__auto__ = function(state_35643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32286__auto____1.call(this,state_35643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32286__auto____0;
figwheel$client$file_reloading$state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32286__auto____1;
return figwheel$client$file_reloading$state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__))
})();
var state__32399__auto__ = (function (){var statearr_35664 = f__32398__auto__.call(null);
(statearr_35664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_35664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__))
);

return c__32397__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35677,callback){
var map__35680 = p__35677;
var map__35680__$1 = ((((!((map__35680 == null)))?((((map__35680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35680):map__35680);
var file_msg = map__35680__$1;
var namespace = cljs.core.get.call(null,map__35680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35680,map__35680__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35680,map__35680__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35682){
var map__35685 = p__35682;
var map__35685__$1 = ((((!((map__35685 == null)))?((((map__35685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35685):map__35685);
var file_msg = map__35685__$1;
var namespace = cljs.core.get.call(null,map__35685__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35687){
var map__35690 = p__35687;
var map__35690__$1 = ((((!((map__35690 == null)))?((((map__35690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35690):map__35690);
var file_msg = map__35690__$1;
var namespace = cljs.core.get.call(null,map__35690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24823__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24823__auto__){
var or__24835__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24835__auto__)){
return or__24835__auto__;
} else {
var or__24835__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24835__auto____$1)){
return or__24835__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24823__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35692,callback){
var map__35695 = p__35692;
var map__35695__$1 = ((((!((map__35695 == null)))?((((map__35695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35695):map__35695);
var file_msg = map__35695__$1;
var request_url = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32397__auto___35799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto___35799,out){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto___35799,out){
return (function (state_35781){
var state_val_35782 = (state_35781[(1)]);
if((state_val_35782 === (1))){
var inst_35755 = cljs.core.seq.call(null,files);
var inst_35756 = cljs.core.first.call(null,inst_35755);
var inst_35757 = cljs.core.next.call(null,inst_35755);
var inst_35758 = files;
var state_35781__$1 = (function (){var statearr_35783 = state_35781;
(statearr_35783[(7)] = inst_35757);

(statearr_35783[(8)] = inst_35756);

(statearr_35783[(9)] = inst_35758);

return statearr_35783;
})();
var statearr_35784_35800 = state_35781__$1;
(statearr_35784_35800[(2)] = null);

(statearr_35784_35800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (2))){
var inst_35764 = (state_35781[(10)]);
var inst_35758 = (state_35781[(9)]);
var inst_35763 = cljs.core.seq.call(null,inst_35758);
var inst_35764__$1 = cljs.core.first.call(null,inst_35763);
var inst_35765 = cljs.core.next.call(null,inst_35763);
var inst_35766 = (inst_35764__$1 == null);
var inst_35767 = cljs.core.not.call(null,inst_35766);
var state_35781__$1 = (function (){var statearr_35785 = state_35781;
(statearr_35785[(10)] = inst_35764__$1);

(statearr_35785[(11)] = inst_35765);

return statearr_35785;
})();
if(inst_35767){
var statearr_35786_35801 = state_35781__$1;
(statearr_35786_35801[(1)] = (4));

} else {
var statearr_35787_35802 = state_35781__$1;
(statearr_35787_35802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (3))){
var inst_35779 = (state_35781[(2)]);
var state_35781__$1 = state_35781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35781__$1,inst_35779);
} else {
if((state_val_35782 === (4))){
var inst_35764 = (state_35781[(10)]);
var inst_35769 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35764);
var state_35781__$1 = state_35781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35781__$1,(7),inst_35769);
} else {
if((state_val_35782 === (5))){
var inst_35775 = cljs.core.async.close_BANG_.call(null,out);
var state_35781__$1 = state_35781;
var statearr_35788_35803 = state_35781__$1;
(statearr_35788_35803[(2)] = inst_35775);

(statearr_35788_35803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (6))){
var inst_35777 = (state_35781[(2)]);
var state_35781__$1 = state_35781;
var statearr_35789_35804 = state_35781__$1;
(statearr_35789_35804[(2)] = inst_35777);

(statearr_35789_35804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (7))){
var inst_35765 = (state_35781[(11)]);
var inst_35771 = (state_35781[(2)]);
var inst_35772 = cljs.core.async.put_BANG_.call(null,out,inst_35771);
var inst_35758 = inst_35765;
var state_35781__$1 = (function (){var statearr_35790 = state_35781;
(statearr_35790[(12)] = inst_35772);

(statearr_35790[(9)] = inst_35758);

return statearr_35790;
})();
var statearr_35791_35805 = state_35781__$1;
(statearr_35791_35805[(2)] = null);

(statearr_35791_35805[(1)] = (2));


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
});})(c__32397__auto___35799,out))
;
return ((function (switch__32285__auto__,c__32397__auto___35799,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto____0 = (function (){
var statearr_35795 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35795[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto__);

(statearr_35795[(1)] = (1));

return statearr_35795;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto____1 = (function (state_35781){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_35781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e35796){if((e35796 instanceof Object)){
var ex__32289__auto__ = e35796;
var statearr_35797_35806 = state_35781;
(statearr_35797_35806[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35807 = state_35781;
state_35781 = G__35807;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto__ = function(state_35781){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto____1.call(this,state_35781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto___35799,out))
})();
var state__32399__auto__ = (function (){var statearr_35798 = f__32398__auto__.call(null);
(statearr_35798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto___35799);

return statearr_35798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto___35799,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35808,opts){
var map__35812 = p__35808;
var map__35812__$1 = ((((!((map__35812 == null)))?((((map__35812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35812):map__35812);
var eval_body__$1 = cljs.core.get.call(null,map__35812__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24823__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24823__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24823__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35814){var e = e35814;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35815_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35815_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35824){
var vec__35825 = p__35824;
var k = cljs.core.nth.call(null,vec__35825,(0),null);
var v = cljs.core.nth.call(null,vec__35825,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35828){
var vec__35829 = p__35828;
var k = cljs.core.nth.call(null,vec__35829,(0),null);
var v = cljs.core.nth.call(null,vec__35829,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35835,p__35836){
var map__36083 = p__35835;
var map__36083__$1 = ((((!((map__36083 == null)))?((((map__36083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36083):map__36083);
var opts = map__36083__$1;
var before_jsload = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36084 = p__35836;
var map__36084__$1 = ((((!((map__36084 == null)))?((((map__36084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36084):map__36084);
var msg = map__36084__$1;
var files = cljs.core.get.call(null,map__36084__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36084__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36084__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32398__auto__ = (function (){var switch__32285__auto__ = ((function (c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36237){
var state_val_36238 = (state_36237[(1)]);
if((state_val_36238 === (7))){
var inst_36101 = (state_36237[(7)]);
var inst_36099 = (state_36237[(8)]);
var inst_36100 = (state_36237[(9)]);
var inst_36098 = (state_36237[(10)]);
var inst_36106 = cljs.core._nth.call(null,inst_36099,inst_36101);
var inst_36107 = figwheel.client.file_reloading.eval_body.call(null,inst_36106,opts);
var inst_36108 = (inst_36101 + (1));
var tmp36239 = inst_36099;
var tmp36240 = inst_36100;
var tmp36241 = inst_36098;
var inst_36098__$1 = tmp36241;
var inst_36099__$1 = tmp36239;
var inst_36100__$1 = tmp36240;
var inst_36101__$1 = inst_36108;
var state_36237__$1 = (function (){var statearr_36242 = state_36237;
(statearr_36242[(7)] = inst_36101__$1);

(statearr_36242[(8)] = inst_36099__$1);

(statearr_36242[(9)] = inst_36100__$1);

(statearr_36242[(10)] = inst_36098__$1);

(statearr_36242[(11)] = inst_36107);

return statearr_36242;
})();
var statearr_36243_36329 = state_36237__$1;
(statearr_36243_36329[(2)] = null);

(statearr_36243_36329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (20))){
var inst_36141 = (state_36237[(12)]);
var inst_36149 = figwheel.client.file_reloading.sort_files.call(null,inst_36141);
var state_36237__$1 = state_36237;
var statearr_36244_36330 = state_36237__$1;
(statearr_36244_36330[(2)] = inst_36149);

(statearr_36244_36330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (27))){
var state_36237__$1 = state_36237;
var statearr_36245_36331 = state_36237__$1;
(statearr_36245_36331[(2)] = null);

(statearr_36245_36331[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (1))){
var inst_36090 = (state_36237[(13)]);
var inst_36087 = before_jsload.call(null,files);
var inst_36088 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36089 = (function (){return ((function (inst_36090,inst_36087,inst_36088,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35832_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35832_SHARP_);
});
;})(inst_36090,inst_36087,inst_36088,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36090__$1 = cljs.core.filter.call(null,inst_36089,files);
var inst_36091 = cljs.core.not_empty.call(null,inst_36090__$1);
var state_36237__$1 = (function (){var statearr_36246 = state_36237;
(statearr_36246[(14)] = inst_36087);

(statearr_36246[(15)] = inst_36088);

(statearr_36246[(13)] = inst_36090__$1);

return statearr_36246;
})();
if(cljs.core.truth_(inst_36091)){
var statearr_36247_36332 = state_36237__$1;
(statearr_36247_36332[(1)] = (2));

} else {
var statearr_36248_36333 = state_36237__$1;
(statearr_36248_36333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (24))){
var state_36237__$1 = state_36237;
var statearr_36249_36334 = state_36237__$1;
(statearr_36249_36334[(2)] = null);

(statearr_36249_36334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (39))){
var inst_36191 = (state_36237[(16)]);
var state_36237__$1 = state_36237;
var statearr_36250_36335 = state_36237__$1;
(statearr_36250_36335[(2)] = inst_36191);

(statearr_36250_36335[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (46))){
var inst_36232 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36251_36336 = state_36237__$1;
(statearr_36251_36336[(2)] = inst_36232);

(statearr_36251_36336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (4))){
var inst_36135 = (state_36237[(2)]);
var inst_36136 = cljs.core.List.EMPTY;
var inst_36137 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36136);
var inst_36138 = (function (){return ((function (inst_36135,inst_36136,inst_36137,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35833_SHARP_){
var and__24823__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35833_SHARP_);
if(cljs.core.truth_(and__24823__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35833_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35833_SHARP_)));
} else {
return and__24823__auto__;
}
});
;})(inst_36135,inst_36136,inst_36137,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36139 = cljs.core.filter.call(null,inst_36138,files);
var inst_36140 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36141 = cljs.core.concat.call(null,inst_36139,inst_36140);
var state_36237__$1 = (function (){var statearr_36252 = state_36237;
(statearr_36252[(17)] = inst_36137);

(statearr_36252[(12)] = inst_36141);

(statearr_36252[(18)] = inst_36135);

return statearr_36252;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36253_36337 = state_36237__$1;
(statearr_36253_36337[(1)] = (16));

} else {
var statearr_36254_36338 = state_36237__$1;
(statearr_36254_36338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (15))){
var inst_36125 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36255_36339 = state_36237__$1;
(statearr_36255_36339[(2)] = inst_36125);

(statearr_36255_36339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (21))){
var inst_36151 = (state_36237[(19)]);
var inst_36151__$1 = (state_36237[(2)]);
var inst_36152 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36151__$1);
var state_36237__$1 = (function (){var statearr_36256 = state_36237;
(statearr_36256[(19)] = inst_36151__$1);

return statearr_36256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36237__$1,(22),inst_36152);
} else {
if((state_val_36238 === (31))){
var inst_36235 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36237__$1,inst_36235);
} else {
if((state_val_36238 === (32))){
var inst_36191 = (state_36237[(16)]);
var inst_36196 = inst_36191.cljs$lang$protocol_mask$partition0$;
var inst_36197 = (inst_36196 & (64));
var inst_36198 = inst_36191.cljs$core$ISeq$;
var inst_36199 = (inst_36197) || (inst_36198);
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36199)){
var statearr_36257_36340 = state_36237__$1;
(statearr_36257_36340[(1)] = (35));

} else {
var statearr_36258_36341 = state_36237__$1;
(statearr_36258_36341[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (40))){
var inst_36212 = (state_36237[(20)]);
var inst_36211 = (state_36237[(2)]);
var inst_36212__$1 = cljs.core.get.call(null,inst_36211,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36213 = cljs.core.get.call(null,inst_36211,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36214 = cljs.core.not_empty.call(null,inst_36212__$1);
var state_36237__$1 = (function (){var statearr_36259 = state_36237;
(statearr_36259[(20)] = inst_36212__$1);

(statearr_36259[(21)] = inst_36213);

return statearr_36259;
})();
if(cljs.core.truth_(inst_36214)){
var statearr_36260_36342 = state_36237__$1;
(statearr_36260_36342[(1)] = (41));

} else {
var statearr_36261_36343 = state_36237__$1;
(statearr_36261_36343[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (33))){
var state_36237__$1 = state_36237;
var statearr_36262_36344 = state_36237__$1;
(statearr_36262_36344[(2)] = false);

(statearr_36262_36344[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (13))){
var inst_36111 = (state_36237[(22)]);
var inst_36115 = cljs.core.chunk_first.call(null,inst_36111);
var inst_36116 = cljs.core.chunk_rest.call(null,inst_36111);
var inst_36117 = cljs.core.count.call(null,inst_36115);
var inst_36098 = inst_36116;
var inst_36099 = inst_36115;
var inst_36100 = inst_36117;
var inst_36101 = (0);
var state_36237__$1 = (function (){var statearr_36263 = state_36237;
(statearr_36263[(7)] = inst_36101);

(statearr_36263[(8)] = inst_36099);

(statearr_36263[(9)] = inst_36100);

(statearr_36263[(10)] = inst_36098);

return statearr_36263;
})();
var statearr_36264_36345 = state_36237__$1;
(statearr_36264_36345[(2)] = null);

(statearr_36264_36345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (22))){
var inst_36155 = (state_36237[(23)]);
var inst_36159 = (state_36237[(24)]);
var inst_36151 = (state_36237[(19)]);
var inst_36154 = (state_36237[(25)]);
var inst_36154__$1 = (state_36237[(2)]);
var inst_36155__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36154__$1);
var inst_36156 = (function (){var all_files = inst_36151;
var res_SINGLEQUOTE_ = inst_36154__$1;
var res = inst_36155__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36155,inst_36159,inst_36151,inst_36154,inst_36154__$1,inst_36155__$1,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35834_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35834_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36155,inst_36159,inst_36151,inst_36154,inst_36154__$1,inst_36155__$1,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36157 = cljs.core.filter.call(null,inst_36156,inst_36154__$1);
var inst_36158 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36159__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36158);
var inst_36160 = cljs.core.not_empty.call(null,inst_36159__$1);
var state_36237__$1 = (function (){var statearr_36265 = state_36237;
(statearr_36265[(23)] = inst_36155__$1);

(statearr_36265[(24)] = inst_36159__$1);

(statearr_36265[(26)] = inst_36157);

(statearr_36265[(25)] = inst_36154__$1);

return statearr_36265;
})();
if(cljs.core.truth_(inst_36160)){
var statearr_36266_36346 = state_36237__$1;
(statearr_36266_36346[(1)] = (23));

} else {
var statearr_36267_36347 = state_36237__$1;
(statearr_36267_36347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (36))){
var state_36237__$1 = state_36237;
var statearr_36268_36348 = state_36237__$1;
(statearr_36268_36348[(2)] = false);

(statearr_36268_36348[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (41))){
var inst_36212 = (state_36237[(20)]);
var inst_36216 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36217 = cljs.core.map.call(null,inst_36216,inst_36212);
var inst_36218 = cljs.core.pr_str.call(null,inst_36217);
var inst_36219 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36218)].join('');
var inst_36220 = figwheel.client.utils.log.call(null,inst_36219);
var state_36237__$1 = state_36237;
var statearr_36269_36349 = state_36237__$1;
(statearr_36269_36349[(2)] = inst_36220);

(statearr_36269_36349[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (43))){
var inst_36213 = (state_36237[(21)]);
var inst_36223 = (state_36237[(2)]);
var inst_36224 = cljs.core.not_empty.call(null,inst_36213);
var state_36237__$1 = (function (){var statearr_36270 = state_36237;
(statearr_36270[(27)] = inst_36223);

return statearr_36270;
})();
if(cljs.core.truth_(inst_36224)){
var statearr_36271_36350 = state_36237__$1;
(statearr_36271_36350[(1)] = (44));

} else {
var statearr_36272_36351 = state_36237__$1;
(statearr_36272_36351[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (29))){
var inst_36155 = (state_36237[(23)]);
var inst_36191 = (state_36237[(16)]);
var inst_36159 = (state_36237[(24)]);
var inst_36151 = (state_36237[(19)]);
var inst_36157 = (state_36237[(26)]);
var inst_36154 = (state_36237[(25)]);
var inst_36187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36190 = (function (){var all_files = inst_36151;
var res_SINGLEQUOTE_ = inst_36154;
var res = inst_36155;
var files_not_loaded = inst_36157;
var dependencies_that_loaded = inst_36159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36191,inst_36159,inst_36151,inst_36157,inst_36154,inst_36187,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36189){
var map__36273 = p__36189;
var map__36273__$1 = ((((!((map__36273 == null)))?((((map__36273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36273):map__36273);
var namespace = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36191,inst_36159,inst_36151,inst_36157,inst_36154,inst_36187,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36191__$1 = cljs.core.group_by.call(null,inst_36190,inst_36157);
var inst_36193 = (inst_36191__$1 == null);
var inst_36194 = cljs.core.not.call(null,inst_36193);
var state_36237__$1 = (function (){var statearr_36275 = state_36237;
(statearr_36275[(16)] = inst_36191__$1);

(statearr_36275[(28)] = inst_36187);

return statearr_36275;
})();
if(inst_36194){
var statearr_36276_36352 = state_36237__$1;
(statearr_36276_36352[(1)] = (32));

} else {
var statearr_36277_36353 = state_36237__$1;
(statearr_36277_36353[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (44))){
var inst_36213 = (state_36237[(21)]);
var inst_36226 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36213);
var inst_36227 = cljs.core.pr_str.call(null,inst_36226);
var inst_36228 = [cljs.core.str("not required: "),cljs.core.str(inst_36227)].join('');
var inst_36229 = figwheel.client.utils.log.call(null,inst_36228);
var state_36237__$1 = state_36237;
var statearr_36278_36354 = state_36237__$1;
(statearr_36278_36354[(2)] = inst_36229);

(statearr_36278_36354[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (6))){
var inst_36132 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36279_36355 = state_36237__$1;
(statearr_36279_36355[(2)] = inst_36132);

(statearr_36279_36355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (28))){
var inst_36157 = (state_36237[(26)]);
var inst_36184 = (state_36237[(2)]);
var inst_36185 = cljs.core.not_empty.call(null,inst_36157);
var state_36237__$1 = (function (){var statearr_36280 = state_36237;
(statearr_36280[(29)] = inst_36184);

return statearr_36280;
})();
if(cljs.core.truth_(inst_36185)){
var statearr_36281_36356 = state_36237__$1;
(statearr_36281_36356[(1)] = (29));

} else {
var statearr_36282_36357 = state_36237__$1;
(statearr_36282_36357[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (25))){
var inst_36155 = (state_36237[(23)]);
var inst_36171 = (state_36237[(2)]);
var inst_36172 = cljs.core.not_empty.call(null,inst_36155);
var state_36237__$1 = (function (){var statearr_36283 = state_36237;
(statearr_36283[(30)] = inst_36171);

return statearr_36283;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36284_36358 = state_36237__$1;
(statearr_36284_36358[(1)] = (26));

} else {
var statearr_36285_36359 = state_36237__$1;
(statearr_36285_36359[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (34))){
var inst_36206 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36206)){
var statearr_36286_36360 = state_36237__$1;
(statearr_36286_36360[(1)] = (38));

} else {
var statearr_36287_36361 = state_36237__$1;
(statearr_36287_36361[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (17))){
var state_36237__$1 = state_36237;
var statearr_36288_36362 = state_36237__$1;
(statearr_36288_36362[(2)] = recompile_dependents);

(statearr_36288_36362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (3))){
var state_36237__$1 = state_36237;
var statearr_36289_36363 = state_36237__$1;
(statearr_36289_36363[(2)] = null);

(statearr_36289_36363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (12))){
var inst_36128 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36290_36364 = state_36237__$1;
(statearr_36290_36364[(2)] = inst_36128);

(statearr_36290_36364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (2))){
var inst_36090 = (state_36237[(13)]);
var inst_36097 = cljs.core.seq.call(null,inst_36090);
var inst_36098 = inst_36097;
var inst_36099 = null;
var inst_36100 = (0);
var inst_36101 = (0);
var state_36237__$1 = (function (){var statearr_36291 = state_36237;
(statearr_36291[(7)] = inst_36101);

(statearr_36291[(8)] = inst_36099);

(statearr_36291[(9)] = inst_36100);

(statearr_36291[(10)] = inst_36098);

return statearr_36291;
})();
var statearr_36292_36365 = state_36237__$1;
(statearr_36292_36365[(2)] = null);

(statearr_36292_36365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (23))){
var inst_36155 = (state_36237[(23)]);
var inst_36159 = (state_36237[(24)]);
var inst_36151 = (state_36237[(19)]);
var inst_36157 = (state_36237[(26)]);
var inst_36154 = (state_36237[(25)]);
var inst_36162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36164 = (function (){var all_files = inst_36151;
var res_SINGLEQUOTE_ = inst_36154;
var res = inst_36155;
var files_not_loaded = inst_36157;
var dependencies_that_loaded = inst_36159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36159,inst_36151,inst_36157,inst_36154,inst_36162,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36163){
var map__36293 = p__36163;
var map__36293__$1 = ((((!((map__36293 == null)))?((((map__36293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36293):map__36293);
var request_url = cljs.core.get.call(null,map__36293__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36159,inst_36151,inst_36157,inst_36154,inst_36162,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36165 = cljs.core.reverse.call(null,inst_36159);
var inst_36166 = cljs.core.map.call(null,inst_36164,inst_36165);
var inst_36167 = cljs.core.pr_str.call(null,inst_36166);
var inst_36168 = figwheel.client.utils.log.call(null,inst_36167);
var state_36237__$1 = (function (){var statearr_36295 = state_36237;
(statearr_36295[(31)] = inst_36162);

return statearr_36295;
})();
var statearr_36296_36366 = state_36237__$1;
(statearr_36296_36366[(2)] = inst_36168);

(statearr_36296_36366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (35))){
var state_36237__$1 = state_36237;
var statearr_36297_36367 = state_36237__$1;
(statearr_36297_36367[(2)] = true);

(statearr_36297_36367[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (19))){
var inst_36141 = (state_36237[(12)]);
var inst_36147 = figwheel.client.file_reloading.expand_files.call(null,inst_36141);
var state_36237__$1 = state_36237;
var statearr_36298_36368 = state_36237__$1;
(statearr_36298_36368[(2)] = inst_36147);

(statearr_36298_36368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (11))){
var state_36237__$1 = state_36237;
var statearr_36299_36369 = state_36237__$1;
(statearr_36299_36369[(2)] = null);

(statearr_36299_36369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (9))){
var inst_36130 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36300_36370 = state_36237__$1;
(statearr_36300_36370[(2)] = inst_36130);

(statearr_36300_36370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (5))){
var inst_36101 = (state_36237[(7)]);
var inst_36100 = (state_36237[(9)]);
var inst_36103 = (inst_36101 < inst_36100);
var inst_36104 = inst_36103;
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36104)){
var statearr_36301_36371 = state_36237__$1;
(statearr_36301_36371[(1)] = (7));

} else {
var statearr_36302_36372 = state_36237__$1;
(statearr_36302_36372[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (14))){
var inst_36111 = (state_36237[(22)]);
var inst_36120 = cljs.core.first.call(null,inst_36111);
var inst_36121 = figwheel.client.file_reloading.eval_body.call(null,inst_36120,opts);
var inst_36122 = cljs.core.next.call(null,inst_36111);
var inst_36098 = inst_36122;
var inst_36099 = null;
var inst_36100 = (0);
var inst_36101 = (0);
var state_36237__$1 = (function (){var statearr_36303 = state_36237;
(statearr_36303[(7)] = inst_36101);

(statearr_36303[(8)] = inst_36099);

(statearr_36303[(9)] = inst_36100);

(statearr_36303[(10)] = inst_36098);

(statearr_36303[(32)] = inst_36121);

return statearr_36303;
})();
var statearr_36304_36373 = state_36237__$1;
(statearr_36304_36373[(2)] = null);

(statearr_36304_36373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (45))){
var state_36237__$1 = state_36237;
var statearr_36305_36374 = state_36237__$1;
(statearr_36305_36374[(2)] = null);

(statearr_36305_36374[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (26))){
var inst_36155 = (state_36237[(23)]);
var inst_36159 = (state_36237[(24)]);
var inst_36151 = (state_36237[(19)]);
var inst_36157 = (state_36237[(26)]);
var inst_36154 = (state_36237[(25)]);
var inst_36174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36176 = (function (){var all_files = inst_36151;
var res_SINGLEQUOTE_ = inst_36154;
var res = inst_36155;
var files_not_loaded = inst_36157;
var dependencies_that_loaded = inst_36159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36159,inst_36151,inst_36157,inst_36154,inst_36174,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36175){
var map__36306 = p__36175;
var map__36306__$1 = ((((!((map__36306 == null)))?((((map__36306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36306):map__36306);
var namespace = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36159,inst_36151,inst_36157,inst_36154,inst_36174,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36177 = cljs.core.map.call(null,inst_36176,inst_36155);
var inst_36178 = cljs.core.pr_str.call(null,inst_36177);
var inst_36179 = figwheel.client.utils.log.call(null,inst_36178);
var inst_36180 = (function (){var all_files = inst_36151;
var res_SINGLEQUOTE_ = inst_36154;
var res = inst_36155;
var files_not_loaded = inst_36157;
var dependencies_that_loaded = inst_36159;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36159,inst_36151,inst_36157,inst_36154,inst_36174,inst_36176,inst_36177,inst_36178,inst_36179,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36155,inst_36159,inst_36151,inst_36157,inst_36154,inst_36174,inst_36176,inst_36177,inst_36178,inst_36179,state_val_36238,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36181 = setTimeout(inst_36180,(10));
var state_36237__$1 = (function (){var statearr_36308 = state_36237;
(statearr_36308[(33)] = inst_36174);

(statearr_36308[(34)] = inst_36179);

return statearr_36308;
})();
var statearr_36309_36375 = state_36237__$1;
(statearr_36309_36375[(2)] = inst_36181);

(statearr_36309_36375[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (16))){
var state_36237__$1 = state_36237;
var statearr_36310_36376 = state_36237__$1;
(statearr_36310_36376[(2)] = reload_dependents);

(statearr_36310_36376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (38))){
var inst_36191 = (state_36237[(16)]);
var inst_36208 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36191);
var state_36237__$1 = state_36237;
var statearr_36311_36377 = state_36237__$1;
(statearr_36311_36377[(2)] = inst_36208);

(statearr_36311_36377[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (30))){
var state_36237__$1 = state_36237;
var statearr_36312_36378 = state_36237__$1;
(statearr_36312_36378[(2)] = null);

(statearr_36312_36378[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (10))){
var inst_36111 = (state_36237[(22)]);
var inst_36113 = cljs.core.chunked_seq_QMARK_.call(null,inst_36111);
var state_36237__$1 = state_36237;
if(inst_36113){
var statearr_36313_36379 = state_36237__$1;
(statearr_36313_36379[(1)] = (13));

} else {
var statearr_36314_36380 = state_36237__$1;
(statearr_36314_36380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (18))){
var inst_36145 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36145)){
var statearr_36315_36381 = state_36237__$1;
(statearr_36315_36381[(1)] = (19));

} else {
var statearr_36316_36382 = state_36237__$1;
(statearr_36316_36382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (42))){
var state_36237__$1 = state_36237;
var statearr_36317_36383 = state_36237__$1;
(statearr_36317_36383[(2)] = null);

(statearr_36317_36383[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (37))){
var inst_36203 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36318_36384 = state_36237__$1;
(statearr_36318_36384[(2)] = inst_36203);

(statearr_36318_36384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (8))){
var inst_36098 = (state_36237[(10)]);
var inst_36111 = (state_36237[(22)]);
var inst_36111__$1 = cljs.core.seq.call(null,inst_36098);
var state_36237__$1 = (function (){var statearr_36319 = state_36237;
(statearr_36319[(22)] = inst_36111__$1);

return statearr_36319;
})();
if(inst_36111__$1){
var statearr_36320_36385 = state_36237__$1;
(statearr_36320_36385[(1)] = (10));

} else {
var statearr_36321_36386 = state_36237__$1;
(statearr_36321_36386[(1)] = (11));

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
}
});})(c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32285__auto__,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto____0 = (function (){
var statearr_36325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36325[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto__);

(statearr_36325[(1)] = (1));

return statearr_36325;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto____1 = (function (state_36237){
while(true){
var ret_value__32287__auto__ = (function (){try{while(true){
var result__32288__auto__ = switch__32285__auto__.call(null,state_36237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32288__auto__;
}
break;
}
}catch (e36326){if((e36326 instanceof Object)){
var ex__32289__auto__ = e36326;
var statearr_36327_36387 = state_36237;
(statearr_36327_36387[(5)] = ex__32289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36388 = state_36237;
state_36237 = G__36388;
continue;
} else {
return ret_value__32287__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto__ = function(state_36237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto____1.call(this,state_36237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32286__auto__;
})()
;})(switch__32285__auto__,c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32399__auto__ = (function (){var statearr_36328 = f__32398__auto__.call(null);
(statearr_36328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32397__auto__);

return statearr_36328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32399__auto__);
});})(c__32397__auto__,map__36083,map__36083__$1,opts,before_jsload,on_jsload,reload_dependents,map__36084,map__36084__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32397__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36391,link){
var map__36394 = p__36391;
var map__36394__$1 = ((((!((map__36394 == null)))?((((map__36394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36394):map__36394);
var file = cljs.core.get.call(null,map__36394__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36394,map__36394__$1,file){
return (function (p1__36389_SHARP_,p2__36390_SHARP_){
if(cljs.core._EQ_.call(null,p1__36389_SHARP_,p2__36390_SHARP_)){
return p1__36389_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36394,map__36394__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36400){
var map__36401 = p__36400;
var map__36401__$1 = ((((!((map__36401 == null)))?((((map__36401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36401):map__36401);
var match_length = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36396_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36396_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36403_SHARP_,p2__36404_SHARP_){
return cljs.core.assoc.call(null,p1__36403_SHARP_,cljs.core.get.call(null,p2__36404_SHARP_,key),p2__36404_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36405 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36405);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36405);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36406,p__36407){
var map__36412 = p__36406;
var map__36412__$1 = ((((!((map__36412 == null)))?((((map__36412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36412):map__36412);
var on_cssload = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36413 = p__36407;
var map__36413__$1 = ((((!((map__36413 == null)))?((((map__36413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36413):map__36413);
var files_msg = map__36413__$1;
var files = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1492365310786