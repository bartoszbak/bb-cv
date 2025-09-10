import { useState } from "react";
import styles from "./Header.module.css";
import FlutedAvatar from "../FlutedAvatar/FlutedAvatar";


function Header() {
  const [isActive, setIsActive] = useState(true); // Or false, depending on the initial state you want

  return (
    <header className={styles.header}>
      {/* <div className={styles.avatar} data-avatar></div> */}



      <FlutedAvatar style={{height: 124, width: 124, borderRadius: '50%'}}
          className={styles.avatarX}
          active={isActive}
          image="/assets/bb-c.jpg"
          numOfPanes={32}
          paneSize={100}
          blurAmount={3}
          stretchPercentage={82}
          animationMs={400}
          paneJustify="end"
          onMouseEnter={() => setIsActive(false)} onMouseLeave={() => setIsActive(true)}
      > </FlutedAvatar>


      <div className="details">
        <h1>Bart Bak</h1>
        <h2>Design Engineer</h2>
        <h3>Currently: Beeper/A8C</h3>
        <h3>Previously: Tumblr, WEF, June, Origin</h3>
        <h3>Consistently improving</h3>
      </div>

    </header>
  )
}

export default Header