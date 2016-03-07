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
            var count = 0;
            var i = 0;
            var xx = result;
            var separators = [' ', '\\\ ', '-', '\\\(', '\\\)', '\\. ', '/', "\r\n", '\\\?'];
            console.log(separators.join('|'));
            var wordCount = result.value.split(new RegExp(separators.join('|'), 'g'));
            console.log(wordCount)
            //var wordCount = result.value.split(" ");
            // var max = result.value.split(" ").length;
            var max = wordCount.length;
            var dict = [max];
            var county = new Array(max);
            var counter = 0;
            while (i < max) {
                dict[i] = { word: "", value: 0 };
                i++;
            }
            var p = 0;
            while (p < max) {
                dict[p].word = wordCount[p].toLowerCase();
                dict[p].value = 1;
                p++;
            }
            while (count < max) {
                var t = 0;
                while (t < max) {
                    if (dict[count].word == dict[t].word) {
                        if (count < t) {
                            dict[count].value += 1;
                        }
                    }
                    t++;
                }
                count++;
            }
            var q = 0;
            while (q < max) {
                var y = 0;
                while (y < max) {
                    if (dict[q].word == dict[y].word && q != y) {
                        if (y > q) {
                            dict[y].value = 0;
                        }
                        else {
                            dict[q].value = 0;
                            }
                    }
                    y++;
                }
                q++;
        }

            count = max - 1;
            while (count >= 0) {
                   var you = 0;
                   while (you < listMax) {
                           if (dict[count].word == filter[you]) {
                                  dict[count].value = 0;
                            }
                            you++;
                   }
                   count--;
            }
            selectionSort(dict);
            displayCommmonWords(dict, max-1);
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


function displayCommmonWords(t, c) {
    var i = 0;
    if (c >= 0 && t[c].value != "") {
        document.getElementById("common").innerHTML = t[c].word;
        document.getElementById("count").innerHTML = t[c].value;
    }
    if (c - 1 >= 0 && t[c - 1].value != "") {
        document.getElementById("common1").innerHTML = t[c-1].word;
        document.getElementById("count1").innerHTML = t[c-1].value;
        //  document.getElementById("common1").innerHTML = t[c - 1].word + " is used " + t[c - 1].value + " time(s)";
    }
    if (c - 2 >= 0 && t[c - 2].value != "") {
        document.getElementById("common2").innerHTML = t[c-2].word;
    document.getElementById("count2").innerHTML = t[c-2].value;
    //     document.getElementById("common2").innerHTML = t[c - 2].word + " is used " + t[c - 2].value + " time(s)";
}
if (c - 3 >= 0 && t[c - 3].value != "") {
    document.getElementById("common3").innerHTML = t[c-3].word;
    document.getElementById("count3").innerHTML = t[c-3].value;
    //document.getElementById("common3").innerHTML = t[c - 3].word + " is used " + t[c - 3].value + " time(s)";
}

}

function minimizeC() {

    $("#common-box").toggle();
}