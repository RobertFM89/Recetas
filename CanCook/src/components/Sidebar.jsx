import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el sidebar si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "Close Sidebar" : "Show Sidebar"}
      </button>
      <div
        className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
        ref={sidebarRef}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;