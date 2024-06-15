let newguestlist=["Ali","Umair","Zoha","Saba"];
newguestlist.unshift("Soha");
console.log("Good news!We have a big dinner table",newguestlist);
newguestlist.splice(3,0,"Zainab");
console.log(newguestlist);
newguestlist .push("Samiya");
console.log(newguestlist);
newguestlist.forEach(newguestlist=>console.log("You are invited for the dinner.",newguestlist));