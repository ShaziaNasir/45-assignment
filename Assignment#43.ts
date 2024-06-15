let Magicians1 = ["Hunain", "Giga", "Samri", "Parkash"];
function Magicians(Magicians1: string) {
    return Magicians1
}
console.log(Magicians1);
let Magicians2=[...Magicians1];
Magicians1.forEach(magicians=>Magicians2.push("the great " + magicians))
console.log(Magicians2);

