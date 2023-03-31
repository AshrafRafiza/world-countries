import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router';

function CountryDetails( { darkMode, countries, setDetailViewActive }) {

    const params = useParams()
    const navigate = useNavigate()

    let name
    let flagImg;
    let nativeName;
    let population;
    let region;
    let subregion;
    let capital;
    let languages;
    let currencies;
    let borders;

    //loop through countries until find the country with same code and get the details
    countries.forEach(country => {
        if (country.cca3 === params.countryCode) {
            name = country.name.common
            flagImg = country.flags.png;
            nativeName = Object.values(country.name.nativeName).map(({official}) => official);
            population = country.population;
            region = country.region;
            subregion = country.subregion;
            capital = country.capital;
            currencies = Object.values(country.currencies).map(({name}) => name).join(', ')
            languages = Object.values(country.languages).join(', ')
            borders = country.borders
        }
    })

    //go back to countries listing and set detail view as false
    const goBack = () => {
        setDetailViewActive(false)
        navigate("/")
    }

  return (
    <div className={`country-details min-vh-100 pt-2 ${darkMode ? "bg-dark" : ""} `}>
        {/* back button */}
        <Button className="back btn-light d-flex align-items-center justify-content-center shadow rounded border-0 fw-bold mx-3" onClick={goBack}>
            <ArrowBackIcon />
        </Button>

        {/* Details card section */}
        <div className="d-flex align-item-center justify-content-center">
            <div className={`img-container card mx-2 mt-2 w-75 h-100 mb-4 ${darkMode ? "bg-secondary text-light" : ""}`}>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src={flagImg} alt="" className="card-img" />
                            </div>
                            <div className="col-12 col-md-4">
                                <h5>{name}</h5>
                                <p>
                                    Native Name:{" "} <span className="">{nativeName}</span>
                                </p>
                                <p>
                                    Population:{" "} <span className="">{population}</span>
                                </p>
                                <p>
                                    Region:{" "} <span className="">{region}</span>
                                </p>
                                <p>
                                    Sub region:{" "} <span className="">{subregion}</span>
                                </p>
                            </div>
                            <div className="col-12 col-md-4">
                                <p>
                                    Capital:{" "} <span className="">{capital}</span>
                                </p>
                                <p>
                                    Currency:{" "} <span className="">{currencies}</span>
                                </p>
                                <p>
                                    Languages:{" "} <span className="">{languages}</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {
                                    borders ? (
                                        <>
                                            <h5>Borders</h5>
                                            <div className="d-inline-flex justify-content-space">
                                                {
                                                    borders.map((border, index) =>(
                                                        <div className="d-flex align-item-center justify-content-between mx-2" key={index}>
                                                            <div className="shadow px-2 text-center rounded">
                                                                <p className="mb-0">{border}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </>
                                    ) : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CountryDetails