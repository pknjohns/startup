const header = document.getElementById("playerHeader");
header.textContent = "User: " + getPlayerName();

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery user';
}

async function loadHist() {
    let history = [];

    try {
      // Get most recent dating history from service
      const response = await fetch('api/histories');
      histories = await response.json();

      // Save local dating history in case we go offline in the future
      localStorage.setItem('histories', JSON.stringify(histories));
    } catch {
      const histText = localStorage.getItem('history');
      if (histText) {
        history = JSON.parse(histText);
      }
    }

    // Display latest dating history from service in table
    displayHist();
}
  
function displayHist() {
    const tableBodyEl = document.querySelector('#history');
  
    if (history.length) {
      for (const [i, entry] of history.entries()) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const activityTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        nameTdEl.textContent = entry.name;
        activityTdEl.textContent = entry.activity;
        dateTdEl.textContent = entry.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(activityTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to get inspired for your next date!</td></tr>';
    }
  }
  
loadHist();

// Simulate data that will come over WebSocket
function removeAllRows(tableId) {
  const tableBodyEl = document.querySelector(tableId);

  // Iterate over all rows starting from the last one
  for (var i = tableBodyEl.rows.length - 1; i >= 1; i--) {
      tableBodyEl.deleteRow(i);
  }
}


setInterval(() => {
  const activity = 'get ice cream';
  const userName = 'Patrick';
  const date = new Date().toLocaleDateString();
  const newActivity = { name: userName, activity: activity, date: date};

  let history = [];

  const historyText = localStorage.getItem('hist');
  if (historyText) {
      history = JSON.parse(historyText);
  }

  history.unshift(newActivity);

  localStorage.setItem('hist', JSON.stringify(history))

  removeAllRows('history')

  loadHist();
}, 5000);