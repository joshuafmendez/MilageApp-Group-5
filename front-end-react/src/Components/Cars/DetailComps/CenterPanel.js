import { Link } from "react-router-dom";
import "./CenterPanel.css";

const CenterPanel = ({ id, handleDelete }) => {
  return (
    <div className="concar-div">
      <img
        className="concar"
        src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
        // style={{ width: "110%", height: "50%" }}
        alt={"car"}
      />
      <div className="all-bs">
        <button className="button-delete" onClick={handleDelete}></button>
        <Link to={`/cars/${id}/edit`}>
          <button className="button-edit"></button>
        </Link>
      </div>
    </div>
  );
};

export default CenterPanel;
