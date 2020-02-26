function editTable() {
    let tds = document.querySelectorAll('td');

    for (i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);

            let td = this;
            input.addEventListener('blur', function () {
                td.innerHTML = this.value;
                td.addEventListener('click', func);
            });

            this.removeEventListener('click', func);
        })
    }
}

function editTable2() {
    let tds = $('td');

    $(tds).each(function (i) {
        console.log(i + ": " + $(this).text());
        $(tds[i]).on('click', function func() {
            let input = $('<input></input>');
            input.value = $(this).html();
            $(this).html('');
            $(this).append(input);

            let td = this;
            $(input).on('blur', function () {
                $(td).html() = $(this).val();
                $(td).on('click', func)
            });

            $(this).off('click', func);
        })
    });

}


let input1 = $('#input1');
let input2 = $('#input2');
let input3 = $('#input3');
let input4 = $('#input4');

let col1, col2, col3, col4;


//let data = [];
let dataObj = {};
function editTable3() {
    // code to read selected table row cell data (values).
    $(".btnEdit").on('click', function () {
        $('.eModal').fadeIn(600);
        let currentRow = $(this).closest("tr");

        // let col1 = currentRow.find("td:eq(0)").html();
        // let col2 = currentRow.find("td:eq(1)").html();
        // let col3 = currentRow.find("td:eq(2)").html();
        // let col4 = currentRow.find("td:eq(3)").html();

        col1 = currentRow.find("td:eq(0)").html();
        col2 = currentRow.find("td:eq(1)").html();
        col3 = currentRow.find("td:eq(2)").html();
        col4 = currentRow.find("td:eq(3)").html();
        console.log('col4: ' + col4);

        //data.push(col1, col2, col3, col4);

        dataObj.name = col1;
        dataObj.lastName = col2;
        dataObj.password = col3;
        dataObj.email = col4;

        $(input1).val(col1);
        $(input2).val(col2);
        $(input3).val(col3);
        $(input4).val(col4);
        // console.log(data);
        // console.log(dataObj);

    });


}

//a = $(a).find('td').eq(column).text();

let okBtn = $('#ok');
let cancelBtn = $('#cancel');

$(cancelBtn).on('click', function () {
    $(this).parents('.eModal').fadeOut(600);
    return false;
});

function changeTable() {
    $('.inputs').change(function () {
        $(this).parents('.eModal').fadeOut(600);

    });
    // data[0] = input1.val();
    // data[1] = input2.val();
    // data[2] = input3.val();
    //data[3] = input4.val();
    // console.log(data);
    dataObj.name = input1.val();
    dataObj.lastName = input2.val();
    dataObj.password = input3.val();
    //dataObj.email = input4.val();
    console.log(dataObj);


    objArray.push(dataObj);
    console.log(objArray);


    //localStorage.setItem("savedUsersArray", JSON.stringify(objArray));

    // $.each(objArray, function (obj, data) {
    //     console.log(data);
    //     //console.log(data['email']);
    //     if ($(col4) === data['email']) {
    //         data['name'] = input1.val();
    //         data['lastName'] = input2.val();
    //         data['password'] = input3.val();
    //         //localStorage.setItem("savedUsersArray", JSON.stringify(objArray));
    //     }
    // })


    // for (let i = 0; i < objArray.length; i++) {
    //     $.each(objArray[i], function (key, value) {
    //         if ($(col4) === value['email']) {
    //             console.log(value['email'])
    //             value['name'] = input1.val();
    //             value['lastName'] = input2.val();
    //             value['password'] = input3.val();
    //             localStorage.setItem("savedUsersArray", JSON.stringify(objArray));
    //         }
    //     })
    // }

    for (let i = 0; i < objArray.length; i++) {
        //console.log(objArray[i].email);
        console.log(objArray[i]);
        if (objArray[i].email === $(col4)) {

            objArray[i].name = input1.val();
            objArray[i].lastName = input2.val();
            objArray[i].password = input3.val();
            console.log(objArray[i]);
            //localStorage.setItem("savedUsersArray", JSON.stringify(objArray));
        }
    }


    $(this).parents('.eModal').fadeOut(600);

}

$(okBtn).on('click', changeTable);

// function compareUsers() {
//     //let flag = false;
//     $.each(objArray, function (obj, data) {
//         if ($(col4) === data['email']) {
//             alert('User has already been created');
//             //console.log(data['email'])
//             //flag = true;
//         }

//     })
//     //return flag;
// }






