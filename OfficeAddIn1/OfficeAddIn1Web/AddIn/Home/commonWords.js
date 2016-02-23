// JavaScript source code


function wordSize(name, value) {
    this.name = name;
    this.value = value;
}

function getMostCommonWords() {
    Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
        function (result) {
            var count = 0;
            var i = 0;
            var wordCount = result.value.split(" ");
            var max = result.value.split(" ").length;
            var dict = [max];
            var county = new Array(max);
            var counter = 0;
            while (i < max) {
                dict[i] = { word: "", value: 0 };
                i++;
            }
            var p = 0;
            while (p < max) {
                dict[p].word = wordCount[p];
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


            bubbleSort(dict);
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


function displayCommmonWords(t, c) {
    var i = 0;
    while (i < t.length) {

        document.getElementById("common").innerHTML = t[c].word + " is used " + t[c].value + " time(s)";
        document.getElementById("common1").innerHTML = t[c-1].word + " is used " + t[c-1].value + " time(s)";
        document.getElementById("common2").innerHTML = t[c-2].word + " is used " + t[c-2].value + " time(s)";
        document.getElementById("common3").innerHTML = t[c-3].word + " is used " + t[c-3].value + " time(s)";
       

        i++;
    }


}

function minimizeC() {

    $("#common-box").toggle();

}
