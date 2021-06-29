import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h2>Boss Card</h2>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;