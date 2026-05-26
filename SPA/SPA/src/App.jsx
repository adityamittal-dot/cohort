import './App.css'
// import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';


// function App(){
//   return <div>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/neet/online-coaching-class-11" element={<Class11th/>}/>
//       <Route path ="/" element={<Landing/>}/>
//     </Routes>
//     </BrowserRouter>

//   </div>
// }
// function Landing(){
//   return <div>
//     this is the page where u land!
//   </div>
// }

// function Class11th(){
//   return <div>
//     this is for class 11th 
//   </div>
// }

// export default App;

function App(){
  return (
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count , setCount] = useState(0);
  return <div>
    {count}
    <Increment setCount={setCount}/>
    <Decrement setCount={setCount}/>

  </div>
}

function Increment({setCount}){

  function increase(){
    setCount(c=>c+1);
  }
  return <div>
    <button onClick={increase}>Increment</button>
  </div>
}

function Decrement({setCount}){

  function decrease(){
    setCount(c => c-1);
  }
  return <div>
    <button onClick={decrease}>Decrement</button>
  </div>
}

export default App
