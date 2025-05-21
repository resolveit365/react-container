import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest");
  const [qty, setQty] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQtyChange(event) {
    setQty(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>
      <input value={qty} onChange={handleQtyChange} type="number"></input>
      <p>Qty: {qty}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        type="text"
        placeholder="Enter delivery instructions here"
        rows="4"
        cols="35"
      ></textarea>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select a payment method</option>
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="Apple Pay">Apple Pay</option>
        <option value="Google Pay">Google Pay</option>
        <option value="Venmo">Venmo</option>
        <option value="Zelle">Zelle</option>
      </select>
      <p>Payment Type: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
