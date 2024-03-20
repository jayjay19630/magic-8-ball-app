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
  SIGNUP = 0,
  LOGIN = 1,
  NULL = 2,
}

export enum CurrentPage {
  HOME = 0,
  CHATHISTORY = 1,
  PREDICTION = 2,
  PROFILE = 3,
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupType, setPopupType] = useState<PopUpType>(PopUpType.NULL);
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.HOME);
  const isLoggedIn = false;

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
          <Sidebar
            handleLoginOpen={handleLoginOpen}
            isLoggedIn={isLoggedIn}
            currentPage={currentPage}
          ></Sidebar>
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
