import { useContext } from "react";
import { Func } from "./Component1";
const Component3 = () => {
  const Pop = useContext(Func);
  return (
    <>
      <div>
        <h2>My name is </h2>
        <button onClick={Pop}>CHECK</button>
      </div>
    </>
  );
};
export default Component3;
