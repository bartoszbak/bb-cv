import Header from './component/header/Header';
import Footer from './component/Footer/Footer';
import Background from './component/Background/Background';
import { useRef } from "react";

import "./styles/global.css";

function Home() {

  const backgroundRef = useRef(null);
  
  return (
    <div className="bb">
        <button className='changeGradinet' onClick={() => backgroundRef.current?.regenerate()}>
          <div className="color" data-color></div>
        </button>
        <Background ref={backgroundRef}/>
        <Header /> 
        <Footer /> 
    </div>
  )
}

export default Home
