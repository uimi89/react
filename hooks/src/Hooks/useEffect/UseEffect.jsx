import { useState, useEffect } from "react";



export const UseEffect = () => {
  const [value, setValue] = useState(0);

  const saludo = () => {
    console.log('Hola desde mi función saludo')
  }
  
  saludo()

  useEffect(()=>{
    console.log('Hola desde mi UseEffect')
  }, []) 

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        Aumentar
      </button>
    </div>
  );
};
