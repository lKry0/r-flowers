
$('.item-1').on('click', function () {
    $('.expirience__info').addClass('active');
    $('.products-num__info').removeClass('active');
    $('.clients__info').removeClass('active');
    $('.florist__info').removeClass('active');
});
$('.close__btn').on('click', function () {
    $('.expirience__info').removeClass('active');
});

$('.item-2').on('click', function () {
    $('.clients__info').addClass('active');
    $('.products-num__info').removeClass('active');
    $('.expirience__info').removeClass('active');
    $('.florist__info').removeClass('active');

});
$('.close__btn').on('click', function () {
    $('.clients__info').removeClass('active');
});

$('.item-3').on('click', function () {
    $('.products-num__info').addClass('active');
    $('.expirience__info').removeClass('active');
    $('.clients__info').removeClass('active');
    $('.florist__info').removeClass('active');
});
$('.close__btn').on('click', function () {
    $('.products-num__info').removeClass('active');
});

$('.item-4').on('click', function () {
    $('.florist__info').addClass('active');
    $('.products-num__info').removeClass('active');
    $('.expirience__info').removeClass('active');
    $('.clients__info').removeClass('active');
});
$('.close__btn').on('click', function () {
    $('.florist__info').removeClass('active');
});
