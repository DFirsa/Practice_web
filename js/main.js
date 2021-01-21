(function () {

    const lighthouse_img = document.querySelector('.begin_comp_graphics-thumb-pic')
    const baltiysk = document.querySelector('.header_place');
    const program = document.querySelector('.header_program');
    const schedule = document.querySelector('.header_shedule');

    window.onscroll = () => {
        if(window.pageYOffset > 820){
            lighthouse_img.classList.add('image_blur');
        }
        else{
            lighthouse_img.classList.remove('image_blur');
        }

        // if(window.pageYOffset > 1400)baltiysk.classList.add('begin_title-bold')
        // else baltiysk.classList.remove('begin_title-bold')

        // if(window.pageYOffset < 2350 && window.pageYOffset > 1400)program.classList.add('begin_title-bold')
        // else program.classList.remove('begin_title-bold')

        // if(window.pageYOffset > 2350)schedule.classList.add('begin_title-bold')
        // else schedule.classList.remove('begin_title-bold')
    };
}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - 10;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    
    scrollTo();
}());