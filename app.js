const ham = document.getElementsById('ham');
const nav = document.getElementById('nL');

ham.addEventListener('click', () => {
   nav.classList.toggle('show');
});