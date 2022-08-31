import React from 'react'
import "./Topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

function Topbar({menuOpen , setMenuOpen}) {
  return (
    <div className={'Topbar '+ (menuOpen && 'active')}>
    <div className='wrapper'>
      <div className='left'>
        <a href='#intro' className='logo'>Portfolio</a>
        <div className='itemContainer'>
          <PersonIcon className='icon'/>
          <span>+923163330706</span>
        </div>
        <div className='itemContainer'>
          <MailIcon className='icon'/>
          <span>talhatariq@gmail.com</span>
        </div>
      </div>
      <div className='right'>
        <div className='hamburger' onClick={()=> setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Topbar
