
$(document).ready(function () {
  $(".clickable1").click(function() {
    $("#card1-showing").toggle();
    $("#card1-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#card2-showing").toggle();
    $("#card2-hidden").toggle();
  });
  $(".clickable3").click(function() {
    $("#card3-showing").toggle();
    $("#card3-hidden").toggle();
  });
  $(".clickable4").click(function() {
    $("#card4-showing").toggle();
    $("#card4-hidden").toggle();
  });
});
