import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [color, setColor] = useState("");


  const handleClick = (clr)=>{
    console.log("click",clr);
    setColor(clr)
  }
  return (
    <>
      <div
        className=' h-screen w-screen'
        style={
          {
            backgroundColor: color
          }
        }
      >
        <h1 className='text-center text-3xl text-black p-3'>backgroundColor changer</h1>
        <div className=' bg-white fixed bottom-7 w-[100%] p-2 flex justify-center gap-3  rounded-2xl'>
        <Button color={"red"} click={handleClick} />
        <Button color={"green"} click={handleClick} />
        <Button color={"blue"} click={handleClick} />
        <Button color={"grey"} click={handleClick} />
        <Button color={"olive"} click={handleClick} />
        </div>
      </div>
    </>
  )
}

export default App;