import React, { Component, useEffect, useState } from "react";
import '../../css/signup.css';
import FontAwesome from "fontawesome"
import { Link } from 'react-router-dom';
import Pricing from "../../components/mainpage/_pricing/Pricing";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios"
import ReactPaypal from "../../components/_paypal/ReactPaypal";


const Signup = () => {


  const [pricing, setPricing] = useState([])
  const [payPrice, setPayPrice] = useState({})
  const [selectedPlan, setSelectedPlan] = useState({})
  const [isAnnual, setIsAnnual] = useState(false);


  useEffect(() => {
    async function fetchPlanData() {
      const res = await axios.get(
        `http://localhost:8000/billing_plans/1`
        );
        console.log(res.data);
        setPricing(res.data);
      setPayPrice(res.data._pricePerMonth);
    }
        console.log("res.data");
    fetchPlanData();
  }, []);

  
  function handlePayPrice() {
    setPayPrice(isAnnual ? parseInt(pricing._pricePerYear) : pricing._pricePerMonth);
    console.log(payPrice);
    return payPrice;
  }

  return (
    <div id="signuppagecontainer">
      <ul id="progressbar">
        <li class="active">Account Setup</li>
        <li>Social Profiles</li>
        <li>Personal Details</li>
      </ul>

      <div className="signupbox" id="customerData" style={{ display: "none" }}>
        <h2 className="signuph2" id="signupTitle"> Sign Up </h2>
        <form className="signupform" action=""
          autocomplete="off">

          <div className="cl">

            <div className="signupinputBox">
              <input className="signupinput" type="text"
                required />
              <span className="signupspan">Name</span><i className="signupi"></i>
            </div>

            <div className="signupinputBox">
              <input className="signupinput" type="email"
                required />
              <span className="signupspan">E-mail</span><i className="signupi"></i>
            </div>

            <div class="signupinputBox">
              <input className="signupinput" type="password"
                required />
              <span className="signupspan">Password</span><i className="signupi"></i>
            </div>
          </div>
          <div className="cl">

            <div className="signupinputBox">
              <input className="signupinput" type="text"
                required />
              <span className="signupspan">Lastname</span><i className="signupi"></i>
            </div>

            <div className="signupinputBox">
              <input className="signupinput" type="email"
                required />
              <span className="signupspan">Cellphone</span><i className="signupi"></i>
            </div>

            <div class="signupinputBox">
              <input className="signupinput" type="password"
                required />
              <span className="signupspan">Confirm    Password</span><i className="signupi"></i>
            </div>
          </div>
        </form>
        <button className="nextbtn" />
      </div>


      <Pricing />

       <ReactPaypal/>
    </div>

  );
}



export default Signup