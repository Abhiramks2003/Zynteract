import "../App.css";
import Activity from "./Activity";
import Messages from "./Messages";
import Posts from "./Posts";
import Story from "./Story";
export default function HomePage() {
  const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
  return (
    <div className="flex justify-evenly">
      <div className="hidden md:flex flex-col items-center w-80 flex-shrink-0 h-96">
        <Activity />
      </div>
      <div className="flex flex-col justify-start items-center w-full md:w-[600px] flex-shrink-0 h-full md:h-[600px] scroll-post">
        <Story />
        {arr.map((a, index) => (
          <Posts key={index} />
        ))}
      </div>
      <div className="hidden md:flex flex-col items-center w-80 flex-shrink-0 h-96">
        <Messages />
      </div>
    </div>
  );
}
