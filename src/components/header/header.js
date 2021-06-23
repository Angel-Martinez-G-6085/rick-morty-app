import '@styles/header/header.scss';
import Header from '@templates/header.html';

const loadHeader=()=>{
    const header=document.querySelector('.header');
    header.innerHTML=Header;
}

export default loadHeader;