import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router';

function CountryDetails( { darkMode, countries }) {

    const params = useParams()
    const navigate = useNavigate()

    let flagImg;
    let nativeName;
    let population;
    let region;
    let subregion;
    let capital;
    // let Languages = [];

    countries.forEach(country => {
        if (country.cca3 === params.countryCode) {
            flagImg = country.flags.png;
            nativeName = country.name.common;
            population = country.population;
            region = country.region;
            subregion = country.subregion;
            capital = country.capital;

            // country.languages.forEach(language => {
            //     languages.push(language.eng)
            // })
        }
    })

    //go back to countries listing
    const goBack = () => {
        navigate("/")
    }

  return (
    <div className={`country-details min-vh-100 pt-2 ${darkMode ? "bg-dark" : ""} `}>
        <Button className="back btn-light d-flex align-items-center justify-content-center shadow rounded border-0 gap-2 fw-bold mx-2" onClick={goBack}>
            <ArrowBackIcon />
            <p className="mt-3">Back</p>
        </Button>

        <div className="d-flex align-item-center justify-content-center">
            <div className={`img-container card mx-2 mt-2 w-75 h-100 mb-4 ${darkMode ? "bg-secondary text-light" : ""}`}>
                <img src={flagImg} alt="" className="card-img" />
                <div className="card-body">
                    <h5 className="card-title mx-2">Name</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
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
                            <div className="col-12 col-md-6">
                                <p>
                                    Capital:{" "} <span className="">{capital}</span>
                                </p>
                                <p>
                                    Top-level Domain:{" "} <span className="">Test</span>
                                </p>
                                <p>
                                    Currency:{" "} <span className="">Test</span>
                                </p>
                                <p>
                                    Languages:{" "} <span className="">Test</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5>Borders</h5>
                                <div className="d-inline-flex justify-content-space">
                                    <div className="">
                                        <p>Test</p>
                                    </div>
                                    <div className="">
                                        <p>Test</p>
                                    </div>
                                    <div className="">
                                        <p>Test</p>
                                    </div>
                                </div>
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