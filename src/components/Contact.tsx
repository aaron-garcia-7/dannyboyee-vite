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
                <a href="https://www.instagram.com/danielgarciacreative/">Instagram</a> <a href="https://www.linkedin.com/in/dannyboyee/">LinkedIn</a>
              </p>
            </div>
            <div className="contact-content-block">
              <p className="contact-content-method">Developed By</p>
              <p className="contact-content-results">
                <a href="https://aarongarciacreative.com/" target="_blannk">Aaron Garcia</a>
              </p>
            </div>
        </div>
    </div>
  )
}

export default Contact