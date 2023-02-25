import React from 'react';
import './comment.css'

function Comment({author, text}) {
    return (
        <div className='comment' >
            <h4 className='user'>{author}</h4>
            <p>{text}</p>
        </div>
    );
  }
  
  export default Comment;