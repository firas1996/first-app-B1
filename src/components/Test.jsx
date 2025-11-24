const Test = ({ txt, getAbc }) => {
  let abc = 123;
  getAbc(abc);
  return <h1>Hello {txt}</h1>;
};

export default Test;
