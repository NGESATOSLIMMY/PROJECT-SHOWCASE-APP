import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
        setNewPrice(data.price);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  function handleEditClick() {
    setIsEditing(true);
    setNewPrice(product.price);
    setSaveError(null);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setNewPrice(product.price);
    setSaveError(null);
  }

  async function handleSaveClick() {
    setSaving(true);
    setSaveError(null);
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: parseFloat(newPrice) }),
      });
      if (!response.ok) {
        throw new Error("Failed to update price");
      }
      const updatedProduct = await response.json();
      setProduct(updatedProduct);
      setIsEditing(false);
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>

      {!isEditing ? (
        <>
          <p>Price: ${product.price}</p>
          <button onClick={handleEditClick}>Edit Price</button>
        </>
      ) : (
        <div className="price-edit-form">
          <label htmlFor="price-input">New Price: $</label>
          <input
            id="price-input"
            type="number"
            step="0.01"
            min="0"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <div className="price-edit-buttons">
            <button onClick={handleSaveClick} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
            <button onClick={handleCancelClick} disabled={saving}>
              Cancel
            </button>
          </div>
          {saveError && <ErrorMessage message={saveError} />}
        </div>
      )}

      <p>Amount: {product.amount} Robux</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default ProductPage;