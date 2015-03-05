function Text(text, color) {
    Element.call(this, text, color);
}

Text.prototype = new Element();

Text.prototype.render = function() {
    var self = this;
    var el = $("<div class='txt'><span>" + this.text + "</span></div>");
    el.draggable();
    $('#elements').append(el);
    el.css('background-color', this.color);
    el.on('dblclick', function() {
        showPicker(self);
    });
    this.element = el;
};