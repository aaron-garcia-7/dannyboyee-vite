const UnorderedList = (props: any) => {
  let list1 = props.list1.map((str: string, index: number) => <li key={index}>{str}</li>);
  let list2 = props.list2.map((str: string, index: number) => <li key={index}>{str}</li>);

  return (
    <div className="content content-list" onMouseEnter={() => props.setShowMouseDiv(false)} onMouseLeave={() => props.setShowMouseDiv(true)}>
        <h2 className="content-title">{props.title}</h2>
        <ul className="content-list-1">{list1}</ul>
        <ul className="content-list-2">{list2}</ul>
    </div>
  )
}

export default UnorderedList