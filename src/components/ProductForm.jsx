// components/ProductForm.jsx
// Shared form for both creating a new Robux package and editing an existing one.

import { useState } from "react";

const emptyProduct = {
  name: "",
  price: "",
  amount: "",
  description: "",
  stock: "",
  image: "",
};

export default function ProductForm({ initialData, onSubmit, submitLabel = "Save" }) {
  const [formData, setFormData] = useState(initialData || emptyProduct);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.price || Number(formData.price) <= 0)
      newErrors.price = "Price must be a positive number";
    if (!formData.amount || Number(formData.amount) <= 0)
      newErrors.amount = "Robux amount must be a positive number";
    if (formData.stock === "" || Number(formData.stock) < 0)
      newErrors.stock = "Stock must be 0 or more";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit({
      ...formData,
      price: Number(formData.price),
      amount: Number(formData.amount),
      stock: Number(formData.stock),
    });
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. 800 Robux" />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </label>

      <label>
        Price ($)
        <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. 9.99" />
        {errors.price && <span className="field-error">{errors.price}</span>}
      </label>

      <label>
        Robux Amount
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="e.g. 800" />
        {errors.amount && <span className="field-error">{errors.amount}</span>}
      </label>

      <label>
        Stock
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="e.g. 100" />
        {errors.stock && <span className="field-error">{errors.stock}</span>}
      </label>

      <label>
        Image URL
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
      </label>

      <label>
        Description
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Short description of this package" />
      </label>

      <button type="submit">{submitLabel}</button>
    </form>
  );
}
