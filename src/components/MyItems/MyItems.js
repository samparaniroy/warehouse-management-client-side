import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [items,setItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch(`https://hidden-atoll-75134.herokuapp.com/myitems?email=${user.email}`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    const item = items.filter(item=> item.email !== user.email);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
        if(proceed){
            const url = `https://hidden-atoll-75134.herokuapp.com/myitems/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }
    return (
        <div className='items-area'>
            <div className='items-form'>
                <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th scope='col'>Product Image</th>
                        <th scope="col">Products Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">product Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.email ?
                            items.map(item=>
                            <tr key={item._id}>
                            <td><img src={item.image} alt="" /></td>    
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>delete</button></td>
                            </tr>):
                            <td></td>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;