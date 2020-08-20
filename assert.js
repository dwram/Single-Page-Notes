i = 0
let isBeforeEachOn = true; // Therefore, your NOTE id WILL RESET
var assert = {

    toggleBeforeEach: function() {
        return isBeforeEachOn = !isBeforeEachOn;
    },

    status:  function() {
        return isBeforeEachOn
    },

    beforeEach: function() {
        if (isBeforeEachOn) return $noteCount = 0;
    },

    isTrue: function(assertionToCheck, title = 'untitled') {
        this.beforeEach();
        if (!assertionToCheck) {
            //console.log(this.isTrue.arguments)
            if (this.isTrue.caller)  { console.log((this.isTrue.caller)); };
            throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not truthy");
        } else {
            console.log(i++ + ") " + title + ': PASSED!');
        }
    }
}