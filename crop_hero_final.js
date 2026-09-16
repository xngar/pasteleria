const sharp = require('sharp');
const path = require('path');

async function cropHeroFood() {
  const dis = path.join(__dirname, 'public', 'dis.jpg');
  const pub = path.join(__dirname, 'public');

  // Exact crop ending at the bottom edge of the wooden platter
  await sharp(dis)
    .extract({ left: 310, top: 88, width: 426, height: 342 })
    .toFile(path.join(pub, 'hero_food_final.png'));

  console.log('Cropped hero_food_final.png to exact wooden board bottom');
}

cropHeroFood().catch(console.error);
