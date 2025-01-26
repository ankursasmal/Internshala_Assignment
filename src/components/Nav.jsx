import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';

function Nav() {
  const {AuthUser,loginUser} = useContext(Context);  // Correctly using useContext without destructuring

  const handleLogout = () => {
     localStorage.removeItem('userDetail');
     AuthUser();

  };
useEffect(()=>{
  AuthUser();

},[])
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 3vw', position: 'sticky', backgroundColor: '#d6d2ce' }}>
      <a style={{ fontWeight: '500' }}>TODO</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3vw' }}>
      {loginUser!=null ?   <a style={{ fontSize: '20px',color:'Red',fontWeight:'500'  }}>{loginUser?.name}</a>: <Link to='/signup' style={{ fontSize: '20px',fontWeight:'500' ,textDecoration:'none'}}>{'Signup'}</Link>}
        {loginUser!=null ? (
          <Link to="/login" style={{ fontSize: '20px', fontWeight: '400', textDecoration: 'none' }} onClick={()=>handleLogout()}>
            LogOut
          </Link>
        ) : (
          <Link to="/login" style={{ fontSize: '20px', fontWeight: '400', textDecoration: 'none' }}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
