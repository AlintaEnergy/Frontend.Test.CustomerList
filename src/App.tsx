import * as React from "react";
import { StyledMain, StyledHeader, StyledHeaderText } from "./StyledApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import AddCustomer from "./views/AddCustomer";

const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeaderText>Customer List</StyledHeaderText>
      </StyledHeader>
      <Router>
        <Switch>
          <Route path="/add">
            <AddCustomer/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StyledMain>
  );
};

export default App;
