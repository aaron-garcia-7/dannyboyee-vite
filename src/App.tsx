import { useState, useEffect } from 'react';
import { NavState } from '../types/types';
import './styles/styles.css';
import logo from '../public/logo-dark.svg';

import About from './components/About';
import Portfolio from './components/Portfolio';
import References from './components/References';
import Contact from './components/Contact';
import MouseDiv from './components/MouseDiv';

function App() {
  const [navState, setNavState] = useState<NavState>({
    nav: false,
    about: false,
    portfolio: false,
    references: false,
    contact: false
  })

  const handleNav = ({target}: any) => {
    const buttonClass = target.classList;
  
    setNavState(prev => ({
      nav: prev.about && buttonClass.contains('about-button') ||
           prev.portfolio && buttonClass.contains('portfolio-button') ||
           prev.references && buttonClass.contains('references-button') ||
           prev.contact && buttonClass.contains('contact-button') ? !prev.nav : true,
      about: buttonClass.contains('about-button') ? !prev.about : false,
      portfolio: buttonClass.contains('portfolio-button') ? !prev.portfolio : false,
      references: buttonClass.contains('references-button') ? !prev.references : false,
      contact: buttonClass.contains('contact-button') ? !prev.contact : false,
    }));
  }
  
  const closeNav = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const navContent = document.querySelector('.nav-links');
    const contactButton = document.querySelector('.contact-button');
    const isContentClicked = target.classList.contains('content') || target.closest('.content');
    const isMobileNavClicked = target.classList.contains('nav-button') && target.closest('.nav-links-mobile');

    // Don't execute the function if the mobile nav was clicked
    if (isMobileNavClicked) return;

    if (!navContent?.contains(target) && !contactButton?.isSameNode(target) && !isContentClicked) {
        setNavState(prev => ({
            ...prev,
            nav: false,
            about: false,
            portfolio: false,
            references: false,
            contact: false,
        }))
    }
}


  const [showMouseDiv, setShowMouseDiv] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', closeNav);

    return () => {
      document.body.removeEventListener('click', closeNav);
    }
  }, [closeNav, showMouseDiv]);

  const inactiveBtnStyle: React.CSSProperties = {
    opacity: 0.2,
  }

  const bodyStyle = {
    cursor: navState.nav ? 'none' : 'default',
  }

  return (
    <div className='app' style={bodyStyle}>
      <nav>
        <ul className='nav-links' onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
          <li className='nav-link-item'>
            <button 
            style={navState.portfolio || navState.references || navState.contact ? inactiveBtnStyle : undefined} 
            className={'nav-button about-button'} 
            onClick={(e) => handleNav(e)}>
              About {navState.about ? '-' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            style={navState.about || navState.references || navState.contact ? inactiveBtnStyle : undefined} 
            className={'nav-button portfolio-button'} 
            onClick={(e) => handleNav(e)}>
              Portfolio {navState.portfolio ? '-' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            style={navState.about || navState.portfolio || navState.contact ? inactiveBtnStyle : undefined} 
            className={'nav-button references-button'} 
            onClick={(e) => handleNav(e)}>
              References {navState.references ? '-' : '+'}
            </button>
          </li>
        </ul>
        <button 
          style={navState.about || navState.portfolio || navState.references ? inactiveBtnStyle : undefined}
          className={'nav-button contact-button'}
          onMouseEnter={() => setShowMouseDiv(false)} 
          onMouseLeave={() => setShowMouseDiv(true)}
          onClick={(e) => handleNav(e)}>
            Contact {navState.contact ? '-' : '+'}
        </button>

        <ul className={navState.nav ? 'nav-links-mobile nav-links-mobile-active' : 'nav-links-mobile'} onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
          <li className='nav-link-item'>
            <button 
            className={'nav-button about-button'} 
            onClick={(e) => {
              handleNav(e)
            }}>
              About {navState.about ? '-' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            className={'nav-button portfolio-button'} 
            onClick={(e) => {
              handleNav(e)
            }}>
              Portfolio {navState.portfolio ? '-' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            className={'nav-button contact-button'} 
            onClick={(e) => {
              handleNav(e)
            }}>              Contact {navState.contact ? '-' : '+'}
            </button>
          </li>
        </ul>
      </nav>

      {navState.about && <About setShowMouseDiv={setShowMouseDiv} />}
      {navState.portfolio && <Portfolio setShowMouseDiv={setShowMouseDiv} />}
      {navState.references && <References setShowMouseDiv={setShowMouseDiv} />}
      {navState.contact && <Contact setShowMouseDiv={setShowMouseDiv} />}

      <aside>
        <h1 className={navState.nav ? "hero-text hero-text-active" : "hero-text"}>
          Embracing Trends.<br />
          Setting the Creative Standard.<br />
          Always Leaving an Impact.<br />
        </h1>
      </aside>

      <figure className='logo-container'>
        <img src={logo} alt="Logo" />
      </figure>

      {navState.nav && showMouseDiv && <MouseDiv />}
    </div>
  )
}

export default App
