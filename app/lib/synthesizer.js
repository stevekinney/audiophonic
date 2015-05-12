import context from './audio-context.js';
import Octavian from 'octavian';

const notes = {};

export default function findOrCreateOscillator(note) {
  const frequency = new Octavian.Note(note).frequency;
  notes[frequency] = notes[frequency] || new Synthesizer(frequency);
  return notes[frequency];
}

class Synthesizer {
  constructor(frequency) {
    this.oscillator = context.createOscillator();
    this.gain = context.createGain();

    this.oscillator.frequency.value = frequency;
    this.gain.gain.value = 0;

    this.oscillator.connect(this.gain);
    this.gain.connect(context.destination);

    this.oscillator.start();
  }

  start() {
    this.gain.gain.value = 1;
  }

  stop() {
    this.gain.gain.value = 0;
  }
}