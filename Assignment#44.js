/*let items=["cabbage","egg","chicken","letuce"];
function sandwhich(items:string){
    return items
}
items.forEach (elements=>console.log(`i want to eat sandwhich with ${elements}`));*/
var items = ["egg", "cabbage", "chicken"];
function sandwhich(items) {
    console.log("i want to eat sandwhich with ".concat(items));
}
sandwhich(["egg"]);
sandwhich(["cabbage"]);
sandwhich(["chicken"]);
