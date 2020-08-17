let Note = require("./note-model").Note;


//console.log(notey.content());
console.log(note = new Note("Hi"));
console.log(note.content());


if (note.content() !== "Hi") {
    throw new Error ("Does not equal Hi");
} else {
    console.log(".")
}