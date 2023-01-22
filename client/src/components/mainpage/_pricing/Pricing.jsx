import React, { useState, useEffect } from "react";
import "../../../css/pricing.css";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Pricing = (isDisplaying) => {
  const [pricings, setPricings] = useState([]);
  const [thisClass, setThisClass] = (" notShowing")


let pricingContainerClass = "";
  function CambiaClase(){
    
    if(!isDisplaying){
      pricingContainerClass = `pricingContainer ${bgClass} notShowing`
    }
    else {
      pricingContainerClass = `pricingContainer ${bgClass} showing`

    }
  }

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/billing_plans");

      setPricings(res.data);
      console.table(res.data)
    }
    fetchData();
  }, []);
  
  const location = useLocation()
  const [bgClass, setBgClass] = useState("");
  useEffect(() => {
    if (location.pathname === "/signup") {
      setBgClass("transparent-bg");
    } else {
      setBgClass("");
    }
  }, [location.pathname]);

  
  return (

    (location.pathname === "/signup"? 
    <div className={pricingContainerClass} id="pricings" >

      
    <h2 className="price-heading"> Select Your Plan </h2>
    <div className="pricing-container">
      { 
      
      pricings.map((pricing) => (
        
          
        <div className="pricing-item" key={pricing._idPlan}>
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
  </div> :
   <div className="pricingContainer" id="pricings">
      
   <h2 className="price-heading"> Pricing </h2>
   <div className="pricing-container">
     { 
     
     pricings.map((pricing) => (
       
       <Link to={`/pay/${pricing._idPlan}`} >
         
       <div className="pricing-item" key={pricing._idPlan}>
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
         <button className="order-btn">order now</button>
       </div>
     </Link>
     ))}

    
   </div>
 </div>
    
    
    )    
   
  );
};

export default Pricing;
