import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';
// import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Country from './components/Country';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import TableViewIcon from '@mui/icons-material/TableView';
import CountryDetails from './components/CountryDetails';
import { apiURL } from './components/util/api';
import CountryTable from './components/CountryTable';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [tableViewActive, setTableViewActive] = useState(false)
  const [detailViewActive, setDetailViewActive] = useState(false)
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState()

  const countriesInputRef = useRef();
  const regionRef = useRef();
  const navigate = useNavigate();

  const label = { inputProps: { 'aria-label': 'Table View' } };

  // change Mode
  const switchMode = () => {
    setDarkMode((prevState) => !prevState)
  };

  // change tableView state to view table
  const tableViewChange = (e) => {
    setTableViewActive(!tableViewActive)
    
  };

  // search country
  const searchCountries = () => {
    const searchValue =countriesInputRef.current.value;

    if (searchValue.trim()) {
      axios.get(`${apiURL}/name/${searchValue}`)
        .then(response => {
          const countryData = response.data
          setCountries(countryData)
        })
        .catch(error => {
          console.log(error)
          setError(error)
        })
    }
  };

  // select countries by region
  const selectRegion = () => {
    const selectValue = regionRef.current.value;

    if (selectValue.trim()){
      if (selectValue === "All") {
        axios.get(`${apiURL}/all`)
          .then(response => {
            const countryData = response.data
            setCountries(countryData)
          })
          .catch(error => {
            console.log(error)
            setError(error)
          })
      } else {
        axios.get(`${apiURL}/region/${selectValue}`)
          .then(response => {
            const countryData = response.data
            setCountries(countryData)
          })
          .catch(error => {
            console.log(error)
            setError(error)
          })
      }
    }
  }

  // supply country code to country details page and set detail view as true
  const showDetails = (countryCode) => {
    setDetailViewActive(true)
    navigate(`/${countryCode}`);
  }
  
  useEffect(() => {
    //fetch all countries
    axios.get(`${apiURL}/all`)
        .then(response => {
            const countryData = response.data
            setCountries(countryData)
        })
        .catch(error => {
            console.log(error)
            setError(error)
        })
  },[]);

  return (
    <div className="App bg-light min-vh-100">
      <Header onClick={switchMode} darkMode={darkMode} tableViewActive={tableViewActive} detailViewActive={detailViewActive} />

      <Routes>
        {/* main page */}
        <Route
          path="/"
          element={
            <div className={`app-body vh-100 ${darkMode ? 'bg-dark' : ''}`}>
              <div className="inputs d-flex align-items=center justify-content-between mx-2">

                {/* search section */}
                <div className="search-input">
                  <div className="input-group p-2">
                      <span className="input-group-text" id="search-addon">
                        <SearchIcon />
                      </span>
                      <input 
                        type="search" 
                        className={`form-control ${darkMode ? "search-darkMode text-light" : ""}`}
                        placeholder="Search country"
                        aria-label="Search" 
                        aria-describedby="search-addon"
                        ref={countriesInputRef}
                        onChange={searchCountries} />
                  </div>
                </div>
                <div className="right-inputs d-flex justify-content-between mt-2">

                  {/* Select region section */}
                  <div className="select-region mx-2">
                    <select 
                      className={`form-select ${darkMode ? "bg-dark text-light" : ""}`}
                      ref={regionRef}
                      onChange={selectRegion}
                    >
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
                    <Switch {...label} 
                      label="Table View" 
                      checked={tableViewActive} 
                      color={darkMode ? "warning" : "default"}
                      onChange={tableViewChange}
                      
                    />
                    <div className="mt-2">
                      <TableViewIcon className={`${darkMode ? 'text-light' : ""}`} />
                    </div>
                  </div>
                </div>
              </div>
              

              {/* Country card section */}
              <div className={`countries ${darkMode ? "bg-dark" : ""}`}>
                <div  className="container">
                  <div className=" country row">
                    {
                    tableViewActive ? (<CountryTable darkMode={darkMode} countries={countries} error={error} showDetails={showDetails} />) :
                    (!error ? ((countries.map((country, index) => (
                      <Country
                        darkMode={darkMode}
                        key={index}
                        countryCode={country.cca3}
                        name={country.name.common}
                        capital={country.capital}
                        population={country.population}
                        region={country.region}
                        flag={country.flags.png}
                        showDetails={showDetails}
                      />
                    )))) : "Country not found")
                  }
                  </div>
                </div>
              </div>
          </div>
        } />

        {/* Country Details page */}
        <Route 
          path="/:countryCode" 
          element={<CountryDetails darkMode={darkMode} countries={countries} setDetailViewActive={setDetailViewActive}/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
