import Test from "./components/Test";

const App = () => {
  let myName = "Firas";
  let aaa;
  const getAbc = (abc) => {
    aaa = abc;
    console.log(aaa);
  };
  return (
    <>
      <Test txt={myName} getAbc={getAbc} />
      {aaa}
    </>
  );
};
export default App;
