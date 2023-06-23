let text = prompt('Введите число');


if(text === '0'){
    alert('Число равно нолю')
} else if(text === ''){
    alert('Ничего не написал')
} else if(text === null){
    alert('дейтвие отменён')
} else if(text > 0){
    alert('Число положительное');
} else if(text < 0){
    alert('Число отрицательное');
} else{
    alert('введите число')
}