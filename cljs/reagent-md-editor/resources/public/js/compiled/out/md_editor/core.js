// Compiled by ClojureScript 1.9.229 {}
goog.provide('md_editor.core');
goog.require('cljs.core');
goog.require('reagent.core');
md_editor.core.editor = (function md_editor$core$editor(content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rows","rows",850049680),(30),new cljs.core.Keyword(null,"cols","cols",-1914801295),(40),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,content),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27643_SHARP_){
return cljs.core.reset_BANG_.call(null,content,p1__27643_SHARP_.target.value);
})], null)], null)], null);
});
md_editor.core.renderer = (function md_editor$core$renderer(content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.preview","div.preview",-1882273840),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),md([cljs.core.str(content)].join(''))], null)], null)], null);
});
md_editor.core.preview = (function md_editor$core$preview(content){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,content)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [md_editor.core.renderer,cljs.core.deref.call(null,content)], null);
} else {
return null;
}
});
md_editor.core.ui = (function md_editor$core$ui(){
var content = reagent.core.atom.call(null,null);
return ((function (content){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [md_editor.core.editor,content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [md_editor.core.preview,content], null)], null);
});
;})(content))
});
md_editor.core.mount_root = (function md_editor$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [md_editor.core.ui], null),document.getElementById("app"));
});
md_editor.core.init = (function md_editor$core$init(){
return md_editor.core.mount_root.call(null);
});
goog.exportSymbol('md_editor.core.init', md_editor.core.init);

//# sourceMappingURL=core.js.map?rel=1492365983615