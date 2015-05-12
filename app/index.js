require('./stylesheets/main');

import $ from 'jquery';
import synthesizer from './lib/synthesizer';
import keys from './lib/note-keys';

$(document).ready(function () {

  const $body = $('body');
  const $pianoKey = $('.piano-key');

  $body.on('keydown', respondToKeyPress.bind(null, 'enter'));
  $body.on('keyup', respondToKeyPress.bind(null, 'leave'));

  $pianoKey.on('mouseenter', startNote);
  $pianoKey.on('mouseleave', stopNote);
});

function startNote() {
  const note = $(this).data('piano-key');
  const classAttr = $(this).attr('class');
  $(this).attr('class', `${classAttr} active`);
  if (note) { synthesizer(note).start(); }
}

function stopNote() {
  const note = $(this).data('piano-key');
  const classAttr = $(this).attr('class');
  $(this).attr('class', classAttr.slice(0, -7));
  if (note) { synthesizer(note).stop(); }
}

function respondToKeyPress(action, event) {
  const note = keys[event.keyCode];
  console.log(event.keyCode);
  $(`#piano-key-${note}`).trigger(`mouse${action}`);
}