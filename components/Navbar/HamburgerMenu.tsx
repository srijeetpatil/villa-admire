import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dropdown, Divider } from "antd";

const items = [
  {
    label: "Liked",
    key: "0",
  },
  {
    label: "Saved",
    key: "1",
  },
  { type: "divider" },
  {
    label: "Sign out",
    key: "3",
  },
];

const HamburgerMenu = () => {
  return (
    <Dropdown
      trigger={["click"]}
      dropdownRender={() => (
        <div className="flex flex-col rounded-lg text-gray-200 bg-gray-700 mt-1 mr-8 overflow-hidden">
          {items.map((item) => (
            <>
              {item.type === "divider" ? (
                <Divider className="bg-gray-400 m-0" />
              ) : (
                <span className="px-4 py-1.5 cursor-pointer hover:bg-gray-800">
                  {item.label}
                </span>
              )}
            </>
          ))}
        </div>
      )}
    >
      <div className="relative z-50">
        <div className="flex px-2 py-2 rounded-full relative mx-4 lg:mx-8 items-center bg-gray-700 cursor-pointer">
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
          <GiHamburgerMenu className="hidden lg:block mx-3 text-xl" />
        </div>
      </div>
    </Dropdown>
  );
};

export default HamburgerMenu;
