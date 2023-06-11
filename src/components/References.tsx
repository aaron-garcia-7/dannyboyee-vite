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
            <p>References Content Here:</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure explicabo doloribus, obcaecati hic, mollitia dolorem veniam culpa nesciunt dolore, ad autem veritatis a repellendus reiciendis exercitationem delectus iusto.</p>
        </div>
    </div>
  )
}

export default References