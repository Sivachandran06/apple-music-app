import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftPanel from "../Components/LeftPanel";
import Controls from "../Components/Controls";
import { Outlet } from "react-router";





function Layout(props) {
    return (
      <>
        <LeftPanel/>
        <Controls/>
        <Outlet/>
      </>
    )
}

export default Layout;