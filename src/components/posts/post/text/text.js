import React from 'react';
import './text.css'

function Text({text, au}) {
    return (
      <div className={'text' }>
          <h3>{au}</h3>
          <h2>{text}</h2>
      </div>
    );
  }
  
  export default Text;