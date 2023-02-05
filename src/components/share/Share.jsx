import React from 'react';
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';
import { Link } from 'react-router-dom';


const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to="/profile">
            <img src="/assets/person/10.jpg" className='shareProfileImg' alt="" />
          </Link>
          <input
            placeholder="What's in your mind Mazin"
            className='shareInput'
          />
        </div>
        <hr className='shareHr' />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon
                className='shareIcon'
                htmlColor='tomato'
              />
              <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon
                className='shareIcon'
                htmlColor='blue'
              />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon
                className='shareIcon'
                htmlColor='green'
              />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon
                className='shareIcon'
                htmlColor='goldenrod'
              />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share

// 57m