//first method//
/*let numbers=[1,2,3,4,5,6,7,8,9];
for(let oneNumber of numbers){
    let ordinalEnding:string;


    if (oneNumber===1){
        ordinalEnding="st"
    }
else if (oneNumber===2){
    ordinalEnding="nd"
}
else if(oneNumber===3){
    ordinalEnding="rd"

}
else{ordinalEnding="th"}
console.log(oneNumber,ordinalEnding);
}*/
//second method//
let numbers=[1,2,3,4,5,6,7,8,9];
let ordinalEnding:string
numbers.forEach(numbers=>{
    if (numbers===1){
        ordinalEnding="st"

    }
    
     else if (numbers===2) {
            ordinalEnding="nd"

            
        } else if (numbers===3){
            ordinalEnding="rd"
        }
        else {ordinalEnding="th"}

        console.log(numbers,ordinalEnding) ;    
        }
        
    
)