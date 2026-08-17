const BASE_URL = "http://localhost:3001/products";

export async function getProducts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch Robux packages");
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch this package");
  return res.json();
}

export async function addProduct(newProduct) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  if (!res.ok) throw new Error("Failed to add package");
  return res.json();
}

export async function updateProduct(id, updates) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error("Failed to update package");
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete package");
  return res.ok;
}
