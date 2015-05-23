require('./stylesheets/main');

import d3 from 'd3';
import { startNote, stopNote } from './lib/mouse-events';
import bindComputerKeyboardEvents from './lib/computer-keyboard.js';

const pianoKeys = d3.selectAll('.piano-key');

pianoKeys.on('mouseover', startNote);
pianoKeys.on('mouseout', stopNote);

bindComputerKeyboardEvents('.active-key');
