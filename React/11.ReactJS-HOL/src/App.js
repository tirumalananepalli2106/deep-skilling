import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      rupees: "",
      euro: ""
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  handleChange = (event) => {
    this.setState({
      rupees: event.target.value
    });
  };

  handleSubmit = () => {
    const euro = (this.state.rupees / 90).toFixed(2);

    this.setState({
      euro: euro
    });
  };

  render() {
    return (
      <div className="App">

        <h1>Event Examples App</h1>

        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <hr />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <hr />

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr />

        <h2>Currency Convertor</h2>

        <input
          type="number"
          placeholder="Enter Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit}>
          Convert
        </button>

        <h3>Euro : € {this.state.euro}</h3>

      </div>
    );
  }
}

export default App;