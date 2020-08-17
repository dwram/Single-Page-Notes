let Note = require("./note-model").Note;


//console.log(notey.content());
console.log(newNote = Note.addNote("Hi"));
console.log(newNoteContent = Note.content());
console.log(Note.content === Note.content)

if (newNoteContent !== "Hi") {
    throw new Error ("Does not equal Hi");
} else {
    console.log(".")
}