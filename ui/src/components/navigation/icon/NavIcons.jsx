import { Link } from "react-router-dom";
import navIcons from "./navIcons.styles";

const NavIcons = () => {
  return (
    <div className={navIcons.container}>
      <Link
        target="_blank"
        to="https://www.thefork.fr/restaurant/seoul-lab-r813745?cc=84046-f71&gad_source=1&gad_campaignid=22486558920&gbraid=0AAAAADwhwW0LWMRjRvymSDMT17w1gIoIp&gclid=CjwKCAjw9anCBhAWEiwAqBJ-c2jQynNT-p0p0Hd0MJA6V0EqodeTggBKFVUv07geD08wk45gmGMA-RoCJEYQAvD_BwE&gclsrc=aw.ds"
        rel="The Fork, Restaurant Seoul Lab à Paris  "
        className={navIcons.link}
      >
        Réservation
      </Link>
    </div>
  );
};

export default NavIcons;
