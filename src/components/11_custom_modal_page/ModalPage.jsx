// Todo :  Its best if we pass the modal page data as the props to create multiple modal pages with id

import { useState } from "react";
import Modal1 from "./Modal_1";

const ModalPage = () => {
  const [openModalPage, setModalPage] = useState(false);

  const handleModalPage = () => {
    setModalPage(false);
  };

  return (
    <>
      <div className="modalpage-main">
        {!openModalPage ? (
          <center>
            <h1>Custom Modal Page</h1>
            <button
              type="button"
              className="btn btn-success modalpage-button"
              onClick={() => setModalPage(true)}
            >
              Open Modal Page
            </button>
          </center>
        ) : (
          <Modal1 handleModalPage={handleModalPage}></Modal1>
        )}
      </div>
    </>
  );
};

export default ModalPage;
