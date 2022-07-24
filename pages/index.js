import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../components/Hero/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>My Team</title>
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <a className="button button-primary-light text-one">
                        Contact Us
                    </a>
                    <a className="button button-secondary-light text-one">
                        Contact Us
                    </a>
                    <a className="button button-dark text-one">Contact Us</a>
                </main>
            </div>
        </>
    );
}
