
// function editTable() {
//     let tds = document.querySelectorAll('td');

//     for (i = 0; i < tds.length; i++) {
//         tds[i].addEventListener('click', function func() {
//             let input = document.createElement('input');
//             input.value = this.innerHTML;
//             this.innerHTML = '';
//             this.appendChild(input);

//             let td = this;
//             input.addEventListener('blur', function () {
//                 td.innerHTML = this.value;
//                 td.addEventListener('click', func);
//             });

//             this.removeEventListener('click', func);
//         })
//     }
// }


let $table = $('.sortable');

function createTable() {
    //$($table).empty();
    //let $table = $('.sortable');

    let $tbody = $('<tbody></tbody>');
    let $thead = $('<thead></thead>');
    let tr = $('<tr></tr>');
    let caption = $('<caption><h2>List of Users</h2></caption>')

    $.each(objArray[0], function (key, value) {

        let th = $('<th></th>');
        $(th).attr('data-sort', 'name');//
        $(th).text(key);
        $(tr).append(th);

        $($table).append($thead); //
        $($thead).append(tr);
    })
    let thAction = $('<th>Action</th>');//
    $(tr).append(thAction);//
    $(thAction).attr('data-sort', 'action');//
    //$(table_main).append(tr);

    $.each(objArray, function (obj, data) {

        let tr = $('<tr></tr>');

        $.each(data, function (key, value) {
            let td = $('<td></td>');
            $(td).text(value);
            $(tr).append(td);
            $($tbody).append(tr);//
        })

        let tdEdit = $('<td></td>');
        let btnEdit = $('<button>Edit</button>');
        $(btnEdit).addClass('btnEdit');
        $(tdEdit).append(btnEdit);
        $(tr).append(tdEdit);

        $($table).append(caption);
        //$(table).append(tr);
        $($table).append($tbody);//

    })

    let compare = {
        name: function (a, b) {
            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        },
        time: function (a, b) {
            a = a.split(':');
            b = b.split(':');

            a = Number(a[0]) * 60 + Number(a[1]);
            b = Number(b[0]) * 60 + Number(b[1]);

            return a - b;
        },
        date: function (a, b) {
            a = new Date(a);
            b = new Date(b);

            return a - b;
        }
    };

    $('.sortable').each(function () {
        let $table = $(this);
        //console.log($table);
        let $tbody = $table.find('tbody');
        //console.log($tbody);
        let $controls = $table.find('th');

        let rows = $tbody.find('tr').toArray();
        //console.log(rows);

        $controls.on('click', function () {
            let $header = $(this);

            let order = $header.data('sort');

            let column;

            if ($header.is('.ascending') || $header.is('.descending')) {

                $header.toggleClass('ascending descending');

                $tbody.html(rows.reverse());

            } else {

                $header.addClass('ascending');

                $header.siblings().removeClass('ascending descending');

                if (compare.hasOwnProperty(order)) {
                    column = $controls.index(this);

                    rows.sort(function (a, b) {
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();

                        return compare[order](a, b);

                    });

                    $tbody.html(rows);
                }
            }
        });
    });

};


let input1 = $('#input1');
let input2 = $('#input2');
let input3 = $('#input3');
let input4 = $('#input4');

let currentRow, col1_name, col2_lastname, col3_password, col4_email;


//let data = [];
let dataObj = {};
function editTable3() {
    // code to read selected table row cell data (values).
    $(".btnEdit").on('click', function () {
        $('.eModal').fadeIn(600);
        currentRow = $(this).closest("tr");

        col1_name = currentRow.find("td:eq(0)").html();
        col2_lastname = currentRow.find("td:eq(1)").html();
        col3_password = currentRow.find("td:eq(2)").html();
        col4_email = currentRow.find("td:eq(3)").html();

        dataObj.email = col4_email;

        $(input1).val(col1_name);
        $(input2).val(col2_lastname);
        $(input3).val(col3_password);
        $(input4).val(col4_email);

    });

}

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

    dataObj.name = input1.val();
    dataObj.lastName = input2.val();
    dataObj.password = input3.val();

    $.each(objArray, function (index, object) {

        if (object.email === col4_email) {
            object.name = input1.val();
            object.lastName = input2.val();
            object.password = input3.val();

            currentRow.find("td:eq(0)").html(input1.val());
            currentRow.find("td:eq(1)").html(input2.val());
            currentRow.find("td:eq(2)").html(input3.val());

        }

    });
    localStorage.setItem("savedUsersArray", JSON.stringify(objArray));


    $(this).parents('.eModal').fadeOut(600);

}

$(okBtn).on('click', changeTable);














