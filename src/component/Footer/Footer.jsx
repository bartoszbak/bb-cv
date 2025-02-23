import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.links}>
            <li><a href="mailto:youremail@example.com">Email</a></li>
            <li><a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul> 
    </footer>
  )
}

export default Footer