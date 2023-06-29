import React,{lazy,Suspense} from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "Components/Loader";


const Matches =lazy(()=>import("../Feautres/Matches/Matches")) ;
const MatchesDetailPage =lazy(()=>import("../Feautres/Matches/Matches_Detail _Page")) ;
const FeedPage =lazy(()=>import("../Feautres/Home/FeedPage")) ;
const Publichome =lazy(()=>import("../Website/PublicHome")) ;
const Footercontent =lazy(()=>import("../Website/pages/Footercontent")) ;
const Layout =lazy(()=>import("../Layouts/Layout")) ;
const Notfound =lazy(()=>import("../Feautres/Notfound/Notfound")) ;
const Registration =lazy(()=>import("../Auth/Registration")) ;
const LoginPage =lazy(()=>import("../Auth/LoginPage")) ;
const Subscription =lazy(()=>import("../Feautres/Subscription/Subscriptions")) ;

const Country =lazy(()=>import("../Website/pages/Country")) ;
const Notification =lazy(()=>import("../Feautres/Notifications/Notification")) ;
const FAQ =lazy(()=>import("../Feautres/FAQs/FAQ")) ;
const Admirers =lazy(()=>import("../Feautres/Admirers/Admirers")) ;
const FeedMyProfile =lazy(()=>import("../Feautres/Home/FeedMyProfile")) ;
const Admiring =lazy(()=>import("../Feautres/Admiring/Admiring")) ;
const Testimonial =lazy(()=>import( "../Feautres/Testimonial/Testimonial"));
const ChatScreen =lazy(()=>import("../Feautres/Messages/ChatScreen")) ;
const EditName =lazy(()=>import("../EditProfile/EditName")) ;
const EditPofileDetails =lazy(()=>import("../Feautres/Home/EditPofileDetails")) ;
const ResgistPage1 =lazy(()=>import("Auth/RegistrationPage/Rest_page1")) ;
const ResgistPage4 =lazy(()=>import("Auth/RegistrationPage/Rest_page4")) ;
const Userdetails =lazy(()=>import("../Feautres/Home/Userdetails")) ;
const ResgistPage6 =lazy(()=>import("Auth/RegistrationPage/Rest_page6")) ;
const ResgistPage7 =lazy(()=>import("Auth/RegistrationPage/Rest_page7")) ;
const ResgistPage8 =lazy(()=>import("../Auth/RegistrationPage/Rest_page8")) ;
const ResgistPage11 =lazy(()=>import("Auth/RegistrationPage/Rest_page11")) ;
const ResgistPage10 =lazy(()=>import("Auth/RegistrationPage/Rest_page10")) ;
const ResgistPage15 =lazy(()=>import("../Auth/RegistrationPage/Rest_page15")) ;
const ResgistPage13 =lazy(()=>import("../Auth/RegistrationPage/Rest_page13")) ;
const ResgistPage16 =lazy(()=>import("../Auth/RegistrationPage/Rest_page16")) ;
const PrivacyPolicy =lazy(()=>import("Data/PrivacyPolicy")) ;
const TermsCond =lazy(()=>import("Data/TermsCond")) ;
const Navbar =lazy(()=>import("Components/Navbar")) ;
const Settings =lazy(()=>import('../Feautres/Settings/Settings'))



const RoutesPage  = () => {
  const value = useSelector((e) => e.LoginSlice.data);

  let PublicRouter = ({ isAuth }) => {
    if (isAuth?.token !== undefined) {
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

  return (
    
    
    <BrowserRouter>
        <Routes>
          <Route element={<PublicRouter isAuth={prop} />}>
            <Route path="/" element={<Publichome />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<ResgistPage1 />} />
            <Route path="/ResgistPage4" element={<ResgistPage4 />} />
            <Route path="/ResgistPage6" element={<ResgistPage6 />} />
            <Route path="/ResgistPage7" element={<ResgistPage7 />} />
            <Route path="/ResgistPage8" element={<ResgistPage8 />} />
            <Route path="/ResgistPage11" element={<ResgistPage11 />} />
            <Route path="/ResgistPage10" element={<ResgistPage10 />} />
            <Route path="/ResgistPage13" element={<ResgistPage13 />} />
            <Route path="/ResgistPage15" element={<ResgistPage15 />} />
            <Route path="/ResgistPage16" element={<ResgistPage16 />} />
            <Route path="/Privacy" element={<PrivacyPolicy/>}/>
            <Route path="/Terms" element={<TermsCond/>}/>

            <Route path="/Safety" element={<Footercontent />} />
            <Route path="/Nigeria" element={<Country />} />
          </Route>
          <Route element={<PrivateRouter isAuth={prop} />}>
            <Route path="/MyProfileEdit" element={<EditPofileDetails />} />
            <Route path="/Layout" element={<Layout />}>
              <Route path="/Layout/navbar" element={<Navbar/>}/>
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
              <Route path="/Layout/EditName" element={<EditName />} />
              <Route path="/Layout/Userdetails" element={<Userdetails />} />
              {/* <Route path="/Layout/Testimonal" element={<Testimonal />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  

      
    
  );
};

export default RoutesPage;
