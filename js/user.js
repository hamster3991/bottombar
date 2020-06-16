jQuery(function () {
    let list = $('.auto__list');

    const clickSound = new Audio;
    clickSound.src = "sounds/Button_Click.wav";

    $('.auto').on('mouseover', function() {
        if (list.is(":hidden") && $(this).attr("disabled") != "disabled") {
            list.show();
        }
    });

    $('.auto').on('mouseout', function() {
        list.hide();
    });

    /*$('.spin').on('click', function () {
        console.log('spin');
    });*/

    $('.button').on('click', function () {
        clickSound.play();
    });
});