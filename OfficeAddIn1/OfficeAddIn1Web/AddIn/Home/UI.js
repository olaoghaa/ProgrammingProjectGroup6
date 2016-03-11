var refreshTime = 1000;

var commonWordsInterval;

function setRefreshCW() {

    if (document.getElementById("checkbox").checked) {
        commonWordsInterval = setInterval(getMostCommonWords, refreshTime);
    } else {
        clearInterval(commonWordsInterval);
    }


}
var percentageInterval;

function setRefreshP() {

    console.log("YUPPEE");

    if (document.getElementById("checkbox").checked) {
        percentageInterval = setInterval(getNumberOfWords, refreshTime);
    } else {
        clearInterval(percentageInterval);
    }
}
var keywordsInterval;

function setRefreshKW() {

    if (document.getElementById("checkbox").checked) {
        keywordsInterval = setInterval(function () {
            calculateKeywords();
            displayKeywordFreqs();
        }, refreshTime);
    } else {
        clearInterval(keywordsInterval);
    }

}



function minimizeP() {

    $("#percent-box").toggle();

}

function minimizeF() {

    $("#format-box").toggle();

}

function minimizeC() {

    $("#common-box").toggle();

}

function minimizeK() {

    $("#key-box").toggle();

}


function hideAll() {
    $("#percent-box").hide();
    $("#format-box").hide();
    $("#common-box").hide();
    $("#key-box").hide();
}

function openAll() {
    $("#percent-box").show();
    $("#format-box").show();
    $("#common-box").show();
    $("#key-box").show();
}

function refreshData() {
    getNumberOfWords();
    getMostCommonWords();
    calculateKeywords();
}