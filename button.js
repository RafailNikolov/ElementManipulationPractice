function Button(text, color) {
    Element.call(this, text, color);
}

Button.prototype = new Element();

Button.prototype.render = function() {
    var self = this;
    var el = $("<div class='b'><a href='#'>" + this.text + "</a></div>");
    el.draggable();
    $('#elements').append(el);
    el.css('background-color', this.color);
    el.on('dblclick', function() {
        showPicker(self);
    });
    this.element = el;
};