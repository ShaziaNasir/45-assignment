let animalsName=["cat","dog","monkey"];
let property:string;
animalsName.forEach(animals=>
    {if (animals==="cat") {
        property="it is so cute"
    }
    else if(animals==="dog"){
    property="it is kept for safety";
    }
    else {
        property="it is good friend";
    }
console.log(animals,property);
})
console.log("All of three are pets");