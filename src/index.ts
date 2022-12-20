import fs from 'fs'
import textToImage from 'text-to-image'

textToImage.generate('text here!', {
  maxWidth: 720,
  fontSize: 18,
  fontFamily: 'Arial',
  lineHeight: 30,
  margin: 5,
  bgColor: "white",
  textColor: "black"
}).then(function (dataUri) {
  
})