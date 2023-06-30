import "./App.css";
import React, { Suspense } from "react";
import Routing from "./Routes/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RoutesPage from "Routes/Routes";
import Loader from "Components/Loader";

function App() {
  
  return (
    <Suspense fallback={<Loader/>}>

      <ToastContainer />
      <RoutesPage/>
    </Suspense>
    
  
  );
}
export default App;

//testing