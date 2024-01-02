import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import TopMenu from "./Components/TopMenu";
import HomePage from "./Components/HomePage";
import Activity from "./Components/Activity";
import FooterMenu from "./Components/FooterMenu";
import Messages from "./Components/Message/Messages";
import Explore from "./Components/Explore";
import Profile from "./Profile";
import Auth from "./Authentication/Auth";
import Chat from "./Components/Chat";
import Stories from "./Components/Story/Stories";

function App() {
  return (
    <div className="m-0 p-0 overflow-hidden font-poppins">
      <Router>
        <TopMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authentication" element={<Auth />} />
          <Route path="/profile:id" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        <FooterMenu />
      </Router>
    </div>
  );
}

export default App;
