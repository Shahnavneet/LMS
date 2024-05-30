import Backdrop from "./Backdrop";
import Carddet from "./Carddet";
import { createPortal } from "react-dom";

const Modal = () => {
  return (
    <>
      <div>
        {createPortal(<Backdrop />, document.getElementById("Backdrop"))}
      </div>
      <div>
        {createPortal(<Carddet />, document.getElementById("Card_dets"))}
      </div>
    </>
  );
};
export default Modal;
