import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Nav from "../Nav/Nav";

import Hero from "../Hero/Hero";

import styles from "../../styles/Header.module.scss";

export default function Header({ title, content }) {
    const [hamburgeract, setHamburgerAct] = useState(false);

    const hamburgerEvent = () => {
        setHamburgerAct(!hamburgeract);
    };
    return (
        <header className={`${styles["header"]} component`}>
            <div className="component__header relative flex flex-wrap max-w-[320px] mx-auto pt-3">
                <div className="component__header--logo">
                    <Link href="/" passHref>
                        <a>
                            <Image
                                src="/assets/images/logo.svg"
                                width={128}
                                height={32}
                            />
                        </a>
                    </Link>
                </div>
                <Nav clickHandler={hamburgeract} />
                <div
                    className={`${styles["component__header--hamburger"]} ${
                        hamburgeract ? `${styles["is-active"]}` : ""
                    }`}
                    onClick={hamburgerEvent}
                >
                    <span className={`${styles["line"]}`}></span>
                    <span className={`${styles["line"]}`}></span>
                    <span className={`${styles["line"]}`}></span>
                </div>
            </div>
            <Hero title={title} content={content} />
            <div className={`${styles["component__headerimage"]}`}>
                <img
                    src="/assets/images/bg-pattern-home-2.svg"
                    width={358}
                    height={200}
                />
            </div>
        </header>
    );
}
