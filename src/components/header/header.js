import '@styles/header/header.scss';
import Header from '@templates/header.html';

const loadHeader=()=>{
    const header=document.querySelector('.header');
    header.innerHTML=Header;
    menuLogic();
}

const menuLogic=()=>{
    const menuIconClose=document.querySelector('.menu__icon-close');
    const menuItems=document.querySelectorAll('.menu__link');
    const menuIconOpen=document.querySelector('.header__icon-open');

    clickOneElement(menuIconOpen);
    clickOneElement(menuIconClose);
    clickElements(menuItems);
    closeWithBody();
}

const clickOneElement=(element)=>{
    const menu=document.querySelector('.menu');
    element.addEventListener('click',()=>{
        menu.classList.toggle('open-menu');
    });
}

const clickElements=(links)=>{
    const menu=document.querySelector('.menu');
    links.forEach(link => {
        link.addEventListener('click',()=>{
            menu.classList.toggle('open-menu');
        });
    });
}

export default loadHeader;