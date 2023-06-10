import { useState, useEffect } from "react"

const MouseDiv = () => {

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const locateMouse = (e: MouseEvent) => {
    setPosX(e.pageX);
    setPosY(e.pageY);
  }

  useEffect(() => {
    window.addEventListener('mousemove', locateMouse);

    return () => window.removeEventListener('mousemove', locateMouse);
  }, [])

  const mouseStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
  }

  return (  
    <div style={mouseStyle} className="mouse-div">Close ✕</div>
  )
}

export default MouseDiv