const translations = {
  "english": {
    "malay": {
      "morning": "pagi"
    }
  },
};

function translate(inputLanguage, outputLanguage, inputText) {
  return translations[inputLanguage][outputLanguage][inputText];
}

export { translate }