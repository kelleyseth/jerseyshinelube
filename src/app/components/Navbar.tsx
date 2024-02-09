import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="z-10 w-full items-center justify-between text-sm lg:flex p-5">
            <Link
                href="/"
                className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
                <Image
                    src="/businesslogotransparent.png"
                    alt="Business Logo"
                    width={150}
                    height={48}
                    priority
                />
            </Link>
            <p className="text-center text-xl font-bold">Family Owned and Operated Since 2004</p>
            <div className="grid grid-cols-3 gap-5">
                <Link
                    href="/washservices"
                    className="hover:bg-[#128bee] fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
                    Wash Services
                </Link>
                <Link
                    href="/detailservices"
                    className="hover:bg-[#00a86b] fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
                    Detailing
                </Link>
                <Link
                    href="/oilchangeservices"
                    className="hover:bg-[#f4cb56] fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
                    Oil Change
                </Link>
            </div>
        </div>
    );
}