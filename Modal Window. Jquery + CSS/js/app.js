$(function () {
    //СОЗДАНИЕ ОБЪЕКТА "MODAL"
    let modal = {
        self: $('#modal'),               //Модульное окно
        showModal: function (content) {   //Показать окно
            this.self.find('#innerModal').html(content);
            this.self.fadeIn(200);
        },
        hideModal: function () {   //Спрятать окно
            this.self.fadeOut(200);
            this.self.find('#innerModal').html('');
        }
    };

    //ОБРАБОТКА СОБЫТИЯ НАЖАТИЯ КНОПКИ "SHOW MODAL"
    $('.showModal').on('click', function (e) {
        let id = $(this).data('id');
        let content = $('#cont' + id).html();
        modal.showModal(content);
    });
    //ОБРАБОТКА СОБЫТИЯ КЛИКА НА САМО МОДУЛЬНОЕ ОКНО
    $('#modal').on('click', function (e) {
        console.log(e.target);
        if ($(e.target).attr('id') === 'modal' || $(e.target).hasClass('closeModal')) { //Проверка объекта клика
            modal.hideModal();
        }
        else {
            return false;
        }
    });

})