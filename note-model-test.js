env = "test";

//globals
let note = new Note("hi")
let note2 = new Note("bye")
let note3 = new Note("this is a longer than twenty characters");
let noteList = new NoteList();
noteListView = new NoteListView(noteList)

// notes
function newNoteTest() {
    assert.isTrue(note.text === 'hi', 'Note with text "Hi" ')
    assert.isTrue(note.text !== undefined, 'Note is not undefined')
}

newNoteTest();

// note lists
function noteListTest() {
    assert.isTrue(noteList.content.length === 0, 'Notelist starts empty')
    noteList.addNote(note.content())
    noteList.addNote(note2.content())
    assert.isTrue(noteList.content()[0].text === 'hi', 'Creating note list with two notes')
}

noteListTest()

// note lists view
function noteListViewTest() {
    assert.isTrue(noteListView.convertToHtml()[0].includes("<ul><li><div> Note 0: hi</div></li></ul>"), 'List HTML conversion');
}

noteListViewTest();


// Single note

function singleNoteTest() {
    let newNote = new Note("bye")
    let singleNote = new SingleNote(newNote);
    assert.isTrue(singleNote.content() === ("<div>" + "bye" + "<div>"), 'Content() encapsulates note with div element');
}

singleNoteTest();

// Single note first 20
function singleNoteFirstTwenty() {
    let singleNote2 = new SingleNote(note3);
    assert.isTrue(singleNote2.content() === ("<div>" + "this is a longer than twenty characters" + "<div>"), 'Single Note abbreviation');
}

singleNoteFirstTwenty()

//Single note page URL
//note4 = new Note("I have no clue")
//noteListViewAB = new NoteListView(note4);
//assert.isTrue(noteListViewAB.convertToHtml().includes("#notes/0"))


// Note List longer than 20
function noteListLongerThanTwenty() {
    let noteList2 = new NoteList();
    noteList2.addNote("this is a longer than twenty characters");
    let noteListView2 = new NoteListView(noteList2);
    assert.isTrue(noteListView2.convertToHtml()[0].includes("<ul><li><div> Note 0: this is a longer tha</div></li></ul>"), 'NoteList HTML conversion encapsulates note with unordered list elements');
}

noteListLongerThanTwenty()

// Note ID
assert.toggleBeforeEach(); // NOW OFF
function noteIDTest() {
    assert.isTrue(note.id === 0, 'New note ID is 0');
    assert.isTrue(note2.id === 1, 'Second note ID is 1');
    assert.toggleBeforeEach(); // NOW ON
}

noteIDTest();

// NoteList double
function removingNoteListDoubleTest() {
    (function (exports) {

        exports.onload = function () {
            let form = document.getElementById("text");

            function NoteListDouble() {
                this.notes = ["different note"];
            }

            NoteListDouble.prototype.addNote = function () {
                return this.notes;
            }

            this.noteListDouble = new NoteListDouble();
            this.realNoteController = new NoteController(noteListDouble);

            assert.isTrue(realNoteController.NoteListView.noteList.notes[0] === 'different note', 'NoteController NoteList dummy')

        }

    })(this);
}

// TDD to finish support for user note creation
function noteCreationTests() {

    function runPreNoteCreationTests() {
        //assert.isTrue(newNoteController.NoteListView.getNote(0) === undefined, "Testing for an empty note list")
        assert.isTrue(app.innerText === 'Hello' || app.innerText === '', "Testing for empty app div inner text")
    }

    runPreNoteCreationTests();
    (function (exports) {
        let newNoteController;
        let app = document.getElementById("app");
        let textForm = document.getElementById("text");
        let dummyText = "Test Text";

        exports.onload = function () {

            textForm.onsubmit = function (e) {
                // Intercepts submit event
                e.preventDefault();
                // Extracts submitted event
                e.target[0].value = dummyText
                // Adds a new note to the note list
                const noteCreationNoteList = new NoteList();
                noteCreationNoteList.addNote(e.target[0].value)
                newNoteController = new NoteController(noteCreationNoteList);
                updateAppElement(newNoteController);
            }

            //updates app element to show note list as HTML
            function updateAppElement(noteController) {
                noteController.getHTML()
                textForm.reset();
            }

            //stimulates click to initiate test
            document.getElementById("submit").click();
            exports.newNoteController = newNoteController;


            // execute tests automatically
            runPostNoteCreationTests();
        }

        function runPostNoteCreationTests() {
            assert.isTrue(newNoteController.NoteListView.getNote(0) === dummyText, "Testing note controller note content")
            assert.isTrue(app.innerText.includes(dummyText), "Testing for app inner text")
        }


    })(this);

}

noteCreationTests()

assert.toggleBeforeEach()


