import Image from "next/image";

export default function Detailcard(props: { pic: string; name: string; price: string; servicesInt: Array<string>; servicesExt: Array<string>; washInt: Array<boolean>; washExt: Array<boolean>; }) {

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
            <div className="z-2 group rounded-lg border px-15 py-12 border-white"
            >
            <h1 className="flex items-center justify-center pb-5 font-bold text-3xl">{props.name} ${props.price}</h1>
            <h2 className="flex font-bold text-xl px-3 py-3">Interior</h2>
                {props.washInt?.map((item, index) => (
                    <div
                        key={index}
                        className="flex text-wrap px-3"
                    >
                        {item ? <p className="flex pr-3 font-bold justify-between text-[#00a86b]">&#x2713;</p> :
                            <p className="flex pr-3 font-bold justify-between text-[#ff0000]">&#x2717;</p>
                        }
                        {props.servicesInt[index]}
                    </div>
                ))}
            <h2 className="flex font-bold text-xl px-3 py-3">Exterior</h2>
                {props.washExt?.map((item, index) => (
                    <div
                        key={index}
                        className="flex text-wrap px-3"
                    >
                        {item ? <p className="flex pr-3 font-bold justify-between text-[#00a86b]">&#x2713;</p> :
                            <p className="flex pr-3 font-bold justify-between text-[#ff0000]">&#x2717;</p>
                        }
                        {props.servicesExt[index]}
                    </div>
                ))}
            </div>
        </div>
    );
}