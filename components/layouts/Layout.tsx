import { ReactElement } from "react";
import Navbar from "../global/Navbar";

const Layout = ({ children }: { children: Array<ReactElement> }) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="lg:container mx-auto px-3 mt-32">{children}</div>
    </div>
  );
};

export default Layout;
