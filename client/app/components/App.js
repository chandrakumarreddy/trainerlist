import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Home from "./Home";
import Header from "./Header";
import Profile from "./ProfileSearch/";
import UpdateProfile from "./UpdateProfile/";
import Register from "./Register";
import Pdf from "./pdfFormat";
import Admin from "./Admin";
import AddAdmin from "./AddAdmin";
import AdminLogin from "./AdminLogin";
import { setAuthTokenHeader } from "../utils/authTokenHeader";
import store from "../store";
import { setCurrentUser } from "../actions";

const App = () => {
  if (localStorage.jwtToken) {
    setAuthTokenHeader(localStorage.jwtToken);
    const decode = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decode));

    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      store.dispatch(setCurrentUser());
      window.location.href = "/login";
    }
  }

  return (
    <div className="container container-custom">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/update" exact component={UpdateProfile} />
          <Route path="/update/:id" component={UpdateProfile} />
          <Route path="/register" component={Register} />
          <Route path="/pdf/:id" component={Pdf} />
          <Route path="/admin" component={Admin} />
          <Route path="/addadmin" component={AddAdmin} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/profile" component={Profile} />
          <Route component={() => <div>Not found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
