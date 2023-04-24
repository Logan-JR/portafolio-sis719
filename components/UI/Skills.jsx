import React from 'react'
import { Container, Row } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/skills.module.css'

export const Skills = () => {
  return (
    <section id="skills">
        <Container>
            <Row>
                <SectionSubtitle subtitle='My Skills'/>
                <div className={`${classes.skills}`}>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-reactjs-line'></i></span>
                        <h5>React</h5>
                    </div>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-html5-line'></i></span>
                        <h5>Html</h5>
                    </div>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-css3-line'></i></span>
                        <h5>Css</h5>
                    </div>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-javascript-line'></i></span>
                        <h5>JavaScript</h5>
                    </div>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-git-pull-request-line'></i></span>
                        <h5>Git</h5>
                    </div>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-vuejs-line'></i></span>
                        <h5>Vue</h5>
                    </div>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-bootstrap-line'></i></span>
                        <h5>Bootstrap</h5>
                    </div>
                    <div className={`${classes.skills__item}`}>
                        <span><i className='ri-blender-line'></i></span>
                        <h5>Blender</h5>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}
