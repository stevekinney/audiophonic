require('./stylesheets/main');

import $ from 'jquery';
import context from './lib/audio-context';
import Octavian from 'octavian';

const $currentFrequency = $('.current-frequency');
const $currentVolume = $('.current-volume');
const $frequencySlider = $('.frequency-slider');
const $volumeSlider = $('.volume-slider');
const $startButton = $('.start');
const $stopButton = $('.stop');
const $notes = $('.notes');