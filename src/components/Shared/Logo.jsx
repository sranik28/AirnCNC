import { Link } from "react-router-dom";
import logoImg from "../../assets/logo/images.png";

const Logo = () => {
  return (
    <Link to="/">
      {" "}
      <img
        className="hidden md:block"
        src={logoImg}
        alt=""
        width="110"
        height="110"
      />
    </Link>
  );
};

export default Logo;
