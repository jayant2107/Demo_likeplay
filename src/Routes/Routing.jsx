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
import Notfound from "../Feautres/Notfound/Notfound";
import Registration from "../Auth/Registration";
import LoginPage from "../Auth/LoginPage";
import Subscription from "../Feautres/Subscription/Subscriptions";
import { useSelector } from "react-redux";
import Country from "../Website/pages/Country";
import Notification from "../Feautres/Notifications/Notification";
import FAQ from "../Feautres/FAQs/FAQ";
import Admirers from "../Feautres/Admirers/Admirers";
import FeedMyProfile from "../Feautres/Home/FeedMyProfile";
import Admiring from "../Feautres/Admiring/Admiring";
import Testimonial from "../Feautres/Testimonial/Testimonial";
import ChatScreen from "../Feautres/Messages/ChatScreen";
import EditName from "../EditProfile/EditName";
import EditPofileDetails from "../Feautres/Home/EditPofileDetails";

const Routing = () => {
  const value = useSelector((e) => e.LoginSlice.data);

  let PublicRouter = ({ isAuth }) => {
    if (isAuth?.token!== undefined) {
      return <Navigate to="/Layout/FeedPage" replace />;
    }
    return <Outlet />;
  };

  let PrivateRouter = ({ isAuth }) => {
    if (isAuth?.token === undefined) {
      return <Navigate to="/" />;
    }
    return <Outlet />;
  };

  let prop = value;
  console.log("value",value,value?.token)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRouter isAuth={prop} />}>
            <Route path="/" element={<Publichome />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Safety" element={<Footercontent />} />
            <Route path="/Nigeria" element={<Country />} />
          </Route>
          <Route element={<PrivateRouter isAuth={prop} />}>
          <Route path="/MyProfileEdit" element={<EditPofileDetails />} />
            <Route path="/Layout" element={<Layout />}>
              <Route path="/Layout/FeedPage" element={<FeedPage />} />
              <Route path="/Layout/MyProfile" element={<FeedMyProfile />} />
              <Route path="/Layout/Matches" element={<Matches />} />
              <Route
                path="/Layout/MatchesDetail"
                element={<MatchesDetailPage />}
              />
              <Route
                path="/Layout/MatchesDetailPage"
                element={<MatchesDetailPage />}
              />
              <Route path="/Layout/Admirers" element={<Admirers />} />

              <Route path="/Layout/Admiring" element={<Admiring />} />
              <Route path="/Layout/Messages" element={<ChatScreen />} />
              <Route path="/Layout/Notification" element={<Notification />} />
              <Route path="/Layout/Subscription" element={<Subscription />} />
              <Route path="/Layout/Settings" element={<Settings />} />
              <Route path="/Layout/FAQs" element={<FAQ />} />
              <Route path="/Layout/Testimonal" element={<Testimonial />} />
              <Route path ='/Layout/EditName' element={<EditName/> }/>
              {/* <Route path="/Layout/Testimonal" element={<Testimonal />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
