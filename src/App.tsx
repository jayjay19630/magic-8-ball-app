import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Profile from "./components/ProfileIcon/ProfileIcon";

const usingBackend = process.env.USING_BACKEND == "TRUE" ? true : false;

function App() {
  return (
    <>
      {usingBackend && (
        <div className="sidebar-and-profile">
          <Sidebar></Sidebar>
          <Profile username={"Jonathan"}></Profile>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
