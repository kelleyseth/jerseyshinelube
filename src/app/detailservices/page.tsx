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
            <div className="flex flex-col h-fit bg-[#00a86b] p-8 text-center w-full">
                <h1 className="text-6xl font-bold pt-24 p-5">Bring Your Car Back To Life</h1>
                <p className="text-xl font-bold pb-24">Experience our Full Details and Express Details</p>
            </div>
            <div>
                <h1 className="text-center pt-12 font-bold text-4xl">Full Details</h1>
            </div>
            {/* TODO cards extend past parent when resized */}
            <div className="max-lg:flex-col flex gap-10 items-center w-full justify-center pb-12 p-5">
                <Detailcard pic="/carwashgreen.png" name="Professional" price="160" servicesInt={servicesInt} servicesExt={servicesExt} washInt={proInt} washExt={proExt} />
                <Detailcard pic="/carwashgreen.png" name="Showroom" price="190" servicesInt={servicesInt} servicesExt={servicesExt} washInt={showInt} washExt={showExt} />
            </div>
            <div className="bg-[#00a86b] flex flex-col w-full items-center justify-center py-24 text-center">
                <div className="font-bold text-xl p-5">
                    <p className="text-md">Call ahead and schedule a full detail</p>
                    <p className="text-sm">Needs an appointment for a full day of detailing</p>
                </div>
                <div className="pb-10 p-5 text-xl font-bold">
                    <h2 className="lg:mx-32 p-5">In a rush and can't drop your car off for a day? Go for the Express Details!
                    </h2>
                </div>
            </div>
            <h1 className="text-center pt-12 font-bold text-4xl">Express Details</h1>
            {/* TODO cards extend past parent when resized */}
            <div className="max-lg:flex-col flex gap-10 items-center w-full justify-center p-5">
                <Detailcard pic="/carwashblue.png" name="Int Supreme" price="40" servicesInt={servicesIntSup} servicesExt={servicesExtSup} washInt={intSupInt} washExt={intSupExt} />
                <Detailcard pic="/carwashred.png" name="Ext Supreme" price="40" servicesInt={servicesIntSup} servicesExt={servicesExtSup} washInt={extSupInt} washExt={extSupExt} />
            </div>
            <div className="flex flex-col items-center justify-center pb-24 font-bold text-center text-xl p-5">
                <p className="text-md pb-12">Want the best of both worlds? Get the Interior & Exterior Supreme combo and save money!</p>
                <p className="text-md">Just looking for a Hand Wax? You can add that ontop of any wash</p>
            </div>
        </div>
    );
}