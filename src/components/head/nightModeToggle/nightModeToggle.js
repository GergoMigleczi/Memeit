import React from 'react';
import './nightModeToggle.css'
import '../head.css'
import { memes } from '../../../app/memesSlice';
import { useDispatch } from 'react-redux';

function NightMode() {

  const dispatch = useDispatch();

  const toggleNightMode = () => {
    if(document.body.style.backgroundColor !== 'rgb(255, 255, 255)'){
      document.body.style.color = 'black';
      document.documentElement.style.setProperty('--textColor', 'black')
      document.body.style.backgroundColor = 'rgb(255, 255, 255)';
      document.documentElement.style.setProperty('--bodyColor', 'rgb(255,255,255)')
      document.documentElement.style.setProperty('--elementColor', 'rgb(255,255,255)')
      document.documentElement.style.setProperty('--shadow', '2px 2px 8px lightgray')
      document.documentElement.style.setProperty('--border', '2px solid black')
      document.documentElement.style.setProperty('--subredditColor', 'lightgray')
      dispatch(memes.actions.nightModeLikeColorToggle('black'))

    }else{
      document.documentElement.style.setProperty('--shadow', '0px 0px 0px lightgray')
      document.documentElement.style.setProperty('--bodyColor', 'rgb(18,18,18)')
      document.documentElement.style.setProperty('--elementColor', '#262626')
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'rgb(18, 18, 18)';
      document.documentElement.style.setProperty('--border', '0px solid black')
      document.documentElement.style.setProperty('--subredditColor', 'rgb(30,32,31)')
      document.documentElement.style.setProperty('--textColor', 'white')
      dispatch(memes.actions.nightModeLikeColorToggle('white'))
    }

   
  }

  return (
    <div className={'nightMode'} >
        <h4 >Night Mode</h4>
        <label className={"switch"}  >
          <input type={"checkbox"} onClick={toggleNightMode} />
          <span className={"slider round"}></span>
        </label>
    </div>
  );
}

export default NightMode;