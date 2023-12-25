import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import TopMenu from "./Components/TopMenu";
import HomePage from "./Components/HomePage";
import Activity from "./Components/Activity";
import FooterMenu from "./Components/FooterMenu";
import Messages from "./Components/Message/Messages";
import Explore from "./Components/Explore";
import Profile from "./Profile";
import Auth from "./Authentication/Auth";
import DraggableDiv from "./Components/DraggableDiv";
import Chat from "./Components/Chat";

function App() {

  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/"; // Redirect to the root route on every reload if not already on '/'
    }
  }, []);

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
          <Route path="/experiment" element={<DraggableDiv />} />
        </Routes>
        <FooterMenu />
      </Router>
    </div>
  );
}

export default App;
