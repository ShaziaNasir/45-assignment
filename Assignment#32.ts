let current_users=["Mahad","Rabia","Rohail","Samia","Kashan"];
let new_users=["Asia","Ayesha","Mahad","Maira","Samia"];
new_users.forEach(new_one_user=>{
  if  (current_users.some(current_one_user=>current_one_user.toLowerCase()===new_one_user.toLowerCase())){
console.log(`Sorry ${new_one_user},is taken`);

  }
  else{
    console.log(`Hi,${new_one_user} is available`);

  }
})
  



