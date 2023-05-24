import styles from "./Header.module.css";
import pdvLogo from "../assets/pdv-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={pdvLogo} alt="Logotipo do sistema" />
      <strong>Smart PDV</strong>
    </header>
  );
}
