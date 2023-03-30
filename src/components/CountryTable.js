import React from 'react'

function CountryTable({ darkMode, countries, error, showDetails }) {

    const showDetailsHandler = (e) => {
        const countryCode = e
        showDetails(countryCode)
    }

  return (
    <div className="country-table">
        <table className={`table table-responsive ${darkMode ? "text-light" : ""}`}>
            <thead>
                <tr>
                <th scope="col">Flag</th>
                <th scope="col">Name</th>
                <th scope="col">Capital</th>
                <th scope="col">Population</th>
                <th scope="col">Region</th>
                </tr>
            </thead>
            <tbody>
                {
                    !error ? (
                        countries.map((country, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="img img-responsive">
                                        <img className="img img-fluid" src={country.flags.png} alt={country.cca3} onClick={(e) => showDetailsHandler(e.target.alt)}/>
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
                            </tr>
                            
                        ))
                    ) : (<tr>Not found</tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default CountryTable