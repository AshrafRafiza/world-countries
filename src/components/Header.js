import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header({ onClick, darkMode, tableViewActive, detailViewActive }) {
  return (
    <div className={`header ${darkMode ? "header-darkMode" : "bg-light"} shadow`}>
        <div className="header-container d-flex align-items-center justify-content-between">
            <h2>
              {
                !detailViewActive ?
                (tableViewActive ? "Table View" : "Card View") :
                "Detail View"
              }
            </h2>
            <div className="switch-mode d-flex align-items-center justify-content-between user-select-none" onClick={onClick}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </div>
        </div>
    </div>
  )
}

export default Header