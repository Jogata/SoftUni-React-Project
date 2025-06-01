import styles from "./find.module.css";

export function Card({ image, make }) {
    return (
        <div className={styles.card}>
            <img src={image} alt="/" />
            <p>{make}</p>
        </div>
    );
};