import React, { useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../Providers/UserProvider";
import {
  deleteCarByID,
  getAllExpensesFN,
  getAllTripsFN,
} from "../../util/networkRequest";
import { addExpenses } from "../../Store/Actions/expenseActions";
import "../Style/CarDetails.css";
import { addTrips } from "../../Store/Actions/tripsActions";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function CarDetails() {
  const entireState = useSelector((state) => state);
  const { cars, expenses, trips } = entireState;
  const user = useContext(UserContext);
  const history = useHistory();
  const expensesArr = Object.values(expenses);
  const tripsArr = Object.values(trips);
  const dispatch = useDispatch();
  let { id } = useParams();

  const deleteCar = async () => {
    try {
      await deleteCarByID(id, user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    await deleteCar();
    history.push("/cars");
  };

  useEffect(() => {
    const getAllExpenses = async () => {
      try {
        let res = await getAllExpensesFN(id, user);
        dispatch(addExpenses(res));
        // console.log("res", res);
      } catch (error) {
        console.log(error);
      }
    };
    getAllExpenses();

    const getAllTrips = async () => {
      try {
        let res = await getAllTripsFN(id, user);
        dispatch(addTrips(res));
      } catch (error) {
        console.log(error);
      }
    };
    getAllTrips();
  }, [id, user, history, dispatch]);

  const setCheck = (e) => {
    console.log(e.target);
  };

  if (!user) {
    return <div className="spinner-border"></div>;
  } else {
    let car = cars[id];

    let totalBusinessExpenses = 0;
    let expenses = [["Expense", "Date", "Amount"]];
    expensesArr.forEach((expense) => {
      let newDate = new Date(expense.date);
      let year = newDate.getFullYear();
      if (expense.business_use) {
        if (year === 2021) {
          expenses.push([
            `${expense.expense_type}`,
            `${newDate.toLocaleDateString()}`,
            `$${expense.amount_spent.toLocaleString()}`,
          ]);
          totalBusinessExpenses += Number(expense.amount_spent);
        }
      }
    });

    let totalBusinessTrips = 0;
    let trips = [["Date", "Miles", "Reason"]];
    tripsArr.forEach((trip) => {
      let newDate = new Date(trip.date);
      let year = newDate.getFullYear();
      if (trip.business_use) {
        if (year === 2021) {
          trips.push([
            `${newDate.toLocaleDateString()}`,
            `${trip.miles}`,
            `${trip.reason}`,
          ]);
          totalBusinessTrips += Number(trip.miles);
        }
      }
    });

    console.log("tripsArr", tripsArr);
    const handleReport = () => {
      car = cars[id];
      let documentDefinition = {
        header: function (currentPage, pageCount) {
          return {
            text: currentPage.toString() + " of " + pageCount,
            alignment: "right",
            margin: [0, 30, 20, 50],
            fontSize: 7,
          };
        },
        content: [
          {
            text: `Driver's name: ${car?.driver} `,
            bold: true,
            fontSize: 20,
            alignment: "center",
            margin: [0, 20],
          },
          { text: `Car details `, style: "header", margin: [0, 20] },
          {
            padding: [0, 20],
            ul: [
              `Car make: ${car?.make}`,
              `Car model: ${car?.model}`,
              `Car VIN: ${car?.vin}`,
              `Car year: ${car?.year}`,
              `Car mileage: ${car?.odometer.toLocaleString()}`,
              `Number of car doors: ${car?.doors}`,
            ],
          },

          {
            pageBreak: "before",
            text: `${car?.make} ${car?.model} expenses for business-use\n for the year 2021 `,
            bold: true,
            fontSize: 20,
            alignment: "center",
            margin: [0, 20],
          },
          {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["*", "30%", "20%"],
              height: "100",
              body: expenses,
              fontSize: 40,
            },
          },
          {
            text: `Total expenses: $${totalBusinessExpenses.toLocaleString()}`,
            alignment: "left",
            bold: true,
            fontSize: 15,
            margin: [307, 20, 10, 0],
          },
          {
            pageBreak: "before",
            text: `${car?.make} ${car?.model} miles for business-use\n for the year 2021 `,
            bold: true,
            fontSize: 20,
            alignment: "center",
            margin: [0, 20],
          },
          {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["25%", "25%", "*"],

              body: trips,
            },
          },
          {
            text: `Total mileage: ${totalBusinessTrips.toLocaleString()}`,
            alignment: "left",
            bold: true,
            fontSize: 15,
            margin: [35, 20, 10, 0],
          },
        ],
        styles: {
          header: {
            bold: true,
            fontSize: 15,
          },
        },
        defaultStyle: {
          fontSize: 12,
          margin: [0, 20],
        },
      };

      const pdfDoc = pdfMake.createPdf(documentDefinition).open();
      return pdfDoc;
    };

    return (
      <div className="car-details">
        <div className="wrapper">
          <div className="car">
            <div className="image">
              {" "}
              <img
                src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
                style={{ width: "200px" }}
                alt={"car"}
              />{" "}
            </div>
            <li>Car ID: {id}</li>
            <li>Make: {car?.make}</li>
            <li>Model: {car?.model}</li>
            <li>VIN: {car?.vin}</li>
            <li>Year: {car?.year}</li>
            <li>Odometer: {car?.odometer.toLocaleString()}</li>
            <li>Doors: {car?.doors}</li>
            Mileage: 900
            <div className="border">
              <div
                className="bar"
                style={{ height: "18px", width: "20%" }}
              ></div>
            </div>
            Expenses: $700
            <div className="border">
              <div
                className="bar"
                style={{ height: "18px", width: "20%" }}
              ></div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                onChange={setCheck}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default car
              </label>
            </div>
            <Link to={"/cars"}>
              <button>BACK</button>
            </Link>
            <button onClick={handleDelete}>DELETE</button>
            <Link to={`/cars/${id}/edit`}>
              <button>EDIT</button>
            </Link>
            <button onClick={handleReport}>GENERATE REPORT</button>
            <Link to={`/cars/${id}/expenses`}>
              Total Expenses: $
              {expensesArr.reduce((total, expense) => {
                total += expense.amount_spent;
                return total;
              }, 0)}
            </Link>
            <Link to={`/cars/${id}/trips`}>
              Total Mileage:
              {tripsArr.reduce((total, trip) => {
                total += trip.miles;
                return total;
              }, 0)}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetails;
