import Image from "next/image";
import { ReactElement } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMobile } from "../../utils/Hooks";
import HamburgerMenu from "../Navbar/HamburgerMenu";

interface Navbar {
  navbarBackground: "transparent" | "blur" | "default";
}

const navbarBackgroundStyles = {
  blur: "backdrop-filter backdrop-blur-xl bg-black bg-opacity-10",
  transparent: "bg-transparent",
  default: "bg-primary",
};

const categories = ["Buy", "Visit", "Build"];

const Navbar = ({ navbarBackground = "default" }: Navbar): ReactElement => {
  const router = useRouter();
  const isMobile = useMobile();

  return (
    <header
      className={`w-full text-gray-100 fixed z-30 top-0 ${navbarBackgroundStyles[navbarBackground]}`}
    >
      <div className="lg:container mx-auto flex items-center py-4 lg:py-8">
        <Link href={`/`}>
          <a>
            <span className="text-lg font-bold mx-4 lg:mx-8">Houses</span>
          </a>
        </Link>
        {categories.map((category: string) => {
          const path = category.toLowerCase();
          return (
            <span
              key={category}
              className={`${
                router.asPath === `/${path}`
                  ? "bg-gray-700 text-gray-100 rounded-full"
                  : "bg-none text-gray-400"
              } hidden lg:block text-sm px-4 py-2 mx-4`}
            >
              <Link href={`/${path}`}>{category}</Link>
            </span>
          );
        })}
        <div className="flex items-center bg-gray-700 rounded-full px-2 py-2 w-auto lg:w-[15rem] mx-0 lg:mx-auto ml-auto">
          <input
            type="text"
            className="hidden lg:block w-full py-1 border-none outline-none bg-transparent text-sm ml-2"
            autoComplete="off"
            placeholder="Search location"
          ></input>
          <span className="flex items-center justify-center rounded-full p-2 bg-red-500 h-full cursor-pointer active:scale-95">
            <FiSearch className="text-white text-lg" />
          </span>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
