/*$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.container').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});

// If you don't care about changing the height when the window resizes then you can use the following simplified version instead:
*/
$(document).ready(function() {
   windowHeight = $(window).innerHeight();
   logoHeight = $('#logo').innerHeight();
   contentHeight = $('.content-achat-billets').innerHeight();
   btnHeight = $('.btn-lg').innerHeight();
  $('#achat-billets').css('min-height', logoHeight);
  $('.btn-lg').css('margin-top', logoHeight - contentHeight - 3*btnHeight);
 });