import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ListingCard = () => {
  return (
    <div
      className="col-span-12 lg:col-span-4 cursor-pointer"
      onClick={() => {
        window.open("/villa/kd32f", "_blank");
      }}
    >
      <div className="relative w-full h-96">
        <Image
          src={
            "https://media.cntraveler.com/photos/53db2c146dec627b14a1fbe1/master/w_1024,h_768,c_limit/white-lodge-kalkan-turkey-matthew-simpson-1.jpg"
          }
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
        <div className="z-10 absolute bottom-0 mt-4 px-4 py-4 backdrop-blur-xl w-full rounded-xl overflow-hidden">
          <div className="grid grid-cols-12">
            <span className="col-span-10 text-gray-100">Jibhi, India</span>
            <span className="flex items-center col-span-2 text-yellow-400 ml-auto">
              <AiFillStar className="text-yellow-400" />{" "}
              <span className="ml-2">4.8</span>
            </span>
            <span className="col-span-6 text-gray-100 text-sm mt-1">
              1,324 Kms away
            </span>
            <span className="col-span-6 text-gray-100 text-sm mt-1 ml-auto">
              17-24 October
            </span>
            <span className="col-span-12 text-white mt-1">₹ 4,000 night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
