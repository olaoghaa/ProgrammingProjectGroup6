﻿
function seeIfDisable() {
    Word.run(function (ctx) {
        var doc = ctx.document;
        ctx.load(doc, 'body/text');
        ctx.sync().then(function () {
            var currentText = (doc.body.text || '').trim(),
                wordCount = currentText.split(/[\s,]+/).length;
            if (wordCount > 8) {
                document.getElementById("format-button").disabled = true;
            } else {
                document.getElementById("format-button").disabled = false;
            }
            setTimeout(seeIfDisable, 500);
        });
    });
}



function getStructureInput() {
    var value = document.getElementById('Structure').value;
    Office.context.document.setSelectedDataAsync(value); 
    Word.run(function (context) {       
        var selection = context.document.getSelection();
        selection.font.size = 16;        
        return context.sync().then(function () {
            var paragraphs = selection.paragraphs;            
            context.load(paragraphs, 'style');
            
            return context.sync().then(function () {
                for (var i = 0; i < paragraphs.items.length; i++) {                
                    var paragraph = paragraphs.items[i];
                    paragraph.insertBreak('page', 'After');
                   // paragraph.style = "Heading 1";
                    //paragraph.style = "Заголовок 1";
                    paragraph.font.color = 'black';
                    //paragraph.style = "Normal";
                }                
                return context.sync().then(function () {
                    console.log('Inserted structure');
                });
            })
        });
    })
    .catch(function (error) {
        console.log('Error: ' + JSON.stringify(error));
        if (error instanceof OfficeExtension.Error) {
            console.log('Debug info: ' + JSON.stringify(error.debugInfo));
        }
    });
}


