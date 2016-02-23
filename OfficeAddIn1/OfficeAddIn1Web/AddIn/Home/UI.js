
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