// let loggedArray = localStorage.getItem('loggedUsersArray');
// if (!loggedArray) {
//     loggedArray = [];
// }
// else {
//     loggedArray = JSON.parse(loggedArray);
// }

function loggedlocalStorage(obj_logged) {
    localStorage.removeItem("loggedUsersArray");
    //loggedArray.push(obj_logged);
    localStorage.setItem("loggedUsersArray", JSON.stringify(obj_logged));
}




// function checkUsers(email, password) {
//     //let myArr = JSON.parse(localStorage.savedUsersArray);

//     for (let i = 0; i < objArray.length; i++) {
//         if (email == objArray[i].email && password == objArray[i].password) {
//             return true;
//         }
//     }
//     return false;
// }