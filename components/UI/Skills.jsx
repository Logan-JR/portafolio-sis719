import React, { useContext } from 'react'
import { Container, Row } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/skills.module.css'
import ThemeContext from '../context/ThemeContext'

export const Skills = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <section id="skills">
        <Container>
            <Row>
                <SectionSubtitle subtitle='My Skills'/>
                <div className={`${classes.skills}`}>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-reactjs-line':'ri-reactjs-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>React</h5>
                    </div>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-html5-line':'ri-html5-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>Html</h5>
                    </div>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-css3-line':'ri-css3-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>Css</h5>
                    </div>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-javascript-line':'ri-javascript-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>JavaScript</h5>
                    </div>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-git-pull-request-line':'ri-git-pull-request-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>Git</h5>
                    </div>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-vuejs-line':'ri-vuejs-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>Vue</h5>
                    </div>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-bootstrap-line':'ri-bootstrap-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>Bootstrap</h5>
                    </div>
                    <div className={theme?`${classes.skills__item}`:`${classes.skills__item} bg__light`}>
                        <span><i className={theme?'ri-blender-line':'ri-blender-line light__dark'}></i></span>
                        <h5 className={theme?'':'light__dark'}>Blender</h5>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}
