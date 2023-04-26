import React, { Fragment } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ThemeProvier } from '../context/ThemeContext';

const Layout = (props) => {
  return (
    <ThemeProvier>
      <Fragment>
        <Header />
        <div> {props.children} </div>
        <Footer />
      </Fragment>
    </ThemeProvier>
  )
}

export default Layout