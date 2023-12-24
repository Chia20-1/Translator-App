import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById("input-text").value;
  const inputLanguage = document.getElementById("input-language").value;
  const outputLanguage = document.getElementById("output-language").value;
  // const output = document.getElementById("output-text");
  const output = document.getElementById("output-text")
  const translated = translate(inputLanguage, outputLanguage, inputText);

  if (!translated || translated === "") {
    console.log("Code stuck at !translated")
    output.value = "Result not found!"
  } else {
    output.value = translated;
  }
}

window.translateText = translateText;

const btn = document.querySelector("#translateButton")

btn.addEventListener("click", () => {
  translateText()
})