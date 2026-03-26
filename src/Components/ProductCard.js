import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;