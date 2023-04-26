
import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/portfolio.module.css';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/portfolio';
import ThemeContext from '../context/ThemeContext';

const Portfolio = () => {

    const [ filter, setFilter ] = useState('Mobile App');
    const [ data, setData ] = useState();
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        if(filter === 'Mobile App'){
            const filteredData = portfolioData.filter(item => item.category === filter);
            setData(filteredData);
        }
        if(filter === 'Web Design'){
            const filteredData = portfolioData.filter(item => item.category === filter);
            setData(filteredData);
        }
    }, [filter])

    const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
        <Container>
            <Row>
                <Col lg='6' md='6' className='mb-5'>
                    <SectionSubtitle subtitle='Mis Proyectos' />
                    <h4 className={theme?'mt-4':'mt-4 light__dark'}>Lorem ipsum dolor sit amet.</h4>
                </Col>

                <Col lg='6' md='6'>
                    <div className={`${classes.tab__btns} text-end`}>
                        <button className={`${filter === 'Mobile App'? active : ''} ${theme?'secondary__btn text-white':'secondary__btn light__dark'}`}
                        onClick={() => setFilter('Mobile App')}>
                            Aplicaciones Moviles
                        </button>
                        <button className={`${filter === 'Web Design'? active : ''} ${theme?'secondary__btn text-white':'secondary__btn light__dark'}`}
                        onClick={() => setFilter('Web Design')}>
                            Aplicaciones Web
                        </button>
                    </div>
                </Col>
                {
                    data?.map( item => (
                        <Col lg='4' md='4' sm='6' key={item.id}>
                            <PortfolioItem item={item} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio