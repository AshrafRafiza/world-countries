import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Country from './components/Country';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import TableViewIcon from '@mui/icons-material/TableView';
import CountryDetails from './components/CountryDetails';

function App() {

  const [tableViewActive, setTableViewActive] =useState(false)

  const label = { inputProps: { 'aria-label': 'Table View' } };

  // change tableView state to view table
  const tableViewChange = (e) => {
    setTableViewActive(!tableViewActive)
    
  };
  return (
    <div className="App bg-light min-vh-100">
      <Header />

      <Routes>
        {/* main page */}
        <Route
          path="/"
          element={
            <div className="app-body">
              <div className="inputs d-flex align-items=center justify-content-between mx-2">

                {/* search section */}
                <div className="search-input">
                  <div className="input-group p-2">
                      <span className="input-group-text" id="search-addon">
                        <SearchIcon />
                      </span>
                      <input type="search" className="form-control" placeholder="Search country" aria-label="Search" aria-describedby="search-addon" />
                  </div>
                </div>
                <div className="right-inputs d-flex justify-content-between mt-2">

                  {/* Select region section */}
                  <div className="select-region mx-2">
                    <select className="form-select">
                        <option value="All">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                  </div>

                  {/* Table view switch section */}
                  <div className="change-view d-flex">
                    <Switch {...label} label="Table View" checked={tableViewActive} onChange={tableViewChange} />
                    <div className="mt-2">
                      <TableViewIcon />
                    </div>
                  </div>
                </div>
              </div>
              

              {/* Country card section */}
              <div className="countries">
                {tableViewActive ? <p>Table View</p> : <Country />}
                
              </div>
          </div>
        } />

        {/* Country Details page */}
        <Route 
          path="/details" 
          element={<CountryDetails />}/>
          
      </Routes>
    </div>
  );
}

export default App;
