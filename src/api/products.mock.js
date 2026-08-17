let products = [
  { id: "1", name: "80 Robux", price: 0.99, amount: 80, image: "https://placehold.co/150x150?text=80+Robux", description: "A small top-up of 80 Robux.", stock: 200 },
  { id: "2", name: "400 Robux", price: 4.99, amount: 400, image: "https://placehold.co/150x150?text=400+Robux", description: "A starter pack of 400 Robux.", stock: 120 },
  { id: "3", name: "800 Robux", price: 9.99, amount: 800, image: "https://placehold.co/150x150?text=800+Robux", description: "800 Robux for premium avatar bundles.", stock: 85 },
  { id: "4", name: "1700 Robux", price: 19.99, amount: 1700, image: "https://placehold.co/150x150?text=1700+Robux", description: "1700 Robux for serious in-game shopping.", stock: 40 },
  { id: "5", name: "4500 Robux", price: 49.99, amount: 4500, image: "https://placehold.co/150x150?text=4500+Robux", description: "A large bundle for power users.", stock: 15 },
];

function delay(ms = 200) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts() {
  await delay();
  return [...products];
}

export async function getProduct(id) {
  await delay();
  const product = products.find((p) => p.id === id);
  if (!product) throw new Error("Package not found");
  return product;
}

export async function addProduct(newProduct) {
  await delay();
  const created = { ...newProduct, id: String(Date.now()) };
  products.push(created);
  return created;
}

export async function updateProduct(id, updates) {
  await delay();
  products = products.map((p) => (p.id === id ? { ...p, ...updates } : p));
  return products.find((p) => p.id === id);
}

export async function deleteProduct(id) {
  await delay();
  products = products.filter((p) => p.id !== id);
  return true;
}
