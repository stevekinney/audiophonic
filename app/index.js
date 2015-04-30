require('./stylesheets/main.scss');

import context from './lib/audio-context.js';
import playMajorScale from './lib/major-scale-player.js';

playMajorScale(context);