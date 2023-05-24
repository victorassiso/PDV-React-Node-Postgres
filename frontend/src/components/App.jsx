import { Products } from "./Products";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

import styles from "./App.module.css";
import "../global.css";
import axios from "axios";
import { useEffect, useState } from "react";

// const Products = ({ products }) => {
//   return (
//     <div className="products">
//       <h1>Products:</h1>
//       {products.map((product) => {
//         return (
//           <div className="product">
//             <p>Id: {product.id}</p>
//             <p>Name: {product.name}</p>
//             <p>Status: {product.status}</p>
//             <p>Price: {product.price}</p>
//             <hr />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

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
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Products products={products} />
        {/* <Products products={products}></Products> */}
      </div>
    </div>
  );
}

export default App;
