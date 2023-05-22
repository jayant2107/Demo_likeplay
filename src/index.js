import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Store/Store";
<<<<<<< HEAD
import Subscription from "./Feautres/Subscription/Subscriptions";
import Testimonial from "./Feautres/Testimonial/Testimonial";
=======
import "react-chat-elements/dist/main.css"
>>>>>>> 10f3f407daa90074445d9fad290562169dcd4d1b

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<<<<<<< HEAD
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <App />
  //   </PersistGate>
  // </Provider>
  // <Subscription/>
  <Testimonial/>
=======
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
>>>>>>> 10f3f407daa90074445d9fad290562169dcd4d1b
);

reportWebVitals();
