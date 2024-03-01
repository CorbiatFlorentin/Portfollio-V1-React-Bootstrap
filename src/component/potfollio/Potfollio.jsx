import React, { useState } from 'react';
import "./potfollio.css";
import Menu from './Menu';

const Potfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="work container section" id='work'>
      <h2 className="section__title">Projets</h2>

      <div className='work__filters'>
        <span className='work__items'></span>
        <span href="" className='work__items'></span>
      </div>
     

    <div className="work__container grid">
      {items.map((elem) => {
        const{ id, image, title, category} = elem;
        return (
          <div className='work__card' key={id}>
            <div className='work__thumbnail'>
              <img src={image} alt='' className='work__img' />
              <div className='work__mask'></div>
            </div>

          <span className='work__category'>{category}</span>  
          <h3 className='work__title'>{title}</h3>
          <a href='https://github.com/CorbiatFlorentin' className='work__button' target='blank'>
            <i className='icon-link work__button-icon'></i>
          </a>
          </div>
        )
      })}
    </div>
    
    </section>
  )
}

export default Potfolio
