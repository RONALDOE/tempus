import React from 'react';
import '../../css/modal.css'
const ModalEmployee = ({ isOpen, onClose }) => {

    
  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className="modal-content">
        {
            <>
        <input type="text" name="" id="employeeName" placeholder='Jhon'/>
        <label htmlFor="employeeName">Name</label>
        
        <input type="text" name="" id="employeeLastName" placeholder='Doe'/>
        <label htmlFor="employeeLastName">Lastname</label>

        <input type="text" name="" id="employeeIdNumber" placeholder='0000000000'/>
        <label htmlFor="employeeIdNumber">Id Number</label>

        <input type="text" name="" id="employeeCellphone" placeholder='0000000000'/>
        <label htmlFor="employeeCellphone">Cellphone</label>

        <input type="email" name="" id="employeeEmail" placeholder='Jhond@example.com'/>
        <label htmlFor="employeeEmail">Email</label>

             </>
        
        }
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalEmployee;