(function(exports) {

    function NoteListView(noteList){
        this.noteList = noteList
    }

    NoteListView.prototype.convertToHtml = function (limit= 20) {
        let temp = [];
        for (const [noteNumber] of Object.entries(this.noteList.content())) {
            let noteContent = this.noteList.content()[noteNumber].content()
            temp.push("<ul><li><div> Note " + (parseInt((noteNumber)) + 1) + ": " + noteContent.slice(0, limit) + "</div></li></ul>")
        }
        return temp;
    }

    exports.NoteListView = NoteListView

})(this);