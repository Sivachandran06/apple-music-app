import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftPanel from "../Components/LeftPanel";
import Controls from "../Components/Controls";
import { Outlet } from "react-router";
import Home from "./home";
import MainContent from "../Components/MainContent";

function Layout(props) {
  console.log(props, "Propsssssssss");
  return (
    <>
      <div className="layout">
      <div className="sidebar"><LeftPanel/></div>
      <div className="header"><Header/></div>
      <div className="main"><Outlet/></div>
      <div className="footer"><Footer/></div>
        </div>
      
    </>
  );
}

export default Layout;