import React, { useState, useEffect } from 'react';
import Service from './Service';

const SubBanner = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="subbanner-container px-24">
            <div className=" relative -top-12 ">
                <div className=" grid justify-items-center sm:grid-cols-1  gap-y-7 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(service => <Service keu={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SubBanner;