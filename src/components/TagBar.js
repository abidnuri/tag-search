import React from 'react';
import "./TagBar.css";

const TagBar = () => {
  return (
    <div className="tags-main">
      <h3>TAGS</h3>
      <span>Create your event here</span>
      <textarea className="tag-input" name="text" />
    </div>
  );
};

export default TagBar;