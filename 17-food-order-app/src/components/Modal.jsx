import Cart from "./cart/Cart.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { OrderContext } from "../store/OrderContext.jsx";
import CheckoutForm from "./form/CheckoutForm.jsx";

export default function Modal() {
  const dialog = useRef();
  const { modalIsOpen, modalStep, setModalStep, setModalIsOpen } = useContext(OrderContext);

  useEffect(() => {
    if (modalIsOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [modalIsOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <button
        type="button"
        className="modal-close"
        onClick={() => {
          dialog.current.close();
          setModalStep(0);
          setModalIsOpen(false);
        }}
        aria-label="Close"
        style={{ position: "absolute", top: 8, right: 8 }}
      >
        ×
      </button>
      {modalIsOpen ? modalStep === 0 ? <Cart /> : <CheckoutForm dialogRef={dialog} /> : null}
    </dialog>,
    document.getElementById("modal")
  );
}
