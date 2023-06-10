type ContentProps = {
  setShowMouseDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact = ({ setShowMouseDiv }: ContentProps) => {
  return (
    <div className="panel contact-panel">
        <div className="content about-content-paragraph" onMouseEnter={() => setShowMouseDiv(false)} onMouseLeave={() => setShowMouseDiv(true)}>
            <p>After being a passionate cretaive for almost a decade, I have worked with many notable companies on amazing projects around the world.</p>
            <br />
            <p>My goal in life is to always be embracing trends, setting the creative standard, and always leaving an impact.</p>
        </div>
    </div>
  )
}

export default Contact