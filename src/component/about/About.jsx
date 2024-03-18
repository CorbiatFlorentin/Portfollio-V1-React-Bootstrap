import React from 'react';
import"./about.css";
import Image from "../../assets/Avatar.png";
 const About = () => {
  return (
   <section className="about container section" id='about'>
    <h2 className="section__title">A propos de moi</h2>

    <div className="about__container grid">
      <img src={Image} alt='' classname="about__img" />
      <div className='about__data grid'>
        <div className="about__info">
          <p className="about__description">C'est moi, Florentin. Je souhaite devenir développeur
          web. Je suis actuellement en reconversion par le biais d'Ada Tech School. J'adore utitliser React et découvrir
          l'ensemble des frameworks qui gravitent autour!  </p>
          <a href="https://drive.google.com/file/d/1fW24_geerIKYBxfUrn-BKpLND9YXYLyd/view?usp=sharing" className='btn' rel='noopener noreferrer' target='_blank'>Télécharger mon CV</a>

          <div className="about__skils grid">
            <div className="skills__data">
             <div className="skills__titles">
              <h3 className='skills__name'>Javascript/React/HTML/CSS/Wordpress</h3>
              </div> 
            </div>
          </div>

          <div className="about__skils grid">
            <div className="skills__data">
             <div className="skills__titles">
              <h3 className='skills__name'>Node/Trello/Supabase/Git/GitHub</h3>
              </div> 
            </div>
          </div>

          <div className="about__skils grid">
            <div className="skills__data">
             <div className="skills__titles">
              <h3 className='skills__name'>Jeux vidéos/ Voyages</h3>
              </div> 
            </div>
          </div>


          </div>   
        </div>
      </div>
   </section>
  )
}

export default About