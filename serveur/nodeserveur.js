const sharp = require("sharp");
const apiUrl = "https://zenquotes.io/api/random";
const fetch = require("node-fetch");

// 1. fetch a random quote
// 2. turn text into lines
// 3. Create a line for the author.
// 4. Add a quote image
// 5. Turn all these elements --> svg
// 6. SVG -> image as png (/base 64 in lambda)
// 7. Send the lines to the front end.

const getRandomQuote = async (apiUrl) => {
  const response = await fetch(apiUrl);
  const quoteData = await response.json();
  const quoteText = quoteData[0].q;
  const quoteAuthor = quoteData[0].a;
  console.log(`${quoteText} \n${quoteAuthor}`);
  const words = quoteText.split(" ");
  const width = 750;
  const height = 483;
  let newText = "";
  let tspanElements = "";
  for (let i = 0; i < words.length; i++) {
    newText += words[i] + " ";
    if ((i + 1) % 4 === 0) {
      tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
      newText = "";
    }
  }
  if (newText !== "") {
    tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
  }
  console.log(tspanElements);
};

getRandomQuote(apiUrl);
