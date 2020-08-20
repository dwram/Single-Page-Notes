i = 0
let isAfterEachOn = true;
let isBeforeEachOn = true; // Therefore, your NOTE id WILL RESET

var assert = {

    toggleBeforeEach: function() {
        return isBeforeEachOn = !isBeforeEachOn;
    },

    toggleAfterEach: function() {
        return isBeforeEachOn = !isBeforeEachOn;
    },

    status:  function() {
        console.log("Before each: " + isBeforeEachOn)
        console.log("After each: " + isAfterEachOn)
    },

    //run what you want to happen before each test here!!
    beforeEach: function() {
        if (isBeforeEachOn) {
         $noteCount = 0;
        }
    },

    afterEach: function() {
        if (isAfterEachOn) {
            $noteCount = 0;
        }
        updateTests();
    },

    isTrue: function(assertionToCheck, title = 'untitled') {
        this.beforeEach();
        if (!assertionToCheck) {
            if (this.isTrue.arguments)  { console.log((this.isTrue.arguments)); }
            if (this.isTrue.caller)  { console.log((this.isTrue.caller)); }
            let test = i++ + ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not truthy";
            this.tests.push(test);
            updateTests();
            throw new Error(test);
        } else {
            let test = i++ + ") " + title + ': PASSED!'
            this.tests.push(test)
            console.log(test);
        }
        this.afterEach();
    },

    isFalse: function(assertionToCheck, title = 'untitled') {
        this.beforeEach();
        if (assertionToCheck) {
            if (this.isFalse.arguments) { console.log(this.isFalse.arguments); }
            if (this.isFalse.caller)  { console.log((this.isFalse.caller)); }
            let test = i++ + ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not falsey";
            this.tests.push(test);
            updateTests();
            throw new Error(test);
            //throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not falsy");
        } else {
            let test = i++ + ") " + title + ': PASSED!'
            this.tests.push(test)
            console.log(test);
        }
        this.afterEach();
    },

    isEqTo: function(assertionOne, assertionTwo, title = 'untitled') {
        this.beforeEach();
        if (assertionOne !== assertionTwo) {
            if (this.isEqTo.arguments) console.log(this.isEqTo.arguments)
            if (this.isEqTo.caller)  { console.log((this.isEqTo.caller)); }
            let test = i++ + ") Assertion failed: (" + title + '): ' + assertionOne + " is not equal to " + assertionTwo;
            this.tests.push(test);
            updateTests();
            throw new Error(test);
            //throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionOne + " is not equal to " + assertionTwo + "");
        } else {
            let test = i++ + ") " + title + ': PASSED!'
            this.tests.push(test)
            console.log(test);
        }
        this.afterEach();
    },

    tests: [],
}

function updateTests() {
    document.getElementById("tests").innerHTML = "Test suite <br/>" + assert.tests.map(tests => tests + "<br/>").join(" ")
}
