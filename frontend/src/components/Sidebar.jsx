import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside>
      <div className={styles.menuOption}>
        <h1>Products</h1>
      </div>
      <div className={styles.menuOption}>
        <h1>Statement</h1>
      </div>
    </aside>
  );
}
