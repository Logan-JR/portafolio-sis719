
import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/contact.module.css'
import Form from './Form';
import ThemeContext from '../context/ThemeContext';

const Contact = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contáctame" />
            <h3 className={theme?'mt-4 mb-4':'mt-4 mb-4 light__dark'}>Contactate conmigo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              voluptatum officiis inventore incidunt nostrum sunt excepturi
              sequi! Laborum voluptatem ut soluta sapiente. Ad, debitis nemo?
            </p>
            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Potosi - Bolivia</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                    <i className='ri-mail-line'></i>
                </span>
                <p>Jhon-JR@outlook.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                    <i className='ri-phone-line'></i>
                </span>
                <p>+591 69641997</p>
              </li>
            </ul>
            <div className={`${classes.social__links}`}>
                <Link href='#'><i className='ri-youtube-line'></i></Link>
                <Link href='#'><i className='ri-github-line'></i></Link>
                <Link href='#'><i className='ri-facebook-line'></i></Link>
                <Link href='#'><i className='ri-linkedin-line'></i></Link>
                <Link href='#'><i className='ri-instagram-line'></i></Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact