import { useState } from "react";
import { Modal } from 'react-bootstrap';

function LoginPage({handleLoginPageClose}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const loginData = {
            username,
            password
        }
        console.log(loginData);
        // Handle login logic here
    }

    return(
        <>
            <Modal show={true} onHide={handleLoginPageClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card mx-auto" style={{ maxWidth: '500px' }}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" onChange={handleUsernameChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={handlePasswordChange} />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-outline-dark bg-warning">Login</button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default LoginPage;