import styles from "./hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Search Location"
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
          <button className={styles.btn}>Search for cars</button>
          <button className={styles.icon}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};