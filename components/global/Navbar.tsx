import { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Navbar {
  navbarBackground: "transparent" | "blur" | "default";
}

const navbarBackgroundStyles = {
  blur: "backdrop-filter backdrop-blur-xl bg-black bg-opacity-10",
  transparent: "bg-transparent",
  default: "bg-transparent",
};

const categories = ["Buy", "Visit", "Build"];

const Navbar = ({ navbarBackground = "default" }: Navbar): ReactElement => {
  const router = useRouter();  

  return (
    <header
      className={`w-full text-gray-700 fixed z-30 top-0 ${navbarBackgroundStyles[navbarBackground]}`}
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
                  : "bg-none text-gray-600"
              } hidden lg:block text-sm px-4 py-2 mx-4`}
            >
              <Link href={`/${path}`}>{category}</Link>
            </span>
          );
        })}         
      </div>
    </header>
  );
};

export default Navbar;
