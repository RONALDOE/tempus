import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/crudtable.css";

function FileUploadstable() {

  const [FileUploads, setFileUploads] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/FileUploads");

      setFileUploads(res.data);
    }
    fetchData();
  }, []);

  

  async function handleDelete(id) {
    try {
      await axios.delete("http://localhost:8000/FileUploads/" + id);
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

  const filteredData = FileUploads.filter((row) => {
    return (
      row._fileType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._file.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row._fileWeight.toString().includes(searchTerm) ||
      row._idProyect.toString().includes(searchTerm) ||
      row._idTask.toString().includes(searchTerm) ||
      row._timesTamp.toString().includes(searchTerm)
    );
  });

  return (
    <>
      <div className="crudContainer">
        <Link to="/FileUploads/new">
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
                <th className="tableHeader">idUpload</th>
                <th className="tableHeader">fileType</th>
                <th className="tableHeader">fileName</th>
                <th className="tableHeader">file</th>
                <th className="tableHeader">fileWeight</th>
                <th className="tableHeader">idProyect</th>
                <th className="tableHeader">idTask</th>
                <th className="tableHeader">timestamp</th>
                <th className="tableHeader">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr className="tr">
                  <td className=" td noDataCell" colSpan={9}>
                    No data
                  </td>
                </tr>
              ) : (
                filteredData.map((FileUploads) => (
                  <tr className="tr" key={FileUploads._idUpload}>
                    <td className="td" style={{visible:"none"}}>
                      {employee._idUpload ? FileUploads._idUpload : "no data"}
                    </td>
                    <td className="td">{FileUploads._fileType ? FileUploads._fileType : "nodata"}</td>
                    <td className="td">{FileUploads._fileName}</td>
                    <td className="td">{FileUploads._file}</td>
                    <td className="td">{FileUploads._fileWeight}</td>
                    <td className="td">{FileUploads._idProyect}</td>
                    <td className="td">{FileUploads._idTask}</td>
                    <td className="td">{FileUploads._timesTamp}</td>

                    <td className="td">
                      <Link to={`/FileUploads/${FileUploads._idUpload}`}>
                      <button
                        className="crudButton edit">
                        <i class="fa-solid fa-pen-to-square fa-xl" />
                        Edit
                      </button>
                      </Link>
                      <button
                        className="crudButton delete"
                        onClick={() => handleDelete(FileUploads._idUploads)}
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

export default FileUploadstable;
