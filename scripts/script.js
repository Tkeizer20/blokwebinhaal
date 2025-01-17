// // JavaScript Document
// console.log("hi");



const hamMenu = document.querySelector('.ham_menu');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.no-scroll');


hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active')
    hidden.classList.toggle('active')
    document.body.classList.toggle('no-scroll');

    console.log('nav is trigger')
})



  