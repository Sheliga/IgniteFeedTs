import styles from "./Header.module.css";
import IgniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header>
      <strong className={styles.header}>
        <img src={IgniteLogo} alt="Logotipo do ignite" />
      </strong>
    </header>
  );
}
