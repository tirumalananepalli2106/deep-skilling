import './App.css';
import CohortDetails from './CohortDetails';

function App() {

  const cohorts = [

    {
      name: "INTADMDF10 -.NET FSD",
      startedOn: "02-Feb-2022",
      currentStatus: "Scheduled",
      coach: "Akhila",
      trainer: "Jorge Jose"
    },

    {
      name: "ADM21DV014 - Java FSD",
      startedOn: "10-Sep-2021",
      currentStatus: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },

    {
      name: "CDF8F21025 - Java FSD",
      startedOn: "24-Dec-2021",
      currentStatus: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe"
    }

  ];

  return (

    <div>

      <h2 style={{ textAlign: "center" }}>
        Cohorts Details
      </h2>

      {
        cohorts.map((cohort, index) => (

          <CohortDetails
            key={index}
            cohort={cohort}
          />

        ))
      }

    </div>

  );

}

export default App;