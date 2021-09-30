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
// import { signOut } from "../../Services/Firebase";
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

  // const setCheck = (e) => {
  //   console.log(e.target);
  // };

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

    // const handleLogout = async () => {
    //   signOut();
    //   history.push("/");
    // };

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
            text: `Driver: ${car?.driver} `,
            bold: true,
            fontSize: 20,
            alignment: "center",
            margin: [0, 20],
          },
          {
            layout: "lightHorizontalLines",
            table: {
              headerRows: 1,
              widths: ["50%"],
              height: "100",
              body: [
                [{ text: "Car details", bold: true, fontSize: 15 }],
                [`Car make: ${car?.make}`],
                [`Car model: ${car?.model}`],
                [`Car VIN: ${car?.vin}`],
                [`Car year: ${car?.year}`],
                [`Car mileage: ${car?.odometer.toLocaleString()}`],
                [`Number of car doors: ${car?.doors}`],
              ],
              fontSize: 40,
            },
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
      <>
        <div>
          <div className="right-nav">
            <div className="chrome">
              <div className="nav-expenses">
                <Link to={`/cars/${id}/expenses/expense/new`}>
                  {" "}
                  ✚ Enter Expense{" "}
                </Link>
                {/* <ImRoad size="16px" /> */}
              </div>
            </div>

            <div className="chrome">
              <div className="nav-expenses">
                <Link to={`/cars/${id}/trips/trip/new`}> ✚ Enter Mileage </Link>
                {/* <ImRoad size="16px" /> */}
              </div>
            </div>

            <div className="chrome">
              <div className="nav-expenses">
                <button onClick={handleReport} className="cars-new-button">
                  🗂 Generate Report    
                </button>
                {/* <GrDocumentPdf size="16px" /> */}
              </div>
            </div>

            <div className="chrome">
              <div className="nav-expenses">
                <Link to={`/cars/${id}/expenses`}>📕 Expense Table</Link>
              </div>
            </div>

            <div className="chrome">
              <div className="nav-expenses">
                <Link to={`/cars/${id}/trips`}>📘 Mileage Table</Link>
              </div>
            </div>

            {/* <button onClick={handleLogout}> LOG OUT</button> */}
          </div>
        </div>

        <section className="car-section">
          <div className="odo-deets">
            <div className="odo-mileage">
              Mileage
              <p className="total-odo">
                0
                {tripsArr.reduce((total, trip) => {
                  total += trip.miles;
                  return total;
                }, 0)}
              </p>
            </div>


            <div className="all-expenses">
              <p className="total-expenses">Total Expenses</p>
              {/* <Link to={`/cars/${id}/expenses`}> */}
                $
                {expensesArr.reduce((total, expense) => {
                  total += expense.amount_spent;
                  return total;
                }, 0)}
                .00
              {/* </Link> */}
            </div>

            <div className="deets">
              <li>Car ID: {id}</li>
              <li>Make: {car?.make}</li>
              <li>Model: {car?.model}</li>
              <li>VIN: {car?.vin}</li>
              <li>Year: {car?.year}</li>
              <li>Odometer: {car?.odometer}</li>
              <li>Doors: {car?.doors}</li>
            </div>
          </div>
          <div className="concar-div">
            <img
              className="concar"
              src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
              style={{ width: "110%", height: "50%" }}
              alt={"car"}
            />{" "}
            <div className="all-bs">
              <button className="button-delete" onClick={handleDelete}>
                {/* DELETE */}
              </button>

              <Link to={`/cars/${id}/edit`}>
                <button className="button-edit"></button>
              </Link>
            </div>
          </div>

          {/* <br></br> */}

        </section>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to={"/cars"}>
          <button>BACK</button>
        </Link>
      </>
    );
  }
}

export default CarDetails;
