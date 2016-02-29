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
                }                
                return context.sync().then(function () {
                    console.log('Inserted text at the end of the first paragraph.');
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


