var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var testArray = [{ mother: "Vica", father: "Mykyta", sister: "Olena", brother: "Oleg" },
    { father: "Roman", sister: "Olena" }, { mother: "Angela" }
];
function updateObjectInArray(initialArray, keyToFind, keyValueToFind, patch) {
    var indexesToUpdate = indexesOf(initialArray, keyToFind, keyValueToFind);
    var numbersCopy = JSON.parse(JSON.stringify(initialArray));
    indexesToUpdate.forEach(function (index) {
        numbersCopy[index] = __assign(__assign({}, numbersCopy[index]), patch);
    });
    return numbersCopy;
}
var indexesOf = function (arr, keyToFind, keyValueToFind) {
    return arr.reduce(function (acc, v, i) { return (v[keyToFind] === keyValueToFind && acc.push(i), acc); }, []);
};
var t = updateObjectInArray(testArray, "sister", "Olena", { brother: "Oleg" });
//# sourceMappingURL=task.js.map