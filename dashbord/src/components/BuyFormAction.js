import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function BuyFormAction({
  uuid,
  setFormAction,
  setActionUuid,
  setCloseFrame,
  closeFrame,
}) {
  const [qtyBuy, setQtyBuy] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const buyAction = (e) => {
    fetch("http://localhost:3005/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qty: qtyBuy,
        price: buyPrice,
        uuid: uuid,
        mode: "Buy",
      }),
    }).then((response) => {
      console.log("order added successfully");
      setFormAction(null);
      setActionUuid(null);
    });
  };

  return (
    <>
      <h1 className="fs-5 fw-normall text-center">{uuid}</h1>
      <form className="p-0">
        <input
          className="w-50"
          placeholder="Oty"
          name="qty"
          required
          value={qtyBuy}
          onChange={(e) => {
            setQtyBuy(e.target.value);
          }}
        ></input>
        <input
          className="w-50"
          placeholder="Price"
          name="price"
          required
          value={buyPrice}
          onChange={(e) => {
            setBuyPrice(e.target.value);
          }}
        ></input>
        
      </form>
      <button className="w-50" onClick={buyAction}>
          Buy
        </button>
        <button className="w-50">Cancel</button>
      <div></div>
    </>
  );
}

export default BuyFormAction;
