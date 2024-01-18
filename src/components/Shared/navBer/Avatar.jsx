import { useContext } from "react";
import avatarImg from "../../../assets/login/istockphoto-1337144146-612x612.jpg";
import { AuthContext } from "../../../context/Context";

const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <img
      className="rounded-full"
      src={user && user.photoURL ? user.photoURL : avatarImg}
      alt=""
      width="40"
      height="40"
    />
  );
};

export default Avatar;
