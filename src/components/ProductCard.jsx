import { Link } from "react-router-dom";


const LOW_STOCK_THRESHOLD = 5;

function getStockStatus(stock) {
  if (stock <= 0) return { label: "Out of Stock", className: "stock-badge-out" };
  if (stock <= LOW_STOCK_THRESHOLD) return { label: "Low Stock", className: "stock-badge-low" };
  return { label: "In Stock", className: "stock-badge-ok" };
}

function ProductCard({ product }) {
  const { label, className } = getStockStatus(product.stock);

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
        <p className="stock">
          Stock: {product.stock}{" "}
          <span className={`stock-badge ${className}`}>{label}</span>
        </p>
        <Link to={`/products/${product.id}`}>
          View Product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;