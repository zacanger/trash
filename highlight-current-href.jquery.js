$(function(){ // grabs all 'a' elements and looks for
  $('a').each(function(){ // which matches current uri
    if($(this).attr('href') == window.location.pathname){
      $(this).addClass('active') // adds 'active' class
    } // just to that one.
  })
})

