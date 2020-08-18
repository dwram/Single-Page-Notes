(function(exports) {

    function NoteListView(noteList){
        this.noteList = noteList
    }

    NoteListView.prototype.convertToHtml = function () {
        let temp = [];
        for (const [noteNumber] of Object.entries(this.noteList.content())) {
            let noteContent = this.noteList.content()[noteNumber].content()
            temp.push("<ul><li><div> Note number " + (parseInt((noteNumber)) + 1) + ": " + noteContent + "</div></li></ul>")
        }
        return temp;
    }

    exports.NoteListView = NoteListView

})(this);