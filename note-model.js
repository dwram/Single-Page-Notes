function Note(text){
        this.text = text
}

Note.prototype.content = function() {
    return this.text;
};

exports.Note = Note;
exports.content = Note.prototype.content;

//notey = new Note("Hi")
//console.log(notey);
//console.log(notey.getContent());