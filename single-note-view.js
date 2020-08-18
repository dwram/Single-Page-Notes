(function(exports){

    function SingleNote(note) {
        this.text = "<div>" + note.content() + "<div>"
    }

    SingleNote.prototype.content = function() {
        return this.text;
    }

    exports.SingleNote = SingleNote;

})(this);