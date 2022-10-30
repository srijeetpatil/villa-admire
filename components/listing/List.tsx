import { useState } from "react";
import ListingCard from "./ListingCard";
import Farmhouse from "../../public/assets/img/listing/farmhouse.svg";
import Estate from "../../public/assets/img/listing/estate.svg";
import Cottage from "../../public/assets/img/listing/cottage.svg";
import Cabin from "../../public/assets/img/listing/cabin.svg";

const List = () => {
  const [activeCities, setActiveCities] = useState<Array<string>>([]);

  return (
    <>
      <div className="sticky top-24 z-10 flex items-center lg:container mx-auto px-3 text-gray-100 text-xs mt-24 py-8 bg-primary">
        <div className="flex flex-col items-center active:scale-95 mr-4 w-[6%]">
          <div className="w-8 h-8 fill-gray-200 cursor-pointer">
            <Farmhouse />
          </div>
          <span className="text-xxs mt-2">Farm house</span>
        </div>
        <div className="flex flex-col items-center active:scale-95 mx-4 w-[6%]">
          <div className="w-8 h-8 fill-gray-200 cursor-pointer">
            <Estate />
          </div>
          <span className="text-xxs mt-2">Private Estate</span>
        </div>
        <div className="flex flex-col items-center active:scale-95 mx-4 w-[6%]">
          <div className="w-8 h-8 fill-gray-200 cursor-pointer">
            <Cottage />
          </div>
          <span className="text-xxs mt-2">Cottage</span>
        </div>
        <div className="flex flex-col items-center active:scale-95 mx-4 w-[6%]">
          <div className="w-8 h-8 fill-gray-200 cursor-pointer">
            <Cabin />
          </div>
          <span className="text-xxs mt-2">Cabin</span>
        </div>
      </div>
      <div className="lg:container px-3 mx-auto grid grid-cols-12 gap-5 pb-32">
        {Array.apply(0, Array(8)).map((arr, index) => (
          <ListingCard key={index} />
        ))}
      </div>
    </>
  );
};

export default List;
