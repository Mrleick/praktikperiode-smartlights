import React from "react";
import Cards from "../components/cards";
import Header from "../components/Header";

const Rooms = () => {
  const buttonsData = [
    { name: "Bed Room", imageSrc: "src/assets/bed.png", lightsCount: 4 },
    { name: "Living Room", imageSrc: "src/assets/room.png", lightsCount: 2 },
    { name: "Kitchen", imageSrc: "src/assets/kitchen.png", lightsCount: 5 },
    { name: "Bathroom", imageSrc: "src/assets/bathtube.png", lightsCount: 1 },
    { name: "Outdoor", imageSrc: "src/assets/house.png", lightsCount: 5 },
    { name: "Balcony", imageSrc: "src/assets/balcony.png", lightsCount: 2 },
  ];

  return (
    <div className="bg-background-default rounded-t-[30px] p-[25px]">
      <Header title="All Rooms" />
      <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
        {buttonsData.map(({ name, imageSrc, lightsCount }, index) => (
          <Cards
            key={index}
            image={imageSrc}
            title={name}
            lightsCount={lightsCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
