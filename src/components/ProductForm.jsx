
 import { useId, useState } from "react";

function ProductForm({ onSubmit }) {
  const nameId = useId();
  const descriptionId = useId();
  const priceId = useId();
  const stockId = useId();
  const imageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      stock: Number(formData.stock),
      image: formData.image,
    };

    await onSubmit(newProduct);

    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Add New Product</h1>

      <div className="form-group">
        <label htmlFor={nameId}>
          Product Name
        </label>

        <input
          id={nameId}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={descriptionId}>
          Description
        </label>

        <textarea
          id={descriptionId}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={priceId}>
          Price
        </label>

        <input
          id={priceId}
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="0.00"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={stockId}>
          Stock
        </label>

        <input
          id={stockId}
          name="stock"
          type="number"
          min="0"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Enter stock quantity"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={imageId}>
          Image URL
        </label>

        <input
          id={imageId}
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <button type="submit">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;