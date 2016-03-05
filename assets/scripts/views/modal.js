import $ from 'jquery';

const $body = $('body');
const $button = $('.play-button');

function open() {
  let modal = templates.modal();
  $body.append(modal);
}

function close() {
  $body.find('.modal').remove();
}

export default function() {
  $button.on('click', open);
  $(document).on('click', '.close-modal', close);
}
