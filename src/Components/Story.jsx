import React from "react";
import {
  Navbar, Avatar,
  Dialog,
  DialogBody,
  DialogFooter,
  Button
} from "@material-tailwind/react";
import "../App.css";

export default function Story() {
  const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <Navbar className="mx-auto my-3 max-w-screen-xl px-6 py-3">
      <div className="flex items-center space-x-2 hide-scroll">
        <Avatar
          src="/img/face-2.jpg"
          color="teal"
          alt="avatar"
          size="xl"
          withBorder={true}
          className="p-0.5 flex-shrink-0"
        />
        {arr.map((a, index) => (
          <>
            <Avatar
              key={index}
              src="/img/face-2.jpg"
              color="blue"
              alt="avatar"
              size="xl"
              withBorder={true}
              onClick={handleOpen}
              className="p-0.5 flex-shrink-0"
            />
          </>
        ))}
        <Dialog open={open} handler={handleOpen}>
          <DialogBody divider>

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
      </div>
    </Navbar>
  );
}
