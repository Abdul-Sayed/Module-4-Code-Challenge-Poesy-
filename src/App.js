import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import PoemContainer from './PoemContainer'
import NewPoemForm from './NewPoemForm'
import uuid from "uuid";
import { EventEmitter } from 'events';

class App extends React.Component {

  state = {
    poemList: [],
    favoritePoemList: [],
    username: "",
    renderLogin: true,
    title: "",
    content: ""
  }

  componentDidMount() {
    fetch('http://localhost:4000/poems')
      .then(res => res.json())
      .then(fetchedPoems => this.setState({ poemList: fetchedPoems }))
  }

  enterUsername = (input) => {
    this.setState({ username: input })
  }

  submitUsername = (event) => {
    event.preventDefault()
    this.setState({ renderLogin: !this.state.renderLogin })
  }


  enterPoemTitle = (input) => {
    this.setState({ title: input })
  }

  enterPoemContent = (input) => {
    this.setState({ content: input })
  }

  submitPoem = (e) => {
    e.preventDefault()

    if (this.state.renderLogin === false) {
      const newPoem = {
        "id": uuid.v4(),
        "title": this.state.title,
        "content": this.state.content,
        "author": this.state.username
      }


      fetch('http://localhost:4000/poems', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newPoem)
      })
        .then(res => res.json())
        .then(newPersistedPoem => {
          this.setState({
            poemList: [...this.state.poemList, newPersistedPoem]
          })
        }
        )
        .catch(err => console.error(err))





    }

  }


  favoritePoem = (poem) => {
    console.log(poem)
    this.setState({
      favoritePoemList: [...this.state.favoritePoemList, poem]
    })
  }

  render() {


    return (
      <div className="app">
        <div className="sidebar">

          {
            this.state.renderLogin ?

              < LoginForm
                handleChange={this.enterUsername}
                handleSubmit={this.submitUsername}
                username={this.state.username}
              />
              :
              <UserHeader username={this.state.username} />
          }

          <NewPoemForm
            title={this.state.title}
            content={this.state.content}
            enterPoemTitle={this.enterPoemTitle}
            enterPoemContent={this.enterPoemContent}
            submitPoem={this.submitPoem}
          />

        </div>

        <PoemsContainer
          poemList={this.state.poemList}
          handleClick={this.favoritePoem}
        />

        <PoemContainer
          favoritePoemList={this.state.favoritePoemList}
        />

      </div>
    );
  }
}

export default App;




