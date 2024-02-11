import Carousel from "../components/WashCarousel";
import Washcard from "../components/Washcard";
import Link from "next/link";
import { readFileSync } from 'fs';


export default function WashServices() {

    let washfile = JSON.parse(readFileSync('./washservices.json', 'utf-8'))

    const services = washfile.Services.services;
    const ceramic = Object.values(washfile.Ceramic.services) as Array<boolean>;
    const jerseyshine = Object.values(washfile.JerseyShine.services) as Array<boolean>;
    const deluxe = Object.values(washfile.Deluxe.services) as Array<boolean>;
    const basic = Object.values(washfile.Basic.services) as Array<boolean>;
    const exterior = Object.values(washfile.Exterior.services) as Array<boolean>;

    return (
        <div>
            <div className="flex flex-col h-fit bg-[#128bee] p-8 text-center w-full">
                <h1 className="text-6xl font-bold pt-24 p-5">Make Your Car Shine</h1>
                <p className="text-xl font-bold pb-24">Checkout Single Washes, Unlimited Washes for Clubs, Washbooks, and Daily Specials</p>
                <p>Make sure you grab a wash rewards card</p>
                <p className="text-xs">Not applicable for club members</p>
            </div>
            <div>
                <h1 className="text-center pt-12 font-bold text-4xl">Wash Menu</h1>
            </div>
            <div className="lg:hidden flex items-center w-full justify-between p-5">
                <Carousel services={services} ceramic={ceramic} jerseyshine={jerseyshine} deluxe={deluxe} basic={basic} exterior={exterior} />
            </div>
            {/* TODO cards extend past parent when resized */}
            <div className="max-lg:hidden flex items-center w-full justify-between p-5">
                <Washcard pic="/carwashred.png" name="Ceramic" price={washfile.Ceramic.prices.Regular} clubprice={washfile.Ceramic.prices.Club} services={services} wash={ceramic} />
                <Washcard pic="/carwashgold.png" name="Jersey Shine" price={washfile.JerseyShine.prices.Regular} clubprice={washfile.JerseyShine.prices.Club} services={services} wash={jerseyshine} />
                <Washcard pic="/carwashsilver.png" name="Deluxe" price={washfile.Deluxe.prices.Regular} clubprice={washfile.Deluxe.prices.Club} services={services} wash={deluxe} />
                <Washcard pic="/carwashblue.png" name="Basic" price={washfile.Basic.prices.Regular} clubprice={washfile.Basic.prices.Club} services={services} wash={basic} />
                <Washcard pic="/carwashgrey.png" name="Exterior" price={washfile.Exterior.prices.Regular} clubprice={washfile.Exterior.prices.Club} services={services} wash={exterior} />
            </div>
            <div className="flex w-full items-center text-center justify-center font-bold text-xl p-5">
                <p className="text-sm">Don&apos;t forget to ask our wash representative for an air fragrance</p>
            </div>
            <div className="flex flex-col w-full items-center justify-center pb-12 p-5 text-xl font-bold text-center">
                <h1 className="text-4xl p-5">Join the Club</h1>
                <h2 className="lg:mx-32 p-5">Getting a car wash more than once a month? Consider a club membership for one of our washes and come as much as you want!
                    Simply download the Everwash app, select our wash Jersey <a className="text-[#128bee]">Shine</a> & <a className="text-[#f4cb56]">Lube</a>, then
                    select your wash!
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.everwash.carclub&hl=en_US&gl=US"
                        target="_blank"
                        className="bg-[#128bee] rounded-full p-3">
                        Google Play Store
                    </Link>
                    <Link
                        href="https://apps.apple.com/us/app/everwash/id962949509"
                        target="_blank"
                        className="bg-[#128bee] rounded-full p-3">
                        Apple App Store
                    </Link>
                </div>
                <div className="p-24">
                    <p>Consider buying washes in bulk? You can buy any of the washes in a washbook, you pay for 4 and get the 5th one free</p>
                    <p>No expiry date</p>
                </div>
            </div>
            <div className="h-fit bg-[#128bee] p-8 text-center w-full">
                <h1 className="text-4xl font-bold pt-12 p-5">Daily Specials</h1>
                <div className="grid grid-rows-8 gap-3 text-xl font-bold pb-12">
                    <p>Monday</p>
                    <p>Lady&apos;s Day: $3 off any wash</p>
                    <p>Tuesday</p>
                    <p>Seniors&apos;s Day: 50% off any wash</p>
                    <p>Wednesday</p>
                    <p>Men&apos;s Day: $3 off any wash</p>
                    <p>Thursday</p>
                    <p>Jersey Shine Day: $5 off Jersey Shine</p>
                </div>
            </div>
            <div className="flex-col w-full items-center text-center font-bold justify-center p-10 pb-24">
                <h1 className="text-4xl p-8">Senior Discount vs Unlimited Club</h1>
                <p className="text-lg p-8">Are you a senior who is getting a car wash every week? Well consider the car wash club, you can save money if you come 4 times or more and you can come any day and every day as opposed to just Tuesdays. The more you come the more you save!</p>
            </div>
        </div>
    );
}