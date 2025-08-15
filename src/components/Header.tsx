import { useEffect } from 'react';
import Nav from './nav/Nav';

const Header = () => {

    const checkScroll = (): void => {
        let toTop = document.body.scrollTop || document.documentElement.scrollTop;
        const header = document.querySelector("header") as HTMLElement;
        if (toTop > 50) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    }

    useEffect(() => {
        window.onscroll = (): void => {checkScroll();};
        checkScroll();
    },[]);


    return (
        <header>
            <Nav />
        </header>
    )
}

export default Header;