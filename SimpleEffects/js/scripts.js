
$(document).ready(function () {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#walrus2-fadeIn").fadeIn();
    //$("#walrus2-fadeOut").fadeOut();
  });
  $(".clickable3").click(function() {
  //  $("#walrus2-fadeIn").fadeIn();
    $("#walrus2-fadeOut").fadeOut();
  });
});
