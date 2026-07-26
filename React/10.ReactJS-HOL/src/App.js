import React from "react";
import "./App.css";

function App() {

  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  const officeList = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },
    {
      name: "WeWork",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Regus",
      rent: 65000,
      address: "Hyderabad"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
        alt="Office Space"
        width="500"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> Rs. {office.rent}
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Office Space List</h2>

      {officeList.map((item, index) => (
        <div key={index} className="office-card">

          <h3>{item.name}</h3>

          <p
            style={{
              color: item.rent < 60000 ? "red" : "green"
            }}
          >
            <b>Rent:</b> Rs. {item.rent}
          </p>

          <p>
            <b>Address:</b> {item.address}
          </p>

        </div>
      ))}

    </div>
  );
}

export default App;