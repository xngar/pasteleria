const sharp = require('sharp');
const path = require('path');

async function cropHeroFood() {
  const dis = path.join(__dirname, 'public', 'dis.jpg');
  const pub = path.join(__dirname, 'public');

  // Crop the food platter region with the happiness bubble and wood platter
  // dis.jpg is 736 x 1307
  await sharp(dis)
    .extract({ left: 265, top: 80, width: 471, height: 395 })
    .toFile(path.join(pub, 'hero_food_exact.png'));

  console.log('Cropped hero_food_exact.png');
}

cropHeroFood().catch(console.error);
