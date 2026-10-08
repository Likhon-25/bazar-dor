import HeroBanner from "@/components/HeroBanner";
import PriceUp from "@/components/PriceUp";


export default function Home() {
  return (
    <div className="">
      <HeroBanner />

      <div className="">
        <div className="container mx-auto">
          <h2>আজ দাম বেড়েছে</h2>
          <PriceUp />
        </div>
        <div className="container mx-auto bg-red-600">
          <h2>আজ দাম বেড়েছে</h2>
        </div>
        <div className="container mx-auto bg-blue-600">
          <h2>আজ দাম বেড়েছে</h2>
        </div>
      </div>
    </div>
  );
}
