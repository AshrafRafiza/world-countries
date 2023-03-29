import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from 'react-bootstrap/Button';

function CountryDetails() {
  return (
    <div className="country-details">
        <Button className="back btn-light d-flex align-items-center justify-content-center shadow mt-2 rounded border-0 gap-2 fw-bold mx-2">
            <ArrowBackIcon />
            <p className="mt-3">Back</p>
        </Button>

        <div className="d-flex align-item-center justify-content-center">
            <div className="img-container card mx-2 mt-2 w-75 h-100 mb-4">
                <img src="https://flagcdn.com/as.svg" alt="" className="card-img" />
                <div className="card-body">
                    <h5 className="card-title mx-2">Name</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>
                                    Native Name:{" "} <span className="">Test</span>
                                </p>
                                <p>
                                    Population:{" "} <span className="">Test</span>
                                </p>
                                <p>
                                    Region:{" "} <span className="">Test</span>
                                </p>
                                <p>
                                    Sub region:{" "} <span className="">Test</span>
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>
                                    Capital:{" "} <span className="">Test</span>
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