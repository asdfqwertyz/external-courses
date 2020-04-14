const userMenu = document.getElementsByClassName('user-menu')[0];
const upperCase = ['My account', 'My tasks', 'Log out'];
let isOpenMenu = false;
function openMenu() {
    const scrollMenu = document.createElement('div')
    const header = document.querySelector('.header');
    const arrow = document.querySelector('.arrow');
 		arrow.style.transform = "rotate(180deg)";
    if (isOpenMenu === true) {
        document.getElementsByClassName('scroll-menu')[0].remove();
        isOpenMenu = false;
        arrow.style.transform = "rotate(0deg)";
    } else {
       userMenu.append(scrollMenu);
       isOpenMenu = true;
    };
    scrollMenu.setAttribute("class", "scroll-menu")
    for (let i = 0; i < upperCase.length; i++) {
    	 scrollMenu.appendChild(document.createElement('a')).setAttribute("class", "menu-item")
       scrollMenu.childNodes[i].setAttribute("href", "#")
       scrollMenu.childNodes[i].innerHTML = upperCase[i];
    };
};
userMenu.addEventListener("click", openMenu)
