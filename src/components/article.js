import React from 'react';

function Article({ article, isOpen, toggleOpen }) {
  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
      </div>
      {isOpen && <section>{article.text}</section>}
    </div>
  );
}

export default Article;
