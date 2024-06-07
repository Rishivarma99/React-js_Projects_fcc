import "./style.css";
import { MdCancel } from "react-icons/md";
const Modal1 = ({ handleModalPage }) => {
  return (
    <>
      <div className="modal1-main">
        <div className="modal1-container">
          <div className="modal1-header">
            Customised header
            <MdCancel className="modal1-icon" onClick={handleModalPage} />
          </div>
          <div className="modal1-body">Customised Body</div>
          <div className="modal1-footer">Customised Footer</div>
        </div>
      </div>
    </>
  );
};

export default Modal1;
