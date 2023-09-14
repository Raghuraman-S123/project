import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CurrentUserContext from '../contexts/CurrentUserContext';

import './Login.css';

function Login() {
    //const { setCurrentUser } = useContext(CurrentUserContext);
    const { setCurrentUser } = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        // try {
        //     const result = await axios.post('api/auth/login', {
        //         username,
        //         password,
        //     });
        //     setCurrentUser(result.data);
        //     const accountType = JSON.parse(localStorage.getItem('account-type'));

        //     switch(accountType) {
        //         case 'designer':
        //             navigate('/designer');
        //             break;
        //         case 'vendor':
        //             navigate('/vendor');
        //             break;
        //         default:
        //             navigate('/unauth');
        //     }
        try {
            let accountType = 'vendor';
            if(username === 'simone') {
                accountType = 'designer';
            }
            switch(accountType) {
                case 'designer':
                    navigate('/designer');
                    break;
                case 'vendor':
                    navigate('/vendor');
                    break;
                default:
                    navigate('/unauth');
            }
        } catch (error) {
            console.error(error);
            navigate('/unauth');
        }
    };

    return (
        <>
            <a href="" className="login-redirect" id="new_userlink">New User</a>
            <div className="login-page">
                <div className="form-login">
                    <form name="login" onSubmit={login}>
                    <label htmlFor="username">
                        Username: 
                        <input
                            type="text"
                            id="username"
                            value={username}
                            autoComplete="username"
                            onChange={(event) => setUsername(event.target.value)}
                            required
                        />
                    </label>
                        <br/>
                        <label htmlFor="password">
                        Password: 
                        <input
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        </label>
                        <br/>
                        <button type="submit">Log In</button>
                    </form>
                    <a href="" className="login-redirect">Forgot Password?</a>
                </div>
                <div className="divider-line"></div>
                <div className ="register">
                    <h1>New User</h1>
                    <button className="register-btn"><a href="register.html">Register Here</a></button>
                </div>
            </div>
        </>
    )
}

export default Login;