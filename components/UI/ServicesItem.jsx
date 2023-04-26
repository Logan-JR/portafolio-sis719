
import React, { useContext } from 'react'
import classes from '../../styles/services-item.module.css'
import ThemeContext from '../context/ThemeContext'

const ServicesItem = ({title, icon}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme?`${classes.service__item}`:`${classes.service__item} bg__light`}>
        <span><i className={theme?`${icon}`:`${icon} light__dark`}></i></span>
        <h5 className={theme?``:`light__dark`}> {title} </h5>
    </div>
  )
}

export default ServicesItem