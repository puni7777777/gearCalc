import React, { useState } from 'react'
import './gearcalc.css'

export default function Gearcalc() {

  const [noofteeth, setNoofteeth] = useState();
  const [module, setModule] = useState();
  const [pressure, setPressure] = useState();
  const [pitchDia, setPitchDia] = useState('_');

  const calc = () => {
    setPitchDia(noofteeth * module);
  }

  return (
    <div className="wholecalc">
      <div className="inputs">
        <div className="teeth com">
          <label>Number of Teeth*</label>
          <input type="" placeholder='Number of Teeth' onChange={(e) => setNoofteeth(parseInt(e.target.value))} />
        </div>
        <div className="module com">
          <label>Module*</label>
          <input type="" placeholder='Module' onChange={(e) => setModule(e.target.value)} />
        </div>
        <div className="pressure com">
          <label>Pressure Angle*</label>
          <input type="" placeholder='Pressure angle (Degrees)' onChange={(e) => setPressure(e.target.value)} />
        </div>
      </div>
      <div className="calcbtn">
        <button onClick={calc}>Calculate</button>
      </div>
      <h5>Pitch Dia : {pitchDia}</h5>
    </div>
  )
}
