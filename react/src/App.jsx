function app(){
  return(
    <div>
      <h1>hello world</h1>
    </div>
  )
}

const toggleMessage = () => {
  let [isVisible, setIsVisible] = useState(true);

  function handleToggle(){
    setIsVisible(!isVisible);
  }
  return ( <div>
    <button onClick={handleToggle}>Toggle</button>
    {isVisible ? <p>Hello World</p> : null}
  </div>
  );

  
}

export default app; 