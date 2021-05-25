
 const ham = document.getElementById('ham');
 const nav = document.getElementById('nL');


const atv = () => {
  
   ham.addEventListener('click', () => {
   nav.classList.toggle('nav-links-show');
});

}
atv();
