const Cards = ({ imgSrc }) => {
  return (
    <>
      <div className="w-[150px] h-[150px] rounded-xl bg-white drop-shadow-md">
        <div className="pt-[24px] pl-[19px]">
          <img className="mb-[22px]" src={imgSrc} alt="room icon" />
          <p className="font-bold text-[19px]">Bed Room</p>
          <p className="font-bold text-cardp text-[13px]">4 lights</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
