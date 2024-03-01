import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
 const Home = () => {
  return (
    <section className="home container">
      <div className='intro' style={{backgroundImage : './assets/Florentin.png'}}>
        <img src='./assets/Florentin.png' alt='' className='home__img' />
        <h1 className="home__name"></h1>
        <span className="home__education"></span>

        <HeaderSocials />

        <a href="#contact" className="btn">Mon profil vous intéresse</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home