require('./stylesheets/main.scss');

import AudioContext from './lib/audio-context.js';

let context = new AudioContext();
let oscillator = context.createOscillator();

oscillator.connect(context.destination);
oscillator.frequency.value = 220;
oscillator.start();

setTimeout(function () {
  oscillator.stop();
}, 1000);