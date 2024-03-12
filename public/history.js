const header = document.getElementById("playerHeader");
header.textContent = "User: " + getPlayerName();

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery user';
}

async function loadHist() {
    let hist = [];
    const histText = localStorage.getItem('hist');
    if (histText) {
      hist = JSON.parse(histText);
    }
  
    // displayHist()
    const tableBodyEl = document.querySelector('#history');
  
    if (hist.length) {
      for (const [i, history] of hist.entries()) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const activityTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        nameTdEl.textContent = history.name;
        activityTdEl.textContent = history.activity;
        dateTdEl.textContent = history.date;
  
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