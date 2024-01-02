import React from "react";
import Messages from "./Message/Messages";
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
  Drawer,
  Textarea,
} from "@material-tailwind/react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { CiSearch, CiVideoOn, CiFaceSmile } from "react-icons/ci";
import { BsThreeDots, BsTelephone, BsChevronLeft } from "react-icons/bs";
import { VscSend, VscChromeClose } from "react-icons/vsc";
import { FaPaperclip } from "react-icons/fa6";

const Chat = () => {
  const location = useLocation();
  const { a } = location.state || {};
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="flex justify-evenly h-full">
      <div className="hidden w-80 mx-8 md:flex flex-col items-center flex-shrink-0 h-96">
        <Messages />
      </div>
      <div className="flex flex-col w-full md:my-1 h-screen md:h-full">
        <div className="flex items-center justify-between md:mx-8 my-2 border-b-2">

          <div className="flex items-center">
            <IconButton variant="text" className="rounded-full block md:hidden">
              <Link to="/messages">
                <BsChevronLeft size={25} />
              </Link>
            </IconButton>

            <div
              onClick={() => {
                navigate("/profile:id");
              }}
              className="flex items-center mb-1 gap-4 p-0.5 md:p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <Badge
                color="green"
                withBorder
                overlap="circular"
                placement="bottom-end"
              >
                <Avatar
                  className="bg-black"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  alt="profile picture"
                />
              </Badge>
              <div>
                <Typography
                  variant="small"
                  className="font-poppins font-bold md:text-xl"
                >
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal font-poppins"
                >
                  Online
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
                <MenuItem className="font-poppins" onClick={openDrawer}>
                  Info
                </MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <Drawer
          placement="right"
          open={open}
          onClose={closeDrawer}
          className="p-4"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography className="font-poppins" variant="h5" color="blue-gray">
              Info
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <VscChromeClose size={20} />
            </IconButton>
          </div>
        </Drawer>

        <div className="overflow-y-scroll flex flex-col items-center h-full md:h-[64vh]">
          <Chip
            variant="outlined"
            value="01 January 2024"
            className="rounded-full w-fit my-2 border-blue-500 font-poppins"
          />
          <div>{a}</div>
        </div>

        <div className="flex w-full bg-gray-200 flex-row mb-2 items-center gap-2 rounded-[99px] border border-gray-900/10 p-2">
          <div className="flex">
            <IconButton variant="text" className="rounded-full">
              <FaPaperclip size={25} />
            </IconButton>
            <IconButton variant="text" className="rounded-full">
              <CiFaceSmile size={25} />
            </IconButton>
          </div>
          <Textarea
            rows={1}
            resize={true}
            placeholder="Your Message"
            className="min-h-full !border-0 focus:border-transparent font-poppins"
            containerProps={{
              className: "grid h-full font-poppins",
            }}
            labelProps={{
              className: "before:content-none after:content-none font-poppins",
            }}
          />
          <div>
            <IconButton color="blue" className="rounded-full">
              <VscSend size={25} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
