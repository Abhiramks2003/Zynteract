import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoPowerOutline } from "react-icons/io5";

export default function ProfileMenu() {
  const navigate = useNavigate();
  const base64Data = localStorage.getItem("image");
  const mimetype = localStorage.getItem("imgtype");
  const handleSignout = () => {
    localStorage.clear();
    navigate("/authentication");
  };
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer ml-6"
          src={`data:${mimetype};base64,${base64Data}`}
        />
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <Link to="/profile:id" className="flex items-center gap-2">
            <CgProfile className="hover:text-blue-500" size={20} />
            <Typography variant="small" className="font-normal font-poppins">
              My Profile
            </Typography>
          </Link>
        </MenuItem>

        <MenuItem className="flex items-center gap-2">
          <IoSettingsOutline className="hover:text-green-500" size={20} />
          <Typography variant="small" className="font-normal font-poppins">
            Edit Profile
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2" onClick={handleSignout}>
          <IoPowerOutline className="hover:text-red-500" size={20} />
          <Typography onClick={handleSignout} variant="small" className="font-normal font-poppins">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}