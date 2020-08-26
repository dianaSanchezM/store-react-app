import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  return createPortal(
    <div
      className="modal-container"
    >
      <div className='modal'>
        <button
          className="modal-close"
          onClick={() => props.setShowModal(!props.showModal)}
        >
          x
        </button>
        {props.children}
      </div>
    </div>,
    element
  );
};

export default Modal;
