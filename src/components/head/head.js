import React from 'react';
import logo from './../../reddit-logo.svg';
import SearchBar from './searchBar/searchbar';
import NightMode from './nightModeToggle/nightModeToggle';
import './head.css'

function Head() {
  return (
    <nav className={'head'}>
      <div className={'logo-div'} >
        <img src={logo} className={'logo'}  alt={'Reddit logo'}></img>
        <h1>Memeit</h1>
      </div>
        <SearchBar />
        <NightMode />
    </nav>
  );
}

export default Head;