import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavState } from '../types/types';
// import { DistortionText } from 'react-text-fun';
// import { SplitColorChannelText } from 'react-text-fun';
// import { FliesText } from 'react-text-fun';
// import { LiquidDistortionText } from 'react-text-fun';
// import { DistortionText, SplitColorChannelText, FliesText, LiquidDistortionText } from 'react-text-fun';
import './styles/styles.css';
import './fonts/Satoshi-Variable.woff2';
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

  // BLOTTER RESIZE LOGIC
  // const [fontSize, setFontSize] = useState(() => {
  //   if (window.innerWidth > 1440) {
  //     return 120;
  //   } else if (window.innerWidth <= 1440 && window.innerWidth > 1024) {
  //     return 86;
  //   } else if (window.innerWidth <= 1024 && window.innerWidth > 852) {
  //     return 64;
  //   } else if (window.innerWidth <= 852 && window.innerWidth > 480) {
  //     return 36;
  //   } else {
  //     return 28;
  //   }
  // });

  // const [previousWidth, setPreviousWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 1440) {
  //       setFontSize(120);
  //     } else if (window.innerWidth <= 1440 && window.innerWidth > 1024) {
  //       setFontSize(86);
  //     } else if (window.innerWidth <= 1024 && window.innerWidth > 852) {
  //       setFontSize(64);
  //     } else if (window.innerWidth <= 852 && window.innerWidth > 480) {
  //       setFontSize(36);
  //     } else {
  //       setFontSize(28);
  //     }

  //     const currentWidth = window.innerWidth;

  //     if (
  //       (previousWidth > 1440 && currentWidth <= 1440) ||
  //       (previousWidth <= 1440 && currentWidth > 1440) ||
  //       (previousWidth <= 1024 && currentWidth > 1024) ||
  //       (previousWidth > 1024 && currentWidth <= 1024)
  //     ) {
  //       window.location.reload();
  //     }
  
  //     setPreviousWidth(currentWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className='app' style={bodyStyle}>
      <Helmet>
        <meta property="og:title" content="Daniel Garcia | Digital Creator" />
        <meta property="og:description" content="Daniel Garcia is a passionate digital creator." />
        <meta property="og:image" content="./assets/open-graph.webp" />
        <meta property="og:url" content="https://aaronsproject.net/" />
      </Helmet>

      <nav>
        <ul className='nav-links' onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
          <li className='nav-link-item'>
            <button 
            style={navState.portfolio || navState.references || navState.contact ? inactiveBtnStyle : undefined} 
            className={'nav-button about-button'} 
            onClick={(e) => handleNav(e)}>
              About {navState.about ? '–' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            style={navState.about || navState.references || navState.contact ? inactiveBtnStyle : undefined} 
            className={'nav-button portfolio-button'} 
            onClick={(e) => handleNav(e)}>
              Portfolio {navState.portfolio ? '–' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            style={navState.about || navState.portfolio || navState.contact ? inactiveBtnStyle : undefined} 
            className={'nav-button references-button'} 
            onClick={(e) => handleNav(e)}>
              References {navState.references ? '–' : '+'}
            </button>
          </li>
        </ul>
        <button 
          style={navState.about || navState.portfolio || navState.references ? inactiveBtnStyle : undefined}
          className={'nav-button contact-button'}
          onMouseEnter={() => setShowMouseDiv(false)} 
          onMouseLeave={() => setShowMouseDiv(true)}
          onClick={(e) => handleNav(e)}>
            Contact {navState.contact ? '–' : '+'}
        </button>
        <ul className={navState.nav ? 'nav-links-mobile nav-links-mobile-active' : 'nav-links-mobile'} onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
          <li className='nav-link-item'>
            <button 
            className={'nav-button about-button'} 
            onClick={(e) => {
              handleNav(e)
            }}>
              About {navState.about ? '–' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            className={'nav-button portfolio-button'} 
            onClick={(e) => {
              handleNav(e)
            }}>
              Portfolio {navState.portfolio ? '–' : '+'}
            </button>
          </li>
          <li className='nav-link-item'>
            <button 
            className={'nav-button contact-button'} 
            onClick={(e) => {
              handleNav(e)
            }}>              Contact {navState.contact ? '–' : '+'}
            </button>
          </li>
        </ul>
      </nav>

      {navState.about && <About setShowMouseDiv={setShowMouseDiv} />}
      {navState.portfolio && <Portfolio setShowMouseDiv={setShowMouseDiv} />}
      {navState.references && <References setShowMouseDiv={setShowMouseDiv} />}
      {navState.contact && <Contact setShowMouseDiv={setShowMouseDiv} />}

      <h1 className='a11y'>Embracing trends. Setting the creative standard. Always leaving an impact.</h1>

      <aside className={navState.nav ? "hero-text-simple hero-text-simple-active" : 'hero-text-simple'}>
        <h1>
          Embracing Trends<br/>
          Setting the Creative Standard<br/>
          Always Leaving an Impact
        </h1>
      </aside>

        {/* Distortion Text */}
      {/* <aside className={navState.nav ? "hero-text hero-text-active" : "hero-text"}> */}
        {/* <DistortionText text="Embracing Trends." id="fun-text-1"
          fill={'black'}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fontSize={window.innerWidth < 480 ? 28 : 48}
          speed={0.2} // How quickly you want the waves to move.
          rotation={5} // Controls direction of waves across the text. i.e. < 10 = Vertical && 50 = Horizontal
            //  spread={0.025} // Not listed in NPM. Listed in Original Blotter Docs. 
            //  count={2} // Not listed in NPM. I'm guessing with the prop name.
          distortX={0}
          distortY={0}
          noiseAmplitude={0.009} // Control X-Axis. Higher integer = greater horizontal movement. i.e. 0.004
          noiseVolatility={12} // The higher, the fuzzier the text becomes i.e. 50
          /><br />  */}

          {/* <DistortionText text="Embracing Trends." id="fun-text-1"
          fill={'black'}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fontSize={fontSize}
          speed={0.2} // How quickly you want the waves to move.
          rotation={45} // Degree of which way the wave goes. 90eg is left to right. 0 is bottom to top.
          distortX={120}
          distortY={120}
          noiseAmplitude={0.009} // Control X-Axis. Higher integer = greater horizontal movement. i.e. 0.004
          noiseVolatility={12} // The higher, the fuzzier the text becomes i.e. 50
          />

          <DistortionText text="Setting the Creative Standard." id="fun-text-2"
          fill={'black'}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fontSize={fontSize}
          speed={0.2}
          rotation={45}
          distortX={120}
          distortY={120}
          noiseAmplitude={0.009}
          noiseVolatility={12}/>

          <DistortionText text="Always Leaving an Impact." id="fun-text-3"
          fill={'black'}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fontSize={fontSize}
          speed={0.2}
          rotation={45}
          distortX={120}
          distortY={120}
          noiseAmplitude={0.009}
          noiseVolatility={12}
          get2dContext={ctx => console.log(ctx)}
          /> */}
      {/* </aside> */}

        {/* Split Color Channel */}
      {/* <aside className={navState.nav ? "hero-text hero-text-active" : "hero-text"}>
        <SplitColorChannelText text="Embracing trends" id="fun-text-1"
          fill={'black'}
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          rotation={45}
          rgbOffset={0.05}
          addBlur={true}
          addNoise={true}
        /><br/>
        <SplitColorChannelText text="Setting the Creative Standard" id="fun-text-2"
          fill={'black'}
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          rotation={45}
          rgbOffset={0.05}
          addBlur={true}
          addNoise={true}
        /><br/>
        <SplitColorChannelText text="Always Leaving an Impact" id="fun-text-3"
          fill={'black'}
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          rotation={45}
          rgbOffset={0.05}
          addBlur={true}
          addNoise={true}
        /><br/>
      </aside> */}

        {/* Flies Text */}
      {/* <aside className={navState.nav ? "hero-text hero-text-active" : "hero-text"}>
        <FliesText text="Embracing Trends." id="fun-text-1"
          fill='black'
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily="Sans-serif"
          fontWeight={100}
          cellRadius={window.innerWidth < 480 ? 1 : 2}
          cellWidth={0.025}
          speed={4}
          dodge={true}
          dodgeY={0.02}
          dodgeSpread={0.02}
        /><br/>
        <FliesText text="Setting the Creative Standard." id="fun-text-2"
          fill='black'
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily="Sans-serif"
          fontWeight={100}
          cellRadius={window.innerWidth < 480 ? 1 : 2}
          cellWidth={0.025}
          speed={4}
          dodge={true}
          dodgeY={0.02}
          dodgeSpread={0.02}
        /><br/>
        <FliesText text="Always Leaving an Impact." id="fun-text-3"
          fill='black'
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily="Sans-serif"
          fontWeight={100}
          cellRadius={window.innerWidth < 480 ? 1 : 2}
          cellWidth={0.025}
          speed={4}
          dodge={true}
          dodgeY={0.02}
          dodgeSpread={0.02}
        />
      </aside> */}

        {/* Liquid Distorion Text */}
      {/* <aside className={navState.nav ? "hero-text hero-text-active" : "hero-text"}>
        <LiquidDistortionText text="Embracing Trends" id="fun-text-1"
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fill={'black'}
          speed={0.08}
          volatility={0.04}
        /><br/>
        <LiquidDistortionText text="Setting the Creative Standard" id="fun-text-2"
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fill={'black'}
          speed={0.08}
          volatility={0.04}
        /><br/>
        <LiquidDistortionText text="Always Leaving an Impact" id="fun-text-3"
          fontSize={window.innerWidth < 480 ? 28 : 48}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fill={'black'}
          speed={0.08}
          volatility={0.04}
        />
      </aside> */}

      <figure className='logo-container'>
        <img src={logo} alt="Logo" />
      </figure>

      {navState.nav && showMouseDiv && <MouseDiv />}
    </div>
  )
}

export default App
