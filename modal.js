$(document).ready(function ($) {

    //let table = $('#table');
    let $table = $('.sortable');

    $('.popup-open').click(function () {
        $('.popup-fade').fadeIn(600);
        return false;
    });

    // Клик по ссылке "Закрыть".
    $('.popup-close').click(function () {
        $(this).parents('.popup-fade').fadeOut(600);
        return false;
    });

    $('.modal-close').click(function () {
        $(this).parents('.eModal').fadeOut(600);
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut(600);
            $('.signOut').fadeOut(600);
            $('.popup-open').fadeIn(600);
        }
    });
    $('#logInPage').click(function () {
        //$('.popup-fade').fadeIn(600);
        $('.popup').fadeIn(600);

        //return false;
    });

    $('.signOut').click(function () {
        //e.stopPropagation();
        location.reload();
        // $('.popup-fade').fadeOut(600);
        // //$('.popup').fadeOut(600);
        // $('.signOut').fadeOut();
        // $('.popup-open').fadeIn()
        //return false;
    });


    //Клик по фону, но не по окну.
    // $('.popup-fade').click(function (e) {
    //     if ($(e.target).closest('.popup').length == 0) {
    //         $(this).fadeOut(600);
    //     }
    // });

    let loggedUser;
    if (localStorage.getItem('loggedUsersArray')) {
        loggedUser = JSON.parse(localStorage.getItem('loggedUsersArray'));
    }
    //console.log(loggedUser);
    $('#formSignUp').on('submit', valid);
    $('#formLogIn').on('submit', valid_login);

    let name = $('#name');

    let lastName = $('#lastName');

    let email = $('#email');

    let password = $('#password');

    let confirmPass = $('#confirmPassword');

    let containers = $('.fields');

    let inputs = $('.signup .field');  //all inputs
    let inputs_login = $('.signin .field');

    let email_logIn = $('#email_logIn');
    let password_logIn = $('#password_logIn');

    const errorsTypes = ['blank', 'validEmail', 'long', 'less', 'required', 'confirmPassword', 'authentication'];

    const classArray = $(errorsTypes).map(function (index, item) {
        return 'error_' + item
    }).get().join(" ");
    //console.log(classArray);

    let out = document.getElementById('out');

    let errorsFunctions = {
        blank: function (input) {
            console.log(event.target);
            if (!$(input).val()) {
                $(input).parent().addClass('has_errors error_blank');
                return false;
            }
            else {
                return true;
            }
        },
        validEmail: function (input) {
            const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
            if (adr_pattern.test($(input).val()) == false) {
                $(input).parent().addClass('has_errors error_validEmail');
                return false;
            }
            else {
                return true;
            }
        },
        long: function (input) {
            if ($(input).val().length <= 3) {
                $(input).parent().addClass('has_errors error_long');
                return false;
            }
            else {
                return true;
            }
        },
        less: function (input) {
            if ($(input).val().length >= 10) {
                $(input).parent().addClass('has_errors error_less');
                return false;
            }
            else {
                return true;
            }
        },
        required: function (input) {
            if ($(input).val() === 'password') {
                $(input).parent().addClass('has_errors error_required');
                return false;
            }
            else {
                return true;
            }
        },
        confirmPassword: function (input) {
            if ($(password).val() !== $(input).val()) {
                $(input).parent().addClass('has_errors error_confirmPassword');
                return false;
            }
            else {
                return true;
            }
        },
        authentication: function (input) {
            if (!checkUsers($(email_logIn).val(), $(password_logIn).val())) {
                $(input).parent().addClass('has_errors error_authentication');
                return false;
            }
            else {
                return true;
            }
        }
    }



    function fadeOutElement(elementOut, elementIn) {
        // $(elementOut).fadeOut(2000)
        // $(elementIn).fadeIn(2000);
        $(elementOut).fadeOut(600, function () {
            $(elementIn).fadeIn(600);
        });
    }

    let logInForm = $('.signin');
    let signUpForm = $('.signup');
    let congLogIn = $('.congLogIn')
    let congSignUp = $('.congSignUp')


    $(document).on('click', '#logIn', function () {

        fadeOutElement(signUpForm, logInForm)
    })

    $(document).on('click', '#logInPage', function () {
        fadeOutElement(congSignUp, logInForm)
    })

    $(document).on('click', '#signUp', function () {

        fadeOutElement(logInForm, signUpForm)
    })

    function removeErrors(event) {
        let target, elParent;
        target = event.target;
        elParent = target.parentNode;
        $(target).parent('div').removeClass(classArray);
        $(target).parent('div').removeClass('has_errors');
    }

    $('#formSignUp').on('change', removeErrors);
    $('#formLogIn').on('change', removeErrors);


    //


    //let table = $('#table');
    function createTable() {
        //$(table).empty();

        // let $table = $('<table></table>');
        // $($table).addClass('sortable');
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
        //$(table).append(tr);

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
    function removeTable() {
        $($table).empty();
    }

    createTable();
    editTable3();//





    function valid() {
        event.preventDefault();
        let errors = false;
        let error = false;

        $('.fields').removeClass(classArray);
        $('.fields').removeClass('has_errors');


        $(inputs).each(function (i) {
            for (let j = 0; j < errorsTypes.length; j++) {
                if ($(this).attr('data-errors').includes(errorsTypes[j])) {
                    error = !errorsFunctions[errorsTypes[j]](inputs[i]);
                    if (error == true) {
                        errors = true;
                    }
                }
            }
        })


        if (!errors) {
            let obj = new Object();
            //obj.name = name.value;
            obj.name = $(name).val();
            //obj.lastName = lastName.value;
            obj.lastName = $(lastName).val();
            //obj.password = password.value;
            obj.password = $(password).val();
            //obj.email = email.value;
            obj.email = $(email).val();

            //console.log(consistUsers());
            if (consistUsers()) {
                return false;
            }

            else {
                savelocalStorage(obj);
                //window.location.assign("congSignUp.html");
                $(signUpForm).fadeOut(600, function () {
                    $('.congSignUp').fadeIn(600);
                });
            }

            $('.popup').hide();
            removeTable();
            createTable();
            editTable3();//


        }

    }


    // $("td").each(function (index) {
    //     console.log(index + ": " + $(this).text());
    // });

    function valid_login() {
        event.preventDefault();

        $('.fields').removeClass(classArray);
        $('.fields').removeClass('has_errors');

        $(inputs_login).each(function (i) {
            for (let j = 0; j < errorsTypes.length; j++) {
                if ($(this).attr('data-errors').includes(errorsTypes[j])) {
                    //error_login = !errorsFunctions[errorsTypes[j]](inputs_login[i]);
                    errorsFunctions[errorsTypes[j]](inputs_login[i]);
                }
            }
        })


        if (checkUsers($(email_logIn).val(), $(password_logIn).val())) {
            //window.location.assign("congLogIn.html");

            let obj_logged = new Object();
            //obj.password = password.value;
            obj_logged.password = $(password_logIn).val();
            //obj.email = email.value;
            obj_logged.email = $(email_logIn).val();

            loggedlocalStorage(obj_logged);
            fadeOutElement(logInForm, congLogIn);

            $(logInForm).fadeOut(600, function () {
                $(congLogIn).fadeIn(600);


                $('.popup').hide();
                removeTable();
                createTable();
                editTable3();//


                $('.congLogIn').fadeIn();

                //
                $('.popup-open').fadeOut()
                $('.signOut').fadeIn();

                $('#out').text('Congratulations ' + email_logIn.val() + ' you Login successfully');
                //$('#out').text('Congratulations ' + objArray[objArray.length - 1].name + ' you Login successfully');

            });

        }

    }

})