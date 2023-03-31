import { useState } from "react";



export const UseEffect = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        Aumentar
      </button>
    </div>
  );
};
