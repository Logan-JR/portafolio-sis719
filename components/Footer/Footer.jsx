import React, { useContext } from 'react'
import { Col, Container, Row } from 'reactstrap';
import classes from './footer.module.css'
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
    display: "Acerca",
  },
  {
    path: "#portfolio",
    display: "Proyectos",
  },
  {
    path: "#testimonial",
    display: "Testimonios",
  },
];

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  const {theme} = useContext(ThemeContext)

  return (
    <footer>
      <Container>
        <Row>
          {/* Footer arriba */}
          <Col lg='6' className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {
                NAV__LINK.map((item, index) => (
                  <Link href={item.path} key={index} scroll={item.path === '/'?true:false}>
                    {item.display}
                  </Link>
                ))
              }
            </div>
          </Col>
          <Col lg='6' className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6 className={theme?'':'light__dark'}>Creado por Logan-JR</h6>
            </div>
          </Col>
          {/* Footer abajo */}
          <Col lg='12'>
            <div className={`${classes.footer__copyright}`}>
              <p>&copy; Copyright {year} - Desarrollado por Logan-JR. Todos los derechos reservados.{' '} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer