import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="maintenance-container">
      <div className="maintenance-card">
        <div className="gear-animation">
          <div className="gear"></div>
          <div className="gear small"></div>
        </div>
        <h1>We'll Be Back Soon</h1>
        <p>
          Our site is currently undergoing scheduled maintenance.
          <br />
          We’ll be back online shortly!
        </p>
        <p className="footer-text">Thank you for your patience 💙</p>
      </div>
    </div>
  );
}

export default App;
