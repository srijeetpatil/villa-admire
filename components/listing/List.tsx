import { useState } from "react";
import ListingCard from "./ListingCard";

const List = () => {
  const [activeCities, setActiveCities] = useState<Array<string>>([]);

  return (
    <>      
      <div className="mt-24 lg:mt-28 lg:container px-3 mx-auto grid grid-cols-12 gap-5 pb-32">
        {Array.apply(0, Array(8)).map((arr, index) => (
          <ListingCard key={index} />
        ))}
      </div>
    </>
  );
};

export default List;
