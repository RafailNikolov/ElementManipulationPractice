(function() {
    'use strict';
    
    var elements = [];
    
    $(document).ready(function() {
        init();
    });
    
    function init() {
        var toolbar = $("<div id='toolbar'><button id='add-btn'>Add Button</button><button id='add-text'>Add Text</button></div>");
        $('#container').draggable().append(toolbar);
        toolbar.on('click', 'button', function() {
            if ($(this).attr('id') === 'add-btn') {
                addButton();
            } else if ($(this).attr('id') === 'add-text') {
                addText();
            }
        });
    }
    
    function addButton() {
        var btn = new Button('This is a non-linked link.', '#fff');
        elements.push(btn);
        btn.render();
    }
    
    function addText() {
        var txt = new Text('Some text.', '#fff');
        elements.push(txt);
        txt.render();
    }
    
    
    
})();