import React from 'react';
import '../Assets/Css/Footer.css';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import EmailIcon from '@mui/icons-material/Email';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
         <center className='footer_content'>Copyright © 2022.All Rights Reserved</center>
         <div className='contact_icons'>
          <div className='container'>
          <EmailIcon className='contact_icon'/>
          <div className='middle'>
            <div className='text'>adkfjljg@gmail.com</div>
          </div>
          </div>
          
          <div className='container'>
            <CallOutlinedIcon className='contact_icon'/>
            <div className='middle'>
            <div className='text'>044229229</div>
          </div>
          </div>
          <div className='container'>
            <MessageOutlinedIcon className='contact_icon'/>
            <div className='middle'>
            <div className='text'>9876543210</div>
          </div>
          </div>

</div>
</div>
</div>
  )
}

export default Footer