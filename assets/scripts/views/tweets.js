import $ from 'jquery';
const count = 8;

export default function(feed) {
  $.getJSON(`${process.env.APIurl}/api/v1/twitter-feed`).done((t) => {
    $(feed).html(t.slice(0, count).map(templates.tweet).join(''));
  });
}
