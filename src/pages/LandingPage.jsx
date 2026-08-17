import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to BloxStore</h1>
      <p>Buy instant Robux safely and quickly.</p>

      <Link to="/products" className="cta-button">
        See Offers
      </Link>

      <div className="product-grid" style={{ marginTop: "40px", textAlign: "left" }}>
        <div className="product-card">
          <h3>Fast Delivery</h3>
          <p className="stock">Instant processing on all orders.</p>
        </div>
        <div className="product-card">
          <h3>Safe & Secure</h3>
          <p className="stock">No passwords needed.</p>
        </div>
        <div className="product-card">
          <h3>Best Prices</h3>
          <p className="stock">Get more Robux for less.</p>
        </div>
      </div>
    </div>
  );
}
