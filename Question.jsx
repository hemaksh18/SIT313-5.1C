import React from 'react';
import './Question.css'; 

const Question = () => {
  return (
    <div className="section2">
      
      <h2>What do you want to ask or share</h2>

      <p>
        This section is designed based on the type of the post. It could be developed by conditional rendering. 
        <a className='color'> For posting a question, the following section would be displayed.</a>
      </p>

      <label className='heading1'>Title</label>
      <input className ='text1'type="text" placeholder="start your question with how, what, why, etc." />

      <label className='heading2'>Describe your problem:</label>
      <textarea  className ='text2' placeholder="Describe your problem.." />

      <label className='heading3'>Tags</label>
      <input className ='text3' type="text" placeholder="please add up to three tags to describe what your question is about, e.g., Java" />

      <button className="post">Post</button>
    </div>
  );
};

export default Question;