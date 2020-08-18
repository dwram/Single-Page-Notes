(function(exports) {

    function NoteListView(noteList){
        this.noteList = noteList
    }

    NoteListView.prototype.convertToHtml = function () {
        //return this.noteList.content().forEach(note => console.log(note.text))
        //
        let temp = [];
        for (const [noteNumber] of Object.entries(this.noteList.content())) {
            let noteContent = this.noteList.content()[noteNumber].content()
            temp.push("<ul><li><div> Note number " + parseInt((noteNumber + 1)) + ": " + noteContent + "</div></li></ul>")
        }
        return temp;
        //"<ul><li><div>" + note.text + "</div></li></ul>"
    }

    exports.NoteListView = NoteListView

})(this);