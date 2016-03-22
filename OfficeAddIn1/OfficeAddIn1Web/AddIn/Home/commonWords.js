// JavaScript source code


function wordSize(name, value) {
    this.name = name;
    this.value = value;
}

function getMostCommonWords() {
    Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
        function (result) {
            var list = document.getElementById('words');
            var filter1 = list.innerHTML;
            var filter = filter1.split(",");
            var listMax = filter.length;
            var separators = [' ', '-', '\\\(', '\\\)', '\\\. ', '/', "\n", '\\\?', '\r', ','];

            var essayWords = result.value.toLowerCase().split(new RegExp(separators.join('|'), 'g'));
            
            var max = essayWords.length;
            var wordCounts = {};
            for (var i = 0; i < max; i++) {
                if (filter.indexOf(essayWords[i]) < 0) {
                    if (essayWords[i] in wordCounts) {
                        wordCounts[essayWords[i]]++;
                    } else {
                        wordCounts[essayWords[i]] = 1;
                    }
                }
            }

            if ("" in wordCounts) {
                delete wordCounts[""];
            }

            var usedWords = [];
            var mostCommonWords = {};
            var currentWords;
            var currentCount;

            for (var i = 0; i < 4; i++) {
                currentCount = 0;
                currentWords = [];

                for (var key in wordCounts) {
                    if (wordCounts.hasOwnProperty(key)) {
                        if (usedWords.indexOf(key) == -1) {
                            if (wordCounts[key] > currentCount) {
                                currentWords = [];
                                currentWords.push(key);
                                currentCount = wordCounts[key];
                            } else if (wordCounts[key] == currentCount) {
                                currentWords.push(key);
                            }
                        }
                    }
                }
                mostCommonWords[currentCount] = currentWords;
                usedWords = usedWords.concat(currentWords);
            }
            displayCommonWords(mostCommonWords);
        }
    );

}

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1].value > arr[j].value) {
                var temp = arr[j - 1].value;
                var tmp = arr[j - 1].word;
                arr[j - 1].value = arr[j].value;
                arr[j - 1].word = arr[j].word;
                arr[j].value = temp;
                arr[j].word = tmp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
       var minIdx, temp,
            len = arr.length;
        for (var i = 0; i < len; i++) {
                minIdx = i;
                for (var j = i + 1; j < len; j++) {
                        if (arr[j].value < arr[minIdx].value) {
                                minIdx = j;
            }
        }
                temp = arr[i].value;
                tmp = arr[i].word;
                arr[i].value = arr[minIdx].value;
                arr[i].word = arr[minIdx].word;
                arr[minIdx].value = temp;
                arr[minIdx].word = tmp;
    }
    return arr;
}
function biggestf(mostCommonWords){
    for (var key in mostCommonWords) {
        if (mostCommonWords[key] != 0) {
            biggest = key;
        }
    }
    return biggest;
}
function displayHack(mostCommonWords, done) {
    var biggest;
    var biggest1;
    biggest=biggestf(mostCommonWords)
    for (var e = 0; e<4; e++) {
        if (mostCommonWords[biggest][e]!=null&&done+e<4) {
                document.getElementById("common" + (done+e).toString()).innerHTML = mostCommonWords[biggest][e];
                document.getElementById("count" + (done+e).toString()).innerHTML = biggest;
            }
            if (mostCommonWords[biggest].length - 4 > 0) {
                document.getElementById("explanation").innerHTML = (mostCommonWords[biggest].length - 4) + " more words are used " + biggest + " times";
            }
    }
    return mostCommonWords[biggest].length;
    
}
function displayCommonWords(mostCommonWords) {
    var displayCount = 0;
    var numWordsLeft;
    var wordsLeftCount;
    var biggest1;
    var count = displayHack(mostCommonWords, 0);
    var biggest = biggestf(mostCommonWords);
    while (count < 4) {
        delete mostCommonWords[biggest];
        biggest = biggestf(mostCommonWords);
        count += displayHack(mostCommonWords, count);

    }

    /*for (var key in mostCommonWords) {
        //console.log(mostCommonWords.size);
        if (mostCommonWords.hasOwnProperty(key)) {
            if (displayCount < 4) {
                for (var j = 0; j < mostCommonWords[key].length; j++) {
                    if (displayCount < 4) {
                        document.getElementById("common" + (3-displayCount).toString()).innerHTML = mostCommonWords[key][j];
                        document.getElementById("count" + (3- displayCount).toString()).innerHTML = key;
                      /*  if (displayCount == 3&&wordsLeftCount>1) {
                            document.getElementById("explanation").innerHTML = numWordsLeft + " more words are used " + wordsLeftCount + " times";
                        }
                    } else {
                        numWordsLeft = mostCommonWords[key].length - j;
                        wordsLeftCount = key;
                    }
                    displayCount++;
                }
            }
        }
    }*/
    //document.getElementById("explanation").innerHTML = numWordsLeft + " more words are used " + wordsLeftCount + " times";
}
        
//            //spin16.stop();


function minimizeC() {

    $("#common-box").toggle();
}
