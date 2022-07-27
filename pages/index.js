import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>My Team</title>
            </Head>
            <Header
                title={[
                    "Find the ",
                    <br />,
                    "best ",
                    <span className="text-light-coral">talent</span>,
                ]}
                content="Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that."
            />
            <main className="content-wrapper">
                <section className="component"></section>
            </main>
            <Footer />
        </>
    );
}
