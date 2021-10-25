import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Service from './../../Home/Service/Service';

const Booking = () => {
    
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data=>setService(data))
        
    },[])
    return (
        <div>
            <h2>Details of: {service.name} </h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;