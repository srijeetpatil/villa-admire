import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ListingCard = () => {
  return (
    <div className="col-span-3 cursor-pointer">
      <div className="relative w-full h-64">
        <Image
          src={
            "https://media.cntraveler.com/photos/53db2c146dec627b14a1fbe1/master/w_1024,h_768,c_limit/white-lodge-kalkan-turkey-matthew-simpson-1.jpg"
          }
          objectFit="cover"
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-12">
          <span className="col-span-10 text-gray-100">Jibhi, India</span>
          <span className="flex items-center col-span-2 text-gray-100">
            <AiFillStar className="text-gray-100"/> <span className="ml-2">4.8</span>
          </span>
          <span className="col-span-12 text-gray-400 text-sm mt-1">1,324 Kms away</span>
          <span className="col-span-12 text-gray-400 text-sm mt-1">17-24 October</span>
          <span className="col-span-12 text-white mt-1">₹ 4,000 night</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
