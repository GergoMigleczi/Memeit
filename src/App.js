import React from 'react';
import Head from './components/head/head';
import Posts from './components/posts/posts';
import './App.css'
import Categories from './components/categories/categories';
import { useDispatch, useSelector } from "react-redux";
import { memes as memesSlice } from './app/memesSlice';
import { loading, selectLoading } from './app/loadingSlice';

function App() {

  const dispatch = useDispatch()
  const fetchMemes = async () =>{
    let memes =[];
    const response = await fetch('https://www.reddit.com/r/memes.json?limit=100');
    const body = await response.json();
    for (let i = 0; i < body.data.children.length; i++) {
      if (body.data.children[i].data.post_hint === 'image') {
        let img = {
          ID: memes.length,
          img: body.data.children[i].data.url_overridden_by_dest,
          text: body.data.children[i].data.title,
          author: body.data.children[i].data.author,
          comment: true,
          likeColor: null,
          likes: body.data.children[i].data.ups,
          subreddit: body.data.children[i].data.subreddit,
          permalink: body.data.children[i].data.permalink,
          comments: []
        };
        memes.push(img);
      }
    }
    const res = await fetch('https://www.reddit.com/best.json?limit=100');
    const body_1 = await res.json();
    for (let i_1 = 0; i_1 < body_1.data.children.length; i_1++) {
      if (body_1.data.children[i_1].data.post_hint === 'image') {
        //console.log(body.data.children[i].data);
        let img_1 = {
          ID: memes.length,
          img: body_1.data.children[i_1].data.url_overridden_by_dest,
          text: body_1.data.children[i_1].data.title,
          author: body_1.data.children[i_1].data.author,
          comment: true,
          likeColor: null,
          likes: body_1.data.children[i_1].data.ups,
          subreddit: body_1.data.children[i_1].data.subreddit,
          permalink: body_1.data.children[i_1].data.permalink,
          comments: []
        };
        memes.push(img_1);
      }
    }
    return await Promise.all(memes);    
  }
  let isLoading = useSelector(selectLoading);

  fetchMemes().then(memes => {
    if(isLoading === true){
      dispatch(memesSlice.actions.addMemes(memes));
      dispatch(loading.actions.setLoading(false));
    }
  })


  if(isLoading){
    return (
      <div>
        <div className={'head'} >
          <Head />
        </div>
        <div className='main-loading'>
          <h1 className={'loading'}>Loading...</h1>
          <div className="loader">
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div>
        <div className={'head'} >
          <Head />
        </div>
        <div className={'main'} >
          <Posts />
          <Categories />
        </div>
      </div>
    );
  }

  
}

export default App;
