import Image from "next/image";
import { ReactElement } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

interface Navbar {
  navbarBackground: "transparent" | "blur" | "default";
}

const navbarBackgroundStyles = {
  blur: "backdrop-filter backdrop-blur-xl bg-black bg-opacity-10",
  transparent: "bg-transparent",
  default: "bg-primary",
};

const Navbar = ({ navbarBackground = "default" }: Navbar): ReactElement => {
  return (
    <header
      className={`w-full text-gray-100 fixed z-10 top-0 ${navbarBackgroundStyles[navbarBackground]}`}
    >
      <div className="lg:container mx-auto flex items-center py-8">
        <Link href={`/`}>
          <a>
            <span className="text-lg font-bold mx-8 ">Villa Admire</span>
          </a>
        </Link>
        <span className="text-sm mx-8 text-gray-400">Buy</span>
        <span className="text-sm mx-8 text-gray-400">Visit</span>
        <span className="text-sm mx-8 text-gray-400">Build</span>
        <div className="flex items-center bg-gray-700 rounded-full px-2 py-2 w-[15rem] mx-auto">
          <input
            type="text"
            className="w-full py-1 border-none outline-none bg-transparent text-sm ml-2"
            autoComplete="off"
            placeholder="Search location"
          ></input>
          <span className="flex items-center justify-center rounded-full p-2 bg-red-500 h-full cursor-pointer active:scale-95">
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
