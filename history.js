const header = document.getElementById("playerHeader");
header.textContent = "User: " + getPlayerName();

function loadHist() {
    let hist = [];
    const histText = localStorage.getItem('hist');
    if (histText) {
      hist = JSON.parse(histText);
    }
  
    const tableBodyEl = document.querySelector('#history');
  
    if (hist.length) {
      for (const [i, hist] of hist.entries()) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const activityTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        nameTdEl.textContent = hist.name;
        activityTdEl.textContent = hist.activity;
        dateTdEl.textContent = hist.date;
  
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