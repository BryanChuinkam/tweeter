$(document).ready(function() {

  const NUM_CHAR_ALLOWED = 140;

  $("#tweet-text").on('input', function() {
    let numOfCharTyped = $(this).val().length;
    let numOfCharLeft = NUM_CHAR_ALLOWED - numOfCharTyped;
    let counterEle = $(this).siblings("div").children(".counter");

    if (numOfCharLeft < 0) {
      return counterEle.text(numOfCharLeft).css("color", "red");
    } else {
      counterEle.text(numOfCharLeft).css("color", "black");
    }

  });

});


