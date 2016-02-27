
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

    var displayPerc = document.getElementById("percentage");

    if (isNaN(wordCount) || wordCount < 1) {

        displayPerc.innerHTML = "Please enter a valid value!";
        return;

    }

    var wordCountAim = document.getElementById("word-aim").value;
    var percentage = (wordCount / wordCountAim) * 100;

    displayPercentage(percentage);

}

function displayPercentage(p) {

    var displayPerc = document.getElementById("percentage");

    if (isNaN(p)){
        displayPerc.innerHTML = "N/A";
        return;
    }    
 
    if (p >= 100)
        p = 100;

    if (p.toString().indexOf(".") > -1){
       p = p.toFixed(2);
    }

    displayPerc.innerHTML = p + "%" ;

}
