

window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add("preload-finish");
});
// window.addEventListener("load", () => {
//           if (!sessionStorage.viewed){
//               const preload = document.querySelector(".preload");
//               preload.className.add("preload-finish");
//               sessionStorage.viewed = 1;
//           }else{
//             const preload = document.querySelector(".preload");
//             preload.classList.add("preload-finish");
//           }
// });

const clickMeNav = document.querySelector('#clickMeNav');
let rotate = document.querySelector('.nav_chevron');
let dropDown = document.querySelector('#dropdown');

function dropDownNav(){
    dropDown.classList.toggle('showNav');
    rotate.classList.toggle('rotate');
}

clickMeNav.addEventListener('click', dropDownNav);



//let lockBC = document.querySelector("#lockButtonsContainer");
let lockButtons = document.querySelectorAll("#lockButtonsContainer .lockButtons");
//let locks = document.querySelectorAll('.lockImg');


for (let lock of lockButtons){
    lock.addEventListener('click', (e) =>{
        console.log('blue moon');
        const et = e.target;
        const lockEON = document.querySelector(".lockEngagedOrNot");
        const buttonBG = document.querySelector(".buttonBGColor")
        if (lockEON)
        {
            lockEON.classList.remove("lockEngagedOrNot");
            buttonBG.classList.remove("buttonBGColor")
        }
        et.classList.add("lockEngagedOrNot");
        et.classList.add("buttonBGColor");
    })
}


    
