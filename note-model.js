let Note = (function(){
    'use strict';

    function addNote(text) {
        this.text = text
        return this
    }

    function content() {
        return this.text
    }

    return {
        addNote: addNote,
        content: content
    }

})();

exports.Note = Note;

//notey = new Note("Hi")
//console.log(notey);
//console.log(notey.getContent());