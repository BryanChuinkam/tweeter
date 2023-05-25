/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  for (const tweetobj of tweets) {
    const tweet = createTweetElement(tweetobj);
    $('.posted-tweets').prepend(tweet);
  }
};

const escape = function (Tweetstr) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(Tweetstr));
  return div.innerHTML;
};

const createTweetElement = function(tweetData) {
  const $tweet = ` <article>
                    <header class="tweet-article-headers">
                      <div class="tweet-article-headers-left">
                        <img src="${tweetData.user.avatars}">
                        <span>${tweetData.user.name}</span>
                      </div>
                      <div class="tweet-article-headers-right">
                        <p>${tweetData.user.handle}</p>
                      </div>
                    </header>
                    <p class="posted-tweet-text"><strong>${escape(tweetData.content.text)}</strong> </p>
                    <footer class="tweet-article-footers">
                      <span class="tweet-article-footer-left">${timeago.format(tweetData.created_at)}</span>
                      <div class="tweet-article-footer-right">
                        <i class="fa-solid fa-flag"></i>
                        <i class="fa-solid fa-retweet"></i>
                        <i class="fa-solid fa-heart"></i>
                      </div>
                    </footer>
                  </article>`;
  return $tweet;
};


$(document).ready(function() {

  const loadTweets = function() {
    $.ajax({ type: "GET", url: "/tweets", dataType: 'JSON' })
      .then(function(response) {
        renderTweets(response);
      });
  };
  loadTweets();


  $("#submit-tweet-form").on("submit", function(event) {
    event.preventDefault();

    const tweetText = $("#tweet-text").val();
    const formValues = $("#tweet-text").text(tweetText).serialize();
    const actionUrl = $(this).attr("action");
    const formMethod = $(this).attr("method");
    console.log("formValues", formValues);



    if (!tweetText) {
      alert("Please enter some text! ");

    } else if (tweetText.length > 140) {
      alert("Tweet can't exceed 140 characters!");

    } else {
      $.ajax({ type: formMethod, url: actionUrl, data: formValues, })
        .then(function(response) {
          loadTweets();
        });
    }
  });
});


