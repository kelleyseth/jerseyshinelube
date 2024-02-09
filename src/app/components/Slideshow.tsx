"use client";

import React from "react";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import "../globals.css"


export default function Slideshow() {

    const pictures = [
        "/slidepictures/buildingfront.jpg",
        "/slidepictures/car2.jpg",
        "/slidepictures/buildingback.jpg",
        "/slidepictures/car1.jpg"
    ];
    const delay = 5000;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(0);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        // TODO add text and button to join club on top of pic, links to washservices
        <div className="overflow-hidden">
            <div
                className="whitespace-nowrap transition duration-1000 ease-in-out"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {pictures.map((pic, index) => (
                    <div
                        key={index}
                        className="inline-flex w-full items-center justify-center"
                    >
                        <Image
                            src={pic}
                            alt=""
                            width={1280}
                            height={720}
                            className=""
                        />
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {pictures.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}