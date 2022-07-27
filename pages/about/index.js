import Head from "next/head";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Header
                title="About Us"
                content="Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that."
            />
            <main></main>
            <Footer />
        </>
    );
}
