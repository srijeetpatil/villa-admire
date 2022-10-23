import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ListingCard = () => {
  return (
    <div className="col-span-3 cursor-pointer">
      <div className="relative w-full h-64">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=1200"
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
