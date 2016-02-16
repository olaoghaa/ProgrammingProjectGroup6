var keywords = [];

function addKeywords() {

    var value = document.getElementById('keywords').value;
    var keywordArray = value.split(",");
    
    if (keywords.length === 0) {
        for (var j = 0; j < keywordArray.length; j++) {
            keywords.push(keywordArray[j]);
        }
    } else {
        for (var i = 0; i < keywords.length; i++) {
            for (var j = 0; j < keywordArray.length; j++) {
                if (keywords[i] === keywordArray[j]) {
                    keywordArray.splice(j, 1);
                }
            }
        }
        keywords = keywords.concat(keywordArray);
    }
    
    displayKeywords();
}


function displayKeywords() {           
     document.getElementById("keyword").innerHTML = keywords;   
}


function calculateKeywords() {
    var numKeywords = [];
    for (var i = 0; i < keywords.length; i++) {
        numKeywords.push(0);
    }
    Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
           function (result) {
               if (result.status === Office.AsyncResultStatus.Succeeded) {
                   var text = result.value.toString();               
                   for (var i = 0; i < keywords.length; i++) {
                       var re = new RegExp(keywords[i].toString(), 'gi');                       
                       var num = text.match(re);                       
                       if (num != null) {
                           numKeywords[i] = num.length;                           
                       }
                   }
                   displayKeywordFreqs(numKeywords);                   
               } else {
                   app.showNotification('Error:', result.error.message);
               }
           }
       );    
}

function displayKeywordFreqs(freqs) {
    var keywordfreqs = [];
    for (var i = 0; i < keywords.length; i++){
        keywordfreqs.push(keywords[i] + " ");
        keywordfreqs.push(freqs[i] + "\n");

    }
    document.getElementById("keywordFreq").innerHTML = keywordfreqs;   

}