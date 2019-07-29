
(() => {
    onClickDropDown()
})()

function onClickDropDown() {
    const btn = document.querySelector('.js-dropdown');
    const meunu = document.querySelector('.header-main-nav-action');
    const ico_burger = document.querySelector(".header-action");
    const ico_close = document.querySelector(".header-action_x");

    btn.addEventListener('click', ()=>{
        meunu.classList.toggle('is-action');

        // if(meunu.classList.toggle('is-action')){
        //     ico_burger.style.display = 'none';
        //     ico_close.style.display = 'block';
        //     ico_close.style.zIndex = "2";
        // }

    })
}
