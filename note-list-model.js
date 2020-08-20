(function(exports) {

    function NoteList() {
        this.notes = [];
    }

    NoteList.prototype.content = function() {
        return this.notes;
    }

    NoteList.prototype.addNote = function(text) {
        note = new Note(text)
        this.notes.push(note);
        return note
    }

    exports.NoteList = NoteList;

})(this);