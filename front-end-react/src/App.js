import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import CarsIndex from "./Pages/CarsIndex";
import CarEdit from "./Pages/CarEdit";
import CarNew from "./Pages/CarNew";
import CarShow from "./Pages/CarShow";
import TripsIndex from "./Pages/Trips/TripsIndex.js";
import TripsEdit from "./Pages/Trips/TripsEdit.js";
import TripsNew from "./Pages/Trips/TripsNew.js";
import TripsShow from "./Pages/Trips/TripsShow.js";
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
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route exact path="/cars/:id/trips">
            <TripsIndex />
          </Route>
          <Route path="/cars/:id/trips/new">
            <TripsNew />
          </Route>
          <Route exact path="/cars/:id/trips/:trip_id">
            <TripsShow />
          </Route>
          <Route path="/cars/:id/trips/:trip_id/edit">
            <TripsEdit />
          </Route>
          {/* <Route exact path="/cars/:id/expenses">
            <ExpensesIndex />
          </Route> */}
          {/* <Route path="/cars/:id/expenses/new">
            <ExpensesNew />
          </Route> */}
          {/* <Route exact path="/cars/:id/expenses/:expense_id">
            <ExpensesShow />
          </Route> */}
          {/* <Route path="/cars/:id/expenses/:expense_id/edit">
            <ExpensesEdit />
          </Route> */}
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
