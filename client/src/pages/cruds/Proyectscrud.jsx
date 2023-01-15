import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/crudtable.css";

function Proyectstable() {
  //Ventana Modal

  //Tomar datos de la base de datos

  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/proyects");

      setProyects(res.data);
    }
    fetchData();
  }, []);

  

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

  const filteredData = proyects.filter((row) => {
    return (
      row._proyectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._proyectDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._proyectDeadline.toString().includes(searchTerm) 
    );
  });

  return (
    <>
      <div className="crudContainer">
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
                <th className="tableHeader">Start Date</th>
                <th className="tableHeader">Deadline</th>
                <th className="tableHeader">Finished</th>
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
                filteredData.map((proyect) => (
                  <tr className="tr" key={proyect._idProyect}>
                    <td className="td" style={{visible:"none"}}>
                      {proyect._idProyect ? proyect._idProyect : "no data"}
                    </td>
                    <td className="td">{proyect._proyectName}</td>
                    <td className="td">{proyect._startDate}</td>
                    <td className="td">{proyect._proyectDeadline}</td>
                    <td className="td">{proyect._finishDate ? proyect._finishDate: " In Progress"}</td>

                   
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

export default Proyectstable;
