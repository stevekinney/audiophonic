import $ from 'jquery';
import notes from './note-keys';
import Synthesizer from './synthesizer';

const computerKeys = {};

export default function (selector) {
  $(selector).each(function (index, element) {
    const keyCode = $(element).data('key-code');
    if (!computerKeys[keyCode]) { computerKeys[keyCode] = []; }
    computerKeys[keyCode].push(element);
  });

  $(document).keydown(function (event) {
    const classAttr = $(computerKeys[event.keyCode]).attr('class');
    $(computerKeys[event.keyCode]).attr('class', `${classAttr} active`);

    const note = notes[event.keyCode];
    if (note) { Synthesizer.oscillator(note).start(); }
  });

  $(document).keyup(function (event) {
    const classAttr = $(computerKeys[event.keyCode]).attr('class');
    $(computerKeys[event.keyCode]).attr('class', classAttr.replace(/active/gi, ''));

    const note = notes[event.keyCode];
    if (note) { Synthesizer.oscillator(note).stop(); }
  });
}
