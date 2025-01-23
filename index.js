let home = document.getElementById("score-num-home");
let guest = document.getElementById("score-num-guest");
let score = 0
let scoreGuest = 0


function addone() {
    let result = score + 1;
    home.innerText = result
    score += 1;
}

function addtwo() {
    let result = score + 2;
    home.innerText = result;
    score += 2;
}

function addthree() {
    let result = score + 3;
    home.innerText = result;
    score += 3;
}


function addoneguest() {
    let result = scoreGuest + 1;
    guest.innerText = result
    scoreGuest += 1;
}

function addtwoguest() {
    let result = scoreGuest + 2;
    guest.innerText = result;
    scoreGuest += 2;
}

function addthreeguest() {
    let result = scoreGuest + 3;
    guest.innerText = result;
    scoreGuest += 3;
}

function reset() {
    score = 0
    scoreGuest = 0
    home.innerText = score
    guest.innerText = scoreGuest
}