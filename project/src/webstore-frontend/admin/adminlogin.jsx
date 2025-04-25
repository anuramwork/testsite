import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
function AdminLogin() {
    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    })

    const handleChange = ()=>{
        setAdmin({...admin, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(admin.email == "admin@gmail.com" && admin.password == "admin@123"){

        }
    }


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AdminLogin;