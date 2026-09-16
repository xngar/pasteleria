const sharp = require('sharp');
const path = require('path');

async function cropHero() {
  const dis = path.join(__dirname, 'public', 'dis.jpg');
  const pub = path.join(__dirname, 'public');

  await sharp(dis)
    .extract({ left: 0, top: 0, width: 736, height: 480 })
    .toFile(path.join(pub, 'hero_reference.jpg'));

  console.log('Cropped hero_reference.jpg');
}

cropHero().catch(console.error);
