import React, { lazy} from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Publichome = lazy(() => import("../Website/PublicHome"));
const Footercontent = lazy(() => import("../Website/pages/Footercontent"));

const Country = lazy(() => import("../Website/pages/Country"));
const PrivacyPolicy = lazy(() => import("Data/PrivacyPolicy"));
const TermsCond = lazy(() => import("Data/TermsCond"));

const RoutesPage = () => {
  const value = useSelector((e) => e?.LoginSlice?.data);

  let PublicRouter = ({ isAuth }) => {
    if (isAuth?.token !== undefined) {
      return <Navigate to="/Layout/FeedPage" replace />;
    }
    return <Outlet />;
  };

  let prop = value;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter isAuth={prop} />}>
          <Route path="/" element={<Publichome />} />
        
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<TermsCond />} />
          <Route path="/Safety" element={<Footercontent />} />
          <Route path="/country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
