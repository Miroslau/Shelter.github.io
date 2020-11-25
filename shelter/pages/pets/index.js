let getMenu = () => {
    const burger = document.querySelectorAll('.header__burger, .block');

    burger[0].addEventListener('click', () => {
        burger[0].classList.toggle('active');
    });

    burger[0].addEventListener('click', () => {
        burger[1].classList.toggle('active');
    })
}

getMenu();