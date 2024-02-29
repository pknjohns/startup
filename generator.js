function getIdeas(selectObj) {
    const idx = selectObj.selectedIndex;
    const value = selectObj.options[idx].value;
    
    if (value === "outdoor") {
        getOutdoor();
    } else if (value === "noprep") {
        getNoPrep();
    } else if (value === "community") {
        getCommnuity();
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