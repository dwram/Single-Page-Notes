(function(exports){

    function SingleNote(note) {
        this.note = note
        this.id = note.id
        this.text =  note.content()
    }

    SingleNote.prototype.content = function(limit = 20) {
        return ("<div>" + this.text  + "<div>");
    }

    exports.SingleNote = SingleNote;

})(this);