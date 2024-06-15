"use strict";
let userName = ["Admin", "Eric", "Amber", "John", "Sumaira"];
userName.forEach(user => {
    if (user === "Admin") {
        console.log(`Hello,${user},would you like to see a status report?`);
    }
    else
        console.log(`Hello,${user},thankyou for logging again`);
});
