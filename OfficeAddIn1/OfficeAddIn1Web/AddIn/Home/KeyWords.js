var keywords = [];
var numKeywords = [];
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
   
    for (var i = 0; i < keywords.length; i++) {
        numKeywords.push(0);
    }
           Word.run(function (context) {               
                   for (var i = 0; i < keywords.length; i++) {
            var searchResults = context.document.body.search(keywords[i], { ignorePunct: true });
            context.load(searchResults);
            return context.sync().then(function () {
                var len = searchResults.items.length;
                console.log('Found count: ' + len);
                if (searchResults != null) {
                    add(i, len);
                    numKeywords[i] = len;                    
                    console.log(numKeywords[i]);
                                      
              
                }
                
           });
}

    })
    console.log(numKeywords[0]);
    displayKeywordFreqs();
    
    }

function add(index, num ) {
    numKeywords[index] = num;
}





 function displayKeywordFreqs() {

    var keywordfreqs = [];
     for (var i = 0; i < keywords.length; i++) {
        keywordfreqs.push(keywords[i] + " ");
         console.log(numKeywords[i]);
         keywordfreqs.push(numKeywords[i] + "\n");

    }

    var table = document.createElement("TABLE");
    table.border = "0";
    var columnCount = keywordfreqs.length;
    var row = table.insertRow(-1);
    
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "Keywords";
    row.appendChild(headerCell);
    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Times Used";
    row.appendChild(headerCell);

     for (var i = 0; i < keywordfreqs.length; i += 2) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = keywordfreqs[i];
        cell = row.insertCell(-1);
        cell.innerHTML = keywordfreqs[i + 1];
    }

    var keyTable = document.getElementById("keyTable");
    keyTable.innerHTML = "";
    keyTable.appendChild(table);
    

}

function clearKeywords() {
    keywords = [];
    displayKeywords();
    displayKeywordFreqs(keywords);
}
