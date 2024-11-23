import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './add.css'
import toast from 'react-hot-toast'

const Add = () => {

    const users = {
        fname:'',
        lname:'',
        email:'',
        phone:'',
        password:''
    }

    const [user, setUser] = useState(users)
    const navigate = useNavigate()

    const inputhandler = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }

    const submitForm = async(e) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/api/create', user)
        .then((response) => {
           toast.success(response.data.msg, {position: "top-right"}) 
           navigate('/')     
        })
        .catch(error => console.log(error))
    }

  return (
    <div className='addUser'>
        <Link to = {'/'}><i className="fa-solid fa-arrow-left"></i></Link>

        <h3>Add New User</h3>

        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputgroup">
                <label htmlFor="fname">First Name</label>
                <input type="text" onChange={inputhandler} name="fname" id="fname" placeholder='First Name' required />
            </div>

            <div className="inputgroup">
                <label htmlFor="lname">Last Name</label>
                <input type="text" onChange={inputhandler} name="lname" id="lname" placeholder='Last Name' required />
            </div>

            <div className="inputgroup">
                <label htmlFor="email">E-Mail</label>
                <input type="text" onChange={inputhandler} name="email" id="email" placeholder='E-mail' required />
            </div>

            <div className="inputgroup">
                <label htmlFor="phone">Phone No.</label>
                <input type="number" onChange={inputhandler} name="phone" id="phone" placeholder='Mobile no.' required />
            </div>

            <div className="inputgroup">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={inputhandler} name="password" id="password" placeholder='Password' required />
            </div>

            <div className="inputgroup">
                <button type='submit'>Add User</button>
            </div>
        </form>
    </div>
  )
}

export default Add