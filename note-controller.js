(function (exports) {

    function NoteController(noteControllerNoteList = new NoteList()) {
        this.NoteListView = new NoteListView(noteControllerNoteList);
    }

    NoteController.prototype.getHTML = function () {
        return app.innerHTML = this.NoteListView.convertToHtml().join(" ");
    }


    exports.onload = function () {

        // map document elements
        let app = document.getElementById("app");
        let list = document.getElementById("list");
        let form = document.getElementById("text");


        // event types and listeners
        form.addEventListener("submit", showNoteOnCurrentPage);
        window.addEventListener("hashchange", singleNoteContent)

        // Add note on form submission
        function showNoteOnCurrentPage(event) {
            event.preventDefault();
            note = cl.NoteListView.noteList.addNote(event.target[0].value)
            cl.NoteListView.getNote(note.id)
            list.style.visibility = "hidden";
            cl.getHTML();
            form.reset();
        }

        // Get note on hash change
        function singleNoteContent(event) {
            let idToSearch = window.location.hash.replace('#notes/', "").replace('#note/new',"");
            return cl.singleNoteGetter(idToSearch)
        }

        NoteController.prototype.singleNoteGetter = function(id) {
            list.style.visibility = "visible";
            list.innerHTML = this.getHTML()
            return app.innerText = this.NoteListView.getNote(id);
        }

        this.cl = new NoteController()

    }

    exports.NoteController = NoteController;

})(this);




