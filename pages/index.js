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
            <main className="content-wrapper">
                <section className="component"></section>
            </main>
        </>
    );
}
