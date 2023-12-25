import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Activity from "./Activity";
import Messages from "./Message/Messages";
import Posts from "./Posts";
import Story from "./Story";


export default function HomePage() {
  const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState([]);
  const getPostItems = async () => {
    try {
      const host = "https://tellus-1kkz.onrender.com";
      const userId = localStorage.getItem("userId");
      let url = `${host}/api/post/${userId}`;
      const res = await axios.get(url);
      console.log(res.data);
      setPostData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPostItems();
  }, []);

  return (
    <div className="flex justify-evenly">
      <div className="hidden md:flex flex-col items-center w-80 flex-shrink-0">
        <Messages />
      </div>

      <div className="flex flex-col justify-start items-center w-full md:w-[600px] flex-shrink-0 h-full md:h-[87vh] scroll-post">
        <Story />
        {postData.map((data, index) => (
          <Posts key={index} data={data} />
        ))}
      </div>
      <div className="hidden md:flex flex-col items-center w-80 flex-shrink-0">
        <Activity />
      </div>
    </div>
  );
}
