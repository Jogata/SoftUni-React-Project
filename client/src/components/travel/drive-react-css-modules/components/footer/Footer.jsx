import styles from './footer.module.css';
import logo from '../../images/logo_dark.png';

export function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <img src={logo} alt="" />
            <button>Share A Car</button>
        </div>
    </footer>
  )
}