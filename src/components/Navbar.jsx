import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav className="navbar">
<h2>Robux Admin Portal</h2>
<div className="nav-links">
<Link to="/">Home</Link>
<Link to="/products">Robux Packages</Link>
<Link to="/add-product">Add New Package</Link>
</div>
</nav>
);
}

export default Navbar;