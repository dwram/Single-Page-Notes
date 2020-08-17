(function(exports) {
    var EXCLAMATION_MARK_COUNT = 5

    function exclaim(repeat, string) {
        return string + repeat("!", EXCLAMATION_MARK_COUNT);
    }

    exports.exclaim = exclaim;
})(this);
