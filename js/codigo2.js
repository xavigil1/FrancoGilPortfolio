"use strict"

/*----------CLOCK CODE JS-------------*/

const addZeros = n =>{
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const updateTime = ()=>{
    const time = new Date();
    let hours = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let sec = addZeros(time.getSeconds());

    document.querySelector(".hours").textContent = hours;
    document.querySelector(".min").textContent = min;
    document.querySelector(".sec").textContent = sec;


}

updateTime();
setInterval(updateTime,1000);
const updateTime2 = ()=>{
    const time2 = new Date();
    let hours2 = addZeros(time2.getHours());
    let min2 = addZeros(time2.getMinutes());
    let sec2 = addZeros(time2.getSeconds());
    let year = time2.getFullYear();
    let month = addZeros(time2.getMonth() + 1);
    let date = addZeros(time2.getDate());

    document.querySelector(".hours2").textContent = hours2;
    document.querySelector(".min2").textContent = min2;
    document.querySelector(".sec2").textContent = sec2;
    document.querySelector(".fecha").textContent = year +"/"+ month +"/"+ date;

}


updateTime2();
setInterval(updateTime2,1000);

