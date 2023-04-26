import React, { useContext } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'
import Image from 'next/image'
import img01 from '../../public/images/img-1.jpg'
import img02 from '../../public/images/img-02.jpg'
import img03 from '../../public/images/img-03.jpg'
import img04 from '../../public/images/hero.jpg'
import classes from '../../styles/about.module.css'
import ThemeContext from '../context/ThemeContext'

const About = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section id='about'>
      <Container>
        <Row>
          <Col lg='6' className={`${classes.about__content}`}>
            <SectionSubtitle subtitle='Acerca de mi' />
            <h3 className={theme?'mt-4':'mt-4 light__dark'}>Lorem, ipsum</h3>
            <h3 className={theme?'mb-4':'mb-4 light__dark'}>Lorem, ipsum dolor</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quam harum velit commodi similique unde, nisi, eveniet debitis magnam deleniti nemo culpa cumque nostrum veritatis, rem odio fugiat quidem. Qui eos voluptas laudantium maxime facilis doloribus quidem doloremque ab expedita.</p>
            <div className=' d-flex align-items-center gap-5'>
              <div>
                <h6 className={theme?' d-flex align-items-center gap-2 mt-3 fw-normal':' d-flex align-items-center gap-2 mt-3 fw-normal light__dark'}>
                  <span className={`${classes.about__icon}`}><i className='ri-checkbox-circle-line'></i></span>
                  Problem Solving
                </h6>
                <h6 className={theme?' d-flex align-items-center gap-2 mt-3 fw-normal':' d-flex align-items-center gap-2 mt-3 fw-normal light__dark'}>
                  <span className={`${classes.about__icon}`}><i className='ri-checkbox-circle-line'></i></span>
                  Search A Lot
                </h6>
              </div>
              <div>
                <h6 className={theme?' d-flex align-items-center gap-2 mt-3 fw-normal':' d-flex align-items-center gap-2 mt-3 fw-normal light__dark'}>
                  <span className={`${classes.about__icon}`}><i className='ri-checkbox-circle-line'></i></span>
                  Creative Idea
                </h6>
                <h6 className={theme?' d-flex align-items-center gap-2 mt-3 fw-normal':' d-flex align-items-center gap-2 mt-3 fw-normal light__dark'}>
                  <span className={`${classes.about__icon}`}><i className='ri-checkbox-circle-line'></i></span>
                  High Quality
                </h6>
              </div>
            </div>
            <div className="mt-5">
              <button className="primary__btn">
                <Link href='#portfolio'>Mis Proyecto</Link>
              </button>
              <button className="secondary__btn">
                <Link href='#skills'>Mis Habilidades</Link>
              </button>
            </div>
          </Col>

          <Col lg='6'>
            <div className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}>
              <div className=' d-flex flex-column mb-3'>
                <div className={theme?`${classes.about__img} ${classes.about__img__box}`:`${classes.about__img} ${classes.about__img__box} bg__a`}>
                  <Image src={img01} alt='about-img' />
                </div>
                <div className={theme?`${classes.about__img} ${classes.about__img__box}`:`${classes.about__img} ${classes.about__img__box} bg__a`}>
                  <Image src={img02} alt='about-img' />
                </div>
              </div>
              <div className=' d-flex flex-column mb-3'>
                <div className={theme?`${classes.about__img} ${classes.about__img__box}`:`${classes.about__img} ${classes.about__img__box} bg__a`}>
                  <Image src={img03} alt='about-img' />
                </div>
                <div className={theme?`${classes.about__img} ${classes.about__img__box}`:`${classes.about__img} ${classes.about__img__box} bg__a`}>
                  <Image src={img04} alt='about-img' />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About