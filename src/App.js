// import Hello from "./components/Hello";
// import World from "./components/World";
// const App = () => {
//   // Javascript
//   // const hai = "hello world"
//   return (
//     /* JSX */
//     // div adalah parent element
//     // <></> disebut fragment
//     // h1 memanggil hello didalam Javascript
//     <>
//     {/* <h1>{hai}</h1> */}
//       <Hello text="Hello 1" number={20}/>
//       <Hello text="Hello 2" number={30}/>
//       <World />
//     </>
//   );
// };

// export default App;

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Header text="Header using pull" />
      <Footer text="Footer using" />
    </>
  );
};

export default App;
