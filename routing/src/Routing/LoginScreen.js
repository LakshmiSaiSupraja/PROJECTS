import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';  // Import Axios
import NavBarr from '../Components/Nav';
import { loginInfo } from '../App';

function LoginScreen() {
  const flag=useContext(loginInfo)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(firstName !== '');
  }, [firstName, isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
    if (!firstName) {
      errors.firstName = 'First Name is required';
    } else if (firstName.length < 3) {
      errors.firstName = 'First Name should be at least 5 characters';
    }

    
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    } else if (lastName.length < 3) {
      errors.lastName = 'Last Name should be at least 5 characters';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

   
    if (!password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {

      try {
        const response = await axios.get('https://fakestoreapi.com/users');
        const users = response.data;

        
        const userExists = users.find((user) => user.username === firstName.toLowerCase());
        
        if (userExists) {
          flag.loginflag()
        } else {
          alert('User not found.');
        }
      } catch (error) {
        console.error('Error checking user: ', error);
      }
    }
  };
return (
    <div>
      {/* <NavBarr /> */}
      <div className='colouring'>
        <h3 style={{ position: 'relative', bottom: '250px' }}>LOGIN PAGE</h3>
        <form className='tgn' onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label className={'label'}>userName</label>
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Enter your first name'
                  className={'inp'}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label className={'label'}>lastName</label>
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Enter your last name'
                  className={'inp'}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label className={'label'}>email</label>
              </td>
              <td>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className={'inp'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label className='label'>password</label>
              </td>
              <td>
                <input
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </td>
            </tr>
            <button className='but' type="submit">Submit</button>
          </table>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;