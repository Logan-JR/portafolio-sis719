import React, { useRef, useEffect, useContext } from 'react'
import { Container } from 'reactstrap';
import classes from './header.module.css';
import Link from 'next/link';
import ThemeContext from '../context/ThemeContext';

const NAV__LINK = [
  {
    path: "/",
    display: "Inicio",
  },
  {
    path: "#services",
    display: "Servicios",
  },
  {
    path: "#about",
    display: "Acerca de",
  },
  {
    path: "#portfolio",
    display: "Proyectos",
  },
  {
    path: "#testimonial",
    display: "Testimonios",
  },
  {
    path: "#contact",
    display: "Contacto",
  },
];

const Header = () => {

    const headerRef = useRef(null);
    const {theme, handleTheme} = useContext(ThemeContext);
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
        if(theme) document.body.style.backgroundColor = "#0e1630";
        else document.body.style.backgroundColor = "#F6F1E9";
        return () => window.removeEventListener('scroll', headerFunc);
    },[theme])

    const toggleMenu = () => menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={theme?`${classes.header}`:`${classes.header} bg__o`} ref={headerRef}>
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
                                <button className={theme?`${classes.switch} ${classes.active}`:`${classes.switch}`} onClick={handleTheme}>
                                    <span><i className="ri-moon-fill"></i></span>
                                    <span><i className="ri-sun-fill"></i></span>
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