import React, { useContext, useState } from 'react';
import styles from '../style/Login.module.css';  
 import { addUser } from '../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';

const Login  = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
let {AuthUser}=useContext(Context);
 
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    localStorage.setItem('userDetail',JSON.stringify({name:username, password:password}));
    AuthUser();
navigate('/add-todo');  
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
      <div className={styles.containerStyle}>
        <form className={styles.formStyle} onSubmit={handleLogin}>
          <h2 className={styles.headingStyle}>Login</h2>
          <input
            className={styles.inputStyle}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.buttonStyle} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
