export default function modal() {

    let btnMore = document.querySelector('.more'),
        btnClose = document.querySelector('.popup-close'),
        aboutScr = document.querySelector('.info'),
        overlayWindow = document.querySelector('.overlay');


    function showMore(){
        overlayWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        btnMore.classList.add('more-splash');
    }

    btnMore.addEventListener('click', () => {
        showMore();
    });
   
    btnClose.addEventListener('click', () => {
        overlayWindow.style.display = 'none';
        btnMore.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    aboutScr.addEventListener('click', (event) => {
        if(event.target.classList.contains('description-btn')){
            showMore();
        }
    });
}
