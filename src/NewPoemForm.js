import React from 'react';

class NewPoemForm extends React.Component {

  render() {

    return (
      <div className="new-poem">
        <form className="new-poem-form"
          onSubmit={this.props.submitPoem}>

          <input
            type="text"
            placeholder="Name your masterpiece..."
            name="title"
            value={this.props.title}
            onChange={(e) =>
              this.props.enterPoemTitle(e.target.value)}
          />

          <textarea
            placeholder="Your masterpiece belongs here..."
            value={this.props.content}
            onChange={(e) =>
              this.props.enterPoemContent(e.target.value)}
          />

          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
