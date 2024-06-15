let employName=["Sana","Saba","Sonia","Admin","Akbar"];
employName=[]
if (employName.length===0){
    console.log("We need to find some users!");
}else{

employName.forEach(user =>{ 
    if (user==="Admin"){
        console.log(`Hello,${user},would you like to see a status report?`)
    }
    else
    console.log(`Hello,${user},thankyou for logging again`)
})};