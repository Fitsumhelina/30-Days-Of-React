// index.js
import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    firstName: '',
    message: '',
    key: '',
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: 'Welcome to the world of events',
    })
  }
  // triggered whenever the mouse moves
  handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ message: 'mouse is moving' })
  }
  // to get value when an input field changes a value
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }
  // Blurring happens when a mouse leave an input field
  handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ message: 'Input field has been blurred' })
  }
  // This event triggers during a text copy
  handleCopy = (e: React.ClipboardEvent<HTMLParagraphElement>) => {
    this.setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ message: `Form submitted with name: ${this.state.firstName}` });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
        <input type='text' onKeyDown={this.handleKeyPress} />
        </p>

        <p>{this.state.message}</p>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        <form onSubmit={this.handleSubmit.bind(this)}>

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={this.handleBlur} />

        <label htmlFor='firstName'>First Name: </label>
        <input
          onChange={this.handleChange}
          name='firstName'
          value={this.state.firstName}
        />

        <div>
          <input type='submit' value='Submit' />
        </div>
        </form>
      </div>
    )
  }
}

export default App;