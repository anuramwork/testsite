import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [record, setRecord] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const strongPassRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

    // if (!record.name.trim()) newErrors.name = "Name is required"
    if (!record.email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(record.email)) newErrors.email = "Invalid email format"
    if (!record.password) newErrors.password = "Password is required"
    // else if (record.password.length < 6) newErrors.password = "Password must be at least 6 characters"
    // else if (!strongPassRegex.test(record.password)) newErrors.password = "Include a letter, number, and special character"

    return newErrors
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitting(true)

    axios.post('http://localhost:5000/user/login', record)
      .then((res) => {
        console.log(res.data);
        if(res.data.status = 200){
            localStorage.setItem("token",res.data.token);
            alert("login successfull");
            navigate("/userhome")

        }
        // alert("Login successful")
        setRecord({email: "", password: "" })
      })
      .catch((err) => {
        console.log(err)
        alert("Error while logging user")
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>


        <p>
          <input type="email" name="email" placeholder="Enter email id" value={record.email} onChange={handleChange} />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </p>

        <p>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter the password"
            value={record.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{ marginLeft: "8px" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          
          {errors.password && <span style={{ color: "red", display: "block" }}>{errors.password}</span>}
        </p>

        <p>
          <button type="submit" disabled={submitting}>
            LOGIN
          </button>

        </p>
        <a href="/register">New user? Register here</a>

      </form>
    </div>
  )
}

export default Login;
