import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Body(){
 
    const[name,setname]=useState('')
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function registeruser(event){
        event.preventDefault()
        var users=JSON.parse(localStorage.getItem('users') || "[]")
        var newuser ={
            name :name,
            username: username,
            password:password
        }
       
        users.push(newuser)

        localStorage.setItem('users',JSON.stringify(users))
        alert('Registration is succssfull')
    }

    return <div>
        <div className='row justify-contant-center'>
            <div className='col-md-6'>
      <img src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597__480.png" alt="" />
            </div>
            <div className='col-md-4 bod'>
                <h1>Register </h1>
           <form action="" onSubmit={registeruser}>
            
            <input type="text"  placeholder='name' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input type="text"  placeholder='username' className='form-control'value={username} onChange={(e)=>{setusername(e.target.value)}} />
            <input type="text"  placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

            <input type="submit" className='btn btn-primary' value='signup' />

           </form>
            </div>
        </div>
    </div>
}
export default Body