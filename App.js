import React, { useState } from 'react';
import './App.css';
import Searchbar from './Components/Search';
import PostType from './Components/Post';
import QuestionSection from './Components/Question';
import ArticleSection from './Components/Article';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
       <Searchbar />
       <PostType onSelect={handlePostTypeChange}/>
       {selectedPostType === 'question' ? <QuestionSection /> : null}
      {selectedPostType === 'article' ? <ArticleSection /> : null}
     
    </div>
  );
}

export default App;