export default function form() {

    let message = {
        loading: "<img src='img/load.png'><p>Загрузка...</p>",
        success: "<img src='img/success.png'><p>Спасибо! Мы с вами свяжемся в ближайшее время!</p>",
        failure: "<img src='img/error.png'><p>Произошла ошибка, попробуйте еще раз</p>",
        wrongInput: "<img src='img/alert.png'><p>Неправильный ввод: только цифры и '+'</p>"
    };

    let form = document.querySelector('.main-form'),
        formContact = document.querySelector('.contact-form > form'),
        statusInfo = document.createElement('div');

    statusInfo.classList.add('status');
    
    function sendData(question){
        let input = question.querySelectorAll('input'),
            phone = question.querySelector('input[name=phone]');

        question.appendChild(statusInfo);

        function clearInput() {
            for (let i=0; i < input.length; i++) {
                input[i].value = '';
            }
            question.removeChild(statusInfo);
        }

        function checkStatus(data) {
            return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();

                request.open('POST', '../server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
                request.addEventListener('readystatechange', function(){
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
                request.send(data);
            });
        }
        
        if (/\D/.test(phone.value) && !/\+/.test(phone.value)) {
            statusInfo.innerHTML = message.wrongInput;
            phone.value = '';
        } else {
            let formData = new FormData(question);

            checkStatus(formData)
                .then(() => statusInfo.innerHTML = message.loading)
                .then(() => statusInfo.innerHTML = message.success)
                .catch(() => statusInfo.innerHTML = message.failure)
                .then(() => setTimeout(clearInput, 2000))
        }
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();
        sendData(form);
    });

    formContact.addEventListener('submit', function(event){
        event.preventDefault();
        sendData(formContact);
    });
}
