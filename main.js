const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


setInterval(() =>{

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})

heroSlide = () => {

    const body = document.querySelector(".body");
    const slider = document.querySelector(".slider");
    // const min = document.querySelector(".mn");
    const sec = document.querySelector(".sc:before");
   




    slider.addEventListener('click', () => {
        body.classList.toggle('body1');
        sec.classList.toggle('ms');
        // borderTop.classList.toggle('top1');
        // borderBot.classList.toggle('bottom1');
        // bodyCol.classList.toggle('bodyColor');
        // heroItemcol.classList.toggle('titleColor');
        // heroItem2col.classList.toggle('titleColor');


    });
}

heroSlide();




