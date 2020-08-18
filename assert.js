let i = 1;
let assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Test " + i++ +  ": " + assertionToCheck.toString() +  " is not truthy");
        } else {
            console.log("Test " + i++ + ": .")
        }
    }
};