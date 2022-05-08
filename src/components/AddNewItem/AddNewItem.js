import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import './AddNewItem.css'

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            alert('New Item Successfully');
            console.log(result)
        })
    };
    return (
        <div className='w-50 mx-auto pt-5'>
            <h1 className='text-center'>Add New Item</h1>     
            <form className='d-flex flex-column py-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 py-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 py-2 d-none' placeholder='Email' {...register("email",)} value={user.email} />
                <textarea className='mb-2 py-2' placeholder='Description' {...register("description")} />
                <input className='mb-2 py-2' placeholder='Price' {...register("price")} />
                <input className='mb-2 py-2' placeholder='Photo URl' text="number" {...register("image")} />
                <input className='mb-2 py-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddNewItem;