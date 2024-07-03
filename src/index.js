import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home";
import Login from "./Pages/login";
import Layout from "./Pages/layout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AlbumDetail1 from "./Components/AlbumDetail1";
import AlbumDetail2 from "./Components/AlbumDetail2";
import Allcard from "./Components/Allcard";
import MyFav from "./Components/MyFav";
import PlayerContextProvider from "./Context/PlayerContextProvider";
import App from "./App";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />}></Route>
//       <Route path="login" element={<Login />}></Route>
//       <Route path="AlbumDetail1" element={<AlbumDetail1 />}></Route>
//       <Route path="AlbumDetail2" element={<AlbumDetail2 />}></Route>
//       <Route exact path="Allcard" Component={Allcard}></Route>
//       <Route exact path="MyFav" Component={MyFav}></Route>
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <PlayerContextProvider> */}
    {/* <RouterProvider router={router} /> */}
    {/* </PlayerContextProvider> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
