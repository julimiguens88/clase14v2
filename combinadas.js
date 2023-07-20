let numeroPorDos = function (numero) {
    return numero * 2
};


function esPar(numero){
    if(numero%2 == 0){
        return true;
    }
    return false;
};


function parDuplicado(numero) {
    let array = [];
    for (let i = 0; i < numero.length; i++) {
        if (esPar(numero[i])) {
            array.push(numeroPorDos(numero[i]))
        }
    }
    return array;
}


console.log(parDuplicado([1, 2, 3, ,4 ,5 , 6 , 7, 8, 9, 10]));
