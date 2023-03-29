import React from 'react'

function Country() {
  return (
    <div className="container">
        <div className=" country row">
            <div className="col-12 col-md-6 col-lg-4 mt-5">
                <div className="card">
                    <img className="card-img-top" src="https://flagcdn.com/as.svg" alt=""/>
                    <div className="card-body">
                        <h5 className="name card-title">Name</h5>
                        <p>Population: 
                            <span>Test</span>
                        </p>
                        <p>Region: 
                            <span>Test</span>
                        </p>
                        <p>Capital: 
                            <span>Test</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Country