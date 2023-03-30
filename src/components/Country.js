import React from 'react'

function Country({ darkMode, countries, error}) {
  return (
    <div className="container">
        <div className=" country row">
            {
                !error ? (
                    countries.map((country, index) => (
                        <div className="col-12 col-md-6 col-lg-4 mt-5" key={index}>
                            <div className={`card h-100 ${darkMode ? "bg-secondary" : ""}`}>
                                <img className="card-img-top h-100 country-flag" src={country.flags.png} alt=""/>
                                <div className={`card-body ${darkMode ? "text-light" : ""}`}>
                                    <h5 className="name card-title">{country.name.common}</h5>
                                    <p>Population:{" "} 
                                        <span>{country.population}</span>
                                    </p>
                                    <p>Region:{" "} 
                                        <span>{country.region}</span>
                                    </p>
                                    <p>Capital:{" "} 
                                        <span>{country.capital}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (<p>No countries found...</p>) 
            }
            
        </div>
    </div>
  )
}

export default Country