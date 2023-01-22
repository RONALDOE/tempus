import { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../_loadingscreen/Loadingscreen";
import { useLocation } from "react-router-dom";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import "../../css/reactpaypal.css"


export default function ReactPaypal() {
  const location = useLocation();
  const [pricing, setPricing] = useState({});
  const [isAnnual, setIsAnnual] = useState(false);
  const [payPrice, setPayPrice] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Simulamos la carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  const _planId = location.pathname.split("/")[2];
  console.log(_planId);

  


  useEffect(() => {
    async function fetchPlanData() {
      const res = await axios.get(
        `http://localhost:8000/billing_plans/${selectedPlan}`
      );
      console.log(res.data);
      setPricing(res.data);
      setPayPrice(res.data._pricePerMonth);
      }
    fetchPlanData();
  }, {});

  function handlePayPrice() {
    isAnnual
      ? setPayPrice(parseInt(pricing._pricePerYear))
      : setPayPrice(pricing._pricePerMonth);
    console.log(payPrice);
    return payPrice;
  }

  if (loading) {
    return <LoadingScreen />;
  } else {
    return (
      <>

        <div className="payContainer">
          <div className="payPlanCard">
              <div className="pricing-container">
                <div className="pricing-item" key={pricing._idPlan}>
                  <h3 className="pricing-kit">{pricing._planType}</h3>
                  <p className="pricing-m">
                    <sup>$</sup>
                    {payPrice}
                    <sub>{isAnnual ? "/MO" : "/AN"}</sub>
                  </p>
                  <ul className="offers">
                    <li>{pricing._storage + " SSD"} </li>
                    <li>{pricing._maxAccountsNumber + " Accounts"} </li>
                    <li>{pricing._maxGroupsNumber + " Groups"}</li>
                  </ul>
                  <button
                    className="order-btn"
                    onClick={() => {
                      setIsAnnual(!isAnnual);
                      handlePayPrice();
                    }}
                  >
                    Change Plan
                  </button>
                </div>
              </div>

              </div>
            <div className="payPaypal">
    
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AVuYhTGfBCARH1p_dpWeZBYKF21PduoHXLI5-FpxCeTQTdojmHCcDSNGt7XX2YR235dw1WScxWgweBSN",
                      components: "buttons",
                      currency: "USD",
                    }}
                  >
                    <ButtonWrapper
                      amount={payPrice}
                      currency={"USD"}
                      showSpinner={true}
                    />
                  </PayPalScriptProvider>
            </div>
        </div>

      </>
    );
  }
}
// This values are the props in the UI

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, style }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [amount, currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};
