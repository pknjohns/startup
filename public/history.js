const header = document.getElementById("playerHeader");
header.textContent = "User: " + getPlayerName();

// Used to display user's username at top of page
function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery user';
}

async function loadHist() {
    let histories = [];

    try {
      // Get most recent dating history from service
      const response = await fetch('api/histories');
      histories = await response.json();

      // Save local dating history in case we go offline in the future
      localStorage.setItem('histories', JSON.stringify(histories));
    } catch {
      const histText = localStorage.getItem('histories');
      if (histText) {
        histories = JSON.parse(histText);
      }
    }

    // Display latest dating history from service in table
    displayHist(histories);
}
  
function displayHist(histories) {
    const tableBodyEl = document.querySelector('#history');
  
    if (histories.length) {
      for (const [i, entry] of histories.entries()) {
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

// Simulate data that will come over WebSocket
function removeAllRows(tableId) {
  const tableBodyEl = document.querySelector(tableId);

  // Iterate over all rows starting from the last one
  for (var i = tableBodyEl.rows.length - 1; i >= 1; i--) {
      tableBodyEl.deleteRow(i);
  }
}

/*
setInterval(() => {
  const activity = 'get ice cream';
  const userName = 'Patrick';
  const date = new Date().toLocaleDateString();
  const newDate = { name: userName, activity: activity, date: date};

  let histories = [];

  const historyText = localStorage.getItem('histories');
  if (historyText) {
      histories = JSON.parse(historyText);
  }

  histories.unshift(newDate);

  localStorage.setItem('histories', JSON.stringify(histories))

}, 2000);
*/
loadHist();