import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Settings from "../Feautres/Settings/Settings";
import Matches from "../Feautres/Matches/Matches";
import MatchesDetailPage from "../Feautres/Matches/Matches_Detail _Page";
import FeedPage from "../Feautres/Home/FeedPage";
import Publichome from "../Website/PublicHome";

import Footercontent from "../Website/pages/Footercontent";
import Layout from "../Layouts/Layout";
import Registration from "../Auth/Registration";
import LoginPage from "../Auth/LoginPage";
let PublicRouter = ({ isAuth }) => {
  if (isAuth === true) {
    return <Navigate to="/Layout/FeedPage" replace />;
  }
  return <Outlet />;
};
let PrivateRouter = ({ isAuth }) => {
  if (isAuth === false) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
const Routing = () => {
  let prop = false;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRouter isAuth={prop} />}>
            <Route path="/" element={<Publichome />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Safety" element={<Footercontent />} />
            <Route path="/Nigeria" element={<country />} />
          </Route>
          <Route element={<PrivateRouter isAuth={prop} />}>
            <Route path="/Layout" element={<Layout />}>
              <Route path="/Layout/FeedPage" element={<FeedPage />} />
              <Route path="/Layout/Matches" element={<Matches />} />
              <Route path="/Layout/MatchesDetail" element={<MatchesDetailPage />} />
              <Route
                path="/Layout/MatchesDetailPage"
                element={<MatchesDetailPage />}
              />
              {/* <Route path="/Layout/Admiring" element={<Admiring />} /> */}
              {/* <Route path="/Layout/Messages" element={<Messages />} /> */}
              {/* <Route path="/Layout/Notification" element={<Notification />} /> */}
              {/* <Route path="/Layout/Subscription" element={<Subscription />} /> */}
              <Route path="/Layout/Settings" element={<Settings />} />
              {/* <Route path="/Layout/FAQs" element={<FAQs />} /> */}
              {/* <Route path="/Layout/Testimonal" element={<Testimonal />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
