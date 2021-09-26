import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import FourOFour from "./Pages/FourOFour";
import CarEdit from "./Pages/Cars/CarEdit";
import CarNew from "./Pages/Cars/CarNew";
import CarShow from "./Pages/Cars/CarShow";
import TripsIndex from "./Pages/Trips/TripsIndex.js";
import TripsEdit from "./Pages/Trips/TripsEdit.js";
import TripsNew from "./Pages/Trips/TripsNew.js";
import TripsShow from "./Pages/Trips/TripsShow.js";
import "firebase/auth";
import UserProvider from "./Providers/UserProvider";
import { LoggedInPage } from "./Pages/LoggedInPage";
import ExpensesIndex from "./Pages/Expenses/ExpensesIndex";
import ExpensesEdit from "./Pages/Expenses/ExpenseEdit";
import ExpensesNew from "./Pages/Expenses/ExpenseNew";
import ExpensesShow from "./Pages/Expenses/ExpenseShow";
import "./App.css";

function App() {
  let [navExpenses, setNavExpenses] = useState(false);
  let [navMileage, setNavMileage] = useState(false);
  const navToggle = (boolean) => {
    setNavExpenses(boolean);
  };
  const mileageToggle = (boolean) => {
    setNavMileage(boolean);
  };
  return (
    <div className="App">
      <UserProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <>
            <NavBar navExpenses={navExpenses} navMileage={navMileage} />
            <Route exact path="/cars">
              <LoggedInPage
                navToggle={navToggle}
                mileageToggle={mileageToggle}
              />
            </Route>
            <Route exact path="/cars/car/new">
              <CarNew />
            </Route>
            <Route exact path="/cars/:id">
              <CarShow navToggle={navToggle} mileageToggle={mileageToggle} />
            </Route>
            <Route path="/cars/:id/edit">
              <CarEdit />
            </Route>
            <Route exact path="/cars/:id/trips">
              <TripsIndex />
            </Route>
            <Route exact path="/cars/:id/trips/trip/new">
              <TripsNew />
            </Route>
            <Route exact path="/cars/:id/trips/:trip_id">
              <TripsShow />
            </Route>
            <Route exact path="/cars/:id/trips/:trip_id/edit">
              <TripsEdit />
            </Route>
            <Route exact path="/cars/:id/expenses">
              <ExpensesIndex />
            </Route>
            <Route path="/cars/:id/expenses/expense/new">
              <ExpensesNew />
            </Route>
            <Route exact path="/cars/:id/expenses/:expense_id">
              <ExpensesShow />
            </Route>
            <Route exact path="/cars/:id/expenses/:expense_id/edit">
              <ExpensesEdit />
            </Route>
          </>

          <Route path="/*">

            <FourOFour />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
