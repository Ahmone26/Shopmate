import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="navbar">
      <input type="checkbox" id="check" />
      <label for="check" className="burger">
        <FontAwesomeIcon icon={faBars}/>
      </label>
      <FontAwesomeIcon icon={faArrowLeft} id="arrow"/>
        <label className="logo">SHOPMATE</label>
        <ul>
           <li className="lista">
             <a href="/women"><strong>Women</strong></a>
          </li>
          <li className="lista">
            <a href="/men"><strong>Men</strong></a>
          </li>
          <li className="lista">
            <a href="/kids"><strong>Kids</strong></a>
          </li>
          <li className="lista">
            <a href="/shoes"><strong>Shoes</strong></a>
          </li>
          <li className="lista">
            <a href="/brands"><strong>Brands</strong></a>
          </li>
          <li href="" className="ikone" id="icons2">
          <FontAwesomeIcon icon={faSearch}/>
          </li>
          
          <li href="" id="icons">
          <button className="modal-btn ikone" onClick={() => setModalIsOpen(true)}>
            <FontAwesomeIcon icon={faShoppingBag}/>
          </button> 

          <Modal
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="container-modal">
              <h2>Prvi modal</h2>
              <p>Prvi paragraf u modalu</p>
            </div>
          </Modal>
          </li>
        </ul>
        </div>
  );
}
export default Navbar;
