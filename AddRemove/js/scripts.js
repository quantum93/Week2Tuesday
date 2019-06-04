$(document).ready(function() {
  // This is for only background color
  $("button#green_back").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow_back").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red_back").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  // This is only for text color
  $("button#green_text").click(function() {
    $("body").removeClass();
    $("body").addClass("green-text");
  });
  $("button#yellow_text").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-text");
  });
  $("button#red_text").click(function() {
    $("body").removeClass();
    $("body").addClass("red-text");
  });
  //Here we make a combination of color like scheme
  $("button#scheme1").click(function() {
    $("body").removeClass();
    $("body").addClass("lightTxtDarkBack");
  });
  $("button#scheme2").click(function() {
    $("body").removeClass();
    $("body").addClass("darkTxtlightBack");
  });
  $("button#original").click(function() {
    $("body").removeClass();
  });
  // Function for hightlight and box
  $("body").click(function() {
    $("p").addClass("onClick");
  });
});
