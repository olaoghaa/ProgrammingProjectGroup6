// JavaScript source code
function getMostCommonWords() {
    Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
        function (result) {
            var count = 0;
            var i = 0;
            var wordCount = result.value.split(" ");
            var max = result.value.split(" ").length;
            var county = new Array(max);
            var c=0;
            while (c < max) {
                county[c] = 0;
                c++;
            }
            while (i < max) {
                var j = 0;
                while (j < max) {
                    if (wordCount[i] == wordCount[j] && i != j) {
                        if (county[j] == 0) {
                            county[i] = county[i] + 1;
                        }
                        //break;
                    }
                    else {
                        if (county[i] <= 1) {
                            county[i] = 1;
                        }
                    }
                    j = j + 1;
                }
                i = i + 1;
                //county[1] = 9;
            }
            var t = 0;
            while (t < max) {
                var tt = 0;
                while (tt < max) {
                    if (wordCount[tt] == wordCount[t] && t != tt) {
                        if (tt > t) {
                            county[tt] = 0;
                        }
                        else if(t>tt) {
                            county[t] = 0;
                        }
                    }
                    tt++;
                }
                t++;
            }
            //var t = county[1];
            if (county[0] == null) {
                console.log("Hey");
            }
            console.log("count " + county[0]);
            var result= new Array(4);
            var otherResult = new Array(4);
            var a = 0;
            var b = 0;
            var x = 0;
            var temp = 0;
            while (x < max) {
                if (county[x]!=0) {
                    temp++;
                }
                x++;
            }
            while (a < 4) {
                result[a] = 0;
                a++;
            }
            while (b < 4) {
                otherResult[b] = 0;
                b++;
            }
            var jj = 4;
            var k = 0;
            if (x < 4) {
                jj = x;
            }
            var hhh = 0;
            console.log("" + wordCount + " " +county);
          while (count < county.length) {
                var kane = 0;
          
                var p = 0;
                while (p < 4) {
                    if (county[count] > result[p]) {
                            result[p] = county[count];
                            otherResult[p] = wordCount[count];
                            break;
                    }
                    p++;
                }
              count++;
            }
            while (count < 4) {
                result[count] = county[count];
                otherResult[count] = wordCount[count];
            }
            displayCommmonWords(result, otherResult);
        }
    );

}

function displayCommmonWords(g, t) {
    var i = 0;
    while (i < g.length) {

       document.getElementById("common").innerHTML = t[0] + " is used " + g[0] + " time(s)";
       document.getElementById("common1").innerHTML = t[1] + " is used " + g[1] + " time(s)";
       document.getElementById("common2").innerHTML = t[2] + " is used " + g[2] + " time(s)";
       document.getElementById("common3").innerHTML = t[3] + " is used " + g[3] + " time(s)";

        i++;
    }
    

}
