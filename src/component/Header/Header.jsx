import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  return (
    <header className={styles.header}>
      <h1>BB.CV</h1>
      <ThemeToggle />
    </header>
  )
}

export default Header