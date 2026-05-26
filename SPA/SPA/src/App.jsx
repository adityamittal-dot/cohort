// import './App.css'
// import React from 'react';
// import {useState} from 'react'
// // import { BrowserRouter, Routes, Route} from 'react-router-dom';


// // function App(){
// //   return <div>
// //     <BrowserRouter>
// //     <Routes>
// //       <Route path="/neet/online-coaching-class-11" element={<Class11th/>}/>
// //       <Route path ="/" element={<Landing/>}/>
// //     </Routes>
// //     </BrowserRouter>

// //   </div>
// // }
// // function Landing(){
// //   return <div>
// //     this is the page where u land!
// //   </div>
// // }

// // function Class11th(){
// //   return <div>
// //     this is for class 11th 
// //   </div>
// // }

// // export default App;
// import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";
// import { counterAtom } from './store/atoms/counter';

// function App(){
//   return (
//     <RecoilRoot>
//       <Counter/>
//     </RecoilRoot>  
//   ) 
// }

// function Counter(){
//   return <div>
//     <currentCount/>
//     <Increment />
//     <Decrement />

//   </div>
// }

// function currentCount(){

//   const count = useRecoilValue(counterAtom);

//   return <div>
//     {count}
//   </div>
// }

// function Increment(){

//   const setCount = useSetRecoilState(counterAtom);
//   function increase(){
//     setCount(c=>c+1);
//   }
//   return <div>
//     <button onClick={increase}>Increment</button>
//   </div>
// }

// function Decrement(){

//   const setCount = useSetRecoilState(counterAtom);

//   function decrease(){
//     setCount(c => c-1);
//   }
//   return <div>
//     <button onClick={decrease}>Decrement</button>
//   </div>
// }

// export default App

import {atom} from 'recoil';

function App(){
  return <div>
    <button>home</button>
    <button>MyNetwork ()</button>
    <button>Job ()</button>
    <button>Messaging ()</button>
    <button>Notification ()</button>
    <button>Me </button>
  </div>
}

export default App