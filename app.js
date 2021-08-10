// const names = ['Nilo', 'nilo', 'Sam', 'Alma', 'nhoj', 'lem'];

// for (name of names) {
//     console.log(name);
//     if(name === "nhoj"){
        
//         console.log("nhoj is in my list");  
//         break;
//     }
    
    
// }


// let loading = 0;

// while(loading < 100){
//     console.log('Website is still loading')

//     loading++;
// }

// const names = ['noli', 'nilo', 'Sam', 'Alma', 'nhoj', 'lem'];


// for (i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// for (name of names) console.log(name);


// const emp = {'firstName': 'Pao', 'lastName': 'Brondial'}

// for(key in emp){
//     console.log(emp[key]);
// }


// let i = 1;

// do{
//     console.log(i);
//     i++;
//     if(i===5) continue;
// }while (i <=10);

// names.forEach(user => {
//     console.log(user);
    
// });



// var output = [];


// function fizzBuzz(){
//     for (var count = 1; count < 101; count++){
//         if(count % 3 && count % 5 ===0){
//             output.push("fizzbuzz");
//         }else if (count % 3 === 0){
//             output.push("fizz");
//         }else if (count % 5 === 0){
//             output.push("buzz");
//         }else {
//             output.push(count);
//         }
        
//     }

//     console.log(output);
// }


// let emp = ['hello', 'World'];


// function fizzbuzz(){
//     for(i = 0; i<emp.length; i++){
//         console.log(emp[i]);
// }

// fizzbuzz();


navSlide = ()=>{


    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.nav-links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show');
        burger.classList.toggle('cross');
        links.classList.toggle('show1');
    });
   
}

navSlide();

const nav1 = document.querySelector(".navbar");
const nav = document.querySelector('.nav-links');


window.onscroll = function(){
    let top = window.scrollY;

    if(top>=100){
        nav1.classList.add('bar-show');
        nav.style
    }else{
        nav1.classList.remove('bar-show');
    }
}
