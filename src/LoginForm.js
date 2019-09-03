import React from 'react';

class LoginForm extends React.Component {

  render() {

    return (
      <div className="login">
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a username..."
            name="username"
            value={this.props.username}
            onChange={(e) => this.props.handleChange(e.target.value)}
          />

          <input type="submit" value="Log In" />
        </form>
      </div>
    );

  }
}

export default LoginForm;


