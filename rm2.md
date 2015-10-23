hide tweet button and character count initially (so, just not there)
on click, double textarea size, reveal character count and tweet button
ch count decrease realtime
at 10 chars, count turns red
if chars > 140, disable tweet button (and re-enable if =< 140)
new tweet pushed to column immediately, w/ prof image in top left, full username and name

tweet actions on :hover over individual tweets only
rt/timestamp/reply area hidden by default; expand on click
ugh jq animations for all the reveals

timestamps with timeago (or, i think, livestamp actually)
icons for favs/rts in upper right of tweet card
Bootstrap tooltips on :hover over avatar
localstorage (or howabout localForage?)
or baas, but lol that's okay, really.


Window Ready Event

* `$(function () {});`s
  * also `$(document).ready(function(){});`

Selectors

* `$(".some-class") // select by classname`
* `$(this) // the element which created the event`
* `$('.some-class').find('.some-child-class');`
* `$('.some-class').closest('.some-parent-class');`
* See also <http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048>

Events

* `$('body').on('someEvent', '.some-class', function() {});`
  * <http://api.jquery.com/category/events/>
  * <https://en.wikipedia.org/wiki/DOM_events#Common.2FW3C_events>
  * click
  * keyup
  * change
  * load
  * error

Create Element

* Be cautious <https://www.box.com/blog/securing-jquery-against-unintended-xss/>
* `var $myNewElement = $('<span>Tyler McGinnis</span>')`
* `$('.some-class').html('<span>Tyler McGinnis</span>')`

Manipulate Elements

* `$('.some-class').text("my <script>-safe text");`
* `$('.some-class').val(); //input, textarea, select`
* `$('.some-class').prop('checked'); // checkbox`
* `$('.some-class').show();`
* `$('.some-class').hide();`
* `$('.some-class').prepend($myNewElement);`
* `$('.some-class').append($myNewElement);`
  * also `$myNewElement.appendTo($('.some-class'));`
* `$('.some-class').remove();`;
* `$(this).addClass('.style-class');`
* `$(this).removeClass('.style-class');`
* `$(this).toggleClass('.style-class');`
* `$('.some-class').css({}); // misnomer, actually changes 'style' attribute`
