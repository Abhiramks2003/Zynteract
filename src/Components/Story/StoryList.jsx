import { useNavigate } from "react-router-dom";
import { Navbar, Avatar } from "@material-tailwind/react";
import "../../App.css";

export default function StoryList() {
  const arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100));
  const navigate = useNavigate();
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
              onClick={() => { navigate("/stories") }}
              withBorder={true}
              className="p-0.5 flex-shrink-0 cursor-pointer"
            />
          </>
        ))}
      </div>
    </Navbar>
  );
}
