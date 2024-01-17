const Cards = ({ image, title, lightsCount }) => {
  return (
    <div className="w-[150px] h-[150px] rounded-xl bg-white drop-shadow-md">
      <div className="pt-[24px] pl-[19px]">
        <img className="mb-[22px]" src={image} alt={`${title} icon`} />
        <p className="font-bold text-[19px]">{title}</p>
        <p className="font-bold text-cardp text-[13px] text-[#FFA939]">
          {lightsCount} lights
        </p>
      </div>
    </div>
  );
};

export default Cards;
