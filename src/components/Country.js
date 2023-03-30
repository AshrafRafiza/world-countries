import React from 'react'

function Country({ darkMode, index, name, capital, population, region, flag, error, showDetails, countryCode }) {

    const showDetailsHandler = () => {
        showDetails(countryCode)
    }

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-5" key={index} onClick={showDetailsHandler}>
        <div className={`card h-100 ${darkMode ? "bg-secondary" : ""}`}>
            <img className="card-img-top h-100 country-flag" src={flag} alt=""/>
            <div className={`card-body ${darkMode ? "text-light" : ""}`}>
                <h5 className="name card-title">{name}</h5>
                <p>Population:{" "} 
                    <span>{population}</span>
                </p>
                <p>Region:{" "} 
                    <span>{region}</span>
                </p>
                <p>Capital:{" "} 
                    <span>{capital}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Country