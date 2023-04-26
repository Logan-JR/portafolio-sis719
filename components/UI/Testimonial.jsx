
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import SectionSubtitle from './SectionSubtitle';
import network from '../../public/images/Connected world.png';
import Slider from 'react-slick';
import classes from '../../styles/testimonial.module.css';

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slideToScroll: 1
  }
  return (
    <section id='testimonial'>
      <Container>
        <Row>
          <Col lg='6' md='6' className={`${classes.testimonial__img}`}>
            <Image alt='network-img' src={network} width='400' height='400' />
          </Col>

          <Col lg='6' md='6'>
            <SectionSubtitle subtitle='Testimonios' />
            <h4 className='mt-4 mb-5'>Testimonios de Clientes</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image alt='client-img' src='/images/img-01.jpg' width='50' height='50' className='rounded-2' />
                  <div>
                    <h6>Anton Chigurh</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit architecto sapiente blanditiis maiores facilis. Maiores ratione adipisci labore! Ipsam provident quos eaque minima perferendis possimus placeat qui consequuntur in facilis aliquam, libero ratione! Suscipit maxime dolorum accusantium vel voluptatibus?</p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image alt='client-img' src='/images/hero2.jpg' width='50' height='50' className='rounded-2' />
                  <div>
                    <h6>Homelander</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit architecto sapiente blanditiis maiores facilis. Maiores ratione adipisci labore! Ipsam provident quos eaque minima perferendis possimus placeat qui consequuntur in facilis aliquam, libero ratione! Suscipit maxime dolorum accusantium vel voluptatibus?</p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image alt='client-img' src='/images/img-03.jpg' width='50' height='50' className='rounded-2' />
                  <div>
                    <h6>Otro Anton Chigurh</h6>
                    <h6>Financial Accountant</h6>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit architecto sapiente blanditiis maiores facilis. Maiores ratione adipisci labore! Ipsam provident quos eaque minima perferendis possimus placeat qui consequuntur in facilis aliquam, libero ratione! Suscipit maxime dolorum accusantium vel voluptatibus?</p>
              </div>
              
            </Slider>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial