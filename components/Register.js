import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './Register.css'


export default function Register() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Street, setStreet] = useState('');
    const [State, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [City, setCity] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post('frow/signup', {
                username, password, accountType,
                email, Phone, Street, State, postalCode,
                country, firstName, lastName, City, 
                birthDate, gender, 
            });
            console.log(result);

            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className="login-page">
        <div className="form-login">
        <form name="account-registration" onSubmit={register}>
          <h1 id ="login-title">Create Account</h1>
          <label id ="account-label">Account Information</label>
            <div className="create-acct-group">
                <label htmlFor="accountType">Fashion Industry Role</label>
            <select 
                name="accountType" 
                id="accountType"
                value={accountType}
                onChange={(event) => setAccountType(event.target.value)}
                required    
            >
                <option value="designer">Designer</option>
                <option value="vendor">Vendor</option>
                <option value="industry">Other Role</option>
            </select><br/>
            <label htmlFor="username">Username: </label>
                <input 
                    type ="text" 
                    name="username" 
                    id="username" 
                    placeholder="Choose a username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    /><br/>
                <label htmlFor="password">Password: </label>
                <input 
                    type ="password" 
                    name="password" 
                    id="password" 
                    placeholder="Choose a password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    />
                </div>
                <label id ="name-label">Name</label>
                <input 
                    type ="text" 
                    name="firstname" 
                    id="firstname" 
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                />
              <br/>
                <input 
                    type ="text" 
                    name="lastname" 
                    id="lastname" 
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required    
                />
                <br/><br/>
            <label htmlFor="address" id = "address">Address</label> 
            <div className="create-acct-group">
                <input 
                    type ="text" 
                    name="street" 
                    id="street" 
                    placeholder="Street"
                    value={Street}
                    onChange={(event) => setStreet(event.target.value)}
                    required    
                />
                <input 
                    type ="text" 
                    name="city" 
                    id="City" 
                    placeholder="City"
                    value={City}
                    onChange={(event) => setCity(event.target.value)}
                    required    
                />
            </div>
            <div className="create-acct-group" id="addr-2">
                <input 
                    type ="text" 
                    name="state" 
                    id="state" 
                    placeholder="State/Province"
                    value={State}
                    onChange={(event) => setState(event.target.value)}
                    required    
                />
                <input 
                    type ="text" 
                    name="postalCode" 
                    id="postalCode" 
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(event) => setPostalCode(event.target.value)}
                    required    
                />
            </div>
        
            <input 
                type ="text" 
                name="country" 
                id="country" 
                placeholder="Country" 
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                required    
            /> <br/>
            <label htmlFor="birthday" id = "birthday">Birthday</label> <br/>
            <input 
                type ="date" 
                name="birthday" 
                id="birthday"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
                required
            />
            <br/>
            <label htmlFor="gender">Gender</label> <br/>
            <select 
                name="gender" 
                id="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
            </select>
            <br/> <br/>
            <label htmlFor="email" id = "email">Email</label> <br/>
            <input 
                type ="text" 
                name="email" 
                id="lastname"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required    
            />
            <br/>
            <label htmlFor="phone" id = "phone">Phone</label> <br/>
            <input 
                type ="tel" 
                name="phone" 
                id="phone"
                value={Phone}
                onChange={(event) => setPhone(event.target.value)}
                required
            />
            <br/><br/>
            <input type="submit" id="submit-btn"  value ="Submit"/>
        </form>
        </div>
    </div>
  )
}
