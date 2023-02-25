import React from 'react';
import './category.css'
import { useDispatch } from 'react-redux';
import { subReddit } from '../../../app/subRedditSlice';

function Category({subR}) {

  const dispatch= useDispatch();

  const setSubReddit = (e) => {
    dispatch(subReddit.actions.setSubReddit(e.target.getAttribute('value')));
  }

    return (
      <div className={'category' }>
        <h4 value={subR} onClick={(e) => setSubReddit(e)}>{subR}</h4>
      </div>
    );
  }
  
  export default Category;