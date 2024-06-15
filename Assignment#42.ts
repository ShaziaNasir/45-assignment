//first method to remove one by one//
/*let greatMagicians = ["Hunain", "Giga", "Samri", "Parkash"];
function make_great(greatMagicians:string){
    return greatMagicians}
    console.log(greatMagicians)
    greatMagicians[0]="great Hunain"
    
    greatMagicians[1]="great Giga"
    
    greatMagicians[2]="great Samri"
    
    greatMagicians[3]="great Parkash"
    console.log(greatMagicians);*/


    //second method to remove all elments in one time//

let greatMagicians = ["Hunain", "Giga", "Samri", "Parkash"];
function make_great(greatMagicians: string) {
    return greatMagicians
}
console.log(greatMagicians);
let new_magicians: string[] = [];
greatMagicians.forEach(magicians=>new_magicians.push("the great " + magicians))
console.log(new_magicians)













