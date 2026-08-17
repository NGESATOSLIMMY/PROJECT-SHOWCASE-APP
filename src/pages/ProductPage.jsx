// pages/ProductPage.jsx
// Shows a single Robux package's details, with an edit form to update it.

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { getProduct, updateProduct, deleteProduct } from "../api/products";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  async function handleUpdate(updates) {
    try {
      const updated = await updateProduct(id, updates);
      setProduct(updated);
      setIsEditing(false);
    } catch (err) {
      alert(`Failed to update package: ${err.message}`);
    }
  }

  async function handleDelete() {
    if (!window.confirm("Delete this package?")) return;
    try {
      await deleteProduct(id);
      navigate("/products");
    } catch (err) {
      alert(`Failed to delete package: ${err.message}`);
    }
  }

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Package not found" />;

  return (
    <div className="product-page">
      {isEditing ? (
        <>
          <h1>Edit {product.name}</h1>
          <ProductForm initialData={product} onSubmit={handleUpdate} submitLabel="Save Changes" />
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <p className="stock">{product.stock} in stock</p>
          <div className="product-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
