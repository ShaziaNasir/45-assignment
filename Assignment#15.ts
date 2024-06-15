let myguestlist=["Ali","Umair","Zoha","Saba"];
let dontcome=myguestlist[1];
console.log(dontcome,"Cannot come");
myguestlist.splice(1,1,"Amir");
myguestlist.forEach(myguestlist=>console.log(`Salam,${myguestlist},would you come at my party today?`));

