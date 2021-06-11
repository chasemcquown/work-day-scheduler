// reference to input elements 
var nineAmInput = document.querySelector("#user-input-9");
var tenAmInput = document.querySelector("#user-input-10");
var elevenAmInput = document.querySelector("#user-input-11");
var twelvePmInput = document.querySelector("#user-input-12");
var onePmInput = document.querySelector("#user-input-1");
var twoPmInput = document.querySelector("#user-input-2");
var threePmInput = document.querySelector("#user-input-3");
var fourPmInput = document.querySelector("#user-input-4");
var fivePmInput = document.querySelector("#user-input-5");

// button elements
var nineAmBtn = document.querySelector("#btn-9");
var tenAmBtn = document.querySelector("#btn-10");
var elevenAmBtn = document.querySelector("#btn-11");
var twelvePmBtn = document.querySelector("#btn-12");
var onePmBtn = document.querySelector("#btn-1");
var twoPmBtn = document.querySelector("#btn-2");
var threePmBtn = document.querySelector("#btn-3");
var fourPmBtn = document.querySelector("#btn-4");
var fivePmBtn = document.querySelector("#btn-5");

// logic for moment.js

// get current time
var currentTime = moment().format("hh");

// for past hour(s)


// for current hour
if (parseInt(currentTime) === 9) {
    nineAmInput.className = "present col-10";
    //future times below
    tenAmInput.className = "future col-10";
    elevenAmInput.className = "future col-10";
    twelvePmInput.className = "future col-10";
    onePmInput.className = "future col-10";
    twoPmInput.className = "future col-10";
    threePmInput.className = "future col-10";
    fourPmInput.className = "future col-10";
    fivePmInput.className = "future col-10";

}

if (parseInt(currentTime) === 10) {
    tenAmInput.className = "present col-10";
    // future times below
    elevenAmInput.className = "future col-10";
    twelvePmInput.className = "future col-10";
    onePmInput.className = "future col-10";
    twoPmInput.className = "future col-10";
    threePmInput.className = "future col-10";
    fourPmInput.className = "future col-10";
    fivePmInput.className = "future col-10";
    // past times below
    nineAmInput.className = "past col-10";
}

if (parseInt(currentTime) === 11) {
    elevenAmInput.className = "present col-10";
    // future times below
    twelvePmInput.className = "future col-10";
    onePmInput.className = "future col-10";
    twoPmInput.className = "future col-10";
    threePmInput.className = "future col-10";
    fourPmInput.className = "future col-10";
    fivePmInput.className = "future col-10";
     // past times below
     nineAmInput.className = "past col-10";
     tenAmInput.className = "past col-10";
}

if (parseInt(currentTime) === 12) {
    twelvePmInput.className = "present col-10";
    // future times below
    onePmInput.className = "future col-10";
    twoPmInput.className = "future col-10";
    threePmInput.className = "future col-10";
    fourPmInput.className = "future col-10";
    fivePmInput.className = "future col-10";
    // past times below
    nineAmInput.className = "past col-10";
    tenAmInput.className = "past col-10";
    elevenAmInput.className = "past col-10";
}

if (parseInt(currentTime) === 1) {
    onePmInput.className = "present col-10";
    // future times below
    twoPmInput.className = "future col-10";
    threePmInput.className = "future col-10";
    fourPmInput.className = "future col-10";
    fivePmInput.className = "future col-10";
    // past times below
    nineAmInput.className = "past col-10";
    tenAmInput.className = "past col-10";
    elevenAmInput.className = "past col-10";
    twelvePmInput.className = "past col-10";
}

if (parseInt(currentTime) === 2) {
    twoPmInput.className = "present col-10";
    // future times below
    threePmInput.className = "future col-10";
    fourPmInput.className = "future col-10";
    fivePmInput.className = "future col-10";
     // past times below
     nineAmInput.className = "past col-10";
     tenAmInput.className = "past col-10";
     elevenAmInput.className = "past col-10";
     twelvePmInput.className = "past col-10";
     onePmInput.className = "past col-10";
}

if (parseInt(currentTime) === 3) {
    threePmInput.className = "present col-10";
    // future times below
    fourPmInput.className = "future col-10";
    fivePmInput.className = "future col-10";
    // past times below
    nineAmInput.className = "past col-10";
    tenAmInput.className = "past col-10";
    elevenAmInput.className = "past col-10";
    twelvePmInput.className = "past col-10";
    onePmInput.className = "past col-10";
    twoPmInput.className = "past col-10";
}

if (parseInt(currentTime) === 4) {
    fourPmInput.className = "present col-10";
    // future times below
    fivePmInput.className = "future col-10";
     // past times below
     nineAmInput.className = "past col-10";
     tenAmInput.className = "past col-10";
     elevenAmInput.className = "past col-10";
     twelvePmInput.className = "past col-10";
     onePmInput.className = "past col-10";
     twoPmInput.className = "past col-10";
     threePmInput.className = "past col-10";
}

if (parseInt(currentTime) === 5) {
    fivePmInput.className = "present col-10";
    // past times below
    nineAmInput.className = "past col-10";
    tenAmInput.className = "past col-10";
    elevenAmInput.className = "past col-10";
    twelvePmInput.className = "past col-10";
    onePmInput.className = "past col-10";
    twoPmInput.className = "past col-10";
    threePmInput.className = "past col-10";
    fourPmInput.className = "past col-10";

}









// logic for 9 am input
var storedNineAmText = localStorage.getItem("nineAmInput");

if (nineAmInput) {

    nineAmInput.textContent = storedNineAmText;


};


nineAmInput.addEventListener("input", letter => {
    nineAmInput.textContent = letter.target.value;
});


var saveNineAmInput = function() {
    localStorage.setItem("nineAmInput", nineAmInput.textContent);
};

// logic for 10 am input 
var storedTenAmText = localStorage.getItem("tenAmInput");

if (tenAmInput) {

    tenAmInput.textContent = storedTenAmText;


};


tenAmInput.addEventListener("input", letter => {
    tenAmInput.textContent = letter.target.value;
});


var saveTenAmInput = function() {
    localStorage.setItem("tenAmInput", tenAmInput.textContent);
};

// logic for 11 am input 
var storedElevenAmText = localStorage.getItem("elevenAmInput");

if (elevenAmInput) {

    elevenAmInput.textContent = storedElevenAmText;


};


elevenAmInput.addEventListener("input", letter => {
    elevenAmInput.textContent = letter.target.value;
});


var saveElevenAmInput = function() {
    localStorage.setItem("elevenAmInput", elevenAmInput.textContent);
};

// logic for 10 am input 
var storedTenAmText = localStorage.getItem("tenAmInput");

if (tenAmInput) {

    tenAmInput.textContent = storedTenAmText;


};


tenAmInput.addEventListener("input", letter => {
    tenAmInput.textContent = letter.target.value;
});


var saveTenAmInput = function() {
    localStorage.setItem("tenAmInput", tenAmInput.textContent);
};

// logic for 12 pm input 
var storedTwelvePmText = localStorage.getItem("twelvePmInput");

if (twelvePmInput) {

    twelvePmInput.textContent = storedTwelvePmText;


};


twelvePmInput.addEventListener("input", letter => {
    twelvePmInput.textContent = letter.target.value;
});


var saveTwelvePmInput = function() {
    localStorage.setItem("twelvePmInput", twelvePmInput.textContent);
};

// logic for 1 pm input 
var storedOnePmText = localStorage.getItem("onePmInput");

if (onePmInput) {

    onePmInput.textContent = storedOnePmText;


};


onePmInput.addEventListener("input", letter => {
    onePmInput.textContent = letter.target.value;
});


var saveOnePmInput = function() {
    localStorage.setItem("onePmInput", onePmInput.textContent);
};

// logic for 2 pm input 
var storedTwoPmText = localStorage.getItem("twoPmInput");

if (twoPmInput) {

    twoPmInput.textContent = storedTwoPmText;


};


twoPmInput.addEventListener("input", letter => {
    twoPmInput.textContent = letter.target.value;
});


var saveTwoPmInput = function() {
    localStorage.setItem("twoPmInput", twoPmInput.textContent);
};

// logic for 3 pm input 
var storedThreePmText = localStorage.getItem("threePmInput");

if (threePmInput) {

    threePmInput.textContent = storedThreePmText;


};


threePmInput.addEventListener("input", letter => {
    threePmInput.textContent = letter.target.value;
});


var saveThreePmInput = function() {
    localStorage.setItem("threePmInput", threePmInput.textContent);
};

// logic for 4 pm input 
var storedFourPmText = localStorage.getItem("fourPmInput");

if (fourPmInput) {

    fourPmInput.textContent = storedFourPmText;


};


fourPmInput.addEventListener("input", letter => {
    fourPmInput.textContent = letter.target.value;
});


var saveFourPmInput = function() {
    localStorage.setItem("fourPmInput", fourPmInput.textContent);
};

// logic for 5 pm input 
var storedFivePmText = localStorage.getItem("fivePmInput");

if (fivePmInput) {

    fivePmInput.textContent = storedFivePmText;


};


fivePmInput.addEventListener("input", letter => {
    fivePmInput.textContent = letter.target.value;
});


var saveFivePmInput = function() {
    localStorage.setItem("fivePmInput", fivePmInput.textContent);
};

// save button event listeners
nineAmBtn.addEventListener("click", saveNineAmInput);
tenAmBtn.addEventListener("click", saveTenAmInput);
elevenAmBtn.addEventListener("click", saveElevenAmInput);
twelvePmBtn.addEventListener("click", saveTwelvePmInput);
onePmBtn.addEventListener("click", saveOnePmInput);
twoPmBtn.addEventListener("click", saveTwoPmInput);
threePmBtn.addEventListener("click", saveThreePmInput);
fourPmBtn.addEventListener("click", saveFourPmInput);
fivePmBtn.addEventListener("click", saveFivePmInput);


