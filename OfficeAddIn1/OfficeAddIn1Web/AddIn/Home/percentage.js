
function getNumberOfWords() {
    Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
        function (result) {
            
            var wordCount = result.value.split(" ").length;
            console.log("Wordcount " + wordCount);
            calculatePercentage(wordCount);

        }
    );

}

function calculatePercentage(wordCount) {

    var wordCountAim = document.getElementById("word-aim").value;
    var percentage = (wordCount / wordCountAim) * 100;
    displayPercentage(percentage);

}

function displayPercentage(p) {

    document.getElementById("percentage").innerHTML = p + "%" + " completed!";

}