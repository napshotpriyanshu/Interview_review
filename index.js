const open = document.getElementById('open');
const modals_container = document.getElementById('modals_container');
const close = document.getElementById('close');

open.addEventListener('click',()=>{
    modals_container.classList.add('show');
});
close.addEventListener('click',()=>{
    modals_container.classList.remove('show');
});