const header = document.getElementById("playerHeader");
header.textContent = "User: " + getPlayerName();

function getIdeas(selectObj) {
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

    // Get ideas dropdown
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

    // Get ideas dropdown
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

    // Get ideas dropdown
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

function saveHist() {
    //Get data to put into history table
    const userName = this.getPlayerName()
    const date = new Date().toLocaleDateString();

    idea = document.getElementById('ideas');
    idx = idea.selectedIndex;
    const activity = idea.options[idx].text

    const newActivity = { name: userName, activity: activity, date: date};

    //Create JSON to send to history table
    let history = [];

    const historyText = localStorage.getItem('hist');
    if (historyText) {
        history = JSON.parse(historyText);
    }

    history.unshift(newActivity);

    localStorage.setItem('hist', JSON.stringify(history))
    reset(document.getElementById('ideas'))
}