import styles from "../../styles/Header.module.scss";

export default function Hero({ title, content }) {
    return (
        <div className={`${styles["component__hero"]} mt-20 mx-auto`}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}
