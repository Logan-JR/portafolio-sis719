import React, { useRef, useState, useEffect } from 'react'
import { Container } from 'reactstrap';
import classes from './header.module.css';
import Link from 'next/link';

const NAV__LINK = [
  {
    path: "/",
    display: "Inicio",
  },
  {
    path: "#about",
    display: "Acerca de",
  },
  {
    path: "#services",
    display: "Servicios",
  },
  {
    path: "#portfolio",
    display: "Proyectos",
  },
  {
    path: "#contact",
    display: "Contacto",
  },
];

const Header = () => {

    const headerRef = useRef(null);
    const [dark, setDark] = useState(false);
    const menuRef = useRef(null);

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add(`${classes.header__shrink}`)
        } else{
            headerRef.current.classList.remove(`${classes.header__shrink}`)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', headerFunc);
        return () => window.removeEventListener('scroll', headerFunc);
    },[])

    const toggleMenu = () => menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
        <Container>
            <div className={`${classes.nav__wrapper}`}>
                <div className={`${classes.logo}`}>
                    <h1><span>Logan</span>-JR</h1>
                </div>
                
                <div className={`${classes.navigation}`} ref={menuRef} onClick={toggleMenu}>
                    <div className={`${classes.nav__menu}`}>
                        {
                            NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={index} scroll={item.path === '/'?true:false}>
                                    {item.display}
                                </Link>
                            ))
                        }
                        <div className={`${classes.nav__right}`}>
                            <p className='d-flex align-items-center gap-2 mb-0'>
                                <button className={dark?`${classes.switch} ${classes.active}`:`${classes.switch}`} onClick={() => setDark(!dark)}>
                                    <span><i class="ri-sun-fill"></i></span>
                                    <span><i class="ri-moon-fill"></i></span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <span className={`${classes.mobile__menu}`}>
                    <i className='ri-menu-line' onClick={toggleMenu}></i>
                </span>
            </div>
        </Container>
    </header>
  )
}

export default Header