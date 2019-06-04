
$(document).ready(function () {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".fadeIn").click(function() {
    $("#walrus2In").fadeIn();
    $("#walrus2Out").fadeOut();
  });
});
