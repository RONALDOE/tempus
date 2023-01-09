import React, { useState, useEffect } from "react";
import "../../../css/pricing.css";
import axios from "axios";

const Pricing = () => {
  const [pricings, setPricings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/billing_plans");

      setPricings(res.data);
      console.table(res.data)
    }
    fetchData();
  }, []);

  return (
    <div className="pricingContainer" id="pricings">
      <h2 className="price-heading"> Pricing </h2>
      <div className="pricing-container">
        {pricings.map((pricing) => (
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
        ))}

       
      </div>
    </div>
  );
};

export default Pricing;
