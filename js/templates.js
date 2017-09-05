var templates = {
"modal": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"modal\"><div class=\"modal-overlay\"></div><div class=\"video-container\"><button class=\"close-modal\">X Close</button><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/e27-x-wezQU?autoplay=1\" frameborder=\"0\" allowfullscreen=\"\"></iframe></div></div>");;return buf.join("");
},
"tweet": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (media_url, url) {
buf.push("<a" + (jade.attr("style", "background-image: url('" + media_url + "')", true, false)) + (jade.attr("href", "" + (url) + "", true, false)) + " target=\"_blank\" class=\"grid-1-4 tweet\"><div class=\"tweet-wrap\"><div class=\"social-handle icon twitter\">@rrrhody</div></div></a>");}.call(this,"media_url" in locals_for_with?locals_for_with.media_url:typeof media_url!=="undefined"?media_url:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));;return buf.join("");
},
}