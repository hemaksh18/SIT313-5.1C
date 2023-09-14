import React, { useState } from 'react';
import './Post.css'

const Post  = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState('question');

  const handleTypeChange = (type) => {
    setSelectedType(type);
    onSelect(type);
  };

  return (
    <div className='switch'>
      <p>Select post type: </p>
      <label className='switcher1'>
        <input
          type="radio"
          value="question"
          checked={selectedType === 'question'}
          onChange={() => handleTypeChange('question')}
        />
        Question
      </label>
      <label className='switcher2'>
        <input
          type="radio"
          value="article"
          checked={selectedType === 'article'}
          onChange={() => handleTypeChange('article')}
        />
        Article
      </label>


    </div>
  );
};

export default Post;