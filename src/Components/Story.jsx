import React from "react";
import {
  Navbar,
  Avatar,
  Dialog,
  DialogBody,
  Carousel,
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
              key={`story_${index}`}
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
            <Carousel
              className="rounded-xl bg-black"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {arr.map((value, index) => (
                <img
                  key={index}
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt={`image-${value+1}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </DialogBody>
        </Dialog>
      </div>
    </Navbar>
  );
}
