
import React, { useContext } from 'react'
import classes from '../../styles/form.module.css'
import Link from 'next/link'
import ThemeContext from '../context/ThemeContext'

const Form = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.form__group}`}>
        <input className={theme?'':'bg__light'} type="text" placeholder='Nombre' required />
      </div>
      <div className={`${classes.form__group}`}>
        <input className={theme?'':'bg__light'} type="email" placeholder='Correo Electronico' required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea className={theme?'':'bg__light'} type="text" rows={5} placeholder='Mensaje' required />
      </div>
      <Link href='#'><button className="primary__btn" type='submit'>Enviar</button></Link>
    </form>
  )
}

export default Form