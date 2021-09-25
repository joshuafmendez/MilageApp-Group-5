// const db = require("../db/config");

// const getAllTripsPdf = async (car_id, uid) => {
//   const queryOne = "SELECT * FROM cars WHERE uid=$1 AND id=$2";
//   const res = await db.any(queryOne, [uid, car_id]);

//   if (authCheck.length) {
//     try {
//       const queryTwo = "SELECT * FROM trips WHERE car_id=$1";
//       const allTrips = await db.any(queryTwo, car_id);
//       return { status: true, payload: allTrips };
//     } catch (error) {
//       return { status: false, payload: error };
//     }
//   } else {
//     return { status: false, payload: "user doesn't match" };
//   }
// };

// module.exports = { getAllTripsPdf };
