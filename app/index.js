require('./stylesheets/main');

import $ from 'jquery';
import { startNote, stopNote } from './lib/mouse-events';
import bindComputerKeyboardEvents from './lib/computer-keyboard.js';

$(document).ready(function () {
  $('.piano-key').hover(startNote, stopNote);
  bindComputerKeyboardEvents('.active-key');
});
