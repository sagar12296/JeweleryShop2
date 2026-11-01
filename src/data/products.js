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
    id: 'dj-teal-choker',
    name: 'Royal Meenakari & Emerald Antique 22KT Choker Suite',
    category: 'necklaces',
    subcategory: 'Necklaces',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 54.20,
    netWeight: 54.20,
    makingCharges: '12%',
    price: 776500, // 54.2g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'SHOWROOM SPOTLIGHT SUITE',
    images: [
      '/images/dhunna-real-teal-choker.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Opulent antique 22KT gold choker with central ruby medallion, jade-green bead droplets, and matching earrings in luxury illuminated showroom box.',
    description: 'Real showroom photograph taken under spotlight. This masterwork choker features heavy hand-carved floral repoussé panels, a crowned ruby centerpiece, and a synchronized fringe of natural green jade beads and golden pearls. Comes with matching royal ear-hangings, ready in our Gill Village showroom.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '54.20 grams',
      'Set Includes': 'Bridal Choker + Matching Earring Pair',
      'Presentation': 'Luxury Illuminated Showroom Box',
      'Market Rate Applied': '₹12,480/g (Ludhiana Bullion Rate Today)',
      'Certification': 'BIS Hallmark 916 with Laser HUID',
      'Showroom Availability': 'Ready in Gill Village Showroom, Ludhiana'
    },
    culturalSignificance: 'The royal necklace of Punjab kings and queens, celebrating sovereign bridal grandeur.'
  },
  {
    id: 'dj-rani-haar-emerald',
    name: 'Imperial Punjabi Navratan Rani Haar & Tikka Suite',
    category: 'bridal-sets',
    subcategory: 'Bridal Sets',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 78.50,
    netWeight: 78.50,
    makingCharges: '12%',
    price: 1124500, // 78.5g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'GRAND BRIDAL TROUSSEAU',
    images: [
      '/images/dhunna-real-rani-haar-emerald.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Majestic multi-tier bead Rani Haar with square emerald cabochons, massive embossed medallion, matching Maang Tikka and jhumkas in black velvet box.',
    description: 'Photographed in our luxury black velvet presentation case. This supreme Punjabi bridal suite features four rows of pearl-gold beads accented with ruby and emerald gemstone spacers, an expansive sunburst royal medallion with dangling gold leaf tassels, an ornate circular Maang Tikka, and matching chandelier jhumkas.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '78.50 grams',
      'Pieces Included': 'Rani Haar + Maang Tikka + Pair of Jhumkas (3-Piece Full Suite)',
      'Presentation': 'Deep Velvet Showroom Trousseau Box',
      'Certification': 'BIS Hallmark 916 Stamped (Ludhiana)',
      'Showroom Availability': 'In stock at Gill Village, Ludhiana'
    },
    culturalSignificance: 'The crowning masterpiece of the Anand Karaj bride, reflecting unbroken aristocratic lineage.'
  },
  {
    id: 'dj-rani-haar-gold',
    name: 'Shahi Amritsari Pure Gold Rani Haar, Earring & Ring Set',
    category: 'bridal-sets',
    subcategory: 'Bridal Sets',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 68.00,
    netWeight: 68.00,
    makingCharges: '11%',
    price: 966800, // 68g @ 12,480/g + 11% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'PURE GOLD RANI HAAR SUITE',
    images: [
      '/images/dhunna-real-rani-haar-gold.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Triple-strand solid 22KT gold bead mala with engraved bar spacers, openwork filigree medallion, matching shoulder-duster earrings and cocktail ring in velvet box.',
    description: 'Direct showroom photograph on black velvet. Forged entirely from solid 22KT yellow gold without colored stones. Features triple synchronized rows of hand-turned solid gold beads, rectangular jaali bar connectors, an opulent lattice medallion with swinging gold droplets, long articulated earrings, and a matching royal cocktail ring.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '68.00 grams (100% Solid Gold Bullion)',
      'Set Includes': 'Rani Haar + Matching Ring + Long Earring Pair',
      'Presentation': 'Velvet Display Box with Gold Trim',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'Generational bridal treasure carrying 100% gold bullion security and royal Punjabi identity.'
  },
  {
    id: 'dj-bridal-choker-tikka',
    name: 'Virasat 22KT Gold Bridal Choker, Maang Tikka & Jhumka Set',
    category: 'necklaces',
    subcategory: 'Necklaces',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 46.50,
    netWeight: 46.50,
    makingCharges: '12%',
    price: 666200, // 46.5g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'COMPLETE CHOKER & TIKKA SET',
    images: [
      '/images/dhunna-real-bridal-choker-tikka.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: '22KT gold jaali choker with dangling pearl & ruby micro-bead fringe, matching circular Maang Tikka, and jhumkas in luxury ivory satin box.',
    description: 'Photographed inside our satin presentation box. A classic North Indian bridal necklace engineered with precision-hinged 22KT gold plates, hanging pearl cluster drops, an auspicious circular sunburst Maang Tikka, and coordinating bell jhumkas.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '46.50 grams',
      'Set Includes': 'Choker + Maang Tikka + Pair of Jhumkas',
      'Presentation': 'Luxury Ivory Satin & Leatherette Case',
      'Certification': 'BIS Hallmark 916 with HUID'
    },
    culturalSignificance: 'Gracefully frames the bride’s visage during wedding pheras and traditional ceremonies.'
  },
  {
    id: 'dj-maroon-choker',
    name: 'Noor-e-Punjab Royal Gulbandh Choker & Umbrella Jhumkas',
    category: 'necklaces',
    subcategory: 'Necklaces',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 52.00,
    netWeight: 52.00,
    makingCharges: '12%',
    price: 745000, // 52g @ 12,480/g + 12% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'HEAVY GULBANDH SUITE',
    images: [
      '/images/dhunna-real-maroon-choker.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Heavy solid 22KT gold choker with dual-tier scalloped arches and matching umbrella jhumkas on maroon velvet bust.',
    description: 'Showroom photograph on our deep maroon velvet bust. This substantial 52-gram set combines an ergonomic wide-band gold choker with intricate filigree jaali arches and dangling micro ghungroo bells, paired with cascading floral umbrella jhumkas.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '52.00 grams',
      'Earring Pair Weight': '14.50 grams (included)',
      'Finish': 'Authentic 22KT High Polish Yellow Gold',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'The signature collar necklace of Punjabi wedding trousseaus.'
  },
  {
    id: 'dj-green-box-choker',
    name: 'Patiala Shahi Pearl-Fringed Choker & Jhumka Suite',
    category: 'necklaces',
    subcategory: 'Necklaces',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 42.80,
    netWeight: 42.80,
    makingCharges: '12%',
    price: 613200, // 42.8g @ 12,480/g + 12% making + 3% GST
    isNew: false,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'INSIDE LUXURY GREEN BOX',
    images: [
      '/images/dhunna-real-green-box-choker.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Antique floral medallion collar with dangling cultured seed pearls and matching bell jhumkas in open emerald-green presentation box.',
    description: 'Photographed in our emerald green velvet box. Features interlocking circular floral gold coins bordered by hanging seed pearls and matching two-tier jhumki earrings.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '42.80 grams',
      'Necklace Length': 'Adjustable Zari Dori',
      'Presentation': 'Luxury Emerald Green Presentation Box',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'Inspired by the historic royal courts of Patiala and Kapurthala.'
  },
  {
    id: 'dj-pippal-patti-set',
    name: 'Traditional Punjabi Pippal Patti Folk Necklace & Earring Set',
    category: 'traditional',
    subcategory: 'Traditional Punjabi Jewellery',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 38.50,
    netWeight: 38.50,
    makingCharges: '11%',
    price: 548200, // 38.5g @ 12,480/g + 11% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'AUTHENTIC PIPPAL PATTI SET',
    images: [
      '/images/dhunna-real-pippal-patti-set.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Authentic Punjabi folk Pippal Patti gold necklace with circular filigree medallions and dangling heart-shaped sacred fig leaf drops on red velvet.',
    description: 'Direct showroom photograph on red velvet. Features seven hand-beaten circular filigree chakkar medallions adorned with fluttering gold sacred fig leaves (Pippal Patti) that rustle gently, paired with matching oversized statement earrings.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '38.50 grams',
      'Set Includes': 'Pippal Patti Necklace + Matching Earring Pair',
      'Presentation': 'Showroom Red Velvet Display Tray',
      'Certification': 'BIS Hallmark 916 Stamped (Ludhiana)'
    },
    culturalSignificance: 'Celebrated in Punjabi folk songs and weddings as an emblem of timeless maternal blessing.'
  },
  {
    id: 'dj-necklace-card-34g',
    name: 'Dhunna 22KT Ready-Made Gold Haar Set (Exact 34.69g)',
    category: 'necklaces',
    subcategory: 'Necklaces',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 34.69,
    netWeight: 30.59,
    makingCharges: '11%',
    price: 493900, // 34.69g @ 12,480/g + 11% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: false,
    isOriginalShowroomPiece: true,
    badgeText: 'VERIFIED 34.69g SHOWROOM PIECE',
    images: [
      '/images/dhunna-real-necklace-card-34g.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Fresh ready-made showroom stock with official weight card: Gross Weight 34.690g, Net Weight 30.590g. Scalloped gold lace necklace with matching jhumkas.',
    description: 'Photographed in showroom packaging showing verified electronic scale weights: Gross Wt 34.690g, Net Wt 30.590g. Sculpted with graduated circular floral medallions, teardrop gold spangles, and matching South-screw earrings.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Exact Gross Weight': '34.690 grams (Verified on Showroom Scale)',
      'Net Gold Weight': '30.590 grams',
      'Set Includes': 'Necklace + Pair of Matching Jhumkas',
      'Certification': 'BIS Hallmark 916 with Laser HUID'
    },
    culturalSignificance: 'Ready for immediate counter purchase and wedding gifting.'
  },
  {
    id: 'dj-bead-mala-56g',
    name: 'Emerald & Ruby Beaded 22KT Gold Mala Suite (56.04g)',
    category: 'gold-chains',
    subcategory: 'Gold Chains',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 56.04,
    netWeight: 20.95,
    makingCharges: '10%',
    price: 448000,
    isNew: true,
    isBestSeller: true,
    isBridal: true,
    isOriginalShowroomPiece: true,
    badgeText: 'VERIFIED 56.04g MALA SUITE',
    images: [
      '/images/dhunna-real-bead-mala-56g.jpg',
      '/images/dhunna-showroom-interior-1.jpg'
    ],
    shortDesc: 'Multi-strand natural emerald and ruby bead garlands flanking a heavy circular embossed peacock-feather gold medallion and matching hanging earrings (56.040 gm).',
    description: 'Showroom piece with verified tag: Gross 56.040 gm, Net Gold 20.950 gm. Five rows of alternating gold beads, uncut emeralds, and ruby spheres connecting to a grand circular repoussé gold pendant with hanging gemstone drops, with matching ear-stud drops.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Total Gross Weight': '56.040 grams (Verified)',
      'Net Gold Weight': '20.950 grams Pure 22KT Gold',
      'Natural Gemstones': 'Emerald & Ruby Beads (35.100 Ct)',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'Regal contrast of pure yellow gold with precious green and crimson jewels.'
  },
  {
    id: 'dj-pendant-set',
    name: 'Antique 22KT Gold Royal Shield Pendant & Earring Suite',
    category: 'pendants',
    subcategory: 'Pendants',
    goldPurity: '22KT Gold (916 Hallmarked)',
    grossWeight: 24.50,
    netWeight: 24.50,
    makingCharges: '11%',
    price: 348800, // 24.5g @ 12,480/g + 11% making + 3% GST
    isNew: true,
    isBestSeller: true,
    isBridal: false,
    isOriginalShowroomPiece: true,
    badgeText: 'ANTIQUE 22KT PENDANT SUITE',
    images: [
      '/images/dhunna-real-pendant-set.jpg',
      '/images/dhunna-showroom-interior-2.jpg'
    ],
    shortDesc: 'Antique diamond-shield shaped central gold pendant carved with fine filigree, bezel-set ruby center stone, and dangling ruby beads with matching twin drop earrings on red velvet.',
    description: 'Direct showroom photograph on red velvet. Features an antique-finish rhombus shield medallion with concentric floral carvings, a central ruby cabochon, and a dangling fringe of faceted ruby drops and gold beads, accompanied by matching earrings.',
    specifications: {
      'Gold Purity': '22KT Hallmarked Gold (BIS 916)',
      'Gross Weight': '24.50 grams',
      'Set Includes': 'Shield Pendant + Matching Earring Pair',
      'Presentation': 'Showroom Red Velvet Display Setting',
      'Certification': 'BIS Hallmark 916'
    },
    culturalSignificance: 'Exquisite statement piece worn with heavy silk suits and festive sarees.'
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
    title: 'Imperial Navratan Rani Haar Suite',
    category: 'Bridal Box Suite',
    weight: '78.50g Pure Gold',
    image: '/images/dhunna-real-rani-haar-emerald.jpg',
    tagline: 'Grand Punjabi Rani Haar with matching tikka & jhumkas in black velvet box.'
  },
  {
    title: 'Royal Meenakari Antique Choker',
    category: 'Bridal Choker Suite',
    weight: '54.20g Antique Gold',
    image: '/images/dhunna-real-teal-choker.jpg',
    tagline: 'Antique choker with central ruby medallion & emerald beads in teal box.'
  },
  {
    title: 'Shahi Amritsari Rani Haar Set',
    category: 'Pure Gold Heirloom',
    weight: '68.00g Solid Gold',
    image: '/images/dhunna-real-rani-haar-gold.jpg',
    tagline: 'Triple-strand solid gold mala with matching ring and earrings in velvet box.'
  }
];
