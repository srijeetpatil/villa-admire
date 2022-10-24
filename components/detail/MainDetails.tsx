import { IoBed } from "react-icons/io5";
import { RiPinDistanceLine } from "react-icons/ri";

const MainDetails = () => {
  return (
    <div className="grid grid-cols-12 my-10 gap-4">
      <div className="col-span-8">
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

        <h2 className="text-xl font-bold text-gray-200 mt-8">See on map</h2>

        <iframe
          src="https://maps.google.com/maps?q=Vihang%20Farmhouse&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="mt-4 w-full h-96 rounded-xl"
        ></iframe>
      </div>
      <div className="col-span-4"></div>
    </div>
  );
};

export default MainDetails;
