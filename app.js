const kraken = document.getElementById('kraken');


function toggleKraken() {
    if (kraken.innerHTML === 'Terminal Game - The Kraken') {
        kraken.innerHTML = '<img src="./resources/images/krakenGame.png" style="max-width: 500px; height: auto;">'
    } else {
        kraken.innerHTML = 'Terminal Game - The Kraken'
    }
};

kraken.onclick = toggleKraken;

///////////

const venue = document.getElementById('venue');


function toggleVenue() {
    if (venue.innerHTML === 'San Diego Music Venue Finder') {
        venue.innerHTML = '<img src="./resources/images/sdLiveMusic.png" style="max-width: 500px; height: auto;">'
    } else {
        venue.innerHTML = 'San Diego Music Venue Finder'
    }
};

venue.onclick = toggleVenue;

//////////////

const cpu = document.getElementById('cpu');


function toggleCPU() {
    if (cpu.innerHTML === 'CPU Simulator') {
        cpu.innerHTML = '<img src="./resources/images/cpuSimulator.png" style="max-width: 500px; height: auto;">'
    } else {
        cpu.innerHTML = 'CPU Simulator'
    }
};

cpu.onclick = toggleCPU;

//////////////

const horoscope = document.getElementById('horoscope');


function toggleHoroscope() {
    if (horoscope.innerHTML === 'Javascript Horoscope Generator') {
        horoscope.innerHTML = '<img src="./resources/images/horoscope.png" style="max-width: 500px; height: auto;">'
    } else {
        horoscope.innerHTML = 'Javascript Horoscope Generator'
    }
};

horoscope.onclick = toggleHoroscope;