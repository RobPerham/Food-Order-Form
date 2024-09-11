import React, { useState } from "react";

function FoodOrderForm() {

  const [name, setName ] =useState("");
  const [phone, setPhone ] =useState("");
  const [address, setAddress ] =useState("");
  const [order, setOrder ] =useState("");

  const handleSubmit =(e) =>{
    e.preventDefault();
    alert(
      `Order Successful!
      Your order was ${order}.
      Please show your confirmation number for pickup.`
    )
  };

  return (
    <form onSummit={handleSubmit}>
      <lable htmlFor="name"> Name </lable>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />
      <lable htmlFor="phone"> phone </lable>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={(e)=> setPhone(e.target.value)}
      />
      <lable htmlFor="address"> address </lable>
      <input
        id="address"
        name="address"
        type="text"
        value={address}
        onChange={(e)=> setAddress(e.target.value)}
      />
      <lable htmlFor="order"> order </lable>
      <input
        id="order"
        name="order"
        type="text"
        value={order}
        onChange={(e)=> setOrder(e.target.value)}
      />
      <button type="submit"> Submit Order </button>
    </form>
  );
};


export default FoodOrderForm;

