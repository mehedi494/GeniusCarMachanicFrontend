import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services/')
            .then(res => res.json())
        .then(data=>setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    window.confirm('Are You sure you want to Delete')
                    alert('Successfully Deleted')
                }
        })

    }
    return (
        <div>
            <h1>this manage Pages</h1>
            {
                services.map(service => <div>
                    <h3>{service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;