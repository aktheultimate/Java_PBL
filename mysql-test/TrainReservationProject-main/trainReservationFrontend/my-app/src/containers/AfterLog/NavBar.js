import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import  {SidebarData}  from './SidebarData';
import { IconContext } from 'react-icons';
import '../AfterLog/NavBar.css';
import {Button ,NavBar, Nav, NavItem,Form,NavDropdown} from 'react-bootstrap';
import { FaUserCircle } from "react-icons/io5";





function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const [login,setLogin]=useState({
    isLoggedIn:false,
    isAdminLoggedIn:false
  })

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(()=>{
    setLogin({
      isLoggedIn:localStorage.getItem('userToken'),
      isAdminLoggedIn:localStorage.getItem('adminToken')
    })
  },[])
  const adminLogout=async()=>{
    const response=await fetch('http://localhost:8000/admin/auth/logout', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json', // 'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":true
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const finalResponse=await response.json();
    const successMessage=finalResponse.successMessage;
    
    if(successMessage){
       localStorage.removeItem('adminToken')
       window.location.href='./'
    }  
    
  }
 
  const userLogout=async()=>{
    const response=await fetch('http://localhost:8000/user/logout', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json' ,// 'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":true
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const finalResponse=await response.json();
    const successMessage=finalResponse.successMessage;
    
    if(successMessage){
       localStorage.removeItem('userToken')
       window.location.href='./home';
    }  
    
  }

  return (
       
    <>
        
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        <div  className="text-warning"style={{fontSize:'25px',fontFamily:'ui-rounded',padding:'10px',marginLeft:'30px'}}>
        <Nav className="justify-content-md" activeKey="/home">
         {/* <Nav.Item>
           <FaIcons.FaUser></FaIcons.FaUser>
         </Nav.Item> */}
         {!(login.isLoggedIn||login.isAdminLoggedIn) &&
       <>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="./login">Sign In</Nav.Link>
        </Nav.Item>
       </>}
       {login.isLoggedIn &&
        <>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item href='./user/history'>History</NavDropdown.Item>
          {/* <NavDropdown.Item href='./user/history/cancelled'>Cancelled Tickets</NavDropdown.Item>
          <NavDropdown.Item href='./user/history/active'>Active Tickets</NavDropdown.Item> */}
          <NavDropdown.Item onClick={userLogout}>Logout</NavDropdown.Item>
          {/* <NavDropdown.Item href="#">Change Password</NavDropdown.Item> */}
        </NavDropdown>
        </>}
        {login.isAdminLoggedIn&&
        <>
        <NavDropdown title="Admin" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={adminLogout}>Logout</NavDropdown.Item>
          <NavDropdown.Item href='/change-password'>Change Password</NavDropdown.Item>
        </NavDropdown>
        </>}
        </Nav>
        </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
    
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;


