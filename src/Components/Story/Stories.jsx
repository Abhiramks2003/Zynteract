import {
  Carousel,
  Avatar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
const Stories = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex flex-col p-2 rounded-lg bg-gray-200">
        <div className="flex justify-between w-screen  md:w-80 items-center">
          <div className="flex items-center gap-4 p-1">
            <MdOutlineArrowBack className="md:hidden block" size={25} />

            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
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
          <div>
            <IconButton variant="text" className="rounded-full hover:text-blue-500">
              <BsThreeDotsVertical size={25} />
            </IconButton>
          </div>
        </div>
        <Carousel className="rounded-xl w-full md:w-80 h-fit aspect-[9/16]">
          <div className="bg-green-200 h-full">
            <img
              src="https://images..unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              src="https://images..unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              src="https://images..unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Stories;
