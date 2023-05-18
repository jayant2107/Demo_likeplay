import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Publichome from "./Feautres/Home/Publichome";
import Layout from "./Layouts/Layout";
import FeedPage from "./Feautres/Home/FeedPage";
import FeedAboutMe from "./Feautres/Home/FeedMyProfile";
import FeedShots from "./Feautres/Home/FeedShots";
import Routing from "./Routes/Routing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing/>
    {/* <App />
    <FeedAboutMe /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
