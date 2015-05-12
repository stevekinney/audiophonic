import context from './audio-context.js';
import Octavian from 'octavian';

const notes = {};

export default function findOrCreateOscillator(note) {
  const frequency = new Octavian.Note(note).frequency;
  notes[frequency] = notes[frequency] || createOscillator(frequency);
  return notes[frequency];
}

function createOscillator(frequency) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.frequency.value = frequency;
  gain.gain.value = 0;

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start();

  return { oscillator: oscillator, gain: gain };
}