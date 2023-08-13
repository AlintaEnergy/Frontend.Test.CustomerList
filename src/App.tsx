import * as React from "react";
import { StyledMain, StyledHeader, StyledHeaderText } from "./StyledApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import { AddCustomerForm } from "./components/AddCustomer/AddCustomerForm";

const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeaderText>Customer List</StyledHeaderText>
      </StyledHeader>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addCustomer">
            <AddCustomerForm />
          </Route>
        </Switch>
      </Router>
    </StyledMain>
  );
};

export default App;
