export default function scroll() {

    let infoBtn = document.querySelectorAll('ul>li>a'),
        aboutScreen = document.querySelector('.info'),
        photoScreen = document.querySelector('#photo'),
        priceScreen = document.querySelector('#price'),
        contactsScreen = document.querySelector('#contacts');


    infoBtn[0].addEventListener('click', () => {
        
        aboutScreen.scrollIntoView({behavior: "smooth"});

    });

    infoBtn[1].addEventListener('click', () => {
        
        photoScreen.scrollIntoView({behavior: "smooth"});

    });
        
        
        
    infoBtn[2].addEventListener('click', () => {
        
        priceScreen.scrollIntoView({behavior: "smooth"});

    });

    infoBtn[3].addEventListener('click', () => {
        
        contactsScreen.scrollIntoView({behavior: "smooth"});

    });
}
