import React, { useContext, useState } from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import Home from "./components/Home";
import Login from "./components/Login";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Check from "./components/Check";

function App() {
  // const { audioRef, track } = useContext(PlayerContext);
  //let  = false; // Thay đổi điều này dựa trên trạng thái đăng nhập của bạn
  let [isLoggedIn, setisLoggedIn] = useState(false);
  let checklogginn = () => {
    setisLoggedIn(true);
  };

  return (
    <>          
      <Routes>
        <Route
          path="/Login"
          element={
            <Login checklogginn={checklogginn} isLoggedIn={isLoggedIn} />
          }         
        />
          <Route
          path="/*"
          element={
            <Home checklogginn={checklogginn} isLoggedIn={isLoggedIn} />
          }/>   
       </Routes>
    </>
  );
}

export default App;
