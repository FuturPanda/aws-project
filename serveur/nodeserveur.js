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

const makeTextSpan = (quoteText, linebreak, width) => {
  const words = quoteText.split(" ");
  let newText = "";
  let tspanElements = "";
  for (let i = 0; i < words.length; i++) {
    newText += words[i] + " ";
    if ((i + 1) % linebreak === 0) {
      tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
      newText = "";
    }
  }
  if (newText !== "") {
    tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
  }
  return tspanElements;
};

const getRandomBackground = (backgroundImages) => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

const makeSVG = async (
  height,
  width,
  backgroundImage,
  tspanElements,
  quoteAuthor
) => {
  const svgImage = `
          <svg width="${width}" height="${height}">
              <style>
                 .title { 
                   fill: #ffffff; 
                  font-size: 20px; 
                     font-weight: bold;
                }
               .quoteAuthorStyles {
                     font-size: 35px;
                    font-weight: bold;
                   padding: 50px;
              }
                .footerStyles {
                  font-size: 20px;
                     font-weight: bold;
                    fill: lightgrey;
                   text-anchor: middle;
                  font-family: Verdana;
              }
              </style>
              <g>
                  <rect x="0" y="0" width="${width}" height="auto"></rect>
                     <text id="lastLineOfQuote" x="375" y="80" font-family="Verdana" font-size="35" fill="white" text-anchor="middle">
                        ${tspanElements}
                    <tspan class="quoteAuthorStyles" x="375" dy="1.8em">- ${quoteAuthor}</tspan>
               </text>
                </g>
              <text x="${width / 2}" y="${
    height - 10
  }" class="footerStyles">Developed by @BrianHHough | Quotes from ZenQuotes.io</text>
          </svg>
        `;
  const timestamp = new Date().toLocaleString().replace(/[^\d]/g, "");
  const svgBuffer = Buffer.from(svgImage);

  const imagePath = `./finals/quote-card_${timestamp}.png`;
  const image = await sharp(backgroundImage)
    .composite([
      {
        input: svgBuffer,
        top: 0,
        left: 0,
      },
    ])
    .toFile(imagePath);
};

const getQuotesApi = async (apiUrl) => {
  const response = await fetch(apiUrl);
  const quoteData = await response.json();
  const quoteText = quoteData[0].q;
  const quoteAuthor = quoteData[0].a;
  return { quoteText, quoteAuthor };
};

const constructSVGFromQuote = async (apiUrl, width, height, linebreak) => {
  const { quoteText, quoteAuthor } = await getQuotesApi(apiUrl);
  const tspanElements = makeTextSpan(quoteText, linebreak, width);

  const backgroundImages = [
    "./backgrounds/Aubergine.png",
    "./backgrounds/Mantle.png",
    "./backgrounds/Midnight-City.png",
    "./backgrounds/Orangey.png",
  ];
  const backgroundImage = getRandomBackground(backgroundImages);

  const svgImage = makeSVG(
    height,
    width,
    backgroundImage,
    tspanElements,
    quoteAuthor
  );
};
constructSVGFromQuote(apiUrl, 750, 483, 4);
