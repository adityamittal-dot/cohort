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

import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';
import { networkAtom, jobAtom, notificationAtom, messagingAtom } from './atoms';

function App(){
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobNotificationCount = useRecoilValue(jobAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)


  return <div>
    <button>home</button>
    <button>MyNetwork ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Job ({jobNotificationCount})</button>
    <button>Messaging ({messagingCount})</button>
    <button>Notification ({notificationCount})</button>
    <button onClick={() => {
      setMessagingCount(c => c+1);
    }}>Me </button>
  </div>
}

export default App