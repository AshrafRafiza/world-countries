import React from 'react'

function CountryTable({ darkMode, countries, error, showDetails }) {

    //pass country code to app when user click a country flag
    const showDetailsHandler = (e) => {
        const countryCode = e
        showDetails(countryCode)
    }

  return (
    <div className="country-table">
        <p className={`countrytable-instruction ${darkMode ? "text-light" : ""}`}>Click on the flag to see details</p>
        <table className={`table table-responsive ${darkMode ? "text-light" : ""}`}>
            <thead>
                <tr>
                <th scope="col">Flag</th>
                <th scope="col">Name</th>
                <th scope="col">Capital</th>
                <th scope="col">Population</th>
                <th scope="col">Region</th>
                <th scope="col">Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    !error ? (
                        countries.map((country, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="img img-responsive">
                                        <img className="img img-fluid table-img" src={country.flags.png} alt={country.cca3} onClick={(e) => showDetailsHandler(e.target.alt)}/>
                                    </div>
                                    
                                    
                                </td>
                                <td>
                                    <div>
                                        {country.name.common}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {country.capital}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {country.population}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {country.region}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {
                                            (!country.currencies) ? 
                                                "Currency not available" : (Object.values(country.currencies).map(({name, symbol}) =>
                                                    <div className="d-flex" key={name}>
                                                        <p className="mx-2">{symbol}</p>
                                                        <p>{name}</p>
                                                    </div>
                                                    
                                                ))
                                        }
                                    </div>
                                </td>
                            </tr>
                            
                        ))
                    ) : 
                    <></>
                }
            </tbody>
        </table>
        {error ? <p className={`${darkMode ? "text-light" : ""}`}>Country not found</p> : <></>}
    </div>
  )
}

export default CountryTable