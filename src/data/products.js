export const products = [
  {
    id: 'mango-masti',
    name: 'Mango Masti',
    slug: 'mango-masti',
    shortDescription: 'A sunny Alphonso-style mango pop with a bright, pulpy finish.',
    description:
      'Mango Masti is built for peak summer cravings with juicy mango notes, a smooth bite, and a cheerful golden color that looks great in every freezer.',
    flavor: 'Mango',
    pack: '10 pops x 45 ml',
    color: '#ffb000',
    gradient: 'linear-gradient(145deg, #ffcc33 0%, #ff8a3d 100%)',
    ingredients: ['Mango pulp', 'Filtered water', 'Cane sugar', 'Natural stabilizer'],
    highlights: ['Real fruit feel', 'Kid-loved classic', 'Retail ready pack'],
  },
  {
    id: 'berry-blush',
    name: 'Berry Blush',
    slug: 'berry-blush',
    shortDescription: 'Strawberry and raspberry notes with a creamy pink finish.',
    description:
      'Berry Blush brings a premium berry profile to everyday snacking, balancing tart fruit notes with a smooth sweetness that feels playful and polished.',
    flavor: 'Mixed Berry',
    pack: '10 pops x 45 ml',
    color: '#e72977',
    gradient: 'linear-gradient(145deg, #ff7dae 0%, #d91c6a 100%)',
    ingredients: ['Berry blend', 'Filtered water', 'Cane sugar', 'Citric acid'],
    highlights: ['Vibrant color', 'Tangy sweet profile', 'Great for parties'],
  },
  {
    id: 'minty-lemon',
    name: 'Minty Lemon',
    slug: 'minty-lemon',
    shortDescription: 'Lemon ice with a cool mint snap for refreshment on demand.',
    description:
      'Minty Lemon is a crisp, clean freezer staple designed for hot afternoons, school breaks, and quick refreshment after a spicy meal.',
    flavor: 'Lemon Mint',
    pack: '10 pops x 45 ml',
    color: '#55d6be',
    gradient: 'linear-gradient(145deg, #a9f7cf 0%, #2ec7c9 100%)',
    ingredients: ['Lemon juice', 'Mint extract', 'Filtered water', 'Cane sugar'],
    highlights: ['Cooling finish', 'Light and zesty', 'Summer bestseller'],
  },
  {
    id: 'cola-chill',
    name: 'Cola Chill',
    slug: 'cola-chill',
    shortDescription: 'A nostalgic cola pop with a fizzy-style flavor lift.',
    description:
      'Cola Chill gives retailers a familiar high-rotation flavor in a frozen format, with deep cola notes and a smooth icy texture.',
    flavor: 'Cola',
    pack: '10 pops x 45 ml',
    color: '#5a2b83',
    gradient: 'linear-gradient(145deg, #6f3aa7 0%, #241133 100%)',
    ingredients: ['Cola flavor', 'Filtered water', 'Cane sugar', 'Caramel color'],
    highlights: ['Nostalgic profile', 'Bold freezer appeal', 'After-school favorite'],
  },
]

export const findProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)
