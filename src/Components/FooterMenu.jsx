import { GoHome } from "react-icons/go";
import { BiMessageSquare } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const FooterMenu = () => {
  const location = useLocation();
  let routeArray = ["/chat", "/messages", "/stories"];
  return (
    <footer className={`w-full z-10 bottom-0 border-t-2 fixed p-2 bg-white ${routeArray.includes(location.pathname) ? "hidden" : "flex"}  md:hidden justify-around items-center`}>
      <Link to="/">
        <GoHome size={25} />
      </Link>
      <Link to="/explore">
        <CiGlobe size={25} />
      </Link>
      <Link to="/messages">
        <BiMessageSquare size={25} />
      </Link>
      <Link to="/activity">
        <RiNotification2Line size={25} />
      </Link>
    </footer>
  );
};

export default FooterMenu;
