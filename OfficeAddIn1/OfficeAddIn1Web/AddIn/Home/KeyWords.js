var keywords = [];
var numKeywords = [];
var keywordsInterval;

function setRefreshKW() {

    if (document.getElementById("checkbox").checked) {
        keywordsInterval = setInterval(function () {
            calculateKeywords();            
        }, 1000);
    } else {
        clearInterval(keywordsInterval);
    }

}
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
        table.deleteRow(table.rows.length - 1);
    }


    for (var i = 0; i < keywords.length; i++) {
        // document.getElementById(key).innerHTML = keywords[i];

        var key = 'key';
        var count = 'kcount';
        var num = i.toString();

        key = key.concat(num);
        count = count.concat(num);

        var row = table.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.id = key;
        cell2.id = count;

        if (numKeywords[i] >= 0) { }
        else {
            numKeywords[i] = 0;
        }

    }



    calcKeywords();
}

function calcKeywords() {
    for (var i = 0; i < keywords.length; i++) {
        calculateKeywords(i);
    }

    console.log('finished counting');
    console.log(numKeywords[0]);

    displayKeywords();
}

function calculateKeywords(i) {

    console.log('about to count');
    Word.run(function (context) {
        console.log('counting');

        console.log('keywords length = ' + keywords.length);
        console.log('numKeywords length = ' + numKeywords.length);

        console.log('loop ' + i);

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

    });
    /*    console.log('finished counting');
        console.log(numKeywords[0]);
        //displayKeywordFreqs();
        displayKeywords();*/
}

function add(index, num) {
    numKeywords[index] = num;
}


function displayKeywords() {

    console.log('displaying keywords');

    for (var i = 0; i < keywords.length; i++) {
        var key = 'key';
        var count = 'kcount';
        var num = i.toString();

        key = key.concat(num);
        count = count.concat(num);

        //console.log('key ' + i + ' = ' + key);
        //console.log('kcount ' + i + ' = ' + count);


        document.getElementById(key).innerHTML = keywords[i];
        document.getElementById(count).innerHTML = numKeywords[i];
    }

}

function clearKeywords() {
    keywords = [];
    numKeywords = [];

    var table = document.getElementById('key-table');
    while (table.rows.length > 1) {
        table.deleteRow(table.rows.length - 1);
    }

    displayKeywords();
    // displayKeywordFreqs(keywords);
}
