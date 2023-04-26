import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Link from 'next/link'
import heroImg from '../../public/images/hero2.jpg'
import classes from '../../styles/hero.module.css'

const Hero = () => {
  return (
    <section className={`${classes.hero}`} id='hero'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className={`${classes.hero__content}`}>
                        <SectionSubtitle subtitle='Hola!' />
                        <h2 className='mt-3 mb-3'>Yo soy Logan-JR</h2>
                        <h5 className='mb-4'>Frontend Developer</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae sunt quasi voluptate saepe, assumenda quas itaque. Rerum, incidunt eos.</p>
                        <div className='mt-5'>
                            <button className='primary__btn'>
                                <Link href='#'>Contactame</Link>
                            </button>
                            <button className='secondary__btn'>
                                <Link href='#' className='ri-file-line'> Descargar CV</Link>
                            </button>
                        </div>
                    </div>
                </Col>
                
                <Col lg='6' md='6'>
                    <div className={`${classes.hero__img} text-end`}>
                        <Image alt='hero-image' src={heroImg} width='400' height='400' />
                        <div className={`${classes.hero__skills}`}>
                            <h6>Skills</h6>
                            <Link href='#skills'><i className="ri-code-s-slash-line"></i></Link>
                        </div>
                        <div className={`${classes.hero__experience} d-flex align-items-center gap-3`}>
                            <span><i className="ri-trophy-fill"></i></span>
                            <div className='bg-transparent'>
                                <h6>Experiencia</h6>
                                <h5 className='mb-0'>0 Años</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero