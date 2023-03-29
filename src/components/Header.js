import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header() {
  return (
    <div className="header bg-light shadow">
        <div className="header-container d-flex align-items-center justify-content-between">
            <h2>World Countries</h2>
            <div className="switch-mode d-flex align-items-center justify-content-between user-select-none">
                <DarkModeIcon />
                <h3>Dark Mode</h3>
            </div>
        </div>
    </div>
  )
}

export default Header