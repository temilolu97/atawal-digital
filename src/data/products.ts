export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  // Women's Fashion
  {
    id: '1',
    name: 'Luxury Beaded Ankara Gown',
    price: 185000,
    category: "Women's Fashion",
    description: 'Handcrafted luxury Ankara gown with intricate beadwork and traditional African patterns.',
    image: 'https://d17a17kld06uk8.cloudfront.net/products/6D775UP/BQ9XX67H-original.jpg'
  },
  {
    id: '2',
    name: 'Structured Silk Corset Dress',
    price: 125000,
    category: "Women's Fashion",
    description: 'Elegant silk corset dress with a modern silhouette and structured bodice.',
    image: 'https://i.pinimg.com/1200x/7a/27/bd/7a27bd8a892fe2401819c83392a24070.jpg'
  },
  {
    id: '3',
    name: '2-Piece Kaftan Set with Embroidery',
    price: 90000,
    category: "Women's Fashion",
    description: 'Stylish kaftan set with detailed embroidery and comfortable fit.',
    image: 'https://i.pinimg.com/1200x/47/5a/71/475a71785d547cbb7e730af224ac6e24.jpg'
  },
  {
    id: '4',
    name: 'Premium Ankara Kimono with Belt',
    price: 65000,
    category: "Women's Fashion",
    description: 'Premium Adire kimono with matching belt and traditional Nigerian design.',
    image: 'https://i.pinimg.com/1200x/44/f7/e8/44f7e82630a280a7141a9e36630922f6.jpg'
  },
  {
    id: '5',
    name: 'Luxe Pleated Maxi Dress',
    price: 110000,
    category: "Women's Fashion",
    description: 'Flowy pleated maxi dress perfect for all occasions with elegant drape.',
    image: 'https://i.pinimg.com/1200x/64/8b/c1/648bc1997396e3f9b419baf59979cd30.jpg'
  },
  
  // Men's Fashion
  {
    id: '6',
    name: 'Custom Senator Set (Premium Fabric)',
    price: 95000,
    category: "Men's Fashion",
    description: 'Custom tailored senator set in premium fabric with traditional Nigerian styling.',
    image: 'https://i.pinimg.com/736x/d9/23/09/d92309c67b11c83746ec4e7a0100c5ad.jpg'
  },
  {
    id: '7',
    name: 'Agbada Set with Inner Wear',
    price: 180000,
    category: "Men's Fashion",
    description: 'Classic agbada set with inner wear, perfect for traditional ceremonies.',
    image: 'https://i.pinimg.com/736x/48/ee/28/48ee28ff1f7cd8aa748043cd3ea40ebf.jpg'
  },
  {
    id: '8',
    name: 'Premium Tuxedo (3-Piece Suit)',
    price: 250000,
    category: "Men's Fashion",
    description: 'Premium 3-piece tuxedo suit for special occasions and formal events.',
    image: 'https://i.pinimg.com/736x/61/4f/ca/614fcaafa47239da2eac56408f79b713.jpg'
  },
  {
    id: '9',
    name: 'Tailored Smart-Casual Two-Piece',
    price: 78000,
    category: "Men's Fashion",
    description: 'Smart-casual two-piece set with tailored fit for modern professionals.',
    image: 'https://i.pinimg.com/736x/02/fa/35/02fa353659a16ca4ae04ac24d7c312d9.jpg'
  },
  {
    id: '10',
    name: 'Ankara Casual Jacket',
    price: 60000,
    category: "Men's Fashion",
    description: 'Trendy Ankara casual jacket with contemporary African patterns.',
    image: 'https://i.pinimg.com/736x/50/8e/34/508e3411ca0f53630e80a8efc5a6219c.jpg'
  },
  
  // Footwear
  {
    id: '11',
    name: 'Handmade Leather Loafers',
    price: 85000,
    category: 'Footwear',
    description: 'Handmade leather loafers for all-day comfort and classic style.',
    image: 'https://i.pinimg.com/736x/5d/75/2b/5d752b2b321e39927f3b53fb71c69616.jpg'
  },
  {
    id: '12',
    name: 'Women\'s Crystal Strap Heels',
    price: 95000,
    category: 'Footwear',
    description: 'Crystal strap heels for elegant occasions with premium finish.',
    image: 'https://i.pinimg.com/1200x/a3/cb/59/a3cb595beb3c6e422258a823717d6cfb.jpg'
  },
  {
    id: '13',
    name: 'Men\'s Premium Sneakers (Limited Edition)',
    price: 130000,
    category: 'Footwear',
    description: 'Limited edition premium sneakers with exclusive design and comfort.',
    image: 'https://i.pinimg.com/736x/90/bb/b2/90bbb238ee212ca31cfbb850d8f948f1.jpg'
  },
  {
    id: '14',
    name: 'Designer Ankara Slippers',
    price: 58000,
    category: 'Footwear',
    description: 'Designer Ankara slippers, unisex with traditional African patterns.',
    image: 'https://i.pinimg.com/1200x/6a/34/31/6a3431748f8c607b709e6d435dbba85b.jpg'
  },
  {
    id: '15',
    name: 'High-top Luxury Sandals',
    price: 72000,
    category: 'Footwear',
    description: 'High-top luxury sandals for comfort and style in warm weather.',
    image: 'https://i.pinimg.com/1200x/86/32/7c/86327ce49f19ea5ffd5a21c670c52019.jpg'
  },
  
  // Accessories
  {
    id: '16',
    name: 'Italian Leather Handbag',
    price: 298000,
    category: 'Accessories',
    description: 'Italian leather handbag with premium finish and spacious interior.',
    image: 'https://i.pinimg.com/736x/d5/59/00/d55900d8aacd325bd38710a63ec1e9a8.jpg'
  },
  {
    id: '17',
    name: 'Signature Gold-Plated Wristwatch',
    price: 280000,
    category: 'Accessories',
    description: 'Signature gold-plated wristwatch with elegant design and precision.',
    image: 'https://i.pinimg.com/1200x/db/38/9b/db389b5b911c66872348f8972b1c23c0.jpg'
  },
  {
    id: '18',
    name: 'Handmade Beaded Purse',
    price: 65000,
    category: 'Accessories',
    description: 'Handmade beaded purse with unique design and traditional craftsmanship.',
    image: 'https://i.pinimg.com/736x/4d/a2/62/4da26206c3e8b8ecf1ac0b4f7b6b27a6.jpg'
  },
  {
    id: '19',
    name: 'Unisex Luxury Sunglasses',
    price: 58000,
    category: 'Accessories',
    description: 'Unisex luxury sunglasses with gold finish and UV protection.',
    image: 'https://i.pinimg.com/1200x/09/f6/89/09f689dac200296080a6f7831af3def4.jpg'
  },
  {
    id: '20',
    name: 'Layered Jewelry Set (Gold Finish)',
    price: 372000,
    category: 'Accessories',
    description: 'Layered jewelry set with gold finish for elegant styling.',
    image: 'https://i.pinimg.com/1200x/67/b5/aa/67b5aa1be7ba7e8468257d274a5dd6ef.jpg'
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
}; 