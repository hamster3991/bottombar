jQuery(function () {
    let list = $('.auto__list');

    $('.auto').on('mouseover', function() {
        console.log('open');
        if (list.is(":hidden")) {
            list.show();
        }
        //ul.slideDown(600); // раскрываем блок
    });

    $('.auto').on('mouseout', function() {
        list.hide();
        //ul.slideUp(600); // раскрываем блок
    });
});