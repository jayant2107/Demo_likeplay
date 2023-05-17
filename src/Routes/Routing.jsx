import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Settings from "../Feautres/Settings/Settings";
let PublicRouter = ({ isAuth }) => {
  if (isAuth === true) {
    return <Navigate to="/Layout/Home" />;
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
            {/* <Route path="/" element={<PublicHome />} /> */}
            {/* <Route path="/About" element={<AboutUs />} /> */}
            {/* <Route path="/Feautres" element={<Feautres />} /> */}
            {/* <Route path="/Safety" element={<Safety />} /> */}
            {/* <Route path="/Support" element={<Support />} /> */}
            {/* <Route path="/AntiSex" element={<AntiSexTrafficking />} /> */}
            {/* <Route path="/WomenRights" element={<WomenRights />} /> */}
            {/* <Route path="/Nigeria" element={<Nigeria />} /> */}
            {/* <Route path="/Congo" element={<Congo />} /> */}
            {/* <Route path="/Ghana" element={<Ghana />} /> */}
            {/* <Route path="/SouthAfrica" element={<SouthAfrica />} /> */}
            {/* <Route path="/Cote" element={<Cote />} /> */}
          </Route>
          <Route element={<PrivateRouter isAuth={prop} />}>
            {/* <Route path="/Layout" element={<Layout />}> */}
            {/* <Route path="/Layout/Home" element={<Home />} /> */}
            {/* <Route path="/Layout/Matches" element={<Matches />} /> */}
            {/* <Route path="/Layout/Admiring" element={<Admiring />} /> */}
            {/* <Route path="/Layout/Messages" element={<Messages />} /> */}
            {/* <Route path="/Layout/Notification" element={<Notification />} /> */}
            {/* <Route path="/Layout/Subscription" element={<Subscription />} /> */}
            {/* <Route path="/Layout/Settings" element={<Settings />} /> */}
            {/* <Route path="/Layout/FAQs" element={<FAQs />} /> */}
            {/* <Route path="/Layout/Testimonal" element={<Testimonal />} /> */}
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
