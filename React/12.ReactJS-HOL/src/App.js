import React, { Component } from "react";
import "./App.css";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <h3>Flight Details</h3>

      <table border="1" align="center">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>10:00 AM</td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>2:30 PM</td>
          </tr>

          <tr>
            <td>UK303</td>
            <td>Mumbai</td>
            <td>Kolkata</td>
            <td>6:00 PM</td>
          </tr>
        </tbody>
      </table>

      <p>Please Login to Book Tickets.</p>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>You can now book your flight tickets.</h3>

      <button>Book Ticket</button>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;

    if (this.state.isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div className="App">
        <h1>Ticket Booking Application</h1>

        {this.state.isLoggedIn ? (
          <button onClick={this.logout}>Logout</button>
        ) : (
          <button onClick={this.login}>Login</button>
        )}

        <hr />

        {page}
      </div>
    );
  }
}

export default App;