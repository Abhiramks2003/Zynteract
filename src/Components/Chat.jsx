import Messages from "./Messages";
import {
  Badge,
  Typography,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import { CiSearch, CiVideoOn } from "react-icons/ci";
import { BsThreeDots, BsTelephone, BsChevronLeft } from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";

const Chat = () => {
  const location = useLocation();
  const { a } = location.state || {};

  return (
    <div className="flex justify-evenly overflow-hidden">
      <div className="hidden md:flex flex-col items-center flex-shrink-0 h-96">
        <Messages />
      </div>
      <div className="w-full my-1 h-[86vh]">
        <div className="flex items-center justify-between md:mx-8 my-2 border-b-2">
          <div className="flex items-center">
            <IconButton
              variant="text"
              className="rounded-full block md:hidden"
            >
              <Link to="/messages">
                <BsChevronLeft size={25} className="" />
              </Link>
            </IconButton>

            <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100">
              <Badge
                color="green"
                withBorder
                overlap="circular"
                placement="bottom-end"
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  alt="profile picture"
                />
              </Badge>
              <div>
                <Typography variant="h6" className="font-poppins">
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal font-poppins"
                >
                  Web Developer
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex items-center md:gap-4">
            <Menu placement="bottom-end">
              <MenuHandler>
                <Button size="sm" className="rounded-full font-poppins">
                  Call
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem className="flex justify-between items-center">
                  <span>Voice</span>
                  <BsTelephone size={16} />
                </MenuItem>
                <MenuItem className="flex justify-between items-center">
                  <span>Video</span>
                  <CiVideoOn size={16} />
                </MenuItem>
              </MenuList>
            </Menu>
            <Tooltip content="Search" placement="bottom-start">
              <IconButton variant="text">
                <CiSearch
                  className="hover:text-blue-500 cursor-pointer"
                  size={25}
                />
              </IconButton>
            </Tooltip>
            <Menu placement="bottom-end">
              <MenuHandler>
                <IconButton variant="text">
                  <BsThreeDots
                    className="hover:text-blue-500 cursor-pointer"
                    size={25}
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="overflow-y-scroll flex flex-col items-center h-screen md:h-[75vh] bg-gray-200">
          <Chip
            variant="outlined"
            value="01 January 2024"
            className="rounded-full w-fit my-2 border-blue-500 font-poppins"
          />
          <div>{a}</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
