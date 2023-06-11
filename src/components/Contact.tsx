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
              <p className="contact-content-results"><a href="#">Instagram</a> <a href="#">LinkedIn</a></p>
            </div>
        </div>
    </div>
  )
}

export default Contact