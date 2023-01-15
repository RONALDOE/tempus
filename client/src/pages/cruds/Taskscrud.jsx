import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/crudtable.css";

function Taskstable() {
  //Ventana Modal

  //Tomar datos de la base de datos

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/tasks");

      setTasks(res.data);
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

  const filteredData = tasks.filter((row) => {
    return (
      row._taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._taskDeadline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._taskStatus.toLowerCase().includes(searchTerm.toLowerCase()) 
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
                <th className="tableHeader">Task</th>
                <th className="tableHeader">Deadline</th>
                <th className="tableHeader">Status</th>
                <th className="tableHeader">ID Employee</th>
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
                filteredData.map((task) => (
                  <tr className="tr" key={task._idTask}>
                    <td className="td" style={{visible:"none"}}>
                      {task._idTask ? task._idTask : "no data"}
                    </td>
                    <td className="td">{task._taskName ? task._taskName : "nodata"}</td>
                    <td className="td">{task._taskDeadline}</td>
                    <td className="td">{task._taskStatus}</td>
                    <td className="td">{task._designatedEmployee}</td>

                  
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

export default Taskstable;
