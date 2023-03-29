import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header({ onClick, darkMode, tableViewActive }) {
  return (
    <div className={`header ${darkMode ? "header-darkMode" : "bg-light"} shadow`}>
        <div className="header-container d-flex align-items-center justify-content-between">
            <h2>{tableViewActive ? "Countries Table View" : "Countries Card View"}</h2>
            <div className="switch-mode d-flex align-items-center justify-content-between user-select-none" onClick={onClick}>
                <DarkModeIcon />
                <h3>Dark Mode</h3>
            </div>
        </div>
    </div>
  )
}

export default Header