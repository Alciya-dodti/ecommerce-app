import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Computer", price: 25000 },
    { id: 5, name: "Mouse", price: 1000 },
    { id: 6, name: "Keyboard", price: 6000 },
    { id: 7, name: "Power Bank", price: 1200 },
    { id: 8, name: "Camera", price: 45000 },
    { id: 9, name: "Gaming Console", price: 40000 },
    { id: 10, name: "Monitor", price: 12000 },
    { id: 11, name: "Printer", price: 9000 },
    { id: 12, name: "External Hard Drive", price: 6000 },
    { id: 13, name: "USB Flash Drive", price: 700 }
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;