import Image from "next/image";

export default function Washcard(props: { pic: string; name: string; price: string; clubprice: string; services: Array<string>; wash: Array<boolean>; }) {

    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src={props.pic}
                alt=""
                width={150}
                height={48}
                priority
                className="relative z-1 top-4"
            />
            <div className="z-2 group rounded-lg border px-8 py-16 border-white"
            >
            <h1 className="flex items-center justify-center pb-5 font-bold text-3xl">{props.name}</h1>
                {props.wash?.map((item, index) => (
                    <div
                        key={index}
                        className="flex"
                    >
                        {item ? <p className="flex pr-3 font-bold justify-between text-[#128bee]">&#x2713;</p> :
                            <p className="flex pr-3 font-bold justify-between text-[#ff0000]">&#x2717;</p>
                        }
                        {props.services[index]}
                    </div>
                ))}
                <span className="flex pt-10" />
                <div className="z-1 relative group rounded-lg border px-5 py-4 border-white">
                    <p>${props.price} PER WASH</p>
                    <p>${props.clubprice} UNLIMITED</p>
                </div>
            </div>
        </div>
    );
}