import d3 from 'd3';
import Synthesizer from './synthesizer';
import keys from './note-keys';

export function startNote() {
  d3.select(this).classed('active', true);

  const note = this.attributes['data-piano-key'].value;
  if (note) { Synthesizer.oscillatorFor(note).start(); }
}

export function stopNote() {
  d3.select(this).classed('active', false);

  const note = this.attributes['data-piano-key'].value;
  if (note) { Synthesizer.oscillatorFor(note).stop(); }
}
