import React from 'react';
import "./topbar.css";

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/home" className="logo">MazinSocial</Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className='searchIcon' />
          <input placeholder='Search for friend, post or video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/">
            <p className="topbarLink">Homepage</p>
          </Link>
          <Link to="/login">
            <p className="topbarLink">Logout</p>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile">
          <img src="/assets/person/10.jpg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  )
}

export default Topbar