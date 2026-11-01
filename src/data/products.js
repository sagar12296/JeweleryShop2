// Accurate Today's Gold Rate for Ludhiana (LDH), Punjab
export const GOLD_RATE_22KT = 12480; // Accurate benchmark rate per gram for 22KT (916) in Ludhiana, Punjab
export const GOLD_RATE_24KT = 13615; // Accurate benchmark rate per gram for 24KT (999) in Ludhiana, Punjab
export const GOLD_RATE_18KT = 10210; // 18KT Hallmark rate
export const GOLD_RATE_LOCATION = 'Ludhiana, Punjab (LDH)';
export const GOLD_RATE_DATE = 'Today (Live Rate - Ludhiana Sarafa Association)';

// Direct Order Placement Contacts & Showroom Location
export const CONTACT_PRIMARY = '7986013912';
export const CONTACT_SECONDARY = '8054444423';
export const SHOWROOM_ADDRESS = 'Near Jutti Market, Gill Village, Ludhiana, Punjab 141116';
export const INSTAGRAM_ID = 'dhunna_jewellers__';
export const INSTAGRAM_URL = 'https://instagram.com/dhunna_jewellers__';

// Authentic Showroom Photographs (Gill Village, Ludhiana)
export const SHOWROOM_GALLERY = [
  {
    id: 'showroom-photo-2',
    title: 'Customer Showcase Counters & Holy Frame',
    caption: 'Air-conditioned main showroom counter with glass showcase display trays and Guru Nanak Dev Ji blessing portrait.',
    image: '/images/dhunna-showroom-interior-2.jpg',
    tag: 'Gill Village Showroom Main Counter'
  },
  {
    id: 'showroom-photo-1',
    title: 'Showroom Glass Entrance & Consultation Suite',
    caption: 'Front glass entrance and private customer viewing desks located near Jutti Market, Gill Village.',
    image: '/images/dhunna-showroom-interior-1.jpg',
    tag: 'Showroom Entrance & Consultation'
  }
];

export const getWhatsAppOrderLink = (number = CONTACT_PRIMARY, customText = '') => {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(customText);
  return `https://wa.me/91${cleanNumber}?text=${encodedText}`;
};

export const CATEGORIES = [
  { id: 'all', name: 'All Masterpieces' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'bridal-sets', name: 'Bridal Sets' },
  { id: 'bangles', name: 'Bangles & Kadas' },
  { id: 'earrings', name: 'Earrings & Jhumkas' },
  { id: 'rings', name: 'Rings' },
  { id: 'gold-chains', name: 'Gold Chains' },
  { id: 'pendants', name: 'Pendants' },
  { id: 'traditional', name: 'Traditional Punjabi Jewellery' },
  { id: 'new-arrivals', name: 'New Arrivals' },
];

export const PRODUCTS = [
  {
    id: 'dj-box-set-original',
    name: 'Dhunna Signature 4-Piece Solitaire Trousseau Suite (Original Box Set)',
    category: 'bridal-sets',
    subcategory: 'Bridal Sets',
    goldPurity: '22KT Gold with Solitaire Cluster Accents (916 Hallmarked)',
    grossWeight: 28.60,
    netWeight: 28.60,
    makingCharges: '12%',
    price: 409600, // 28.6g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'ORIGINAL SHOWROOM BOX SET (4-PIECE)',
    images: [
      '/images/dhunna-italian-bridal-set.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Authentic Showroom Photograph. Complete 4-piece 22KT gold trousseau set presented in original Dhunna Jewellers & Sons luxury velvet case: V-necklace, solitaire ring, earrings & bracelet.',
    description: 'Directly photographed in our showroom presentation case with the official Dhunna Jewellers & Sons emblem. This exquisite 4-piece trousseau suite is forged in 22KT gold with dual-tone diamond-cut white accents. Includes an articulating chevron V-necklace terminating in a sparkling teardrop cluster, matching teardrop cluster earrings, a comfort-band solitaire cluster ring, and a coordinating articulated link bracelet. Perfect for modern brides, receptions, and family heirlooms.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Total Set Weight': '28.60 grams (Verified on electronic scale)',
      'Set Includes': 'V-Necklace + Matching Ring + Pair of Earrings + Articulated Bracelet (4 Pieces)',
      'Presentation': 'Original Dhunna Jewellers & Sons Luxury Velvet Tray Case',
      'Market Rate Applied': '₹12,480/g (Ludhiana Bullion Rate Today)',
      'Certification': 'BIS Hallmark 916 with Laser HUID',
      'Showroom Availability': 'Ready in Gill Village Showroom, Ludhiana',
      'Craft Technique': 'Handmade Articulated Links with Diamond-Cut Cluster Facets'
    },
    culturalSignificance: 'A modern trousseau suite honoring timeless elegance with versatile styling for wedding receptions, parties, and family milestones.'
  },
  {
    id: 'dj-40g-original',
    name: 'Dhunna Original 22KT Royal Punjabi Chand Haar',
    category: 'necklaces',
    subcategory: 'Necklaces',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 40.00,
    netWeight: 40.00,
    makingCharges: '10%',
    price: 565600, // 40g @ 12,480/g + 10% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'ORIGINAL SHOWROOM PIECE (40g)',
    images: [
      '/images/dhunna-40g-necklace.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Exact 40.00g Original Showroom Piece. Handcrafted 3-strand 22KT gold bead mala crowned by a magnificent semicircular Chand medallion with multi-tier granulation beads.',
    description: 'This is the authentic 40g original masterpiece photographed directly in our Dhunna Jewellers showroom. Forged in solid 22KT hallmarked gold, this royal Punjabi Chand Haar features three synchronized rows of solid gold spherical beads connecting to embossed floral side clasps. The centerpiece is an opulent crescent medallion (Chand-Chakkar) embellished with hundreds of hand-set micro gold granulation beads and an auspicious chevron crest. A true heirloom carrying generational pride, ready in our Ludhiana showroom for instant purchase.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Exact Gross Weight': '40.00 grams (Verified on electronic scale)',
      'Net Gold Weight': '40.00 grams (100% Pure 22KT Gold)',
      'Market Rate Applied': '₹12,480/g (Ludhiana Bullion Rate Today)',
      'Length': '22 Inches with adjustable solid gold link / Dori',
      'Finish': 'Authentic 22KT Natural Warm Butter-Gold Polish',
      'Certification': 'BIS Hallmark 916 with HUID Laser Seal',
      'Showroom Availability': 'Ready in Gill Village Showroom, Ludhiana',
      'Craft Technique': 'Handmade 3-Strand Mala & Granulation Medallion'
    },
    culturalSignificance: 'The Chand Haar is the quintessential royal necklace of Punjabi aristocratic heritage, traditionally gifted at Anand Karaj and high celebrations.'
  },
  {
    id: 'dj-rani-haar',
    name: 'Imperial Amritsari 22KT Rani Haar Bridal Box Suite',
    category: 'bridal-sets',
    subcategory: 'Bridal Sets',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 65.50,
    netWeight: 65.50,
    makingCharges: '12%',
    price: 938500, // 65.5g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'LUXURY BRIDAL BOX SUITE',
    images: [
      '/images/dhunna-rani-haar-box.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'A grand multi-tier 22KT gold Punjabi Rani Haar with matching jhumkas presented inside our branded luxury red velvet trousseau box.',
    description: 'Forged in pure 22KT gold and arranged inside our deep red velvet bridal trousseau box with the official Dhunna Jewellers & Sons emblem. Features cascading gold bead garlands anchored by deeply carved royal medallions and tassel fringes, accompanied by matching handcrafted bridal jhumkas.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '65.50 grams',
      'Net Gold Weight': '65.50 grams',
      'Set Includes': 'Multi-Tier Rani Haar + Matching Jhumka Pair',
      'Presentation': 'Dhunna Jewellers & Sons Red Velvet Bridal Box',
      'Certification': 'BIS Hallmark 916 with HUID',
      'Showroom Availability': 'Ready in Gill Village Showroom, Ludhiana'
    },
    culturalSignificance: 'The supreme centerpiece of the traditional Punjabi Anand Karaj trousseau, symbolizing royal family heritage.'
  },
  {
    id: 'dj-choker-set',
    name: 'Shahi Gulbandh 22KT Gold Choker Suite',
    category: 'necklaces',
    subcategory: 'Necklaces',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 48.00,
    netWeight: 48.00,
    makingCharges: '12%',
    price: 687800, // 48g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'INSIDE VELVET CHOKER BOX',
    images: [
      '/images/dhunna-choker-box.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Sculpted articulating 22KT gold Gulbandh choker with delicate gold droplet fringe bells, nestled in our luxury velvet presentation box.',
    description: 'Presented inside our custom red velvet case with the Dhunna Jewellers & Sons insignia. Precision-hinged 22KT gold panels contour the collarbone gracefully, finished with a rhythmic fringe of gold ghungroo beads that chime softly with movement.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '48.00 grams',
      'Presentation': 'Dhunna Jewellers & Sons Velvet Neck-Piece Box',
      'Closure': 'Adjustable Gold Zari Thread Dori',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'Frames the bride’s face in pure gold radiance on her wedding day.'
  },
  {
    id: 'dj-kadas-shermukhi',
    name: 'Sher-Mukhi Punjabi Solid 22KT Gold Kada Pair',
    category: 'bangles',
    subcategory: 'Bangles & Kadas',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 45.00,
    netWeight: 45.00,
    makingCharges: '10%',
    price: 636300, // 45g @ 12,480/g + 10% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'SOLID 22KT KADA PAIR IN BOX',
    images: [
      '/images/dhunna-kadas-box.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Heavy solid 22KT gold Punjabi kadas featuring hand-carved Sher-Mukhi (lion-head) terminals and ruby eyes, displayed in our velvet kada box.',
    description: 'Photographed in our luxury red velvet box bearing the Dhunna Jewellers & Sons insignia. Crafted in solid 22KT gold bullion with deeply chiseled lion-head terminals, ruby gemstone accents, and floral jaali reliefs. Heavy, substantial, and equipped with handcrafted safety closures.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '45.00 grams (Pair)',
      'Size': '2.6 (Adjustable in Ludhiana showroom)',
      'Lock Type': 'Handcrafted Screw Clasp with Safety Hinge',
      'Presentation': 'Dhunna Jewellers & Sons Velvet Bangle Case',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'The kada embodies strength, integrity, and timeless lineage across Punjab.'
  },
  {
    id: 'dj-earrings-chandbali',
    name: 'Maharani 22KT Chandbali Filigree Jhumkas',
    category: 'earrings',
    subcategory: 'Earrings & Jhumkas',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 22.00,
    netWeight: 22.00,
    makingCharges: '13%',
    price: 320800, // 22g @ 12,480/g + 13% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'INSIDE VELVET EARRING BOX',
    images: [
      '/images/dhunna-earrings-box.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Handcrafted 22KT yellow gold Punjabi Chandbali-Jhumkas with wire filigree and dangling micro gold bells in our velvet earring box.',
    description: 'Seated in the cream silk slots of our luxury red velvet earring box with the official Dhunna Jewellers & Sons emblem. Features crescent moon filigree lace, floral ear-studs, and tiered dangling micro-ghungroos.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '22.00 grams (Pair)',
      'Dimensions': '6.8 cm length x 4.2 cm width',
      'Closure': 'South Indian / Bombay Screw Post',
      'Presentation': 'Dhunna Jewellers & Sons Velvet Box',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'The quintessential jewel of Punjabi celebrations and Anand Karaj grace.'
  },
  {
    id: 'dj-ring-lotus',
    name: 'Virasat Lotus 22KT Gold Cocktail Ring',
    category: 'rings',
    subcategory: 'Rings',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 9.50,
    netWeight: 9.50,
    makingCharges: '12%',
    price: 136100, // 9.5g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: false,
    isOriginalShowroomPiece: true,
    badgeText: 'INSIDE VELVET RING BOX',
    images: [
      '/images/dhunna-ring-box.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Substantial 22KT gold cocktail ring featuring an embossed multi-petal lotus medallion, resting in our luxury velvet ring box.',
    description: 'Photographed inside our red velvet presentation box with the Dhunna Jewellers & Sons diamond insignia. Sculpted entirely from pure 22KT gold without stones, ensuring 100% gold bullion retention with diamond-cut sparkle.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '9.50 grams',
      'Ring Size': 'Indian 14 (Comfort band adjustable in showroom)',
      'Presentation': 'Dhunna Jewellers & Sons Velvet Ring Case',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'The lotus symbolizes purity, prosperity, and spiritual blessings in Punjabi culture.'
  },
  {
    id: 'dj-chain-rope',
    name: 'Solid 22KT Hand-Twisted Gold Rope Chain',
    category: 'gold-chains',
    subcategory: 'Gold Chains',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 32.00,
    netWeight: 32.00,
    makingCharges: '9%',
    price: 448500, // 32g @ 12,480/g + 9% making + 3% GST
    isNew: false,
    isBestSeller: true,
    isBridal: false,
    isOriginalShowroomPiece: true,
    badgeText: 'IN VELVET CHAIN CASE',
    images: [
      '/images/dhunna-gold-chain-box.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Heavy solid 22KT yellow gold twisted rope chain laid out in our long slim velvet presentation case.',
    description: 'Presented in our long velvet chain box with the Dhunna Jewellers & Sons emblem. Features tight, heavy interlocking gold spirals that drape smoothly on the chest, finished with a heavy barrel lobster clasp for absolute security.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '32.00 grams',
      'Length': '24 Inches',
      'Width': '4.5 mm solid gauge',
      'Presentation': 'Dhunna Jewellers & Sons Long Velvet Case',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'Prestigious everyday asset and solid gold bullion investment.'
  },
  {
    id: 'dj-pendant-khanda',
    name: 'Sacred 22KT Khanda Sahib Medallion Pendant',
    category: 'pendants',
    subcategory: 'Pendants',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 16.50,
    netWeight: 16.50,
    makingCharges: '11%',
    price: 236200, // 16.5g @ 12,480/g + 11% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: false,
    isOriginalShowroomPiece: true,
    badgeText: 'IN VELVET PENDANT BOX',
    images: [
      '/images/dhunna-pendant-box.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Sacred 22KT gold Punjabi Khanda Sahib medallion pendant on heavy gold chain, resting in our velvet gift box.',
    description: 'Photographed inside our red velvet box with the Dhunna Jewellers & Sons insignia. Sculpted with surgical crispness in 22KT solid gold, portraying the sacred Khanda, Chakkar circle, and twin Kirpans in high relief with a diamond-cut sunburst border.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '16.50 grams',
      'Bail Size': 'Heavy 6mm bail accommodating thick chains',
      'Presentation': 'Dhunna Jewellers & Sons Velvet Box',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'An emblem of divine truth, righteous valor, and Punjabi Sikh identity.'
  }
];

export const BRIDAL_HERO_ITEMS = [
  {
    title: 'Dhunna Original 4-Piece Box Set',
    category: 'Original Showroom Box Set',
    weight: '28.60g Complete Suite',
    image: '/images/dhunna-italian-bridal-set.jpg',
    tagline: 'Complete 4-piece 22KT set in original Dhunna Jewellers & Sons velvet box.'
  },
  {
    title: 'Dhunna Original Royal Chand Haar',
    category: 'Original Showroom Piece',
    weight: '40.00g Solid Gold',
    image: '/images/dhunna-40g-necklace.jpg',
    tagline: 'Authentic 40g 22KT Punjabi Chand Haar ready in Ludhiana showroom.'
  },
  {
    title: 'Imperial Amritsari Rani Haar',
    category: 'Bridal Box Suite',
    weight: '65.50g Pure Gold',
    image: '/images/dhunna-rani-haar-box.jpg',
    tagline: 'Cascading royal Punjabi Rani Haar with matching jhumkas in velvet box.'
  },
  {
    title: 'Shahi Gulbandh Choker Suite',
    category: 'Bridal Necklaces',
    weight: '48.00g Pure Gold',
    image: '/images/dhunna-choker-box.jpg',
    tagline: 'Contoured 22KT choker with dangling ghungroo bells in velvet case.'
  },
  {
    title: 'Sher-Mukhi Punjabi Kada Pair',
    category: 'Chooda & Bangles',
    weight: '45.00g Solid Gold',
    image: '/images/dhunna-kadas-box.jpg',
    tagline: 'Solid 22KT gold lion-head kadas with ruby eyes in velvet box.'
  }
];
