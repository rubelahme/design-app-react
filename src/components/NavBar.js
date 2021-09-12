import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBarData } from "../JsonData/NavBavJason";
import "../style/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [logo, setLogo] = useState(false);

  const handelLog = () => {
    setLogo(!logo);
  };
  return (
    <>
      <nav className="navBar">
        <div>
          <h1 className="navBar-logo">
            {" "}
            <Link to="/">React</Link>
          </h1>
        </div>
        <div className="navBar-Item">
          <div onClick={handelLog} className="navBar-icon">
            {logo ? (
              <span>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faBars} />
              </span>
            )}
          </div>
          <ul className={logo ? "nav-menu active" : "nav-menu"}>
            {NavBarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
