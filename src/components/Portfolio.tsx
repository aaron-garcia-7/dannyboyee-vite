import portfolioData from "../data/portfolioData"
// import video1 from '../assets/joinsunder.mp4';


type ContentProps = {
    showMouseDiv?: boolean;
    setShowMouseDiv: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Portfolio: React.FC<ContentProps> = ({ setShowMouseDiv }) => {
    const data = portfolioData.map((obj, index) => (
        <li key={index}>
            <h1>Test Branch 1</h1>
            <span className="index-name">
              <span className="index">{`0${index + 1}`}</span>
              {obj.name}
            </span>
            <span className="project-year">{obj.year}</span>
        </li>
    ))

  return (
    <div className="panel portfolio-panel">
        <div 
          className="content content-paragraph" 
          onMouseEnter={() => setShowMouseDiv(false)} 
          onMouseLeave={() => setShowMouseDiv(true)}
        >
            <ol>
                {data}
            </ol>
        </div>
        {/* {videos} */}
        {/* <div className="video-wrapper">
          <video src={video1} autoPlay loop></video>
        </div> */}
    </div>
  )
}

export default Portfolio