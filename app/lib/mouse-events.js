import $ from 'jquery';
import synthesizer from './synthesizer';
import keys from './note-keys';

export function startNote() {
  const note = $(this).data('piano-key');
  const classAttr = $(this).attr('class');
  $(this).attr('class', `${classAttr} active`);
  if (note) { synthesizer(note).start(); }
}

export function stopNote() {
  const note = $(this).data('piano-key');
  const classAttr = $(this).attr('class');
  $(this).attr('class', classAttr.replace(/active/gi, ''));
  if (note) { synthesizer(note).stop(); }
}
