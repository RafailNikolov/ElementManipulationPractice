function showPicker(obj) {
    var picker = $("#picker").jPicker(
        {
            images: {
                clientPath: 'lib/jPicker/images/'
            },
            color: {
                active: new $.jPicker.Color({ hex: obj.getColor() })
            }
        },
        function(color, context) {
            var selectedHex = '#' + color.val('all').hex
            obj.setColor(selectedHex);
            picker.hide();
        }
    );
}