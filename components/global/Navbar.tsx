import Image from "next/image";
import { ReactElement } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const Navbar = (): ReactElement => {
  return (
    <header className="w-full text-gray-100 fixed z-10 top-0 bg-transparent">
      <div className="lg:container mx-auto flex items-center py-8">
        <span className="text-lg font-bold mx-8">Villa Marketplace</span>
        <span className="text-sm mx-8">Buy</span>
        <span className="text-sm mx-8">Visit</span>
        <span className="text-sm mx-8">Build</span>
        <div className="flex items-center bg-gray-700 rounded-full px-2 py-2 w-[15rem] mx-auto">
          <input
            type="text"
            className="w-full py-1 border-none outline-none bg-transparent text-sm ml-2"
            autoComplete="off"
            placeholder="Search location"
          ></input>
          <span className="flex items-center justify-center rounded-full p-2 bg-red-500 h-full cursor-pointer">
            <FiSearch className="text-white text-lg" />
          </span>
        </div>
        <div className="flex px-2 py-2 rounded-full relative ml-auto items-center bg-gray-700 cursor-pointer">
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU"
            }
            alt={"Profile image"}
            layout="fixed"
            width={30}
            height={30}
            className="rounded-full"
          />
          <GiHamburgerMenu className="mx-3 text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
