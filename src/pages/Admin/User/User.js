import React from 'react';
import {  useNavigate } from 'react-router-dom'

const User = () => {
 
 let navigate = useNavigate()
 const maecel = (userId) => {
  console.log('click')
  navigate("../edit/"+userId)
 }

 

    return (        
    <div className='User'>
             User List 
             <button onClick={() => maecel(4)} >User 4

             </button>
    </div>
    );
};

export default User;