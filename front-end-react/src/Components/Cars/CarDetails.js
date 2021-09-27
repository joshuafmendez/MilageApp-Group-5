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
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { FaCalculator } from "react-icons/fa";
import sprite from "../Images/spritea.png";
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
      if (expense.business_use) {
        expenses.push([
          `${expense.expense_type}`,
          `${expense.date}`,
          `$${expense.amount_spent.toLocaleString()}`,
        ]);
        totalBusinessExpenses += Number(expense.amount_spent);
      }
    });
    console.log("expenses outside handleReport", expenses);

    let totalBusinessTrips = 0;
    let trips = [["Date", "Miles", "Reason"]];
    tripsArr.forEach((trip) => {
      if (trip.business_use) {
        trips.push([`${trip.date}`, `${trip.miles}`, `${trip.reason}`]);
        totalBusinessTrips += Number(trip.miles);
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
      };

      const pdfDoc = pdfMake.createPdf(documentDefinition).open();
      return pdfDoc;
    };

    return (
      <>
        <div className="log-start">
          <div className="corner-fix">
            <a
              href="https://www.irs.gov/newsroom/heres-the-411-on-who-can-deduct-car-expenses-on-their-tax-returns"
              target="blank"
            >
              Car Expenses
            </a>
            <a
              href="https://www.irs.gov/tax-professionals/standard-mileage-rates"
              target="blank"
            >
              Mileage Rates
            </a>
            <div className="dropdown">
              <div className="dropbtn">Driver Resources</div>
              <div className="dropdown-content">
                <a
                  href="https://www.uber.com/us/en/drive/tax-information/"
                  target="blank"
                >
                  Uber
                </a>
                <a href="https://www.lyft.com/driver/taxes" target="blank">
                  Lyft
                </a>
                <a href="#" target="blank">
                  Other
                </a>
              </div>
            </div>

            <div>logout</div>
          </div>

          {/* <CarsIndex navToggle={navToggle} mileageToggle={mileageToggle} /> */}
        </div>

        {/* <div className="whit"> */}
        {/* <p>
            {" "}
            Welcome {user.displayName}, Trip App understands the importance of
            business owners and independant contractors documenting their
            mileage and automotive expenses and we are here to make that process
            as easy as possible for you.
          </p>
        </div> */}
        {/* <div className="gren">
          <p>Learn more about tax breaks you may qualify for:</p>
        </div> */}
        {/* <img src="http://s.cdpn.io/79/sprite-steps.png" /><br></br> */}
        {/* <img src={sprite}     style={{ width: "522px",height:"140px" }}/>
<div class="hi"></div> */}
        <section className="car-section">
          <div className="all-bs">
            <div className="delete">
              {" "}
              <button onClick={handleDelete}>DELETE</button>
            </div>
            <div className="edit">
              {" "}
              <Link to={`/cars/${id}/edit`}>
                <button>EDIT</button>
              </Link>
            </div>
          </div>

          <div className="concar-div">
            <img
              className="concar"
              src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
              style={{ width: "400px", height: "200px" }}
              alt={"car"}
            />{" "}
          </div>
          {/* <div onmouseover="rotateYDIV()" id="rotate3D" style="transform: rotateY(180deg);">3D rotate</div> */}

          <div className="cdropdown">
            <div className="cdropbtn">Car Details</div>
            <div className="cdropdown-content">
              <li>Car ID: {id}</li>
              <li>Make: {car?.make}</li>
              <li>Model: {car?.model}</li>
              <li>VIN: {car?.vin}</li>
              <li>Year: {car?.year}</li>
              <li>Odometer: {car?.odometer}</li>
              <li>Doors: {car?.doors}</li>
            </div>
          </div>
        </section>

        <div className="contain-ul">
          <ul className="ul-choicesb">
            {/* {newCarForm && (
        <div className="toggle-form">
          <FormModal setShow={setShow} />
        </div>
      )} */}

            <li className="li-choicesb">
              <div className="choicesb">
                <Link to={"/cars/car/new"}>
                  <AiOutlineAppstoreAdd size="35px" />
                  <button className="cars-new-button">Add New Car</button>
                </Link>
                {/* <button className="cars-new-button">Add New Car</button> */}
              </div>
            </li>

            <li className="li-choicesb">
              <div className="choicesb">
                <Link to={"/cars/car/new"}>
                  <AiFillCar size="35px" />
                  <button className="cars-new-button">Select Car</button>
                </Link>
              </div>
            </li>
            <li className="li-choicesb">
              <div className="choicesb">
                <div onClick={handleReport}>
                  <GrDocumentPdf size="33px" />
                  <button className="cars-new-button">Generate Report</button>
                </div>
              </div>
            </li>

            <li className="li-choicesb">
              <div className="choicesb">
                <Link to={"/cars/car/new"}>
                  <FaCalculator size="33px" />
                  <button className="cars-new-button">Get Tax Help</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <Link to={"/cars"}>
          <button>BACK</button>
        </Link>

        {/*         
        
        <button onClick={handleDelete}>DELETE</button> */}

        {/* 
        <button onClick={handleReport}>GENERATE REPORT</button> */}

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
        {/* </div> */}
        {/* </div> */}
      </>
    );
  }
}

export default CarDetails;
