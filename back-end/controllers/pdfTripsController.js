// // const pdfMake = require("pdfmake/build/pdfmake.js");
// // const pdfFonts = require("pdfmake/build/vfs_fonts.js");
// // pdfMake.vfs = pdfFonts.pdfMake.vfs;
// const express = require("express");
// const pdfTrips = express.Router({
//   mergeParams: true,
// });

// const db = require("../db/config");

// // pdfMake.vfs = pdfFonts.pdfMake.vfs;

// // const {
// //   getAllTripsPdf,
// // getTrip,
// // addTrip,
// // deleteTrip,
// // updateTrip,
// // } = require("../queries/pdfTrips");
// // trips.get("/", async (req, res) => {
// //   const { car_id } = req.params;
// //   const uid = req.query.uid;
// //   const allTrips = await getAllTrips(car_id, uid);
// //   res.json(allTrips);
// // });

// pdf.get("/", (req, res, next) => {
//   //res.send('PDF');

//   // const fname = req.body.fname;
//   // const lname = req.body.lname;

//   const { car_id } = req.params;
//   const uid = req.query.uid;
//   const queryOne = "SELECT * FROM cars WHERE uid=$1 AND id=$2";
//   const res = await db.any(queryOne, [uid, car_id]);

//   // const allTrips = await getAllTripsPdf(car_id, uid);
//   const {
//     car_id,
//     business_use,
//     miles,
//     date,
//     reason,
//     start_odometer,
//     stop_odometer,
//     favorite,
//   } = res.data.body;

//   let documentDefinition = {
//     content: [`Hello ${car_id}, ${miles}, ${date},`, "Nice to meet you!"],
//   };
//   const pdfDoc = pdfMake.createPdf(documentDefinition);
//   // let documentDefinition = {
//   //   content: [`Hello ${fname} ${lname}`, "Nice to meet you!"],
//   // };

//   const pdfDoc = pdfMake.createPdf(documentDefinition);
//   pdfDoc.getBase64((data) => {
//     res.writeHead(200, {
//       "Content-Type": "application/pdf",
//       "Content-Disposition": 'attachment;filename="filename.pdf"',
//     });

//     const download = Buffer.from(data.toString("utf-8"), "base64");
//     res.end(download);
//   });
// });

// module.exports = pdf;
