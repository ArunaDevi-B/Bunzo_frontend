import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../Assets/Css/NavBar.css';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Badge from '@mui/material/Badge';

const NavBar = () => {
  return (
    <div className='navbar_container'>
    <div className='nav_bar'>
      <div className='nav_logo'>
       <StorefrontOutlinedIcon fontSize='large' />
        <h4>BUNZO</h4>
      </div>
      <ul className='nav_pages'>
        <li onClick={()=>{window.location.replace("/home")}} className='nav_icons' >Home</li>
        {/* <li onClick={()=>{window.location.replace("/cart")}}>Cart
        <Badge badgeContent={4} color="success">
        <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 22 }} className='nav_icons'/>
</Badge>
        </li> */}
        <li onClick={()=>{window.location.replace("/")}}><ExitToAppOutlinedIcon sx={{ fontSize: 22 }} className='nav_icons' /></li>
      </ul>
    </div>
    </div>
  )
}

export default NavBar