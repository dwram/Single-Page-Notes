console.log("Note controller...");

(function(exports){

    function NoteController(NoteList = nl) {
        NoteList.addNote("Favourite drink: Seltzer");
        this.NoteListView = new NoteListView(NoteList);
        //this.getHTML();
    }

    exports.onload = function() {

        this.nl = new NoteList();

        NoteController.prototype.getHTML = function() {
            if (env === "test") {
                return ''
            } else {
                let app = document.getElementById("app");
                return app.innerHTML = this.NoteListView.convertToHtml().join(" ");
            }
        }

        exports.NoteController = NoteController;

        this.cl = new NoteController()


        const form = document.getElementById("text");
        form.addEventListener("submit", showNoteCurrentPage);

        function showNoteCurrentPage(event) {
            console.log(event)
            event.preventDefault();
        }
    }


})(this);




