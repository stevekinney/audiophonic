require('./stylesheets/main');

import $ from 'jquery';
import { startNote, stopNote, respondToKeyPress } from './lib/key-events';

$(document).ready(function () {
  const $body = $('body');
  const $pianoKey = $('.piano-key');

  $body.on('keydown', respondToKeyPress.bind(null, 'enter'));
  $body.on('keyup', respondToKeyPress.bind(null, 'leave'));

  $pianoKey.on('mouseenter', startNote);
  $pianoKey.on('mouseleave', stopNote);
});
