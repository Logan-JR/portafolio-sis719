import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import ServicesItem from './ServicesItem'
import classes from '../../styles/skills.module.css'

export const Skills = () => {
  return (
    <section id="skills">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle='My Skills'/>
                    <div className={`${classes.services__skills}`}>
                        <div>
                            <ServicesItem title='React' icon='ri-reactjs-line' />
                            <ServicesItem title='Html' icon='ri-html5-line' />
                        </div>
                        <div>
                            <ServicesItem title='Css' icon='ri-css3-line' />
                            <ServicesItem title='JavaScript' icon='ri-javascript-line' />
                        </div>
                        <div>
                            <ServicesItem title='Git' icon='ri-git-pull-request-line' />
                            <ServicesItem title='Vue' icon='ri-vuejs-line' />
                        </div>
                        <div>
                            <ServicesItem title='Bootstrap' icon='ri-bootstrap-line' />
                            <ServicesItem title='Blender' icon='ri-blender-line' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
