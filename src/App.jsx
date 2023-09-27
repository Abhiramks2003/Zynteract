import "./App.css";
import TopMenu from "./Components/TopMenu";
import HomePage from "./Components/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Activity from "./Components/Activity";
import FooterMenu from "./Components/FooterMenu";
import Messages from "./Components/Messages";
import Explore from "./Components/Explore";
import Profile from "./Profile";
import Auth from "./Authentication/Auth";

function App() {
  const currentPath = localStorage.getItem("currentpath");

  return (
    <div className="m-0 p-0">
      <Router>
        {currentPath !== "/authentication" && <TopMenu />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authentication" element={<Auth />} />
          <Route path="/profile:id" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <FooterMenu />
      </Router>
    </div>
  );
}

export default App;
