import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.links}>
            <li><a href="mailto:hi@bartbak.com">Email</a></li>
            <li><a href="https://bartbak.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li><a href="https://www.linkedin.com/in/bakbartosz/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com/bartbak_" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/bartbak_" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul> 
    </footer>
  )
}

export default Footer