import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";

function Nav({ clickHandler }) {
    return (
        <div
            className={`${styles["component__header--navigation"]} ${
                clickHandler
                    ? `${styles["mobile-show"]}`
                    : `${styles["mobile-hidden"]}`
            }`}
        >
            <ul className="navigation">
                <li>
                    <Link href="/">
                        <a>home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
            <a
                className={`${styles["component__header--contact-us"]} button button-primary-light text-one`}
            >
                Contact Us
            </a>
            <img
                src="/assets/images/bg-pattern-about-1-mobile-nav-1.svg"
                width={200}
                height={200}
                className={`${styles["component__header--navigation-image"]}`}
            />
        </div>
    );
}

export default Nav;
