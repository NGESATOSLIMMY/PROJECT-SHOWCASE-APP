import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

function ProductPage() {
  const { id } = useParams();

   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   
   useEffect(() => {
   async function fetchProduct() {
    try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) {
            throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }

   }

   fetchProduct();
   
} , [id]);

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
        <p>Price: ${product.price}</p>
        <p>Amount: {product.amount} Robux</p>
        <p>Stock: {product.stock}</p>
    </div>
);
}

export default ProductPage;