$(document).ready(function() {

  const NUM_CHAR_ALLOWED = 140;

  $("#tweet-text").on('input', function() {
    let numOfCharTyped = $(this).val().length;
    let numOfCharLeft = NUM_CHAR_ALLOWED - numOfCharTyped;
    let counterEle = $(".counter");


    if (numOfCharLeft < 0) {
      // setInterval(() => { // counter flashes red when limit exceeded 
      //   counterEle.fadeIn();
      //   counterEle.fadeOut();
      // }, 500);
      counterEle.text(numOfCharLeft).css("color", "red");
      
    } else {
      $(".error").slideUp("slow");
      counterEle.text(numOfCharLeft).css("color", "black");
    }

  });

});


