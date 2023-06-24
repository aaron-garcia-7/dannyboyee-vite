type ContentProps = {
  setShowMouseDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact = ({ setShowMouseDiv }: ContentProps) => {
  return (
    <div className="panel contact-panel">
        <div className="content contact-content" onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
            <div className="contact-content-block">
              <p className="contact-content-method">Details</p>
              <p className="contact-content-results">Contact: Daniel Garcia <br /><a href="mailto:dancrx555@gmail.com">dancrx555@gmail.com</a></p>
            </div>
            <div className="contact-content-block">
              <p className="contact-content-method">Social</p>
              <p className="contact-content-results">
                <a href="https://www.instagram.com/danielgarciacreative/">Instagram</a>, <a href="https://www.linkedin.com/in/dannyboyee/">LinkedIn</a>
              </p>
            </div>

            {window.innerWidth < 852 && <div className="contact-content-block">
              <p className="contact-content-method">References</p>
              <p className="contact-content-results"><span className="reference-name"> Aaron Garcia </span><span className="reference-company"> UI Developer @ RainFocus</span></p>
              <p className="contact-content-results"><span className="reference-name"> Kc Sosa </span><span className="reference-company"> Copywriter @ BonCom</span></p>
              <p className="contact-content-results"><span className="reference-name"> Max Britton </span><span className="reference-company"> CEO @ Sunder Energy</span></p>
              <p className="contact-content-results"><span className="reference-name"> Jessie Dent </span><span className="reference-company"> Product Manager @ iFIT</span></p>
            </div>}

            <div className="contact-content-block">
              <p className="contact-content-method">Developed By</p>
              <p className="contact-content-results">
                <a href="https://aarongarciacreative.com/" target="_blank">Aaron Garcia</a>
              </p>
            </div>
        </div>
    </div>
  )
}

export default Contact