import UnorderedList from "./UnorderedList"
import { servicesData, collaboratorsData } from "../data/aboutData"
import portraitImg from '../assets/portrait.webp'
import portraitImg2 from '../assets/portrait2.webp'

type ContentProps = {
  showMouseDiv?: boolean;
  setShowMouseDiv: React.Dispatch<React.SetStateAction<boolean>>;
}


const About = ({ setShowMouseDiv }: ContentProps) => {
  return (
    <div className="panel about-panel">
        <div className="content about-content-paragraph" onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
            <p>Hi, I&rsquo;m Daniel. <br/>I&rsquo;m a husband, father, entrepreneur, and creative director. I&rsquo;ve worked in the creative industry for the past 10 years, honing my talents in all creative mediums. I specialize in doing whatever it takes to help companies legitimize themselves (a.k.a making you look cool). I do this by establishing your brand and its aesthetic, upgrading your imagery, taking your website/messaging to the next level, and providing a marketing stragety that&rsquo;s tailored to your needs. Not just now, but FOREVER.</p>
            <br />
            <p>My goal in life is to always be embracing trends, setting the creative standard, and always leaving an impact.</p>
        </div>
        <UnorderedList {...servicesData} setShowMouseDiv={setShowMouseDiv}/>
        <UnorderedList {...collaboratorsData} setShowMouseDiv={setShowMouseDiv}/>
        <div className="about-panel-portrait-container">
          <figure className="about-panel-portrait">
              <img src={portraitImg} alt="A close up shot of Daniel Garcia in a light colored sweater" />
          </figure>
          <figure className="about-panel-portrait">
              <img src={portraitImg2} alt="Daniel walking in the city looking upward." />
          </figure>
        </div>
    </div>
  )
}

export default About