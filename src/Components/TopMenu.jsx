import React from "react";
import {
  Navbar,
  Input,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { CiSearch, CiGlobe } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";
import ProfileMenu from "./ProfileMenu";
import { Link, useLocation } from "react-router-dom";

const TopMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const location = useLocation();
  let currentRoute = location.pathname.split(":")[0];
  let routesArray = ["/", "/profile:id", "/activity"];
  return (
    <>
      <Navbar
        fullWidth
        className={`mx-auto py-1.5 px-4 ${
          routesArray.includes(currentRoute) ? "block" : "hidden"
        } md:${currentRoute === "/stories" ? "hidden" : "block"}`}
      >
        <div className="container mx-auto flex gap-2 items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography
              type="button"
              variant="h4"
              className="whitespace-nowrap font-poppins"
            >
              Zynteract
            </Typography>
          </Link>
          <div
            className={`w-96 hidden rounded-full md:${
              location.pathname.split(":")[0] === "/profile"
                ? "hidden"
                : "block"
            }`}
          >
            <Input
              color="blue"
              label="Explore"
              variant="outlined"
              icon={
                <CiSearch
                  type="button"
                  className="hover:text-blue-500"
                  size={24}
                />
              }
            />
          </div>
          <div className="flex gap-3 items-center">
            <IconButton
              onClick={handleOpen}
              className="rounded-full bg-blue-500"
            >
              <MdOutlineAddBox size={24} />
            </IconButton>
            <Dialog size="xl" open={open} handler={handleOpen}>
              <DialogHeader>Its a simple dialog.</DialogHeader>
              <DialogBody divider>
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
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
            <IconButton className="rounded-full bg-blue-500 hidden md:block">
              <Link to="/explore">
                <CiGlobe size={24} />
              </Link>
            </IconButton>
            <ProfileMenu />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default TopMenu;
