export default function scroll() {

    let infoBtn = document.querySelectorAll('ul>li>a'),
        aboutScreen = document.querySelector('.info'),
        photoScreen = document.querySelector('#photo'),
        priceScreen = document.querySelector('#price'),
        contactsScreen = document.querySelector('#contacts');


    infoBtn[0].addEventListener('click', () => {
        
        let coordY = aboutScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, 17);
    });

    infoBtn[1].addEventListener('click', () => {
        
        let coordY = photoScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, 17);
    });
        
        
        
    infoBtn[2].addEventListener('click', () => {
        
        let coordY = priceScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, 17);
    });

    infoBtn[3].addEventListener('click', () => {
        
        let coordY = contactsScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, 17);
    });
}
