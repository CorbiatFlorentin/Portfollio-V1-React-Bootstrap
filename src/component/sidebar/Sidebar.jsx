import React from 'react';
import "./sidebar.css";

 const Sidebar = () => {
  const copyrightText = "2023-2024"; // Copyright text
  
  // Convert each character of the copyright text to an array of spans
  const columns = Array.from(copyrightText).map((char, index) => (
    <span key={index} className="column-text">
      {char}
    </span>
  ));
  return (
    <aside className='aside'>
      <nav className='nav'>
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <i className="icon-home"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
            <i className="icon-user-following"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
            <i className="icon-briefcase"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#resume" className="nav__link">
            <i className="icon-graduation"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
            <i className="icon-bubble"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="https://www.linkedin.com/in/florentin-corbiat-a1280710b/" className="nav__link" target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="https://github.com/CorbiatFlorentin" className="nav__link" target='_blank'>
            <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
     </nav>

     <div className="nav__footer">
     <span className="vertical-text">
          {columns}
        </span>
     </div>
    </aside>
  )
}

export default Sidebar
