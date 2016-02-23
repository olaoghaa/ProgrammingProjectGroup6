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

    var table = document.createElement("TABLE");
    table.border = "0";
    var columnCount = keywordfreqs.length;
    var row = table.insertRow(-1);
    
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "keywords";
    row.appendChild(headerCell);
    headerCell = document.createElement("TH");
    headerCell.innerHTML = "times used";
    row.appendChild(headerCell);

    for (var i = 0; i < keywordfreqs.length; i+=2) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = keywordfreqs[i];
        cell = row.insertCell(-1);
        cell.innerHTML = keywordfreqs[i + 1];
    }

    var keyTable = document.getElementById("keyTable");
    keyTable.innerHTML = "";
    keyTable.appendChild(table);
    

    //document.getElementById("keywordFreq").innerHTML = keywordfreqs;   

}

function clearKeywords() {
    keywords = [];
    displayKeywords();
    displayKeywordFreqs(keywords);
}
