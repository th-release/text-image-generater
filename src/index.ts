import fs from 'fs';
import textToImage from 'text-to-image';

async function gen(text: string) {
  await textToImage.generate(text, {
    debug: true,
    maxWidth: 720,
    fontSize: 18,
    fontFamily: 'Arial',
    lineHeight: 30,
    margin: 5,
    bgColor: "white",
    textColor: "black"
  }).then(function (dataUri) {
    const buffer = Buffer.from(dataUri, "base64");
    fs.writeFileSync("image.jpg", buffer);
  })
}

gen("text here!")