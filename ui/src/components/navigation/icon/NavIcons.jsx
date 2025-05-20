import { Link } from "react-router-dom";
import navIcons from "./navIcons.styles";

const NavIcons = () => {
  return (
    <div className={navIcons.container}>
      <Link to="/" className={navIcons.link}>
        Réservation
      </Link>
    </div>
  );
};

export default NavIcons;
