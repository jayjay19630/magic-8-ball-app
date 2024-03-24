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
import { ProfilePage } from "./pages/Profile/Profile";

const usingBackend = process.env.USING_BACKEND == "TRUE" ? true : false;

enum PopUpType {
  SIGNUP = 0,
  LOGIN = 1,
  NULL = 2,
}

enum CurrentPage {
  HOME = 0,
  CHATHISTORY = 1,
  PREDICTION = 2,
  PROFILE = 3,
}

function App() {
  // States to detect when signup popup appears along with its corresponding type
  const [isOpen, setIsOpen] = useState(false);
  const [popupType, setPopupType] = useState<PopUpType>(PopUpType.NULL);

  // State to detect current page
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.HOME);

  // Uses fetch call to check whethere user is logged in
  const isLoggedIn = true;

  // Handler functions to deal with opening popups.
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

  // Div component with menu bar and corresponding page component
  return (
    <div className={!isOpen ? "background-default" : "background-overlay"}>
      {usingBackend && (
        <div className="sidebar-and-profile">
          <Sidebar
            handleLoginOpen={handleLoginOpen}
            isLoggedIn={isLoggedIn}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
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
        <SignupCard
          open={isOpen}
          onClose={handleClose}
          setPopupType={setPopupType}
        ></SignupCard>
      )}
      {isOpen && popupType === PopUpType.LOGIN && (
        <LoginCard
          open={isOpen}
          onClose={handleClose}
          setPopupType={setPopupType}
        ></LoginCard>
      )}
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
