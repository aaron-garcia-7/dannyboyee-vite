type ContentProps = {
  showMouseDiv?: boolean;
  setShowMouseDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

const References = ({ setShowMouseDiv }: ContentProps) => {
  return (
    <div className="panel references-panel">
        <div className="content content-paragraph"           
          onMouseEnter={() => setShowMouseDiv(false)} 
          onMouseLeave={() => setShowMouseDiv(true)}>
            <p className="reference"><span className="reference-name"> Aaron Garcia </span><span className="reference-company"> UI Developer @ RainFocus</span></p>
            <p className="reference"><span className="reference-name"> Kc Sosa </span><span className="reference-company"> Copywriter @ BonCom</span></p>
            <p className="reference"><span className="reference-name"> Max Britton </span><span className="reference-company"> CEO @ Sunder Energy</span></p>
            <p className="reference"><span className="reference-name"> Jessie Dent </span><span className="reference-company"> Product Manager @ iFIT</span></p>
        </div>
    </div>
  )
}

export default References