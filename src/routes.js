import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import UserLogin from "./pages/Login";
import StoreProvider from './store/Provider';
import StoreContext from './store/Context';
import UserRegister from "./pages/Login/register";
import Leads from "./pages/Leads";
import NewLead from "./pages/NewLead";

const RoutesPrivate = ({ component: Component, ...rest}) => {
  const { token } = useContext(StoreContext);
  return (
    <Route 
    {...rest}
    render={() => token 
      ? <Component {...rest} />
      : <Redirect to="/login" />
    }
    />
  )
}

const Routes = () => (
  <BrowserRouter>
  <StoreProvider>
    <Switch>
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/register" component={UserRegister} />
      <Route path="/new-lead" component={NewLead} />

      <RoutesPrivate path="/" component={Leads} />
      
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
    </StoreProvider>
  </BrowserRouter>
);

export default Routes;