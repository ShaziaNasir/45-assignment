var current_users = ["Mahad", "Rabia", "Rohail", "Samia", "Kashan"];
var new_users = ["Asia", "Ayesha", "Mahad", "Maira", "Samia"];
new_users.forEach(function (new_one_user) {
    if (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); })) {
        console.log("Sorry ".concat(new_one_user, ",is taken"));
    }
    else {
        console.log("Hi,".concat(new_one_user, "  is available"));
    }
});
