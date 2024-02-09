import Detailcard from "../components/Detailcard";

export default function DetailServices() {

    const servicesInt = ["100% Soft Cloth Wash", "Complete Vacuum of Interior & Trunk",
        "Clean Crevices of Body & Emblems", "Blow Out Air Vents, Crevices & Dashboard Gauges",
        "Shampoo Seats, Carpets & Floor Mats", "Leather Seats Deep Cleaned & Protected"];
    const servicesExt = ["100% Soft Colthy Wash", "Apply Premium Wax", "Dress Exterior Moldings, Bumper & Tires",
        "Rims Hand Cleaned & Foam Polish", "All Vinyl & Rubber Deep Cleaned",
        "Compound Imperfections & Scratches in the Paint", "Rain-X Windows"];
    const servicesIntSup = ["Jersey Shine Car Wash", "Additional Vacuuming", "Hand Cleaned Seats & Doors", "Vinyl or Leather Dressing"];
    const servicesExtSup = ["Jersey Shine Car Wash", "Premium Tire Shine", "Rims Hand Cleaned", "Foam Cleaned Ext Windows", "Spray Wax", "Ext Vinyl Dressed"];
    const intSupInt = [true, true, true, true];
    const intSupExt = [true, true, false, false, false, false];
    const extSupInt = [true, false, false, false];
    const extSupExt = [true, true, true, true, true, true];
    const proInt = [true, true,
        true, true,
        true, false];
    const proExt = [true, true, true,
        true, true,
        false, false];
    const showInt = [true, true,
        true, true,
        true, true];
    const showExt = [true, true, true,
        true, true,
        true, true];

    return (
        <div>
            <div className="flex flex-col h-fit bg-[#f4cb56] p-8 text-center w-full">
                <h1 className="text-6xl font-bold pt-24 p-5">Keep Your Car Running Like New</h1>
                <p className="text-xl font-bold pb-24">Pull up for a quick oil change and get a free wash</p>
                <p className="text-md">No appointment needed</p>

            </div>
            <div>
                <h1 className="text-center pt-12 pb-12 font-bold text-4xl">Types of Oil</h1>
                <div className="flex flex-col items-center justify-center pb-12 font-bold text-center text-xl p-5">
                    <p className="text-md pb-12">No matter the vehicle, we carry the oil it is designated to run on</p>
                    <a className="grid grid-cols-3 gap-5">
                        <p>Standard</p>
                        <p>Synthetic Blend</p>
                        <p>High Mileage</p>
                        <p>Dexos / Dexos Approved</p>
                        <p>Full Synthetic</p>
                        <p>European Synthetic</p>
                        <p>MOBIL 1 Full Synthetic</p>
                        <p>Diesel</p>
                    </a>
                </div>
            </div>
            <div className="bg-[#f4cb56] w-full h-1" />
            <div>
                <h1 className="text-center pt-12 pb-12 font-bold text-4xl">Multi-Point Checks and Services</h1>
                <div className="flex flex-col items-center justify-center pb-12 font-bold text-center text-xl p-5">
                    <p className="text-md pb-12">We make sure to check it all</p>
                    <a className="grid grid-cols-3 gap-5">
                        <p>Maintenance Light Reset</p>
                        <p>Pre Level Oil Check</p>
                        <p className="text-[#f4cb56]">Check Engine Light Diagnostic</p>
                        <p>Tire Pressure</p>
                        <p className="text-[#f4cb56]">Wiper Blades</p>
                        <p className="text-[#f4cb56]">Regular Lights</p>
                        <p className="text-[#f4cb56]">Head Lights</p>
                        <p className="text-[#f4cb56]">Air Filter</p>
                        <p>Oil Filter</p>
                        <p className="text-[#f4cb56]">Anti-Freeze / Coolant</p>
                        <p>Power Steering Fluid</p>
                        <p>Windshield Wiper Fluid</p>
                        <p>Post Level Oil Check</p>
                        <p>Next Visit Oil Change Reminder</p>
                        <p className="text-[#128bee]">Car Wash</p>
                    </a>
                    <p className="pt-12 pb-5 text-sm text-[#f4cb56]">*At Additional Cost</p>
                    <p className="text-sm text-[#128bee]">*Free basic car wash. Can be upgraded at a discounted rate or recieve raincheck for another date</p>
                </div>
            </div>
            <div className="bg-[#f4cb56] w-full h-1" />
            <div>
                <h1 className="text-center pt-12 pb-12 font-bold text-4xl">Full Synthetic Loyalty Program</h1>
                <div className="flex flex-col items-center justify-center pb-12 font-bold text-center text-xl p-5">
                    <p className="text-md pb-12">For customers loyal to keeping the car running as good as the day it first turned on</p>
                    <p className="py-2">
                        <a className="font-bold justify-between text-[#f4cb56]">&#x2713; </a>
                        Get your free wash upgraded to our signature Jersey
                        <a className="text-[#128bee]"> Shine </a>
                        wash at no additional cost with every oil change
                    </p>
                    <p className="py-2">
                        <a className="font-bold justify-between text-[#f4cb56]">&#x2713; </a>
                        Get a free Air Filter on your 4th
                        <a className="text-[#f4cb56]"> Consecutive </a>
                        visit
                    </p>
                    <p className="py-2">
                        <a className="font-bold justify-between text-[#f4cb56]">&#x2713; </a>
                        Experience our
                        <a className="text-[#00a86b]"> Interior Supreme </a>
                        express detail for free on your 5th
                        <a className="text-[#f4cb56]"> Consecutive </a>
                        visit
                    </p>
                    <p className="pt-12 text-sm text-[#f4cb56]">*Must have each visit be within 7,000 miles to qualify</p>
                </div>
            </div>
            <div className="bg-[#f4cb56] w-full h-1" />
            <div className="flex flex-col w-full items-center justify-center pb-12 p-5 text-xl font-bold text-center">
                <h1 className="text-4xl p-5">Get A Free MONTH of Washes with any Oil Change</h1>
                <h2 className="lg:mx-32 p-5">New to the Car Wash Club? Ask an attendant about getting a membership for a month at no cost with your Oil Change
                </h2>
            </div>
        </div>
    );
}