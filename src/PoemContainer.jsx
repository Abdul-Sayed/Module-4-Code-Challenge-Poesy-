import React, { Component } from "react";
import Poem from "./Poem";

export class PoemContainer extends Component {
  render() {
    const renderedFavorited = this.props.favoritePoemList.map(poem => (
      <Poem key={poem.id} {...poem} />
    ));

    return <React.Fragment>{renderedFavorited}</React.Fragment>;
  }
}

export default PoemContainer;
