import React, { useState } from "react";
import { useCart } from "react-use-cart";

import Modal from "react-modal";

import Order from "./Order";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  console.log(items);

  if (isEmpty) return <p></p>;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <aside className="float_aside">
        <h1>Cart ({totalUniqueItems})</h1>
        <ul className="cart_list">
          {items.map((item) => (
            <li key={item.id}>
              <span
                className="thumb"
                style={{ backgroundImage: `url(${item.image})` }}
              ></span>
              <span className="tit">{item.title}</span>
              <span>price: {item.price * item.quantity} 원</span>

              <button
                className="btn_cnt"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <span className="cnt">{item.quantity}</span>
              <button
                className="btn_cnt"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button className="btn_del" onClick={() => removeItem(item.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={openModal}>주문하기</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            appElement={document.getElementById("root")}
          >
            <Order />
          </Modal>
        </div>
      </aside>
    </div>
  );
}
