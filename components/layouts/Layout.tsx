import { ReactElement } from "react";
import Navbar from "../global/Navbar";

type LayoutProps = {
  children: Array<ReactElement> | ReactElement;
  navbarBackground?: "transparent" | "blur" | "default";
};

const Layout = ({ children, navbarBackground = "default" }: LayoutProps) => {
  return (
    <div className="w-full">
      <Navbar navbarBackground={navbarBackground} />
      {children}
    </div>
  );
};

export default Layout;
