export function getHeroImages() {
  return [
    'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529676468690-d4a9b8477d8f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1455659817273-f96807779a8d?q=80&w=1200&auto=format&fit=crop',
  ]
}

export function getGiftItems() {
  return [
    { id: 'choc-1', name: 'Artisan Chocolates', category: 'chocolates', price: 19.99, image: 'https://images.unsplash.com/photo-1548907040-4b3c6e6f7c53?q=80&w=1400&auto=format&fit=crop' },
    { id: 'teddy-1', name: 'Plush Teddy', category: 'toys', price: 24.99, image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1400&auto=format&fit=crop' },
    { id: 'candle-1', name: 'Aromatherapy Candle', category: 'candles', price: 15.5, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop' },
    { id: 'card-1', name: 'Handwritten Card', category: 'cards', price: 5.0, image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=1400&auto=format&fit=crop' },
    { id: 'balloon-1', name: 'Helium Balloons', category: 'balloons', price: 12.0, image: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1400&auto=format&fit=crop' },
    { id: 'tea-1', name: 'Floral Tea Set', category: 'sets', price: 29.0, image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1400&auto=format&fit=crop' },
    { id: 'vase-1', name: 'Glass Vase', category: 'home decor', price: 18.0, image: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1400&auto=format&fit=crop' },
    { id: 'spa-1', name: 'Spa Gift Box', category: 'sets', price: 34.99, image: 'https://images.unsplash.com/photo-1540553016721-780f80c7bad9?q=80&w=1400&auto=format&fit=crop' },
    { id: 'rosebox-1', name: 'Rose Box (Mini)', category: 'romance', price: 39.99, image: 'https://images.unsplash.com/photo-1516054575922-cd4aa0e2ad9a?q=80&w=1400&auto=format&fit=crop' },
  ]
}

export function fetchGiftItemsAsync() {
  return new Promise(resolve => setTimeout(() => resolve(getGiftItems()), 200))
}

