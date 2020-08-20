(function(exports) {

    function NoteListView(noteList){
        this.noteList = noteList
    }

    NoteListView.prototype.convertToHtml = function (limit= 20) {
        let temp = [];
        for (const [noteNumber] of Object.entries(this.noteList.content())) {
            let note = this.noteList.content()[noteNumber]
            url = window.location.pathname + "#notes/" + note.id
            //console.log(url)
            temp.push("<a href=" + url + "><ul><li><div> Note " + note.id + ": " + note.content().slice(0, limit) + "</div></li></ul></a>")
        }
        return temp;
    }

    NoteListView.prototype.getNote = function(id) {
        return this.noteList.notes[id].content()
    }

    exports.NoteListView = NoteListView

})(this);