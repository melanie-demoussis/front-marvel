import marvel from "../assets/marvel-logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={marvel} alt="MARVEL en blanc sur fond rouge" />
      <div className="meal">
        <p>Personnages</p>
        <p>Comics</p>
        <p>Favoris</p>
      </div>
    </header>
  );
};
export default Header;
