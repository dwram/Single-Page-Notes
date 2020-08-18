(function(exports){

    function SingleNote(note) {
        this.text =  note.content()
    }

    SingleNote.prototype.content = function(limit = 20) {
        return ("<div>" + this.text.slice(0, limit)  + "<div>");
    }

    exports.SingleNote = SingleNote;

})(this);