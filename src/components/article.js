import React, { PureComponent } from 'react';

class Article extends PureComponent {
  handleButtonClick = () => {
    this.props.toggleOpen(this.props.article.id);
  };

  render() {
    const { article, isOpen } = this.props;

    return (
      <div>
        <div>
          <h3>{article.title}</h3>
          <button onClick={this.handleButtonClick}>
            {isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        {isOpen && <section>{article.text}</section>}
      </div>
    );
  }
}

export default Article;
