import React, { useState } from "react";
import "../../css/newinsert.css";
import InputMask from 'react-input-mask'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CheckToken from '../../utils/CheckToken'

function NewEmployee() {
  CheckToken()
  
  const [employee, setEmployees] = useState({
    _name: "",
    _lastName: "",
    _idNumber: "",
    _cellphone: "",
    _email: "",
  });

  const [nameError, setNameError] = useState(null)
  const [lastNameError, setLastNameError] = useState(null)
  const [idNumberError, setIdNumberError] = useState(null)
  const [cellphoneError, setCellphoneError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [existsErrors, setExistsErrors] = useState()

    


  const navigate = useNavigate()

  const handleChange = (e) =>{
    setEmployees((prev) =>({...prev, [e.target.name]: e.target.value}))
  }

  const handleChangeMasked = (e) =>{
    setEmployees((prev) =>({...prev, [e.target.name]: e.target.value.replace(/\D/g, '')}))
  }


  const [error, setError] = useState(null);

  // Definir la función setError
  function handleSetError(message) {
    // Actualizar el mensaje de error en el estado
    setError(message);
  }

  const checkUserErrors = () =>{
    var i = 0;
    if(employee._name.length < 1) { setNameError("Field Required"); setExistsErrors(i++)}
    else(setNameError(''))
    if(employee._lastName.length < 1) { setLastNameError("Field Required"); setExistsErrors(i++)}
    else(setLastNameError(''))    
    if(employee._email.length < 1) { setEmailError("Field Required"); setExistsErrors(i++)}
    else(setEmailError(''))
    
    if (employee._cellphone.length < 10) {
      setCellphoneError("Put a valid phone number"); setExistsErrors(i++)
    } else setCellphoneError("")
    
    if(employee._cellphone.length < 1) {
      setCellphoneError("Field Required")
      setExistsErrors(i++)
      
    }

    
    
    
    
    if(employee._idNumber.length < 10) {
      setIdNumberError("Enter a valid ID number"); setExistsErrors(i+1)
      
    }else(setIdNumberError(''))
    if(employee._idNumber.length < 1) { setIdNumberError("Field Required"); setExistsErrors(i+1)}
    
     

    
    console.log(i)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    checkUserErrors()

    if(existsErrors ===0){
      
      return setError("Some fields may need changes")
    }

    try{
        await axios.post("http://localhost:8000/employees", employee)
        console.log(employee)
       navigate("/employees")
    }catch(error){
        if (error.response.status === 400) {
            handleSetError("El empleado ya existe");
          } else {
            handleSetError("Error al crear el empleado");
          }
    }
  };

  return (
    <form onSubmit={handleSubmit}  noValidate className="insertForm">
      <label className="labelInsert" htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        className="textInsert"
        onChange={handleChange}
        name="_name"
        placeholder="John"
        required
      />
      <p className="error">{nameError}</p>
      <br />
      <label className="labelInsert" htmlFor="lastname">Lastname:</label>
      <input
        type="text"
        className="textInsert"
        id="lastname"
        name="_lastName"
        onChange={handleChange}
        placeholder="Doe"
        required
      />
      <p className="error">{lastNameError}</p>

      <br />
      <label className="labelInsert" htmlFor="idnumber">ID Number:</label>
      <InputMask
        mask='999-9999999-9'
        className="textInsert"
        type="text"
        id="idnumber"
        name="_idNumber"
        onChange={handleChangeMasked}
        placeholder="Enter your ID number"
        required
      />
      <p className="error">{idNumberError}</p>

      <br />
      <label className="labelInsert" htmlFor="cellphone">Cellphone:</label>
      <InputMask
        mask='(999)-999-9999'
        className="textInsert"
        type="text"
        id="cellphone"
        name="_cellphone"
        onChange={handleChangeMasked}
        placeholder="Enter your phone number"
        required
      />
      <p className="error">{cellphoneError}</p>

      <br />
      <label className="labelInsert" htmlFor="email">Email:</label>
      <input
        className="emailInsert"
        type="text"
        id="email"
        name="_email"
        placeholder="jdoe@gmail.com"
        onChange={handleChange}
        required
      />
      <p className="error">{emailError}</p>

      <button className="buttonInsert" type="submit">Create</button>
      <p className="error">{error}</p>

    </form>
  );
}

export default NewEmployee;
