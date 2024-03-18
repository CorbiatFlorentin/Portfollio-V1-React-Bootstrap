import React from 'react';
import "./home.css";
import ScrollDown from './ScrollDown';
import backgroundImage from '../../assets/background1.svg';

 const Home = () => {
  return (
    <section className="home container" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className='intro'>
        <img src={process.env.PUBLIC_URL + '/assets/background1.svg'} alt='' className='home__img' />
        <h1 className="home__name"></h1>
        <span className="home__education"></span>

        

        <a href="#contact" className="btn">Mon profil vous intéresse</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home