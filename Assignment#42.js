/*let greatMagicians = ["Hunain", "Giga", "Samri", "Parkash"];
function make_great(greatMagicians: string[]) {
    greatMagicians.forEach(magicians =>


        console.log(`The Great, ${magicians}`))
};
make_great(greatMagicians)*/
/*let greatMagicians = ["Hunain", "Giga", "Samri", "Parkash"];
function make_great(greatMagicians:string){
    return greatMagicians}
    console.log(greatMagicians)
    greatMagicians[0]="great Hunain"
    
    greatMagicians[1]="great Giga"
    
    greatMagicians[2]="great Samri"
    
    greatMagicians[3]="great Parkash"
    console.log(greatMagicians);*/
var greatMagicians = ["Hunain", "Giga", "Samri", "Parkash"];
function make_great(greatMagicians) {
    return greatMagicians;
}
console.log(greatMagicians);
var new_magicians = [];
greatMagicians.forEach(function (magicians) { return new_magicians.push("the great " + magicians); });
console.log(new_magicians);
