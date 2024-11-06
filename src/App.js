// import { useState } from "react";
// import Hello from "./components/Hello";
// import World from "./components/World";
// import Users from "./components/Users";

// // hook merubah component menjadi functional component

// const App = () => {
//   // Javascript
//   // variable biasa
//   // let hai = "hello world"

//   // let hello = "Selamat Datang";
//   // variable state
//   const [hello, setHello] = useState("Selamat Datang");

//   const handleClick = () => {
//     // hello = "Welcome"l
//     setHello("Welcome");
//     console.log(hello);
//   };

//   return (
//     /* JSX */
//     // div adalah parent element
//     // <></> disebut fragment
//     // h1 memanggil hello didalam Javascript
//     <>
//       <h1>{hello}</h1>
//       <h2>Hello React</h2>
//       <Hello text="Hello 1" number={20} />
//       <Hello text="Hello 2" number={30} />
//       <World />
//       <Users />
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// };

// export default App;

import Header from './component/Header/index.js';
import Hero from './component/Hero/index.js';
import Clients from './component/Clients/index.js';
import Features from './component/Features/index.js';
import Pricing from './component/Pricing/index.js';
import Footer from './component/Footer/index.js';

const App = () => {
  return (
  <div className="body-wrap">
    <Header />
    <main className="site-content">
    <Hero />
    <Clients />
    <Features />
    <Pricing />
    </main>
    <Footer />
  </div>
  )
};
export default App;


