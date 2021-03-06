import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About/About";
import DetailedTourPage from "./pages/DetailedTourPage/DetailedTourPage";
import CreateTourPage from "./pages/adminpage/tourcreation";
import allToursPage from "./pages/adminpage/alltours";
import HomePage from "./pages/HomePage/HomePage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/addtour" component={CreateTourPage} />
        <Route path="/tours/:tourid" component={DetailedTourPage} />
        <Route path="/tours" component={allToursPage} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
