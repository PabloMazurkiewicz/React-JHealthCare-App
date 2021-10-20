import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const ServiceDetails = () => {
    let { id } = useParams();

    const [serviceDetails, setServiceDetails] = useState([])


    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then((data) => {
                const foundService = data.filter(detail => detail.id == id)
                setServiceDetails(foundService);
            })
    }, [])



    const { name, description, image, price } = serviceDetails[0] || {}
    return (
        <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className="w-50">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">


                            <p className="text-nowrap"><strong >Service:{name}</strong></p>
                            <p className="card-text"> <strong>Description:</strong> {description}</p>

                            <p className="text-nowrap"><strong >Price:</strong> ${price}</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center text-md-left p-2">
                        <img src={image} className="img-fluid" alt="..." />
                    </div>
                    <div className="justify-content-center align-items-center">
                        <h5 className="card-title">Service:{name}</h5>
                        <p className="card-text">Description:{description}</p>
                        <h5 className="card-text text-bold">Price:${price}</h5>
                    </div>
                </div>
            </div> */}



        </div>













    );
};

export default ServiceDetails;