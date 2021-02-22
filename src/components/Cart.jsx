import React from "react";
import { useCart } from "react-use-cart";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p></p>;

  console.log(items);

  return (
    <div>
      <aside className="float_aside">
        <h1>Cart ({totalUniqueItems})</h1>
        <ul className="cart_list">
          {items.map((item) => (
            <li key={item.id}>
              {item.title}({item.quantity})
              <br />
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
