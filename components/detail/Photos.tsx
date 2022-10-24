import Image from "next/image";

const Photos = () => {
  return (
    <div className="grid grid-cols-12 gap-3 w-full h-[60vh] rounded-xl overflow-hidden">
      <div className="col-span-6 relative h-full">
        <Image
          src={
            "https://www.thearowanavilla.com/images/gallery/Igatpuri/ig1.jpeg"
          }
          alt={"Villa Image"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="grid grid-cols-12 col-span-6 h-full gap-3">
        <div className="col-span-6 relative">
          <Image
            src={
              "https://a0.muscache.com/im/pictures/1a284fe1-9332-412d-9635-4fefb3ca124d.jpg?im_w=720"
            }
            alt={"Villa Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-6 relative">
          <Image
            src={
              "https://a0.muscache.com/im/pictures/c6ffa85d-ef71-46a1-8ab2-8ed86bb51138.jpg?im_w=720"
            }
            alt={"Villa Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-6 relative">
          <Image
            src={
              "https://a0.muscache.com/im/pictures/876d422d-5537-4ea8-8b10-026e5d7bcfd5.jpg?im_w=720"
            }
            alt={"Villa Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-6 relative">
          <Image
            src={
              "https://www.thearowanavilla.com/images/gallery/Igatpuri/ig1.jpeg"
            }
            alt={"Villa Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
