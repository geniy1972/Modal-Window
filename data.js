let objArray = localStorage.getItem('savedUsersArray');
if (!objArray) {
    objArray = [];
}
else {
    objArray = JSON.parse(objArray);
}
//console.log(objArray);

function savelocalStorage(obj) {
    objArray.push(obj);
    localStorage.setItem("savedUsersArray", JSON.stringify(objArray));
}

function checkUsers(email, password) {
    //let myArr = JSON.parse(localStorage.savedUsersArray);

    for (let i = 0; i < objArray.length; i++) {
        if (email == objArray[i].email && password == objArray[i].password) {
            return true;
        }
    }
    return false;
}


function consistUsers() {
    let flag = false;
    $.each(objArray, function (obj, data) {
        if ($(email).val() === data['email']) {
            alert('User has already been created');
            //console.log(data['email'])
            flag = true;
        }

    })
    return flag;
}



// function consistUsers() {
//     for (let i = 0; i < objArray.length; i++) {
//         $.each(objArray[i], function (key, value) {
//             if ($(email).val() === value['email'] && $(password).val() === value['password']) {
//                 console.log(value['email'])
//                 return true;
//             }
//         })
//     }
// }




