import context from './audio-context.js';
import Octavian from 'octavian';

export default class Synthesizer {
  constructor(frequency, destination = context.destination) {
    const oscillator = this.oscillator = context.createOscillator();
    const gain = context.createGain();
    const volume = this.volume = gain.gain;

    oscillator.frequency.value = frequency;
    volume.value = 0;

    oscillator.connect(gain);
    gain.connect(destination);

    oscillator.start(0);
  }

  static get notes() {
    this.oscillators = this.oscillators || {};
    return this.oscillators;
  }

  static oscillator(note, destination = context.destination) {
    const frequency = new Octavian.Note(note).frequency;
    if (!this.notes[frequency]) { this.notes[frequency] = new Synthesizer(frequency, destination); }
    return this.notes[frequency];
  }

  start() { this.volume.value = 1; }
  stop() { this.volume.value = 0; }
}
