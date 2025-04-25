import React, { useState } from 'react'
import axios from 'axios'

function Registration() {
  const [record, setRecord] = useState({ name: "", email: "", password: "" })
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

    if (!record.name.trim()) newErrors.name = "Name is required"
    if (!record.email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(record.email)) newErrors.email = "Invalid email format"
    if (!record.password) newErrors.password = "Password is required"
    else if (record.password.length < 6) newErrors.password = "Password must be at least 6 characters"
    else if (!strongPassRegex.test(record.password)) newErrors.password = "Include a letter, number, and special character"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitting(true)
    console.log("submitting");

    axios.post('http://localhost:5000/user/register', record)
      .then((res) => {
        alert("Successfully registered")
        setRecord({ name: "", email: "", password: "" })
      })
      .catch((err) => {
        console.log(err)
        alert("User registration failed")
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <div>
      <h1>REGISTRATION PAGE</h1>
      <form onSubmit={handleSubmit}>

        <p>
          <input type="text" name="name" placeholder="Enter user name" value={record.name} onChange={handleChange} />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </p>

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
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </p>

      </form>
    </div>
  )
}

export default Registration
