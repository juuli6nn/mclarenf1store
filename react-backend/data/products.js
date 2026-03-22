// Dummy Product Data for E-Commerce API
// In real e-commerce systems, this would come from a database.
// This format matches the React ProductCard component structure

const products = [
  {
    id: 1,
    name: "Puma Jersey",
    category: "T-Shirts",
    oldPrice: 3500,
    price: 2499,
    discount: 29,
    rating: 4,
    image: "/images/Product1.jpg"
  },
  {
    id: 2,
    name: "2024 Racing Kit",
    category: "T-Shirts",
    oldPrice: 4500,
    price: 3299,
    discount: 27,
    rating: 4,
    image: "/images/Product2.jpg"
  },
  {
    id: 3,
    name: "Norris Helmet",
    category: "Collectibles",
    oldPrice: 15000,
    price: 11999,
    discount: 20,
    rating: 5,
    image: "/images/Product3.jpg"
  },
  {
    id: 4,
    name: "Piastri Helmet",
    category: "Collectibles",
    oldPrice: 15000,
    price: 11999,
    discount: 20,
    rating: 5,
    image: "/images/Product4.jpg"
  },
  {
    id: 5,
    name: "Mclaren Cursive Hoodie",
    category: "Outerwear",
    oldPrice: 3000,
    price: 2199,
    discount: 27,
    rating: 5,
    image: "/images/Product5.jpg"
  },
  {
    id: 6,
    name: "LN4 Party Shades",
    category: "Collectibles",
    oldPrice: 1500,
    price: 999,
    discount: 33,
    rating: 5,
    image: "/images/Product6.jpg"
  },
  {
    id: 7,
    name: "2025 Racing Kit",
    category: "T-Shirts",
    oldPrice: 4500,
    price: 3299,
    discount: 27,
    rating: 5,
    image: "/images/Product7.jpg"
  },
  {
    id: 8,
    name: "Reiss Louise Cropped Cardigan",
    category: "Reiss Collection",
    oldPrice: 3800,
    price: 2699,
    discount: 29,
    rating: 4,
    image: "/images/Product8.jpg"
  },
  {
    id: 9,
    name: "Reiss King Fleece Jacket",
    category: "Reiss Collection",
    oldPrice: 4200,
    price: 2999,
    discount: 29,
    rating: 4,
    image: "/images/Product9.jpg"
  },
  {
    id: 10,
    name: "PUMA 2026 Team Bomber Jacket",
    category: "Outerwear",
    oldPrice: 4000,
    price: 2899,
    discount: 28,
    rating: 5,
    image: "/images/Product10.jpg"
  },
  {
    id: 11,
    name: "Reiss Nylo Fleece Jacket",
    category: "Reiss Collection",
    oldPrice: 4300,
    price: 3099,
    discount: 28,
    rating: 4,
    image: "/images/Product11.jpg"
  },
  {
    id: 12,
    name: "PUMA 2026 Mclaren Cap",
    category: "Headwear",
    oldPrice: 3900,
    price: 2799,
    discount: 28,
    rating: 5,
    image: "/images/Product12.jpg"
  },
  {
    id: 13,
    name: "PUMA 2026 Racing Kit",
    category: "T-Shirts",
    oldPrice: 4100,
    price: 2999,
    discount: 27,
    rating: 4,
    image: "/images/Product13.jpg"
  },
  {
    id: 14,
    name: "PUMA 2026 Racing Hoodie",
    category: "Outerwear",
    oldPrice: 3700,
    price: 2599,
    discount: 30,
    rating: 5,
    image: "/images/Product14.jpg"
  },
  {
    id: 15,
    name: "PUMA 2026 Oscar Piastri Australia GP Cap",
    category: "Headwear",
    oldPrice: 4400,
    price: 3199,
    discount: 27,
    rating: 4,
    image: "/images/Product15.jpg"
  },
  {
    id: 16,
    name: "2025 Lando Norris Drivers' Championship T-shirt",
    category: "T-Shirts",
    oldPrice: 4000,
    price: 2899,
    discount: 28,
    rating: 5,
    image: "/images/Product16.jpg"
  },
  {
    id: 17,
    name: "PUMA Oscar Piastri Australia T-Shirt",
    category: "T-Shirts",
    oldPrice: 3600,
    price: 2499,
    discount: 31,
    rating: 4,
    image: "/images/Product7.jpg"
  },
  {
    id: 18,
    name: "2025 Lando Norris Monaco GP Winner Poster",
    category: "T-Shirts",
    oldPrice: 4200,
    price: 2999,
    discount: 29,
    rating: 5,
    image: "/images/Product17.jpg"
  },
  {
    id: 19,
    name: "2025 Racing Kit",
    category: "Collectibles",
    oldPrice: 3800,
    price: 2699,
    discount: 29,
    rating: 4,
    image: "/images/Product18.jpg"
  },
  {
    id: 20,
    name: "Reiss Mercer Logo Jacket",
    category: "Reiss Collection",
    oldPrice: 4100,
    price: 2999,
    discount: 27,
    rating: 5,
    image: "/images/Product19.jpg"
  }
];

// Export the products array so Express can return it in API responses
module.exports = products;
