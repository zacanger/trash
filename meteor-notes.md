`{{#with foo}}` is a template tag that takes arg (foo). that is the _data context_ for the block in that tag. being a _tag_, it needs to be closed later (`{/with}`).

{{#each}} also takes an argument, usually a 'cursor' such as the result of `Collection.find()`.

Includes are like so: `{{> foo bar}}` which will bring in the bar from foo.

meteor's blaze will soon just be a thin templating layer over react.

iron router is meteor's primary routing package. its 'data' method helps with data contexts.

in meteor there are html _templates_ and js _template helpers_, in which data context is accessible via `this`. an example:
```html
<template name="profile">
<h3>profile</h3>
{{#with profile}}
<img src="{{avatarPath}}" />
{{#witih name}}
<p>{{fullName}}</p>
{{/with}}
{{/with}}
</template>
```
```javascript
Template.profile.helpers({
profile: function(){
return Users.findOne(Session.get('userId'))
},
avatarPath: function(){
return 'images/' + this.avatar
},
fullName: function(){
return this.first + ' ' +  this.last
}
})
```
a dedicated {{log}} helper can be more useful than console.log(this)
```javascript
Template.profile.helpers({
log: function(){
console.log(this)
}})
```
```html
<template name="profile">
{{#with profile}}
{{log}}
<!-- etc -->
{{/with}}
```

the `..` keyword in helpers is to access a parent. That's pretty fucking rad, actually. And the `../..` also works exactly as expected (eg `{{blah ..}}` and `{{blahblah ../..}}`).


