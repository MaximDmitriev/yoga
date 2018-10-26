export default function slider() {

    let slideIndex = 2,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
    
        if(n > slides.length) {
            slideIndex = 1;
            
        }

        if(n < 1) {
            slideIndex = slides.length;
            
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex-1].style.display = 'block';
        slides[slideIndex-1].classList.add('widthTransform');

        dots.forEach((item) => item.classList.remove('dot-active'));
        dots[slideIndex-1].classList.add('dot-active');

    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function changeSlides(n) {
        showSlides(slideIndex += n);
    }

    next.addEventListener('click', () => {
        changeSlides(1);
    });

    prev.addEventListener('click', () => {
        changeSlides(-1);
    });

    dotsWrap.addEventListener('click', (event) => {
        for(let i = 1; i < dots.length + 1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}