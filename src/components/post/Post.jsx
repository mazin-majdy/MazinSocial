import React, { useState } from 'react';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";


const Post = ({ post }) => {

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = (e) => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)

    if (!isLiked) {
        e.target.classList.add("active");
    }
  
    else {
        document.querySelectorAll(".likeIcon").forEach(e=>{
          e.classList.remove("active")
        })

    }
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className='postProfileImg'
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImg' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className='likeIcon'
              src="/assets/like.png"
              alt=""
              onClick={likeHandler}
              id="like"
            />
            <img
              className='likeIcon'
              src="/assets/heart.png"
              alt=""
              onClick={likeHandler}
              id="heart"
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post