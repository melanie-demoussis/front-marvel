import marvel from "../assets/marvel-logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={marvel} alt="MARVEL en blanc sur fond rouge" />
    </header>
  );
};
export default Header;
