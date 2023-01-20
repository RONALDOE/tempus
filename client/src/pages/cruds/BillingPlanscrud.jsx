import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/crudtable.css";

function BillingPlanstable() {


  const [BillingPlans, setBillingPlans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/BillingPlans");

      setEmployees(res.data);
    }
    fetchData();
  }, []);


  async function handleDelete(id) {
    try {
      await axios.delete("http://localhost:8000/BillingPlans/" + id);
      console.log("si")
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const elementRef = useRef(null);


  const handleSearch = () => {
    if (!elementRef.current.classList.contains("inSearch")) {
      elementRef.current.classList.add("inSearch");
    } else elementRef.current.classList.remove("inSearch");
  };

  const [isDisabled, setIsDisabled] = useState(true);
  const disableSearch = () => {
    isDisabled
      ? (elementRef.current.style.color = "var(--black1)")
      : (elementRef.current.style.color = "transparent");
    setIsDisabled(!isDisabled);
  };

  function searchEvents() {
    handleSearch();
    disableSearch();
  }

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearched = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = BillingPlans.filter((row) => {
    return (
      row._idPlan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._planType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._pricePerMonth.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._pricePerYear.toString().includes(searchTerm) ||
      row._storage.toString().includes(searchTerm)||
      row._maxAccountsNumber.toString().includes(searchTerm)||
      row._maxGroupsNumber.toString().includes(searchTerm)
    );
  });

  return (
    <>
      <div className="crudContainer">
        <Link to="/BillingPlans/new">
          <button className="createButton">
            <i class="fa-solid fa-circle-plus fa-xl" /> Create
          </button>
        </Link>
        <input
          type="text"
          name="search"
          id="crudSearch"
          className="crudSearch "
          ref={elementRef}
          disabled={isDisabled}
          value={searchTerm}
          onChange={handleSearched}
        />

        <i
          class="fa-solid fa-magnifying-glass fa-xl searchIcon"
          onClick={searchEvents}
        />
        <div className="table-container">
          <table className="crudTable">
            <thead>
              <tr>
                <th className="tableHeader">idplan</th>
                <th className="tableHeader">plantype</th>
                <th className="tableHeader">pricePerMonth</th>
                <th className="tableHeader">pricePerYear</th>
                <th className="tableHeader">storage</th>
                <th className="tableHeader">maxAccountsNumber</th>
                <th className="tableHeader">maxGroupsNumber</th>
                <th className="tableHeader">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr className="tr">
                  <td className=" td noDataCell" colSpan={8}>
                    No data
                  </td>
                </tr>
              ) : (
                filteredData.map((BillingPlans) => (
                  <tr className="tr" key={BillingPlans._idPlan}>
                    <td className="td" style={{visible:"none"}}>
                      {BillingPlans._idPlan ? BillingPlans._idPlan : "no data"}
                    </td>
                    <td className="td">{BillingPlans._PlanType ? BillingPlans._PlanType : "nodata"}</td>
                    <td className="td">{BillingPlans._pricePerMonth}</td>
                    <td className="td">{BillingPlans._pricePerYear}</td>
                    <td className="td">{BillingPlans._storage}</td>
                    <td className="td">{BillingPlans._maxAccountsNumber}</td>
                    <td className="td">{BillingPlans._maxGroupsNumber}</td>
                    

                    <td className="td">
                      <Link to={`/BillingPlans/${BillingPlans._idPlan}`}>
                      <button
                        className="crudButton edit">
                        <i class="fa-solid fa-pen-to-square fa-xl" />
                        Edit
                      </button>
                      </Link>
                      <button
                        className="crudButton delete"
                        onClick={() => handleDelete(BillingPlans._idPlan)}
                      >
                        <i class="fa-solid fa-trash fa-xl" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BillingPlanstable;
