// src/components/Modal.js
import React from "react";
import '../styles/Modal.css';

const Modal = ({ show, closeModal }) => {
  if (!show) return null;

  return (

    <div className="modal-overlay">

      <div className="modal-content">

        <span className="close-btn" onClick={closeModal}>

          &times;

        </span>

        <h2>Login</h2>

        <form>

          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit">Login</button>

        </form>

      </div>

    </div>

  );

};

export default Modal;
