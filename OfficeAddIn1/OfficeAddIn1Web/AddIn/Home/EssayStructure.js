﻿function getStructureInput() {

    var value = document.getElementById('Structure').value;
    Office.context.document.setSelectedDataAsync(value); 

}


function minimizeF() {

    $("#format-box").toggle();

}