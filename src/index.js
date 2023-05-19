import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
// import Publichome from "./Feautres/Home/Publichome";
// import Layout from "./Layouts/Layout";
// import FeedPage from "./Feautres/Home/FeedPage";
// import FeedAboutMe from "./Feautres/Home/FeedMyProfile";
// import FeedShots from "./Feautres/Home/FeedShots";
import Subscription from "./Feautres/Subscription/Subscriptions";
// import reportWebVitals from "./reportWebVitals";
import Routing from "./Routes/Routing";
import "./App.css";
import MainModal from "./Feautres/Subscription/MainModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Layout />
    <App />
    <FeedAboutMe /> */}
    <Subscription/>
    {/* <MainModal/> */}
  
    {/* <Routing /> */}
  </React.StrictMode>
=======
import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
>>>>>>> e96bc740feaaa64ba4a2ab699bf56a10b428f609
);

reportWebVitals();
