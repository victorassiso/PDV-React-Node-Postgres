import axios from "axios";
import { useEffect, useState } from "react";

const Products = ({ products }) => {
  return (
    <div className="products">
      <h1>Products:</h1>
      {products.map((product) => {
        return (
          <div className="product">
            <p>Id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Status: {product.status}</p>
            <p>Price: {product.price}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

function App() {
  async function getProducts() {
    const response = await axios.get("http://localhost:3001/products");
    setProducts(response.data);
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Products products={products}></Products>
    </div>
  );
}

export default App;
