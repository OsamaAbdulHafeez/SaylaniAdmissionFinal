import React from "react";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { FaCity, FaLeanpub, FaChalkboard } from "react-icons/fa";
import logo from "./assets/imagelogo.png";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} alt="SMIT logo" className="icon_header" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Students">
            <BsPeopleFill /> Students
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Courses">
            <FaLeanpub /> Courses
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Skills">
            <FaChalkboard /> Skills
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Cities">
            <FaCity /> Cities
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Reports">
            <BsMenuButtonWideFill /> Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
