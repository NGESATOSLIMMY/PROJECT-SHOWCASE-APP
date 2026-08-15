//THIS WILL BE A PAGE FOR CREATING NEW ROBUX
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { addProduct } from "../api/product";

export default function AddProductPage() {
  const navigate = useNavigate();

  async function handleAdd(newProduct) {
    try {
      await addProduct(newProduct);
      navigate("/products");
    } catch (err) {
      alert(`Failed to add package: $err.message}`);
    }
  }
  return (
    <div className="add-product-page">
      <h1>Add a New Robux Package</h1>
      <ProductForm onSubmit={handleAdd} submitLabel="Add Package" />
    </div>
  );
}
