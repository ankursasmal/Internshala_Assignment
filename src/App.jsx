import React, { useState, useEffect, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';

export const Context = createContext(null);

function App() {
  const [loginUser, setLoginUser] = useState(null);
   let AuthUser=(e)=>{
    const user = JSON.parse(localStorage.getItem('userDetail'));
    setLoginUser(user);
  }
   
  useEffect(() => {
    AuthUser();
  }, []);

  return (
    <Context.Provider value={{AuthUser,loginUser}}>
      <Nav />
      <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3vw',fontWeight:'500'}}>Welcome to Todo Reminder</h1>
      <Outlet />
    </Context.Provider>
  );
}

export default App;
