

window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add("preload-finish");
});

const clickMeNav = document.querySelector('#clickMeNav');
let rotate = document.querySelector('.nav_chevron');
let dropDown = document.querySelector('#dropdown');

function dropDownNav(){
    console.log('this is shit');
    dropDown.classList.toggle('showNav');
    rotate.classList.toggle('rotate');
}

clickMeNav.addEventListener('click', dropDownNav);

