function adjustFrequency(frequency, semitones) {
  return frequency * Math.pow(2, semitones / 12);
}

export default adjustFrequency;