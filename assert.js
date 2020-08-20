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
            if (this.isTrue.arguments)  { console.log((this.isTrue.arguments)); }
            if (this.isTrue.caller)  { console.log((this.isTrue.caller)); }
            throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not truthy");
        } else {
            console.log(i++ + ") " + title + ': PASSED!');
        }
    },

    isFalse: function(assertionToCheck, title = 'untilted') {
        this.beforeEach();
        if (assertionToCheck) {
            if (this.isFalse.arguments) { console.log(this.isFalse.arguments); }
            if (this.isFalse.caller)  { console.log((this.isFalse.caller)); }
            throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not falsy");
        } else {
            console.log(i++ + ") " + title + ': PASSED!');
        }
    },

    isEqTo: function(assertionOne, assertionTwo, title = 'untilted') {
        this.beforeEach();
        if (assertionOne !== assertionTwo) {
            if (this.isEqTo.arguments) console.log(this.isEqTo.arguments)
            if (this.isEqTo.caller)  { console.log((this.isEqTo.caller)); }
            throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionOne + " is not equal to " + assertionTwo + "");
        } else {
            console.log(i++ + ") " + title + ': PASSED!');
        }
    },
}