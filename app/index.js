require('./stylesheets/main');

import $ from 'jquery';
import context from './lib/audio-context';
import notes from './lib/note-index';

const $currentFrequency = $('.current-frequency');
const $currentVolume = $('.current-volume');
const $frequencySlider = $('.frequency-slider');
const $volumeSlider = $('.volume-slider');
const $startButton = $('.start');
const $stopButton = $('.stop');
const $notes = $('.notes');

let frequency = 220;

const gainNode = (function () {
  let gainNode = context.createGain();
  gainNode.connect(context.destination);
  gainNode.gain.value = 0;
  return gainNode;
}());

const oscillator = (function () {
  const oscillator = context.createOscillator();
  oscillator.connect(gainNode);
  oscillator.frequency.value = frequency;
  oscillator.start();
  return oscillator;
}());

const keyOfC = notes.filter(note => note.note.indexOf('/') === -1 ).slice(2, notes.length);

keyOfC.forEach(note => {
  $(`<button></button>`)
    .addClass('note')
    .data('frequency', note.frequency)
    .text(note.note)
    .appendTo($notes);
});

function adjustFrequency() {
  oscillator.frequency.value = this.value;
  $frequencySlider.val(this.value);
  $currentFrequency.text(this.value);
}

function adjustVolume() {
  gainNode.gain.value = this.value;
  $volumeSlider.val(this.value);
  $currentVolume.text(this.value * 10);
}

$('.note').on('mouseover', function () {
  const frequency = parseInt($(this).data('frequency'), 10);
  adjustFrequency.call({ value: frequency });
});

$('.notes').hover(adjustVolume.bind({ value: 1 }),
                  adjustVolume.bind({ value: 0 }));

$frequencySlider.on('input', adjustFrequency);
$volumeSlider.on('input', adjustVolume);