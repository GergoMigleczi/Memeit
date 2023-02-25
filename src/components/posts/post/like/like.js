import React from 'react';
import './like.css'
import up from '../../../../upVote.png'
import down from '../../../../downVote.png'
import { memes } from '../../../../app/memesSlice';
import { useDispatch} from 'react-redux';

function Like({id, likeColor, likes}) {
  const dispatch = useDispatch();

  const upVote = (e) => {
    const id = e.target.getAttribute('value');
    if(likeColor !== 'green'){
      dispatch(memes.actions.setLikeColor({id: id, color: 'green'}));
    }else{
      if(document.body.style.backgroundColor !== 'rgb(255, 255, 255)'){
        dispatch(memes.actions.setLikeColor({id: id, color: 'white'}));
  
      }else{
        dispatch(memes.actions.setLikeColor({id: id, color: 'black'}));
      }
    }
  }

  const downVote = (e) => {
    const id = e.target.getAttribute('value');
    if(likeColor !== 'red'){
      dispatch(memes.actions.setLikeColor({id: id, color: 'red'}));
    }else{
      if(document.body.style.backgroundColor !== 'rgb(255, 255, 255)'){
        dispatch(memes.actions.setLikeColor({id: id, color: 'white'}));
  
      }else{
        dispatch(memes.actions.setLikeColor({id: id, color: 'black'}));
      }
    }
  }

    return (
      <div className={'like' }>
          <img src={up} alt={'up vote'} className={'vote'} value={id} onClick={e => upVote(e)}></img>
            <p style={{color: likeColor}}>{likes}</p>
          <img src={down} alt={'down vote'} className={'vote'} value={id} onClick={e => downVote(e)}></img>
      </div>
    );
  }
  
  export default Like;