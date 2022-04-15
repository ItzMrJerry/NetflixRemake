const navbar = document.querySelector('.ChangeColor');
document.getElementById("myVideo").play();
window.onscroll = () => {
if (window.scrollY > 100) {
    navbar.classList.add('nav-active');
} else {
    navbar.classList.remove('nav-active');
}
};