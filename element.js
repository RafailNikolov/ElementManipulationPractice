function Element(text, color) {
    this.text = text;
    this.color = color;
    this.element = null;
}

Element.prototype.getColor = function() {
    return this.color;
};

Element.prototype.setColor = function(color) {
    this.color = color;
    this.element.css('background-color', color);
};