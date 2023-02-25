import React from 'react';
import './categories.css'
import Category from './category/category';
import { selectMemes } from '../../app/memesSlice';
import { useSelector } from 'react-redux';

function Categories() {

  const memes = useSelector(selectMemes);

  const subReddits = [];

  for(let i=0; i<memes.length; i++){
    if(!subReddits.includes(memes[i].subreddit)){
      subReddits.push(memes[i].subreddit)
    }
  }
    return (
      <div className={'categories'}>
          <h2>Subreddits</h2>
          <Category subR={"all"}/>
          {subReddits.map((item, index) => {
            return <Category key={index} subR={item}/>
          })}
      </div>
    );
  }
  
  export default Categories;