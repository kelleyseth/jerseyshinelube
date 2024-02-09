"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
//TODO add a couple circles for when side menu is open
//TODO add link to FAQ
    return (
        <div className="flex items-center justify-between py-4 pl-9">
            <Link
                href="/"
                className="p-3">
                <Image
                    src="/businesslogotransparent.png"
                    alt="Business Logo"
                    width={100}
                    height={36}
                    priority
                />
            </Link>
            <p className="text-xs font-bold">Family Owned and Operated Since 2004</p>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2 p-3 pr-9"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block rounded-lg h-1 w-8 animate-pulse bg-white"></span>
                        <span className="block rounded-lg h-1 w-8 animate-pulse bg-white"></span>
                        <span className="block rounded-lg h-1 w-8 animate-pulse bg-white"></span>
                    </div>

                    <div className={isNavOpen ? "showSideNav translate-x-0 ease-in-out duration-1000" : "hideSideNav translate-x-full ease-in-out duration-1000"}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 p-3 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-24 w-24 flex items-center justify-center"
                                viewBox=" -4 4 24 24"
                            >
                                <circle r="14" cx="12" cy="12" stroke="#128bee" fill="#128bee" />
                                <svg
                                    className="h-8 w-8 animate-pulse"
                                    viewBox="-16 -32 72 72"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN absolute top-3 left-0 p-3 py-8 pl-12">
                            <Link
                                href="/"
                                className="flex pb-24"
                                onClick={() => setIsNavOpen(false)}>
                                <Image
                                    src="/businesslogotransparent.png"
                                    alt="Business Logo"
                                    width={100}
                                    height={36}
                                    priority
                                />
                            </Link>
                            <Link
                                href="/washservices"
                                className="flex pb-5 pt-5"
                                onClick={() => setIsNavOpen(false)}>
                                Wash Services
                            </Link>
                            <Link
                                href="/detailservices"
                                className="flex pb-5 pt-5"
                                onClick={() => setIsNavOpen(false)}>
                                Detailing
                            </Link>
                            <Link
                                href="/oilchangeservices"
                                className="flex pb-5 pt-5"
                                onClick={() => setIsNavOpen(false)}>
                                Oil Change
                            </Link>
                        </ul>
                    </div>
                </section>
            </nav>
            <style>{`
        .hideSideNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 0vh;
            top: 0;
            left: 100%;
            background: black;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            overflow: hidden;
        }
        .showSideNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: black;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
        </div>
    );
}