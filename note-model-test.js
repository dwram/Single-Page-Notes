console.log("running test suite")
env = "test";

// note
note = new Note("hi")
assert.isTrue(note.text === 'hi')
assert.isTrue(note.text !== undefined)
note2 = new Note("bye")

// note lists
noteList = new NoteList();
assert.isTrue(noteList.content.length === 0)
noteList.addNote(note.content())
noteList.addNote(note2.content())
assert.isTrue(noteList.content()[0].text === 'hi')

// note lists view
noteListView = new NoteListView(noteList)
assert.isTrue(noteListView.convertToHtml()[0] === ("<ul><li><div> Note number 1: hi</div></li></ul>"));


//assert.isTrue(noteController.NoteListView.noteList[0] === ("<ul><li><div> Note number 1: hi</div></li></ul>"));

// Single note

singleNote = new SingleNote(note)
assert.isTrue(singleNote.content() ===  ("<div>" + "hi" + "<div>"));