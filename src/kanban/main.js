const userMenu = document.getElementsByClassName('user-menu')[0];
let isOpenMenu = false;
function openMenu() {
    const arrayOfLinksName = ['My account', 'My tasks', 'Log out']
    const scrollMenu = document.createElement('div')
    scrollMenu.setAttribute("class", "scroll-menu");
    const header = document.querySelector('.header');
    const arrow = document.querySelector('.arrow')
    for (let i = 0; i<arrayOfLinksName.length; i++)
    {
        scrollMenu.appendChild(document.createElement('a')).setAttribute("class", "menu-item")
        scrollMenu.childNodes[i].setAttribute("href", "#")
        scrollMenu.childNodes[i].innerHTML = arrayOfLinksName[i];
    }
    arrow.style.transform = "rotate(180deg)"
    if (isOpenMenu === true) {
        document.getElementsByClassName('scroll-menu')[0].remove();
        isOpenMenu = false;
        arrow.style.transform = "rotate(0deg)"
    } else {
       header.append(scrollMenu);
       isOpenMenu = true;
    }
}
userMenu.addEventListener("click", openMenu)
