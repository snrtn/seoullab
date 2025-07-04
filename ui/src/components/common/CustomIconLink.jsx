import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./customIconLink.css";

const CustomIconLink = ({ to, bgColor, icon: Icon, title }) => {
  const content = (
    <div
      className="custom-icon-link-container"
      style={{ "--bgColor": bgColor }}
    >
      <Icon className="fa" />
    </div>
  );

  return to ? (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      title={title}
    >
      {content}
    </Link>
  ) : (
    content
  );
};

CustomIconLink.propTypes = {
  to: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default CustomIconLink;
