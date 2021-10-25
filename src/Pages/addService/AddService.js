import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddService.css";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            // console.log(data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully')
                    reset();
                }
                // console.log(res)
            })
    };
    return (
        <div className="addService">
            <h2>Add your data to Database</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name")} />
                <textarea placeholder="Description"  {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="image url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>

    );
};
export default AddService;
