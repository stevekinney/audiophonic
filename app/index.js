require('./stylesheets/main');

import $ from 'jquery';
import synthesizer from './lib/synthesizer';

$(document).ready(function () {

  const $pianoKey = $('.piano-key');

  $pianoKey.on('mouseenter', function () {
    const note = $(this).data('piano-key');
    const noteSynthesizer = synthesizer(note);

    noteSynthesizer.start();
  });

  $pianoKey.on('mouseleave', function () {
    const note = $(this).data('piano-key');
    const noteSynthesizer = synthesizer(note);

    noteSynthesizer.stop();
  });

});