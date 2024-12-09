import './App.css'
import './Button'

function App() {

  // function handleClick(){
  //   alert("BUTTON CLIECKED");
  // }

  const handleClick = () =>{
    alert('Submit 2')
  }

  function handleClick2() {
    alert("Click 2")
  }

  const addToFive = (num) => {
    alert(num+100);
  }

  return (
    <>
      <h1> React Core Concept Part-2</h1>
      {/* <button onClick={handleClick}> SUBMIT</button> */}

      <button onClick={handleClick}> Submit 2</button>

      <button onClick={handleClick2}>Button 2</button>

      <button onClick={() => {alert('Third Click')}}>Third</button>

      {/* <button onClick={addToFive(3)}>Button Four</button> */}
      {/* bajailla function and wrap the function */}

      <button onClick={() => addToFive(3)}>Button Four</button>
    </>
  )
}

export default App
