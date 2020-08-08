/*  CÓDIGO FEITO PELO PROF

let turnOn = document.getElementById ( 'turnOn' );
let turnOff = document.getElementById ( 'turnOff' );
let lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada') > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg'; 
}


turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff);
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampBroken);*/

/* CÓDIGO PARA LIGAR E DESLIGAR COM APENAS UM BOTÃO */


let turnOnOff = document.getElementById ( 'turnOnOff' );
let lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada') > -1
}
function isLampOff () {
    return lamp.src.indexOf ( 'desligada') > -1
}

function ligarDesligar () {
    if ( !isLampBroken () ) {
        if ( isLampOff ()) {
    lamp.src = './img/ligada.jpg';
       
    }
    else {
        lamp.src = './img/desligada.jpg';
    }            
}       
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }
}
    
function lampOff () {
    if ( !isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg'; 
}


turnOnOff.addEventListener ( 'click', ligarDesligar );
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampBroken);