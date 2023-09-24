const sec = document.querySelector('.seconds');
const min = document.querySelector('.minutes');
const hour = document.querySelector('.hour');
const container = document.querySelector('.container');
const p = document.querySelector('p');
const sethours = document.querySelector('#hours');
const setminutes = document.querySelector('#minutes');
const btn = document.querySelector('.btn');


let deg = 6;

 
let interval = setInterval(() => {
    let d = new Date();
    let h = d.getHours() * 30;
    let m = d.getMinutes() * deg;
    let s = d.getSeconds() * deg;

    sec.style.transform = `rotateZ(${s}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    hour.style.transform = `rotateZ(${h + (m/12)}deg)`;

}, 1000);
 
btn.addEventListener('click' , ()=>{
    clearInterval(interval);

   
setInterval(() => {
    let d2 = new Date();
    let valuemin = Number(setminutes.value);
    let valuehour = Number(sethours.value)
    

    let sset = d2.getSeconds() * deg;
    let hset = d2.getHours() * 30;
    let mset = d2.getMinutes() * deg;
    
    sec.style.transform = `rotateZ(${sset}deg)`;
    min.style.transform = `rotateZ(${mset}deg)`;
    hour.style.transform = `rotateZ(${hset + (mset / 12)}deg)`;
 
}, 1000);

})


        

        
    
        



