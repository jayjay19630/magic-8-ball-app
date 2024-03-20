import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Sidebar } from "./components/general/Sidebar/Sidebar";
import Profile from "./components/general/ProfileIcon/ProfileIcon";
import SignupButton from "./components/general/SignupButton/SignupButton";
import LoginButton from "./components/general/LoginButton/LoginButton";
import { useState } from "react";
import SignupCard from "./components/home/SignupCard/SignupCard";
import LoginCard from "./components/home/LoginCard/LoginCard";

const usingBackend = process.env.USING_BACKEND == "TRUE" ? true : false;

enum PopUpType {
  "SIGNUP",
  "LOGIN",
  "NULL",
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupType, setPopupType] = useState<PopUpType>(PopUpType.NULL);
  const isLoggedIn = true;

  const handleSignupOpen = () => {
    setPopupType(PopUpType.SIGNUP);
    setIsOpen(true);
  };

  const handleLoginOpen = () => {
    setPopupType(PopUpType.LOGIN);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setPopupType(PopUpType.NULL);
  };

  return (
    <div className={!isOpen ? "background-default" : "background-overlay"}>
      {usingBackend && (
        <div className="sidebar-and-profile">
          <Sidebar></Sidebar>
          {isLoggedIn ? (
            <Profile username={"Jonathan"}></Profile>
          ) : (
            <div>
              <SignupButton onClick={handleSignupOpen} />
              <LoginButton onClick={handleLoginOpen} />
            </div>
          )}
        </div>
      )}
      {}
      {isOpen && popupType === PopUpType.SIGNUP && (
        <SignupCard open={isOpen} onClose={handleClose}></SignupCard>
      )}
      {isOpen && popupType === PopUpType.LOGIN && (
        <LoginCard open={isOpen} onClose={handleClose}></LoginCard>
      )}
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
