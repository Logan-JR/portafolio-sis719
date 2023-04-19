import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import { Col, Container, Row } from 'reactstrap'
import classes from '../../styles/services.module.css'
import ServicesItem from './ServicesItem'

const Services = () => {
  return (
    <section id='services'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className={`${classes.services__container}`}>
                        <div>
                            <ServicesItem title='App Development' icon='ri-apps-line' />
                            <ServicesItem title='Web Development' icon='ri-computer-line' />
                        </div>
                        <ServicesItem title='Full-Stack Development' icon='ri-code-s-slash-line' />
                    </div>
                </Col>
                
                <Col lg='6' md='6' className={`${classes.service__title}`}>
                    <SectionSubtitle subtitle='Servicios'/>
                    <h3 className='mb-0 mt-4'>Lorem, ipsum,</h3>
                    <h3 className='mb-4'>Lorem, ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quaerat? Officia quibusdam numquam dolore quas voluptates labore porro quasi dolorem voluptatibus nemo neque et fugiat sit velit minima obcaecati nulla hic cum, reprehenderit officiis voluptatum? Nulla esse ad sunt excepturi.</p>
                    
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Services