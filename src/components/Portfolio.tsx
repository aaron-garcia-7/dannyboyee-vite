import portfolioData from "../data/portfolioData"

type ContentProps = {
    showMouseDiv?: boolean;
    setShowMouseDiv: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Portfolio: React.FC<ContentProps> = ({ setShowMouseDiv }) => {
    const data = portfolioData.map((obj, index) => (
        <li key={index}>
          <div className="text-data">
            <span className="index-name">
              <span className="index">{`0${index + 1}`}</span>
              {obj.name}
            </span>
            <span className="project-year">{obj.year}</span>
          </div>
          <div className="video-data">
            <video src={obj.video} autoPlay loop></video>
          </div>
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