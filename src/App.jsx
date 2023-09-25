import "./App.css";
import TopMenu from "./Components/TopMenu";
import HomePage from "./Components/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Activity from "./Components/Activity";
import FooterMenu from "./Components/FooterMenu";
import Messages from "./Components/Messages";
function App() {
  return (
    <div>
      <TopMenu />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <FooterMenu />
      </Router>
    </div>
  );
}

export default App;
