
function getNumberOfWords() {
    Word.run(function (context) {
        var doc = context.document;
        context.load(doc, 'body/text');
        context.sync().then(function () {
            var currentText = (doc.body.text || '').trim(),
            wordCount = currentText.split(/[\s,]+/).length;
            calculatePercentage(wordCount);
        });
    });

}

function calculatePercentage(wordCount) {

    var displayPerc = document.getElementById("percentage");

    if (isNaN(wordCount) || wordCount < 1) {

        displayPerc.innerHTML = "N/A";
        return;

    }

    var wordCountAim = document.getElementById("word-aim").value;
    var percentage = Math.round((wordCount / wordCountAim) * 100);

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
