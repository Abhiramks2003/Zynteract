import React from "react";

import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  BsThreeDots,
  BsFillHeartFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { FaRegComment, FaShare } from "react-icons/fa";
import "../App.css";

export default function Posts() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Card className="w-full flex-shrink-0 mb-4 border-2">
        <CardBody className="text-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 py-1 bg-transparent">
              <Avatar
                src="/img/face-2.jpg"
                className="bg-red-500"
                alt="avatar"
              />
              <div>
                <Typography variant="h6">Tania Andrew</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Web Developer
                </Typography>
              </div>
            </div>

            <Menu>
              <MenuHandler>
                <Button variant="text">
                  <BsThreeDots
                    type="button"
                    className="hover:text-blue-500 rounded-full"
                    size={25}
                  />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <iframe src="" className="w-full h-96 my-2 bg-black rounded-md" />
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <IconButton
                variant="text"
                className="rounded-full text-gray-300 focus:text-red-500"
              >
                <BsFillHeartFill size={24} className="" />
              </IconButton>
              <IconButton
                variant="text"
                onClick={handleOpen}
                className="rounded-full hover:text-blue-500"
              >
                <FaRegComment size={24} className=" " />
              </IconButton>
              <Dialog size="xl"  open={open} handler={handleOpen}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody divider>
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>
              <IconButton
                variant="text"
                className="rounded-full hover:text-blue-500"
              >
                <FaShare size={24} className=" " />
              </IconButton>
            </div>
            <IconButton
              variant="text"
              className="rounded-full focus:text-blue-500"
            >
              <BsFillBookmarkFill size={24} />
            </IconButton>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-2">
              <Avatar
                size="xs"
                variant="circular"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <Avatar
                size="xs"
                variant="circular"
                alt="user 2"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              />
              <Avatar
                size="xs"
                variant="circular"
                alt="user 3"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
            </div>
            <div className="flex gap-1 text-xs">
              <span>Liked by </span>
              <span className=" font-bold">a_b_r_m_03</span>
              <span>and </span>
              <span className=" font-bold">2000 others</span>
            </div>
          </div>
          <div className="text-start my-1">
            <span className="text-black">
              <span className="font-bold h-fit pr-2">gsk</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam doloremque ullam
            </span>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
