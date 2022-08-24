import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState("");
  
  useEffect(() => {

      let countDownDate = new Date("Jan 31, 2019 00:00:00").getTime();
      let x = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
          
          //que nos avise si la cuenta atrás llega al final
          if (distance < 0) {
            clearInterval(x);
            setTime("Cuenta atrás terminada");
          }
      },1000)
  }, []);

  return <div className="countdown">
    <h2>{time}</h2>
    
  </div>;
};

export default Countdown;