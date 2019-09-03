import React from 'react';

class Poem extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {

    return (

      <div onClick={this.handleClick}>

        <div style={
          this.state.clicked ?
            { color: "green" } : { color: "black" }
        }>

          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
          <strong>{`- By ${this.props.author}`}</strong>

          <br /><br />

          <button
            onClick={() => this.props.handleClick(this.props)}>
            Like
          </button>

        </div>

      </div>
    );
  }
}

export default Poem;


// author: "Bryan Higgins"
// content: "This is the song about the show! And it's a show with a song about The Songs we're gonna sing We'll sing you the songs about The song about the show! Songs about the singing we'll do! Songs about the songs about The song about the show! Songs that we'll be singing to you! You'll hear us singing songs about The songs about the songs, The songs about the songs about the songs-- Songs about the songs about The songs about the songs, The songs about the songs about the show!"
// id: 1
// title: "The Song About the Song"