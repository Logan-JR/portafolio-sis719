
import React from 'react'
import classes from '../../styles/form.module.css'
import Link from 'next/link'

const Form = () => {
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder='Nombre' required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder='Correo Electronico' required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder='Mensaje' required />
      </div>
      <Link href='#'><button className="primary__btn" type='submit'>Enviar</button></Link>
    </form>
  )
}

export default Form