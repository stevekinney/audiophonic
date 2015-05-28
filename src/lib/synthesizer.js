import context from './audio-context.js';
import Oscillator from './oscillator';
import Octavian from 'octavian';

const notes = {};

export default {
  oscillatorFor(note, destination = context.destination) {
    const frequency = new Octavian.Note(note).frequency;
    if (!notes[frequency]) {
      notes[frequency] = new Oscillator(frequency, destination);
    }
    return notes[frequency];
  }
};
