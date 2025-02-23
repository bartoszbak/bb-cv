import { useEffect, useRef } from "react";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Background from './component/Background/Background';


import "./styles/global.css";

function Home() {

  // 100vh height fix on mobile
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

  let updateBackgroundRef = useRef(null);

  return (
    <div className="bb">

      {/* <button className="changeGradinet" onClick={() => {
        if (updateBackgroundRef.current) {
          updateBackgroundRef.current(); // Calls the function stored in ref
        }}}><div className="color" data-color></div>
      </button> */}

      <Background onUpdate={(updateFunc) => {
        updateBackgroundRef.current = updateFunc;
      }} />
      
      <Header /> 
      <Footer /> 
    </div>
  );
}

export default Home