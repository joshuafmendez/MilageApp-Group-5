import { Link } from "react-router-dom";
import "./CenterPanel.css";

const CenterPanel = ({ id, handleDelete }) => {
  return (
    <div className="concar-div">
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Warning!!!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              You are about to delete this car. We do not archive your records. All records associated with this car will be lost.
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Keep Car</button>
              <button type="button" class="btn btn-danger" onClick={handleDelete} data-dismiss="modal">Delete Car forever</button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="concar"
        src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
        // style={{ width: "110%", height: "50%" }}
        alt={"car"}
      />
      <div className="all-bs">
        <button type="button" class=" button-delete" data-toggle="modal" data-target="#exampleModalCenter"></button>
        <Link to={`/cars/${id}/edit`}>
          <button className="button-edit"></button>
        </Link>
      </div>
    </div>
  );
};

export default CenterPanel;
