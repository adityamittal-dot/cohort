import { postComponent } from "./post";

function App(){

  const[post, setPost] = useState([]);

  const postComponent = post.map(post => <postComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  // originally it was array of objects then we converted it to an array of objects and passed it into postComponents
  //this is how to render a bunch of array of objects to seperate components

  function addPost(){

  }

  return (
    <div style={{background: '#dfe6e9', height: "100vh"}}>
      <button onClick={addPost}> ADD POST </button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
  )

}

export default App;