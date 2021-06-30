import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="nav-title">Boss Card</h2>
      </Link>
      <div className="linkbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/create">Create</Link>
        <Link className="nav-link" to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;