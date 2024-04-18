import React from 'react';
import './histories.css';

export function Histories() {
  const [histories, setHistories] = React.useState([]);

  React.useEffect(() => {
    fetch('api/histories')
      .then((response) => response.json())
      .then((histories) => {
        setHistories(histories);
        localStorage.setItem('histories', JSON.stringify(histories));
      })
      .catch(() => {
        const histText = localStorage.getItem('histories');
        if (histText) {
          setHistories(JSON.parse(histText));
        }
      })
  }, []);

  const histRows = [];
  if (histories.length) {
    for (const [i, entry] of histories.entries()) {
      histRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{entry.name.split('@')[0]}</td>
          <td>{entry.activity}</td>
          <td>{entry.date}</td> // date activity/date was committed to
         </tr> 
      );
    }
  } else {
    histRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to go on a date!</td>
      </tr>
    );
  }

  return (
    <main class="container-fluid bg-secondary text-center">
      <h2 id="playerHeader">User: Random User</h2>
      <table class="table table-bordered table-dark table-striped" id="dateHistory">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Last Date Committed To:</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="history"></tbody>
      </table>
    </main>
  );
}