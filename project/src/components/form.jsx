import React from 'react'
import { useState } from 'react'

function Form() {
    // TAKING FORM DATA USING NORMAL VARIABLE
    // const user = {}
    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //      console.log(user.name)
    // }

    // const handleChange = (e)=>{
    //     user.name = e.target.value
    //     console.log(user.name)
    // }

    //TAKING FORM DATA USING STATE VARIABLE -- PROPER METHOD
    const [form , setForm] = useState({fullname:"", fullemail: "", fullpassword: ""})

     const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(form)
    }

    const handleChange = (e)=>{
            setForm({...form, [e.target.name]: e.target.value})
        }
  return (

    
    <>
    <h2>Registration Form</h2>
    <form action= "" onSubmit={handleSubmit}>
        <p><input type="text"  placeholder='Name' name='fullname' onChange={handleChange}/></p>
        <p><input type="email"  placeholder='Email' name='fullemail' onChange={handleChange}/></p>
        <p><input type="password"  placeholder='Password' name='fullpassword' onChange={handleChange}/></p>
        <p><input type="submit"   name='register'/></p>

    </form>
    </>
    
  )
}

export default Form
