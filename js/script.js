const menu = document.getElementById('menu');
const list = document.getElementById('list');
const close = document.getElementById('close');

menu.addEventListener('click', () => {
    list.style.display = 'block';
    list.style.transition = 'all 1s ease-in-out';
})

close.addEventListener('click', () => {
    list.style.display = 'none';
    list.style.transition = 'all 1s ease-in-out';

})