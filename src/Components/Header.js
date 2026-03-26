import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{
      background: "#111",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2> E-commerce app</h2>
      <div style={{
  background: "#111",
  color: "white",
  padding: "15px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center"
}}></div>

      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cartItems.length})
        </Link>
      </div>
    </div>
  );
}

export default Header;