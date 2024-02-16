import React from 'react'

function Button({color,click}) {
    return (
        <>
        <button
        className=' border-2 rounded-md p-2 w-[80px] text-white'
        style={{
            backgroundColor: color
        }}
        onClick={() => click(color)}
        >{color}</button>
        </>
    )
}

export default Button