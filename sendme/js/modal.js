//Открытие с помощью кнопки
$('.btn-enter').click(function() 
{ 
    $('.js-overlay').fadeIn();
    $('.js-overlay').addClass('disabled');
});
 
//Закрытие нажатием на крестик
$('.js-close').click(function() 
{ 
    $('.js-overlay').fadeOut();
});
 
//Закрытие нажатием вне окна
$(document).mouseup(function (e) 
{ 
    var popup = $('.js-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0)
    {
        $('.js-overlay').fadeOut();
    }
});