import styles from "./Products.module.css";

export function Products({ products }) {
  return (
    <div className="products">
      <h1 className={styles.title}>Products:</h1>
      <div className={styles.toolBar}>
        <div className={styles.searchTool}>
          <input type="text" placeholder="Product name" />
          <button>Search</button>
        </div>
        <button className={styles.AddProductButton}>Add product</button>
      </div>

      <table>
        <tr>
          <th>ID</th>
          <th className={styles.nameColumn}>Name</th>
          <th>Status</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {products.map((product) => {
          let status = "";
          if (product.status) {
            status = "Ativo";
          } else {
            status = "Inativo";
          }

          return (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{status}</td>
              <td>{product.price}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
