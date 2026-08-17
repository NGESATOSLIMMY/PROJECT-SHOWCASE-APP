import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="product-price">
          ${Number(product.price).toFixed(2)}
        </p>
        <p>
          Stock: {product.stock}
        </p>
        <Link to={`/products/${product.id}`}>
          View Product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
