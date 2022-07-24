import styles from "../../styles/Header.module.scss";

export default function Hero({ title, content }) {
    return (
        <div className={`${styles["component__hero"]} mt-20 mx-auto`}>
            <h1>
                Find the <br /> best{" "}
                <span className="text-light-coral">talent</span>
            </h1>
            <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
            </p>
        </div>
    );
}
