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

import {useEffect, useState} from "react";

function App(){
  const [count, setCount] = useState(1);

  function increment(){
    setCount[c => c + 1];
  }

  useEffect( function() {
    setInterval(increment, 1000);
  }, [])

  return <div>
    {count}
  </div>
}