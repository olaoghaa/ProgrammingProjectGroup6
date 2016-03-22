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
            addKeywords();
        }, refreshTime);
    } else {
        clearInterval(keywordsInterval);
    }

}

function refreshData() {
    getNumberOfWords();
    getMostCommonWords();
    addKeywords();
}