let container = document.querySelector(".container-box");

for( let i = 1; i <= 100; i++ ){

    let boxNumber = `<div class="box">${i}`;

    if( (i % 3 == 0) && (i % 5 == 0) ) {

        boxNumber = `<div class="box box-divs-3-5">fizzbuzz`;

    } else if(i % 3 == 0) {

        boxNumber = `<div class="box box-divs-3">fizz`;

    } else if(i % 5 == 0) {

        boxNumber = `<div class="box box-divs-5">buzz`;

    }

    boxNumber += '</div>';

    container.innerHTML += boxNumber;

}