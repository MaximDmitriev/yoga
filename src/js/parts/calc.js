export default function calc() {

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        daysSum = 0,
        personsSum = 0,
        total = 0;

    totalValue.innerHTML = 0;



    function calcTotal(){
        total = (daysSum * personsSum) * 2000;
        
        let temp ='';
        
        if(persons.value == '' || restDays.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = 0;
            total = total.toString();
        
            for (let i = 0; i < total.length; i++){

                setTimeout(() => {
                temp += total[i];
                totalValue.innerHTML = temp;
                }, i*50);
            }
        }
    }
    

//  Инпутами отсекаем ненужный ввод, ченджем вызываем рассчет

    persons.addEventListener('input', function() {
        if(/\D/.test(persons.value[persons.value.length - 1])) {
            persons.value = persons.value.slice(0, persons.value.length - 1);
        } else {
            personsSum = +this.value;
        }
    });

    persons.addEventListener('change', () => calcTotal());

    restDays.addEventListener('input', function() {
        if(/\D/.test(restDays.value[restDays.value.length - 1])) {
            restDays.value = restDays.value.slice(0, restDays.value.length - 1);
        } else {
            daysSum = +this.value;
        }
    });

    restDays.addEventListener('change', () => calcTotal());

    place.addEventListener('change', function(){
        if(persons.value == '' || restDays.value == ''){
            totalValue.innerHTML = 0;
        } else {
            
            let a = total,
                t = a * this.options[this.selectedIndex].value,
                temp ='';

            totalValue.innerHTML = 0;
            t = t.toString();
            
            for (let i = 0; i < t.length; i++){

                setTimeout(() => {
                temp += t[i];
                totalValue.innerHTML = temp;
                }, i*50);
            }
        }
    });
}

