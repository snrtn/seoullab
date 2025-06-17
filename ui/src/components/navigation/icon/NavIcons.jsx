import { Link } from "react-router-dom";
import navIcons from "./navIcons.styles";

const NavIcons = () => {
  return (
    <div className={navIcons.container}>
      <Link
        target="_blank"
        to="https://maps.app.goo.gl/RwvTHcSVrxduGeof6"
        rel="The Fork, Restaurant Seoul Lab à Paris  "
        className={navIcons.link}
      >
        Réservation
      </Link>
    </div>
  );
};

export default NavIcons;
