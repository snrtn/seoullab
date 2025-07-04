import { Link } from "react-router-dom";
import navIcons from "./navIcons.styles";

const NavIcons = () => {
  return (
    <div className={navIcons.container}>
      <Link
        target="_blank"
        to="https://widget.thefork.com/152f5889-d257-457e-8f85-343b0e00a500"
        rel="The Fork, Restaurant Seoul Lab à Paris  "
        className={navIcons.link}
        title="The Fork, Restaurant Seoul Lab à Paris  "
      >
        Réservation
      </Link>
    </div>
  );
};

export default NavIcons;
