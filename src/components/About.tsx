import UnorderedList from "./UnorderedList"
import { servicesData, collaboratorsData } from "../data/aboutData"
import portraitImg from '../assets/portrait.webp'

type ContentProps = {
  showMouseDiv?: boolean;
  setShowMouseDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

const About = ({ setShowMouseDiv }: ContentProps) => {
  return (
    <div className="panel about-panel">
        <div className="content about-content-paragraph" onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
            <p>After being a passionate cretaive for almost a decade, I have worked with many notable companies on amazing projects around the world.</p>
            <br />
            <p>My goal in life is to always be embracing trends, setting the creative standard, and always leaving an impact.</p>
        </div>
        <UnorderedList {...servicesData} setShowMouseDiv={setShowMouseDiv}/>
        <UnorderedList {...collaboratorsData} setShowMouseDiv={setShowMouseDiv}/>
        <figure className="about-panel-portrait">
            <img src={portraitImg} alt="A close up shot of Daniel Garcia in a light colored sweater" />
        </figure>
    </div>
  )
}

export default About