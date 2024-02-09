"use client";

import React from "react";
import "react-slideshow-image/dist/styles.css";
import "../globals.css"
import Washcard from "./Washcard";


export default function WashCarousel(props: {services: Array<string>; ceramic: Array<boolean>; jerseyshine: Array<boolean>; deluxe: Array<boolean>; basic: Array<boolean>; exterior: Array<boolean>;}) {

    let divs = [
        <Washcard key={1} pic="/carwashred.png" name="Ceramic" price="28" clubprice="49" services={props.services} wash={props.ceramic} />,
        <Washcard key={2} pic="/carwashgold.png" name="Jersey Shine" price="23" clubprice="42" services={props.services} wash={props.jerseyshine} />,
        <Washcard key={3} pic="/carwashsilver.png" name="Deluxe" price="19" clubprice="36" services={props.services} wash={props.deluxe} />,
        <Washcard key={4} pic="/carwashblue.png" name="Basic" price="16" clubprice="32" services={props.services} wash={props.basic} />,
        <Washcard key={5} pic="/carwashgrey.png" name="Exterior" price="10" clubprice="20" services={props.services} wash={props.exterior} />
    ];

    const [index, setIndex] = React.useState(0);

    return (
        <div className="overflow-hidden">
            <div
                className="whitespace-nowrap transition duration-1000 ease-in-out"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {divs.map((card, index) => (
                    <div
                        key={index}
                        className="inline-flex w-full items-center justify-center"
                    >
                        {card}
                    </div>
                ))}
            </div>

            <div className="slideshowDots pt-5">
                {divs.map((_, idx) => (
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