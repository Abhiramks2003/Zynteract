import { GoHome } from "react-icons/go";
import { BiMessageSquare } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <footer className="w-full bottom-0 border-t-2 fixed p-2 bg-white flex md:hidden justify-around items-center">
      <Link to="/">
        <GoHome size={25} />
      </Link>
      <Link to="/explore">
        <FiSearch size={25} />
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
