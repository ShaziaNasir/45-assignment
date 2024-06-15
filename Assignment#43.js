var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magicians1 = ["Hunain", "Giga", "Samri", "Parkash"];
function Magicians(Magicians1) {
    return Magicians1;
}
console.log(Magicians1);
var Magicians2 = __spreadArray([], Magicians1, true);
Magicians1.forEach(function (magicians) { return Magicians2.push("the great " + magicians); });
console.log(Magicians2);
