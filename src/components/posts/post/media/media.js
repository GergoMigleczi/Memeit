import React from 'react';
import './media.css'

function Media({src}) {
    if(src){
        return (
            <img src={src} alt={'content'} className={'content'}></img>
      );
    }
    return;
  }
  
  export default Media;