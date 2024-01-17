const Header = ({ title, color }) => {
  return <div className={`font-bold text-[19px] ${color}`}>{title}</div>;
};

export default Header;
