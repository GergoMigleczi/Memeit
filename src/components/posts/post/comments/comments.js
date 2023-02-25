import React from 'react';
import './comments.css'
import Comment from './comment/comment';
import { useDispatch } from 'react-redux';
import { memes } from '../../../../app/memesSlice';

function Comments({hidden, comments, id}) {

    const dispatch = useDispatch();

    function toggleComment(e){
        const id = e.target.getAttribute('value');
        dispatch(memes.actions.toggleComment({id: id, comment: true}));
        this.props.history.push(`/#${id}`)
      }
    if(hidden){
        return;
    }
    if(comments.length <= 0){
        return (
            <div className='comment-loading'>
              <div className="comment-loader"></div>
            </div>
            )
    }
    
    return (
        <div className='comments' >
            {comments.map((comment, index) => {
                return <Comment key={index} author={comment.author} text={comment.text}/>
            })}
            <div className='close' value={id} ><a href={`#${id}`} onClick={e => toggleComment(e)} value={id}>close</a></div>
        </div>
    );
  }
  
  export default Comments;