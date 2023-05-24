/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function(tweets) {
  for (const tweetobj of tweets) {
    const tweet = createTweetElement(tweetobj);
    $('.posted-tweets').append(tweet);
  }
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
                    <p class="posted-tweet-text"><strong>${tweetData.content.text}</strong> </p>
                    <footer class="tweet-article-footers">
                      <span class="tweet-article-footer-left">${tweetData.created_at}</span>
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
  renderTweets(data);

  $("#submit-tweet-form").on("submit", function(event) {
    event.preventDefault();

    const formValues = $(this).serialize();
    const actionUrl = $(this).attr("action");
    const formMethod = $(this).attr("method");

    $.ajax({type: formMethod, url: actionUrl, data: formValues,}).then(function(response) {
      console.log("response: ", response);
    });
  });

});


