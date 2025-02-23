import { useEffect, useRef } from "react";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Background from './component/Background/Background';


import "./styles/global.css";

function Home() {

  // 100vh height fix
  useEffect(() => {
    const setDocHeight = () => 
      document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  
    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);
  
    setDocHeight(); // Call once on mount
  
    return () => {
      window.removeEventListener('resize', setDocHeight);
      window.removeEventListener('orientationchange', setDocHeight);
    };
  }, []);

  const backgroundRef = useRef(null);
  
  return (
    <div className="bb">
        {/* <button className='changeGradinet' onClick={() => backgroundRef.current?.regenerate()}>
          <div className="color" data-color></div>
        </button> */}
        <Background ref={backgroundRef}/>
        <Header /> 
        <Footer /> 
    </div>
  )
}

export default Home
