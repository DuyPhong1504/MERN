import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
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
                <Form.Group>
                    <Form.Control type="password" placeholder="confirm password" name="confirmPassword" required>
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">Register</Button>
            </div>
            <p>Already have an account? </p>
            <Link to="/login" >
                <Button variant="info" size="sm" classname="ml-2">Login</Button>
            </Link>

        </div>

    )
}

export default RegisterForm
