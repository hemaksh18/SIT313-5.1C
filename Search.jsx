import React, { useState } from 'react';
import './Search.css';


const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
   
    console.log('Searching :', searchText);
  };

  return (
    <div className="search">
      <p>New Post</p> 
    </div>
  );
};

export default Search;