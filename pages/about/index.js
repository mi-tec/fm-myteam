import Head from "next/head";

import Hero from "../../components/Hero/Hero";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Hero
                title={`About`}
                content={`We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.`}
            />
            <main></main>
        </>
    );
}
