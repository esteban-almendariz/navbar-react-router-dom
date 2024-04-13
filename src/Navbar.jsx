import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ theme, setTheme }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <span>Esteban In Tech</span>
      </Link>
      <div
        className="hamburger"
        onClick={() => setOpenNav((prevState) => !prevState)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={openNav ? "open" : ""}>
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/projects">
          Projects
        </Link>
        <Link className="nav-links" to="/experience">
          Experience
        </Link>
        <Link className="nav-links" to="/About">
          About
        </Link>
      </ul>
      <img className="profile-picture" src="/IMG_5443.jpg" alt="" />
    </div>
  );
};

export default Navbar;
