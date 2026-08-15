//api/products.js
//Central place for all fetch data calls to the simulated backend (json-server).
//Every component should go through these functions instead of calling fetch() directly

const BASE_URL = "http://localhost:3001/products";

//GETTING ALL PACKAGES
export async function getProducts() {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch Robux packeges");
    return res.json();
}

//GET A SINGLE PACKAGE BY ID
export async function getProduct(id) {
    const res = await fetch (`${BASE_URL}/${id}`);
    if (!res.ok)throw new Error("Failed to fetch this package");
    return res.json();
}

// POST A NEW ROBUX PACKAGE
export async function addProduct(newProduct) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {" Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
    });

    if(!res.ok) throw new Error("Failed to add package.");
    return res.json();
}

//UPDATE PRICE OR STOCK
export async function updateProduct(id, updates) {
    const res = await fetch(`${BASE_URL}/${id}`,{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updates), 
    });
    if (!res.ok) throw new Error("Failed to update package");
    return res.json();
}

//DELETE A PACKAGE 
export async function deleteProduct(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {method:"DELETE"});
    if (!res.ok) throw new Error("Failed to delete package");
    return res.ok;
}