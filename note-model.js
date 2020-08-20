var $noteCount = 0;

(function(exports){

    function Note(text) {
        this.text = text
        this.id = ($noteCount);
        $noteCount ++
    }

    Note.prototype.content = function() {
        return this.text;
    };

    Note.prototype.id = function() {
        return this.id
    }

    exports.Note = Note

})(this);
