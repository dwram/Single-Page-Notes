(function(exports) {

    function NoteList() {
        this.notes = [];
    }

    NoteList.prototype.content = function() {
        return this.notes;
    }

    NoteList.prototype.addNote = function(note) {
        note = new Note(note)
        return this.notes.push(note);
    }

    exports.NoteList = NoteList;

})(this);