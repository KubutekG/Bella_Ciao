"use client";
import styles from "@/styles/quantButtons.module.css";
import { useState } from "react";
export default function Buttons({
  quantity,
  id,
  updateCartQuant = null,
  updateCartItemQuant = null,
  orderPage = true,
}: {
  quantity: number;
  id: string;
  updateCartQuant: (change: number, item_id: string) => void;
  updateCartItemQuant: (increment: boolean) => void;
  orderPage: boolean;
}): JSX.Element {
  const [quant, setQuant] = useState<number>(quantity);

  function handleClick(increment: boolean) {
    if (increment === false) {
      if (quantity <= 1) {
        return;
      } else {
        setQuant((quant) => quant - 1);
        if (updateCartQuant !== null) {
          updateCartQuant(-1, id);
          updateCartItemQuant(false);
        }
      }
    }
    if (increment === true) {
      setQuant((quant) => quant + 1);
      if (updateCartQuant !== null) {
        updateCartQuant(1, id);
        updateCartItemQuant(true);
      }
    }
  }
  return (
    <>
      <div className={styles.desc_quantity}>
        <button
          className={styles.desc_button}
          onClick={() => handleClick(false)}
          id={`decrement${id}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id={`decrementSvg${id}`}
          >
            <path
              fill="currentColor"
              d="M19 11H5v2h14v-2Z"
              id={`decrementPath${id}`}
            ></path>
          </svg>
        </button>
        <span className={styles.desc_quantity_display} id={`quant${id}`}>
          {orderPage ? quant : quantity}
        </span>
        <button
          className={styles.desc_button}
          onClick={() => handleClick(true)}
          id={`increment${id}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id={`incrementSvg${id}`}
          >
            <path
              fill="currentColor"
              d="M13 19v-6h6v-2h-6V5h-2v6H5v2h6v6h2Z"
              id={`incrementPath${id}`}
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
