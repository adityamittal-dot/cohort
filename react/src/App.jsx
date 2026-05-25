// import { useState } from "react";
// import { PostComponent } from "./post";

// function App(){

//   const[post, setPost] = useState([]);

//   const postComponents = post.map((p, index) => <PostComponent
//     key={index}
//     name={p.name}
//     subtitle={p.subtitle}
//     time={p.time}
//     image={p.image}
//     description={p.description}
//   />)

//   // originally it was array of objects then we converted it to an array of objects and passed it into postComponents
//   //this is how to render a bunch of array of objects to seperate components

//   function addPost(){
//     setPost([...post, {
//       name: "aditya",
//       subtitle: "how to grow",
//       time: "2m ago",
//       image: "",
//       description: "howwwwwwww tooooooooo growwwwwww"
//     }

//     ])
//   }

//   return (
//     <div style={{background: '#dfe6e9', height: "100vh"}}>
//       <button onClick={addPost}> ADD POST </button>
//       <div style={{display: "flex", justifyContent: "center"}}>
//         <div>
//           {postComponents}
//         </div>
//       </div>
//     </div>
//   )

// }

// export default App;

// import {useEffect, useState} from "react";

// function App(){
//   const [count, setCount] = useState(1);

//   function increment(){
//     setCount[c => c + 1];
//   }

//   useEffect( function() { // this effect run this logic only once on mount
//     setInterval(increment, 1000);
//   }, [])

//   useEffect( function() {
//     setInterval(increment, 1000); // if the object in dependency array changes or updates, this useeffect will run 
//   }, [count]);

//   return <div>
//     {count}
//   </div>
// }

// function App(){
//   return <div style={{display: "flex"}}>
//     <Card>
//       high there!
//     </Card>
//     <Card>
//       <div style={{color: "cyan"}}>
//         what do you want?
//         <input type={"text"}/>
//       </div>
//     </Card>
//   </div>
// }

// function Card({children}){
//   return <div style={{background: 'red', color:'white', borderRadius: 10, padding: 10, margin: 10}}>
//     {children}

//   </div>
// }

// export default App

import React from 'react';

const App = () => {
  const todos = [{
    title: "go to gym",
    done: false
  }, {
    title: "go to school",
    done: true
  }];

  const todoCompo = todos.map(todos => <Todos title={todos.title} done={todos.done} />)

  return <div>
    {todoCompo}
  </div>
};

function Todos({title, done}){
  return <div>
    {title} - {done ? "done" : "not done"}
  </div>
}

export default App;