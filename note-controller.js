(function (exports) {

    this.nl = new NoteList();

    function NoteController(NoteList = nl) {
        //NoteList.addNote("Favourite drink: Seltzer");
        this.NoteListView = new NoteListView(NoteList);
    }


    NoteController.prototype.getHTML = function () {
        return app.innerHTML = this.NoteListView.convertToHtml().join(" ");
    }


    exports.onload = function () {

        let app = document.getElementById("app");


        window.addEventListener("hashchange", singleNoteContent)

        function singleNoteContent(event) {
            let idToSearch = window.location.hash.replace('#notes/', "").replace('#note/new',"");
            //console.log(idToSearch)
            return cl.singleNoteGetter(idToSearch)
        }

        NoteController.prototype.singleNoteGetter = function(id) {
            return app.innerText = this.NoteListView.getNote(id);
        }

        let form = document.getElementById("text");
        form.addEventListener("submit", showNoteOnCurrentPage);

        this.cl = new NoteController()

        // Add note on form submission
        function showNoteOnCurrentPage(event) {
            event.preventDefault();
            //console.log(cl.NoteListView.noteList)
            note = cl.NoteListView.noteList.addNote(event.target[0].value)
            cl.NoteListView.getNote(note.id)
            cl.getHTML();
        }


    }

    exports.NoteController = NoteController;

})(this);




