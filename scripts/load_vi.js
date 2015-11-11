window.onload = function () {
  var vim = new VIM()

  /* log debug messages */
  // vim.on_log = function(m){ console.log('VIM: '+m) }
  //   vim.on_log = function (m) {
  //     var LENGTH = 10
  //     var p = $('<div></div>').text(m)
  //     $('#log').prepend(p)
  //     if ( $('#log').children().length > LENGTH) {
  //       $('#log').children(':last').remove()
  //     }
  //   }

  //   var target = document.getElementById('editor')
  var target = $('input[type=text, textarea')
  var target = $(':text')
  if (target !== null) {
    vim.attach_to(target)
    target.focus()
  }
}
