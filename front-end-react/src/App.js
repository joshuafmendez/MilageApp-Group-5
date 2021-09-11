import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import CarsIndex from "./Pages/CarsIndex";
import CarEdit from "./Pages/CarEdit";
import CarNew from "./Pages/CarNew";
import CarShow from "./Pages/CarShow";
import "firebase/auth";
import UserProvider from "./Providers/UserProvider";
import { LoggedInPage } from "./Pages/LoggedInPage";
// import TripsIndex from "./Pages/TripsIndex";
// import TripsEdit from "./Pages/TripsEdit";
// import TripsNew from "./Pages/TripsNew";
// import TripsShow from "./Pages/TripsShow";
// import ExpensesIndex from "./Pages/ExpensesIndex";
// import ExpensesEdit from "./Pages/ExpensesEdit";
// import ExpensesNew from "./Pages/ExpensesNew";
// import ExpensesShow from "./Pages/ExpensesShow";
import "./App.css";
// import { apiURL } from "./util/apiURL";

// const API = apiURL();

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/loggedInPage">
              <LoggedInPage />
            </Route>
            <Route exact path="/cars">
              <CarsIndex />
            </Route>
            <Route path="/cars/new">
              <CarNew />
            </Route>
            <Route exact path="/cars/:id">
              <CarShow />
            </Route>
            <Route path="/cars/:id/edit">
              <CarEdit />
            </Route>
            {/* <Route exact path="/cars/:car_id/trips">
            <TripsIndex />
            </Route>
            <Route path="/cars/:car_id/trips/new">
            <TripsNew />
            </Route>
            <Route exact path="/cars/:car_id/trips/:id">
            <TripsShow />
            </Route>
            <Route path="/cars/:car_id/trips/:id/edit">
            <TripsEdit />
            </Route>
            <Route exact path="/cars/:car_id/expenses">
            <ExpensesIndex />
            </Route>
            <Route path="/cars/:car_id/expenses/new">
            <ExpensesNew />
            </Route>
            <Route exact path="/cars/:car_id/expenses/:id">
            <ExpensesShow />
            </Route>
            <Route path="/cars/:car_id/expenses/:id/edit">
            <ExpensesEdit />
          </Route> */}
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
