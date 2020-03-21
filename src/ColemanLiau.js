function wordCount(text) {
  let spaces = 0;
  [...text].forEach(character => {
    if(character === " ") {
      spaces += 1;
    }
  })
  return spaces + 1;
}

function sentenceCount(text) {
  let sentences = 0;
  [...text].forEach(character => {
    if(
      character === "." ||
      character === "?" ||
      character === "!") {
      sentences += 1;
    }
  })
  return sentences;
}

function otherPunctuationCount(text) {
  let punct = 0;
  [...text].forEach(character => {
    if(
      character === "," ||
      character === "\"" ||
      character === "'" ||
      character === ";" ||
      character === "-" ||
      character === ":" ||
      character === " ") {
      punct += 1;
    }
  })
  return punct;
}

function avgWordLength(text) {
  return (text.length - otherPunctuationCount(text) - sentenceCount(text)) / wordCount(text);
}

function avgWordsPerSentence(text) {
  return wordCount(text) / sentenceCount(text);
}

export function colemanLiauIndex(text) {
  const index = 0.0588 * avgWordLength(text) * 100 - 0.296 * 100 / avgWordsPerSentence(text) - 15.8
  if (index >= 16) {
    return "Grade 16+";
  } else if (index < 1) {
    return "Before Grade 1";
  } else {
    return `Grade ${index.toFixed(0)}`;
  }
}