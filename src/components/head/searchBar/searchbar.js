import React, { useState,  } from 'react';
import searchImg from './../../../search-black.png'
import searchImgWhite from './../../../search-white.png';
import './searchBar.css'
import { search } from '../../../app/searchSlice';
import { useDispatch, useSelector} from 'react-redux';
import { selectMemes } from '../../../app/memesSlice';

function SearchBar() {

  useSelector(selectMemes);
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const onChange = (e) =>{
    setTerm(e.target.value);
  }

  const submitSearchTerm = () =>{
    dispatch(search.actions.setSearchTerm(term));
  }

  return (
    <div className={'search-container'}>
        <input type={'text'} placeholder={'Search'} className={'search-bar'} onChange={(e) => onChange(e)}></input>
          <img src={document.body.style.color === 'white'? searchImgWhite :
searchImg} className={'search-icon'} alt={'Submit'} type='submit' onClick={submitSearchTerm}/>
    </div>
  );
}

export default SearchBar;