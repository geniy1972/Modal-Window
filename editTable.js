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


function editTable3() {
    // code to read selected table row cell data (values).
    $(".btnEdit").on('click', function () {
        $('.eModal').fadeIn(600);
        let currentRow = $(this).closest("tr");

        let col1 = currentRow.find("td:eq(0)").html();
        let col2 = currentRow.find("td:eq(1)").html();
        let col3 = currentRow.find("td:eq(2)").html();
        let col4 = currentRow.find("td:eq(3)").html();
        let data = [];

        console.log(col1);
        console.log(typeof col1);
        //let data = col1 + "\n" + col2 + "\n" + col3 + "\n" + col4;
        //alert(data);

        // let eModal = $('<div></div>');
        // let eForm = $('<form></form>');
        let input1 = $('#input1');
        let input2 = $('#input2');
        let input3 = $('#input3');
        let input4 = $('#input4');

        // $('#input1') = col1;
        // $('#input2') = col2;
        // $('#input3') = col3;
        // $('#input4') = col4;

        $(input1).html(col1);
        $(input2).html(col2);
        $(input3).html(col3);
        $(input4).html(col4);

        $(input1).val(col1);
        $(input2).val(col2);
        $(input3).val(col3);
        $(input4).val(col4);

        // $(eForm).append(input1);
        // $(eForm).append(input2);
        // $(eForm).append(input3);
        // $(eForm).append(input4);

        // $(eModal).append(eForm);
    });
}

//a = $(a).find('td').eq(column).text();

