import React from 'react';
import "./profile.css"
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">

              <img
                className='profileCoverImg'
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className='profileUserImg'
                src="/assets/person/10.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>Mazin Majdy</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>

        </div>

      </div>
    </>
  )
}

export default Profile

