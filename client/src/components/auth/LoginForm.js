import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container col-5'>
            <div>
                <Form.Group>
                    <Form.Control type="text" placeholder="Username" name="username" required>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="password" name="password" required>
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">Login</Button>
            </div>
            <p>Dont have an account?  </p>
            <Link to="/register" >
                <Button variant="info" size="sm" classname="ml-2">Register</Button>
            </Link>

        </div>

    )
}

export default Login
