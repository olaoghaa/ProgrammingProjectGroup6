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


    var table = document.getElementById('key-table');

    while (table.rows.length > 1) {
        table.deleteRow(table.rows.length-1);
    }


    for (var i = 0; i < keywords.length; i++) {
       // document.getElementById(key).innerHTML = keywords[i];

        var key = 'key';
        var count = 'kcount';
        var num = i.toString();

        key = key.concat(num);
        count = count.concat(num);

        var row = table.insertRow(i+1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.id = key;
        cell2.id = count;

        if (numKeywords[i] >= 0) { }
        else {
            numKeywords[i] = 0;
        }

    }



    displayKeywords();
    calculateKeywords();

}

function calculateKeywords() {

   /* for (var i = 0; i < keywords.length; i++) {
        numKeywords.push(0);
    }*/
    console.log('about to count');
    Word.run(function (context) {
        console.log('counting');
        
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
    console.log('finished counting');
    console.log(numKeywords[0]);
    //displayKeywordFreqs();
    displayKeywords();
}

function add(index, num) {
    numKeywords[index] = num;
}


function displayKeywords() {

    for (var i = 0; i < keywords.length; i++) {
        var key = 'key';
        var count = 'kcount';
        var num = i.toString();

        key = key.concat(num);
        count = count.concat(num);

        document.getElementById(key).innerHTML = keywords[i];
        document.getElementById(count).innerHTML = numKeywords[i];
    }

}

function displayKeywords2() {
    document.getElementById("keyword").innerHTML = keywords;
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
   // displayKeywordFreqs(keywords);
}
