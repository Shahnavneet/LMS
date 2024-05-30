import Component2 from "./Component2";
import { createContext, useCallback, useState } from "react";

const Func = createContext();

const Component1 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const Incr = useCallback(() => setValue2((value2) => value2 + 1), []);

  const pop = () => {
    confirm("This code is running");
  };

  return (
    <>
      <Func.Provider value={pop}>
        <div>
          <h2>{value1}</h2>
          <button
            onClick={() => {
              setValue1((value1) => value1 + 1);
            }}
          >
            Increase
          </button>

          <h2>{value2}</h2>
          <Component2 func={Incr} />
        </div>
      </Func.Provider>
    </>
  );
};
export default Component1;
export { Func };
