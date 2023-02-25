import React from 'react';
import './post.css'
import Like from './like/like';
import Text from './text/text';
import comment from '../../../comment.png'
import commentWhite from '../../../comment-white.png'
import Media from './media/media';
import Comments from './comments/comments';
import { memes } from '../../../app/memesSlice';
import { useDispatch } from 'react-redux';

function Post({au, text, img, id, likeColor, showComment, likes, permalink, comments}) {

  const dispatch = useDispatch();

  const getComments = async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json?limit=25`);
    const body = await response.json();
    //console.log(body)
    const comments = [];
    for (let i = 0; i < body[1].data.children.length; i++) {
      let comment;
      if(body[1].data.children[i].data.body_html){
        comment = {
          author: body[1].data.children[i].data.author,
          text: body[1].data.children[i].data.body_html.substr(31, body[1].data.children[i].data.body_html.length-54)
        };
      }else{
        comment = {
          author: body[1].data.children[i].data.author,
          text: body[1].data.children[i].data.body_html
        };
      }
      
      if(comment.text){
        if(!comment.text.includes("&")){
        comments.push(comment);
        }
      }
     
    }
    return await Promise.all(comments);
  }

  function toggleComment(e){
    const id = e.target.getAttribute('value');
    let hide = true;
    if(showComment === true){
      hide = false;
    }
    //console.log(e.target.getAttribute('value'))
    if(comments.length <=0){
      getComments(permalink).then( comments => {
        dispatch(memes.actions.addComment({id: id, comments: comments}))
      }
      )
    }
    dispatch(memes.actions.toggleComment({id: id, comment: hide}));
  }


    return (
      <div id={id} className={'post-container' }>
          <div className={'like-text' }>
            <Like id={id} likeColor={likeColor} likes={likes}/> 
            <Text text={text} au={au}/>
          </div>
          <Media src={img}/>
          <div className='right-align'>
              <img src={document.body.style.color === 'white'? commentWhite :
comment} alt={'comment'} className={'comment-icon'} value={id} onClick={e => toggleComment(e)}></img>
          </div>
          <Comments hidden={showComment} comments={comments} id={id} />
      </div>
    );
  }
  
  export default Post;