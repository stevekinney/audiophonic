import $ from 'jquery';
import Synthesizer from './synthesizer';
import keys from './note-keys';

export function startNote() {
  const note = $(this).data('piano-key');
  const classAttr = $(this).attr('class');
  $(this).attr('class', `${classAttr} active`);
  if (note) { Synthesizer.oscillator(note).start(); }
}

export function stopNote() {
  const note = $(this).data('piano-key');
  const classAttr = $(this).attr('class');
  $(this).attr('class', classAttr.replace(/active/gi, ''));
  if (note) { Synthesizer.oscillator(note).stop(); }
}
