import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const [ navBar, setNavbar] = useState((
    <ul className="list">
      <Link to="/login">
        <li>ENTRAR</li>
      </Link>
      <li>
        <a href="/">
          <img
            src="https://static.funimation.com/static/img/icons/icon-search.svg"
            alt="sdlafj"
          />
        </a>
      </li>
    </ul>
  ))

  if (token) {
    setNavbar(
      <ul className="list">
        <li>
          <a href="/"> 
            <img
              src="https://static.funimation.com/static/img/icons/icon-search.svg"
              alt="search icon"
            />
          </a>
        </li>
        <li>
          <Link to="/mylist">
            <img
              src="https://static.funimation.com/static/img/icons/icon-queue.svg"
              alt="list icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img
              src="https://www.funimation.com/static/img/default-avatar.jpg"
              alt="profile icon"
              className="navIcons"
              onClick={
                <div className="accountOptions">
                  <ul>
                    <li>
                      PROFILE
                    </li>
                    <li>
                      LOGOUT
                    </li>
                  </ul>
                </div>
              }
            />
          </Link>
        </li>
      </ul>
    );
  }



  return (
    <header>
      <nav id="navBar" >
        <div className="navigation">
          <Link to="/">
            <img
              src="https://static.funimation.com/static/img/common/funimation-logo.svg"
              alt="logo"
              id="funimationLogo"
            />
          </Link>
          <ul className="list">
            <li>
              <Link to="/allanimes">
              <p>STREAM</p>
              </Link>
            </li>
            <li>
              <p>DISCOVER</p>
            </li>
          </ul>
        </div>
        <div className="listItems2">
          <Link to="/register">
            <button type="button" class="btn btn-warning" id="buttonPremium">
              TESTE PREMIUM PLUS
            </button>
          </Link>
          <div className="listItems3">{navBar}</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
