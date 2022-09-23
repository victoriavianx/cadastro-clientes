import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Outset from "../pages/Outset/outset";
import SignIn from "../pages/SignIn/signin";
import SignUp from "../pages/SignUp/signup";
import Update from "../pages/Update/update";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Outset />
      </Route>
      <Route exact path={"/signin"}>
        <SignIn />
      </Route>
      <Route exact path={"/signup"}>
        <SignUp />
      </Route>
      <Route exact path={"/dashboard"}>
        <Home />
      </Route>
      <Route exact path={"/update"}>
        <Update />
      </Route>
    </Switch>
  );
};

export default Routes;
