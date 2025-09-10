import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.avatar} data-avatar></div>

      <div className="details">
        <h1>Bart Bak</h1>
        <h2>Design Engineer</h2>
        <h3>Currently: Beeper/A8C</h3>
        <h3>Previously: Tumblr, WEF, June, Origin</h3>
        <h3>Consistently improving</h3>
      </div>

    </header>
  )
}

export default Header