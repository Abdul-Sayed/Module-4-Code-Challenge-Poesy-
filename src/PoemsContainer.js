import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  render() {

    const renderPoemsList = this.props.poemList.map(poem =>
      < Poem
        key={poem.id}
        {...poem}
        handleClick={this.props.handleClick} />)

    return (
      <div className="poems-container">
        {renderPoemsList}
      </div>
    );

  }
}

export default PoemsContainer;

