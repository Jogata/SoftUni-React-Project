import styles from "./driver.module.css";
import image from "../../images/drive.png";

export function Driver() {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={image} alt="/" />
        </div>
        <div>
            <h2>Find the perfect car <span>to try before you buy</span></h2>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver"s seat.</p>
            <button>Browse Cars</button>
        </div>
    </div>
  )
}