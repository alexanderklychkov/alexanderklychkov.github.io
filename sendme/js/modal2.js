//Открытие с помощью кнопки
$('.btn-reg').click(function() 
{ 
    $('.js-overlay2').fadeIn();
    $('.js-overlay2').addClass('disabled');
});
 
//Закрытие нажатием на крестик
$('.js-close2').click(function() 
{ 
    $('.js-overlay2').fadeOut();
});
 
//Закрытие нажатием вне окна
$(document).mouseup(function (e) 
{ 
    var popup = $('.js-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0)
    {
        $('.js-overlay2').fadeOut();
    }
});