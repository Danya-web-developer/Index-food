   $('.category-dishes__item').on('click' , function(e) {
        e.preventDefault();
    
        $('.category-dishes__item').removeClass('category-dishes__item--active');
        $(this).addClass('category-dishes__item--active');
    
        $('.category-dishes__box').removeClass('category-dishes__box--active');
        $($(this).attr('href')).addClass('category-dishes__box--active');
    
    });
    
    $('.slider').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/slider/slider-arrows/left.svg" alt="">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/slider/slider-arrows/right.svg" alt="">',
    });

function readMore() {
    var more = document.getElementById("more");
    var larger = document.getElementById("larger");
    var also = document.getElementById("also");
    var btn = document.getElementById("btn");
    
    if(more.style.display === "flex") {
    btn.innerHTML ="Больше блюд";
    more.style.display ="none";
    } else {
    btn.innerHTML ="Скрыть";
    more.style.display ="flex";
    }

    if(also.style.display === "flex") {
        btn.innerHTML ="Больше блюд";
        also.style.display ="none";
        } else {
        btn.innerHTML ="Скрыть";
        also.style.display ="flex";
    }

    if(larger.style.display === "flex") {
        btn.innerHTML ="Больше блюд";
        larger.style.display ="none";
        } else {
        btn.innerHTML ="Скрыть";
        larger.style.display ="flex";
    }
}