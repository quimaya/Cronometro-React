import { useState, useEffect } from 'react'


import React from 'react'

const Reloj = () => {
  const [clockState, setClockState] = useState()

  useEffect(() => {
    setInterval(() => {
    const date = new Date()
    setClockState(date.toLocaleTimeString())
  }, 1000)
  }, [])
  // La constante date recoge la info de la hora local a través del método date.tolocaltimestring. 
  // El valor recogido será el que se aplique a clockState mediante setClockState cada 1 seg (1.000 mili segundos)

  return (

    <div className="reloj-digital">
      <h2>{clockState}</h2>


    </div>

  )
}

export default Reloj