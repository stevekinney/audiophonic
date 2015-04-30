require('./stylesheets/main.scss');

import AudioContext from './lib/audio-context.js';
import adjustFrequency from './lib/adjust-frequency.js';

const context = new AudioContext();
const oscillator = context.createOscillator();

const startingFrequency = 220;

oscillator.connect(context.destination);
oscillator.frequency.value = startingFrequency;

oscillator.start();

const majorScale = [0, 2, 4, 5, 7, 9, 11, 12];
majorScale.forEach((step, index) => {
  setTimeout(() => {
    oscillator.frequency.value = adjustFrequency(startingFrequency, step);
  }, index * 1000);
});

setTimeout(params => {
  oscillator.stop();
}, majorScale.length * 1000);