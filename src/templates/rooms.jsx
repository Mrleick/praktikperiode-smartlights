import Cards from "../components/cards";
import Bed from "../assets/bed.png";
import Room from "../assets/room.png";
import Kitchen from "../assets/kitchen.png";
import Bathroom from "../assets/bathtube.png";
import Outdoor from "../assets/house.png";
import Balcony from "../assets/balcony.png";

const Rooms = () => {
  return (
    <>
      <div className="bg-cardcontainer flex flex-wrap rounded-t-[30px] p-[25px] justify-center gap-[24px] mt-[20px]">
        <h2 className="text-[19px] font-bold w-full text-cardheader">
          All Rooms
        </h2>
        <Cards imgSrc={Bed} />
        <Cards imgSrc={Room} />
        <Cards imgSrc={Kitchen} />
        <Cards imgSrc={Bathroom} />
        <Cards imgSrc={Outdoor} />
        <Cards imgSrc={Balcony} />
      </div>
    </>
  );
};

export default Rooms;
