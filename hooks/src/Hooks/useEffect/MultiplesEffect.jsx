import { useState, useEffect } from "react";



export const MultiplesEffect = () => {
    const [value, setValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    useEffect(()=>{
        console.log('Hola desde mi UseEffect')
    }, [value]) 
    
    useEffect(() => {
        console.log('Hola desde mi segundo useEffect')
    }, [secondValue])
    

    return (
    <div>
        <h1>Primer valor: {value}</h1>
        <button onClick={() => setValue(value + 1)} className="btn">
            Primer botón
        </button>

        <h1>Segundo valor: {secondValue}</h1>
        <button onClick={() => setSecondValue(secondValue + 1)} className="btn">
            Segundo botón
        </button>
    </div>
    );
};
