
import React, { useContext } from 'react';
import classes from '../../styles/portfolio-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeContext from '../context/ThemeContext';

const PortfolioItem = (props) => {
    const { title, img, liveUrl, keyword } = props.item;
    const {theme} = useContext(ThemeContext)
  return (
    <div className={theme?`${classes.portfolio__item}`:`${classes.portfolio__item} bg__light`}>
        <div className='bg-transparent'>
            <h6 className={theme?'':'light__dark'}> {title} </h6>
            {
                keyword.map((item, index) => (
                    <span className={`${classes.portfolio__keyword}`} key={index}>
                        {item}
                    </span>
                ))
            }
        </div>
        <div className={`${classes.portfolio__img}`}>
            <Image src={img} alt='portfolio-img' width='380' height='250' />
        </div>
        <div className={`${classes.portfolio__live} bg-transparent`}>
            <button className='primary__btn'>
                <Link href={liveUrl}>Ver</Link>
            </button>
        </div>
    </div>
  )
}

export default PortfolioItem