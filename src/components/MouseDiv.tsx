import { useState, useEffect } from "react"
import { DistortionText } from 'react-text-fun';

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
    // <div style={mouseStyle} className="mouse-div">Close ✕</div>
    <div style={mouseStyle} className="mouse-div">
        <DistortionText text="Close ✕"
          fill={'white'}
          fontFamily={"Sans-serif"}
          fontWeight={100}
          fontSize={window.innerWidth <= 1440 ? 128 : 86}
          speed={1.6} // How quickly you want the waves to move.
          rotation={90} // Degree of which way the wave goes. 90eg is left to right. 0 is bottom to top.
          distortX={120}
          distortY={120}
          noiseAmplitude={0.2} // Higher integer = greater horizontal movement. i.e. 0.004
          noiseVolatility={2} // The higher, the fuzzier the text becomes i.e. 50
          />
    </div>
  )
}

export default MouseDiv