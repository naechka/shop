window.onload = function () {
    const menuBtn = document.querySelector('#menuBtn');
    const dropdown = document.querySelector('#dropdown');
    const closeMenu = document.querySelector('#close-menu');
    const menuBlock = document.querySelector('.dropdown-menu__wrapper');
    const toggleMenu = function () {
        dropdown.classList.toggle('show')
    };

    menuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });
    
    closeMenu.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_menuBlock = target == menuBlock || menuBlock.contains(target);
        const its_menuBtn = target == menuBtn;
        const dropdown_is_active = dropdown.classList.contains('show');
    
        if (!its_menuBlock && !its_menuBtn && dropdown_is_active) {
            toggleMenu();
        }
    });
}

