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
export const handlePricing = (_pricing) => {
const _pricingData = _pricing;  
  console.log(_pricing)
  return _pricing
  
} 


const Signup = () => {
  const [pricing, setPricing] = useState([])

  const [pricings, setPricings] = useState([]);
  
  
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/billing_plans");

      setPricings(res.data);
      console.table(res.data)
    }
    fetchData();
  }, []);
  


  const [payPrice, setPayPrice] = useState({})
  const [isAnnual, setIsAnnual] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showPayment, setShowPayment  ] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

 

  const handleNext = () => {
    setShowForm(false);
    setShowPlans(true);
  }

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowPlans(false);
    setShowPayment(true);
  }

  const [currentStep, setCurrentStep] = useState(1);

  const handleProgress = (step) => {
    setCurrentStep(step);
  }



  const onPlanSelect = (plan) => {
    setSelectedPlan(plan);
  }
  const handleShowPricing = () => {
    if(!showPricing) setShowPricing(true);
    else setShowPricing(false)
  }
  
  function handlePayPrice() {
    setPayPrice(isAnnual ? parseInt(pricing._pricePerYear) : pricing._pricePerMonth);
    console.log(payPrice);
    return payPrice;
  }

  return (
    <div id="signuppagecontainer">

      
      <ul id="progressbar">
        <li className={currentStep === 1 ? "active" : ""}>Account Setup</li>
        <li className={currentStep === 2 ? "active" : ""}>Plan Selection</li>
        <li className={currentStep === 3 ? "active" : ""}>Payment</li>
      </ul>
         { showForm &&
        <>  

      <div className="signupbox" id="customerData" >
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
        <button className="nextbtn" onClick={() =>{ setShowForm(false); setShowPlans(true) ; handleProgress(2) }}/>
      </div>    
      </>
}
{ showPlans && 
<>

    <div className="" id="pricings" >

      
    <h2 className="price-heading"> Select Your Plan </h2>
    <div className="pricing-container">
      { 
      
      pricings.map((pricing) => (
        
        
        
        <div className="pricing-item" key={pricing._idPlan} onClick={() =>{
           setSelectedPlan(pricing);
           setShowPlans(false);
          handleProgress(3);
          setShowPayment(true)
           }} >
          <h3 className="pricing-kit">{pricing._planType}</h3>
          <p className="pricing-m">
            <sup>$</sup>{pricing._pricePerMonth} <sub>/MO</sub>
          </p>
          <p className="pricing-a">
            <sup>$</sup>{pricing._pricePerYear}<sub>/AN</sub>
          </p>
          <ul className="offers">
            <li>{pricing._storage + " SSD"} </li>
            <li>{pricing._maxAccountsNumber + " Accounts"}  </li>
            <li>{pricing._maxGroupsNumber + " Groups"}</li>
          </ul>

        </div>

      ))}

     
    </div>
  </div>
<button className="pricingBackBtn" onClick={() =>{ setShowForm(true); setShowPlans(false); handleProgress(1)}}/>
</>
}
{
  showPayment &&

<>
      <ReactPaypal plan={selectedPlan._idPlan}/>
<button className="pricingBackBtn" onClick={() =>{  setShowPlans(true); setShowPayment(false); handleProgress(2)}}/>
</>

}
    </div>

  );
}



export default Signup