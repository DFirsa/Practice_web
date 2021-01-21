// intro_thumb-pic

(function () {

    const lighthouse_img = document.querySelector('.intro_thumb-pic')
    const alpha = document.querySelector('.intro_title');
    // const alpha_chanel = document.querySelector('.alpha_chanel');

    window.onscroll = () => {
        if(window.pageYOffset < 1214 || window.pageYOffset > 1900){
            lighthouse_img.classList.add('lighthause_blur');
        }
        else{
            lighthouse_img.classList.remove('lighthause_blur');
        }

        if(window.pageYOffset > 600){
            // alpha_chanel.classList.add('alpha_size_animation');
            alpha.classList.add('alpha_animation');
        }
    };
}());

$(window).scroll(function () {
    var st = $(this).scrollTop();

    if(st <= 3000){
        $('.header_parallax').css({
            "transform" : "translateY(" + st / 1.3  + "px)"
        });
    }

    if(st >= 4400 && st <= 5900){
        $('.last_parallax').css({
            "transform" : "translateY(" + (st - 4400) / 1.5  + "px)"
        });
    }

    if(st >= 5000 && st <= 5200){
        $('.module_2-pic').css({
            "transform" : "translateY(-" + (st - 5000) / 20 + "px)"
        });
    }

    if(st >= 1170  && st <= 2160){
        $('.caption').css({
            "transform" : "translateY(" + (st - 1170) / 40 + "%)"
        });
    }
});
