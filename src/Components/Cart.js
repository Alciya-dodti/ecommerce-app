import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart </h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ddd",
            padding: "10px 0"
          }}
        >
          <p style={{ margin: 0 }}>
            {item.name} - ₹{item.price}
          </p>

          <button
            onClick={() => dispatch(removeFromCart(index))}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              borderRadius: "5px"
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <h3 style={{ marginTop: "20px" }}>
          Total: ₹{total}
        </h3>
      )}
    </div>
  );
}

export default Cart;