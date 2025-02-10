import { useState } from 'react'

const Counter_App = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => setCounter(counter + 1);

    const handleDecrement = () => setCounter(counter - 1);

  return (
    <div>
      <p>
        To increment the value press here : 
        <button style={{backgroundColor: "green", color: "black", borderRadius: "2px solid black"}} onClick={handleIncrement}>Increment</button> 
        <span style={{marginLeft: "20px", fontSize: "20px"}}>{counter}</span>
      </p>
      <hr />
      <p>
        To decrement the value press here : 
        <button style={{backgroundColor: "red", color: "black", borderRadius: "2px solid black"}} onClick={handleDecrement}>Decrement</button> 
        <span style={{marginLeft: "20px", fontSize: "20px"}}>{counter}</span>
      </p>
      
    </div>
  )
}

export default Counter_App
