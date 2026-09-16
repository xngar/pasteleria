const sharp = require('sharp');
const path = require('path');

async function cropHeroFood() {
  const dis = path.join(__dirname, 'public', 'dis.jpg');
  const pub = path.join(__dirname, 'public');

  // Crop only the food items on the board, below the navbar logo
  await sharp(dis)
    .extract({ left: 310, top: 76, width: 426, height: 398 })
    .toFile(path.join(pub, 'hero_food_clean.png'));

  console.log('Cropped hero_food_clean.png precisely');
}

cropHeroFood().catch(console.error);
