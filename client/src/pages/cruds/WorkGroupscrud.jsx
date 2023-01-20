import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/crudtable.css";

function  WorkGroupstable() {

  const [WorkGroups, setWorkGroups] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/WorkGroups");

      setEmployees(res.data);
    }
    fetchData();
  }, []);

  

  async function handleDelete(id) {
    try {
      await axios.delete("http://localhost:8000/WorkGroups/" + id);
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

  const filteredData = WorkGroups.filter((row) => {
    return (
      row._groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._groupLeader.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._groupTask.toLowerCase().includes(searchTerm.toLowerCase()) 
 
    );
  });

  return (
    <>
      <div className="crudContainer">
        <Link to="/WorkGropus/new">
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
                <th className="tableHeader">idGroup</th>
                <th className="tableHeader">groupNmae</th>
                <th className="tableHeader">groupLeader</th>
                <th className="tableHeader">groupTask</th>
                <th className="tableHeader">Actions</th>
        
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr className="tr">
                  <td className=" td noDataCell" colSpan={5}>
                    No data
                  </td>
                </tr>
              ) : (
                filteredData.map((WorkGroups) => (
                  <tr className="tr" key={eWorkGroups._idGropus}>
                    <td className="td" style={{visible:"none"}}>
                      {WorkGroups._idGroup ? WorkGroups._idGroup : "no data"}
                    </td>
                    <td className="td">{WorkGroups._name ? employee._name : "nodata"}</td>
                    <td className="td">{WorkGroups._groupName}</td>
                    <td className="td">{WorkGroups._groupLeader}</td>
                    <td className="td">{WorkGroups._groupTask}</td>

                    <td className="td">
                      <Link to={`/employee/${WorkGroups._idGroup}`}>
                      <button
                        className="crudButton edit">
                        <i class="fa-solid fa-pen-to-square fa-xl" />
                        Edit
                      </button>
                      </Link>
                      <button
                        className="crudButton delete"
                        onClick={() => handleDelete(WorkGroups._idGroup)}
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

export default WorkGroupstable;
