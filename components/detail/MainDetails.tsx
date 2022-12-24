import Image from "next/image";
import { IoBed } from "react-icons/io5";
import { RiPinDistanceLine } from "react-icons/ri";

const MainDetails = () => {
  return (
    <div className="grid grid-cols-12 gap-3 w-full">
      <div className="col-span-12 lg:col-span-7 relative h-96 rounded-xl overflow-hidden">
        <Image
          src={
            "https://d31dpzy4bseog7.cloudfront.net/media/2022/10/07160723/Backdune-House-by-Peter-Stutchbury-Architecture-Issue-10-Feature-The-Local-Project-Image-3.jpg"
          }
          alt={"Villa Image"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-12 lg:col-span-5 relative lg:h-max px-4 py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-100">
            Vihang Farmhouse: Florican Room
          </h1>
          <span className="flex items-center mt-2 text-gray-400 text-sm">
            <IoBed className="mr-2" /> 3 guests - 1 bedroom - 2 beds - 1.5
            bathrooms
          </span>
          <span className="flex items-center mt-2 text-gray-400 text-xs">
            <RiPinDistanceLine className="mr-2" />
            345 Kms away
          </span>
        </div>

        <p className="mt-4 text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-5 relative h-96 rounded-xl overflow-hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/c6ffa85d-ef71-46a1-8ab2-8ed86bb51138.jpg?im_w=720"
          }
          alt={"Villa Image"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-12 lg:col-span-7 relative h-96 rounded-xl overflow-hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/876d422d-5537-4ea8-8b10-026e5d7bcfd5.jpg?im_w=720"
          }
          alt={"Villa Image"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-12 lg:col-span-6 relative h-96 rounded-xl overflow-hidden">
        <Image
          src={
            "https://www.thearowanavilla.com/images/gallery/Igatpuri/ig1.jpeg"
          }
          alt={"Villa Image"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-12 lg:col-span-6 relative h-96 rounded-xl overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Vihang%20Farmhouse&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="w-full h-96 rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default MainDetails;
