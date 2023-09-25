import { Navbar, Avatar } from "@material-tailwind/react";
import "../App.css";
export default function Stories() {
  const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

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
          <Avatar
            key={index}
            src="/img/face-2.jpg"
            color="blue"
            alt="avatar"
            size="xl"
            withBorder={true}
            className="p-0.5 flex-shrink-0"
          />
        ))}
      </div>
    </Navbar>
  );
}
