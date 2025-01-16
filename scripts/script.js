// // JavaScript Document
// console.log("hi");



const hamMenu = document.querySelector('.ham_menu');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.no-scroll');


hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active')
    hidden.classList.toggle('active')
    document.body.classList.toggle('no-scroll');

})


// const blikje = document.querySelector('div:nth-of-type(1) img');
// const stopPoint = document.querySelector('section:nth-of-type(6) div');

// function displayEntry(entry)  {
//     stopPoint.textContent = `Intersecting: ${entry.isIntersecting}`;

//     // if (entry.isIntersecting) {
//     //     blikje.style.position = "fixed";
//     // } else {
//     //     blikje.style.position = "sticky";
//     // }
// }

// /* Begint de observer, kijkt naar alle elementen op de body */ 
// const callback = function (entries, observer) {
//     entries.forEach(entry => {
//         displayEntry(entry);
//     });
// };

// const options = {
//     threshold: 0.01
// };

// const observer = new IntersectionObserver(callback,options);

// /* Dit element moet in beeld komen (target) */
// const target = document.querySelector("section:nth-of-type(6) div");

// observer.observe(target);


