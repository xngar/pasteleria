const sharp = require('sharp');
const path = require('path');

async function extract() {
  const dis = path.join(__dirname, 'public', 'dis.jpg');
  const pub = path.join(__dirname, 'public');

  const crops = [
    // Combos (clean cards)
    { name: 'combo_1_real.jpg', left: 42, top: 518, width: 156, height: 185 },
    { name: 'combo_2_real.jpg', left: 210, top: 518, width: 156, height: 185 },
    { name: 'combo_3_real.jpg', left: 378, top: 518, width: 156, height: 185 },
    { name: 'combo_4_real.jpg', left: 540, top: 518, width: 156, height: 185 },

    // Limited Treats (the 3 white capsules with labels)
    { name: 'treat_capsule_1.png', left: 295, top: 670, width: 130, height: 140 }, // wait, check y
    { name: 'treat_capsule_2.png', left: 428, top: 660, width: 125, height: 150 },
    { name: 'treat_capsule_3.png', left: 545, top: 670, width: 130, height: 140 },

    // Correct coords from 736x1307:
    // Limited treats y is around 855-1000
    { name: 'treat_1.png', left: 295, top: 855, width: 130, height: 145 },
    { name: 'treat_2.png', left: 428, top: 855, width: 125, height: 145 },
    { name: 'treat_3.png', left: 545, top: 855, width: 130, height: 145 },

    // Loyalty 3D chest box
    { name: 'loyalty_chest.png', left: 200, top: 1000, width: 125, height: 115 },

    // Customer polaroids
    { name: 'customer_polaroid_1.png', left: 330, top: 1040, width: 92, height: 102 },
    { name: 'customer_polaroid_2.png', left: 425, top: 1040, width: 92, height: 102 },
    { name: 'customer_polaroid_3.png', left: 520, top: 1040, width: 92, height: 102 },
    { name: 'customer_polaroid_4.png', left: 615, top: 1040, width: 92, height: 102 },
  ];

  for (const c of crops) {
    try {
      await sharp(dis)
        .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
        .toFile(path.join(pub, c.name));
    } catch (err) {
      console.error('Error on', c.name, err);
    }
  }
  console.log('All crops finished successfully');
}

extract().catch(console.error);
