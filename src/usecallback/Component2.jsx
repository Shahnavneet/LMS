import Component3 from "./Component3";
const Component2 = ({ func }) => {
  return (
    <>
      <div>
        <button onClick={func}>Increase</button>
        <Component3 />
      </div>
    </>
  );
};
export default Component2;
