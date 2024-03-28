const header = document.getElementById("playerHeader");
header.textContent = "User: " + getPlayerName();

function getIdeas(selectObj) {
    // Gets a date idea function based on category
    // used to fill date idea dropdown on generator page
    const idx = selectObj.selectedIndex;
    const value = selectObj.options[idx].value;
    
    if (value === "outdoor") {
        getOutdoor();
    } else if (value === "noprep") {
        getNoPrep();
    } else if (value === "community") {
        getCommunity();
    }
}

function clear(selectEl) {
    while (selectEl.options.length > 0) {
        selectEl.remove(0);
    }
}

function getOutdoor() {

    // Get outdoor date ideas for dropdown
    const selectEl = document.getElementById('ideas');

    const def = document.createElement('option');
    def.textContent = 'Which idea will you pick...?';
    def.disabled = true;
    def.selected = true;

    const idea1 = document.createElement('option');
    idea1.text = 'Go on a hike';

    const idea2 = document.createElement('option');
    idea2.text = 'Go on a run';

    const idea3 = document.createElement('option');
    idea3.text = 'Teach other your favorite sport growing up';

    const idea4 = document.createElement('option');
    idea4.text = 'Go on a picnic';

    const idea5 = document.createElement('option');
    idea5.text = 'Find a new park and go hammocking there';

    const idea6 = document.createElement('option');
    idea6.text = 'Rent a tandem bike from BYU Outdoors Unlimited';

    //this is the div container where the select elements are held
    const container = document.getElementById('dates');

    //Remove current ideas in ideas dropdown
    clear(selectEl)

    //Add new ideas to dropdown
    selectEl.add(def);
    selectEl.add(idea1);
    selectEl.add(idea2);
    selectEl.add(idea3);
    selectEl.add(idea4);
    selectEl.add(idea5);
    selectEl.add(idea6);
}

function getNoPrep() {

    // Get no prep date ideas for dropdown
    const selectEl = document.getElementById('ideas');

    const def = document.createElement('option');
    def.textContent = 'Which idea will you pick...?';
    def.disabled = true;
    def.selected = true;

    const idea1 = document.createElement('option');
    idea1.text = 'Watch a movie';

    const idea2 = document.createElement('option');
    idea2.text = 'Go on a walk';

    const idea3 = document.createElement('option');
    idea3.text = 'Look at pictures of each other when you were young';

    const idea4 = document.createElement('option');
    idea4.text = 'Find songs that describe the other person or your relationship';

    const idea5 = document.createElement('option');
    idea5.text = 'Walk around Barnes & Noble or a grocery store and point out your favorite things to each other';

    const idea6 = document.createElement('option');
    idea6.text = 'Write a story using only emojis';

    //this is the div container where the select elements are held
    const container = document.getElementById('dates');

    //Remove current ideas in ideas dropdown
    clear(selectEl)

    //Add new ideas to dropdown
    selectEl.add(def);
    selectEl.add(idea1);
    selectEl.add(idea2);
    selectEl.add(idea3);
    selectEl.add(idea4);
    selectEl.add(idea5);
    selectEl.add(idea6);
}

function getCommunity() {

    // Get community involvement date ideas for dropdown
    const selectEl = document.getElementById('ideas');

    const def = document.createElement('option');
    def.textContent = 'Which idea will you pick...?';
    def.disabled = true;
    def.selected = true;

    const idea1 = document.createElement('option');
    idea1.text = 'Go to a BYU sports event';

    const idea2 = document.createElement('option');
    idea2.text = 'Go to a BYU arts performance';

    const idea3 = document.createElement('option');
    idea3.text = 'Visit the Museum of Art';

    const idea4 = document.createElement('option');
    idea4.text = 'Go to a BYU devotional/ forum';

    const idea5 = document.createElement('option');
    idea5.text = "Visit a city you've never been to before";

    const idea6 = document.createElement('option');
    idea6.text = 'Go to a local comedy show';

    //this is the div container where the select elements are held
    const container = document.getElementById('dates');

    //Remove current ideas in ideas dropdown
    clear(selectEl)

    //Add new ideas to dropdown
    selectEl.add(def);
    selectEl.add(idea1);
    selectEl.add(idea2);
    selectEl.add(idea3);
    selectEl.add(idea4);
    selectEl.add(idea5);
    selectEl.add(idea6);
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery user';
}

function reset(selectEl) {
    clear(selectEl)

    const def = document.createElement('option');
    def.textContent = 'Please select a date category to view date ideas';
    def.disabled = true;
    def.selected = true;

    selectEl.add(def);

    cat = document.getElementById('category');
    cat.selectedIndex = 0;
}

async function saveHist() {
    //Get data to put into history table
    const userName = this.getPlayerName()
    const date = new Date().toLocaleDateString();

    idea = document.getElementById('ideas');
    idx = idea.selectedIndex;
    const activity = idea.options[idx].text

    const newDate = { name: userName, activity: activity, date: date};

    // Use service to set newDate that has been comitted to
    try {
        const response = await fetch('/api/date', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newDate),
        });

        // Store what service gives us as local dating history
        const histories = await response.json();
        localStorage.setItem('histories', JSON.stringify(histories));
    } catch {
        // If there was an error, track dating history locally

        //Create JSON to send to history table
        let histories = [];

        const historyText = localStorage.getItem('histories');
        if (historyText) {
            histories = JSON.parse(historyText);
        }

        if (histories.length > 20) {
            histories.unshift(newDate);
            histories.length = 20;
          }

        // Add new data to the top of the table
        histories.unshift(newDate);

        localStorage.setItem('histories', JSON.stringify(histories))
    }

    // Reset generator dropdowns after a date idea has been committed to
    reset(document.getElementById('ideas'))
}

// Functionality for peer communication using WebSocket

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
        this.displayMsg('system', 'Generator', 'connected');
    };
    this.socket.onclose = (event) => {
        this.displayMsg('system', 'Generator', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
        } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
        }
    };
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
}