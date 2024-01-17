import { HiOutlineLightBulb } from "react-icons/hi";
import Header from "../components/Header";

const Scenes = () => {
  const buttons = [
    { title: "Birthday", color: "bg-[#FF9B9B]" },
    { title: "Party", color: "bg-[#A693EB]" },
    { title: "Relax", color: "bg-[#93CAEB]" },
    { title: "Fun", color: "bg-[#89DD94]" },
  ];

  return (
    <>
      <Header title="Scenes" color="text-background-header" />
      <div className="flex flex-wrap justify-between mb-[63px]">
        {buttons.map((button, index) => (
          <div
            key={index}
            className={`flex items-center ${button.color} w-[150px] h-[55px] text-white px-4 rounded-xl mb-[20px] cursor-pointer`}
          >
            <HiOutlineLightBulb className="text-2xl mr-3" />
            <p className="font-bold">{button.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Scenes;
