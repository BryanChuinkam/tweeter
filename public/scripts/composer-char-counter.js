$(document).ready(function() {

  // $("#tweet-text").on('change', function() {
  //   console.log('in text box', this); //The this keyword is a reference to the button
  //   alert('Textarea is changed');
  // });
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


