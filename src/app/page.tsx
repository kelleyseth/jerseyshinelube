import Image from "next/image";
import Slideshow from "./components/Slideshow";
import Infocard from "./components/Infocard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div>
        <Slideshow />
      </div>
      <p className="p-10 text-center text-4xl lg:text-5xl font-bold">
        Everything Your Car <a className="text-[#128bee]">Needs!</a>
      </p>
      <div className="mb-16 grid text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:justify-between items-top lg:pt-8">
        <Infocard link="/washservices" title="Unlimited Monthly Washes" info="Getting your car washed more than once a month? Consider Signing up for our car wash club to save money!!!" />
        <Infocard link="/oilchangeservices" title="Full Synthetic Program" info="Start getting full synthetic oil changes with us and recieve free rewards!" />
        <Infocard link="/detailservices" title="Complete Detailing" info="Does your car need some special care and attention to detail? Does it need to look good and pristine for that special occassion? Call and schedule an appointment!" />
      </div>
    </main>
  );
}
