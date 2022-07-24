import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Footer.module.scss";

export default function Footer() {
    return (
        <footer className={`${styles["footer"]} component`}>
            <div className={`component__footer pt-[66px] px-6 pb-16`}>
                <div className={`component__footer--logo flex justify-center`}>
                    <Image
                        src="/assets/images/logo.svg"
                        width={96}
                        height={24}
                    />
                </div>
                <div className={`component__footer--links mt-6`}>
                    <ul className="flex flex-row justify-center space-x-6">
                        <li>
                            <Link href="/">
                                <a>home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>about</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={`${styles["component__footer--address"]} mt-6 text-center`}
                >
                    987 Hillcrest Lane
                    <br />
                    Irvine, CA
                    <br />
                    California 92714
                    <br />
                    Call Us :{" "}
                    <Link href="#">
                        <a>949-833-7432</a>
                    </Link>
                </div>
                <div
                    className={`component__footer--social-links mt-[40px] space-x-4 flex justify-center`}
                >
                    <Link href="https://www.facebook.com/">
                        <a target="_blank">
                            <Image
                                src="/assets/images/icon-facebook.svg"
                                width={24}
                                height={24}
                            />
                        </a>
                    </Link>
                    <Link href="https://www.pinterest.com/">
                        <a target="_blank">
                            <Image
                                src="/assets/images/icon-pinterest.svg"
                                width={24}
                                height={24}
                            />
                        </a>
                    </Link>
                    <Link href="https://www.twitter.com/">
                        <a target="_blank">
                            <Image
                                src="/assets/images/icon-twitter.svg"
                                width={24}
                                height={24}
                            />
                        </a>
                    </Link>
                </div>
                <div
                    className={`${styles["component__footer--copyright"]} text-center mt-4`}
                >
                    Copyright {new Date().getFullYear()}. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
