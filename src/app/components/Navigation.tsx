import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Navigation() {
    return (
        <div className="">
            <div className="h-4 bg-[#128bee]" />
            <div className="max-lg:hidden">
                <Navbar />
            </div>
            <div className="lg:hidden">
                <Sidebar />
            </div>
            <div className="h-4 bg-[#f4cb56]" />
        </div>
    );
}