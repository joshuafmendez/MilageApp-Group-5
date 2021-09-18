
import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Style/CardListItem.css";
import Slider from "./Slider.js";


function CarsListItem({ car }) {
  const { id, make, model } = car;
 
  return (
 
    <div className="wrapper">

    <div className="card text-center">
        <div className="image"> <img src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png" style={{width:"200px"}}/> </div>
    
        <div className="about-product text-center">
        {/* <Link to={`/cars/${id}`}>
          <h2> {id}</h2>
        </Link> */}
      

        {/* [miles] * [rate], or 175 miles * $0.56 = $98. */}


        
        </div>
        <br></br>
        <br></br>
        <br></br>
    
    
  
  
<br></br>
<br></br>
<br></br>
<br></br>


    <Link to={`/cars/${id}`}>
          <h2> {make} {model}</h2>
        </Link>

     
        mileage
        <div className="border">
  <div className="bar" style={{height:"24px",width:"20%"}}></div>
</div>
        gas
        <div className="border">
  <div className="bar" style={{height:"24px",width:"20%"}}></div>
</div>
    </div>

</div>

//       </td>
//       <td>
//         <Link to={`/cars/${id}`}>
//           <h2>
//             {" "}
//             {make} {model}
//           </h2>
//         </Link>
//       </td>
//       {/* <td>
//         <Link to={`/cars/${id}`}>
//           <h2> {model}</h2>
//         </Link>
//       </td> */}
//       <td>
//         <h2> total mileage</h2>
//       </td>
//       <td>
//         <h2> total expenses</h2>
//       </td>
//     </tr>

  );
}




{/* // <tr>
    //   <td>
        // <Link to={`/cars/${id}`}>
        //   <h2> {id}</h2>
        // </Link>
    //   </td>
    //   <td>
        // <Link to={`/cars/${id}`}>
        //   <h2> {make}</h2>
        // </Link>
    //   </td>
    //   <td>
        // <Link to={`/cars/${id}`}>
        //   <h2> {model}</h2>
        // </Link>
    //   </td>
    //   <td>
    //     <h2> total mileage</h2>
    //   </td>
    //   <td>
    //     <h2> total expenses</h2>
    //   </td>
    // </tr> */}



export default CarsListItem;
