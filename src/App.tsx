import { useState, useEffect } from 'react';
// import { useState } from 'react';
import './styles/styles.css';
import logo from '../public/logo-dark.svg';

import About from './components/About';
import Portfolio from './components/Portfolio';
import References from './components/References';
import Contact from './components/Contact';
import MouseDiv from './components/MouseDiv';

interface NavState {
  nav: boolean;
  about: boolean;
  portfolio: boolean;
  references: boolean;
  contact: boolean;
}

function App() {
  const [navState, setNavState] = useState<NavState>({
    nav: false,
    about: false,
    portfolio: false,
    references: false,
    contact: false
  })

  // const handleNav = ({target}: any) => {
  //   const buttonClass = target.classList;
  
  //   setNavState(prev => ({
  //     ...prev,
  //     nav: !prev.nav,
  //     about: buttonClass.contains('about-button') ? !prev.about : prev.about,
  //     portfolio: buttonClass.contains('portfolio-button') ? !prev.portfolio : prev.portfolio,
  //     references: buttonClass.contains('references-button') ? !prev.references : prev.references,
  //     contact: buttonClass.contains('contact-button') ? !prev.contact : prev.contact,
  //   }));
  // }

  const handleNav = ({target}: any) => {
    const buttonClass = target.classList;
  
    if (buttonClass.contains('about-button')) {
      setNavState(prev => ({
        ...prev,
        nav: true,
        about: !prev.about,
        portfolio: false,
        references: false,
        contact: false
      }))
    } else if (buttonClass.contains('portfolio-button')) {
      setNavState(prev => ({
        ...prev,
        nav: true,
        about: false,
        portfolio: !prev.portfolio,
        references: false,
        contact: false
      }))
    } else if (buttonClass.contains('references-button')) {
      setNavState(prev => ({
        ...prev,
        nav: true,
        about: false,
        portfolio: false,
        references: !prev.references,
        contact: false
      }))
    } else if (buttonClass.contains('contact-button')) {
      setNavState(prev => ({
        ...prev,
        nav: true,
        about: false,
        portfolio: false,
        references: false,
        contact: !prev.contact
      }))
      console.log('clicked contact button')
      console.log(navState)
    } 

    if (navState.nav === true) {
      setNavState(prev => ({
        ...prev,
        nav: false,
      }));
    } else {
      setNavState(prev => ({
        ...prev,
        nav: true,
      }));
    }
  }

  const closeNav = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const navContent = document.querySelector('.nav-links');
    const contactButton = document.querySelector('.contact-button');
    const isContentClicked = target.classList.contains('content') || target.closest('.content');

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


  const inactiveStyle: React.CSSProperties = {
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
            style={navState.portfolio || navState.references || navState.contact ? inactiveStyle : undefined} 
            className={'nav-button about-button'} 
            onClick={(e) => handleNav(e)}>
              About {navState.about ? '-' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            style={navState.about || navState.references || navState.contact ? inactiveStyle : undefined} 
            className={'nav-button portfolio-button'} 
            onClick={(e) => handleNav(e)}>
              Portfolio {navState.portfolio ? '-' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            style={navState.about || navState.portfolio || navState.contact ? inactiveStyle : undefined} 
            className={'nav-button references-button'} 
            onClick={(e) => handleNav(e)}>
              References {navState.references ? '-' : '+'}
            </button>
          </li>
        </ul>
        <button 
          style={navState.about || navState.portfolio || navState.references ? inactiveStyle : undefined}
          className={'nav-button contact-button'}
          onClick={(e) => handleNav(e)}>
            Contact {navState.contact ? '-' : '+'}
        </button>
      </nav>
      {navState.about && <About setShowMouseDiv={setShowMouseDiv} />}
      {navState.portfolio && <Portfolio setShowMouseDiv={setShowMouseDiv} />}
      {navState.references && <References setShowMouseDiv={setShowMouseDiv} />}
      {navState.contact && <Contact setShowMouseDiv={setShowMouseDiv} />}
      <aside>
        <h1>
          Embracing Trends.<br />
          Setting the Creative Standard.<br />
          Always Leaving an Impact.<br />
        </h1>
      </aside>
      {!navState.nav && (
        <figure className='logo-container'>
          <img src={logo} alt="Logo" />
        </figure>
      )}
      {navState.nav && showMouseDiv && <MouseDiv />}
    </div>
  )
}

export default App
