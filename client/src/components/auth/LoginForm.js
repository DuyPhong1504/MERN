import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useHistory } from 'react-router-dom';
import { useState, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext"



const Login = () => {
    const { loginUser } = useContext(AuthContext)

    const history=useHistory()

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const { username, password } = loginForm

    const onChangeLoginForm = event => setLoginForm({ ...loginForm, [event.target.name]: event.target.value })


    const login = async event => {
        event.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            if (loginData.success) {
                history.push('/dashboard')
            }
            else{
            }
            console.log(loginData)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Form className='container col-5' onSubmit={login}>
            <div>
                <Form.Group>
                    <Form.Control type="text" placeholder="Username" name="username" required value={username} onChange={onChangeLoginForm}>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="password" name="password" required value={password} onChange={onChangeLoginForm} >
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">Login</Button>
            </div>
            <p>Dont have an account?  </p>
            <Link to="/register" >
                <Button variant="info" size="sm" classname="ml-2">Register</Button>
            </Link>

        </Form>

    )
}

export default Login
