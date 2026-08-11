export interface Garment {
  id: string;
  name: string;
  category: string;
  color: string;
  colorHex: string;
  modelImage: string;
  thumbnail: string;
  price: string;
  tag: string;
}

export const DEMO_GARMENTS: Garment[] = [
  {
    id: 'purple-dress',
    name: 'Elegance Silk Evening Gown',
    category: 'Dresses',
    color: 'Royal Purple',
    colorHex: '#7B61FF',
    modelImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=200&q=80',
    price: '₹4,999',
    tag: 'Trending'
  },
  {
    id: 'yellow-dress',
    name: 'Sunburst Summer Pleated Dress',
    category: 'Dresses',
    color: 'Warm Mustard',
    colorHex: '#FFA86A',
    modelImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=200&q=80',
    price: '₹3,499',
    tag: 'New'
  },
  {
    id: 'blue-dress',
    name: 'Azure Breeze Cocktail Outfit',
    category: 'Dresses',
    color: 'Ocean Blue',
    colorHex: '#3B82F6',
    modelImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    price: '₹5,299',
    tag: 'Bestseller'
  },
  {
    id: 'green-dress',
    name: 'Emerald Velvet Midi Dress',
    category: 'Dresses',
    color: 'Emerald Green',
    colorHex: '#10B981',
    modelImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=200&q=80',
    price: '₹4,499',
    tag: 'Premium'
  },
  {
    id: 'white-dress',
    name: 'Ivory Grace Designer Outfit',
    category: 'Dresses',
    color: 'Pure White',
    colorHex: '#F8FAFC',
    modelImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=200&q=80',
    price: '₹6,199',
    tag: 'Limited'
  }
];
