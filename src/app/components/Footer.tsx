import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="max-lg:flex-col flex items-center justify-between p-5">
                <div className="flex flex-col items-center justify-between max-lg:pb-10 gap-2">

                    <Image
                        src="/logofull.jpg"
                        alt="full"
                        width={175}
                        height={75}
                    />
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 justify-center text-center items-center">
                        <Link //TODO dead links below, create folder and tsx pages for them
                            href="">
                            FAQ
                        </Link>
                        <Link
                            href="">
                            About Us
                        </Link>
                        <Link
                            href="">
                            Terms Of Service
                        </Link>
                        <Link
                            href="">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between max-lg:pb-10 gap-2">
                    <h1 className="text-xl font-bold text-[#128bee] max-lg:pt-5 pb-5">Hours of Operation</h1>
                    <p>Mon-Fri: 9am-5pm</p>
                    <p>Sat: 9am-4pm</p>
                    <p>Sun: 10am-3pm *Car Wash Only*, *Dates vary, call ahead*</p>
                </div>

                <div className="flex flex-col items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-[#128bee] max-lg:pt-10 pb-5">Club Suppport</h2>
                    <a href="tel:12156188808">(215) 618-8808</a>
                    <a href="mailto:support@everwash.com">support@everwash.com</a>
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-[#f4cb56] max-lg:pt-10 pb-5">Contact Us</h2>
                    <a href="tel:16097140940">(609) 714-0940</a>
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-[#f4cb56] max-lg:pt-10 pb-5">Connect With Us</h2>
                    <Link
                        href="https://facebook.com/jerseyshineandlube/"
                        target="_blank"
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="bg-[#1877f2] mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className=" h-4 bg-[#00a86b] bottom-0" />
        </div>
    );
}