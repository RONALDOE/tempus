import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/crudtable.css";
import CheckToken from '../../utils/CheckToken'

function Employeestable() {
  //Ventana Modal
  CheckToken()

  //Tomar datos de la base de datos

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/employees");

      setEmployees(res.data);
    }
    fetchData();
  }, []);

  

  async function handleDelete(id) {
    try {
      await axios.delete("http://localhost:8000/employees/" + id);
      console.log("si")
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  //Aqui declaro el elementRef para cambiar atributos de el elemento seleccionado (Buscador)
  const elementRef = useRef(null);

  //Para que expanda y cierre al hacerle click
  const handleSearch = () => {
    if (!elementRef.current.classList.contains("inSearch")) {
      elementRef.current.classList.add("inSearch");
    } else elementRef.current.classList.remove("inSearch");
  };

  //Habilita el elemento del buscador
  const [isDisabled, setIsDisabled] = useState(true);
  const disableSearch = () => {
    isDisabled
      ? (elementRef.current.style.color = "var(--black1)")
      : (elementRef.current.style.color = "transparent");
    setIsDisabled(!isDisabled);
  };

  //Recopilando funciones en una sola
  function searchEvents() {
    handleSearch();
    disableSearch();
  }

  //Buscar los datos
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearched = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = employees.filter((row) => {
    return (
      row._name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._idEmployee.toString().includes(searchTerm) ||
      row._idNumber.toString().includes(searchTerm)
    );
  });

  return (
    <>
      <div className="crudContainer">
        <Link to="/employee/new">
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
                <th className="tableHeader">ID</th>
                <th className="tableHeader">Name</th>
                <th className="tableHeader">Lastname</th>
                <th className="tableHeader">ID Number</th>
                <th className="tableHeader">Cellphone</th>
                <th className="tableHeader">Email</th>
                <th className="tableHeader">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr className="tr">
                  <td className=" td noDataCell" colSpan={7}>
                    No data
                  </td>
                </tr>
              ) : (
                filteredData.map((employee) => (
                  <tr className="tr" key={employee._idEmployee}>
                    <td className="td" style={{visible:"none"}}>
                      {employee._idEmployee ? employee._idEmployee : "no data"}
                    </td>
                    <td className="td">{employee._name ? employee._name : "nodata"}</td>
                    <td className="td">{employee._lastName}</td>
                    <td className="td">{employee._idNumber}</td>
                    <td className="td">{employee._cellphone}</td>
                    <td className="td">{employee._email}</td>

                    <td className="td">
                      <Link to={`/employee/${employee._idEmployee}`}>
                      <button
                        className="crudButton edit">
                        <i class="fa-solid fa-pen-to-square fa-xl" />
                        Edit
                      </button>
                      </Link>
                      <button
                        className="crudButton delete"
                        onClick={() => handleDelete(employee._idEmployee)}
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

export default Employeestable;
