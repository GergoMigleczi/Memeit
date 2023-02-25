import React from 'react';
import './posts.css'
import Post from './post/post';
import { useSelector } from 'react-redux';
import { selectMemes } from '../../app/memesSlice';
import { selectSearchTerm } from '../../app/searchSlice';
import { selectSubReddit } from '../../app/subRedditSlice';

function Posts() {

  const memes = useSelector(selectMemes);
  const searchTerm = useSelector(selectSearchTerm);
  const subReddit = useSelector(selectSubReddit);
    return (
      <div className={'posts'} >
        {memes.map((meme,index) => {
          if(subReddit === "all" || subReddit === ""){
            if(searchTerm){
              if(meme.text.toLowerCase().includes(searchTerm)){
                return <Post au={meme.author}
                            text={meme.text}
                            img={meme.img}
                            key={index}
                            id={index}
                            likeColor={meme.likeColor}
                            showComment={meme.comment}
                            likes={meme.likes}
                            permalink={meme.permalink}
                            comments={meme.comments}
                        />
              }
            }else{
              return <Post au={meme.author}
                            text={meme.text}
                            img={meme.img}
                            key={index}
                            id={index}
                            likeColor={meme.likeColor}
                            showComment={meme.comment}
                            likes={meme.likes}
                            permalink={meme.permalink}
                            comments={meme.comments}
                        />
            }
          }else{
            if(subReddit === meme.subreddit){
              if(searchTerm){
                if(meme.text.toLowerCase().includes(searchTerm)){
                  return <Post au={meme.author}
                              text={meme.text}
                              img={meme.img}
                              key={index}
                              id={index}
                              likeColor={meme.likeColor}
                              showComment={meme.comment}
                              likes={meme.likes}
                              permalink={meme.permalink}
                              comments={meme.comments}
                          />
                }
              }else{
                return <Post au={meme.author}
                              text={meme.text}
                              img={meme.img}
                              key={index}
                              id={index}
                              likeColor={meme.likeColor}
                              showComment={meme.comment}
                              likes={meme.likes}
                              permalink={meme.permalink}
                              comments={meme.comments}
                          />
              }
            }
          }
          
          return ""
        })}
      </div>
    );
  }
  
  export default Posts;